---
title: "(a) Make a gate level design of an 8 : 1 multiplexer, write to FPGA and test its functionality."
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 15: Experiment 5. Multiplexer and Logic Implementation in FPGA"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe464"
status: "completed"
scrapedAt: "2026-05-23T17:46:39.117Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY - Module 15: Experiment 5 - Multiplexer and Logic Implementation in FPGA

## Topic (a): Gate Level Design of an 8:1 Multiplexer, Write to FPGA and Test its Functionality

---

### 1. Introduction to Multiplexers (MUX)

**Definition:** A multiplexer (MUX) is a combinational logic circuit that selects one of several input signals and forwards the selected input to a single output line. The selection is controlled by a set of select lines.

**Analogy:** Think of a MUX as a "data selector" or a "many-to-one switch." Imagine a phone operator connecting one of many incoming calls to a single outgoing line based on which line the operator chooses.

**Key Components:**
*   **Data Inputs:** Multiple input lines that carry the data signals.
*   **Select Inputs:** Control lines that determine which data input is passed to the output.
*   **Enable Input (Optional):** An active-high or active-low input that can enable or disable the entire multiplexer.
*   **Output:** A single line that carries the selected data input.

**Number of Select Lines:** For a MUX with $2^n$ data inputs, there are $n$ select lines.

---

### 2. Understanding an 8:1 Multiplexer

*   **Inputs:**
    *   8 Data Inputs ($D_0$ to $D_7$)
    *   3 Select Inputs ($S_2$, $S_1$, $S_0$)
    *   1 Enable Input ($E$) (optional, but good practice for control)
*   **Output:** 1 Output ($Y$)

**Functionality:**
The select lines ($S_2S_1S_0$) determine which of the data inputs is routed to the output $Y$. The binary value of the select inputs corresponds to the index of the data input that will be selected.

| $S_2$ | $S_1$ | $S_0$ | Selected Input | Output ($Y$) |
| :---: | :---: | :---: | :------------: | :----------: |
| 0     | 0     | 0     | $D_0$          | $D_0$        |
| 0     | 0     | 1     | $D_1$          | $D_1$        |
| 0     | 1     | 0     | $D_2$          | $D_2$        |
| 0     | 1     | 1     | $D_3$          | $D_3$        |
| 1     | 0     | 0     | $D_4$          | $D_4$        |
| 1     | 0     | 1     | $D_5$          | $D_5$        |
| 1     | 1     | 0     | $D_6$          | $D_6$        |
| 1     | 1     | 1     | $D_7$          | $D_7$        |

**Enable Input:** If the Enable input ($E$) is low (for active-low enable) or high (for active-high enable), the output $Y$ will be disabled (typically 0 or floating, depending on implementation). When enabled, the MUX operates as described above. For this experiment, we will assume an active-high enable.

---

### 3. Gate Level Design of an 8:1 Multiplexer

**Approach:** We will build the 8:1 MUX using basic logic gates: AND, OR, and NOT gates.

**Core Idea:** For each data input $D_i$, we need a gate combination that enables that input to reach the output *only* when the corresponding select line combination is active. This "enabling" signal will then be OR-ed together to produce the final output.

**Boolean Expression:**
The output $Y$ can be expressed as:

$Y = (\overline{S_2}\overline{S_1}\overline{S_0} \cdot D_0) + (\overline{S_2}\overline{S_1}S_0 \cdot D_1) + (\overline{S_2}S_1\overline{S_0} \cdot D_2) + (\overline{S_2}S_1S_0 \cdot D_3) + (S_2\overline{S_1}\overline{S_0} \cdot D_4) + (S_2\overline{S_1}S_0 \cdot D_5) + (S_2S_1\overline{S_0} \cdot D_6) + (S_2S_1S_0 \cdot D_7)$

If an Enable input $E$ (active-high) is included:

$Y = E \cdot [(\overline{S_2}\overline{S_1}\overline{S_0} \cdot D_0) + (\overline{S_2}\overline{S_1}S_0 \cdot D_1) + ... + (S_2S_1S_0 \cdot D_7)]$

**Gate Implementation:**

1.  **Generate Select Line Combinations:**
    *   For each data input $D_i$, we need a unique combination of select lines.
    *   This requires inverters (NOT gates) to generate $\overline{S_2}$, $\overline{S_1}$, $\overline{S_0}$.
    *   We need 3-input AND gates to generate the 8 unique minterms of $S_2, S_1, S_0$.
        *   AND gate 1: inputs $\overline{S_2}, \overline{1}, \overline{0}$
        *   AND gate 2: inputs $\overline{S_2}, \overline{S_1}, S_0$
        *   ... and so on for all 8 combinations.

