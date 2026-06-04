---
title: "continuous assignment with logical operators"
subject: "DIGITAL LAB"
module: "Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aed4"
status: "completed"
scrapedAt: "2026-05-20T16:24:15.944Z"
---
## DIGITAL LAB: Module 1 - Continuous Assignment with Logical Operators

**Module:** Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates.
**Topic:** Continuous assignment with logical operators
**Description:**  Understanding and applying continuous assignment statements and logical operators in digital circuits.

**Learning Outcomes:**

*   Understand the concept of continuous assignment in hardware description languages (HDLs).
*   Learn how to use logical operators (AND, OR, NOT, XOR, XNOR) in continuous assignment statements.
*   Apply Boolean algebra to simplify logical expressions used in continuous assignments.
*   Design and simulate simple combinational circuits using continuous assignments and logical operators.
*   Verify Boolean theorems using continuous assignment and simulation.

---

### 1. Introduction to Continuous Assignment

*   **Definition:** Continuous assignment is a type of assignment statement used in Hardware Description Languages (HDLs) like Verilog or VHDL (though VHDL approaches this differently). It continuously drives a net or wire based on the value of an expression on the right-hand side.  Think of it as a direct electrical connection reflecting the logic.
*   **Purpose:** It's primarily used to model combinational logic circuits.
*   **Key Characteristic:**  Whenever any operand on the right-hand side of the assignment changes, the entire expression is re-evaluated, and the output is updated *immediately* (in a simulation context). It models how a real combinational circuit responds instantly to input changes.
*   **Syntax (Verilog):**
    ```verilog
    assign <net_name> = <expression>;
    ```
    *   `<net_name>`: The name of the wire or net being assigned to. It *must* be declared as a `wire` or `tri`.  It represents the output.
    *   `<expression>`:  A logical expression involving input signals and logical operators.
*   **Difference from Procedural Assignments (e.g., in always blocks):**  Continuous assignments are *declarative*. They describe the relationship between signals rather than a sequence of operations. They are always active and sensitive to changes.  `always` blocks are *procedural* and execute only when triggered by a sensitivity list.

**Example (Verilog):**

```verilog
module continuous_assignment_example (input a, input b, output c);
  wire c;  // c is a wire, and driven by the assign statement
  assign c = a & b;  // c is always equal to a AND b
endmodule
```

---

### 2. Logical Operators

*   **Common Logical Operators:**

    *   **AND (`&`)**: Output is 1 only if both inputs are 1.
    *   **OR (`|`)**: Output is 1 if either input is 1 (or both).
    *   **NOT (`~`)**: Output is the inverse of the input.
    *   **XOR (`^`)**: Output is 1 if the inputs are different (one is 0 and the other is 1).
    *   **XNOR (`~^` or `^~`)**: Output is 1 if the inputs are the same (both 0 or both 1).
*   **Truth Tables:**  Fundamental to understanding how these operators work.

    | a | b | a & b | a | b | a | b | a ^ b | a | b | ~a |
    |---|---|-------|---|---|-------|---|-------|---|-------|----|
    | 0 | 0 |   0   | 0 | 1 |   1   | 0 |   0   | 0 |   0   | 1  |
    | 0 | 1 |   0   | 1 | 0 |   1   | 1 |   1   | 0 |   1   | 0  |
    | 1 | 0 |   0   | 1 | 1 |   1   | 1 |   1   | 1 |   0   |    |
    | 1 | 1 |   1   |   |   |       |   |       | 1 |   1   |    |

*   **Multi-bit Operators:** Logical operators can also operate on multi-bit signals, performing the operation bitwise. For example, `a[3:0] & b[3:0]` performs an AND operation between corresponding bits of `a` and `b`.

**Examples (Verilog):**

```verilog
module logical_operators (input a, input b, output y_and, output y_or, output y_not_a, output y_xor, output y_xnor);
  wire y_and, y_or, y_not_a, y_xor, y_xnor;

  assign y_and = a & b;
  assign y_or  = a | b;
  assign y_not_a = ~a;
  assign y_xor = a ^ b;
  assign y_xnor = ~(a ^ b); // or assign y_xnor = a ~^ b;
endmodule
```

---

### 3. Boolean Algebra and Simplification

