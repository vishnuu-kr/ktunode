---
title: "Experiment 2: Adders in Verilog"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 12: Experiment 2: Adders in Verilog"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe457"
status: "completed"
scrapedAt: "2026-05-23T17:46:30.695Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY

## Module 12: Experiment 2: Adders in Verilog

---

### 1. Introduction to Adders

Adders are fundamental combinational logic circuits that perform the arithmetic addition of binary numbers. They are crucial building blocks in almost all digital systems, from simple calculators to complex microprocessors. This experiment focuses on designing and implementing different types of adders using the Verilog Hardware Description Language (HDL).

**Key Concepts:**

*   **Binary Addition:** The process of adding binary numbers, similar to decimal addition, but with a base of 2.
    *   $0 + 0 = 0$ (Sum = 0, Carry = 0)
    *   $0 + 1 = 1$ (Sum = 1, Carry = 0)
    *   $1 + 0 = 1$ (Sum = 1, Carry = 0)
    *   $1 + 1 = 10$ (Sum = 0, Carry = 1)
*   **Half Adder:** A combinational circuit that adds two single binary bits, producing a Sum bit and a Carry-out bit.
*   **Full Adder:** A combinational circuit that adds three single binary bits (two input bits and a carry-in bit), producing a Sum bit and a Carry-out bit.
*   **Ripple Carry Adder (RCA):** A combinational circuit formed by cascading multiple Full Adders, where the carry-out of one stage becomes the carry-in of the next stage. This is the simplest adder but can be slow due to the ripple effect of the carry.
*   **Carry Lookahead Adder (CLA):** A more advanced adder design that generates carry signals in parallel, significantly speeding up the addition process by reducing the carry propagation delay.

---

### 2. Learning Outcomes Covered

This experiment aims to achieve the following learning outcomes:

*   **Design and demonstrate the functioning of various combinational circuits using Verilog HDL.** (CO1: K3)
    *   This experiment will involve designing Half Adders, Full Adders, and Ripple Carry Adders using Verilog.
*   **Apply an industry-compatible hardware description language to implement digital circuits.** (CO2: K3)
    *   Verilog will be used as the HDL for implementing the adder designs.
*   **Implement digital circuits on FPGA boards and connect external hardware to the boards.** (CO3: K3)
    *   The designed Verilog modules will be synthesized and implemented on an FPGA board. Input and output signals will be mapped to physical pins for testing with external hardware (e.g., switches for input, LEDs for output).
*   **Function effectively as an individual and in a team to accomplish the given task.** (CO2: K2)
    *   Students will work individually or in teams to design, simulate, and test the adder circuits.

---

### 3. Half Adder Design in Verilog

**Definition:** A Half Adder takes two single-bit inputs, $A$ and $B$, and produces two outputs: a Sum ($S$) and a Carry-out ($C_{out}$).

**Truth Table:**

| A | B | Sum (S) | Carry-out ($C_{out}$) |
|---|---|---------|-----------------------|
| 0 | 0 | 0       | 0                     |
| 0 | 1 | 1       | 0                     |
| 1 | 0 | 1       | 0                     |
| 1 | 1 | 0       | 1                     |

**Boolean Expressions:**

*   $S = A \oplus B$ (A XOR B)
*   $C_{out} = A \cdot B$ (A AND B)

**Verilog Implementation:**

We can implement a Half Adder using behavioral or structural Verilog.

**Behavioral Verilog (using assign statements):**

```verilog
// half_adder.v
module half_adder(
    input a,
    input b,
    output sum,
    output carry_out
);

    assign sum = a ^ b; // XOR operation for sum
    assign carry_out = a & b; // AND operation for carry-out

endmodule
```

**Explanation:**

*   `module half_adder(...)`: Declares a Verilog module named `half_adder` with input and output ports.
*   `input a, input b`: Declares two single-bit input ports.
*   `output sum, output carry_out`: Declares two single-bit output ports.
*   `assign sum = a ^ b;`: This is a continuous assignment statement that implements the XOR logic for the sum output. The `^` operator in Verilog represents the XOR operation.
*   `assign carry_out = a & b;`: This continuous assignment implements the AND logic for the carry-out output. The `&` operator in Verilog represents the AND operation.

