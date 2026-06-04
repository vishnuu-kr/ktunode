---
title: "Continuous assignment - Continuous Assignment with logical operators"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 2: Combinational Logic Design: –"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad54"
status: "completed"
scrapedAt: "2026-05-20T16:23:53.138Z"
---
# DIGITAL ELECTRONICS AND LOGIC DESIGN - Module 2: Combinational Logic Design

## Topic: Continuous Assignment - Continuous Assignment with Logical Operators

**Learning Outcomes:**

*   Understand the concept of continuous assignment in hardware description languages (HDLs) like Verilog or VHDL.
*   Learn how to use logical operators within continuous assignments to create combinational logic.
*   Be able to describe and implement combinational circuits using continuous assignment statements with logical operators.
*   Analyze the behavior of combinational circuits defined by continuous assignments.

---

### 1. Introduction to Continuous Assignment

*   **Definition:** A continuous assignment is a type of statement in HDLs (e.g., Verilog) that continuously monitors the right-hand side (RHS) of an assignment.  Whenever any signal on the RHS changes its value, the RHS expression is re-evaluated, and the result is immediately assigned to the left-hand side (LHS).

*   **Key Characteristics:**
    *   **Real-time updates:**  The assignment is constantly updated based on the input signals.
    *   **Combinational Logic:**  Continuous assignments are primarily used to model combinational logic circuits. There is no memory or state involved. The output is solely determined by the current inputs.
    *   **Declarative:** They describe *what* the circuit does rather than *how* it does it (unlike procedural code).
    *   **Syntax (Verilog Example):** `assign LHS = RHS;`

*   **Contrast with Procedural Assignments (e.g., in `always` blocks):**
    *   Continuous assignments are concurrent and always active.
    *   Procedural assignments within `always` blocks are sequential and triggered by sensitivity lists or events.

*   **Use Cases:** Modeling simple combinational logic gates (AND, OR, NOT, XOR, etc.), adders, multiplexers, decoders, and other combinational circuits.

### 2. Logical Operators in Continuous Assignments

*   **Purpose:** Logical operators allow you to combine multiple input signals to create more complex combinational logic functions within the continuous assignment.

*   **Common Logical Operators (Verilog):**

    | Operator | Description         | Example                |
    | :------- | :------------------ | :--------------------- |
    | `&&`     | Logical AND         | `assign out = a && b;` |
    | `||`     | Logical OR          | `assign out = a || b;` |
    | `!`      | Logical NOT         | `assign out = !a;`     |
    | `^`      | Logical XOR         | `assign out = a ^ b;`  |
    | `~^` or `^~`  | Logical XNOR        | `assign out = a ~^ b;` |

*   **Truth Tables for Logical Operators:**

    | A | B | A && B | A || B | A ^ B | A ~^ B |
    |---|---|--------|--------|-------|--------|
    | 0 | 0 | 0      | 0      | 0     | 1      |
    | 0 | 1 | 0      | 1      | 1     | 0      |
    | 1 | 0 | 0      | 1      | 1     | 0      |
    | 1 | 1 | 1      | 1      | 0     | 1      |

*   **Operator Precedence:** Understand the order in which operators are evaluated.  Use parentheses to clarify the order and avoid ambiguity.  For example: `assign out = (a && b) || c;` is different from `assign out = a && (b || c);`

### 3. Examples of Combinational Circuits using Continuous Assignments

*   **AND Gate:**

    ```verilog
    module and_gate(input a, input b, output out);
      assign out = a && b;
    endmodule
    ```

*   **OR Gate:**

    ```verilog
    module or_gate(input a, input b, output out);
      assign out = a || b;
    endmodule
    ```

*   **NOT Gate (Inverter):**

    ```verilog
    module not_gate(input a, output out);
      assign out = !a;
    endmodule
    ```

*   **XOR Gate:**

    ```verilog
    module xor_gate(input a, input b, output out);
      assign out = a ^ b;
    endmodule
    ```

*   **Half Adder:**

    ```verilog
    module half_adder(input a, input b, output sum, output carry);
      assign sum   = a ^ b;     // XOR for Sum
      assign carry = a && b;     // AND for Carry
    endmodule
    ```

*   **Multiplexer (2-to-1):**

    ```verilog
    module mux_2to1(input a, input b, input sel, output out);
      assign out = (sel == 0) ? a : b; // Using the conditional operator
      // Alternative using logical operators:
      // assign out = (!sel && a) || (sel && b);
    endmodule
    ```

*   **Important Note on Conditional Operator:**  The conditional operator (`? :`) is very useful in continuous assignments for creating multiplexers and other conditional logic.  It has the form: `condition ? value_if_true : value_if_false;`

### 4. Analyzing Combinational Circuits Defined by Continuous Assignments

*   **Truth Table Generation:** The most straightforward way to analyze a circuit is to create a truth table.  List all possible input combinations and then evaluate the continuous assignment expression to determine the corresponding output for each combination.

*   **Boolean Expression Derivation:**  From the continuous assignment statement(s), you can directly derive the Boolean expression that represents the circuit's logic function.

*   **Simulation:** Use a Verilog simulator (e.g., ModelSim, Icarus Verilog, Vivado Simulator) to verify the circuit's behavior and compare the simulation results with the expected truth table or Boolean expression.  Create testbenches with different input combinations to thoroughly test the circuit.

### 5. Important Points to Remember

*   Continuous assignments are for *combinational logic* only. Don't use them to model sequential logic (flip-flops, registers, etc.).
*   The RHS of a continuous assignment can be any valid expression involving input signals and operators.
*   The LHS of a continuous assignment must be a wire (not a reg, which is used in procedural assignments).
*   Operator precedence is important. Use parentheses for clarity.
*   Always verify your designs through simulation.

### 6. Practice Questions/Exercises

**Q1:** Write a Verilog module using a continuous assignment to implement a 3-input AND gate.

**Answer:**

```verilog
module and3(input a, input b, input c, output out);
  assign out = a && b && c;
endmodule
```

**Q2:** Write a Verilog module using a continuous assignment to implement a 2-to-1 multiplexer with an active-low select signal (i.e., when `sel` is 0, output `b`; when `sel` is 1, output `a`).

**Answer:**

```verilog
module mux_2to1_active_low(input a, input b, input sel, output out);
  assign out = (!sel) ? b : a;
endmodule
```

**Q3:**  Given the following Verilog code, create the truth table for the circuit.

```verilog
module logic_circuit(input a, input b, output out);
  assign out = (a && !b) || (!a && b);
endmodule
```

**Answer:**  The circuit is an XOR gate.

| a | b | out |
|---|---|-----|
| 0 | 0 | 0   |
| 0 | 1 | 1   |
| 1 | 0 | 1   |
| 1 | 1 | 0   |

**Q4:**  Implement a full adder using continuous assignment statements.  A full adder has three inputs (a, b, and carry_in) and two outputs (sum and carry_out).

**Answer:**

```verilog
module full_adder(input a, input b, input carry_in, output sum, output carry_out);
  assign sum       = a ^ b ^ carry_in;
  assign carry_out = (a && b) || (a && carry_in) || (b && carry_in);
endmodule
```

**Q5:**  Simplify the following Verilog code and rewrite using fewer continuous assignments:

```verilog
module circuit(input a, input b, input c, output out1, output out2);
  assign temp1 = a && b;
  assign temp2 = !c;
  assign out1 = temp1 || temp2;
  assign out2 = a ^ c;
endmodule
```

**Answer:**

```verilog
module circuit(input a, input b, input c, output out1, output out2);
  assign out1 = (a && b) || (!c);
  assign out2 = a ^ c;
endmodule