2.  **Combine with Data Inputs:**
    *   Connect each minterm output from the AND gates to the data input of a separate AND gate.
    *   The other input of these AND gates will be the corresponding data input ($D_i$).
        *   AND gate for $D_0$: inputs (minterm for 000), $D_0$
        *   AND gate for $D_1$: inputs (minterm for 001), $D_1$
        *   ... and so on.

3.  **Combine Outputs with OR Gate:**
    *   Connect the outputs of all 8 of these AND gates (from step 2) to the inputs of a single 8-input OR gate.
    *   The output of this OR gate is the MUX output $Y$.

4.  **Incorporate Enable:**
    *   If an Enable input $E$ is used, connect it to another input of each of the 8 AND gates (from step 2). This ensures that if $E$ is low, all outputs of these AND gates will be low, regardless of the data inputs or select lines.
    *   Alternatively, and more efficiently, connect $E$ to one input of an additional AND gate placed before the final OR gate. The output of the 8-input OR gate is then fed to this final AND gate, with $E$ as the other input.

**Circuit Diagram (Conceptual):**

```
        S2 --|
             |-- NOT -- S2_bar --|
        S1 --|                      |
             |-- NOT -- S1_bar --|   |
        S0 --|                      |
             |-- NOT -- S0_bar --|   |
                                    |
Data D0 ----| AND --|-----------|   |
                |-----| AND     |   |
Data D1 ----| AND --|----|---|   |
                |-----| AND |---|   |
...                                 |---- OR ---- Y
Data D7 ----| AND --|----|---|   |
                |-----| AND |---|   |
```
*(This is a simplified representation. Each AND gate needs the correct minterm of select lines and the data input. The final OR gate combines all these.*)

**Using Integrated Circuits (ICs):**
To implement this physically, you would use:
*   Inverters (e.g., 74LS04)
*   2-input AND gates (e.g., 74LS08) or 3-input AND gates (e.g., 74LS11)
*   8-input OR gate (e.g., 74LS32 for 4x2-input OR gates cascaded). You might need to build an 8-input OR gate from smaller OR gates.
*   A universal gate like NAND or NOR can also be used to build the MUX.

**From Textbooks:**
*   **Roth C.H. - Fundamentals of Logic Design:** Chapter 5 typically covers combinational logic circuits, including multiplexers. It details their truth tables, Boolean expressions, and various implementation methods (gate-level, using MSI chips). Roth emphasizes understanding the functionality derived from the truth table.
*   **Bhasker - Verilog HDL Synthesis:** While focused on HDL, Bhasker's book implicitly relies on the gate-level understanding as the synthesis tool translates HDL code into equivalent gate-level structures. The design process starts with understanding the logic function, which is then expressed in HDL.

---

### 4. Designing in Verilog HDL (for FPGA Implementation)

While the prompt asks for a *gate-level design*, the practical implementation on an FPGA is done using a Hardware Description Language (HDL) like Verilog. The FPGA synthesis tool will then convert this HDL code into an equivalent gate-level netlist using the available logic elements on the FPGA.

**Verilog Module for 8:1 MUX (Gate Level):**

```verilog
// Module for 8:1 Multiplexer using gate-level primitives (AND, OR, NOT)

module mux_8_to_1_gate_level (
    input wire d0, d1, d2, d3, d4, d5, d6, d7, // 8 Data Inputs
    input wire s2, s1, s0,                  // 3 Select Inputs
    input wire en,                         // Enable Input (active-high)
    output wire y                          // Output
);

    // Internal wires for select line combinations (minterms)
    wire s2_n, s1_n, s0_n;

    // Generate inverted select lines
    not n1 (s0_n, s0);
    not n2 (s1_n, s1);
    not n3 (s2_n, s2);

    // Instantiate 3-input AND gates for each minterm
    // Output is minterm * data input
    and a0 (y0, s2_n, s1_n, s0_n, d0);
    and a1 (y1, s2_n, s1_n, s0,   d1);
    and a2 (y2, s2_n, s1,   s0_n, d2);
    and a3 (y3, s2_n, s1,   s0,   d3);
    and a4 (y4, s2,   s1_n, s0_n, d4);
    and a5 (y5, s2,   s1_n, s0,   d5);
    and a6 (y6, s2,   s1,   s0_n, d6);
    and a7 (y7, s2,   s1,   s0,   d7);

    // 8-input OR gate to combine the outputs
    // We'll use 2-input OR gates cascaded to form an 8-input OR
    wire or_out01, or_out23, or_out45, or_out67;
    wire or_out0123, or_out4567;

    or o01 (or_out01, y0, y1);
    or o23 (or_out23, y2, y3);
    or o45 (or_out45, y4, y5);
    or o67 (or_out67, y6, y7);

    or o0123 (or_out0123, or_out01, or_out23);
    or o4567 (or_out4567, or_out45, or_out67);

    or o_final (y_unenabled, or_out0123, or_out4567);

    // Enable the output
    and a_enable (y, y_unenabled, en);

endmodule
```

