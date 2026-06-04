---
title: "(b) Development of verilog modules for a 1x4 DEMUX."
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 13: Experiment 3: Mux and Demux in Verilog"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe45d"
status: "completed"
scrapedAt: "2026-05-23T17:46:34.923Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY - Module 13: Experiment 3: Mux and Demux in Verilog

## Topic: (b) Development of Verilog Modules for a 1x4 DEMUX

---

### **1. Introduction to Demultiplexers (Demux)**

*   **Definition:** A demultiplexer (Demux) is a combinational logic circuit that receives a single data input and routes it to one of several possible outputs. The selection of which output receives the data is controlled by a set of select lines.
*   **Functionality:** It acts as a "data distributor". It takes one input line and distributes it to multiple output lines.
*   **Analogy:** Think of a post office sorting mail. The single input is the incoming mail, and the select lines determine which mailbox (output) the mail is delivered to.

---

### **2. Understanding the 1x4 Demultiplexer**

*   **Structure:** A 1x4 Demux has:
    *   **1 Data Input:** The line that carries the data to be distributed.
    *   **4 Data Outputs:** The lines to which the data can be routed.
    *   **Select Lines:** These lines determine which output is active. For a 1x4 Demux, we need $log_2(4) = 2$ select lines. Let's call them $S_1$ and $S_0$.

*   **Truth Table:** The behavior of a 1x4 Demux can be described by its truth table. When the select lines ($S_1S_0$) are in a particular state, the data input ($D_{in}$) is routed to the corresponding output. All other outputs remain at a default logic level (typically 0 or low).

    | $S_1$ | $S_0$ | Output $Y_0$ | Output $Y_1$ | Output $Y_2$ | Output $Y_3$ |
    | :---- | :---- | :----------- | :----------- | :----------- | :----------- |
    | 0     | 0     | $D_{in}$     | 0            | 0            | 0            |
    | 0     | 1     | 0            | $D_{in}$     | 0            | 0            |
    | 1     | 0     | 0            | 0            | $D_{in}$     | 0            |
    | 1     | 1     | 0            | 0            | 0            | $D_{in}$     |

*   **Logic Implementation (Conceptual):** Each output can be represented by a Boolean expression. For example:
    *   $Y_0 = \overline{S_1} \cdot \overline{S_0} \cdot D_{in}$
    *   $Y_1 = \overline{S_1} \cdot S_0 \cdot D_{in}$
    *   $Y_2 = S_1 \cdot \overline{S_0} \cdot D_{in}$
    *   $Y_3 = S_1 \cdot S_0 \cdot D_{in}$

    These expressions can be implemented using AND gates and NOT gates. The select lines act as control signals for the AND gates, enabling only one output to pass the data input at any given time.

---

### **3. Verilog Module Development**

Verilog allows us to describe digital circuits at various levels of abstraction: dataflow, behavioral, and structural.

#### **3.1 Dataflow Modeling (Using Continuous Assignments)**

This method directly translates the Boolean expressions into Verilog code using `assign` statements. This is often the most straightforward way to model combinational logic like demultiplexers.

**Learning Outcome Addressed:** CO2 (Apply an industry compatible hardware description language to implement digital circuits)

