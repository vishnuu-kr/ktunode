---
title: "Experiment 7: Asynchronous and Synchronous Counters in FPGA"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 17: Experiment 7: Asynchronous and Synchronous Counters in FPGA"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe46b"
status: "completed"
scrapedAt: "2026-05-23T17:46:43.771Z"
---
# LOGIC CIRCUIT DESIGN LABORATORY

## Module 17: Experiment 7: Asynchronous and Synchronous Counters in FPGA

### 1. Introduction to Counters

Counters are sequential logic circuits that generate a known sequence of states, typically in response to a clock signal. They are fundamental building blocks in digital systems for tasks such as:

*   **Timing and Frequency Division:** Dividing a clock signal's frequency.
*   **Counting Events:** Keeping track of external events.
*   **Sequence Generation:** Creating specific output patterns.
*   **Digital System Control:** Controlling the operation of other digital modules.

This experiment focuses on understanding, designing, and implementing both asynchronous and synchronous counters using Field-Programmable Gate Arrays (FPGAs) and the Verilog Hardware Description Language (HDL).

### 2. Types of Counters

Counters are broadly classified based on how their flip-flops are clocked:

#### 2.1. Asynchronous Counters (Ripple Counters)

*   **Definition:** In an asynchronous counter, the flip-flops are *not* clocked by the same clock signal. The output of one flip-flop serves as the clock input for the next flip-flop in the chain. This "rippling" effect gives them their name.
*   **Operation:** The first flip-flop is triggered by the external clock. Subsequent flip-flops are triggered by the output transition of the preceding flip-flop.
*   **Advantages:**
    *   Simple to design and implement with discrete flip-flops.
    *   Can be more power-efficient in some implementations if not all flip-flops switch simultaneously.
*   **Disadvantages:**
    *   **Propagation Delay:** The primary disadvantage. As the number of flip-flops increases, the cumulative propagation delay becomes significant. This means the counter takes longer to settle to its final state after a clock edge, limiting the maximum operating frequency.
    *   **Glitches/Spurious Outputs:** During state transitions, intermediate flip-flops might briefly transition incorrectly due to the ripple effect, leading to glitches on the output.
