---
title: "(a) Make a design of a 4-bit universal shift register using D-flip-flops in the previous experiment, implement and test them on the FPGA board."
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 18: Experiment 8: Universal Shift Register in FPGA"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe470"
status: "completed"
scrapedAt: "2026-05-23T17:46:47.335Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY

## Module 18: Experiment 8: Universal Shift Register in FPGA

### Topic (a): Design, Implementation, and Testing of a 4-bit Universal Shift Register using D-Flip-Flops on FPGA

---

### 1. Introduction

This experiment focuses on designing, implementing, and testing a 4-bit Universal Shift Register (USR) using D-flip-flops. The USR is a versatile sequential circuit capable of performing various shift operations (shift left, shift right) and parallel load operations. We will leverage the power of Field-Programmable Gate Arrays (FPGAs) to implement this design and verify its functionality. This experiment directly addresses **CO1** by demonstrating the functioning of a sequential circuit and **CO2** by applying a hardware description language (Verilog HDL).

---

### 2. Learning Outcomes

Upon successful completion of this experiment, you will be able to:

*   **Design:** Create a Verilog HDL model for a 4-bit universal shift register.
*   **Understand Components:** Comprehend the role of D-flip-flops and control signals in a universal shift register.
*   **Implement:** Synthesize and implement the designed circuit on an FPGA development board.
*   **Test:** Test the functionality of the implemented universal shift register by applying various input sequences and observing the outputs.
*   **Troubleshoot:** Identify and resolve any issues during implementation and testing.

---

### 3. Key Concepts and Definitions

#### 3.1. Shift Register

A **shift register** is a type of sequential logic circuit that consists of a chain of flip-flops, where the output of one flip-flop is connected to the input of the next flip-flop. Shift registers are used for storing and shifting binary data.

#### 3.2. Universal Shift Register (USR)

A **Universal Shift Register (USR)** is a shift register that can perform both serial-to-parallel and parallel-to-serial conversions, as well as shift operations in both left and right directions. It typically has control inputs to select the desired operation.

#### 3.3. D-Flip-Flop (DFF)

A **D-flip-flop** is a fundamental building block of sequential circuits. It has a data input (D), a clock input (CLK), and a clock enable (often implicit or controlled by other signals). On the rising or falling edge of the clock, the value at the D input is transferred to the output (Q).

#### 3.4. FPGA (Field-Programmable Gate Array)

An **FPGA** is an integrated circuit designed to be configured by the end-user after manufacturing. It contains a programmable array of logic blocks and interconnects that can be configured to implement complex digital circuits. This experiment utilizes FPGAs to implement the USR, aligning with **CO3**.

#### 3.5. Verilog HDL (Hardware Description Language)

**Verilog HDL** is a widely used language for describing the behavior and structure of digital hardware. It allows for the design, simulation, and synthesis of digital circuits, which are then mapped onto hardware such as FPGAs. This experiment heavily relies on Verilog HDL for the design, fulfilling **CO2**.

---

### 4. Design of a 4-bit Universal Shift Register

A 4-bit universal shift register can be constructed using four D-flip-flops. The functionality is controlled by a set of select lines and data inputs.

#### 4.1. Functional Table

Let's define the operations and their corresponding select line inputs. We'll use two select lines, `S1` and `S0`, to control the four possible operations:

| S1 | S0 | Operation      | Description                                                                 |
|----|----|----------------|-----------------------------------------------------------------------------|
| 0  | 0  | Hold           | Register retains its current state.                                         |
| 0  | 1  | Shift Right    | Data shifts one position to the right. `SRI` (Serial Right Input) enters MSB. |
| 1  | 0  | Shift Left     | Data shifts one position to the left. `SLI` (Serial Left Input) enters LSB. |
| 1  | 1  | Parallel Load  | Data from parallel inputs `D0`-`D3` is loaded into the register.           |

#### 4.2. Block Diagram

A 4-bit USR typically has the following inputs and outputs:

*   **Clock (clk):** The system clock signal.
*   **Reset (rst):** Asynchronous or synchronous reset signal.
*   **Serial Right Input (SRI):** Data input for right shift operation.
*   **Serial Left Input (SLI):** Data input for left shift operation.
*   **Parallel Data Inputs (D[3:0]):** 4-bit input for parallel loading.
*   **Select Lines (S[1:0]):** 2-bit control signal to select the operation.
*   **Parallel Outputs (Q[3:0]):** 4-bit output of the register.
*   **Serial Right Output (SRQ):** Output of the rightmost flip-flop (Q[0]).
*   **Serial Left Output (SLQ):** Output of the leftmost flip-flop (Q[3]).

