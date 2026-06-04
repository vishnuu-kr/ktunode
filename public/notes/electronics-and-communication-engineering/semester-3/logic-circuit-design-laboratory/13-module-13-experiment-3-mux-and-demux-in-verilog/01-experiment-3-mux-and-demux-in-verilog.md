---
title: "Experiment 3: Mux and Demux in Verilog"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 13: Experiment 3: Mux and Demux in Verilog"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe45b"
status: "completed"
scrapedAt: "2026-05-23T17:46:33.218Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY - Module 13: Experiment 3: Mux and Demux in Verilog

## Introduction

This module introduces the implementation of Multiplexers (Mux) and Demultiplexers (Demux) using the Verilog Hardware Description Language (HDL). Understanding Mux and Demux is fundamental to digital circuit design as they are crucial building blocks for data routing and selection. We will explore how to model these circuits in Verilog and verify their functionality.

---

## 1. Learning Outcomes

By the end of this experiment, you will be able to:

*   **Understand the function of multiplexers and demultiplexers:** Grasp their core operational principles and applications.
*   **Design and implement multiplexers in Verilog:** Create Verilog code to model Mux circuits of various sizes.
*   **Design and implement demultiplexers in Verilog:** Create Verilog code to model Demux circuits of various sizes.
*   **Simulate and verify the functionality of your Verilog designs:** Use simulation tools to confirm that your Mux and Demux implementations behave as expected.
*   **Relate Verilog implementations to actual hardware behavior:** Understand how the HDL code translates to physical logic gates.

---

## 2. Key Concepts and Definitions

### 2.1. Multiplexer (Mux)

*   **Definition:** A multiplexer is a combinational logic circuit that selects one of several input signals and forwards it to a single output line.
*   **Functionality:** It has $2^n$ data inputs, $n$ select lines, and 1 output. The binary value on the select lines determines which data input is connected to the output.
*   **Analogy:** Think of it as a digital rotary switch where the select lines control which input is "turned on" to the output.
*   **Textbook Reference:**
    *   **Bhasker, J. (2001). *Verilog HDL Synthesis: A Practical Primer*.** Chapter on combinational logic often details Mux design principles.
    *   **Roth, C. H. (V). *Fundamentals of Logic Design*.** Chapters on combinational logic circuits extensively cover Mux functionality and truth tables.

### 2.2. Demultiplexer (Demux)

*   **Definition:** A demultiplexer is a combinational logic circuit that receives a single input signal and, by controlling select lines, routes this input to one of several output lines.
*   **Functionality:** It has 1 data input, $n$ select lines, and $2^n$ outputs. The binary value on the select lines determines which output line receives the input data.
*   **Analogy:** It's like a digital "splitter" or "router" that directs a single input to one of many destinations.
*   **Textbook Reference:**
    *   **Bhasker, J. (2001). *Verilog HDL Synthesis: A Practical Primer*.** Similar to Mux, this book will cover Demux implementations in its combinational logic sections.
    *   **Roth, C. H. (V). *Fundamentals of Logic Design*.** Provides detailed explanations of Demux operations and truth tables.

### 2.3. Verilog HDL

*   **Definition:** Verilog is a Hardware Description Language (HDL) used to model and describe the behavior and structure of digital electronic systems.
*   **Purpose:** It allows engineers to design, simulate, and synthesize complex digital circuits before they are physically implemented on hardware like FPGAs or ASICs.
*   **Key Constructs for Mux/Demux:**
    *   `module`: Defines a design block.
    *   `input`, `output`, `inout`: Declare ports of a module.
    *   `wire`, `reg`: Declare internal signals.
    *   `assign`: For continuous assignments (combinational logic).
    *   `always @(*)`: For procedural assignments, often used for combinational logic.
    *   `case`, `if-else`: Control flow statements for selecting logic paths.
*   **Reference Book:**
    *   **Palnitkar, S. (2nd Edn.). *Verilog HDL: A guide to digital design and synthesis*.** This is an excellent resource for learning Verilog syntax and constructs for implementing various digital circuits.

---

## 3. Implementing Mux in Verilog

### 3.1. 2-to-1 Mux

A 2-to-1 Mux has two data inputs (I0, I1), one select input (S), and one output (Y).

