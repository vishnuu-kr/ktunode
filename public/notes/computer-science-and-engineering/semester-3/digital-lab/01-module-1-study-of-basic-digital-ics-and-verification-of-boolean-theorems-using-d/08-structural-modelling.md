---
title: "structural modelling"
subject: "DIGITAL LAB"
module: "Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aed0"
status: "completed"
scrapedAt: "2026-05-20T16:24:13.154Z"
---
# DIGITAL LAB: Module 1 - Structural Modeling

## Module Overview: Study of basic digital ICs and verification of Boolean theorems using digital logic gates.

## Topic: Structural Modeling

### Learning Outcomes:

*   Understand the concept of structural modeling in digital logic design.
*   Learn how to represent digital circuits using structural descriptions.
*   Be able to implement basic digital logic gates using structural modeling.
*   Verify Boolean theorems using structural models of digital circuits.
*   Understand the advantages and disadvantages of structural modeling.

---

### 1. Introduction to Structural Modeling

*   **Definition:** Structural modeling describes a digital circuit by explicitly specifying its components (e.g., gates, flip-flops, adders) and their interconnections. It focuses on *how* the circuit is built rather than *what* it does.

*   **Key Concept:** It's a hierarchical approach where a complex circuit is broken down into simpler, interconnected modules. This allows for easier design, debugging, and reuse.

*   **Contrast with Behavioral Modeling:** Behavioral modeling describes *what* a circuit does using high-level constructs like assignments, conditional statements, and loops. It hides the underlying implementation details.

*   **Contrast with Dataflow Modeling:**  Dataflow modeling describes the flow of data through the circuit using expressions and assignments.  It's a step up from behavioral modeling in terms of explicitly defining data paths.

### 2. Representing Digital Circuits Structurally

*   **Components:** Digital circuits are built from basic components such as:
    *   **Logic Gates:** AND, OR, NOT, NAND, NOR, XOR, XNOR.
    *   **Flip-Flops:** D, JK, T.
    *   **Multiplexers (MUX).**
    *   **Demultiplexers (DEMUX).**
    *   **Adders, Subtractors.**
    *   These components may be available as pre-defined modules/libraries in hardware description languages (HDLs) like Verilog or VHDL.

*   **Interconnections:**  These components are connected using wires or signals.

*   **Example (Verilog):**  A simple AND gate built using structural modeling:

    ```verilog
    module and_gate (input a, input b, output y);
      and (y, a, b); // Instantiation of a pre-defined AND gate
    endmodule
    ```

    *   `module and_gate (input a, input b, output y);`:  Defines a module named `and_gate` with inputs `a`, `b` and output `y`.
    *   `and (y, a, b);`: Instantiates an AND gate.  `y` is the output of the AND gate, and `a` and `b` are the inputs. This line connects the inputs `a` and `b` to the AND gate's inputs, and the output of the AND gate to the output `y` of the module.

### 3. Implementing Basic Logic Gates Using Structural Modeling

*   **Building Complex Gates from Simpler Ones:** Structural modeling allows you to build more complex gates from simpler ones. For example, you can implement a NAND gate using an AND gate followed by a NOT gate.

*   **Example (Verilog): NAND gate from AND and NOT gates:**

    ```verilog
    module nand_gate (input a, input b, output y);
      wire temp; // Internal wire to connect AND and NOT gates

      and  g1 (temp, a, b); // AND gate instance
      not  g2 (y, temp);   // NOT gate instance

    endmodule
    ```

    *   `wire temp;`: Declares an internal wire named `temp`. This wire is used to connect the output of the AND gate to the input of the NOT gate.
    *   `and g1 (temp, a, b);`: Instantiates an AND gate. `g1` is the instance name.  The output of the AND gate is connected to `temp`, and the inputs are `a` and `b`.
    *   `not g2 (y, temp);`: Instantiates a NOT gate. `g2` is the instance name. The output of the NOT gate is connected to `y`, and the input is `temp`.

### 4. Verification of Boolean Theorems Using Structural Models

*   **Concept:**  Create structural models of circuits representing both sides of a Boolean theorem.  Apply the same input combinations to both circuits. If the outputs are identical for all input combinations, the theorem is verified.

