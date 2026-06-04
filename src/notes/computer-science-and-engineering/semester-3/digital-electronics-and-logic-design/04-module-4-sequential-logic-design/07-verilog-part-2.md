---
title: "Verilog (Part 2) : -"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 4: Sequential Logic Design  :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad64"
status: "completed"
scrapedAt: "2026-05-20T16:24:03.417Z"
---
# Digital Electronics and Logic Design: Module 4 - Sequential Logic Design: Verilog (Part 2)

These notes cover Verilog (Part 2) focusing on sequential logic design using Verilog.

**Learning Outcomes:**

*   Understand how to describe sequential logic elements (flip-flops, registers, counters) in Verilog.
*   Be able to model synchronous and asynchronous sequential circuits in Verilog.
*   Learn about blocking and non-blocking assignments and their importance in sequential logic.
*   Understand how to use `always` blocks with `posedge` and `negedge` for clock-triggered behavior.
*   Be able to write Verilog code for finite state machines (FSMs).
*   Simulate and verify Verilog code for sequential circuits.

## 1. Introduction to Sequential Logic in Verilog

Sequential logic circuits' outputs depend not only on the current inputs but also on the past history of inputs. This is achieved using memory elements such as flip-flops and registers.  Verilog provides powerful constructs to describe and simulate these circuits.

## 2. Modeling Flip-Flops and Registers in Verilog

*   **Flip-Flops:** The fundamental building blocks of sequential circuits.  Common types include D flip-flops, T flip-flops, JK flip-flops, and SR flip-flops.

    *   **D Flip-Flop:**  Stores the value of the D input at the rising (or falling) edge of the clock.

        ```verilog
        module d_ff (input clk, input d, output reg q);
          always @(posedge clk) begin
            q <= d;
          end
        endmodule
        ```

        *   `posedge clk`:  Sensitivity list specifying that the block is triggered on the rising edge of the clock signal `clk`.
        *   `q <= d`: Non-blocking assignment.  This is crucial for sequential logic.  It schedules the assignment to happen at the *end* of the current time step, allowing all flip-flops to update simultaneously.
        *   `output reg q`: The output `q` must be declared as a `reg` type within the module.  This signifies that it holds a value.
*   **Registers:** A collection of flip-flops that store multiple bits of data.

    ```verilog
    module register (input clk, input enable, input [7:0] d, output reg [7:0] q);
      always @(posedge clk) begin
        if (enable) begin
          q <= d;
        end
      end
    endmodule
    ```

    *   `input [7:0] d`:  An 8-bit data input.
    *   `output reg [7:0] q`: An 8-bit register output.
    *   `enable`: Allows controlling when the register is updated. If `enable` is high, the register updates with the value of `d` on the rising edge of the clock.

## 3. Blocking vs. Non-Blocking Assignments: A Critical Distinction

This is the most important concept in Verilog for sequential logic.

*   **Blocking Assignment (`=`):**  Assignments are executed *sequentially* within the `always` block.  The next statement waits for the current statement to complete. Generally used for combinational logic.

    *   **Example (Incorrect for sequential logic):**

        ```verilog
        always @(posedge clk) begin
          temp = a;
          b = temp; // `b` gets the *new* value of `temp` after the first assignment.
        end
        ```

*   **Non-Blocking Assignment (`<=`):** Assignments are scheduled to occur at the *end* of the current simulation time step. All assignments are evaluated based on the *current* values of the right-hand side.  This is *essential* for describing sequential logic.

    *   **Example (Correct for sequential logic):**

        ```verilog
        always @(posedge clk) begin
          temp <= a;
          b <= temp; // `b` gets the *old* value of `temp` from the beginning of the time step.
        end
        ```

**Key Takeaway:**

*   **Use non-blocking assignments (`<=`) in `always @(posedge clk)` blocks to model sequential logic correctly.** This ensures that all flip-flops update simultaneously based on the values present at the *beginning* of the clock cycle.  Using blocking assignments can lead to incorrect and unpredictable behavior.

## 4. Modeling Synchronous and Asynchronous Sequential Circuits

*   **Synchronous Sequential Circuits:** All state changes are synchronized by a clock signal.  The examples above (`d_ff` and `register`) are synchronous.

