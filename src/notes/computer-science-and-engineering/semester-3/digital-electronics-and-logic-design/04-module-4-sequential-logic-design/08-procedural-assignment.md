---
title: "Procedural assignment"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 4: Sequential Logic Design  :"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad65"
status: "completed"
scrapedAt: "2026-05-20T16:24:04.118Z"
---
# DIGITAL ELECTRONICS AND LOGIC DESIGN: Module 4 - Sequential Logic Design: Procedural Assignment

These notes cover the topic of Procedural Assignment in Sequential Logic Design.

**Learning Outcomes:**

*   Understand the concept of procedural assignment in hardware description languages (HDLs).
*   Differentiate between blocking and non-blocking assignments.
*   Explain the behavior of sequential logic circuits described using procedural assignments.
*   Apply procedural assignments to model combinational and sequential logic circuits in HDLs.
*   Identify and avoid common pitfalls associated with procedural assignment.

## 1. Introduction to Procedural Assignment

Procedural assignment is a method of assigning values to signals within a procedural block in a Hardware Description Language (HDL) like Verilog or VHDL. These assignments are executed sequentially within the procedural block, unlike concurrent assignments that execute in parallel. They are crucial for describing the behavior of sequential logic circuits where the order of operations matters.

*   **Key Concept:**  Order of execution is important. Statements are executed in the order they appear within the procedural block.
*   **Context:** Procedural assignments are found within `always` blocks in Verilog or `process` statements in VHDL.
*   **Purpose:** Used to model the behavior of both combinational and sequential logic, but particularly important for describing sequential logic like flip-flops, registers, and state machines.

## 2. Procedural Blocks: `always` (Verilog) and `process` (VHDL)

Procedural assignments always reside inside procedural blocks. Let's look at these:

*   **Verilog: `always` Block**

    *   The `always` block is a fundamental construct in Verilog for describing the behavior of a circuit.
    *   It executes whenever a signal in its sensitivity list changes.
    *   The sensitivity list determines when the `always` block is triggered.
    *   Example:

        ```verilog
        always @(posedge clk or negedge rst) begin //Sensitivity list: posedge clk or negedge rst
            if (~rst) begin //Active Low Reset
                q <= 1'b0;
            end else begin
                q <= d;
            end
        end
        ```

*   **VHDL: `process` Statement**

    *   The `process` statement is the equivalent of Verilog's `always` block in VHDL.
    *   It also executes whenever a signal in its sensitivity list changes.
    *   Example:

        ```vhdl
        process(clk, rst) -- Sensitivity list: clk or rst
        begin
            if (rst = '0') then -- Active Low Reset
                q <= '0';
            elsif (rising_edge(clk)) then
                q <= d;
            end if;
        end process;
        ```

## 3. Blocking vs. Non-Blocking Assignments

The core of procedural assignment lies in the distinction between blocking and non-blocking assignments. This difference significantly impacts the behavior of simulated and synthesized circuits.

*   **Blocking Assignment (`=` in Verilog, `:=` in VHDL)**

    *   Blocking assignments are executed sequentially. The next statement is executed only after the current assignment is completed.
    *   They block the execution of subsequent statements in the procedural block until the assignment is finished.
    *   Primarily used for describing *combinational* logic within procedural blocks.
    *   Example (Verilog):

        ```verilog
        always @(*) begin // Combinational logic
            a = b & c;
            d = a | e;
        end
        ```

    *   In this example, `a` is calculated *before* `d` is calculated.

*   **Non-Blocking Assignment (`<=` in Verilog, `<=` in VHDL)**

    *   Non-blocking assignments are executed concurrently. All assignments are scheduled to be updated at the *end* of the current simulation time step.
    *   They do not block the execution of subsequent statements in the procedural block.
    *   Primarily used for describing *sequential* logic within procedural blocks.
    *   Example (Verilog):

        ```verilog
        always @(posedge clk) begin //Sequential logic
            q <= d;
        end
        ```

    *   In this example, `q` is updated with the value of `d` at the rising edge of the clock, but the execution of the `always` block doesn't halt for this update.