---

### 4. Full Adder Design in Verilog

**Definition:** A Full Adder takes three single-bit inputs: $A$, $B$, and a Carry-in ($C_{in}$), and produces two outputs: a Sum ($S$) and a Carry-out ($C_{out}$). It's essentially a half adder with an added carry-in input.

**Truth Table:**

| $C_{in}$ | A | B | Sum (S) | Carry-out ($C_{out}$) |
|----------|---|---|---------|-----------------------|
| 0        | 0 | 0 | 0       | 0                     |
| 0        | 0 | 1 | 1       | 0                     |
| 0        | 1 | 0 | 1       | 0                     |
| 0        | 1 | 1 | 0       | 1                     |
| 1        | 0 | 0 | 1       | 0                     |
| 1        | 0 | 1 | 0       | 1                     |
| 1        | 1 | 0 | 0       | 1                     |
| 1        | 1 | 1 | 1       | 1                     |

**Boolean Expressions:**

*   $S = A \oplus B \oplus C_{in}$
*   $C_{out} = (A \cdot B) + (C_{in} \cdot (A \oplus B))$

**Verilog Implementation:**

**Behavioral Verilog (using assign statements):**

```verilog
// full_adder.v
module full_adder(
    input a,
    input b,
    input carry_in,
    output sum,
    output carry_out
);

    assign sum = a ^ b ^ carry_in; // XOR operations for sum
    assign carry_out = (a & b) | (carry_in & (a ^ b)); // AND and OR for carry-out

endmodule
```

**Explanation:**

*   The module declaration includes an additional input `carry_in`.
*   The `sum` output is calculated using three XOR operations.
*   The `carry_out` output is calculated using the boolean expression derived from the truth table, employing AND (`&`) and OR (`|`) operators.

**Structural Verilog (using instantiations of Half Adders):**

A Full Adder can be built using two Half Adders and an OR gate.

*   **Half Adder 1:** Adds A and B, producing $S_1 = A \oplus B$ and $C_{out1} = A \cdot B$.
*   **Half Adder 2:** Adds $S_1$ and $C_{in}$, producing $S = S_1 \oplus C_{in}$ and $C_{out2} = S_1 \cdot C_{in}$.
*   **OR Gate:** Combines $C_{out1}$ and $C_{out2}$ to produce the final $C_{out} = C_{out1} + C_{out2}$.

```verilog
// full_adder_structural.v
module full_adder_structural(
    input a,
    input b,
    input carry_in,
    output sum,
    output carry_out
);

    // Internal wires to connect the half adders
    wire s1, c1, c2;

    // Instantiate the first half adder
    half_adder ha1 (
        .a(a),
        .b(b),
        .sum(s1),
        .carry_out(c1)
    );

    // Instantiate the second half adder
    half_adder ha2 (
        .a(s1),
        .b(carry_in),
        .sum(sum),
        .carry_out(c2)
    );

    // OR the carry outputs from both half adders
    assign carry_out = c1 | c2;

endmodule

// Assume half_adder.v is available and included in the project.
// If not, the half_adder module definition needs to be in the same file
// or a separate file that is compiled along with this one.
```

**Explanation:**

*   This demonstrates a structural approach, where larger circuits are built by instantiating smaller, pre-defined modules.
*   `wire s1, c1, c2;`: Declares internal wires to connect the outputs of one component to the inputs of another.
*   `half_adder ha1 (...)`: Instantiates the `half_adder` module and assigns ports. `.a(a)` connects the module's `a` port to the input `a`.
*   `assign carry_out = c1 | c2;`: The final carry-out is the OR of the carries from the two half adders.

---

### 5. Ripple Carry Adder (RCA) Design in Verilog

**Definition:** An N-bit Ripple Carry Adder is formed by connecting N Full Adders in series. The carry-out of each stage is connected to the carry-in of the next stage, creating a "ripple" effect for the carry signal.

**N-bit RCA Structure:**

