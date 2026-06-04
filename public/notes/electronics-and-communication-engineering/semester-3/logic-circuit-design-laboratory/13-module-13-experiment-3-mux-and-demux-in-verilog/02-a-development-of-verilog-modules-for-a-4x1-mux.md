---
title: "(a) Development of verilog modules for a 4x1 MUX."
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 13: Experiment 3: Mux and Demux in Verilog"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe45c"
status: "completed"
scrapedAt: "2026-05-23T17:46:34.063Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY: Module 13 - Experiment 3: Mux and Demux in Verilog

## Topic: (a) Development of Verilog Modules for a 4x1 MUX

This document provides comprehensive study notes for developing Verilog modules for a 4x1 Multiplexer (MUX) as part of the Logic Circuit Design Laboratory. These notes are designed to align with the stated learning outcomes and course outcomes, incorporating insights from the recommended textbooks and reference books.

---

### 1. Introduction to Multiplexers (MUX)

#### 1.1 Definition and Functionality

*   **Definition:** A multiplexer (MUX) is a combinational logic circuit that selects one of several input signals and forwards it to a single output line. It acts like a digital selector or a switch.
*   **Functionality:** A MUX has multiple data inputs, a set of select inputs, and a single output. The select inputs determine which data input is connected to the output. If there are $2^n$ data inputs, then $n$ select lines are required.
*   **Truth Table Analogy:** The operation of a MUX can be understood by considering its truth table, where the output is a function of the data inputs and the select inputs.

#### 1.2 Applications of MUX

Multiplexers are fundamental building blocks in digital design and have numerous applications, including:

*   **Data Routing:** Selecting data from multiple sources to a single destination.
*   **Parallel-to-Serial Conversion:** Converting parallel data into serial data streams.
*   **Function Generation:** Implementing complex Boolean functions.
*   **Memory Addressing:** Selecting specific memory locations.
*   **Communication Systems:** Routing signals in communication networks.

#### 1.3 4x1 Multiplexer

*   **Description:** A 4x1 MUX has four data inputs, two select inputs, and one output.
*   **Select Lines:** The two select lines (let's call them S1 and S0) can represent $2^2 = 4$ unique combinations, which allows them to control the selection of one of the four data inputs (let's call them I0, I1, I2, I3).
*   **Output Equation:** The output (Y) of a 4x1 MUX can be expressed as:

    $Y = (\overline{S1} \cdot \overline{S0} \cdot I0) + ( \overline{S1} \cdot S0 \cdot I1) + (S1 \cdot \overline{S0} \cdot I2) + (S1 \cdot S0 \cdot I3)$

    This equation signifies that the output is active (equal to the selected input) only when the corresponding select line combination is present and the specific input is chosen.

---

### 2. Verilog HDL for Digital Circuit Design

#### 2.1 Importance of Hardware Description Languages (HDLs)

*   **Industry Standard:** HDLs like Verilog and VHDL are essential for designing complex digital systems in the modern semiconductor industry. They allow for abstract representation, simulation, and synthesis of hardware.
*   **Abstraction Levels:** HDLs support different levels of abstraction, from behavioral to structural, enabling designers to manage complexity.
*   **CO2 Alignment:** This topic directly addresses **CO2: Apply an industry compatible hardware description language to implement digital circuits**.

#### 2.2 Verilog Basics for MUX Design

*   **Modules:** The fundamental building block in Verilog. A module encapsulates a piece of hardware with inputs, outputs, and internal logic.
*   **Ports:** Inputs and outputs of a module.
*   **Data Types:** `wire` (for connections), `reg` (for storing values, often used in procedural blocks).
*   **Operators:** Logical operators (`&`, `|`, `~`, `^`), bitwise operators, concatenation (`{}`).
*   **Procedural Blocks:** `always` blocks are used to describe sequential or combinational logic.
    *   `always @(*)`: Sensitive to any change in the input signals. Used for combinational logic.
    *   `always @(posedge clk)`: Sensitive to the positive edge of a clock signal. Used for sequential logic.
*   **Assignments:**
    *   Continuous Assignment (`assign`): Used for combinational logic, directly mapping inputs to outputs.
    *   Procedural Assignment (`=`): Used within `always` blocks.

---

### 3. Development of Verilog Modules for a 4x1 MUX

We can implement a 4x1 MUX in Verilog using several approaches, primarily focusing on behavioral and dataflow modeling for combinational logic.

#### 3.1 Behavioral Modeling (using `always` block and `case` statement)

