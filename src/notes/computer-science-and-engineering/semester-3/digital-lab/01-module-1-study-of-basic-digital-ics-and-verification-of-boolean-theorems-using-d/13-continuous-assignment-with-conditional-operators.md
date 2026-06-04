---
title: "continuous assignment with conditional operators"
subject: "DIGITAL LAB"
module: "Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aed5"
status: "completed"
scrapedAt: "2026-05-20T16:24:16.642Z"
---
# DIGITAL LAB - Module 1: Continuous Assignment with Conditional Operators

## 1. Introduction

This module focuses on continuous assignment statements and conditional operators in the context of digital logic design. We will explore how these constructs are used in hardware description languages (HDLs) like Verilog or VHDL to model digital circuits. This topic builds upon the foundation of basic digital ICs and Boolean theorems learned earlier in Module 1.  Mastering continuous assignments and conditional operators allows for more concise and efficient hardware modeling.

## 2. Learning Outcomes

By the end of this module, you will be able to:

*   Understand the concept of continuous assignment in HDL.
*   Define and explain the use of conditional operators in continuous assignment statements.
*   Apply continuous assignment with conditional operators to model basic digital logic circuits.
*   Analyze and debug circuits described using continuous assignment with conditional operators.
*   Compare and contrast different conditional operator implementations.
*   Write HDL code that effectively utilizes continuous assignments and conditional operators.

## 3. Key Concepts and Definitions

### 3.1. Continuous Assignment

*   **Definition:** A continuous assignment statement continuously monitors the right-hand side (RHS) expression and immediately assigns the result to the left-hand side (LHS) variable whenever the RHS changes.
*   **Purpose:** Used to model combinational logic, where the output is directly dependent on the inputs at any given time.
*   **Syntax (Verilog Example):** `assign <LHS> = <RHS>;`
*   **LHS Restrictions:**  The LHS must be a net (wire) in Verilog.  It cannot be a reg (register) as registers require procedural assignments (using `always` blocks).
*   **Behavior:** Think of it as a wire connecting the output of a gate to the output wire.  Any change on the gate input immediately propagates to the output wire.
*   **Important:** Continuous assignments are concurrent statements, meaning their order in the code does *not* affect their execution order.

### 3.2. Conditional Operator

*   **Definition:**  Also known as the ternary operator, the conditional operator selects one of two expressions based on a condition.
*   **Purpose:**  Provides a concise way to represent multiplexers, decoders, and other conditional logic.
*   **Syntax (Verilog Example):**  `<condition> ? <expression_if_true> : <expression_if_false>`
*   **Behavior:** The `condition` is evaluated. If `condition` is true (non-zero in Verilog), `expression_if_true` is evaluated and its result is returned. Otherwise, `expression_if_false` is evaluated and returned.

### 3.3. Multiplexer (MUX) Implementation using Conditional Operator

*   **Definition:** A multiplexer selects one of several input signals and forwards it to a single output line.  The selection is controlled by a select input(s).
*   **Use Case:** Essential building block for data routing, selection, and address decoding.
*   **Example (2-to-1 MUX):**
    *   `select`:  The select input.
    *   `in0`:  Input when `select` is 0.
    *   `in1`:  Input when `select` is 1.
    *   `out`:  The output of the MUX.

### 3.4 Boolean Theorems Revisited

*   **Relevance:** Understanding Boolean algebra is crucial for optimizing logic circuits, which directly impacts the efficiency and performance of hardware designs modeled using continuous assignments and conditional operators.
*   **Key Theorems:**
    *   **Commutative Law:**  A + B = B + A; A * B = B * A
    *   **Associative Law:** A + (B + C) = (A + B) + C; A * (B * C) = (A * B) * C
    *   **Distributive Law:** A * (B + C) = (A * B) + (A * C); A + (B * C) = (A + B) * (A + C)
    *   **Identity Law:** A + 0 = A; A * 1 = A
    *   **Complement Law:** A + A' = 1; A * A' = 0
    *   **Idempotent Law:** A + A = A; A * A = A
    *   **Absorption Law:** A + (A * B) = A; A * (A + B) = A
    *   **DeMorgan's Law:** (A + B)' = A' * B'; (A * B)' = A' + B'

## 4. Examples

### 4.1. Simple AND Gate

```verilog
module and_gate(input a, input b, output y);
  assign y = a & b;
endmodule
```

This example shows a continuous assignment that implements a simple AND gate. The output `y` is continuously updated with the result of `a & b`.

### 4.2. 2-to-1 Multiplexer