*   **Boolean Algebra:** A system of algebra dealing with binary values (0 and 1) and logical operations.  It's the mathematical foundation of digital logic.
*   **Key Laws and Theorems:**

    *   **Commutative Law:** a & b = b & a; a | b = b | a
    *   **Associative Law:** (a & b) & c = a & (b & c); (a | b) | c = a | (b | c)
    *   **Distributive Law:** a & (b | c) = (a & b) | (a & c); a | (b & c) = (a | b) & (a | c)
    *   **Identity Law:** a & 1 = a; a | 0 = a
    *   **Null Law:** a & 0 = 0; a | 1 = 1
    *   **Idempotent Law:** a & a = a; a | a = a
    *   **Inverse Law:** a & ~a = 0; a | ~a = 1
    *   **Absorption Law:** a & (a | b) = a; a | (a & b) = a
    *   **DeMorgan's Theorem:** ~(a & b) = ~a | ~b; ~(a | b) = ~a & ~b

*   **Simplification:** Using Boolean algebra to reduce the complexity of logical expressions.  This leads to simpler circuits with fewer gates.
*   **Karnaugh Maps (K-Maps):** A visual method for simplifying Boolean expressions, especially for 3- or 4-variable functions.  (While not directly covered in continuous assignments, understanding K-Maps helps with designing the logic.)

**Example:**

Simplify the expression:  `F = (a & b) | (a & ~b)`

Using the Distributive Law in reverse:  `F = a & (b | ~b)`

Using the Inverse Law: `F = a & 1`

Using the Identity Law: `F = a`

The simplified expression is `F = a`.

**Verilog Implementation (before and after simplification):**

```verilog
module simplification_example (input a, input b, output y_original, output y_simplified);
  wire y_original, y_simplified;

  assign y_original = (a & b) | (a & ~b);  // Original, more complex
  assign y_simplified = a;                // Simplified, equivalent
endmodule
```

---

### 4. Designing and Simulating Combinational Circuits

*   **Design Process:**
    1.  **Define the problem:** Clearly specify the desired function of the circuit.
    2.  **Create a truth table:**  Map all possible input combinations to the desired output.
    3.  **Derive a Boolean expression:**  From the truth table, create a Boolean expression for the output. This can be done using Sum of Products (SOP) or Product of Sums (POS) techniques.
    4.  **Simplify the expression:** Use Boolean algebra or K-Maps to minimize the expression.
    5.  **Implement using continuous assignments:** Translate the simplified Boolean expression into Verilog code using `assign` statements and logical operators.
    6.  **Simulate and verify:** Use a simulator (e.g., ModelSim, Vivado Simulator) to test the design and ensure it meets the specifications.

*   **Example:  Design a 2-to-1 Multiplexer (MUX)**

    1.  **Problem:** A 2-to-1 MUX selects one of two inputs (I0, I1) based on a select signal (S). If S=0, the output (Y) is I0. If S=1, the output (Y) is I1.

    2.  **Truth Table:**

        | S | I0 | I1 | Y |
        |---|----|----|---|
        | 0 | 0  | 0  | 0 |
        | 0 | 0  | 1  | 0 |
        | 0 | 1  | 0  | 1 |
        | 0 | 1  | 1  | 1 |
        | 1 | 0  | 0  | 0 |
        | 1 | 0  | 1  | 1 |
        | 1 | 1  | 0  | 0 |
        | 1 | 1  | 1  | 1 |

    3.  **Boolean Expression:**  Y = (~S & I0) | (S & I1)  (Derived using Sum-of-Products)

    4.  **Simplified Expression:**  In this case, the expression is already relatively simple.

    5.  **Verilog Implementation:**

        ```verilog
        module mux2to1 (input S, input I0, input I1, output Y);
          wire Y;
          assign Y = (~S & I0) | (S & I1);
        endmodule
        ```

    6.  **Simulation:**  Create a testbench to apply different input combinations to the MUX module and verify that the output matches the truth table.

        ```verilog
        module mux2to1_tb;
          reg S, I0, I1;
          wire Y;

          mux2to1 uut ( .S(S), .I0(I0), .I1(I1), .Y(Y) );

          initial begin
            // Apply all possible input combinations
            S = 0; I0 = 0; I1 = 0; #10;
            S = 0; I0 = 0; I1 = 1; #10;
            S = 0; I0 = 1; I1 = 0; #10;
            S = 0; I0 = 1; I1 = 1; #10;
            S = 1; I0 = 0; I1 = 0; #10;
            S = 1; I0 = 0; I1 = 1; #10;
            S = 1; I0 = 1; I1 = 0; #10;
            S = 1; I0 = 1; I1 = 1; #10;
            $finish;
          end

          initial begin
            $monitor("S=%b I0=%b I1=%b Y=%b", S, I0, I1, Y);
          end
        endmodule
        ```