This approach describes the behavior of the MUX directly, as if writing its functionality in a high-level language.

*   **Concept:** The `always @(*)` block ensures that the logic is re-evaluated whenever any of the input signals change. The `case` statement elegantly maps the select input combinations to the corresponding data inputs.
*   **Referencing Bhasker:** Bhasker's "Verilog HDL Synthesis" emphasizes behavioral modeling for clarity and ease of synthesis, especially for combinational circuits. The `case` statement is a direct translation of the MUX's selection logic.

**Verilog Module (Behavioral):**

```verilog
// Module: four_to_one_mux_behavioral
// Description: A 4x1 Multiplexer using behavioral modeling (case statement).

module four_to_one_mux_behavioral (
    input  wire i0,    // Data input 0
    input  wire i1,    // Data input 1
    input  wire i2,    // Data input 2
    input  wire i3,    // Data input 3
    input  wire s1,    // Select input 1
    input  wire s0,    // Select input 0
    output wire y      // Output
);

// Internal signal to hold the output value
reg y_reg;

// Always block for combinational logic
always @(*) begin
    case ({s1, s0}) // Concatenate select lines to form a 2-bit select vector
        2'b00: y_reg = i0; // If select is 00, output i0
        2'b01: y_reg = i1; // If select is 01, output i1
        2'b10: y_reg = i2; // If select is 10, output i2
        2'b11: y_reg = i3; // If select is 11, output i3
        default: y_reg = 1'bx; // For any other select values (optional, for robustness)
    endcase
end

// Assign the register value to the output wire
assign y = y_reg;

endmodule
```

*   **Explanation:**
    *   `{s1, s0}`: Concatenates the select bits `s1` and `s0` to create a 2-bit vector. This vector is used as the control for the `case` statement.
    *   The `case` statement checks the value of `{s1, s0}` and assigns the corresponding input (`i0` to `i3`) to `y_reg`.
    *   `y_reg` is a `reg` type because it is assigned a value within an `always` block.
    *   `assign y = y_reg;` makes the output `y` reflect the value of `y_reg`.

#### 3.2 Dataflow Modeling (using `assign` statement and conditional operator)

This approach uses continuous assignments and logical operators to directly implement the Boolean equation.

*   **Concept:** The `assign` statement continuously evaluates the expression on the right-hand side and drives the output on the left-hand side. The conditional operator (`?:`) is ideal for implementing selection logic like a MUX.
*   **Referencing Palnitkar:** Palnitkar's "Verilog HDL: A guide to digital design and synthesis" highlights dataflow modeling using `assign` statements and logical operators for its conciseness in representing combinational logic directly derived from Boolean equations.

**Verilog Module (Dataflow - Conditional Operator):**

```verilog
// Module: four_to_one_mux_dataflow_conditional
// Description: A 4x1 Multiplexer using dataflow modeling (conditional operator).

module four_to_one_mux_dataflow_conditional (
    input  wire i0,    // Data input 0
    input  wire i1,    // Data input 1
    input  wire i2,    // Data input 2
    input  wire i3,    // Data input 3
    input  wire s1,    // Select input 1
    input  wire s0,    // Select input 0
    output wire y      // Output
);

// Continuous assignment using nested conditional operators
assign y = s1 ? (s0 ? i3 : i2) : (s0 ? i1 : i0);

endmodule
```

*   **Explanation:**
    *   The expression `s1 ? (s0 ? i3 : i2) : (s0 ? i1 : i0)` works as follows:
        *   If `s1` is true (1), it evaluates the part after the first `:`.
        *   If `s1` is false (0), it evaluates the part after the second `:`.
        *   Inside each part, `s0 ? i_next : i_prev` selects between two inputs based on `s0`.
    *   This directly implements the logic:
        *   If `s1=0, s0=0`, `y = i0`
        *   If `s1=0, s0=1`, `y = i1`
        *   If `s1=1, s0=0`, `y = i2`
        *   If `s1=1, s0=1`, `y = i3`

**Verilog Module (Dataflow - Boolean Equation):**

*   **Concept:** Directly translate the Boolean expression for the MUX into Verilog using logical operators.
*   **Referencing Roth:** Roth's "Fundamentals of Logic Design" provides the foundational understanding of Boolean algebra and how to represent logical equations. This method aligns with that fundamental understanding.