**Important Considerations for Verilog:**
*   **`module` and `endmodule`:** Define the scope of the design.
*   **`input wire` / `output wire`:** Declare ports. `wire` is a default connection type.
*   **`not`, `and`, `or`:** These are primitive gate instances provided by Verilog.
*   **Instantiation:** You are instantiating these gates with specific names (e.g., `n1`) and connecting them to declared or internal wires.
*   **Enable Logic:** The final `and` gate connects the OR-ed outputs with the enable signal.

**Alternative Verilog (Behavioral/Dataflow):**
While the prompt asks for gate-level, it's important to know the more common ways to describe MUXes in Verilog. The synthesis tool will still create a gate-level netlist.

```verilog
// Behavioral model of 8:1 Multiplexer
module mux_8_to_1_behavioral (
    input wire [7:0] data_in, // Data inputs as a bus
    input wire [2:0] select,  // Select inputs as a bus
    input wire en,            // Enable Input (active-high)
    output wire y             // Output
);

    // Using a continuous assignment with conditional operator (ternary operator)
    // This directly maps to multiplexer logic by the synthesis tool.
    assign y = en ? data_in[select] : 1'b0; // If enabled, select data_in[select], else output 0

endmodule
```

*   **`[7:0] data_in`:** Declares an 8-bit bus for data inputs.
*   **`[2:0] select`:** Declares a 3-bit bus for select inputs.
*   **`assign`:** Used for continuous assignments (combinational logic).
*   **`? :` (Ternary Operator):** A concise way to represent multiplexer functionality.

**Reference:**
*   **Palnitkar S. - Verilog HDL: A guide to digital design and synthesis:** Chapter 3 and onwards often cover dataflow modeling, behavioral modeling, and the use of constructs like `assign` and the ternary operator, which are efficient for describing combinational logic like MUXes. Palnitkar explains how these higher-level descriptions are mapped to hardware.

---

### 5. Writing to FPGA and Testing Functionality

This involves using FPGA development tools. The general workflow is:

1.  **Create Project:** In your FPGA IDE (e.g., Xilinx Vivado, Intel Quartus Prime), create a new project and select your target FPGA board.

2.  **Add Verilog Source File:** Add the Verilog code for your `mux_8_to_1_gate_level` module.

