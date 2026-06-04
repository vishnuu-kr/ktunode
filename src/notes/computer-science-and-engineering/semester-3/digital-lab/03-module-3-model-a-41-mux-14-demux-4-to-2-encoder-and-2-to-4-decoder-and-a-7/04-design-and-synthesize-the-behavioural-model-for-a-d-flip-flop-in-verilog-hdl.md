---
title: "Design and synthesize the behavioural model for a D flip flop in Verilog HDL"
subject: "DIGITAL LAB"
module: "Module 3: Model a 4:1 MUX, 1:4 DEMUX, 4 to 2 encoder, and 2 to 4 decoder and a 7"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aeed"
status: "completed"
scrapedAt: "2026-05-20T16:24:32.241Z"
---
# DIGITAL LAB - Module 3: D Flip-Flop Design in Verilog HDL (Behavioural Model)

**Subject:** DIGITAL LAB
**Module:** Module 3: Model a 4:1 MUX, 1:4 DEMUX, 4 to 2 encoder, and 2 to 4 decoder and a 7 Segment Display Decoder
**Topic:** Design and synthesize the behavioural model for a D flip flop in Verilog HDL
**Description:** Design and synthesize the behavioural model for a D flip flop in Verilog HDL

## Learning Outcomes:

*   Understand the functionality of a D flip-flop.
*   Be able to describe the behaviour of a D flip-flop in Verilog HDL.
*   Be able to write a synthesizable behavioral model for a D flip-flop.
*   Understand the concepts of sensitivity lists and blocking/non-blocking assignments in Verilog.
*   Simulate and verify the functionality of the D flip-flop model.

## 1. Key Concepts and Definitions:

