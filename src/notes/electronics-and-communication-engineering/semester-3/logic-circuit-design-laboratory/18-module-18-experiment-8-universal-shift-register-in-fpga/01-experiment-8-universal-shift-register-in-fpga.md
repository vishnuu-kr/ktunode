---
title: "Experiment 8: Universal Shift Register in FPGA"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 18: Experiment 8: Universal Shift Register in FPGA"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe46f"
status: "completed"
scrapedAt: "2026-05-23T17:46:46.463Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY - Module 18: Experiment 8: Universal Shift Register in FPGA

## Introduction to Universal Shift Registers

A Universal Shift Register (USR) is a fundamental sequential circuit that can perform various shifting operations (serial input to parallel output, parallel input to serial output, serial input to serial output, and parallel input to parallel output) and also has the capability to shift data in either direction (left or right). This makes it a versatile building block in digital systems for data manipulation, communication, and control.

This experiment focuses on implementing a Universal Shift Register on an FPGA board using Verilog HDL, demonstrating the principles of sequential circuit design and hardware implementation.

## Key Concepts and Definitions

*   **Shift Register:** A sequential circuit that shifts its binary contents one or more positions to the left or right.
*   **Universal Shift Register (USR):** A shift register that can perform all basic shifting operations:
    *   **Shift Right:** Data moves one position to the right.
    *   **Shift Left:** Data moves one position to the left.
    *   **Load Parallel:** Data is loaded directly into all flip-flops simultaneously from parallel inputs.
    *   **No Change:** The current state of the register is maintained.
*   **Parallel Input/Output:** Data is entered into or read from the register simultaneously through multiple lines.
*   **Serial Input/Output:** Data is entered into or read from the register one bit at a time through a single line.
*   **Clock Signal:** A periodic signal that synchronizes the operations of the sequential circuit. State changes occur on the rising or falling edge of the clock.
*   **Flip-flop:** A basic memory element that stores one bit of information and can change its state based on clock and input signals.
*   **FPGA (Field-Programmable Gate Array):** A semiconductor device that can be configured by the user after manufacturing. It consists of a large array of programmable logic blocks and interconnects.
*   **Verilog HDL (Hardware Description Language):** A language used to describe the behavior and structure of digital hardware.

## Types of Universal Shift Registers

Based on the direction of shifting and the modes of operation, USRs can be classified:

*   **Bidirectional Shift Register:** Can shift data in both left and right directions.
*   **Parallel-In/Parallel-Out:** Data can be loaded and read in parallel.
*   **Serial-In/Serial-Out:** Data can be loaded and read serially.
*   **Serial-In/Parallel-Out:** Data is loaded serially and can be read in parallel.
*   **Parallel-In/Serial-Out:** Data is loaded in parallel and can be read serially.

A true "universal" shift register typically combines all these capabilities. For practical FPGA implementation, we'll focus on a common implementation that supports shift left, shift right, parallel load, and hold.

## Functional Table for a 4-bit Universal Shift Register

Let's consider a 4-bit USR with control inputs `S1` and `S0` to select the operation.

| S1 | S0 | Operation        | Output Description                                     |
| :-- | :-- | :--------------- | :----------------------------------------------------- |
| 0  | 0  | No Change        | `Q = Q` (current state remains)                        |
| 0  | 1  | Shift Right      | `Q_i+1 <= Q_i`, `Q0 <= Serial_In_Right`                |
| 1  | 0  | Shift Left       | `Q_i <= Q_i+1`, `Q3 <= Serial_In_Left`                 |
| 1  | 1  | Parallel Load    | `Q <= Parallel_In`                                     |

*(Note: This table represents a common functional breakdown. Variations exist depending on the specific design.)*

## Implementation in Verilog HDL

We will design a 4-bit Universal Shift Register using Verilog. The module will have the following ports:

