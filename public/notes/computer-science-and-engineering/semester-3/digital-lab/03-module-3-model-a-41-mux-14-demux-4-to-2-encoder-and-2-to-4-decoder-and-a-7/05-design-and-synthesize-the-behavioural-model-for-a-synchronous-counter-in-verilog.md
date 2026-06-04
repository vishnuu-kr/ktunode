---
title: "Design and synthesize the behavioural model for a synchronous counter in Verilog"
subject: "DIGITAL LAB"
module: "Module 3: Model a 4:1 MUX, 1:4 DEMUX, 4 to 2 encoder, and 2 to 4 decoder and a 7"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aeee"
status: "completed"
scrapedAt: "2026-05-20T16:24:32.937Z"
---
## DIGITAL LAB - Module 3: Synchronous Counter Design in Verilog (Behavioural Model)

**Topic:** Design and synthesize the behavioural model for a synchronous counter in Verilog.

**Learning Outcomes:**

*   Understand the principles of synchronous counter operation.
*   Design a synchronous counter using behavioural Verilog.
*   Synthesize the Verilog code and understand the generated hardware.
*   Test and verify the functionality of the designed counter.

### 1. Key Concepts and Definitions

*   **Counter:** A sequential circuit that goes through a predetermined sequence of states. It is used for counting events or time intervals.
*   **Synchronous Counter:** A counter where all flip-flops are clocked simultaneously by the same clock signal. This means all state transitions occur at the same time, making the design simpler and predictable.
*   **Asynchronous Counter (Ripple Counter):**  Flip-flops are not clocked simultaneously. Output of one flip-flop serves as the clock input to the next. This creates a "ripple" effect and can cause timing issues.  We are focusing on *synchronous* counters in this module.
*   **Up Counter:** Counts in an ascending order (e.g., 0, 1, 2, 3...).
*   **Down Counter:** Counts in a descending order (e.g., 3, 2, 1, 0...).
*   **Mod-N Counter:**  A counter that counts up to N-1 and then resets to 0.  The modulus is the number of states the counter goes through. For example, a Mod-8 counter counts from 0 to 7.
*   **Flip-Flop (FF):** A basic building block of sequential circuits, capable of storing one bit of information. Common types include D flip-flops, T flip-flops, JK flip-flops.  D flip-flops are often used in synchronous counter designs.
*   **State Diagram:**  A graphical representation of the counter's operation, showing the different states and the transitions between them.
*   **State Table:**  A tabular representation of the counter's operation, showing the current state, the next state, and the corresponding outputs.
*   **Behavioural Modelling (Verilog):**  Describes the functionality of a circuit using high-level constructs, focusing on *what* the circuit does rather than *how* it does it. Uses `always` blocks and sequential logic.
*   **Synchronous Reset:** The counter is reset to its initial state based on the rising (or falling) edge of the clock signal, along with the reset signal.
*   **Asynchronous Reset:** The counter is reset immediately when the reset signal is asserted, regardless of the clock signal.
*   **Synthesis:** The process of converting the Verilog code into a gate-level netlist that can be implemented on a specific hardware platform (e.g., FPGA, ASIC).
*   **Testbench:** A separate Verilog module used to stimulate the design under test (DUT) and verify its functionality.

### 2. Design of a Synchronous Counter using Behavioural Verilog

**2.1. Design Steps:**

1.  **Define the Counter Specifications:**
    *   Determine the modulus (N) of the counter.
    *   Specify the direction of counting (up or down).
    *   Decide on the type of reset (synchronous or asynchronous).

2.  **Create the State Diagram/Table:**
    *   Visualize the counter's states and transitions.  This helps in understanding the counting sequence.

3.  **Write the Verilog Code:**
    *   Use the `always @(posedge clk)` construct for synchronous operation.
    *   Use an `if` statement to implement the reset logic.
    *   Use a `case` statement or `if-else` statements to implement the counting logic based on the desired sequence.

4.  **Synthesize the Verilog Code:**
    *   Use a synthesis tool (e.g., Xilinx Vivado, Intel Quartus) to convert the Verilog code into a gate-level netlist.

5.  **Simulate and Verify:**
    *   Create a testbench to stimulate the counter and verify that it operates correctly.

**2.2. Verilog Code Example (Mod-4 Up Counter with Synchronous Reset):**

```verilog
module synchronous_counter (
    input clk,
    input rst,  // Synchronous reset
    output reg [1:0] count // 2-bit counter (0 to 3)
);

  always @(posedge clk) begin
    if (rst) begin
      count <= 2'b00;  // Reset to 0
    end else begin
      if (count == 2'b11) begin // Check for max count (3)
        count <= 2'b00;  // Roll over to 0
      end else begin
        count <= count + 1'b1;  // Increment the counter
      end
    end
  end

endmodule
```