```
      +-----------------+
      |  4-bit USR      |
      |                 |
  SRI o-->------------> Q[3] |
      |   S[1:0]        | DFF3 o--+
      |   D[3:0] o-->---|------> Q[2] |
      |   clk o-->------|------> Q[1] |
      |   rst o-->------|------> Q[0] |
      |                 |      ^   ^   ^
      |  DFF0<--Input0---|------|---|---|
      |  DFF1<--Input1---|------|---|---|
      |  DFF2<--Input2---|------|---|---|
      |  DFF3<--Input3---|----------+
      |                 |
      | Q[3:0] o------> |
      | SRQ o-----------> Q[0] |
      | SLQ o-----------> Q[3] |
      +-----------------+
```

#### 4.3. Logic for Each D-Flip-Flop

Each D-flip-flop (`DFF0` to `DFF3`) will have its input `D` determined by the select lines and the desired operation. Let's denote the input to `DFFi` as `Di_input`.

*   **DFF0 (LSB):**
    *   **Parallel Load (S1=1, S0=1):** `Di_input = D[0]`
    *   **Shift Right (S1=0, S0=1):** `Di_input = SRI`
    *   **Shift Left (S1=1, S0=0):** `Di_input = Q[1]` (output of DFF1)
    *   **Hold (S1=0, S0=0):** `Di_input = Q[0]` (current state of DFF0)

*   **DFF1:**
    *   **Parallel Load (S1=1, S0=1):** `Di_input = D[1]`
    *   **Shift Right (S1=0, S0=1):** `Di_input = Q[0]` (output of DFF0)
    *   **Shift Left (S1=1, S0=0):** `Di_input = Q[2]` (output of DFF2)
    *   **Hold (S1=0, S0=0):** `Di_input = Q[1]` (current state of DFF1)

*   **DFF2:**
    *   **Parallel Load (S1=1, S0=1):** `Di_input = D[2]`
    *   **Shift Right (S1=0, S0=1):** `Di_input = Q[1]` (output of DFF1)
    *   **Shift Left (S1=1, S0=0):** `Di_input = Q[3]` (output of DFF3)
    *   **Hold (S1=0, S0=0):** `Di_input = Q[2]` (current state of DFF2)

*   **DFF3 (MSB):**
    *   **Parallel Load (S1=1, S0=1):** `Di_input = D[3]`
    *   **Shift Right (S1=0, S0=1):** `Di_input = Q[2]` (output of DFF2)
    *   **Shift Left (S1=1, S0=0):** `Di_input = SLI`
    *   **Hold (S1=0, S0=0):** `Di_input = Q[3]` (current state of DFF3)

**Generalizing the logic for `Di_input` for `FFi`:**

`Di_input = (S1 & ~S0 & SRI) | (~S1 & ~S0 & Q[i-1] for i>0) | (~S1 & ~S0 & Q[0] for i=0) | (S1 & ~S0 & Q[i+1]) | (~S1 & S0 & D[i]) | (S1 & S0 & Q[i])`

This can be simplified using conditional assignments in Verilog.

---

### 5. Verilog HDL Implementation

This section details the Verilog code for the 4-bit universal shift register. This is crucial for **CO2**.

#### 5.1. Module Definition