*   **Truth Table:**
    | S | I0 | I1 | Y   |
    |---|----|----|-----|
    | 0 | 0  | 0  | 0   |
    | 0 | 0  | 1  | 0   |
    | 0 | 1  | 0  | 1   |
    | 0 | 1  | 1  | 1   |
    | 1 | 0  | 0  | 0   |
    | 1 | 0  | 1  | 1   |
    | 1 | 1  | 0  | 0   |
    | 1 | 1  | 1  | 1   |

*   **Boolean Expression:** $Y = (\bar{S} \cdot I0) + (S \cdot I1)$

*   **Verilog Implementation (using `assign`):**

    ```verilog
    module mux_2_to_1 (
        input  wire i0,
        input  wire i1,
        input  wire sel,
        output wire y
    );

        assign y = (~sel & i0) | (sel & i1);

    endmodule
    ```

*   **Verilog Implementation (using `always @(*)` and `if-else`):**

    ```verilog
    module mux_2_to_1_always (
        input  wire i0,
        input  wire i1,
        input  wire sel,
        output wire y
    );

        always @(*) begin
            if (sel == 1'b0) begin
                y = i0;
            end else begin // sel == 1'b1
                y = i1;
            end
        end

    endmodule
    ```

*   **Verilog Implementation (using `case`):**

    ```verilog
    module mux_2_to_1_case (
        input  wire i0,
        input  wire i1,
        input  wire sel,
        output wire y
    );

        always @(*) begin
            case (sel)
                1'b0: y = i0;
                1'b1: y = i1;
                default: y = 1'b0; // Optional: handle unexpected select values
            endcase
        end

    endmodule
    ```

### 3.2. 4-to-1 Mux

A 4-to-1 Mux has four data inputs (I0, I1, I2, I3), two select inputs (S1, S0), and one output (Y).

*   **Boolean Expression:** $Y = (\bar{S1}\bar{S0} \cdot I0) + (\bar{S1}S0 \cdot I1) + (S1\bar{S0} \cdot I2) + (S1S0 \cdot I3)$

*   **Verilog Implementation (using `assign` with concatenation for select lines):**

    ```verilog
    module mux_4_to_1 (
        input  wire [3:0] i, // Inputs I0, I1, I2, I3
        input  wire [1:0] sel, // Select lines S1, S0
        output wire y
    );

        // Note: Concatenation (i[3], i[2], i[1], i[0]) is used for clarity
        // In this case, we directly map to the select values
        assign y = (sel == 2'b00) ? i[0] :
                   (sel == 2'b01) ? i[1] :
                   (sel == 2'b10) ? i[2] :
                                  i[3]; // sel == 2'b11

    endmodule
    ```

