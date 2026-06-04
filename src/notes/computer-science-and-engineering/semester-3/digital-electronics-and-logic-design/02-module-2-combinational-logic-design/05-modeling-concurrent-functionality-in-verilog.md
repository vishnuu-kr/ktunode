---
title: "Modeling concurrent functionality in Verilog:-"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 2: Combinational Logic Design: –"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad53"
status: "completed"
scrapedAt: "2026-05-20T16:23:52.427Z"
---
# DIGITAL ELECTRONICS AND LOGIC DESIGN - MODULE 2: Combinational Logic Design

## Topic: Modeling Concurrent Functionality in Verilog

### Learning Outcomes:

*   Understand the concept of concurrency in digital circuits.
*   Learn how to model combinational logic using `assign` statements in Verilog.
*   Understand the difference between blocking and non-blocking assignments in Verilog.
*   Learn how to use continuous assignments to model concurrent behavior.
*   Model complex combinational circuits using Verilog's dataflow modeling style.
*   Understand the implications of unintended latches in Verilog designs.

### 1. Concurrency in Digital Circuits

*   **Definition:** Concurrency refers to the ability of multiple operations to execute simultaneously or appear to execute simultaneously.  In digital circuits, many logic gates operate in parallel, responding to changes in input signals independently and at the same time.
*   **Importance:**  Concurrency is crucial for achieving high performance in digital systems. Designing for concurrency allows operations to proceed without waiting for others to complete, increasing the overall speed of the circuit.
*   **Modeling Concurrency:** Verilog provides constructs to model this inherent parallelism in digital hardware.  `assign` statements and certain procedural blocks (especially when dealing with `always` blocks with sensitivity lists) are the primary tools.

### 2. Modeling Combinational Logic using `assign` Statements

*   **Continuous Assignments (`assign`):**
    *   The `assign` statement is used to model combinational logic in Verilog.  It creates a *continuous assignment*, which means that the output on the left-hand side of the assignment is *always* updated whenever any of the inputs on the right-hand side change.
    *   This reflects the real-world behavior of combinational logic:  the output changes immediately in response to input changes (with a small propagation delay, which is not explicitly modeled in basic Verilog).
    *   Syntax: `assign output = expression;`
    *   `output` must be a wire (not a reg).
    *   `expression` can be any valid Verilog expression involving inputs, operators, and other wires.

*   **Example:  2-input AND gate**

```verilog
module and2 (
  input a,
  input b,
  output y
);

  assign y = a & b;  // y is continuously assigned the result of a AND b

endmodule
```

*   **Example:  Full Adder**

```verilog
module full_adder (
  input a,
  input b,
  input cin,
  output sum,
  output cout
);

  assign sum = a ^ b ^ cin;       // XOR operation for sum
  assign cout = (a & b) | (a & cin) | (b & cin); // Boolean expression for carry-out

endmodule
```

### 3. Blocking vs. Non-Blocking Assignments

*   **Context:**  Blocking and non-blocking assignments are only relevant *inside* `always` blocks (procedural blocks). They are **not** used with `assign` statements, which are *continuous* assignments. `assign` statements are inherently concurrent.
*   **Blocking Assignments (`=`):**
    *   Execute in the order they appear in the code.  The statement completes *before* the next statement in the block is executed.
    *   Considered *sequential* within the `always` block.
    *   **Generally not recommended for modeling combinational logic.**  Their sequential nature can lead to unpredictable results and difficulty in synthesis for combinational circuits.  They *can* be used, but you need to be very careful about the sensitivity list to ensure you are modeling the intended behavior.  If the sensitivity list is not complete, it will result in unintended latches.
*   **Non-Blocking Assignments (`<=`):**
    *   All right-hand sides are evaluated at the *beginning* of the `always` block execution.
    *   Assignments to the left-hand sides are scheduled to occur at the *end* of the `always` block execution.
    *   This means all assignments appear to happen simultaneously, which is crucial for modeling *concurrent* behavior in sequential circuits.
    *   **Generally used for modeling sequential logic.**