```verilog
module universal_shift_register_4bit (
    input wire clk,
    input wire rst,
    input wire [1:0] s, // Select lines: s[1], s[0]
    input wire [3:0] d_in, // Parallel data input
    input wire sri, // Serial Right Input
    input wire sli, // Serial Left Input
    output wire [3:0] q_out, // Parallel data output
    output wire srq, // Serial Right Output (LSB)
    output wire slq // Serial Left Output (MSB)
);

    // Internal signals to hold the flip-flop states
    reg [3:0] q_reg;

    // Combinational logic to determine the next state of each flip-flop
    wire [3:0] d_ff_input;

    // Assign outputs from the register
    assign q_out = q_reg;
    assign srq = q_reg[0]; // LSB is the serial right output
    assign slq = q_reg[3]; // MSB is the serial left output

    // Logic to determine the input to each flip-flop based on select lines
    // s[1] s[0] | Operation
    // ---------------------
    //   0    0  | Hold
    //   0    1  | Shift Right
    //   1    0  | Shift Left
    //   1    1  | Parallel Load

    always @(*) begin
        case ({s[1], s[0]}) // Concatenate select lines for case statement
            2'b00: d_ff_input = q_reg; // Hold
            2'b01: begin // Shift Right
                d_ff_input[0] = sri;
                d_ff_input[1] = q_reg[0];
                d_ff_input[2] = q_reg[1];
                d_ff_input[3] = q_reg[2];
            end
            2'b10: begin // Shift Left
                d_ff_input[0] = q_reg[1];
                d_ff_input[1] = q_reg[2];
                d_ff_input[2] = q_reg[3];
                d_ff_input[3] = sli;
            end
            2'b11: d_ff_input = d_in; // Parallel Load
            default: d_ff_input = q_reg; // Default to hold
        endcase
    end

    // D-flip-flops with synchronous reset
    always @(posedge clk or posedge rst) begin
        if (rst) begin
            q_reg <= 4'b0000; // Reset to all zeros
        end else begin
            q_reg <= d_ff_input; // Load the next state
        end
    end

endmodule
```

**Explanation:**

*   **`module universal_shift_register_4bit (...)`**: Defines the module with its inputs and outputs.
*   **`reg [3:0] q_reg;`**: Declares a 4-bit register `q_reg` to store the current state of the shift register. `reg` is used because its value is assigned within an `always` block.
*   **`wire [3:0] d_ff_input;`**: Declares a 4-bit wire `d_ff_input` which will hold the calculated input values for the D-flip-flops based on the select lines. `wire` is used for combinational signals.
*   **`assign q_out = q_reg;`**: Assigns the current state of the register to the parallel output.
*   **`assign srq = q_reg[0];`**: Assigns the least significant bit (LSB) of the register to the Serial Right Output.
*   **`assign slq = q_reg[3];`**: Assigns the most significant bit (MSB) of the register to the Serial Left Output.
*   **`always @(*)` block**: This is a combinational `always` block that infers logic based on all input signals. It describes how `d_ff_input` is generated.
*   **`case ({s[1], s[0]})`**: This `case` statement is central to controlling the USR's functionality. It checks the combined value of the select lines `s[1]` and `s[0]`.
    *   **`2'b00: d_ff_input = q_reg;`**: If `s` is `00`, the register should hold its current state. So, the input to the DFFs is their current output (`q_reg`).
    *   **`2'b01: begin ... end`**: If `s` is `01`, it's a **Shift Right**. The serial input `sri` goes into the MSB of the next state (`d_ff_input[3]`), and the current outputs of `q_reg` are shifted. `d_ff_input[0]` gets `sri`, `d_ff_input[1]` gets `q_reg[0]`, and so on.
    *   **`2'b10: begin ... end`**: If `s` is `10`, it's a **Shift Left**. The serial input `sli` goes into the LSB of the next state (`d_ff_input[0]`), and the current outputs of `q_reg` are shifted. `d_ff_input[0]` gets `q_reg[1]`, `d_ff_input[1]` gets `q_reg[2]`, `d_ff_input[2]` gets `q_reg[3]`, and `d_ff_input[3]` gets `sli`.
    *   **`2'b11: d_ff_input = d_in;`**: If `s` is `11`, it's a **Parallel Load**. The parallel data inputs `d_in` are directly fed to the DFF inputs.
    *   **`default: d_ff_input = q_reg;`**: A `default` case is good practice to ensure all possibilities are covered and to avoid inferring latches.
*   **`always @(posedge clk or posedge rst)` block**: This is a sequential `always` block that describes the behavior of the D-flip-flops.
    *   **`if (rst)`**: This handles an asynchronous reset. If `rst` is high, `q_reg` is reset to `4'b0000`.
    *   **`else begin q_reg <= d_ff_input; end`**: On the positive edge of the clock, if reset is not active, the current value of `d_ff_input` (calculated combinatorially) is loaded into `q_reg`. The non-blocking assignment (`<=`) is crucial for sequential logic.

#### 5.2. Testbench for Verification

A testbench is essential for simulating and verifying the design before implementing it on the FPGA. This helps in debugging and ensuring correctness, aligning with **CO2**.

```verilog
`timescale 1ns / 1ps