*   **Example: DeMorgan's Law (A' + B')' = A.B**

    1.  **Circuit 1: (A' + B')' - NAND gate**

        ```verilog
        module demorgan_left (input a, input b, output y);
          wire a_not, b_not;

          not g1 (a_not, a);
          not g2 (b_not, b);
          nor g3 (y, a_not, b_not); // Note: Inverted due to bubbles
        endmodule
        ```

    2.  **Circuit 2: A.B - AND gate**

        ```verilog
        module demorgan_right (input a, input b, output y);
          and g1 (y, a, b);
        endmodule
        ```

    3.  **Verification:**  Simulate both `demorgan_left` and `demorgan_right` modules with all possible input combinations (A=0, B=0; A=0, B=1; A=1, B=0; A=1, B=1). Observe the outputs `y` of both modules.  If they are identical for all input combinations, the theorem is verified.  You'd typically use a testbench for this.

    ```verilog
    // Example testbench
    module demorgan_tb;
      reg a, b;
      wire y_left, y_right;

      demorgan_left uut_left ( .a(a), .b(b), .y(y_left) );
      demorgan_right uut_right ( .a(a), .b(b), .y(y_right) );

      initial begin
        $monitor("a=%b b=%b y_left=%b y_right=%b", a, b, y_left, y_right);
        a = 0; b = 0; #10;
        a = 0; b = 1; #10;
        a = 1; b = 0; #10;
        a = 1; b = 1; #10;
        $finish;
      end
    endmodule
    ```

### 5. Advantages and Disadvantages of Structural Modeling

*   **Advantages:**

    *   **Detailed Control:** Provides complete control over the circuit's implementation.
    *   **Direct Mapping to Hardware:** Easily translates to physical hardware implementation.
    *   **Optimization:**  Allows for fine-grained optimization of the circuit's structure.
    *   **Good for understanding basics**: Helps to visualise and understand underlying building blocks.

*   **Disadvantages:**

    *   **Complexity:**  Can become complex and difficult to manage for large circuits.
    *   **Time-Consuming:** Requires significant effort to design and debug complex circuits.
    *   **Less Abstract:** Lower level of abstraction compared to behavioral or dataflow modeling, making design more tedious.

### 6. Practice Questions/Exercises

1.  **Implement a 2-input XOR gate using structural modeling with AND, OR, and NOT gates.**

    *   **Answer:**

        ```verilog
        module xor_gate (input a, input b, output y);
          wire a_not, b_not, term1, term2;

          not g1 (a_not, a);
          not g2 (b_not, b);
          and g3 (term1, a_not, b);
          and g4 (term2, a, b_not);
          or  g5 (y, term1, term2);
        endmodule
        ```

2.  **Using structural modeling, implement a 2-to-1 multiplexer (MUX) using AND, OR, and NOT gates. The inputs are A, B, and Select (S). The output is Y.  When S=0, Y=A; when S=1, Y=B.**

    *   **Answer:**

        ```verilog
        module mux_2to1 (input a, input b, input s, output y);
          wire s_not, term1, term2;

          not g1 (s_not, s);
          and g2 (term1, a, s_not);
          and g3 (term2, b, s);
          or  g4 (y, term1, term2);
        endmodule
        ```

3.  **Implement a full adder using two half adders and an OR gate. Show the structural Verilog code.**

    *   **Answer:**

      ```verilog
      // Half Adder Module
      module half_adder (input a, input b, output sum, output carry);
        xor (sum, a, b);
        and (carry, a, b);
      endmodule

      // Full Adder Module (Structural)
      module full_adder (input a, input b, input cin, output sum, output cout);
        wire s1, c1, c2;

        half_adder ha1 ( .a(a), .b(b), .sum(s1), .carry(c1) );
        half_adder ha2 ( .a(s1), .b(cin), .sum(sum), .carry(c2) );
        or or_gate ( .y(cout), .a(c1), .b(c2) );

      endmodule
      ```

### 7. Important Points to Remember

*   Structural modeling is about *how* a circuit is constructed.
*   It involves instantiating components and connecting them with wires.
*   It is a powerful tool for understanding the underlying hardware implementation.
*   It can become complex for large designs.
*   Understanding how to verify Boolean theorems using structural models is a crucial skill.
*   Pay attention to signal direction and naming conventions when creating structural models.  Use descriptive names.
*   Test your designs thoroughly using testbenches.  `$monitor` and `$finish` are your friends.
*   Be mindful of simulation time delays, especially when dealing with complex interconnections.
