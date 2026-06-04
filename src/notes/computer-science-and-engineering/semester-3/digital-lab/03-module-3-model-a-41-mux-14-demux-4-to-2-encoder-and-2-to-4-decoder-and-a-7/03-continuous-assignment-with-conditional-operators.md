---
title: "continuous assignment with conditional operators"
subject: "DIGITAL LAB"
module: "Module 3: Model a 4:1 MUX, 1:4 DEMUX, 4 to 2 encoder, and 2 to 4 decoder and a 7"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aeec"
status: "completed"
scrapedAt: "2026-05-20T16:24:31.544Z"
---
# DIGITAL LAB: Module 3 - Continuous Assignment with Conditional Operators (4:1 MUX, 1:4 DEMUX, 4-2 Encoder, 2-4 Decoder, 7-Segment Display)

## Learning Outcomes:

*   Understand the concept of continuous assignment in hardware description languages (HDLs).
*   Utilize conditional operators to model combinational logic circuits.
*   Design and implement a 4:1 multiplexer using continuous assignment and conditional operators.
*   Design and implement a 1:4 demultiplexer using continuous assignment and conditional operators.
*   Design and implement a 4-to-2 encoder using continuous assignment and conditional operators.
*   Design and implement a 2-to-4 decoder using continuous assignment and conditional operators.
*   Design and implement a 7-segment display driver using continuous assignment and conditional operators.
*   Understand the advantages and limitations of using continuous assignment for modeling digital circuits.

## 1. Introduction to Continuous Assignment

*   **Definition:** Continuous assignment is a type of assignment statement in HDLs (like Verilog and VHDL) that continuously monitors the right-hand side of the assignment. Whenever the value of any signal on the right-hand side changes, the expression is re-evaluated, and the result is assigned to the left-hand side signal.  It's primarily used for combinational logic.
*   **Syntax (Verilog):** `assign <target_signal> = <expression>;`
*   **Key Feature:** Reactive – It constantly updates the target signal based on the expression.  No clock signal is involved.
*   **Application:** Ideal for modeling combinational logic circuits where the output is a direct function of the inputs at any given time.
*   **Example (Verilog):** `assign out = a & b;`  If `a` or `b` changes, `out` will be updated immediately.

## 2. Conditional Operators

*   **Purpose:** Allow you to select one of several expressions based on a condition.
*   **Types:** The primary conditional operator used in continuous assignments is the ternary operator ( `? :` ).
*   **Syntax (Verilog):**  `<condition> ? <expression_if_true> : <expression_if_false>`
*   **Explanation:** The `condition` is evaluated. If it is true (non-zero), `expression_if_true` is evaluated and assigned to the target signal.  If it's false (zero), `expression_if_false` is evaluated and assigned.
*   **Nested Conditional Operators:**  You can nest conditional operators to create more complex selection logic. However, avoid excessive nesting for readability.
*   **Example (Verilog):** `assign out = sel ? a : b;`  If `sel` is 1, `out` gets the value of `a`; otherwise, it gets the value of `b`.

## 3. 4:1 Multiplexer (MUX)

*   **Definition:** A multiplexer (MUX) selects one of several input signals and forwards it to a single output line. A 4:1 MUX has four data inputs and two select lines.
*   **Truth Table:**

    | S1 | S0 | Output |
    |---|---|---|
    | 0 | 0 | I0 |
    | 0 | 1 | I1 |
    | 1 | 0 | I2 |
    | 1 | 1 | I3 |

*   **Verilog Implementation (Continuous Assignment with Conditional Operators):**

    ```verilog
    module mux4to1 (
        input  logic I0, I1, I2, I3,
        input  logic S1, S0,
        output logic Y
    );

    assign Y = (S1 == 0 && S0 == 0) ? I0 :
               (S1 == 0 && S0 == 1) ? I1 :
               (S1 == 1 && S0 == 0) ? I2 :
               (S1 == 1 && S0 == 1) ? I3 : 1'bx;  // Assign 'X' if select lines are invalid (optional)

    endmodule
    ```

*   **Explanation:** The code uses nested conditional operators to select the appropriate input based on the values of `S1` and `S0`.

## 4. 1:4 Demultiplexer (DEMUX)

*   **Definition:** A demultiplexer (DEMUX) performs the reverse operation of a multiplexer. It takes a single input signal and directs it to one of several output lines based on select lines. A 1:4 DEMUX has one data input and two select lines.
*   **Truth Table:**

    | S1 | S0 | Y0 | Y1 | Y2 | Y3 |
    |---|---|---|---|---|---|
    | 0 | 0 | D  | 0  | 0  | 0  |
    | 0 | 1 | 0  | D  | 0  | 0  |
    | 1 | 0 | 0  | 0  | D  | 0  |
    | 1 | 1 | 0  | 0  | 0  | D  |