module tb_universal_shift_register_4bit;

    // Inputs
    reg clk;
    reg rst;
    reg [1:0] s;
    reg [3:0] d_in;
    reg sri;
    reg sli;

    // Outputs
    wire [3:0] q_out;
    wire srq;
    wire slq;

    // Instantiate the Unit Under Test (UUT)
    universal_shift_register_4bit uut (
        .clk(clk),
        .rst(rst),
        .s(s),
        .d_in(d_in),
        .sri(sri),
        .sli(sli),
        .q_out(q_out),
        .srq(srq),
        .slq(slq)
    );

    // Clock generation
    initial begin
        clk = 0;
        forever #5 clk = ~clk; // Create a 10ns clock period (100MHz)
    end

    // Stimulus
    initial begin
        // Initialize all inputs
        rst = 1;
        s = 2'b00;
        d_in = 4'b0000;
        sri = 0;
        sli = 0;

        // Apply reset
        #20 rst = 0; // De-assert reset

        // Test Case 1: Parallel Load
        $display("--- Test Case 1: Parallel Load ---");
        s = 2'b11;
        d_in = 4'b1010;
        #20; // Wait for one clock cycle to load

        $display("Time = %0t: q_out = %b, srq = %b, slq = %b", $time, q_out, srq, slq);

        // Test Case 2: Shift Right
        $display("--- Test Case 2: Shift Right ---");
        s = 2'b01;
        sri = 1; // Serial input for shifting
        #20; // Shift right, 1010 -> 0101 (with sri=1 entering MSB)

        $display("Time = %0t: q_out = %b, srq = %b, slq = %b", $time, q_out, srq, slq);

        sri = 0; // Change serial input
        #20; // Shift right, 0101 -> 0010 (with sri=0 entering MSB)

        $display("Time = %0t: q_out = %b, srq = %b, slq = %b", $time, q_out, srq, slq);

        // Test Case 3: Shift Left
        $display("--- Test Case 3: Shift Left ---");
        s = 2'b10;
        sli = 1; // Serial input for shifting
        #20; // Shift left, 0010 -> 0100 (with sli=1 entering LSB)

        $display("Time = %0t: q_out = %b, srq = %b, slq = %b", $time, q_out, srq, slq);

        sli = 0; // Change serial input
        #20; // Shift left, 0100 -> 1000 (with sli=0 entering LSB)

        $display("Time = %0t: q_out = %b, srq = %b, slq = %b", $time, q_out, srq, slq);

        // Test Case 4: Hold
        $display("--- Test Case 4: Hold ---");
        s = 2'b00;
        #20; // Hold state 1000

        $display("Time = %0t: q_out = %b, srq = %b, slq = %b", $time, q_out, srq, slq);

        // Test Case 5: Another Parallel Load
        $display("--- Test Case 5: Another Parallel Load ---");
        s = 2'b11;
        d_in = 4'b1111;
        #20; // Load 1111

        $display("Time = %0t: q_out = %b, srq = %b, slq = %b", $time, q_out, srq, slq);


        // End simulation
        #100 $finish;
    end

endmodule
```

**Explanation:**

*   **`timescale 1ns / 1ps`**: Sets the time units for simulation.
*   **`module tb_universal_shift_register_4bit;`**: Declares the testbench module.
*   **`reg ...`**: Declares signals that will drive the inputs of the UUT.
*   **`wire ...`**: Declares signals that will capture the outputs of the UUT.
*   **`universal_shift_register_4bit uut (...)`**: Instantiates the designed universal shift register module.
*   **`initial begin clk = 0; forever #5 clk = ~clk; end`**: Generates a clock signal with a period of 10ns (100MHz).
*   **`initial begin ... end`**: This block contains the stimulus sequences to test all operations of the USR.
    *   Initializes all inputs and applies a reset.
    *   De-asserts the reset.
    *   Applies specific sequences of `s`, `d_in`, `sri`, and `sli` to trigger different operations (Parallel Load, Shift Right, Shift Left, Hold).
    *   `#20` statements introduce delays to allow signals to propagate and for operations to complete on clock edges.
    *   `$display` statements are used to print the time and the output values during simulation, which helps in verifying the functionality.
    *   `$finish` terminates the simulation.

---

### 6. FPGA Implementation

This section covers the process of implementing the Verilog design on an FPGA board, directly addressing **CO3**.

#### 6.1. FPGA Tools

You will typically use an FPGA vendor-specific integrated development environment (IDE), such as:

