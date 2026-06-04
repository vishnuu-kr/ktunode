---
title: "Modeling a D flipflop in Verilog"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 4: Sequential Logic Design  :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad68"
status: "completed"
scrapedAt: "2026-05-20T16:24:06.219Z"
---
## DIGITAL ELECTRONICS AND LOGIC DESIGN - Module 4: Sequential Logic Design - Modeling a D Flip-Flop in Verilog

**Learning Outcomes:**

*   Understand the fundamental behavior of a D flip-flop.
*   Learn how to model a D flip-flop using different Verilog coding styles (behavioral, structural, and gate-level).
*   Understand the importance of sensitivity lists in Verilog.
*   Simulate and verify the functionality of the D flip-flop using test benches.
*   Understand the difference between synchronous and asynchronous reset in flip-flops.

**1. Key Concepts and Definitions**

*   **Flip-Flop:** A bistable circuit that stores one bit of information. It's a fundamental building block of sequential logic circuits.  Flip-flops have two stable states representing 0 and 1, and can change state based on input signals and clock pulses.
*   **D Flip-Flop:** A type of flip-flop where the output (Q) follows the input (D) on the rising (or falling) edge of a clock signal.  It's a crucial element for data storage and transfer.
*   **Clock Signal (clk):** A periodic signal that synchronizes the operation of the flip-flop. Changes in the output Q occur in response to the clock edge (positive or negative).
*   **Data Input (D):** The input that determines the next state of the flip-flop.  The value of D at the active clock edge is stored in the flip-flop.
*   **Output (Q):** The main output of the flip-flop, representing the stored bit.
*   **Output Complement (Qbar or ~Q):** The inverse of the output Q.
*   **Synchronous Reset (rst):** A reset input that forces the output Q to a specific state (usually 0) only on the active edge of the clock signal.
*   **Asynchronous Reset (rst):** A reset input that forces the output Q to a specific state immediately, regardless of the clock signal.
*   **Sensitivity List:**  A list of signals within an `always` block in Verilog that, when changed, trigger the execution of the block. Proper use of sensitivity lists is crucial for accurate simulation.
*   **Blocking Assignment (=):** An assignment statement in Verilog that is executed sequentially within an `always` block.  The next statement waits until the current assignment is complete.  Typically used for combinational logic.
*   **Non-Blocking Assignment (<=):** An assignment statement in Verilog where all assignments within an `always` block are scheduled to occur simultaneously at the end of the current simulation time step.  Essential for modeling sequential logic.
*   **Verilog:**  A hardware description language (HDL) used to describe and simulate digital circuits.
*   **Behavioral Modeling:** Describing the behavior of a circuit using high-level constructs like `if`, `else`, and `case` statements, without specifying the exact gate-level implementation.
*   **Structural Modeling:** Describing a circuit by instantiating lower-level modules (like gates or other flip-flops) and connecting them together.
*   **Gate-Level Modeling:** Describing a circuit using primitive gates like `and`, `or`, `not`, `nand`, `nor`, and `xor`.

**2. Modeling a D Flip-Flop in Verilog**

Here are three common ways to model a D flip-flop in Verilog:

**2.1 Behavioral Modeling (Most Common and Recommended):**

*   This approach focuses on describing *what* the D flip-flop does, rather than *how* it's implemented.

```verilog
module d_ff (
  input  logic clk,
  input  logic d,
  input  logic rst, // Asynchronous Reset
  output logic q,
  output logic qbar
);

  always_ff @(posedge clk, posedge rst) begin // Sensitivity list: clock positive edge or reset positive edge
    if (rst) begin // Asynchronous reset takes precedence
      q <= 0;
      qbar <= 1;
    end else begin
      q <= d;
      qbar <= ~d;
    end
  end

endmodule
```

*   **Explanation:**
    *   `always_ff` is used for sequential logic.  It automatically infers the sensitivity list and ensures the block only executes at the rising clock edge or rising reset edge.
    *   `@(posedge clk, posedge rst)`: This is the sensitivity list. The code inside the `always` block will execute whenever `clk` transitions from low to high *or* `rst` transitions from low to high.
    *   `if (rst)`:  This implements asynchronous reset. If `rst` is high, `q` is immediately set to 0 and `qbar` to 1, *regardless* of the clock.
    *   `q <= d;`:  This is the core D flip-flop behavior. On the rising edge of the clock (and when `rst` is low), the value of `d` is transferred to `q`. The non-blocking assignment (`<=`) is *crucial* here.  It ensures that the value of `d` at the clock edge is captured and assigned to `q` *at the end of the current simulation time step*.  This is how sequential behavior is correctly modeled.
    *   `qbar <= ~d;`: The output qbar is simply the inverse of q.