*   `clk`: Clock input.
*   `rst`: Asynchronous reset input.
*   `S0`, `S1`: Mode select inputs.
*   `Data_In_Right`: Serial input for shifting right.
*   `Data_In_Left`: Serial input for shifting left.
*   `Parallel_In`: 4-bit parallel data input.
*   `Parallel_Out`: 4-bit parallel data output.

**Verilog Code Example (Conceptual)**

```verilog
module universal_shift_register (
    input wire clk,
    input wire rst,
    input wire S0,
    input wire S1,
    input wire Data_In_Right,
    input wire Data_In_Left,
    input wire [3:0] Parallel_In,
    output wire [3:0] Parallel_Out
);

    reg [3:0] shift_reg;

    // Combinational logic to determine the next state based on control signals
    always @(*) begin
        if (!S1 && !S0) begin // No Change
            // shift_reg remains unchanged
        end else if (!S1 && S0) begin // Shift Right
            shift_reg[0] = Data_In_Right;
            shift_reg[1] = shift_reg[0];
            shift_reg[2] = shift_reg[1];
            shift_reg[3] = shift_reg[2];
        end else if (S1 && !S0) begin // Shift Left
            shift_reg[3] = Data_In_Left;
            shift_reg[2] = shift_reg[3];
            shift_reg[1] = shift_reg[2];
            shift_reg[0] = shift_reg[1];
        end else begin // Parallel Load (S1 && S0)
            shift_reg = Parallel_In;
        end
    end

    // Sequential logic (flip-flops)
    always @(posedge clk or posedge rst) begin
        if (rst) begin
            shift_reg <= 4'b0000; // Reset to all zeros
        end else begin
            // The 'always @(*)' block defines the next state,
            // and this 'always @(posedge clk)' block captures it on the clock edge.
            // In a synchronous design, this would be:
            // shift_reg <= next_state_logic;
            // For simplicity, we'll let the combinational block directly drive the reg.
            // A more explicit way to write the sequential part:
            case ({S1, S0})
                2'b00: shift_reg <= shift_reg;       // No Change
                2'b01: shift_reg <= {Data_In_Right, shift_reg[3:1]}; // Shift Right
                2'b10: shift_reg <= {shift_reg[2:0], Data_In_Left}; // Shift Left
                2'b11: shift_reg <= Parallel_In;      // Parallel Load
                default: shift_reg <= shift_reg;     // Should not happen
            endcase
        end
    end

    assign Parallel_Out = shift_reg; // Assign the internal register to the output

endmodule
```

**Explanation of the Verilog Code:**

*   **`reg [3:0] shift_reg;`**: Declares a 4-bit register named `shift_reg` that will hold the state of the shift register.
*   **`always @(*)` block**: This is a *combinational* block. It describes how the `shift_reg` *should* behave based on the current inputs (`S0`, `S1`, `Data_In_Right`, `Data_In_Left`, `Parallel_In`). It calculates the *next state*.
*   **`always @(posedge clk or posedge rst)` block**: This is a *sequential* block. It describes how the `shift_reg` *actually updates* on the edge of the clock or reset.
    *   The `if (rst)` statement handles the asynchronous reset, forcing the register to 0.
    *   The `case ({S1, S0})` statement implements the different operation modes selected by the control signals `S1` and `S0`. This is where the actual shifting and loading occurs, updating `shift_reg` on the rising edge of the clock.
    *   **Important Note:** In a well-structured synchronous design, the combinational `always @(*)` block often computes the `next_state` which is then assigned to the `reg` in the sequential `always @(posedge clk)` block. The provided example synthesizes to the correct logic, but understanding the separation of next-state logic and state update is crucial.
*   **`assign Parallel_Out = shift_reg;`**: This is a continuous assignment that connects the internal `shift_reg` to the output port `Parallel_Out`.

**(Referencing Textbooks):**