*   **Key Difference Summary:**
    | Feature           | Blocking (`=`)            | Non-Blocking (`<=`)        |
    | ----------------- | -------------------------- | -------------------------- |
    | Execution Order  | Sequential, executes then proceeds | Concurrent, evaluates then updates |
    | Usage             | Sequential Logic (with caution for combinational) | Sequential Logic            |
    | Combinational Logic Recommendation | AVOID  | AVOID                         |
*   **Important Note:**  For combinational logic, `assign` statements are the preferred method. While you *can* sometimes use blocking assignments inside an `always` block, it is highly discouraged unless you are very experienced and fully understand the implications. It is generally better to stick to `assign` statements.

### 4. Using Continuous Assignments to Model Concurrent Behavior

*   **Concurrency in Action:** Each `assign` statement acts as an independent and concurrent process. When an input to an `assign` statement changes, the right-hand side is immediately re-evaluated, and the output is updated, *without* waiting for any other `assign` statement to complete.
*   **Example: Modeling a priority encoder**

    ```verilog
    module priority_encoder (
        input  [3:0] in,
        output reg [1:0] out,
        output reg valid
    );

    always @(*) begin //Sensitive to all inputs
        if (in[3]) begin
            out = 2'b11;
            valid = 1'b1;
        end else if (in[2]) begin
            out = 2'b10;
            valid = 1'b1;
        end else if (in[1]) begin
            out = 2'b01;
            valid = 1'b1;
        end else if (in[0]) begin
            out = 2'b00;
            valid = 1'b1;
        end else begin
            out = 2'b00;
            valid = 1'b0;
        end
    end

    endmodule
    ```

    **Important:** While this priority encoder *works*, it's usually better to model more complex combinational logic using `assign` statements directly whenever possible, even if it means more complex Boolean expressions. The `always @(*)` block, while convenient, can hide potential issues (like unintentionally creating latches if all possible cases aren't covered).  This particular example does *not* create latches because all signals are explicitly assigned values in every path.

### 5. Modeling Complex Combinational Circuits using Verilog's Dataflow Modeling Style

*   **Dataflow Modeling:** Uses `assign` statements to describe how data flows through the circuit, focusing on the transformation of data rather than the specific gate-level implementation.
*   **Advantages:**
    *   More concise and readable than gate-level modeling.
    *   Easier to modify and maintain.
    *   Allows the synthesis tool more flexibility in choosing the optimal gate-level implementation.
*   **Example: 4-to-1 Multiplexer**

```verilog
module mux4to1 (
  input  [1:0] sel,
  input  [3:0] data_in,
  output out
);

  assign out = (sel == 2'b00) ? data_in[0] :
               (sel == 2'b01) ? data_in[1] :
               (sel == 2'b10) ? data_in[2] :
               (sel == 2'b11) ? data_in[3] :
               1'bx; // Unknown value for safety.  Crucial!

endmodule
```

*   **Explanation:** The ternary operator (`? :`) is used to select one of the four input data lines based on the value of the `sel` input.  The `1'bx` handles any illegal selection values and prevents potential latch inference.  Without this, the `out` signal would *hold its previous value* if `sel` was not one of the expected values, thus becoming a latch.
*   **Using Operators:** Complex Boolean expressions can be built using Verilog's rich set of operators: `&` (AND), `|` (OR), `^` (XOR), `~` (NOT), `&&` (logical AND), `||` (logical OR), `!` (logical NOT), etc.
*   **Bitwise Operations:** Use bitwise operators (`&`, `|`, `^`, `~`) for bit-by-bit operations on vectors.

### 6. Unintended Latches in Verilog Designs

*   **Latch Inference:** A latch is created when a signal's value is not explicitly assigned in all possible execution paths within an `always` block or similar construct.  This means the signal will *remember* its previous value if certain conditions are met.
*   **Problem:** Latches can introduce timing problems and make debugging difficult.  They are often undesirable in combinational logic.  Latches are *usually* inferred in `always` blocks, *not* with `assign` statements.
*   **Causes:**
    *   Incomplete `if-else` or `case` statements. If not all possible input combinations are covered, the output might not be assigned a new value, leading to latch inference.
    *   Forgetting to assign a value to a signal under certain conditions.