**2.2 Structural Modeling (Using other Flip-Flops, Multiplexers etc. - Less Common for basic D FF)**

This approach involves building the D flip-flop from other predefined components, such as other flip-flops and logic gates.  While less common for a simple D flip-flop, it demonstrates how larger circuits can be composed from smaller modules.  For a D-FF, this is typically achieved using a Master-Slave configuration or other latch/flip-flop combinations.

```verilog
//Example, conceptually demonstrating building a D-FF using latches (simplified)

module d_ff_structural (
    input  logic clk,
    input  logic d,
    input  logic rst,
    output logic q,
    output logic qbar
);

    logic latch1_out;
    logic latch2_in;

    // Latch 1 (simplified)
    always_latch begin
        if (clk == 1) begin //Latch 1 enabled when clk is high
            latch1_out = d;
        end
    end

    // Latch 2 (simplified)
    always_latch begin
        if (clk == 0) begin  //Latch 2 enabled when clk is low
            q = latch1_out;
        end
    end

    assign qbar = ~q; // Simple qbar

endmodule
```

*   **Explanation:**
    *   This example is simplified for illustration. A real structural implementation would be more complex, typically using two latches (master and slave) to prevent race conditions.
    *   The clock signal controls which latch is enabled. One latch samples the input while the clock is high, and the other latch holds the value while the clock is low. This prevents data from changing during the active clock edge.

**2.3 Gate-Level Modeling (Rarely Used for Complex Circuits):**

*   This approach involves building the D flip-flop using primitive logic gates like `and`, `or`, `not`, `nand`, and `nor`. This is generally not recommended for designing complex circuits because it's tedious and difficult to understand.  It is primarily for demonstrating understanding of the underlying hardware.  The circuit is typically based on a NOR or NAND latch configured appropriately.

```verilog
// Example using NAND gates (Simplified - Requires specific NAND latch design)
module d_ff_gate_level (
  input  logic clk,
  input  logic d,
  input  logic rst, //Asynchronous Reset
  output logic q,
  output logic qbar
);

  wire   s, r; // Set and Reset inputs for the NAND latch

  // Implement reset logic
  assign s = ~(d & clk);  //Simplified for Demonstration. Reset requires more logic
  assign r = ~(~d & clk); //Simplified for Demonstration. Reset requires more logic


  // NAND latch (Actual implementation is more complex to include reset)
  nand g1 (q, s, qbar);
  nand g2 (qbar, r, q);


  //Asynchronous Reset (Requires modification of the latch logic)
  //This is highly simplified and might not function as intended without correct modification of NAND latch
  assign q = rst ? 1'b0 : q; //Conceptual, won't work without modification

endmodule
```

*   **Explanation:**
    *   This is a highly simplified example. A fully functional gate-level D flip-flop requires a more complex arrangement of NAND gates (or NOR gates) to implement the latching behavior and the reset functionality correctly.
    *   The `s` and `r` signals represent the set and reset inputs to the NAND latch.  The logic driving these signals determines the state of the flip-flop.

**3. Test Bench and Simulation**

To verify the functionality of the D flip-flop, you need to create a test bench. The test bench provides input signals to the flip-flop and checks if the output behaves as expected.

```verilog
module testbench;

  logic clk;
  logic d;
  logic rst;
  logic q;
  logic qbar;

  // Instantiate the D flip-flop (using behavioral model for example)
  d_ff dut (
    .clk(clk),
    .d(d),
    .rst(rst),
    .q(q),
    .qbar(qbar)
  );

  // Clock generation
  always #5 clk = ~clk;  // Toggle clock every 5 time units (period = 10)

  initial begin
    // Initialize signals
    clk = 0;
    rst = 1; // Assert reset initially
    d = 0;

    // Apply test vectors
    #10 rst = 0; // De-assert reset
    #10 d = 1;
    #10 d = 0;
    #10 d = 1;
    #10 d = 0;
    #10 $finish; // End simulation
  end

  initial begin
    $monitor("Time=%0t, clk=%b, d=%b, rst=%b, q=%b, qbar=%b", $time, clk, d, rst, q, qbar);
  end

endmodule
```