```verilog
module mux_2to1(input in0, input in1, input select, output out);
  assign out = select ? in1 : in0;
endmodule
```

In this example, the conditional operator is used to implement a 2-to-1 multiplexer. If `select` is high (1), `out` is assigned the value of `in1`. Otherwise, `out` is assigned the value of `in0`.

### 4.3. Implementing an XOR Gate using Conditional Operator

```verilog
module xor_gate(input a, input b, output y);
  assign y = (a == b) ? 0 : 1; //If a equals b then output 0 else 1.
endmodule
```

### 4.4. Implementing an Inverter using a Conditional Operator (less common, but illustrative)

```verilog
module inverter(input a, output y);
  assign y = (a == 0) ? 1 : 0;
endmodule
```

## 5. Practice Questions/Exercises

### 5.1. Question 1

Write a Verilog module using a continuous assignment and a conditional operator to implement a 4-to-1 multiplexer.  The inputs are `in0`, `in1`, `in2`, `in3`, the select lines are `sel[1:0]`, and the output is `out`.

**Answer:**

```verilog
module mux_4to1(input in0, input in1, input in2, input in3,
                 input [1:0] sel, output out);

  assign out = (sel == 2'b00) ? in0 :
               (sel == 2'b01) ? in1 :
               (sel == 2'b10) ? in2 :
               in3;
endmodule
```

### 5.2. Question 2

Explain the difference between a continuous assignment and a procedural assignment (e.g., using an `always` block).

**Answer:**

*   **Continuous Assignment:** Models combinational logic, reacts immediately to changes on the RHS, uses `assign` keyword, and the LHS must be a net (wire). It's a *concurrent* statement.
*   **Procedural Assignment:** Models sequential logic or complex combinational logic, executes when triggered by an event (e.g., a clock edge), uses `always` block, and the LHS must be a reg (register) within the `always` block. It's a *sequential* statement within the `always` block.

### 5.3. Question 3

Using only continuous assignments and conditional operators, design a module that implements the following logic function:

`output = (A & B) | (C & ~D)`

**Answer:**

```verilog
module logic_function(input A, input B, input C, input D, output output);
  wire temp1, temp2;

  assign temp1 = A & B;
  assign temp2 = C & ~D;
  assign output = temp1 | temp2;
endmodule
```

### 5.4. Question 4

Can you rewrite the following code to use nested conditional operators instead of an if-else if-else statement (within an always block) for combinational logic? (This is good practice to solidify the understanding but not generally recommended as it often makes the code harder to read)

```verilog
module example(input [1:0] sel, input a, input b, input c, output reg out);

always @(*) begin
  if (sel == 2'b00) begin
    out = a;
  end else if (sel == 2'b01) begin
    out = b;
  end else begin
    out = c;
  end
end
endmodule
```

**Answer:**

```verilog
module example(input [1:0] sel, input a, input b, input c, output out);
  assign out = (sel == 2'b00) ? a : (sel == 2'b01) ? b : c;
endmodule
```

Note: The `output out` in the revised answer is a `wire`, not a `reg`, as required by continuous assignment.  Also, the `always` block is gone.

### 5.5. Question 5

What happens if the condition in a conditional operator evaluates to 'x' (unknown) or 'z' (high impedance)?

**Answer:**

The result is generally unpredictable and simulator-dependent. Most simulators will propagate the 'x' or 'z' value through the expression, resulting in an 'x' or 'z' on the output.  Avoid designs where conditional statements can result in 'x' or 'z' values, especially in synthesizable code.

## 6. Important Points to Remember

*   Continuous assignments are for *combinational* logic.
*   LHS of continuous assignments *must* be a net (wire) and not a register.
*   The order of continuous assignments *does not* matter (concurrent execution).
*   Conditional operators provide a concise way to implement multiplexers and other conditional logic.
*   Be mindful of potential 'x' or 'z' propagation when using conditional operators with undefined inputs.
*   Understanding Boolean theorems is key to simplifying and optimizing logic implemented with continuous assignments.
*   Carefully choose between `assign` and `always` blocks depending on whether your design is combinational or sequential. `assign` creates combinational logic and `always` blocks can be used to create either combinational or sequential logic.

## 7. Further Exploration

*   Study different types of multiplexer designs (4-to-1, 8-to-1, etc.) and implement them using conditional operators.
*   Explore more complex combinational logic circuits and implement them using continuous assignments and conditional operators.
*   Research synthesis tools and how they translate HDL code with continuous assignments into actual hardware implementations.
*   Learn about VHDL, another common HDL, and how it handles continuous assignments and conditional operators (the syntax is different, but the underlying concepts are the same).