*   **Xilinx Vivado Design Suite** (for Xilinx/AMD FPGAs)
*   **Intel Quartus Prime** (for Intel/Altera FPGAs)

#### 6.2. Steps for FPGA Implementation

1.  **Create a New Project:** Open your FPGA IDE and create a new project. Select the appropriate FPGA device family and specific device from your development board.
2.  **Add Source Files:** Add the Verilog HDL file for the `universal_shift_register_4bit` module to your project.
3.  **Add Constraints File (XDC/SDC):** This is a crucial step. You need to map the logical ports of your Verilog module to the physical pins of the FPGA on your development board. This file specifies:
    *   **Pin Assignments:** Connect `clk`, `rst`, `s[1:0]`, `d_in[3:0]`, `sri`, `sli` to physical switches, buttons, or clock sources on the board. Connect `q_out[3:0]`, `srq`, `slq` to LEDs or other output indicators.
    *   **Clock Definition:** Define the clock frequency.
    *   **I/O Standards:** Specify voltage levels and drive strengths for the pins.
    *   **Example XDC snippet (highly dependent on your board):**

        ```xdc
        # Clock signal
        set_property PACKAGE_PIN V5 [get_ports clk]
        set_property IOSTANDARD LVCMOS33 [get_ports clk]
        create_clock -period 10.000 -name sys_clk_pin -waveform {0.000 5.000} [get_ports clk]

        # Reset button (assuming active high)
        set_property PACKAGE_PIN U8 [get_ports rst]
        set_property IOSTANDARD LVCMOS33 [get_ports rst]

        # Select lines (e.g., connected to switches)
        set_property PACKAGE_PIN V10 [get_ports s[0]]
        set_property IOSTANDARD LVCMOS33 [get_ports s[0]]
        set_property PACKAGE_PIN W10 [get_ports s[1]]
        set_property IOSTANDARD LVCMOS33 [get_ports s[1]]

        # Parallel Data Inputs (e.g., connected to switches)
        set_property PACKAGE_PIN V12 [get_ports d_in[0]]
        set_property IOSTANDARD LVCMOS33 [get_ports d_in[0]]
        set_property PACKAGE_PIN W12 [get_ports d_in[1]]
        set_property IOSTANDARD LVCMOS33 [get_ports d_in[1]]
        set_property PACKAGE_PIN W13 [get_ports d_in[2]]
        set_property IOSTANDARD LVCMOS33 [get_ports d_in[2]]
        set_property PACKAGE_PIN V13 [get_ports d_in[3]]
        set_property IOSTANDARD LVCMOS33 [get_ports d_in[3]]

        # Serial Right Input (e.g., connected to a switch)
        set_property PACKAGE_PIN U12 [get_ports sri]
        set_property IOSTANDARD LVCMOS33 [get_ports sri]

        # Serial Left Input (e.g., connected to a switch)
        set_property PACKAGE_PIN V11 [get_ports sli]
        set_property IOSTANDARD LVCMOS33 [get_ports sli]

        # Parallel Data Outputs (e.g., connected to LEDs)
        set_property PACKAGE_PIN T10 [get_ports q_out[0]]
        set_property IOSTANDARD LVCMOS33 [get_ports q_out[0]]
        set_property PACKAGE_PIN T11 [get_ports q_out[1]]
        set_property IOSTANDARD LVCMOS33 [get_ports q_out[1]]
        set_property PACKAGE_PIN T12 [get_ports q_out[2]]
        set_property IOSTANDARD LVCMOS33 [get_ports q_out[2]]
        set_property PACKAGE_PIN T13 [get_ports q_out[3]]
        set_property IOSTANDARD LVCMOS33 [get_ports q_out[3]]

        # Serial Right Output (e.g., connected to an LED)
        set_property PACKAGE_PIN U10 [get_ports srq]
        set_property IOSTANDARD LVCMOS33 [get_ports srq]

        # Serial Left Output (e.g., connected to an LED)
        set_property PACKAGE_PIN U11 [get_ports slq]
        set_property IOSTANDARD LVCMOS33 [get_ports slq]
        ```

4.  **Synthesize:** Convert the Verilog HDL code into a netlist of logic gates specific to the target FPGA.
5.  **Implement (Place and Route):** Map the logic gates to the physical resources (logic blocks, routing channels) on the FPGA.
6.  **Generate Bitstream:** Create the configuration file (bitstream) that will be loaded onto the FPGA.
7.  **Program FPGA:** Download the bitstream onto your FPGA development board using a JTAG programmer.