*   **Explanation:**
    *   `d_ff dut`:  This instantiates the D flip-flop module (DUT - Device Under Test) using the behavioral model example from above.
    *   Clock generation:  The `always #5 clk = ~clk;` creates a clock signal with a period of 10 time units.
    *   Initial block: The `initial` block initializes the signals and applies test vectors.
    *   Reset:  The `rst` signal is asserted initially to reset the flip-flop.
    *   Test vectors:  The subsequent `#10` delays and assignments change the value of `d` to test the flip-flop's behavior with different data inputs.
    *   `$monitor`:  This system task prints the values of the signals at each time step, allowing you to observe the flip-flop's behavior.
    *   `$finish`: This system task ends the simulation.

**4. Synchronous vs. Asynchronous Reset**

The example shown used an *asynchronous* reset.  Here's how to implement a *synchronous* reset:

```verilog
module d_ff_sync_rst (
  input  logic clk,
  input  logic d,
  input  logic rst, // Synchronous Reset
  output logic q,
  output logic qbar
);

  always_ff @(posedge clk) begin
    if (rst) begin // Synchronous reset: only resets on clock edge
      q <= 0;
      qbar <= 1;
    end else begin
      q <= d;
      qbar <= ~d;
    end
  end

endmodule
```

*   **Key Difference:** In the synchronous reset version, the `rst` signal is only checked on the rising edge of the clock. The `rst` signal *must be asserted before the clock edge* for the reset to take effect. The sensitivity list `@(posedge clk)` means the `rst` signal is only evaluated when the clock is transitioning from low to high.

**5. Important Points to Remember:**

*   **Non-Blocking Assignments (<=):**  *Always* use non-blocking assignments (`<=`) inside `always_ff` blocks for sequential logic. This ensures correct modeling of the timing behavior.  Using blocking assignments (`=`) in sequential logic can lead to simulation mismatches and incorrect hardware implementation.
*   **Sensitivity Lists:**  Use correct and complete sensitivity lists.  For simple edge-triggered flip-flops, the sensitivity list usually includes the clock edge and any asynchronous reset signals.  `always_ff` automatically infers the correct sensitivity list.
*   **Reset:** Always include a reset signal (either synchronous or asynchronous) in your flip-flop designs to initialize the state to a known value. Asynchronous resets generally take precedence.
*   **Simulation:**  Thoroughly simulate your designs with test benches to verify their functionality.  Cover all possible input combinations and edge cases.
*   **Coding Style:** While all three modeling styles are valid, behavioral modeling is generally preferred for its clarity and ease of modification. Gate-level modeling should be avoided for complex circuits.

**6. Practice Questions/Exercises:**

1.  **Question:** Write a Verilog module for a D flip-flop with a *negative edge-triggered clock* and an asynchronous reset.
    *   **Answer:**

    ```verilog
    module d_ff_neg_edge (
      input  logic clk,
      input  logic d,
      input  logic rst,
      output logic q,
      output logic qbar
    );

      always_ff @(negedge clk, posedge rst) begin
        if (rst) begin
          q <= 0;
          qbar <= 1;
        end else begin
          q <= d;
          qbar <= ~d;
        end
      end

    endmodule
    ```

2.  **Question:** What is the difference between blocking and non-blocking assignments, and why are non-blocking assignments preferred in sequential logic?
    *   **Answer:** Blocking assignments are executed sequentially within an `always` block, while non-blocking assignments are scheduled to occur simultaneously at the end of the simulation time step. Non-blocking assignments are preferred in sequential logic because they correctly model the parallel nature of hardware and avoid race conditions and simulation mismatches.

3.  **Question:**  Describe the difference between synchronous and asynchronous reset. When would you use one over the other?
    *   **Answer:** Synchronous reset occurs only on the active clock edge, while asynchronous reset happens immediately regardless of the clock. Asynchronous reset is often used for power-on reset to quickly initialize the system, while synchronous reset is often preferred for predictable behavior within the clocked logic. Asynchronous reset can be more challenging to verify and can sometimes lead to metastability issues.

4.  **Question:**  Modify the provided test bench to thoroughly test the D flip-flop with both synchronous and asynchronous reset. Include different data values and observe the outputs.

5.  **Question:** Create a Verilog module for a D flip-flop with an enable input (en). The flip-flop should only update its output when `en` is high, otherwise, it should retain its current state.

```verilog
module d_ff_enable (
  input  logic clk,
  input  logic d,
  input  logic en,
  input  logic rst,
  output logic q,
  output logic qbar
);

  always_ff @(posedge clk, posedge rst) begin
    if (rst) begin
      q <= 0;
      qbar <= 1;
    end else if (en) begin  // Only update if enable is high
      q <= d;
      qbar <= ~d;
    end
  end

endmodule
```