```verilog
// Module: four_to_one_mux_dataflow_boolean
// Description: A 4x1 Multiplexer using dataflow modeling (Boolean equation).

module four_to_one_mux_dataflow_boolean (
    input  wire i0,    // Data input 0
    input  wire i1,    // Data input 1
    input  wire i2,    // Data input 2
    input  wire i3,    // Data input 3
    input  wire s1,    // Select input 1
    input  wire s0,    // Select input 0
    output wire y      // Output
);

// Continuous assignment implementing the Boolean equation
assign y = (~s1 & ~s0 & i0) | (~s1 & s0 & i1) | (s1 & ~s0 & i2) | (s1 & s0 & i3);

endmodule
```

*   **Explanation:**
    *   `~s1`: Logical NOT of `s1`.
    *   `&`: Bitwise AND operator.
    *   `|`: Bitwise OR operator.
    *   This directly translates the equation $Y = (\overline{S1} \cdot \overline{S0} \cdot I0) + ( \overline{S1} \cdot S0 \cdot I1) + (S1 \cdot \overline{S0} \cdot I2) + (S1 \cdot S0 \cdot I3)$ into Verilog.

#### 3.3 Structural Modeling (using basic gates)

This approach builds the MUX from its constituent logic gates (AND, OR, NOT). While less common for higher-level modules in modern design, it demonstrates understanding of gate-level implementation.

*   **Concept:** Define sub-modules for basic gates (or use primitive gates) and instantiate them to build the MUX.
*   **Referencing Roth:** Roth's textbook provides detailed schematics of MUXes built from AND, OR, and NOT gates, which this modeling approach directly mirrors.

**Verilog Module (Structural):**

```verilog
// Module: four_to_one_mux_structural
// Description: A 4x1 Multiplexer using structural modeling (instantiating gates).

module four_to_one_mux_structural (
    input  wire i0,    // Data input 0
    input  wire i1,    // Data input 1
    input  wire i2,    // Data input 2
    input  wire i3,    // Data input 3
    input  wire s1,    // Select input 1
    input  wire s0,    // Select input 0
    output wire y      // Output
);

// Wires to connect the gates
wire nS0, nS1;         // Inverted select lines
wire term0, term1, term2, term3; // Outputs of AND gates

// Instantiate NOT gates for inverted select lines
not inv_s0 (nS0, s0);
not inv_s1 (nS1, s1);

// Instantiate AND gates for each term
// Term 0: ~S1 . ~S0 . I0
and and0 (term0, nS1, nS0, i0);

// Term 1: ~S1 . S0 . I1
and and1 (term1, nS1, s0, i1);

// Term 2: S1 . ~S0 . I2
and and2 (term2, s1, nS0, i2);

// Term 3: S1 . S0 . I3
and and3 (term3, s1, s0, i3);

// Instantiate an OR gate to combine the terms
// Output Y = Term0 | Term1 | Term2 | Term3
or  or_gate (y, term0, term1, term2, term3);

endmodule
```

*   **Explanation:**
    *   Primitive gates like `not`, `and`, and `or` are used directly.
    *   The inputs and outputs of these primitive gates are connected using wires.
    *   This structure directly maps to the Boolean equation, with each AND gate generating a product term and the OR gate summing them up.

---

### 4. Key Concepts and Definitions Recap

*   **Multiplexer (MUX):** A combinational circuit that selects one of many input signals and routes it to a single output based on control signals.
*   **Select Lines:** Control the MUX to choose a specific input.
*   **Verilog HDL:** A Hardware Description Language used for designing and verifying digital circuits.
*   **Module:** The basic building block in Verilog, encapsulating hardware functionality.
*   **Ports:** Inputs and outputs of a Verilog module.
*   **`always @(*)`:** A sensitivity list that triggers a procedural block on any input change, suitable for combinational logic.
*   **`case` statement:** A control flow statement in Verilog used for multi-way branching based on a condition, ideal for MUXes.
*   **`assign` statement:** Used for continuous assignment, directly mapping logic expressions to outputs, suitable for dataflow modeling.
*   **Conditional Operator (`?:`):** A shorthand for `if-else` statements, useful for expressing selection logic concisely.
*   **Behavioral Modeling:** Describes the functionality of a circuit in a way that resembles a high-level programming language.
*   **Dataflow Modeling:** Describes the circuit by specifying the flow of data and the operations performed on it, often using `assign` statements and logical operators.
*   **Structural Modeling:** Describes the circuit as an interconnection of smaller components or primitive gates.
*   **Synthesis:** The process of converting HDL code into a netlist of logic gates and flip-flops that can be implemented on hardware. All the presented models are synthesizable.

---

### 5. Learning Outcomes Addressed