**Explanation:**

*   **`module synchronous_counter(...)`**:  Defines the module name and its inputs and outputs.
*   **`input clk, rst`**:  `clk` is the clock signal, and `rst` is the synchronous reset signal.
*   **`output reg [1:0] count`**:  `count` is a 2-bit register that stores the counter's value.  It is declared as `reg` because its value is assigned within an `always` block.  `[1:0]` indicates that it is a 2-bit vector.
*   **`always @(posedge clk) begin ... end`**:  This block executes at the rising edge of the clock signal.
*   **`if (rst) begin ... end`**:  Checks if the reset signal is active. If it is, the counter is reset to 0. This is the synchronous reset logic.
*   **`else begin ... end`**:  If the reset signal is not active, the counting logic is executed.
*   **`if (count == 2'b11) begin ... end`**: Checks if the counter has reached its maximum value (3).  If it has, the counter rolls over to 0.
*   **`else begin count <= count + 1'b1; end`**:  If the counter has not reached its maximum value, it is incremented by 1.  `1'b1` is the Verilog notation for a 1-bit binary number with the value 1.

**2.3. Verilog Code Example (Mod-8 Down Counter with Asynchronous Reset):**

```verilog
module synchronous_down_counter (
    input clk,
    input rst_n,  // Asynchronous reset (active low)
    output reg [2:0] count // 3-bit counter (7 to 0)
);

  always @(posedge clk or negedge rst_n) begin
    if (~rst_n) begin  // Check for reset (active low)
      count <= 3'b111; // Reset to 7
    end else begin
      if (count == 3'b000) begin // Check for minimum count (0)
        count <= 3'b111; // Roll over to 7
      end else begin
        count <= count - 1'b1;  // Decrement the counter
      end
    end
  end

endmodule
```

**Explanation:**

*   **`input rst_n`**: `rst_n` is the asynchronous reset signal (active low). The `n` suffix indicates that it is active low.
*   **`always @(posedge clk or negedge rst_n) begin ... end`**:  This block executes at the rising edge of the clock signal OR the falling edge of the reset signal.  This implements asynchronous reset functionality.
*   **`if (~rst_n) begin ... end`**:  Checks if the reset signal is active (low).  The `~` operator is the bitwise NOT operator, so `~rst_n` is true when `rst_n` is false (0).
*   **`count <= 3'b111`**: Resets the counter to 7 (binary 111).
*   **`else begin ... end`**: If the reset signal is not active, the counting logic is executed.
*   **`if (count == 3'b000) begin ... end`**: Checks if the counter has reached its minimum value (0). If it has, the counter rolls over to 7.
*   **`else begin count <= count - 1'b1; end`**: If the counter has not reached its minimum value, it is decremented by 1.

**2.4.  Using `case` statement for Complex Counters:**

For counters with irregular sequences, a `case` statement can be more readable.  Consider a counter that counts: 0, 2, 1, 3, 0, 2, 1, 3...

```verilog
module complex_counter (
    input clk,
    input rst,
    output reg [1:0] count
);

  always @(posedge clk) begin
    if (rst) begin
      count <= 2'b00;
    end else begin
      case (count)
        2'b00: count <= 2'b10;  // 0 -> 2
        2'b10: count <= 2'b01;  // 2 -> 1
        2'b01: count <= 2'b11;  // 1 -> 3
        2'b11: count <= 2'b00;  // 3 -> 0
        default: count <= 2'b00; // Default case (shouldn't happen)
      endcase
    end
  end

endmodule
```

### 3. Synthesis

*   The Verilog code can be synthesized using tools like Xilinx Vivado or Intel Quartus.
*   The synthesis tool will generate a gate-level netlist that implements the counter's functionality using flip-flops, logic gates, and other components.
*   The synthesis process involves:
    *   **Translation:** Converting the Verilog code into an internal representation.
    *   **Optimization:** Simplifying the circuit to reduce area, power consumption, and delay.
    *   **Technology Mapping:** Selecting specific gates and flip-flops from a technology library to implement the circuit.
*   The synthesized netlist can then be placed and routed on the target hardware platform (e.g., FPGA, ASIC).

### 4. Testbench and Verification

**4.1. Creating a Testbench:**

A testbench is a Verilog module used to verify the functionality of the counter. It provides stimulus to the counter and checks the outputs against expected values.

**4.2. Example Testbench (for the Mod-4 Up Counter):**