For an N-bit adder, we need N Full Adders.
*   The $i$-th Full Adder adds the $i$-th bits of the two numbers ($A_i$, $B_i$) and the carry-in from the previous stage ($C_{in, i}$).
*   It produces the $i$-th sum bit ($S_i$) and the carry-out to the next stage ($C_{out, i} = C_{in, i+1}$).
*   The least significant bit stage (LSB) has $C_{in, 0} = 0$.
*   The most significant bit stage (MSB) produces the final carry-out ($C_{out, N}$).

**Verilog Implementation (e.g., 4-bit RCA):**

```verilog
// ripple_carry_adder_4bit.v
module ripple_carry_adder_4bit(
    input [3:0] a,      // 4-bit input A
    input [3:0] b,      // 4-bit input B
    output [3:0] sum,   // 4-bit output Sum
    output cout         // Carry-out
);

    // Internal wires for carries between stages
    wire c1, c2, c3;

    // Instantiate four full adders

    // Stage 0 (LSB)
    full_adder fa0 (
        .a(a[0]),
        .b(b[0]),
        .carry_in(1'b0), // Initial carry-in is 0
        .sum(sum[0]),
        .carry_out(c1)
    );

    // Stage 1
    full_adder fa1 (
        .a(a[1]),
        .b(b[1]),
        .carry_in(c1),   // Carry-in from previous stage
        .sum(sum[1]),
        .carry_out(c2)
    );

    // Stage 2
    full_adder fa2 (
        .a(a[2]),
        .b(b[2]),
        .carry_in(c2),   // Carry-in from previous stage
        .sum(sum[2]),
        .carry_out(c3)
    );

    // Stage 3 (MSB)
    full_adder fa3 (
        .a(a[3]),
        .b(b[3]),
        .carry_in(c3),   // Carry-in from previous stage
        .sum(sum[3]),
        .carry_out(cout) // Final carry-out
    );

endmodule

// Assume full_adder.v is available.
// The full_adder module definition needs to be accessible.
```

**Explanation:**

*   `input [3:0] a, input [3:0] b`: Defines 4-bit input vectors. `[3:0]` indicates bits 3 down to 0.
*   `output [3:0] sum`: Defines a 4-bit output vector for the sum.
*   `output cout`: Defines the single-bit carry-out from the most significant bit.
*   `wire c1, c2, c3;`: Declares intermediate wires to connect the carry outputs of one `full_adder` instance to the carry inputs of the next.
*   Each `full_adder` instance represents one bit position of the addition.
*   The `carry_in` of the first stage (`fa0`) is hardcoded to `1'b0` (a 1-bit binary value of 0).
*   The `carry_out` of each stage is connected to the `carry_in` of the subsequent stage.
*   The `carry_out` of the last stage (`fa3`) is assigned to the module's `cout` output.

**Important Consideration (from Bhasker, "Verilog HDL Synthesis"):**

*   **Synthesis of Ripple Carry Adders:** Synthesis tools can automatically infer an N-bit adder if you use the `+` operator in a behavioral description. However, understanding the structural implementation is crucial for comprehending the performance implications (carry propagation delay).
*   For synthesis, the following behavioral description would typically infer a ripple-carry adder or a more optimized adder depending on the synthesis tool and target device:

    ```verilog
    // behavioral_adder_4bit.v
    module behavioral_adder_4bit(
        input [3:0] a,
        input [3:0] b,
        output [3:0] sum,
        output cout
    );

        // A temporary wire to hold the full 5-bit result
        wire [4:0] temp_sum;

        // Perform the addition
        assign temp_sum = a + b;

        // Assign the lower 4 bits to sum
        assign sum = temp_sum[3:0];

        // Assign the 5th bit (carry-out) to cout
        assign cout = temp_sum[4];

    endmodule
    ```
    This behavioral approach is much more concise but hides the underlying hardware structure. When targeting FPGAs, synthesis tools will try to optimize this. For learning purposes, understanding the structural RCA is vital.

---

### 6. Simulation and Testing

After writing the Verilog code, it needs to be simulated to verify its functionality.

**Steps for Simulation:**