*   **Flip-Flop:** A sequential logic circuit that stores one bit of information. It retains its state until triggered by a clock signal.
*   **D Flip-Flop (Data Flip-Flop):**  A type of flip-flop where the output (Q) follows the input (D) on the active clock edge (rising or falling).
*   **Clock (CLK):**  A periodic signal that synchronizes the operation of sequential circuits.
*   **Reset (RST):**  An input signal used to initialize the flip-flop to a known state (typically Q=0).
*   **Set (SET):**  An input signal used to set the flip-flop to a known state (typically Q=1).
*   **Q:** The primary output of the flip-flop.
*   **Q_bar (Q'):** The complementary output of the flip-flop (the inverse of Q).
*   **Rising Edge:** The transition of the clock signal from a low (0) to a high (1) voltage level.
*   **Falling Edge:** The transition of the clock signal from a high (1) to a low (0) voltage level.
*   **Sensitivity List:**  A list of signals that, when their value changes, cause a particular block of code to execute. Used in `always` blocks in Verilog.
*   **Blocking Assignment (=):**  Assignments that are executed sequentially within a procedural block. The next statement only executes after the current assignment is complete.
*   **Non-Blocking Assignment (<=):** Assignments that are scheduled to occur at the end of the current simulation time step. All assignments within a procedural block using non-blocking assignments are evaluated concurrently. Essential for modeling sequential logic.
*   **Behavioural Modeling:**  A Verilog modeling style that focuses on describing the *functionality* of a circuit, rather than its detailed implementation.
*   **Synthesizable:**  Code that can be translated into a physical hardware implementation (e.g., using an FPGA or ASIC).

## 2. D Flip-Flop Functionality:

The D flip-flop operates as follows:

*   **If RESET is asserted (typically logic '0'):**  The output Q is forced to '0', regardless of the other inputs.  (This is an asynchronous reset).
*   **If SET is asserted (typically logic '0'):** The output Q is forced to '1', regardless of the other inputs.  (This is an asynchronous set).
*   **If RESET and SET are not asserted:** On the active clock edge (rising or falling, depending on the design), the output Q takes on the value of the input D.

| CLK (edge) | D | RST | SET | Q(t+1) |
|------------|---|-----|-----|--------|
| ↑          | 0 | 0   | 1   | 1      |
| ↑          | 1 | 0   | 1   | 1      |
| ↑          | X | 0   | 1   | 1      |
| ↑          | 0 | 1   | 0   | 0      |
| ↑          | 1 | 1   | 0   | 0      |
| ↑          | X | 1   | 0   | 0      |
| ↑          | 0 | 1   | 1   | **Invalid (Both Active)**      |
| ↑          | 1 | 1   | 1   | **Invalid (Both Active)**      |
| ↑          | 0 | 1   | 1   | 0      |
| ↑          | 1 | 1   | 1   | 1      |

**Note:**  The SET and RESET functionality is asynchronous.  They immediately affect the output regardless of the clock.  It's usually bad practice to have both RESET and SET asserted at the same time.
## 3. Verilog HDL Behavioral Model:

Here's a synthesizable behavioral model of a D flip-flop with asynchronous reset and set using Verilog HDL:

```verilog
module d_ff (
  input  wire clk,
  input  wire d,
  input  wire rst, // Asynchronous Reset (active low)
  input  wire set,  // Asynchronous Set (active low)
  output reg  q,
  output reg  q_bar
);

  always @(posedge clk or negedge rst or negedge set) begin
    if (~rst) begin   // Asynchronous Reset
      q <= 0;
      q_bar <= 1;
    end else if (~set) begin //Asynchronous Set
      q <= 1;
      q_bar <= 0;
    end else begin      // Normal D flip-flop operation
      q <= d;
      q_bar <= ~d;
    end
  end

endmodule
```

**Explanation:**

*   **`module d_ff (...)`**:  Defines the module named `d_ff` with its input and output ports.
*   **`input wire clk, d, rst, set`**: Declares the input signals: clock (`clk`), data (`d`), reset (`rst`), and set (`set`).  `wire` is the default type for signals that are driven continuously.
*   **`output reg q, q_bar`**: Declares the output signals `q` and `q_bar`.  `reg` is required for signals that are assigned values within an `always` block. Because sequential logic must retain its state, the outputs of the D flip-flop should be declared as `reg` type.
*   **`always @(posedge clk or negedge rst or negedge set)`**:  This is a procedural block that executes whenever there is a rising edge on the clock (`posedge clk`) *or* a falling edge on the reset (`negedge rst`) *or* a falling edge on the set (`negedge set`).  This is the *sensitivity list*. `negedge` indicates that the signal is active-low.
*   **`if (~rst) ... else if (~set) ... else ...`**: This is a conditional statement that implements the flip-flop's behavior. The reset signal takes precedence, then the set signal, and finally, the normal D flip-flop behavior if neither reset nor set is asserted. Using `~rst` and `~set` as the condition means that the reset and set pins are active-low.
*   **`q <= d;`**:  This is a *non-blocking assignment*.  It schedules the value of `d` to be assigned to `q` at the *end* of the current simulation time step.  This is crucial for modeling the correct behavior of sequential circuits.
*   **`q_bar <= ~d;`**:  Assigns the inverse of the input `d` to the complementary output `q_bar`.
*   **`endmodule`**:  Ends the module definition.

**Important Considerations:**

*   **Sensitivity List:**  The sensitivity list must include *all* signals that, when changed, can affect the outputs of the `always` block.  Omitting signals can lead to simulation mismatches (the simulation behaves differently than the actual hardware).  In this case, the sensitivity list has `posedge clk, negedge rst, negedge set` as these are the only triggers that change the flip-flop state.
*   **Non-Blocking Assignments:** Always use non-blocking assignments (`<=`) for sequential logic inside `always` blocks that are triggered by a clock edge. This ensures that all assignments within the block are evaluated concurrently, correctly modeling the flip-flop's behaviour.

## 4. Simulation and Verification:

To verify the functionality of the D flip-flop, you can create a testbench. Here's a basic example:

```verilog
module tb_d_ff;

  reg clk;
  reg d;
  reg rst;
  reg set;
  wire q;
  wire q_bar;

  // Instantiate the D flip-flop
  d_ff uut (
    .clk(clk),
    .d(d),
    .rst(rst),
    .set(set),
    .q(q),
    .q_bar(q_bar)
  );

  // Clock Generation
  initial begin
    clk = 0;
    forever #5 clk = ~clk; // Period of 10 time units
  end

  // Test Stimulus
  initial begin
    rst = 1;  // Deactivate Reset
    set = 1;  // Deactivate Set
    d = 0;

    #10 rst = 0; //Assert reset
    #10 rst = 1; //Deassert reset

    #10 d = 1;
    #10 d = 0;
    #10 d = 1;

    #10 set = 0; //Assert set
    #10 set = 1; //Deassert set

    #10 $finish;
  end

  initial begin
      $monitor("Time = %0t, clk = %b, d = %b, rst = %b, set = %b, Q = %b, Q_bar = %b", $time, clk, d, rst, set, q, q_bar);
  end

endmodule
```

**Explanation:**

*   **`module tb_d_ff;`**: Defines the testbench module.
*   **`reg clk, d, rst, set;`**: Declares the input signals of the D flip-flop as `reg` in the testbench because their values are driven by procedural code.
*   **`wire q, q_bar;`**:  Declares the output signals of the D flip-flop as `wire` because they are connected to the outputs of the instantiated D flip-flop.
*   **`d_ff uut (...)`**:  Instantiates the D flip-flop module (`d_ff`) and connects its ports to the testbench signals.  `uut` stands for "Unit Under Test."
*   **`initial begin ... end`**:  These blocks contain the stimulus code, defining how the input signals change over time.
*   **Clock Generation:** `clk = 0; forever #5 clk = ~clk;` creates a clock signal with a period of 10 time units.  `#5` is a delay of 5 time units.
*   **Test Stimulus:**  The test stimulus sets the initial values of the signals and then changes them to test different scenarios, including reset, set, and data input.
*   **`$monitor(...)`**: This is a system task that displays the values of the specified signals at each simulation time step when any of the values change. This helps observe the flip-flop's behaviour.
*   **`$finish;`**:  This system task terminates the simulation.

**Running the Simulation:**

1.  Save the D flip-flop code as `d_ff.v` and the testbench code as `tb_d_ff.v`.
2.  Use a Verilog simulator (e.g., ModelSim, Vivado Simulator, Icarus Verilog) to compile and simulate the code.
3.  Analyze the simulation waveform to verify that the D flip-flop behaves as expected.  You should see the output `q` follow the input `d` on the rising edge of the clock, and that the reset signal sets the output `q` to '0', and the set signal sets the output `q` to '1'.

## 5. Practice Questions/Exercises:

1.  **Modify the Verilog code to implement a D flip-flop with a *synchronous* reset.**  (The reset should only take effect on the rising edge of the clock).

    ```verilog
    module d_ff_sync_rst (
      input  wire clk,
      input  wire d,
      input  wire rst, // Synchronous Reset (active high)
      output reg  q,
      output reg  q_bar
    );

      always @(posedge clk) begin
        if (rst) begin
          q <= 0;
          q_bar <= 1;
        end else begin
          q <= d;
          q_bar <= ~d;
        end
      end

    endmodule
    ```

2.  **Modify the testbench to include more test cases, such as:**

    *   Test the D flip-flop when the data input changes right before the clock edge.
    *   Test the D flip-flop after the reset and set have been activated.

```verilog
module tb_d_ff;

  reg clk;
  reg d;
  reg rst;
  reg set;
  wire q;
  wire q_bar;

  // Instantiate the D flip-flop
  d_ff uut (
    .clk(clk),
    .d(d),
    .rst(rst),
    .set(set),
    .q(q),
    .q_bar(q_bar)
  );

  // Clock Generation
  initial begin
    clk = 0;
    forever #5 clk = ~clk; // Period of 10 time units
  end

  // Test Stimulus
  initial begin
    rst = 1;  // Deactivate Reset
    set = 1;  // Deactivate Set
    d = 0;

    #10 rst = 0; //Assert reset
    #10 rst = 1; //Deassert reset

    #10 d = 1;
    #10 d = 0;
    #4  d = 1;   // Data changes close to clock edge
    #6  d = 0;
    #10 d = 1;

    #10 set = 0; //Assert set
    #10 set = 1; //Deassert set

    #10 d = 0;  // Set then input new data

    #10 $finish;
  end

  initial begin
      $monitor("Time = %0t, clk = %b, d = %b, rst = %b, set = %b, Q = %b, Q_bar = %b", $time, clk, d, rst, set, q, q_bar);
  end

endmodule
```

3.  **Design a testbench to test both active-low and active-high reset versions of the D flip-flop.** (Hint: Use parameters to define the reset polarity).

## 6. Important Points to Remember:

*   Use non-blocking assignments (`<=`) for sequential logic inside `always @(posedge clk ...)` blocks.
*   Ensure the sensitivity list is complete.
*   Understand the difference between blocking and non-blocking assignments.
*   Thoroughly simulate and verify your design with a comprehensive testbench.
*   Pay attention to reset and set conditions, especially whether they are synchronous or asynchronous, and active-high or active-low.  These are common sources of errors.

By understanding these concepts and practicing with the provided examples and exercises, you will be well-equipped to design and implement D flip-flops and other sequential logic circuits in Verilog HDL.