*   **Verilog Implementation (using `always @(*)` and `case`):**

    ```verilog
    module mux_4_to_1_case (
        input  wire [3:0] i, // Inputs I0, I1, I2, I3
        input  wire [1:0] sel, // Select lines S1, S0
        output wire y
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

### 3.3. General $N$-to-1 Mux

For a general $N$-to-1 Mux, where $N = 2^k$, you will have $N$ data inputs and $k$ select lines. The `case` statement within an `always @(*)` block is the most scalable and readable approach.

*   **Verilog Implementation (using `always @(*)` and `case` for 8-to-1 Mux):**

    ```verilog
    module mux_8_to_1 (
        input  wire [7:0] data_in, // Inputs D0 to D7
        input  wire [2:0] sel,     // Select lines S2, S1, S0
        output wire       data_out
    );

        always @(*) begin
            case (sel)
                3'b000: data_out = data_in[0];
                3'b001: data_out = data_in[1];
                3'b010: data_out = data_in[2];
                3'b011: data_out = data_in[3];
                3'b100: data_out = data_in[4];
                3'b101: data_out = data_in[5];
                3'b110: data_out = data_in[6];
                3'b111: data_out = data_in[7];
                default: data_out = 1'bx; // Handle invalid select value
            endcase
        end

    endmodule
    ```

---

## 4. Implementing Demux in Verilog

### 4.1. 1-to-2 Demux

A 1-to-2 Demux has one data input (I), two select inputs (S0, S1) used to select which of the two outputs (Y0, Y1) receives the input. For a 1-to-2 Demux, only one select line (S) is needed.

*   **Functionality:**
    *   If S = 0, I is routed to Y0, and Y1 is 0.
    *   If S = 1, I is routed to Y1, and Y0 is 0.

*   **Verilog Implementation (using `assign`):**

    ```verilog
    module demux_1_to_2 (
        input  wire i,
        input  wire sel,
        output wire y0,
        output wire y1
    );

        assign y0 = (~sel & i); // Output Y0 is active when sel is 0
        assign y1 = (sel & i);  // Output Y1 is active when sel is 1

    endmodule
    ```

*   **Verilog Implementation (using `always @(*)` and `if-else`):**

    ```verilog
    module demux_1_to_2_always (
        input  wire i,
        input  wire sel,
        output wire y0,
        output wire y1
    );

        always @(*) begin
            if (sel == 1'b0) begin
                y0 = i;
                y1 = 1'b0;
            end else begin // sel == 1'b1
                y0 = 1'b0;
                y1 = i;
            end
        end

    endmodule
    ```

### 4.2. 1-to-4 Demux

A 1-to-4 Demux has one data input (I), two select lines (S1, S0), and four outputs (Y0, Y1, Y2, Y3).

*   **Functionality:** The combination of S1 and S0 determines which output receives the input data. The other outputs are set to 0.

*   **Verilog Implementation (using `assign`):**

    ```verilog
    module demux_1_to_4 (
        input  wire i,
        input  wire [1:0] sel, // Select lines S1, S0
        output wire [3:0] y    // Outputs Y0, Y1, Y2, Y3
    );

        assign y[0] = (sel == 2'b00) ? i : 1'b0;
        assign y[1] = (sel == 2'b01) ? i : 1'b0;
        assign y[2] = (sel == 2'b10) ? i : 1'b0;
        assign y[3] = (sel == 2'b11) ? i : 1'b0;

    endmodule
    ```

*   **Verilog Implementation (using `always @(*)` and `case`):**

    ```verilog
    module demux_1_to_4_case (
        input  wire i,
        input  wire [1:0] sel, // Select lines S1, S0
        output wire [3:0] y    // Outputs Y0, Y1, Y2, Y3
    );

        always @(*) begin
            case (sel)
                2'b00: begin y[0] = i; y[1] = 1'b0; y[2] = 1'b0; y[3] = 1'b0; end
                2'b01: begin y[0] = 1'b0; y[1] = i; y[2] = 1'b0; y[3] = 1'b0; end
                2'b10: begin y[0] = 1'b0; y[1] = 1'b0; y[2] = i; y[3] = 1'b0; end
                2'b11: begin y[0] = 1'b0; y[1] = 1'b0; y[2] = 1'b0; y[3] = i; end
                default: begin y[0] = 1'bx; y[1] = 1'bx; y[2] = 1'bx; y[3] = 1'bx; end // Handle invalid select values
            endcase
        end

    endmodule
    ```

### 4.3. General 1-to-$N$ Demux

For a general 1-to-$N$ Demux, where $N = 2^k$, you will have 1 data input and $k$ select lines. The `case` statement is again the most suitable for implementation.

*   **Verilog Implementation (using `always @(*)` and `case` for 1-to-8 Demux):**

    ```verilog
    module demux_1_to_8 (
        input  wire       data_in,  // Input D
        input  wire [2:0] sel,      // Select lines S2, S1, S0
        output wire [7:0] data_out  // Outputs Y0 to Y7
    );

        always @(*) begin
            // Initialize all outputs to 0
            data_out = 8'b00000000;
            // Assign input to the selected output
            case (sel)
                3'b000: data_out[0] = data_in;
                3'b001: data_out[1] = data_in;
                3'b010: data_out[2] = data_in;
                3'b011: data_out[3] = data_in;
                3'b100: data_out[4] = data_in;
                3'b101: data_out[5] = data_in;
                3'b110: data_out[6] = data_in;
                3'b111: data_out[7] = data_in;
                default: // Optional: Handle invalid select value, outputs remain 0
            endcase
        end

    endmodule
    ```
    **Important Note:** In the 1-to-$N$ Demux implementation, it's crucial to ensure that only one output is active at a time. Initializing all outputs to 0 before the `case` statement and then assigning the input to the selected output is a common and robust way to achieve this.

---

## 5. Simulation and Verification

To verify the functionality of your Verilog code, you need to write a **testbench**. A testbench is a separate Verilog module that instantiates your design under test (DUT) and provides input stimuli to it, while monitoring the outputs.

### 5.1. Testbench Structure

```verilog
// Testbench for the Mux/Demux module

`timescale 1ns / 1ps // Define time units

module <your_module_name>_tb; // Testbench module name

    // Declare signals to connect to the DUT
    <input_type> <input_signal>;
    <input_type> <input_signal>;
    ...
    <output_type> <output_signal>;
    <output_type> <output_signal>;
    ...

    // Instantiate the Device Under Test (DUT)
    <your_module_name> dut (
        .<dut_input_port>(<input_signal>),
        .<dut_input_port>(<input_signal>),
        ...
        .<dut_output_port>(<output_signal>),
        .<dut_output_port>(<output_signal>),
        ...
    );

    // Stimulus generation
    initial begin
        // Apply inputs and observe outputs over time
        // Use #delay to control timing

        // Example for a 2-to-1 Mux:
        sel = 0; i0 = 0; i1 = 0; #10; // Expect y = 0
        sel = 0; i0 = 1; i1 = 0; #10; // Expect y = 1
        sel = 1; i0 = 0; i1 = 1; #10; // Expect y = 1
        sel = 1; i0 = 1; i1 = 0; #10; // Expect y = 0

        // More test cases for different input combinations...

        $finish; // End simulation
    end

    // Optional: Monitor signals using $display or $monitor
    // initial begin
    //     $monitor("Time=%0t sel=%b i0=%b i1=%b y=%b", $time, sel, i0, i1, dut.y);
    // end

endmodule
```

### 5.2. Example Testbench for `mux_2_to_1`

```verilog
`timescale 1ns / 1ps

module mux_2_to_1_tb;

    // Signals for the Mux
    wire w_y;
    reg  r_i0;
    reg  r_i1;
    reg  r_sel;

    // Instantiate the Mux
    mux_2_to_1 dut (
        .i0(r_i0),
        .i1(r_i1),
        .sel(r_sel),
        .y(w_y)
    );

    // Stimulus generation
    initial begin
        $display("Starting Mux 2-to-1 Simulation");

        // Test Case 1: sel = 0, i0 = 0, i1 = 0
        r_sel = 1'b0; r_i0 = 1'b0; r_i1 = 1'b0; #10;
        $display("Time=%0t: sel=%b, i0=%b, i1=%b, y=%b (Expected: 0)", $time, r_sel, r_i0, r_i1, w_y);
        if (w_y !== 1'b0) $error("Test Failed!");

        // Test Case 2: sel = 0, i0 = 1, i1 = 0
        r_sel = 1'b0; r_i0 = 1'b1; r_i1 = 1'b0; #10;
        $display("Time=%0t: sel=%b, i0=%b, i1=%b, y=%b (Expected: 1)", $time, r_sel, r_i0, r_i1, w_y);
        if (w_y !== 1'b1) $error("Test Failed!");

        // Test Case 3: sel = 1, i0 = 0, i1 = 1
        r_sel = 1'b1; r_i0 = 1'b0; r_i1 = 1'b1; #10;
        $display("Time=%0t: sel=%b, i0=%b, i1=%b, y=%b (Expected: 1)", $time, r_sel, r_i0, r_i1, w_y);
        if (w_y !== 1'b1) $error("Test Failed!");

        // Test Case 4: sel = 1, i0 = 1, i1 = 0
        r_sel = 1'b1; r_i0 = 1'b1; r_i1 = 1'b0; #10;
        $display("Time=%0t: sel=%b, i0=%b, i1=%b, y=%b (Expected: 0)", $time, r_sel, r_i0, r_i1, w_y);
        if (w_y !== 1'b0) $error("Test Failed!");

        $display("Simulation Finished.");
        $finish; // End simulation
    end

endmodule
```

---

## 6. Relation to Course Outcomes

This experiment directly contributes to several course outcomes:

*   **CO1: Design and demonstrate the functioning of various combinational and sequential circuits using ICs (Knowledge Level: K3)**
    *   You are designing combinational circuits (Mux, Demux) using Verilog. While this experiment focuses on HDL implementation, the principles are directly transferable to designing with physical ICs (e.g., 74157 for Mux, 74154 for Demux). You are demonstrating understanding of their functional behavior.

*   **CO2: Apply an industry compatible hardware description language to implement digital circuits (Knowledge Level: K3)**
    *   This is the primary outcome of this experiment. You are learning to use Verilog to model Mux and Demux, which are fundamental digital circuit blocks.

*   **CO3: Implement digital circuits on FPGA boards and connect external hardware to the boards (Knowledge Level: K3)**
    *   Although this specific experiment might not involve an FPGA, the Verilog code developed here is synthesizable. This means it can be compiled and loaded onto an FPGA board, realizing the Mux/Demux functionality in hardware. You are building the foundation for this outcome.

*   **CO4: Function effectively as an individual and in a team to accomplish the given task. (Knowledge Level: K2)**
    *   Completing this experiment requires understanding the task, designing the Verilog code, writing testbenches, and potentially debugging. This process encourages individual learning and, if done in a team, fosters collaboration and effective task accomplishment.

---

## 7. Important Points to Remember

*   **Combinational Logic:** Mux and Demux are combinational circuits. Their outputs are solely dependent on the current inputs, with no memory elements.
*   **Verilog Modeling Styles:** You can model combinational logic using continuous assignments (`assign`), procedural blocks with level-sensitive sensitivity lists (`always @(*)`), or a combination of both.
*   **Sensitivity List in `always`:** For combinational logic, always use `always @(*)` or explicitly list all inputs to the `always` block to ensure correct synthesis and simulation.
*   **`case` Statement for Selection:** The `case` statement is highly effective for implementing Mux and Demux designs, especially for larger versions.
*   **`default` Case:** In `case` statements for combinational logic, it's good practice to include a `default` case, especially for select signals, to assign a known or 'x' value to prevent unintended latches.
*   **Testbenches are Crucial:** Thoroughly test your Verilog modules using comprehensive testbenches to ensure correctness before synthesis.
*   **Synthesis:** Verilog code for combinational circuits is generally straightforward to synthesize into actual logic gates by synthesis tools.

---

## 8. Practice Questions/Exercises

**Q1. Verilog Implementation:**
Write a Verilog module for a 1-to-8 demultiplexer that takes a single input `data_in`, a 3-bit select signal `sel`, and produces eight outputs `data_out[7:0]`. Ensure that only the selected output is active (equal to `data_in`) and all others are 0. Use the `case` statement within an `always @(*)` block.

**Answer:**
```verilog
module demux_1_to_8_practice (
    input  wire       data_in,
    input  wire [2:0] sel,
    output wire [7:0] data_out
);

    always @(*) begin
        data_out = 8'b00000000; // Initialize all outputs to 0
        case (sel)
            3'b000: data_out[0] = data_in;
            3'b001: data_out[1] = data_in;
            3'b010: data_out[2] = data_in;
            3'b011: data_out[3] = data_in;
            3'b100: data_out[4] = data_in;
            3'b101: data_out[5] = data_in;
            3'b110: data_out[6] = data_in;
            3'b111: data_out[7] = data_in;
            default: data_out = 8'bxxxxxxxx; // Or handle as needed
        endcase
    end

endmodule
```

**Q2. Boolean Expression to Verilog:**
Given the boolean expression for a 4-to-1 multiplexer:
$Y = (\overline{S1} \cdot \overline{S0} \cdot I0) + (\overline{S1} \cdot S0 \cdot I1) + (S1 \cdot \overline{S0} \cdot I2) + (S1 \cdot S0 \cdot I3)$
Write a Verilog module for this 4-to-1 Mux using continuous assignments (`assign`) and bitwise operators.

**Answer:**
```verilog
module mux_4_to_1_bitwise (
    input  wire i0,
    input  wire i1,
    input  wire i2,
    input  wire i3,
    input  wire s0,
    input  wire s1,
    output wire y
);

    assign y = (~s1 & ~s0 & i0) | (~s1 & s0 & i1) | (s1 & ~s0 & i2) | (s1 & s0 & i3);

endmodule
```

**Q3. Understanding Select Lines:**
For a multiplexer with 16 data inputs, how many select lines are required, and what is the corresponding Verilog syntax for the select input?

**Answer:**
To select from 16 inputs ($2^4 = 16$), you need 4 select lines.
Verilog syntax for the select input would be: `input wire [3:0] sel;`

---

This concludes Module 13, Experiment 3. You have learned how to model fundamental Mux and Demux circuits using Verilog, which are essential skills for subsequent experiments and real-world digital design.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