*   **CO1: Design and demonstrate the functioning of various combinational and sequential circuits using ICs (Knowledge Level: K3)**
    *   This topic focuses on the design of a combinational circuit (4x1 MUX) using an HDL, which is a precursor to implementing it on hardware or simulating it. The understanding of the MUX's functionality is essential for its eventual demonstration.
*   **CO2: Apply an industry compatible hardware description language to implement digital circuits (Knowledge Level: K3)**
    *   This entire topic is dedicated to implementing a 4x1 MUX using Verilog, showcasing different modeling styles (behavioral, dataflow, structural).
*   **CO3: Implement digital circuits on FPGA boards and connect external hardware to the boards (Knowledge Level: K3)**
    *   The Verilog modules developed here are directly synthesizable and can be programmed onto FPGA boards for practical demonstration. Understanding the Verilog code is the first step towards this implementation.
*   **CO4: Function effectively as an individual and in a team to accomplish the given task. (Knowledge Level: K2)**
    *   While this note focuses on individual understanding, the development of these modules would be a task within a laboratory setting, requiring collaboration to choose the best approach, debug code, and verify functionality.

---

### 6. Important Points to Remember

*   **Synthesizability:** Ensure that your Verilog code is synthesizable. Avoid constructs that cannot be directly translated into hardware (e.g., `for` loops that are not synthesizable in certain contexts, using `reg` for outputs assigned in non-blocking statements without a clock).
*   **Clocking:** For MUXes, which are combinational circuits, use `always @(*)` or `assign` statements. Do not use clocked `always` blocks unless you are specifically creating a registered output MUX.
*   **Sensitivity List:** For `always` blocks describing combinational logic, always use `always @(*)` or explicitly list all input signals that affect the output. Forgetting an input will lead to incorrect behavior due to inferred latches.
*   **Modeling Style Choice:**
    *   **Behavioral (`case`):** Often the most readable and maintainable for MUXes.
    *   **Dataflow (conditional/Boolean):** Concise and directly maps to the logic. Can be very efficient for synthesis.
    *   **Structural:** Useful for understanding gate-level implementation or when using pre-designed gate modules, but can be verbose for complex designs.
*   **Testbenches:** For proper verification, create Verilog testbenches to simulate your MUX modules and check their outputs against expected values for all possible input combinations.

---

### 7. Practice Questions and Exercises

**Question 1:**
Write a Verilog module for a 2x1 Multiplexer using a `case` statement.

**Answer:**

```verilog
module two_to_one_mux (
    input  wire i0,
    input  wire i1,
    input  wire s,
    output wire y
);

reg y_reg;

always @(*) begin
    case (s)
        1'b0: y_reg = i0;
        1'b1: y_reg = i1;
        default: y_reg = 1'bx;
    endcase
end

assign y = y_reg;

endmodule
```

**Question 2:**
Implement a 4x1 MUX using the `assign` statement and the Boolean equation derived earlier.

**Answer:** (Refer to Section 3.2, Verilog Module (Dataflow - Boolean Equation))

**Question 3:**
What is the primary advantage of behavioral modeling for MUX design compared to structural modeling?

**Answer:**
Behavioral modeling, particularly using a `case` statement, is generally more readable, concise, and easier to maintain for MUXes. It abstracts away the gate-level details, making the intent of the design clearer. Structural modeling, while demonstrating fundamental logic, can become very verbose and complex for larger circuits.

**Question 4:**
Consider the following Verilog code snippet. What is the potential issue with this code if it's intended to be purely combinational logic for a MUX?

```verilog
module demo_mux (
    input a, b, s,
    output y
);

always @(a or b or s) begin
    if (s) y = b;
    else y = a;
end

endmodule
```

**Answer:**
The issue is that the output `y` is declared as `output wire y;` (implicitly a `wire`) but is being assigned a value within an `always` block using a procedural assignment (`y = ...`). In Verilog, outputs assigned in `always` blocks must be declared as `reg` type. If the intent is purely combinational, the output `y` should be declared as `reg` and the `always` block sensitivity list should be `always @(*)`. Alternatively, if `y` remains a `wire`, the assignment should be `assign y = s ? b : a;`. The current code might lead to synthesis warnings or unexpected behavior (e.g., inferring latches if not carefully handled). A better practice for combinational logic is `always @(*)` with `reg` output or `assign` statements.

---

This concludes the notes for developing Verilog modules for a 4x1 MUX. Understanding these concepts and practicing different modeling styles is crucial for mastering digital logic design with HDLs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