*   **Asynchronous Sequential Circuits:** State changes are not synchronized by a clock signal.  They are triggered directly by input changes.  Asynchronous circuits can be more complex to design and debug due to the potential for race conditions and metastability.  They are typically used in specific applications where speed is critical.

    *   **Example: Asynchronous Reset for a D Flip-Flop**

        ```verilog
        module d_ff_async_reset (input clk, input d, input rst_n, output reg q);
          always @(posedge clk or negedge rst_n) begin
            if (~rst_n) begin
              q <= 1'b0;  // Asynchronous reset
            end else begin
              q <= d;
            end
          end
        endmodule
        ```

        *   `negedge rst_n`:  The sensitivity list now includes the negative edge of the `rst_n` (reset, active low) signal.
        *   `if (~rst_n)`:  When `rst_n` is low (0), the flip-flop is reset to 0 *immediately*, regardless of the clock.
        *   This example demonstrates *asynchronous* reset.  The `rst_n` input directly affects the output `q` without waiting for the clock edge.

## 5. Counters in Verilog

Counters increment (or decrement) their output value on each clock cycle.

```verilog
module counter (input clk, input rst_n, input enable, output reg [3:0] count);
  always @(posedge clk or negedge rst_n) begin
    if (~rst_n) begin
      count <= 4'b0000;
    end else if (enable) begin
      count <= count + 1'b1;
    end
  end
endmodule
```

*   `input rst_n`: Asynchronous reset (active low).
*   `input enable`:  Enables or disables counting.
*   `output reg [3:0] count`:  A 4-bit counter.
*   `count <= count + 1'b1;`: Increments the counter on each clock cycle when `enable` is high.

## 6. Finite State Machines (FSMs) in Verilog

FSMs are a fundamental concept in digital design.  They consist of:

*   **States:** A finite number of distinct states the system can be in.
*   **Inputs:**  External signals that influence state transitions.
*   **Outputs:** Signals generated based on the current state.
*   **Next State Logic:** Determines the next state based on the current state and inputs.
*   **Output Logic:** Determines the outputs based on the current state (Mealy or Moore machine).

**Verilog Implementation of an FSM (Moore Machine):**

```verilog
module fsm_example (input clk, input rst_n, input a, output reg out);

  // State Definitions
  localparam S0 = 2'b00;
  localparam S1 = 2'b01;
  localparam S2 = 2'b10;

  // State Register
  reg [1:0] current_state, next_state;

  // State Transition Logic (combinational)
  always @(*) begin
    case (current_state)
      S0: if (a) next_state = S1; else next_state = S0;
      S1: if (a) next_state = S2; else next_state = S0;
      S2: next_state = S0;
      default: next_state = S0; //Prevent latching
    endcase
  end

  // State Update (sequential)
  always @(posedge clk or negedge rst_n) begin
    if (~rst_n) begin
      current_state <= S0;
    end else begin
      current_state <= next_state;
    end
  end

  // Output Logic (Moore Machine - Output depends only on current state)
  always @(current_state) begin
    case (current_state)
      S0: out = 1'b0;
      S1: out = 1'b1;
      S2: out = 1'b0;
      default: out = 1'b0;
    endcase
  end

endmodule
```

**Explanation:**

1.  **State Definitions:** Using `localparam` to define symbolic names for each state (e.g., `S0`, `S1`, `S2`). This makes the code more readable and maintainable.
2.  **State Register:** `current_state` and `next_state` registers hold the current and next state values. They are declared as `reg` because their values are stored.
3.  **State Transition Logic:**  This section is purely *combinational* (using `always @(*)`). It determines the `next_state` based on the `current_state` and inputs. The `case` statement defines the state transitions based on the input `a`. *Important*: Include a `default` statement to prevent unintentional latching.
4.  **State Update:**  This section is *sequential* (using `always @(posedge clk or negedge rst_n)`).  On the rising edge of the clock (or when `rst_n` is low), the `current_state` is updated with the `next_state`.  Includes an asynchronous reset.
5.  **Output Logic:** This section determines the output based on the `current_state`. In a Moore machine, the output depends *only* on the `current_state`.

**Mealy vs. Moore Machines:**

*   **Moore Machine:** Outputs depend *only* on the current state.
*   **Mealy Machine:** Outputs depend on both the current state and the inputs.  The output logic would be inside the `always @(*) begin ... end` block for State Transition Logic, or its own dedicated combinatorial block.

## 7. Simulation and Verification

*   **Testbenches:**  Essential for verifying the functionality of your Verilog code. A testbench applies input stimuli to your module and checks the outputs.

*   **Simulation Tools:**  Tools like ModelSim, Vivado Simulator, and Icarus Verilog (free and open-source) are used to simulate your Verilog code and observe its behavior.

**Example Testbench for the D Flip-Flop:**