---

### 7. Testing on FPGA Board

This is where you verify the real-world functionality, reinforcing **CO1** and **CO3**.

#### 7.1. Hardware Setup

*   Connect the FPGA board to your computer via USB or JTAG for programming.
*   Configure the switches, buttons, and LEDs according to your constraints file.
*   Ensure the clock source is correctly connected.

#### 7.2. Testing Procedure

1.  **Initialize:** Set `rst` to high (usually via a button or switch) to reset the register. All LEDs connected to `q_out` should turn off.
2.  **Parallel Load:**
    *   Set `s[1:0]` to `11`.
    *   Set `d_in[3:0]` to a specific binary value (e.g., `1010`) using the switches.
    *   Pulse the clock. The `q_out` LEDs should now display `1010`.
    *   Load another value (e.g., `1111`) and check the `q_out` LEDs.
3.  **Shift Right:**
    *   Set `s[1:0]` to `01`.
    *   Set `sri` to `1` (using a switch).
    *   Pulse the clock. The register should shift right, and `q_out` should display `0101` (from `1111` shifted right with `1` entering MSB). The LSB of `q_out` (`q_out[0]`) is the `srq` output.
    *   Set `sri` to `0`.
    *   Pulse the clock again. The register should shift right again, and `q_out` should display `0010` (from `0101` shifted right with `0` entering MSB).
4.  **Shift Left:**
    *   Set `s[1:0]` to `10`.
    *   Set `sli` to `1` (using a switch).
    *   Pulse the clock. The register should shift left, and `q_out` should display `0100` (from `0010` shifted left with `1` entering LSB). The MSB of `q_out` (`q_out[3]`) is the `slq` output.
    *   Set `sli` to `0`.
    *   Pulse the clock again. The register should shift left again, and `q_out` should display `1000` (from `0100` shifted left with `0` entering LSB).
5.  **Hold:**
    *   Set `s[1:0]` to `00`.
    *   Pulse the clock multiple times. The `q_out` LEDs should remain unchanged, demonstrating the "hold" operation.
6.  **Repeat:** Combine operations in different sequences to thoroughly test all functionalities. For instance, shift right, then parallel load, then shift left.

#### 7.3. Troubleshooting Tips

*   **Incorrect Outputs:**
    *   Double-check your Verilog code for logic errors (e.g., incorrect bit assignments in shift operations).
    *   Verify the testbench simulation results match the expected behavior.
    *   Ensure the constraints file correctly maps signals to pins.
*   **FPGA Not Programming:**
    *   Check your JTAG connection.
    *   Ensure the correct FPGA device is selected in the IDE.
    *   Verify the clock signal is present and at the expected frequency.
*   **Unexpected Behavior:**
    *   Use the FPGA IDE's debugging tools (e.g., Vivado Logic Analyzer, ChipScope) to probe internal signals (`q_reg`, `d_ff_input`, `s`) and observe their behavior in real-time. This is invaluable for debugging sequential circuits.
    *   Check for timing violations if the design is not functioning reliably at higher clock speeds.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. Referencing Textbooks and Reference Books

This experiment draws heavily from the concepts of sequential circuit design and hardware description languages.

*   **Verilog HDL Synthesis: A Practical Primer by J. Bhasker:** This book is excellent for understanding how Verilog constructs map to hardware and for learning synthesis-friendly coding styles. The `always @(*)` block for combinational logic and `always @(posedge clk or posedge rst)` for sequential logic are fundamental concepts covered here. (Relevant for **CO2**)
*   **Fundamentals of Logic Design by Roth C.H:** This textbook provides the foundational understanding of sequential logic, flip-flops, state machines, and shift registers. The design of the USR, including its state transitions and control logic, is directly from principles taught in this book. (Relevant for **CO1**)
*   **Verilog HDL: A guide to digital design and synthesis by Palnitkar S.:** This reference book offers a comprehensive overview of Verilog, including advanced features, simulation techniques, and synthesis considerations. The testbench design and the explanation of Verilog constructs used in the USR module are well-covered. (Relevant for **CO2**)

---

### 9. Alignment with Course Outcomes