*   **Key Differences Summary:**

    | Feature         | Blocking Assignment (=) | Non-Blocking Assignment (<=) |
    |-----------------|-----------------------|-----------------------------|
    | Execution Order | Sequential          | Concurrent                 |
    | Use Case        | Combinational Logic   | Sequential Logic          |
    | Blocking        | Yes                   | No                          |

## 4. Modeling Combinational Logic with Procedural Assignment

While combinational logic can be modeled using continuous assignments (e.g., `assign` in Verilog), procedural assignments can also be used. However, **blocking assignments are typically preferred for combinational logic inside `always` blocks.**

*   **Example (Verilog):**

    ```verilog
    module combinational_logic (input a, b, c, output reg out);
        always @(*) begin //Sensitivity list includes all inputs. Use @* or @(a,b,c) for complete sensitivity.
            out = (a & b) | c;
        end
    endmodule
    ```

    *   Here, `out` is assigned the result of the expression whenever any of the inputs (`a`, `b`, or `c`) change.
    *   The `@(*)`  is a shortcut that automatically includes all input signals in the sensitivity list. Make sure your simulator supports this syntax.  If not, explicitly list all inputs in the sensitivity list:  `@(a, b, c)`.  Omitting signals from the sensitivity list can lead to simulation mismatches with synthesized hardware.

## 5. Modeling Sequential Logic with Procedural Assignment

Sequential logic, particularly flip-flops and registers, are best modeled using **non-blocking assignments** within `always` blocks triggered by clock edges.

*   **Example (Verilog): D Flip-Flop**

    ```verilog
    module d_flipflop (input clk, rst, d, output reg q);
        always @(posedge clk or negedge rst) begin
            if (~rst) begin // Active Low Reset
                q <= 1'b0;
            end else begin
                q <= d;
            end
        end
    endmodule
    ```

    *   The `always` block is triggered by the positive edge of the clock (`posedge clk`) or the negative edge of the reset (`negedge rst`).
    *   When reset is asserted (low), `q` is reset to 0.
    *   At the rising edge of the clock, `q` takes on the value of `d`.
    *   **Crucially, non-blocking assignment (`<=`) is used to ensure proper sequential behavior.**

*   **Example (Verilog): Register**

    ```verilog
    module register (input clk, rst, enable, input [7:0] d, output reg [7:0] q);
        always @(posedge clk or negedge rst) begin
            if (~rst) begin
                q <= 8'b0;
            end else if (enable) begin
                q <= d;
            end
        end
    endmodule
    ```

    *   This models an 8-bit register.  The `enable` signal controls whether the register is updated with the input `d` on the rising clock edge.

## 6. Avoiding Common Pitfalls

Using procedural assignments correctly is essential for accurate simulation and synthesis.  Here are some common pitfalls to avoid:

*   **Mixing Blocking and Non-Blocking Assignments:**  Avoid using both blocking and non-blocking assignments to the *same* signal within the *same* `always` block. This can lead to unpredictable behavior.

*   **Inferring Latches:**  If you use procedural assignments to model combinational logic, ensure that *all* possible input combinations are covered. Otherwise, the synthesis tool may infer a latch, which is generally undesirable in combinational logic. For example:

    ```verilog
    always @(*) begin
      if (enable)
        out = in; //What happens when enable is false?
    end
    ```

    This code will infer a latch because the value of `out` is not explicitly defined when `enable` is false. To fix this, add an `else` clause:

    ```verilog
    always @(*) begin
      if (enable)
        out = in;
      else
        out = out; //Or assign a default value like '0'
    end
    ```

*   **Incomplete Sensitivity Lists:** Make sure the sensitivity list in your `always` block contains *all* signals that the block depends on.  Missing signals can cause simulation mismatches with synthesized hardware. Use `@(*)` when modeling combinational logic to avoid this error.