```verilog
module testbench;
  reg clk, d, rst_n;
  wire q;

  d_ff_async_reset dut ( .clk(clk), .d(d), .rst_n(rst_n), .q(q) );

  initial begin
    // Initialize signals
    clk = 0;
    d = 0;
    rst_n = 0; // Assert reset

    // Apply Stimulus
    #10 rst_n = 1; // De-assert reset

    #10 d = 1;
    #10 clk = 1; #5 clk = 0; // Rising edge of clock
    #10 d = 0;
    #10 clk = 1; #5 clk = 0; // Rising edge of clock

    #20 $finish;  // End simulation
  end

  always #5 clk = ~clk; // Generate clock signal
  initial $monitor ("Time = %0t, clk = %b, d = %b, rst_n = %b, q = %b", $time, clk, d, rst_n, q);

endmodule
```

**Explanation of Testbench Elements:**

*   `reg clk, d, rst_n;`: Declare input signals as `reg` because they are driven by the testbench.
*   `wire q;`: Declare output signals as `wire` because they are driven by the DUT (Device Under Test).
*   `d_ff_async_reset dut ( .clk(clk), .d(d), .rst_n(rst_n), .q(q) );`: Instantiates the `d_ff_async_reset` module and connects its ports to the testbench signals.
*   `initial begin ... end`: Contains the stimulus (input signals) and controls the simulation.
*   `#10`:  Delay for 10 time units.
*   `$finish;`:  Terminates the simulation.
*   `always #5 clk = ~clk;`: Generates a clock signal with a period of 10 time units.
*   `$monitor`:  Displays the values of signals during the simulation.

## 8. Important Points to Remember

*   **Non-Blocking Assignments:**  Use `q <= d;` in `always @(posedge clk)` blocks.
*   **Sensitivity Lists:** Make sure your sensitivity lists are complete (`always @(posedge clk or negedge rst_n)`).  For combinational logic, use `always @(*)` to include all input signals automatically.
*   **Reset:** Include a reset signal (usually asynchronous) to initialize the state of your sequential circuits.
*   **State Machines:**  Separate the state transition logic (combinational) from the state update (sequential).
*   **Simulation:**  Thoroughly simulate your designs to catch errors.  Write comprehensive testbenches.
*   **Coding Style:**  Use consistent and readable coding style.  Use meaningful names for signals and variables.
*  **Defaults:**  Always include default conditions in your `case` statements in both combinational and sequential logic to avoid unintended latching or undefined behavior.

## 9. Practice Questions and Exercises

1.  **Exercise:** Write Verilog code for a T flip-flop with a synchronous reset.
2.  **Question:** Explain the difference between blocking and non-blocking assignments in Verilog, and why non-blocking assignments are preferred for sequential logic.
3.  **Exercise:** Design a 3-bit up/down counter with enable and synchronous reset.  The counter should increment when `up_down` is high and decrement when `up_down` is low.
4.  **Question:** What are the key components of a Finite State Machine (FSM)? Explain the difference between a Moore and a Mealy machine.
5.  **Exercise:** Design a Verilog module for a sequence detector that detects the sequence "101". The output should be high when the sequence is detected.  Implement it as both a Moore and a Mealy machine. Create a testbench for verification.

## 10. Answers to Practice Questions and Exercises

These are example answers and may have other valid implementations.

1.  **T Flip-Flop with Synchronous Reset:**

    ```verilog
    module t_ff_sync_reset (input clk, input t, input rst, output reg q);
      always @(posedge clk) begin
        if (rst) begin
          q <= 1'b0;
        end else if (t) begin
          q <= ~q;
        end
      end
    endmodule
    ```

2.  **Blocking vs. Non-Blocking Assignments:**
    *See the explanation in section 3 above.* Non-blocking assignments ensure that all flip-flops update simultaneously, which is crucial for correct sequential logic behavior.

3.  **3-Bit Up/Down Counter:**

    ```verilog
    module up_down_counter (input clk, input rst, input enable, input up_down, output reg [2:0] count);
      always @(posedge clk) begin
        if (rst) begin
          count <= 3'b000;
        end else if (enable) begin
          if (up_down) begin
            count <= count + 1'b1; // Increment
          end else begin
            count <= count - 1'b1; // Decrement
          end
        end
      end
    endmodule
    ```

4.  **FSM Components:**

    *See the explanation in section 6 above.* A Moore machine's output depends only on the current state, while a Mealy machine's output depends on both the current state and the inputs.