*   **Prevention:**
    *   **Complete `if-else` chains:** Ensure that all possible input combinations are handled with a proper `else` statement, even if it's just assigning a default value.
    *   **Complete `case` statements:** Include a `default` case to handle any unexpected input values.
    *   **Assign all signals a value in every execution path:** Make sure that every signal that is assigned a value inside an `always` block is assigned a value under *all* possible conditions within that block.
    *   **Use `assign` statements whenever possible for combinational logic:** Using continuous assignments instead of procedural blocks significantly reduces the risk of unintended latches.
*   **Example (Latch Inferred):**

```verilog
module latch_example (
  input  en,
  input  data_in,
  output reg data_out
);

  always @(en or data_in) begin
    if (en) begin
      data_out = data_in;
    end  // If en is not asserted, data_out retains its previous value! Latch!
  end

endmodule
```

*   **Example (Latch Removed):**

```verilog
module no_latch_example (
  input  en,
  input  data_in,
  output reg data_out
);

  always @(en or data_in) begin
    if (en) begin
      data_out = data_in;
    end else begin  // Ensure data_out is assigned a value when en is low.
      data_out = 0;  // Or any other default value.
    end
  end

endmodule
```

*   **Synthesis Tool Warnings:** Modern synthesis tools will often issue warnings if they detect a potential latch during the synthesis process. Pay close attention to these warnings and correct the code accordingly.

### Practice Questions and Exercises

1.  **Write Verilog code for a 2-to-1 multiplexer using an `assign` statement and the ternary operator.**

    ```verilog
    module mux2to1 (
      input sel,
      input data_in0,
      input data_in1,
      output out
    );

      assign out = (sel == 1'b0) ? data_in0 : data_in1;

    endmodule
    ```

2.  **Write Verilog code for a 4-bit adder using `assign` statements.** (Hint: You can instantiate multiple full adder modules)
    ```verilog
    module full_adder (
      input a,
      input b,
      input cin,
      output sum,
      output cout
    );

      assign sum = a ^ b ^ cin;
      assign cout = (a & b) | (a & cin) | (b & cin);

    endmodule

    module adder4bit (
        input [3:0] a,
        input [3:0] b,
        input cin,
        output [3:0] sum,
        output cout
    );

        wire c1, c2, c3;

        full_adder fa0 (a[0], b[0], cin, sum[0], c1);
        full_adder fa1 (a[1], b[1], c1, sum[1], c2);
        full_adder fa2 (a[2], b[2], c2, sum[2], c3);
        full_adder fa3 (a[3], b[3], c3, sum[3], cout);


    endmodule
    ```

3.  **Identify and correct the latch in the following Verilog code:**

    ```verilog
    module latch_problem (
      input enable,
      input data_in,
      output reg data_out
    );

      always @(enable or data_in) begin
        if (enable)
          data_out = data_in;
      end

    endmodule
    ```

    **Solution:** Add an `else` statement to assign a default value to `data_out` when `enable` is low.

    ```verilog
    module latch_fixed (
      input enable,
      input data_in,
      output reg data_out
    );

      always @(enable or data_in) begin
        if (enable)
          data_out = data_in;
        else
          data_out = 0; // Or any other default value.
      end

    endmodule
    ```

4.  **Explain the difference between blocking and non-blocking assignments and why `assign` statements are generally preferred for combinational logic.**

    *Blocking assignments execute sequentially within a procedural block, while non-blocking assignments evaluate all right-hand sides before making assignments. `assign` statements provide continuous assignment, modeling the concurrent behavior of combinational logic accurately and avoiding potential latch inference issues.*

### Important Points to Remember

*   Use `assign` statements for modeling combinational logic whenever possible.
*   Understand the difference between blocking and non-blocking assignments (primarily for sequential logic).
*   Be aware of the potential for unintended latch inference, especially in `always` blocks.  Make sure to assign values to all signals under all possible conditions.
*   Pay attention to synthesis tool warnings, as they can help identify potential problems in your design.
*   Dataflow modeling with `assign` statements provides a concise and effective way to describe complex combinational circuits.