*   **Bhasker, J. (2001). *Verilog HDL Synthesis: A Practical Primer*.** This book would be invaluable for understanding how to write Verilog code that synthesizes efficiently into hardware on an FPGA. Concepts like `always` blocks, `reg` vs. `wire`, and the difference between combinational and sequential logic are thoroughly covered.
*   **Palnitkar, S. (2nd Edn.). *Verilog HDL: A Guide to Digital Design and Synthesis*.** Palnitkar's book offers comprehensive coverage of Verilog syntax and semantics, with practical examples of designing sequential circuits like shift registers. It would help in understanding the structure of the `case` statement for mode selection and the timing considerations for synchronous designs.

## FPGA Implementation Steps

1.  **Design (Verilog):** Write the Verilog code for the universal shift register as shown above.
2.  **Synthesis:** Use an FPGA synthesis tool (e.g., Xilinx Vivado, Intel Quartus) to convert the Verilog code into a netlist of logic gates and flip-flops that can be mapped onto the FPGA.
3.  **Implementation:** The synthesis tool will then place these logic elements onto the FPGA fabric and route the interconnections.
4.  **Bitstream Generation:** Create a configuration file (bitstream) that describes how to program the FPGA.
5.  **Hardware Configuration:** Download the bitstream onto the FPGA board.
6.  **Testing:** Connect the appropriate input signals (clock, reset, mode select, data inputs) and observe the output signals (`Parallel_Out`) on LEDs, a logic analyzer, or an oscilloscope to verify the correct operation of the universal shift register.

**(Referencing Course Outcomes):**

*   **CO1 (Design and demonstrate the functioning of various combinational and sequential circuits using ICs):** While this experiment uses FPGA, the underlying principles of sequential circuit design (flip-flops, state transitions) are the same as those implemented with ICs. Understanding the functional table and the Verilog code directly relates to demonstrating functioning. (Knowledge Level: K3 - Applying the principles).
*   **CO2 (Apply an industry compatible hardware description language to implement digital circuits):** The use of Verilog HDL to describe and implement the universal shift register directly addresses this outcome. (Knowledge Level: K3 - Applying the language).
*   **CO3 (Implement digital circuits on FPGA boards and connect external hardware to the boards):** The entire process of synthesizing, implementing, and configuring the FPGA for the shift register, and potentially connecting external switches for control and LEDs for output, falls under this outcome. (Knowledge Level: K3 - Applying the implementation process).

## Demonstration and Testing

To demonstrate the functionality on an FPGA:

1.  **Pin Assignment:** Assign physical pins on the FPGA to the Verilog module's ports (e.g., clock input to a dedicated clock pin, reset to a push button, mode select to switches, parallel data inputs to DIP switches, parallel outputs to LEDs).
2.  **Test Scenarios:**
    *   **Reset:** Apply reset and observe all outputs going to 0.
    *   **Parallel Load:** Set `S1=1`, `S0=1` and provide specific data on `Parallel_In`. Observe `Parallel_Out` reflecting this data after the next clock edge.
    *   **Shift Right:** Set `S1=0`, `S0=1`. Provide serial data at `Data_In_Right`. Observe the data shifting right on each clock pulse, with `Data_In_Right` entering the leftmost position (`shift_reg[0]`) and the rightmost bit (`shift_reg[3]`) being lost.
    *   **Shift Left:** Set `S1=1`, `S0=0`. Provide serial data at `Data_In_Left`. Observe the data shifting left on each clock pulse, with `Data_In_Left` entering the rightmost position (`shift_reg[3]`) and the leftmost bit (`shift_reg[0]`) being lost.
    *   **No Change:** Set `S1=0`, `S0=0`. Observe that the register content remains the same on clock edges.

## Practice Questions and Exercises

**Question 1:**
What are the four main operations that a universal shift register can perform?

**Answer:**
The four main operations are:
1.  Shift Right
2.  Shift Left
3.  Parallel Load
4.  No Change (Hold)

**Question 2:**
Consider the Verilog code for the universal shift register. If `S1=0` and `S0=1`, which input is used for serial data entry during a shift operation, and what is the direction of the shift?