5.  **Sequence Detector ("101"):**

    **Moore Machine:**

    ```verilog
    module sequence_detector_moore (input clk, input rst_n, input data_in, output reg detect);

      // State Definitions
      localparam S_IDLE = 2'b00;
      localparam S_ONE  = 2'b01;
      localparam S_ONE_ZERO = 2'b10;
      localparam S_ONE_ZERO_ONE = 2'b11;

      // State Register
      reg [1:0] current_state, next_state;

      // State Transition Logic
      always @(*) begin
        case (current_state)
          S_IDLE:       if (data_in) next_state = S_ONE;      else next_state = S_IDLE;
          S_ONE:        if (data_in) next_state = S_ONE;      else next_state = S_ONE_ZERO;
          S_ONE_ZERO:   if (data_in) next_state = S_ONE_ZERO_ONE; else next_state = S_IDLE;
          S_ONE_ZERO_ONE:if (data_in) next_state = S_ONE;       else next_state = S_ONE_ZERO;
          default: next_state = S_IDLE; //Prevent latching
        endcase
      end

      // State Update
      always @(posedge clk or negedge rst_n) begin
        if (~rst_n) begin
          current_state <= S_IDLE;
        end else begin
          current_state <= next_state;
        end
      end

      // Output Logic
      always @(current_state) begin
        case (current_state)
          S_ONE_ZERO_ONE: detect = 1'b1;
          default: detect = 1'b0;
        endcase
      end

    endmodule
    ```

    **Mealy Machine:**

    ```verilog
    module sequence_detector_mealy (input clk, input rst_n, input data_in, output reg detect);

      // State Definitions
      localparam S_IDLE = 2'b00;
      localparam S_ONE  = 2'b01;
      localparam S_ONE_ZERO = 2'b10;

      // State Register
      reg [1:0] current_state, next_state;

      // State Transition & Output Logic Combined
      always @(*) begin
          detect = 1'b0; // Default output

          case (current_state)
              S_IDLE: begin
                  if (data_in) begin
                      next_state = S_ONE;
                  end else begin
                      next_state = S_IDLE;
                  end
              end

              S_ONE: begin
                  if (data_in) begin
                      next_state = S_ONE;
                  end else begin
                      next_state = S_ONE_ZERO;
                  end
              end

              S_ONE_ZERO: begin
                  if (data_in) begin
                      next_state = S_IDLE; // Back to idle after detecting 101 (overlap possible)
                      detect = 1'b1; // Sequence detected immediately
                  end else begin
                      next_state = S_IDLE;
                  end
              end
              default: next_state = S_IDLE; // Prevent latching
          endcase
      end

      // State Update
      always @(posedge clk or negedge rst_n) begin
          if (~rst_n) begin
              current_state <= S_IDLE;
          end else begin
              current_state <= next_state;
          end
      end
    endmodule
    ```

    **Testbench (for either Moore or Mealy):**

    ```verilog
    module sequence_detector_tb;
      reg clk, rst_n, data_in;
      wire detect;

      // Instantiate the sequence detector (replace with Moore or Mealy version)
      sequence_detector_moore dut ( .clk(clk), .rst_n(rst_n), .data_in(data_in), .detect(detect) );

      initial begin
        // Initialize signals
        clk = 0;
        rst_n = 0;
        data_in = 0;

        // Apply reset
        #10 rst_n = 1;

        // Apply input sequence
        #10 data_in = 1; // S_ONE
        #10 clk = 1; #5 clk = 0;

        #10 data_in = 0; // S_ONE_ZERO
        #10 clk = 1; #5 clk = 0;

        #10 data_in = 1; // S_ONE_ZERO_ONE (DETECT)
        #10 clk = 1; #5 clk = 0;

        #10 data_in = 0;  //test no overlap
        #10 clk = 1; #5 clk = 0;

        #10 data_in = 1; // S_ONE
        #10 clk = 1; #5 clk = 0;

        #10 data_in = 0; // S_ONE_ZERO
        #10 clk = 1; #5 clk = 0;

        #10 data_in = 1; // S_ONE_ZERO_ONE (DETECT)
        #10 clk = 1; #5 clk = 0;

        #20 $finish;
      end

      always #5 clk = ~clk;  // 10ns clock period
      initial $monitor ("Time = %0t, clk = %b, rst_n = %b, data_in = %b, detect = %b", $time, clk, rst_n, data_in, detect);

    endmodule
    ```

These notes should provide a solid foundation for understanding and implementing sequential logic designs in Verilog.  Remember to practice writing code and simulating your designs to solidify your knowledge.