3.  **Create Testbench:** Write a Verilog testbench to simulate the MUX and verify its behavior. This is crucial for debugging before hardware implementation.

    ```verilog
    // Testbench for 8:1 Multiplexer
    `timescale 1ns / 1ps

    module tb_mux_8_to_1;

        // Inputs
        reg d0, d1, d2, d3, d4, d5, d6, d7;
        reg s2, s1, s0;
        reg en;

        // Outputs
        wire y;

        // Instantiate the Unit Under Test (UUT)
        mux_8_to_1_gate_level uut (
            .d0(d0), .d1(d1), .d2(d2), .d3(d3), .d4(d4), .d5(d5), .d6(d6), .d7(d7),
            .s2(s2), .s1(s1), .s0(s0),
            .en(en),
            .y(y)
        );

        // Stimulus generation
        initial begin
            // Initialize all inputs
            d0 = 0; d1 = 0; d2 = 0; d3 = 0; d4 = 0; d5 = 0; d6 = 0; d7 = 0;
            s2 = 0; s1 = 0; s0 = 0;
            en = 0;

            // Test Case 1: Enable and select D0
            #10 en = 1; d0 = 1; // Set D0 to 1
            #10 s0 = 0; s1 = 0; s2 = 0; // Select D0 (000)
            // Expected y = 1

            // Test Case 2: Select D3
            #10 d3 = 1; // Set D3 to 1
            #10 s0 = 1; s1 = 1; s2 = 0; // Select D3 (011)
            // Expected y = 1

            // Test Case 3: Select D7
            #10 d7 = 1; // Set D7 to 1
            #10 s0 = 1; s1 = 1; s2 = 1; // Select D7 (111)
            // Expected y = 1

            // Test Case 4: Input is 0, but selected
            #10 d0 = 0; d1 = 0; d2 = 0; d3 = 0; d4 = 0; d5 = 0; d6 = 0; d7 = 0; // All inputs 0
            #10 s0 = 0; s1 = 0; s2 = 0; // Select D0
            // Expected y = 0

            // Test Case 5: Disabled
            #10 en = 0;
            // Expected y = 0

            // Add more test cases for all 8 inputs and various combinations
            // Test case: select D5 (101)
            #10 d5 = 1;
            #10 s0 = 1; s1 = 0; s2 = 1; // Select D5
            // Expected y = 1

            // Test case: select D2 (010)
            #10 d2 = 1;
            #10 s0 = 0; s1 = 1; s2 = 0; // Select D2
            // Expected y = 1

            // Test case: select D6 (110) with D0=1, D6=0
            #10 d0 = 1; d6 = 0;
            #10 s0 = 0; s1 = 1; s2 = 1; // Select D6
            // Expected y = 0

            #20 $finish; // End simulation
        end

        // Optional: Monitor signals
        initial begin
            $monitor("Time=%0t En=%b S2=%b S1=%b S0=%b D7=%b D6=%b D5=%b D4=%b D3=%b D2=%b D1=%b D0=%b Y=%b",
                   $time, en, s2, s1, s0, d7, d6, d5, d4, d3, d2, d1, d0, y);
        end

    endmodule
    ```

4.  **Simulate:** Run the simulation using the testbench. Verify that the output `y` matches the expected behavior for all tested input combinations.

5.  **Synthesize:** The FPGA IDE converts your Verilog code into a netlist of logic gates that can be implemented on the FPGA fabric.

6.  **Implement:** This step includes placement (assigning logic to specific FPGA resources) and routing (connecting these resources).

7.  **Generate Bitstream:** Create the configuration file (bitstream) that will program the FPGA.

8.  **Program FPGA:** Download the bitstream to your FPGA board.

9.  **Hardware Testing:**
    *   **Connect Inputs:** You'll need to connect physical switches or buttons to the FPGA's input pins to control the data inputs ($D_0$-$D_7$), select inputs ($S_0$-$S_2$), and the enable input ($E$).
    *   **Connect Output:** Connect an LED or an oscilloscope to the FPGA's output pin connected to `Y` to observe the MUX's output.
    *   **Operate:** Manipulate the switches to set different input values and select lines. Observe the LED (or scope trace) to confirm that the correct data input is being passed to the output based on the select lines and enable signal.

**Connecting to FPGA Pins (Pin Assignment/XDC):**
You'll need a constraints file (e.g., `.xdc` for Xilinx) to map the Verilog module's ports to the physical pins of your FPGA board.

```xdc
# Example XDC for a hypothetical FPGA board
# Assume switches for data inputs, select lines, and enable
# Assume LEDs for data inputs (optional for debugging) and the final output Y

# Set the clock frequency (if applicable, though not directly used by MUX)
# create_clock -period 10.000 -name sys_clk_pin -waveform {0.000 5.000} [get_ports sys_clk]

# Data Inputs D0-D7
set_property PULLUP true [get_ports d0]
set_property PULLUP true [get_ports d1]
# ... and so on for d2 to d7

# Select Inputs S0-S2
set_property PULLUP true [get_ports s0]
set_property PULLUP true [get_ports s1]
set_property PULLUP true [get_ports s2]

# Enable Input E
set_property PULLUP true [get_ports en]

# FPGA Pin Assignments (These will be specific to your board)
# Example mapping to switches and LEDs on a generic board:

# Data Inputs
set_property PACKAGE_PIN G17 [get_ports d0]
set_property PACKAGE_PIN G18 [get_ports d1]
set_property PACKAGE_PIN H17 [get_ports d2]
set_property PACKAGE_PIN H18 [get_ports d3]
set_property PACKAGE_PIN J17 [get_ports d4]
set_property PACKAGE_PIN J18 [get_ports d5]
set_property PACKAGE_PIN K17 [get_ports d6]
set_property PACKAGE_PIN K18 [get_ports d7]

# Select Inputs
set_property PACKAGE_PIN L17 [get_ports s0]
set_property PACKAGE_PIN L18 [get_ports s1]
set_property PACKAGE_PIN M17 [get_ports s2]

# Enable Input
set_property PACKAGE_PIN M18 [get_ports en]