**Answer:**
If `S1=0` and `S0=1`, the operation is "Shift Right". The input used for serial data entry is `Data_In_Right`. The data shifts from the least significant bit (LSB) towards the most significant bit (MSB).

**Question 3:**
Write a Verilog `case` statement to implement the "Shift Left" operation in a universal shift register. Assume the register is `shift_reg [3:0]` and the serial left input is `Data_In_Left`.

**Answer:**
```verilog
2'b10: shift_reg <= {shift_reg[2:0], Data_In_Left}; // Shift Left
```
*Explanation: The existing bits `shift_reg[2:0]` are shifted one position to the left, becoming `shift_reg[3:1]` in the next state. The new bit `Data_In_Left` enters the LSB position `shift_reg[0]`.*

**Question 4 (FPGA-focused):**
If you were to connect the `Parallel_In` port to DIP switches on an FPGA board, what kind of signal would you expect to connect to the `clk` port?

**Answer:**
You would connect a clock signal. This could be from an onboard oscillator (crystal oscillator or clock generator) on the FPGA development board, or it could be generated by a more complex circuit or even an external clock source. The clock signal synchronizes all state changes in the register.

**Question 5:**
How would you modify the Verilog code to create a *bidirectional* shift register that can shift right with serial input `SER_IN_R` and shift left with serial input `SER_IN_L`, also supporting parallel load and hold? Assume control signals `mode[1:0]`.

**Answer:**
You would modify the `case` statement to handle the different modes:

```verilog
module bidirectional_shift_register (
    input wire clk,
    input wire rst,
    input wire [1:0] mode, // 00: Hold, 01: Shift Right, 10: Shift Left, 11: Parallel Load
    input wire SER_IN_R,
    input wire SER_IN_L,
    input wire [3:0] Parallel_In,
    output wire [3:0] Parallel_Out
);

    reg [3:0] shift_reg;

    always @(posedge clk or posedge rst) begin
        if (rst) begin
            shift_reg <= 4'b0000;
        end else begin
            case (mode)
                2'b00: shift_reg <= shift_reg;         // Hold
                2'b01: shift_reg <= {SER_IN_R, shift_reg[3:1]}; // Shift Right
                2'b10: shift_reg <= {shift_reg[2:0], SER_IN_L}; // Shift Left
                2'b11: shift_reg <= Parallel_In;        // Parallel Load
                default: shift_reg <= shift_reg;       // Should not happen
            endcase
        end
    end

    assign Parallel_Out = shift_reg;

endmodule
```
*This modification uses a 2-bit `mode` input, mapping each combination to a specific operation, including distinct serial inputs for left and right shifts.*

## Important Points to Remember

*   **Synchronous Design:** For reliable operation, all state changes in sequential circuits should be synchronized to a clock signal. This experiment implements a synchronous shift register.
*   **Asynchronous Reset:** Include an asynchronous reset to bring the circuit to a known state immediately, regardless of the clock.
*   **Verilog `reg` vs. `wire`:** Use `reg` for signals that are assigned values within an `always` block. Use `wire` for combinational signals or connections between modules.
*   **FPGA Toolchain:** Familiarize yourself with the specific FPGA design tools (synthesis, implementation, programming) for your target board.
*   **Timing Constraints:** For complex designs, timing constraints are crucial to ensure the circuit operates correctly at the desired clock frequency.
*   **Simulation vs. Hardware:** Always simulate your Verilog design thoroughly before programming the FPGA to catch functional errors. Hardware testing is essential to verify timing and physical connections.

## Conclusion

The Universal Shift Register is a versatile sequential circuit with numerous applications in digital systems. Implementing it on an FPGA using Verilog HDL provides hands-on experience with hardware description languages, sequential circuit design, and the FPGA design flow. By understanding the functional requirements and Verilog syntax, students can successfully design and demonstrate this fundamental digital component.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