---

### 5. Verifying Boolean Theorems

*   **Using Continuous Assignments:** You can use continuous assignments to directly demonstrate the validity of Boolean theorems.
*   **Method:**
    1.  Implement both sides of the theorem as separate signals using continuous assignments.
    2.  Apply all possible input combinations.
    3.  Compare the output signals from both sides of the theorem. If they are always equal for all input combinations, the theorem is verified.
*   **Example: Verify DeMorgan's Theorem: ~(a & b) = ~a | ~b**

    ```verilog
    module demorgan_verification (input a, input b, output y_lhs, output y_rhs);
      wire y_lhs, y_rhs;

      assign y_lhs = ~(a & b);   // Left-hand side
      assign y_rhs = ~a | ~b;    // Right-hand side
    endmodule

    module demorgan_verification_tb;
      reg a, b;
      wire y_lhs, y_rhs;

      demorgan_verification uut ( .a(a), .b(b), .y_lhs(y_lhs), .y_rhs(y_rhs) );

      initial begin
        a = 0; b = 0; #10;
        a = 0; b = 1; #10;
        a = 1; b = 0; #10;
        a = 1; b = 1; #10;
        $finish;
      end

      initial begin
        $monitor("a=%b b=%b LHS=%b RHS=%b", a, b, y_lhs, y_rhs);
      end
    endmodule
    ```

    By running the simulation, you will observe that `y_lhs` and `y_rhs` are always equal, thus verifying DeMorgan's theorem.

---

### 6. Practice Questions and Exercises

**Question 1:** Write a Verilog module using continuous assignment to implement a 3-input AND gate.

**Answer:**

```verilog
module and3 (input a, input b, input c, output y);
  wire y;
  assign y = a & b & c;
endmodule
```

**Question 2:** Simplify the following Boolean expression and then implement it in Verilog using a continuous assignment:  `F = (a & b) | (~a & b) | (a & ~b)`

**Answer:**

Simplification:

`F = (a & b) | (~a & b) | (a & ~b)`
`F = b & (a | ~a) | (a & ~b)`  // Factoring out b
`F = b & 1 | (a & ~b)`  // Inverse law
`F = b | (a & ~b)`  // Identity law
`F = (b | a) & (b | ~b)` // Distributive law
`F = (b | a) & 1`  // Inverse law
`F = b | a` // Identity law

Simplified expression: `F = a | b`

Verilog Implementation:

```verilog
module simplified_logic (input a, input b, output y);
  wire y;
  assign y = a | b;
endmodule
```

**Question 3:**  Write Verilog code to verify the associative law for AND: `(a & b) & c = a & (b & c)` using continuous assignments.

**Answer:**

```verilog
module associative_and_verification (input a, input b, input c, output y_lhs, output y_rhs);
  wire y_lhs, y_rhs;

  assign y_lhs = (a & b) & c;
  assign y_rhs = a & (b & c);
endmodule

module associative_and_verification_tb;
  reg a, b, c;
  wire y_lhs, y_rhs;

  associative_and_verification uut ( .a(a), .b(b), .c(c), .y_lhs(y_lhs), .y_rhs(y_rhs) );

  initial begin
      a = 0; b = 0; c = 0; #10;
      a = 0; b = 0; c = 1; #10;
      a = 0; b = 1; c = 0; #10;
      a = 0; b = 1; c = 1; #10;
      a = 1; b = 0; c = 0; #10;
      a = 1; b = 0; c = 1; #10;
      a = 1; b = 1; c = 0; #10;
      a = 1; b = 1; c = 1; #10;
      $finish;
  end

  initial begin
      $monitor("a=%b b=%b c=%b LHS=%b RHS=%b", a, b, c, y_lhs, y_rhs);
  end
endmodule
```

---

### 7. Important Points to Remember

*   Continuous assignments are essential for modeling combinational logic in HDLs.
*   They are *declarative* and always active.
*   The `assign` statement drives a `wire` (or `tri`) type net.  You cannot assign to `reg` types using `assign` (use `always` blocks for that).
*   Understanding Boolean algebra is crucial for simplifying expressions and optimizing circuits.
*   Simulation is a vital step in verifying the correctness of your designs.
*   Use testbenches to apply a variety of input combinations to your modules.
*   Remember DeMorgan's Theorem for simplifying complex logic expressions.
*   For more complex designs, consider using more structured approaches like `always` blocks and procedural assignments alongside continuous assignments.