1.  **Create a Testbench:** A testbench is a separate Verilog module that instantiates the design-under-test (DUT) and provides input stimuli to it, while monitoring the outputs.
2.  **Write Test Stimuli:** Define sequences of input values for $A$, $B$, and $C_{in}$ (for Full Adder) or $A$, $B$ (for Half Adder and RCA) to cover all possible cases and edge cases.
3.  **Run Simulation:** Use a Verilog simulator (e.g., ModelSim, Vivado Simulator, Icarus Verilog) to execute the testbench and the DUT.
4.  **Analyze Waveforms:** Observe the output waveforms to ensure they match the expected results based on the truth tables.

**Example Testbench for a 4-bit Ripple Carry Adder:**

```verilog
// tb_ripple_carry_adder_4bit.v
`timescale 1ns / 1ps

module tb_ripple_carry_adder_4bit;

    // Inputs to the DUT
    reg [3:0] tb_a;
    reg [3:0] tb_b;

    // Outputs from the DUT
    wire [3:0] tb_sum;
    wire tb_cout;

    // Instantiate the Device Under Test (DUT)
    ripple_carry_adder_4bit dut (
        .a(tb_a),
        .b(tb_b),
        .sum(tb_sum),
        .cout(tb_cout)
    );

    // Stimulus generation
    initial begin
        // Test Case 1: 0000 + 0000
        tb_a = 4'b0000; tb_b = 4'b0000; #10; // #10 means wait for 10 time units

        // Test Case 2: 0001 + 0001
        tb_a = 4'b0001; tb_b = 4'b0001; #10;

        // Test Case 3: 1111 + 0001 (carry out)
        tb_a = 4'b1111; tb_b = 4'b0001; #10;

        // Test Case 4: 1010 + 0110
        tb_a = 4'b1010; tb_b = 4'b0110; #10;

        // Test Case 5: 1111 + 1111 (maximum carry out)
        tb_a = 4'b1111; tb_b = 4'b1111; #10;

        // Test Case 6: 0101 + 0101
        tb_a = 4'b0101; tb_b = 4'b0101; #10;

        // Test Case 7: Large numbers
        tb_a = 4'b1100; tb_b = 4'b1001; #10;

        $finish; // End the simulation
    end

    // Optional: Display results to the console
    initial begin
        $display("Time | A    | B    | Sum  | Cout");
        $monitor("%0t | %b | %b | %b | %b", $time, tb_a, tb_b, tb_sum, tb_cout);
    end

endmodule
```

**Explanation of Testbench:**

*   `` `timescale 1ns / 1ps ``: Sets the time unit for simulation (1ns) and the precision of the time (`1ps`).
*   `reg [3:0] tb_a; reg [3:0] tb_b;`: Declares `reg` type variables for inputs, as they will be assigned values within an `initial` block.
*   `wire [3:0] tb_sum; wire tb_cout;`: Declares `wire` type variables for outputs, as they are driven by the DUT.
*   `ripple_carry_adder_4bit dut (...)`: Instantiates the DUT.
*   `initial begin ... end`: This block executes only once at the beginning of the simulation. It contains the stimulus sequence.
*   `tb_a = ...; tb_b = ...; #10;`: Assigns values to the inputs and then waits for 10 time units before proceeding to the next assignment. This allows the circuit to settle.
*   `$display(...)`: Prints a header for the output.
*   `$monitor(...)`: Continuously displays the values of the specified signals whenever any of them change.
*   `$finish;`: Terminates the simulation.

---

### 7. FPGA Implementation (CO3)

**Objective:** To map the Verilog design onto a physical FPGA chip and verify its operation using external switches and LEDs.

**Steps:**