*   **Verilog Implementation (Continuous Assignment with Conditional Operators):**

    ```verilog
    module demux1to4 (
        input  logic D,
        input  logic S1, S0,
        output logic Y0, Y1, Y2, Y3
    );

    assign Y0 = (S1 == 0 && S0 == 0) ? D : 0;
    assign Y1 = (S1 == 0 && S0 == 1) ? D : 0;
    assign Y2 = (S1 == 1 && S0 == 0) ? D : 0;
    assign Y3 = (S1 == 1 && S0 == 1) ? D : 0;

    endmodule
    ```

*   **Explanation:**  Each output is assigned the value of the input `D` only when the corresponding select line combination is true. Otherwise, the output is 0.

## 5. 4-to-2 Encoder

*   **Definition:** An encoder converts a set of mutually exclusive inputs into a binary code representing the active input.  A 4-to-2 encoder has four inputs and two outputs, representing the binary code for the active input. It assumes only one input is active (high) at a time.
*   **Truth Table:**

    | I0 | I1 | I2 | I3 | Y1 | Y0 |
    |---|---|---|---|---|---|
    | 1 | 0 | 0 | 0 | 0 | 0 |
    | 0 | 1 | 0 | 0 | 0 | 1 |
    | 0 | 0 | 1 | 0 | 1 | 0 |
    | 0 | 0 | 0 | 1 | 1 | 1 |
    | 0 | 0 | 0 | 0 | X | X | (Considered don't care or invalid)

*   **Verilog Implementation (Continuous Assignment with Conditional Operators):**

    ```verilog
    module encoder4to2 (
        input  logic I0, I1, I2, I3,
        output logic Y1, Y0
    );

    assign Y0 = (I1) ? 1 : ((I3) ? 1 : 0);
    assign Y1 = (I2) ? 1 : ((I3) ? 1 : 0);

    endmodule
    ```

*   **Explanation:**  This implementation prioritizes higher inputs. If I3 is active, the output is 11, regardless of the other inputs.  If I2 is active, the output is 10, and so on.  Handling the case where no input is active requires extra logic and is not covered in this basic example using conditional operators.  More robust implementations would typically use `if-else` or `case` statements within an `always` block.

## 6. 2-to-4 Decoder

*   **Definition:** A decoder converts a binary code into a set of mutually exclusive outputs.  A 2-to-4 decoder has two inputs and four outputs.
*   **Truth Table:**

    | A1 | A0 | Y0 | Y1 | Y2 | Y3 |
    |---|---|---|---|---|---|
    | 0 | 0 | 1 | 0 | 0 | 0 |
    | 0 | 1 | 0 | 1 | 0 | 0 |
    | 1 | 0 | 0 | 0 | 1 | 0 |
    | 1 | 1 | 0 | 0 | 0 | 1 |

*   **Verilog Implementation (Continuous Assignment with Conditional Operators):**

    ```verilog
    module decoder2to4 (
        input  logic A1, A0,
        output logic Y0, Y1, Y2, Y3
    );

    assign Y0 = (A1 == 0 && A0 == 0) ? 1 : 0;
    assign Y1 = (A1 == 0 && A0 == 1) ? 1 : 0;
    assign Y2 = (A1 == 1 && A0 == 0) ? 1 : 0;
    assign Y3 = (A1 == 1 && A0 == 1) ? 1 : 0;

    endmodule
    ```

*   **Explanation:**  Similar to the 1:4 DEMUX, each output is asserted (set to 1) only when the corresponding input combination is true.

## 7. 7-Segment Display Driver

*   **Definition:**  A 7-segment display is a common electronic display device for showing decimal numerals. It consists of seven LEDs (segments) arranged in a specific pattern.  A 7-segment display driver converts a binary or BCD (Binary Coded Decimal) input into the appropriate signals to illuminate the correct segments to display the desired digit.
*   **Segment Mapping:**
    *   a: Top horizontal segment
    *   b: Top right segment
    *   c: Bottom right segment
    *   d: Bottom horizontal segment
    *   e: Bottom left segment
    *   f: Top left segment
    *   g: Middle horizontal segment

*   **BCD to 7-Segment Decoder:**  This example will show a 4-bit input to a 7-segment display.
*   **Verilog Implementation (Continuous Assignment with Conditional Operators):**

    ```verilog
    module seven_segment (
        input  logic [3:0] BCD, // BCD input (0-9)
        output logic [6:0] segments // a, b, c, d, e, f, g
    );

    assign segments[0] = (BCD == 0 || BCD == 2 || BCD == 3 || BCD == 5 || BCD == 6 || BCD == 7 || BCD == 8 || BCD == 9) ? 1 : 0;  // segment a
    assign segments[1] = (BCD == 0 || BCD == 1 || BCD == 2 || BCD == 3 || BCD == 4 || BCD == 7 || BCD == 8 || BCD == 9) ? 1 : 0;  // segment b
    assign segments[2] = (BCD == 0 || BCD == 1 || BCD == 3 || BCD == 4 || BCD == 5 || BCD == 6 || BCD == 7 || BCD == 8 || BCD == 9) ? 1 : 0;  // segment c
    assign segments[3] = (BCD == 0 || BCD == 2 || BCD == 3 || BCD == 5 || BCD == 6 || BCD == 8 || BCD == 9) ? 1 : 0;  // segment d
    assign segments[4] = (BCD == 0 || BCD == 2 || BCD == 6 || BCD == 8) ? 1 : 0;  // segment e
    assign segments[5] = (BCD == 0 || BCD == 4 || BCD == 5 || BCD == 6 || BCD == 8 || BCD == 9) ? 1 : 0;  // segment f
    assign segments[6] = (BCD == 2 || BCD == 3 || BCD == 4 || BCD == 5 || BCD == 6 || BCD == 8 || BCD == 9) ? 1 : 0;  // segment g


    endmodule
    ```

*   **Explanation:** Each segment is assigned a value of 1 (ON) or 0 (OFF) based on the input BCD value. The conditions are written to match which segments are lit for each digit from 0-9. For displaying A-F on a seven segment display the logic will differ.

## 8. Advantages and Limitations of Continuous Assignment

*   **Advantages:**
    *   **Simplicity:** Easy to understand and implement for simple combinational logic.
    *   **Readability:**  Can be more concise than procedural assignments (always blocks) for simple expressions.
    *   **Efficiency:**  Generally efficient for small circuits.
*   **Limitations:**
    *   **Combinational Only:**  Cannot be used to model sequential logic (flip-flops, registers, etc.) that requires memory or state.
    *   **Complexity:**  Can become unwieldy and difficult to read/maintain for complex logic with many inputs and outputs. Deeply nested conditional operators can severely impact readability.
    *   **Single Statement:**  Each continuous assignment statement must represent a complete logic function.  You cannot have multiple statements contributing to the same signal.
    *   **No Control Structures:**  Cannot use `if-else` or `case` statements directly within a continuous assignment, only the conditional operator (`? :`).
    *   **Testability:** Can be difficult to fully test complex expressions using continuous assignments

## 9. Important Points to Remember

*   Continuous assignments are best suited for modeling combinational logic.
*   Conditional operators are a powerful tool for implementing selection logic within continuous assignments.
*   Prioritize readability and avoid excessive nesting of conditional operators. Use `always` blocks with `case` or `if-else` for more complex logic.
*   Understand the limitations of continuous assignments and use them appropriately.
*   Always consider testability when designing digital circuits.

## 10. Practice Questions/Exercises

1.  **Modify the 4:1 MUX code to include an enable signal. The output `Y` should only be valid when the enable signal is high. If the enable signal is low, `Y` should be '0'.**

    ```verilog
    module mux4to1_enable (
        input  logic I0, I1, I2, I3,
        input  logic S1, S0,
        input logic enable,
        output logic Y
    );

    assign Y = (enable == 1) ? ((S1 == 0 && S0 == 0) ? I0 :
                                  (S1 == 0 && S0 == 1) ? I1 :
                                  (S1 == 1 && S0 == 0) ? I2 :
                                  (S1 == 1 && S0 == 1) ? I3 : 1'bx) : 0;

    endmodule
    ```

2.  **Write a Verilog module for a 2:1 MUX using a continuous assignment with a conditional operator.**

    ```verilog
    module mux2to1 (
        input  logic I0, I1,
        input  logic S,
        output logic Y
    );

    assign Y = S ? I1 : I0;

    endmodule
    ```

3.  **Explain why using continuous assignment for complex state machines is not recommended.**

    *Answer:* Continuous assignment cannot model sequential logic that requires memory or state. State machines require flip-flops or registers to store the current state, which cannot be implemented using continuous assignments. Continuous assignments are strictly for combinational logic, where the output is directly dependent on the current inputs, with no memory of past inputs.

4.  **Design an 8-to-3 encoder using continuous assignments and conditional operators. Assume only one input is active at a time.** Note that for more than 4 inputs, `always @(*)` with a case statement is much more readable and maintainable.

    ```verilog
    module encoder8to3 (
      input  logic I0, I1, I2, I3, I4, I5, I6, I7,
      output logic [2:0] Y
    );

    assign Y[0] = (I1 || I3 || I5 || I7) ? 1 : 0;
    assign Y[1] = (I2 || I3 || I6 || I7) ? 1 : 0;
    assign Y[2] = (I4 || I5 || I6 || I7) ? 1 : 0;

    endmodule
    ```

5.  **Modify the 7-segment display module to handle input values from 0 to 15 (hexadecimal). You will need to define which segments should be lit for A, B, C, D, E, and F.** This is left as an exercise for the reader as it requires extending the conditional assignments to cover the segment combinations for the letters A through F.