*   **Design Principle:** Typically implemented using JK flip-flops or T flip-flops. For a synchronous counter, all flip-flops are clocked by the same clock. For an asynchronous counter, the output of the previous stage drives the clock of the next stage.
    *   **Up Counter:** The output of the previous stage (Q) is connected to the clock input of the next stage. For JK flip-flops, J and K are tied to logic '1'.
    *   **Down Counter:** The output of the previous stage (Q') is connected to the clock input of the next stage. For JK flip-flops, J and K are tied to logic '1'.
*   **Example (2-bit Asynchronous Up Counter):**
    *   **Flip-flop 1 (LSB):** Clocked by the system clock. J1=1, K1=1. Output Q1.
    *   **Flip-flop 2 (MSB):** Clocked by Q1. J2=1, K2=1. Output Q2.
    *   **States:** 00 -> 01 -> 10 -> 11 -> 00
    *   **Verilog (Conceptual - not typically synthesized for ASICs/FPGAs due to delays):**
        ```verilog
        module async_up_counter_2bit (
            input wire clk,
            output reg q0,
            output reg q1
        );
            always @(posedge clk) begin
                q0 <= ~q0; // Toggle on clock edge
            end

            always @(posedge q0) begin // Clocked by the output of the first flip-flop
                q1 <= ~q1; // Toggle on q0's positive edge
            end
        endmodule
        ```
        **Note:** Synthesizing asynchronous logic directly in Verilog can be tricky and often leads to unintended behavior if not handled carefully. For FPGAs, synchronous design is almost always preferred. However, understanding the concept is crucial.

#### 2.2. Synchronous Counters

*   **Definition:** In a synchronous counter, all flip-flops are clocked by the *same* clock signal. The state transitions of all flip-flops occur simultaneously.
*   **Operation:** The clock input of each flip-flop is connected to the system clock. The logic for each flip-flop's next state is determined by the current state of the counter and the clock edge.
*   **Advantages:**
    *   **No Propagation Delay Issues:** All flip-flops change state at the same time, eliminating the ripple effect and propagation delay issues inherent in asynchronous counters. This allows for much higher operating frequencies.
    *   **No Glitches:** State transitions are clean and synchronized, preventing spurious outputs.
*   **Disadvantages:**
    *   More complex logic is required to determine the next state for each flip-flop.
    *   Can be more power-hungry as all flip-flops switch simultaneously.
*   **Design Principle:** Typically implemented using JK flip-flops, D flip-flops, or T flip-flops. The key is that the clock input of all flip-flops is common.
    *   **JK Flip-Flops:** The J and K inputs are controlled by combinational logic that determines when the flip-flop should toggle (J=1, K=1), hold (J=0, K=0), clear (J=0, K=1), or set (J=1, K=0).
    *   **D Flip-Flops:** The D input is controlled by combinational logic to set the next state of the flip-flop.
    *   **T Flip-Flops:** The T input is controlled by combinational logic to determine when the flip-flop should toggle (T=1) or hold (T=0).
*   **Example (2-bit Synchronous Up Counter using JK Flip-Flops):**
    *   **Flip-flop 1 (LSB):** Clocked by the system clock. J1=1, K1=1 (always toggles). Output Q1.
    *   **Flip-flop 2 (MSB):** Clocked by the system clock. J2 = Q1, K2 = Q1. (Toggles only when Q1 is '1'). Output Q2.
    *   **Truth Table and Excitation Table:**
        | Current State (Q2, Q1) | Next State (Q2', Q1') | Flip-flop 1 (J1, K1) | Flip-flop 2 (J2, K2) |
        | :--------------------- | :-------------------- | :------------------- | :------------------- |
        | 00                     | 01                    | 1, 1                 | 0, 0                 |
        | 01                     | 10                    | 1, 1                 | 1, 1                 |
        | 10                     | 11                    | 1, 1                 | 0, 0                 |
        | 11                     | 00                    | 1, 1                 | 1, 1                 |
    *   **Verilog:**
        ```verilog
        module sync_up_counter_2bit (
            input wire clk,
            input wire reset, // Synchronous reset
            output reg q0,
            output reg q1
        );
            always @(posedge clk) begin
                if (reset) begin
                    q0 <= 1'b0;
                    q1 <= 1'b0;
                end else begin
                    // Flip-flop 1 (LSB) always toggles
                    q0 <= ~q0;

                    // Flip-flop 2 (MSB) toggles when q0 is 1
                    if (q0 == 1'b1) begin
                        q1 <= ~q1;
                    end
                end
            end
        endmodule
        ```
        *(This Verilog example implicitly implements the logic for J and K inputs by directly assigning the next state based on the current state and clock edge.)*

### 3. Implementing Counters in FPGA

FPGAs are ideal for implementing digital logic, including counters. The process involves:

1.  **Design:** Writing the counter logic in a Hardware Description Language (HDL) like Verilog or VHDL.
2.  **Synthesis:** Converting the HDL code into a netlist of logic gates and flip-flops that can be mapped to the FPGA's resources.
3.  **Place & Route:** Assigning the synthesized logic elements to specific physical locations (slices, LUTs, flip-flops) on the FPGA chip and connecting them with routing channels.
4.  **Bitstream Generation:** Creating a configuration file (bitstream) that programs the FPGA's internal configuration memory.
5.  **Programming:** Loading the bitstream onto the FPGA.
6.  **Testing:** Verifying the counter's functionality using on-board LEDs, seven-segment displays, or an oscilloscope/logic analyzer.

#### 3.1. Verilog Implementation for FPGA

For FPGAs, it's standard practice to implement *synchronous* logic due to its predictable behavior and performance.

##### 3.1.1. Synchronous Up Counter (N-bit)

```verilog
module sync_up_counter #(
    parameter WIDTH = 4 // Define the width of the counter
) (
    input wire clk,
    input wire reset_n, // Active low asynchronous reset
    input wire enable,  // Enable signal for counting
    output wire [WIDTH-1:0] count
);

    reg [WIDTH-1:0] count_reg;

    // Always block for sequential logic
    always @(posedge clk or negedge reset_n) begin
        if (!reset_n) begin
            count_reg <= {WIDTH{1'b0}}; // Asynchronous reset to 0
        end else if (enable) begin
            // Increment count if enable is high
            count_reg <= count_reg + 1;
        end
        // If enable is low, the counter holds its value (implicit)
    end

    // Assign the registered value to the output
    assign count = count_reg;

endmodule
```

*   **Explanation:**
    *   `parameter WIDTH = 4`: Makes the counter reusable for different bit widths.
    *   `reg [WIDTH-1:0] count_reg;`: Declares a register to hold the counter's state.
    *   `always @(posedge clk or negedge reset_n)`: This is a standard synchronous `always` block with an asynchronous reset. The flip-flops will be sensitive to the positive edge of `clk` and the negative edge of `reset_n`.
    *   `if (!reset_n)`: Handles the asynchronous reset. When `reset_n` is low, `count_reg` is immediately set to 0.
    *   `else if (enable)`: When the reset is inactive and the `enable` signal is high, the counter increments. The `+ 1` operation is synthesized into increment logic for the register.
    *   `assign count = count_reg;`: Connects the internal register to the output port.

##### 3.1.2. Synchronous Down Counter (N-bit)

```verilog
module sync_down_counter #(
    parameter WIDTH = 4
) (
    input wire clk,
    input wire reset_n, // Active low asynchronous reset
    input wire enable,  // Enable signal for counting
    output wire [WIDTH-1:0] count
);

    reg [WIDTH-1:0] count_reg;

    always @(posedge clk or negedge reset_n) begin
        if (!reset_n) begin
            count_reg <= {WIDTH{1'b0}}; // Asynchronous reset to 0
        end else if (enable) begin
            // Decrement count if enable is high
            count_reg <= count_reg - 1;
        end
    end

    assign count = count_reg;

endmodule
```

*   **Explanation:** The logic is similar to the up counter, but the operation is `count_reg - 1` for decrementing.

##### 3.1.3. Synchronous Up/Down Counter (N-bit)

```verilog
module sync_up_down_counter #(
    parameter WIDTH = 4
) (
    input wire clk,
    input wire reset_n, // Active low asynchronous reset
    input wire enable,  // Enable signal for counting
    input wire up_down, // 1 for up, 0 for down
    output wire [WIDTH-1:0] count
);

    reg [WIDTH-1:0] count_reg;

    always @(posedge clk or negedge reset_n) begin
        if (!reset_n) begin
            count_reg <= {WIDTH{1'b0}}; // Asynchronous reset to 0
        end else if (enable) begin
            if (up_down) begin // Count up
                count_reg <= count_reg + 1;
            end else begin // Count down
                count_reg <= count_reg - 1;
            end
        end
    end

    assign count = count_reg;

endmodule
```

*   **Explanation:** Introduces an `up_down` input to control the direction of counting.

##### 3.1.4. Modulo-N Synchronous Counter

*   **Definition:** A counter that counts up to a specific value (N-1) and then resets to 0.
*   **Design:** Similar to a standard synchronous counter, but with additional logic to detect when the count reaches N-1 and trigger a reset for the next clock cycle.
*   **Example (Modulo-8 Up Counter):** Counts 0, 1, 2, 3, 4, 5, 6, 7, 0...
    ```verilog
    module sync_mod8_up_counter (
        input wire clk,
        input wire reset_n,
        input wire enable,
        output wire [2:0] count // 3 bits for modulo 8 (0-7)
    );

        reg [2:0] count_reg;

        always @(posedge clk or negedge reset_n) begin
            if (!reset_n) begin
                count_reg <= 3'b0;
            end else if (enable) begin
                if (count_reg == 3'd7) begin // Check if count is at maximum (N-1)
                    count_reg <= 3'b0;     // Reset to 0
                end else begin
                    count_reg <= count_reg + 1; // Increment
                end
            end
        end

        assign count = count_reg;

    endmodule
    ```
*   **Generic Modulo-N Up Counter:**
    ```verilog
    module sync_modN_up_counter #(
        parameter MODULO = 8,
        parameter WIDTH = $clog2(MODULO) // Calculate width needed
    ) (
        input wire clk,
        input wire reset_n,
        input wire enable,
        output wire [WIDTH-1:0] count
    );

        reg [WIDTH-1:0] count_reg;
        localparam MAX_COUNT = MODULO - 1;

        always @(posedge clk or negedge reset_n) begin
            if (!reset_n) begin
                count_reg <= {WIDTH{1'b0}};
            end else if (enable) begin
                if (count_reg == WIDTH'(MAX_COUNT)) begin // Use WIDTH' for type casting
                    count_reg <= {WIDTH{1'b0}};
                end else begin
                    count_reg <= count_reg + 1;
                end
            end
        end

        assign count = count_reg;

    endmodule
    ```
    *   **Note on `$clog2`:** This is a Verilog system function that calculates the ceiling of the base-2 logarithm of a number, determining the minimum number of bits required to represent a value.

### 4. Connecting to FPGA Hardware

*   **Inputs:** Clock (from on-board oscillator or button), Reset (from button or DIP switch), Enable (from button or DIP switch), Up/Down control (for Up/Down counter).
*   **Outputs:** Counter value displayed on LEDs or a seven-segment display.
*   **Top-Level Module:** You'll need a top-level Verilog module to instantiate your counter and connect it to the FPGA's I/O pins.
    ```verilog
    module fpga_counter_interface (
        input wire sys_clk,       // System clock from FPGA board
        input wire btn_reset,     // Reset button
        input wire btn_enable,    // Enable button
        input wire sw_up_down,    // Switch for up/down direction
        output wire [3:0] led_count // Output to LEDs
    );

        // Instantiate a generic modulo-16 up/down counter
        sync_up_down_counter #(
            .WIDTH(4)
        ) my_counter (
            .clk(sys_clk),
            .reset_n(~btn_reset), // Assuming reset button is active high, connect to active low reset_n
            .enable(btn_enable),
            .up_down(sw_up_down),
            .count(led_count)
        );

    endmodule
    ```
*   **Pin Constraints:** A `.ucf` (or `.xdc` for newer Xilinx tools) file is crucial to map the Verilog module's ports (`sys_clk`, `btn_reset`, `led_count`, etc.) to the physical pins of the FPGA chip.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 5. Textbooks and Reference Material

*   **Verilog HDL Synthesis: A Practical Primer by J. Bhasker:** This book provides a solid foundation for understanding how Verilog code is synthesized into hardware, which is essential for designing efficient counters for FPGAs. It covers RTL design, state machines, and synthesis guidelines.
*   **Fundamentals of Logic Design by Roth C.H:** A classic text that explains the fundamental principles of digital logic design, including flip-flops, state machines, and counter design using Karnaugh maps and state tables. This provides the theoretical basis for why counters work and how to design them manually.
*   **Verilog HDL: A Guide to Digital Design and Synthesis by Palnitkar S.:** Another excellent resource for learning Verilog. It delves into practical aspects of HDL coding for synthesis, including common design patterns for sequential circuits like counters and finite state machines.

### 6. Key Concepts and Definitions

*   **Flip-Flop:** A basic memory element that can store one bit of data and changes its state based on a clock signal and its inputs. (JK, D, T, SR flip-flops).
*   **Clock Signal:** The periodic signal that synchronizes the operation of sequential circuits.
*   **Clock Edge:** The transition of the clock signal (either rising/positive or falling/negative).
*   **Propagation Delay:** The time it takes for a signal to travel through a logic gate or flip-flop and for the output to become stable.
*   **Setup Time:** The minimum time a data input must be stable before the active clock edge.
*   **Hold Time:** The minimum time a data input must remain stable after the active clock edge.
*   **Synchronous Logic:** Logic where all flip-flops are clocked by the same clock signal.
*   **Asynchronous Logic:** Logic where flip-flops are clocked by different signals, often outputs of other flip-flops.
*   **HDL (Hardware Description Language):** Languages like Verilog and VHDL used to describe digital hardware.
*   **Synthesis:** The process of converting an HDL description into a netlist of logic gates and flip-flops.
*   **FPGA (Field-Programmable Gate Array):** A semiconductor device that can be programmed after manufacturing to implement custom digital logic circuits.
*   **Modulo-N Counter:** A counter that cycles through N states before repeating.

### 7. Important Points to Remember

*   **Synchronous Design is Preferred for FPGAs:** Always aim to design synchronous counters for FPGAs to avoid timing issues and ensure predictable operation.
*   **Asynchronous Reset:** In FPGA designs, it's common to use an asynchronous reset (which immediately forces the counter to a known state regardless of the clock) for quick initialization. This is typically implemented using the `always @(posedge clk or negedge reset_n)` construct.
*   **Synchronous Reset:** A synchronous reset only takes effect on the active clock edge when the reset signal is active. This is implemented using `always @(posedge clk)` and checking the reset condition *inside* the `if (reset)` block.
*   **Enable Signal:** Use an `enable` signal to control when the counter should increment or decrement. This is crucial for controlling the speed and behavior of the counter.
*   **Parameterization:** Use parameters in your Verilog code (like `WIDTH` and `MODULO`) to create reusable counter modules.
*   **Clock Domain Crossing (CDC):** If your counter needs to interact with signals from different clock domains, be mindful of CDC issues. This experiment likely assumes a single clock domain.
*   **Verification:** Always simulate your Verilog code using a testbench before synthesizing and downloading to the FPGA to catch functional errors.

### 8. Practice Questions and Exercises

**Question 1:** What is the primary disadvantage of asynchronous counters compared to synchronous counters, especially when implemented in FPGAs?
**Answer:** The primary disadvantage is the propagation delay. The output of each flip-flop acts as the clock for the next, leading to cumulative delays that limit the maximum operating frequency and can cause glitches. Synchronous counters have all flip-flops clocked by the same system clock, mitigating these issues.

**Question 2:** Write a Verilog module for a 4-bit synchronous binary up counter with an active-high synchronous reset and an active-high enable. The counter should wrap around from 1111 to 0000.

```verilog
module sync_binary_up_counter_4bit (
    input wire clk,
    input wire rst, // Active high synchronous reset
    input wire en,  // Active high enable
    output wire [3:0] count
);

    reg [3:0] count_reg;

    always @(posedge clk) begin
        if (rst) begin // Synchronous reset
            count_reg <= 4'b0000;
        end else if (en) begin // If enabled
            if (count_reg == 4'b1111) begin // Check for wrap-around
                count_reg <= 4'b0000;
            end else begin
                count_reg <= count_reg + 1; // Increment
            end
        end
        // If not reset and not enabled, the counter holds its value (implicit)
    end

    assign count = count_reg;

endmodule
```

**Question 3:** Explain the difference between an asynchronous reset and a synchronous reset in Verilog for FPGA design.
**Answer:**
*   **Asynchronous Reset:** The `always @(posedge clk or negedge reset_n)` construct is used. The `reset_n` signal (or `reset` if active high) is evaluated *immediately* when it changes, regardless of the clock edge. This forces the flip-flop to a known state instantly. It's good for initialization.
*   **Synchronous Reset:** The `always @(posedge clk)` construct is used, and the reset condition (`if (reset)`) is checked *only* on the active clock edge. The reset action only occurs when the clock edge arrives while the reset is asserted. This is generally preferred for better timing closure and avoiding race conditions within the clocked logic.

**Question 4:** How would you modify the `sync_up_down_counter` module to create a modulo-10 (decimal) up counter using the least number of bits?
**Answer:**
1.  **Determine the number of bits:** A modulo-10 counter needs to count from 0 to 9. The smallest power of 2 that can represent 9 is 2^3 = 8, but this only allows counting up to 7. We need 10 distinct states, so we need at least 4 bits ($2^3=8 < 10 \le 2^4=16$). Thus, `WIDTH` should be 4.
2.  **Set the `MODULO` parameter:** `MODULO` should be 10.
3.  **Modify the counter logic:** The condition `count_reg == WIDTH'(MAX_COUNT)` needs to check for the maximum value, which is `MODULO - 1 = 9`. The Verilog `else if (count_reg == WIDTH'(MAX_COUNT))` block handles this correctly if `WIDTH` is set to 4 and `MODULO` is 10.

```verilog
module sync_mod10_up_counter #(
    parameter MODULO = 10,
    parameter WIDTH = $clog2(MODULO) // This will calculate WIDTH = 4
) (
    input wire clk,
    input wire reset_n,
    input wire enable,
    output wire [WIDTH-1:0] count
);

    reg [WIDTH-1:0] count_reg;
    localparam MAX_COUNT = MODULO - 1; // MAX_COUNT will be 9

    always @(posedge clk or negedge reset_n) begin
        if (!reset_n) begin
            count_reg <= {WIDTH{1'b0}};
        end else if (enable) begin
            if (count_reg == WIDTH'(MAX_COUNT)) begin // Checks if count_reg == 4'b1001
                count_reg <= {WIDTH{1'b0}};
            end else begin
                count_reg <= count_reg + 1;
            end
        end
    end

    assign count = count_reg;

endmodule
```

### 9. Alignment with Course Outcomes

*   **CO1 (Design and demonstrate functioning):** This experiment directly addresses this by requiring students to design and understand the functioning of both asynchronous and synchronous counters. Implementing them on FPGA and observing their output allows for demonstration. (K3)
*   **CO2 (Apply HDL):** Students will write Verilog code for counters, demonstrating their ability to apply an HDL for digital circuit implementation. (K3)
*   **CO3 (Implement on FPGA):** The core of the experiment is to implement these counter designs on an FPGA board and potentially interface them with external hardware (LEDs, switches), directly fulfilling this outcome. (K3)
*   **CO4 (Function effectively):** This is a laboratory experiment, implying teamwork or individual effort to achieve the task of designing, implementing, and testing the counters. (K2)