1.  **Synthesize the Verilog Code:** The synthesis tool converts the HDL code into a netlist of logic gates.
2.  **Implement the Design:** This involves placing the logic gates onto the FPGA fabric and routing the connections between them.
3.  **Generate Bitstream:** A configuration file (bitstream) is created that programs the FPGA.
4.  **Create a Constraint File (.xdc for Vivado):** This file maps the Verilog module's input and output ports to specific physical pins on the FPGA board. It also defines clock frequencies and other timing constraints.
    *   **Example Constraint Snippet:**
        ```xdc
        # Define input pins for a 4-bit adder
        set_property PACKAGE_PIN V10 [get_ports tb_a[0]]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_a[0]]
        set_property PACKAGE_PIN V11 [get_ports tb_a[1]]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_a[1]]
        set_property PACKAGE_PIN W10 [get_ports tb_a[2]]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_a[2]]
        set_property PACKAGE_PIN W11 [get_ports tb_a[3]]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_a[3]]

        set_property PACKAGE_PIN U12 [get_ports tb_b[0]]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_b[0]]
        set_property PACKAGE_PIN V12 [get_ports tb_b[1]]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_b[1]]
        set_property PACKAGE_PIN W12 [get_ports tb_b[2]]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_b[2]]
        set_property PACKAGE_PIN Y12 [get_ports tb_b[3]]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_b[3]]

        # Define output pins for sum and carry-out
        set_property PACKAGE_PIN P10 [get_ports tb_sum[0]]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_sum[0]]
        set_property PACKAGE_PIN P11 [get_ports tb_sum[1]]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_sum[1]]
        set_property PACKAGE_PIN R10 [get_ports tb_sum[2]]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_sum[2]]
        set_property PACKAGE_PIN R11 [get_ports tb_sum[3]]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_sum[3]]

        set_property PACKAGE_PIN T10 [get_ports tb_cout]
        set_property IOSTANDARD LVCMOS33 [get_ports tb_cout]
        ```
    *   **(Note:** The actual pin numbers (e.g., `V10`, `P10`) are specific to the FPGA board being used and must be obtained from the board's user manual or master XDC file.)
5.  **Load the Bitstream onto the FPGA:** Use the FPGA vendor's programming software to download the bitstream onto the FPGA.
6.  **Test with Hardware:** Connect switches to the input pins and LEDs to the output pins according to the constraint file. Manipulate the switches and observe the LEDs to verify the adder's functionality.

---

### 8. Key Concepts and Definitions Recap

*   **Adder:** A combinational circuit that performs binary addition.
*   **Half Adder:** Adds two single bits ($A, B$) $\rightarrow$ Sum, Carry-out.
    *   $S = A \oplus B$
    *   $C_{out} = A \cdot B$
*   **Full Adder:** Adds three single bits ($A, B, C_{in}$) $\rightarrow$ Sum, Carry-out.
    *   $S = A \oplus B \oplus C_{in}$
    *   $C_{out} = (A \cdot B) + (C_{in} \cdot (A \oplus B))$
*   **Ripple Carry Adder (RCA):** Series of Full Adders where the carry propagates from LSB to MSB.
    *   **Advantage:** Simple to design.
    *   **Disadvantage:** Slow due to carry propagation delay.
*   **Verilog HDL:** A hardware description language used to model digital systems.
    *   `module`, `input`, `output`, `wire`, `reg`.
    *   `assign` for continuous assignments (combinational logic).
    *   `^` (XOR), `&` (AND), `|` (OR), `~` (NOT).
    *   `+` operator for addition (can be synthesized to an adder circuit).
*   **Testbench:** A Verilog module to stimulate and verify a DUT.
*   **FPGA:** Field-Programmable Gate Array, a programmable logic device.
*   **Synthesis:** The process of converting HDL code into a netlist of logic gates.
*   **Implementation:** Placing and routing the netlist onto the FPGA.
*   **Constraints File (.xdc):** Maps HDL signals to physical FPGA pins.

---

### 9. Important Points to Remember

*   **Data Types:** Use `wire` for combinational logic outputs and connections between modules. Use `reg` for outputs assigned within `always` blocks (though for simple combinational logic, `assign` is preferred).
*   **Bit-Widths:** Pay close attention to the bit-widths of signals. Mismatched bit-widths in operations can lead to unexpected behavior or simulation errors. `4'b1010` denotes a 4-bit binary number.
*   **Concatenation:** Use curly braces `{}` for concatenating signals, e.g., `{carry_out, sum} = a + b;`.
*   **Synthesis vs. Simulation:** Behavioral Verilog using the `+` operator is concise for simulation but understanding the structural implications (like RCA delay) is crucial for performance optimization.
*   **FPGA Pin Assignments:** Always consult the FPGA board's documentation for correct pin assignments in the constraint file.
*   **Hierarchy:** Design using a hierarchical approach, breaking down complex circuits into smaller, reusable modules (e.g., building an RCA from Full Adders, which can be built from Half Adders). This aligns with CO1 and CO2.
*   **Teamwork:** Clearly define roles and responsibilities when working in a team to ensure efficient design, simulation, and testing (CO4).

---

### 10. Practice Questions and Exercises

**Question 1:**
Write a Verilog module for a 2-bit ripple carry adder. Instantiate the `full_adder` module twice.

**Answer 1:**
```verilog
// ripple_carry_adder_2bit.v
module ripple_carry_adder_2bit(
    input [1:0] a,
    input [1:0] b,
    output [1:0] sum,
    output cout
);

    wire c1; // Carry between stages

    // Stage 0 (LSB)
    full_adder fa0 (
        .a(a[0]),
        .b(b[0]),
        .carry_in(1'b0),
        .sum(sum[0]),
        .carry_out(c1)
    );

    // Stage 1 (MSB)
    full_adder fa1 (
        .a(a[1]),
        .b(b[1]),
        .carry_in(c1),
        .sum(sum[1]),
        .carry_out(cout)
    );

endmodule

// Assume full_adder.v is available.
```

**Question 2:**
Write a Verilog testbench for the `half_adder` module. Test all four possible input combinations.

**Answer 2:**
```verilog
// tb_half_adder.v
`timescale 1ns / 1ps

module tb_half_adder;

    reg tb_a;
    reg tb_b;
    wire tb_sum;
    wire tb_carry_out;

    // Instantiate the DUT
    half_adder dut (
        .a(tb_a),
        .b(tb_b),
        .sum(tb_sum),
        .carry_out(tb_carry_out)
    );

    initial begin
        // Test Case 1: 0 + 0
        tb_a = 1'b0; tb_b = 1'b0; #10;
        // Expected: Sum=0, Carry=0

        // Test Case 2: 0 + 1
        tb_a = 1'b0; tb_b = 1'b1; #10;
        // Expected: Sum=1, Carry=0

        // Test Case 3: 1 + 0
        tb_a = 1'b1; tb_b = 1'b0; #10;
        // Expected: Sum=1, Carry=0

        // Test Case 4: 1 + 1
        tb_a = 1'b1; tb_b = 1'b1; #10;
        // Expected: Sum=0, Carry=1

        $finish;
    end

    initial begin
        $display("Time | A | B | Sum | Carry_out");
        $monitor("%0t | %b | %b | %b | %b", $time, tb_a, tb_b, tb_sum, tb_carry_out);
    end

endmodule

// Assume half_adder.v is available.
```

**Question 3:**
Explain why a Ripple Carry Adder is generally slower than a Carry Lookahead Adder. (Relates to CO1, understanding circuit functionality)

**Answer 3:**
In a Ripple Carry Adder, the carry signal must propagate through each full adder stage sequentially. If the carry takes a long time to propagate from the least significant bit to the most significant bit, the addition operation is delayed. This cumulative delay is called the "carry propagation delay." A Carry Lookahead Adder generates the carry signals in parallel, significantly reducing this propagation delay and thus speeding up the addition process. This is a key concept in digital design regarding circuit performance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 10. Textbook and Reference Material Integration

*   **Bhasker, J. "Verilog HDL Synthesis: A Practical Primer":** This primer provides essential knowledge on how Verilog constructs are synthesized into hardware. Understanding the difference between behavioral and structural modeling, as well as the implications of operators like `+` on synthesis, is crucial for this experiment and is well-covered in this book.
*   **Roth, C. H. "Fundamentals of Logic Design":** This text provides the foundational understanding of combinational logic circuits, including Half Adders and Full Adders, their truth tables, and Boolean expressions. It lays the groundwork for understanding why these circuits are designed the way they are.
*   **Palnitkar, S. "Verilog HDL: A Guide to Digital Design and Synthesis":** This reference book offers comprehensive details on Verilog syntax and semantics, including advanced topics and best practices for writing synthesizable code. It's valuable for understanding testbench creation and detailed Verilog modeling.

---

This comprehensive set of notes covers the design, simulation, and FPGA implementation of adders in Verilog, aligning with the specified learning and course outcomes. Remember to adapt the FPGA implementation steps to your specific FPGA development board and software tools.