*   **CO1: Design and demonstrate the functioning of various combinational and sequential circuits using ICs (Knowledge Level: K3)**
    *   This experiment directly designs and demonstrates a complex sequential circuit (USR). While ICs are not directly used in the FPGA implementation, the fundamental building blocks (like flip-flops) are implicitly configured. The testing phase demonstrates its functioning.
*   **CO2: Apply an industry compatible hardware description language to implement digital circuits (Knowledge Level: K3)**
    *   The entire design process relies on Verilog HDL. Creating the Verilog code for the USR and its testbench directly fulfills this outcome.
*   **CO3: Implement digital circuits on FPGA boards and connect external hardware to the boards (Knowledge Level: K3)**
    *   The steps of synthesis, implementation, bitstream generation, and programming the FPGA directly address this outcome. Mapping inputs/outputs to physical pins (switches, LEDs) also involves connecting external hardware.
*   **CO4: Function effectively as an individual and in a team to accomplish the given task. (Knowledge Level: K2)**
    *   While this note focuses on the technical aspects, in a lab setting, working collaboratively to debug issues, share knowledge about the FPGA board and tools, and divide tasks (e.g., one person on Verilog, another on testbench, another on constraints) is crucial for success.

---

### 10. Practice Questions and Answers

**Q1: What is the primary advantage of using a Universal Shift Register over a simple unidirectional shift register?**

**A1:** A Universal Shift Register offers greater flexibility. It can perform multiple operations like shifting left, shifting right, parallel loading, and holding, whereas a simple shift register is typically limited to unidirectional serial shifting.

**Q2: In the given Verilog code, what is the purpose of the `always @(*)` block?**

**A2:** The `always @(*)` block describes combinational logic. It calculates the next state input (`d_ff_input`) for the flip-flops based on the current state of the register (`q_reg`) and the control signals (`s`, `sri`, `sli`, `d_in`). The `*` sensitivity list ensures that the block re-evaluates whenever any of its input signals change.

**Q3: Why is the non-blocking assignment (`<=`) used in the sequential `always` block for the D-flip-flops?**

**A3:** Non-blocking assignments are used for sequential logic (like flip-flops) to ensure that all flip-flops in the same clocked block update their outputs simultaneously based on the values at the *beginning* of the clock cycle. Using blocking assignments (`=`) would cause a ripple effect where the output of one flip-flop affects the input of the next within the same clock cycle, leading to incorrect behavior.

**Q4: If `s = 2'b01` (Shift Right) and `SRI = 1`, what will be the value of `q_out` on the next clock edge if the current `q_reg` is `4'b1101`?**

**A4:**
*   Operation: Shift Right
*   SRI: 1
*   Current `q_reg`: `1101` (q[3]=1, q[2]=1, q[1]=0, q[0]=1)
*   The data will shift one position to the right.
*   `SRI` (1) will enter the MSB.
*   The new `q_reg` will be: `1` (SRI) followed by `q_reg[2]`, `q_reg[1]`, `q_reg[0]`.
*   So, the new `q_reg` will be `1110`.
*   Therefore, `q_out` will become `4'b1110`.

**Q5: How would you modify the Verilog code to implement a synchronous reset instead of an asynchronous reset?**

**A5:** To implement a synchronous reset, the reset logic needs to be gated by the clock edge. You would move the `if (rst)` condition inside the `else` block of the clock edge detection:

```verilog
    // D-flip-flops with synchronous reset
    always @(posedge clk) begin // Only sensitive to the clock edge
        if (rst) begin // Reset is checked ON the clock edge
            q_reg <= 4'b0000;
        end else begin
            q_reg <= d_ff_input;
        end
    end
```
In this version, the reset only takes effect when the clock transitions from 0 to 1, and the `rst` signal is high at that exact moment.

---

### 8. Important Points to Remember

*   **Always simulate your Verilog code thoroughly with a testbench before implementing on an FPGA.** This saves significant debugging time.
*   **Master the Verilog syntax for sequential and combinational logic (`always @(posedge clk)` vs. `always @(*)`).**
*   **Use non-blocking assignments (`<=`) for sequential logic and blocking assignments (`=`) for combinational logic.**
*   **Pay close attention to the `case` statement in the combinational block to correctly implement the USR's control logic.**
*   **The constraints file (XDC/SDC) is critical for mapping your design to the physical hardware.** Incorrect constraints will lead to the design not working on the board.
*   **Use debugging tools available in the FPGA IDE to understand the internal behavior of your circuit on the FPGA.**

---