```verilog
module testbench;

  reg clk;
  reg rst;
  wire [1:0] count;

  // Instantiate the counter
  synchronous_counter uut (
    .clk(clk),
    .rst(rst),
    .count(count)
  );

  // Clock generation
  initial begin
    clk = 0;
    forever #5 clk = ~clk; // Toggle clock every 5 time units
  end

  // Test stimulus
  initial begin
    rst = 1;  // Assert reset
    #10 rst = 0; // Deassert reset
    #40 $finish; // End simulation after 40 time units
  end

  // Monitor the output
  initial begin
    $monitor("Time = %0d, Reset = %b, Count = %d", $time, rst, count);
  end

endmodule
```

**Explanation:**

*   **`module testbench;`**:  Defines the testbench module.
*   **`reg clk, rst`**:  Declares `clk` and `rst` as registers because their values are assigned within initial blocks.
*   **`wire [1:0] count`**:  Declares `count` as a wire because it is driven by the output of the `synchronous_counter` module.
*   **`synchronous_counter uut (...)`**:  Instantiates the `synchronous_counter` module (DUT – Device Under Test). The `.clk(clk)` syntax connects the testbench's `clk` signal to the counter's `clk` input.  This is instantiation by port name, which is recommended.
*   **`initial begin ... end`**:  Initial blocks execute only once at the beginning of the simulation.
*   **`clk = 0; forever #5 clk = ~clk`**:  Generates a clock signal with a period of 10 time units (5 for high, 5 for low). `#5` is a delay of 5 time units.
*   **`rst = 1; #10 rst = 0;`**:  Asserts the reset signal for 10 time units and then deasserts it.
*   **`$finish`**:  Ends the simulation.
*   **`$monitor`**:  Displays the values of `time`, `rst`, and `count` during the simulation. This is helpful for observing the counter's behavior.

**4.3. Simulation and Verification:**

*   Use a simulator (e.g., ModelSim, Xilinx Vivado Simulator, Intel Quartus Simulator) to run the testbench.
*   Observe the output of the `$monitor` statement or use waveform viewers to analyze the counter's behavior.
*   Verify that the counter counts correctly and resets properly.
*   Adjust the testbench stimulus if necessary to test different scenarios.

### 5. Practice Questions/Exercises

1.  **Design a Mod-10 (decade) synchronous up counter using behavioural Verilog with a synchronous reset.**

    *   *Answer:*

    ```verilog
    module decade_counter (
        input clk,
        input rst,
        output reg [3:0] count
    );

      always @(posedge clk) begin
        if (rst) begin
          count <= 4'b0000;
        end else begin
          if (count == 4'b1001) begin // Check for 9
            count <= 4'b0000;
          end else begin
            count <= count + 1'b1;
          end
        end
      end

    endmodule
    ```

2.  **Modify the Mod-4 Up Counter example to have an enable input. The counter should only increment when the enable input is high.**

    *   *Answer:*

    ```verilog
    module synchronous_counter_enable (
        input clk,
        input rst,
        input enable, // Enable input
        output reg [1:0] count
    );

      always @(posedge clk) begin
        if (rst) begin
          count <= 2'b00;
        end else if (enable) begin // Check enable condition
          if (count == 2'b11) begin
            count <= 2'b00;
          end else begin
            count <= count + 1'b1;
          end
        end
      end

    endmodule
    ```

3.  **Write a testbench for the Mod-10 counter you designed in Question 1.** (Hint: Adapt the example testbench).

    *   *(This exercise is left to the reader to adapt the provided example. Key steps involve changing the instantiation, monitoring the correct output, and setting the simulation length)*

4.  **What are the key differences between synchronous and asynchronous counters?**

    *   *Answer:*
        *   *Synchronous:* All flip-flops are clocked simultaneously, simpler design, predictable timing.
        *   *Asynchronous:* Flip-flops are not clocked simultaneously, output of one FF clocks the next, timing issues (ripple effect).

### 6. Important Points to Remember

*   Use `always @(posedge clk)` for synchronous logic.
*   Use a non-blocking assignment (`<=`) inside `always` blocks for sequential logic.
*   Be mindful of reset types (synchronous vs. asynchronous). Asynchronous resets are often preferable for initial power-up, but synchronous resets can lead to simpler timing analysis.
*   The use of `case` statements can greatly improve readability and maintainability for counters with more complex state transitions.
*   Always create a testbench to verify the functionality of your design thoroughly.
*   Consider adding comments to your Verilog code to explain the functionality of each section. This greatly helps with understanding and debugging.
*   When writing testbenches, use clear and concise stimulus to thoroughly test all possible scenarios and edge cases.  Make use of `$monitor` and wave viewers to analyze the results.
*   Remember the difference between blocking (`=`) and non-blocking (`<=`) assignments. Inside sequential `always` blocks, *always* use non-blocking assignments.

This detailed explanation covers all the learning outcomes and provides a comprehensive understanding of designing synchronous counters using behavioural Verilog. The examples and practice questions further reinforce the concepts. Remember to practice writing and simulating different types of counters to solidify your knowledge. Good luck!