# Output Y (connected to an LED)
set_property PACKAGE_PIN P17 [get_ports y] # Assuming P17 is an LED pin

```

**Learning Outcomes Addressed:**
*   **CO1 (Design and demonstrate functioning):** We are designing the MUX and will demonstrate its functionality through simulation and hardware testing. (K3)
*   **CO2 (Apply HDL):** We are using Verilog HDL to describe the MUX. (K3)
*   **CO3 (Implement on FPGA):** The core of this section is the process of implementing the design on an FPGA board and connecting external hardware. (K3)
*   **CO4 (Function effectively):** This is achieved by working in a team during the lab session for design, simulation, implementation, and testing. (K2)

---

### 6. Key Concepts and Important Points to Remember

*   **Multiplexer Function:** Selects one of many inputs based on select lines.
*   **Gate-Level Design:** Building logic using basic gates (AND, OR, NOT). This is the fundamental building block.
*   **Boolean Algebra:** Essential for deriving the logic expression for a MUX.
*   **Verilog HDL:** Industry-standard language for describing digital hardware.
*   **Synthesis:** The process of converting HDL code into a gate-level netlist.
*   **FPGA:** Field-Programmable Gate Array, a reconfigurable hardware device.
*   **Testbench:** Crucial for verifying HDL code functionality *before* hardware implementation.
*   **Simulation vs. Hardware:** Differences between simulated behavior and actual hardware performance.
*   **Pin Constraints (XDC):** Necessary to map your design ports to physical FPGA pins.
*   **Enable Input:** Provides a global control for the MUX. If disabled, the output is fixed (usually 0).
*   **Complexity:** An 8:1 MUX requires 8 3-input AND gates, 7 2-input OR gates (to build an 8-input OR), and 3 inverters.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the number of select lines required for a 16:1 multiplexer?
*   **Answer:** For a $2^n : 1$ MUX, $n$ select lines are needed. For a 16:1 MUX, $16 = 2^4$, so 4 select lines are required.

**Question 2:**
Write the Boolean expression for a 2:1 multiplexer with data inputs $D_0, D_1$, select input $S$, and output $Y$. Include an active-high enable input $E$.
*   **Answer:** $Y = E \cdot [(\overline{S} \cdot D_0) + (S \cdot D_1)]$

**Question 3:**
If the select lines $S_2S_1S_0$ of an 8:1 multiplexer are set to `101`, which data input will be connected to the output $Y$, assuming the MUX is enabled?
*   **Answer:** The binary value `101` corresponds to decimal 5. Therefore, data input $D_5$ will be connected to the output $Y$.

**Question 4:**
Consider the Verilog gate-level code for the 8:1 MUX. If you were to modify it to use a behavioral description, what Verilog construct would you likely use for the core selection logic?
*   **Answer:** The `assign` statement with a ternary operator (`? :`) is the most common and efficient way to describe multiplexer functionality behaviorally in Verilog.

**Question 5 (FPGA Specific):**
Why is it important to create a testbench for your Verilog design before programming it onto an FPGA?
*   **Answer:** A testbench allows you to simulate the design and verify its logical correctness using a simulator. This helps catch design errors early, saving time and effort that would otherwise be spent debugging on hardware. Hardware debugging is often more time-consuming and complex than simulation.

**Exercise 1 (Verilog):**
Write a Verilog module for a 4:1 multiplexer using gate-level primitives. The inputs are $D_0, D_1, D_2, D_3$, select lines $S_1, S_0$, and output $Y$. Assume no enable input for simplicity.

*   **Solution:**
    ```verilog
    module mux_4_to_1_gate_level (
        input wire d0, d1, d2, d3,
        input wire s1, s0,
        output wire y
    );

        wire s1_n, s0_n;
        wire y0, y1, y2, y3;

        // Invert select lines
        not n1 (s0_n, s0);
        not n2 (s1_n, s1);

        // AND gates for minterms * data inputs
        and a0 (y0, s1_n, s0_n, d0);
        and a1 (y1, s1_n, s0,   d1);
        and a2 (y2, s1,   s0_n, d2);
        and a3 (y3, s1,   s0,   d3);

        // OR gate to combine outputs
        or o01 (y_intermediate1, y0, y1);
        or o23 (y_intermediate2, y2, y3);
        or o_final (y, y_intermediate1, y_intermediate2);

    endmodule
    ```

---
This concludes the study notes for Topic (a) of Module 15. Remember to refer to your textbooks for deeper theoretical insights into multiplexer design and HDL usage.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