*   **Blocking Assignments in Sequential Logic:** Using blocking assignments in sequential logic can lead to race conditions and incorrect behavior. Always use non-blocking assignments (`<=`) when modeling flip-flops and registers.

## 7. Practice Questions/Exercises

**Question 1:**

Write Verilog code for a T flip-flop using procedural assignment.  The flip-flop has inputs `clk`, `rst`, and `T`.  `T` is the toggle input.

**Answer:**

```verilog
module t_flipflop (input clk, rst, T, output reg q);
    always @(posedge clk or negedge rst) begin
        if (~rst) begin
            q <= 1'b0;
        end else begin
            if (T)
                q <= ~q;  // Toggle the output
            else
                q <= q;  // Keep the output the same
        end
    end
endmodule
```

**Question 2:**

Explain the difference between blocking and non-blocking assignments in the context of modeling sequential logic. Give an example of what can go wrong if you use the wrong type of assignment.

**Answer:**

Blocking assignments are executed sequentially within a procedural block, while non-blocking assignments are scheduled to be updated at the end of the current simulation time step. In sequential logic, using blocking assignments can lead to race conditions and incorrect behavior because the value of a signal might be updated mid-cycle, affecting subsequent calculations within the same cycle.

**Example:** Consider a shift register implemented incorrectly using blocking assignments:

```verilog
module bad_shift_register (input clk, d, output reg [1:0] q);
  always @(posedge clk) begin
    q[0] = d;
    q[1] = q[0]; // q[0] has already been updated!
  end
endmodule
```

In this incorrect implementation, `q[0]` is updated *before* `q[1]` is updated. The value shifted into `q[1]` will be the *new* value of `d`, not the *previous* value of `q[0]`. This is not how a shift register should function. The correct implementation uses non-blocking assignments:

```verilog
module good_shift_register (input clk, d, output reg [1:0] q);
  always @(posedge clk) begin
    q[0] <= d;
    q[1] <= q[0]; // q[0] and q[1] are updated concurrently
  end
endmodule
```

In the correct implementation, both `q[0]` and `q[1]` are updated *concurrently* at the end of the clock cycle, so `q[1]` receives the *previous* value of `q[0]`, as expected in a shift register.

**Question 3:**

Write Verilog code for a 4-to-1 multiplexer using procedural assignments.

**Answer:**

```verilog
module mux4to1 (input [1:0] sel, input [3:0] in, output reg out);
    always @(sel, in) begin // Complete sensitivity list
        case (sel)
            2'b00: out = in[0];
            2'b01: out = in[1];
            2'b10: out = in[2];
            2'b11: out = in[3];
            default: out = 1'bx; // Handle unknown select values (optional, but good practice)
        endcase
    end
endmodule
```

**Question 4:**

What is a sensitivity list and why is it important?

**Answer:**

A sensitivity list specifies the signals that, when changed, trigger the execution of the procedural block (`always` block in Verilog, `process` statement in VHDL). It's important because it ensures that the logic described by the block is re-evaluated only when necessary, leading to correct simulation and synthesis. An incomplete sensitivity list can lead to mismatches between simulation and hardware behavior, making debugging very difficult.

## 8. Important Points to Remember

*   **Blocking assignments (`=`) are best for combinational logic within procedural blocks.**
*   **Non-blocking assignments (`<=`) are essential for sequential logic.**
*   **Avoid mixing blocking and non-blocking assignments to the same signal in the same `always` block.**
*   **Always include a complete sensitivity list in your `always` blocks. Consider using `@(*)` for combinational logic.**
*   **Be mindful of potential latch inference when using procedural assignments for combinational logic.  Always assign a value to a signal under all possible conditions.**
*   **Understand the simulation time steps and how blocking and non-blocking assignments interact with them.**

By understanding and applying these concepts, you can effectively model sequential and combinational logic using procedural assignments in HDLs, creating accurate and synthesizable digital designs.