**Key Concepts:**
*   **`module`:** Keyword to define a Verilog module.
*   **`input`:** Declares input ports of the module.
*   **`output`:** Declares output ports of the module.
*   **`wire`:** A net that carries a signal from one component to another.
*   **`assign`:** A statement used for continuous assignment, representing combinational logic.
*   **`.` (Dot operator):** Used for port connections in instantiation.
*   **Concatenation `{}`:** Used to combine signals. (Though not directly used in the simple 1x4 demux logic equations, it's a crucial Verilog construct).
*   **Bitwise Operators:**
    *   `~` (NOT)
    *   `&` (AND)
    *   `|` (OR)
    *   `^` (XOR)
    *   `~&` (NAND), `~|` (NOR), `~^` (XNOR)
*   **Logical Operators:** `&&`, `||`, `!` (Typically used in behavioral modeling and for comparing whole values). **For bitwise operations, use bitwise operators.**

**Verilog Code Example (Dataflow):**

```verilog
//--------------------------------------------------------------------------
// Module: demux_1x4_dataflow
// Description: 1x4 Demultiplexer using continuous assignments (dataflow).
//--------------------------------------------------------------------------
module demux_1x4_dataflow (
    input  wire d_in,      // Data input
    input  wire s1,        // Select line 1
    input  wire s0,        // Select line 0
    output wire y0,        // Output 0
    output wire y1,        // Output 1
    output wire y2,        // Output 2
    output wire y3         // Output 3
);

    // Using continuous assignments for each output based on select lines
    assign y0 = (~s1) & (~s0) & d_in;
    assign y1 = (~s1) & s0 & d_in;
    assign y2 = s1 & (~s0) & d_in;
    assign y3 = s1 & s0 & d_in;

endmodule
```

**Explanation:**
*   Each `assign` statement directly implements the Boolean logic for one output.
*   `~s1` and `~s0` represent the inverted select lines.
*   `&` is the bitwise AND operator.
*   The `d_in` is ANDed with the appropriate combination of select lines.

---

#### **3.2 Behavioral Modeling (Using `always` block)**

Behavioral modeling describes the *behavior* of the circuit, rather than its specific gate-level implementation. This is often more readable and easier to write for complex logic.

**Learning Outcome Addressed:** CO2 (Apply an industry compatible hardware description language to implement digital circuits)

**Key Concepts:**
*   **`always` block:** A procedural block that executes when certain events occur.
*   **Sensitivity List:** The set of signals that, when changed, trigger the execution of the `always` block. For combinational logic, this should include all inputs that affect the outputs.
*   **`begin` / `end`:** Used to group statements within the `always` block.
*   **Blocking (`=`) vs. Non-blocking (`<=`) assignments:** For combinational logic, blocking assignments are generally preferred within `always` blocks to ensure immediate updates. Non-blocking assignments are typically used for sequential logic.
*   **`case` statement:** A control flow statement that executes different code blocks based on the value of an expression. This is ideal for implementing multiplexers and demultiplexers based on select lines.

**Verilog Code Example (Behavioral using `case`):**

```verilog
//--------------------------------------------------------------------------
// Module: demux_1x4_behavioral
// Description: 1x4 Demultiplexer using behavioral modeling with a case statement.
//--------------------------------------------------------------------------
module demux_1x4_behavioral (
    input  wire d_in,      // Data input
    input  wire s1,        // Select line 1
    input  wire s0,        // Select line 0
    output reg  y0,        // Output 0 (declared as reg for assignment in always block)
    output reg  y1,        // Output 1
    output reg  y2,        // Output 2
    output reg  y3         // Output 3
);

    // Combine select lines into a 2-bit vector for easy case matching
    wire [1:0] select_lines = {s1, s0};

    // Always block sensitive to all inputs that affect the outputs
    always @(d_in or s1 or s0) begin
        // Default assignments: all outputs are 0 when not selected
        y0 = 1'b0;
        y1 = 1'b0;
        y2 = 1'b0;
        y3 = 1'b0;

        // Case statement to route the input data based on select lines
        case (select_lines)
            2'b00: y0 = d_in; // If s1=0, s0=0, route d_in to y0
            2'b01: y1 = d_in; // If s1=0, s0=1, route d_in to y1
            2'b10: y2 = d_in; // If s1=1, s0=0, route d_in to y2
            2'b11: y3 = d_in; // If s1=1, s0=1, route d_in to y3
            default: begin    // Optional: Handle cases not explicitly covered (though all are covered here)
                y0 = 1'b0;
                y1 = 1'b0;
                y2 = 1'b0;
                y3 = 1'b0;
            end
        endcase
    end

endmodule
```

**Explanation:**
*   Outputs `y0` to `y3` are declared as `reg` because they are assigned values within an `always` block.
*   The `always @(d_in or s1 or s0)` block is sensitive to changes in any of the input signals.
*   Inside the `always` block, it's good practice to provide default assignments to all outputs *before* the `case` statement. This ensures that if a particular select combination doesn't assign a value, the output retains its previous state or a known default. This is crucial for preventing inferring latches in synthesis.
*   The `select_lines` wire is created by concatenating `s1` and `s0` to form a 2-bit vector. This simplifies the `case` statement.
*   The `case` statement checks the value of `select_lines` and assigns `d_in` to the corresponding output.
*   **Important Note:** When using `case` for combinational logic, ensure that all possible input combinations are handled. If a case is missed, a latch can be inferred by the synthesis tool, which is usually undesirable for combinational circuits. Providing default assignments before the `case` helps mitigate this, but explicitly handling all `case` possibilities is the best practice.

#### **3.3 Structural Modeling (Using Gate Instantiations)**

This method describes the circuit by instantiating basic logic gates (AND, NOT, etc.) and connecting them. This is closer to the hardware implementation and can be useful for understanding how a circuit is built from fundamental components.

**Learning Outcome Addressed:** CO1 (Design and demonstrate the functioning of various combinational and sequential circuits using ICs) - This directly relates to understanding the gate-level building blocks. CO2 (Apply an industry compatible hardware description language to implement digital circuits)

**Key Concepts:**
*   **Gate Primitives:** Verilog provides built-in primitives for basic gates like `and`, `or`, `not`, `nand`, `nor`, `xor`, `xnor`.
*   **Instance:** A specific copy of a gate or another module used within a larger module.
*   **Port Connection:** Connecting the input and output ports of instances to wires or other module ports.

**Verilog Code Example (Structural):**

```verilog
//--------------------------------------------------------------------------
// Module: demux_1x4_structural
// Description: 1x4 Demultiplexer using structural modeling (gate instantiation).
//--------------------------------------------------------------------------
module demux_1x4_structural (
    input  wire d_in,      // Data input
    input  wire s1,        // Select line 1
    input  wire s0,        // Select line 0
    output wire y0,        // Output 0
    output wire y1,        // Output 1
    output wire y2,        // Output 2
    output wire y3         // Output 3
);

    // Internal wires to connect gates
    wire nS1, nS0; // Inverted select lines

    // Instantiate NOT gates for inverted select lines
    not g_not_s1 (nS1, s1);
    not g_not_s0 (nS0, s0);

    // Instantiate AND gates for each output
    // Output Y0: (NOT S1) AND (NOT S0) AND D_in
    and g_and_y0 (y0, nS1, nS0, d_in);

    // Output Y1: (NOT S1) AND S0 AND D_in
    and g_and_y1 (y1, nS1, s0, d_in);

    // Output Y2: S1 AND (NOT S0) AND D_in
    and g_and_y2 (y2, s1, nS0, d_in);

    // Output Y3: S1 AND S0 AND D_in
    and g_and_y3 (y3, s1, s0, d_in);

endmodule
```

**Explanation:**
*   We use `not` primitives to generate the inverted versions of `s1` and `s0`.
*   We instantiate four `and` gates. Each AND gate takes `d_in` and a unique combination of the original or inverted select lines as inputs.
*   The output of each AND gate is connected to a corresponding output port (`y0` to `y3`).
*   The naming convention for gate instantiation is: `gate_type instance_name (output_port, input_port1, input_port2, ...);`

---

### **4. Testing and Verification (Testbench)**

To ensure the Verilog modules function correctly, they need to be simulated using a testbench. A testbench is another Verilog module that instantiates the design module and applies various input stimuli.

**Learning Outcome Addressed:** CO2 (Apply an industry compatible hardware description language to implement digital circuits)

**Key Concepts:**
*   **Testbench Module:** A separate Verilog module dedicated to testing.
*   **Instantiation:** The design under test (DUT) is instantiated within the testbench.
*   **Signal Drivers:** The testbench drives the inputs to the DUT.
*   **`reg`:** Used for signals that are driven (inputs to the DUT).
*   **`wire`:** Used for signals that are observed (outputs from the DUT).
*   **`initial` block:** A procedural block that executes only once at the beginning of the simulation. Used for applying stimuli.
*   **`#delay`:** Used to introduce time delays in the simulation.
*   **`$display` / `$monitor`:** System tasks for printing simulation results to the console.
*   **`end`:** Marks the end of an `initial` or `always` block.
*   **`simulation`:** The process of running the Verilog code on a simulator.

**Verilog Testbench Example (for any of the above DUTs):**

```verilog
//--------------------------------------------------------------------------
// Module: tb_demux_1x4
// Description: Testbench for a 1x4 Demultiplexer.
//--------------------------------------------------------------------------
`timescale 1ns / 1ps // Define time units for simulation

module tb_demux_1x4;

    // Inputs to the DUT (declared as reg)
    reg  tb_d_in;
    reg  tb_s1;
    reg  tb_s0;

    // Outputs from the DUT (declared as wire)
    wire tb_y0;
    wire tb_y1;
    wire tb_y2;
    wire tb_y3;

    // Instantiate the Device Under Test (DUT)
    // Replace 'demux_1x4_dataflow' with the module you want to test
    demux_1x4_dataflow dut (
        .d_in(tb_d_in),
        .s1(tb_s1),
        .s0(tb_s0),
        .y0(tb_y0),
        .y1(tb_y1),
        .y2(tb_y2),
        .y3(tb_y3)
    );

    // Stimulus generation block
    initial begin
        // Initialize inputs
        tb_d_in = 0;
        tb_s1   = 0;
        tb_s0   = 0;
        $display("Time\tD_in\tS1\tS0\tY0\tY1\tY2\tY3");
        $monitor("%0t\t%b\t%b\t%b\t%b\t%b\t%b\t%b",
                 $time, tb_d_in, tb_s1, tb_s0, tb_y0, tb_y1, tb_y2, tb_y3);

        // Test Case 1: S1=0, S0=0, D_in=1
        tb_d_in = 1;
        tb_s1   = 0;
        tb_s0   = 0;
        #10; // Wait for 10ns

        // Test Case 2: S1=0, S0=1, D_in=1
        tb_s1 = 0;
        tb_s0 = 1;
        #10;

        // Test Case 3: S1=1, S0=0, D_in=1
        tb_s1 = 1;
        tb_s0 = 0;
        #10;

        // Test Case 4: S1=1, S0=1, D_in=1
        tb_s1 = 1;
        tb_s0 = 1;
        #10;

        // Test Case 5: D_in=0 for all select combinations
        tb_d_in = 0;
        tb_s1   = 0;
        tb_s0   = 0;
        #10;

        tb_s1   = 0;
        tb_s0   = 1;
        #10;

        tb_s1   = 1;
        tb_s0   = 0;
        #10;

        tb_s1   = 1;
        tb_s0   = 1;
        #10;

        // End simulation
        $finish;
    end

endmodule
```

**Simulation Output Expectation:**
The `$monitor` statement will print the values of inputs and outputs at each time step where any signal changes. You should verify that the outputs match the truth table of the 1x4 Demultiplexer for each input combination.

---

### **5. Synthesis and FPGA Implementation (CO3)**

The Verilog code developed can be synthesized and implemented on an FPGA board.

**Learning Outcome Addressed:** CO3 (Implement digital circuits on FPGA boards and connect external hardware to the boards)

**Key Concepts:**
*   **Synthesis:** The process of converting HDL code into a netlist of logic gates that can be mapped to the FPGA's resources. Tools like Xilinx Vivado or Intel Quartus Prime are used.
*   **Mapping:** Assigning synthesized logic gates to specific FPGA resources (LUTs, Flip-flops, etc.).
*   **Place and Route:** Physically placing the mapped logic on the FPGA fabric and routing the connections between them.
*   **Bitstream Generation:** Creating a configuration file (bitstream) that programs the FPGA.
*   **Hardware Connection:** Connecting external switches, LEDs, or other peripherals to the FPGA board to provide inputs and observe outputs.

**Steps for FPGA Implementation (General):**
1.  **Create a Project:** Start a new project in your FPGA IDE (e.g., Vivado).
2.  **Add Source Files:** Add your Verilog module (`.v`) and testbench (`.v`) files.
3.  **Create a Constraints File:** Define the physical pin assignments for your inputs (switches, buttons) and outputs (LEDs) on the FPGA board. This file usually has a `.xdc` or `.qsf` extension.
4.  **Synthesize:** Run the synthesis process to convert your Verilog code into a gate-level netlist.
5.  **Implement:** Run the implementation process (mapping, placing, routing).
6.  **Generate Bitstream:** Create the `.bit` file.
7.  **Program FPGA:** Download the bitstream onto the FPGA board.
8.  **Test:** Use the connected hardware (switches, LEDs) to verify the functionality. For example, you can connect switches to `d_in`, `s1`, `s0` and LEDs to `y0` through `y3`.

---

### **6. Important Points to Remember**

*   **Behavioral vs. Dataflow vs. Structural:** Choose the modeling style that best suits the complexity and clarity required for your design. Behavioral modeling with `case` statements is often preferred for clarity and ease of modification for demultiplexers.
*   **`reg` vs. `wire`:** Use `reg` for variables assigned within `always` or `initial` blocks. Use `wire` for connections and outputs driven by `assign` statements or other modules.
*   **Sensitivity List:** For combinational logic in `always` blocks, ensure the sensitivity list includes *all* inputs that can affect the outputs to avoid inferring unintended latches.
*   **Default Assignments in Behavioral Models:** Always provide default assignments for outputs before `case` or `if-else` statements in behavioral models describing combinational logic to prevent latch inference.
*   **`case` Statement Completeness:** Ensure all possible input combinations are handled in `case` statements for combinational logic.
*   **Testbench:** A well-written testbench is crucial for verifying the correctness of your Verilog code before synthesis.
*   **Constraints:** Correct pin assignments in the constraints file are essential for successful FPGA implementation.
*   **Synthesis Tools:** Familiarize yourself with the synthesis and implementation tools for your target FPGA.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **7. Textbook and Reference Material Cross-Reference**

*   **Verilog HDL Synthesis: A Practical Primer by J. Bhasker:** This book provides a practical approach to writing Verilog for synthesis, covering different modeling styles and best practices. Chapter on combinational logic and basic gates would be relevant.
*   **Fundamentals of Logic Design by Roth C.H:** This textbook provides the foundational understanding of combinational logic circuits, including demultiplexers, their truth tables, and logic implementations. This helps in understanding *what* you are modeling in Verilog.
*   **Verilog HDL: A Guide to Digital Design and Synthesis by Palnitkar S.:** This reference is excellent for understanding Verilog syntax, semantics, and how to write efficient HDL code for synthesis. Chapters on dataflow, behavioral modeling, and synthesis guidelines are highly relevant.

---

### **8. Alignment with Course Outcomes**

*   **CO1: Design and demonstrate the functioning of various combinational and sequential circuits using ICs (Knowledge Level: K3)**
    *   **How this topic addresses CO1:** By understanding the fundamental structure and logic equations of a 1x4 demultiplexer (from Roth C.H.), and then implementing it structurally using Verilog gate primitives, students gain insight into how the circuit is built from basic logic gates, which is analogous to using ICs.
*   **CO2: Apply an industry compatible hardware description language to implement digital circuits (Knowledge Level: K3)**
    *   **How this topic addresses CO2:** This entire topic focuses on developing Verilog modules for a 1x4 DEMUX using dataflow, behavioral, and structural modeling. Students learn to translate logic design into Verilog code, which is a core skill for digital circuit implementation. The testbench development also reinforces this.
*   **CO3: Implement digital circuits on FPGA boards and connect external hardware to the boards (Knowledge Level: K3)**
    *   **How this topic addresses CO3:** The process of synthesizing, implementing, and programming the Verilog DEMUX module onto an FPGA board, and then interacting with it via switches and LEDs, directly fulfills this outcome.
*   **CO4: Function effectively as an individual and in a team to accomplish the given task. (Knowledge Level: K2)**
    *   **How this topic addresses CO4:** While the notes are for individual study, the laboratory experiment itself often involves teamwork. Students might divide tasks for writing different Verilog modules, developing parts of the testbench, or handling the FPGA implementation, fostering collaboration and effective task accomplishment.

---

### **9. Practice Questions and Exercises**

1.  **Question:** Draw the logic diagram for a 1x4 Demultiplexer and write its truth table.
    **Answer:** (Refer to Section 2 of these notes for the logic diagram concept and the truth table). The logic diagram would consist of two NOT gates and four 3-input AND gates.

2.  **Question:** Write a Verilog module for a 1x4 Demultiplexer using the dataflow modeling style.
    **Answer:** (Refer to Section 3.1 of these notes for the `demux_1x4_dataflow` module).

3.  **Question:** Explain the importance of default assignments within the `always` block when using a `case` statement for combinational logic in Verilog. What might happen if they are omitted?
    **Answer:** Default assignments ensure that all outputs have a defined value before the `case` statement is executed. If a specific case condition is not met and an output isn't assigned a value within that branch, the synthesis tool might infer a latch for that output. Latches are typically undesirable in combinational logic as they introduce unintended memory elements, leading to incorrect circuit behavior.

4.  **Question:** Consider a 1x8 Demultiplexer. How many select lines would it require, and what Verilog modeling style do you think would be most efficient for its implementation? Justify your choice.
    **Answer:** A 1x8 Demultiplexer requires $log_2(8) = 3$ select lines. Behavioral modeling using a `case` statement with a 3-bit select input (`{s2, s1, s0}`) would be most efficient. This is because it keeps the code concise and readable, abstracting away the complexity of multiple AND gates and inverters that would be needed for dataflow or structural modeling, especially as the number of outputs increases.

5.  **Question:** Write a Verilog testbench to verify the `demux_1x4_behavioral` module, ensuring you test all 4 select line combinations with both data input values of 0 and 1.
    **Answer:** (Refer to Section 4 of these notes for a comprehensive testbench structure. You would need to instantiate `demux_1x4_behavioral` and apply stimuli as described).

---
This concludes the study notes for Topic (b): Development of Verilog modules for a 1x4 DEMUX.