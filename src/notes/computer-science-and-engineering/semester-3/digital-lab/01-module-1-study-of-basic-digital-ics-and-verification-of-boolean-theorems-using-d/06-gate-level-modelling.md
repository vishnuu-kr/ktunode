---
title: "gate level modelling"
subject: "DIGITAL LAB"
module: "Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aece"
status: "completed"
scrapedAt: "2026-05-20T16:24:11.752Z"
---
# DIGITAL LAB - Module 1: Gate Level Modelling

**Module:** Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates.
**Topic:** Gate Level Modelling

**Learning Outcomes:**

*   Understand the concept of gate-level modeling in digital design.
*   Identify and use primitive gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) in gate-level descriptions.
*   Write Verilog or VHDL code for simple digital circuits using gate-level modelling.
*   Verify Boolean theorems (e.g., DeMorgan's Law, Distributive Law) using gate-level implementations and simulation.
*   Analyze the advantages and disadvantages of gate-level modeling.

## 1. Introduction to Gate Level Modelling

*   **Definition:** Gate-level modeling is a method of describing a digital circuit using basic logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR) as building blocks.  It's a structural approach where the interconnection of these gates defines the circuit's functionality.
*   **Abstraction Level:**  It is a relatively low level of abstraction, closer to the actual hardware implementation than higher-level behavioral modeling.
*   **Purpose:**  Gate-level modelling allows for precise control over the circuit's structure and can be used to optimize performance, area, or power consumption. It's commonly used for designing custom integrated circuits (ICs) and for verifying the correctness of higher-level designs.
*   **Tools:** Hardware Description Languages (HDLs) like Verilog and VHDL are used to write gate-level descriptions.

## 2. Primitive Logic Gates

*   **Primitive Gates:** These are the fundamental building blocks in gate-level modelling.  Each gate implements a specific Boolean function.  Let's consider the common gates and their respective Boolean expressions:

    *   **AND Gate:**
        *   Function: Output is 1 only if all inputs are 1.
        *   Boolean Expression: `Output = A AND B` or `Output = A * B`
        *   Verilog/VHDL Example: `and g1 (Output, A, B);`  (Verilog)
    *   **OR Gate:**
        *   Function: Output is 1 if at least one input is 1.
        *   Boolean Expression: `Output = A OR B` or `Output = A + B`
        *   Verilog/VHDL Example: `or g2 (Output, A, B);`  (Verilog)
    *   **NOT Gate (Inverter):**
        *   Function: Output is the complement of the input.
        *   Boolean Expression: `Output = NOT A` or `Output = A'`
        *   Verilog/VHDL Example: `not g3 (Output, A);` (Verilog)
    *   **NAND Gate:**
        *   Function: Output is 0 only if all inputs are 1.  It's the complement of the AND gate.
        *   Boolean Expression: `Output = NOT (A AND B)` or `Output = (A * B)'`
        *   Verilog/VHDL Example: `nand g4 (Output, A, B);` (Verilog)
    *   **NOR Gate:**
        *   Function: Output is 1 only if all inputs are 0. It's the complement of the OR gate.
        *   Boolean Expression: `Output = NOT (A OR B)` or `Output = (A + B)'`
        *   Verilog/VHDL Example: `nor g5 (Output, A, B);` (Verilog)
    *   **XOR Gate (Exclusive OR):**
        *   Function: Output is 1 if the inputs are different.
        *   Boolean Expression: `Output = (A AND NOT B) OR (NOT A AND B)` or `Output = A ⊕ B`
        *   Verilog/VHDL Example: `xor g6 (Output, A, B);` (Verilog)
    *   **XNOR Gate (Exclusive NOR):**
        *   Function: Output is 1 if the inputs are the same.
        *   Boolean Expression: `Output = NOT (A XOR B)` or `Output = A ⊙ B`
        *   Verilog/VHDL Example: `xnor g7 (Output, A, B);` (Verilog)

*   **Truth Tables:** It's essential to know the truth tables for each of these gates to understand their behavior.

## 3. Verilog/VHDL Code Examples

*   **Half Adder (Verilog):**

    ```verilog
    module half_adder (input A, input B, output sum, output carry);

        xor g1 (sum, A, B);  // Sum = A XOR B
        and g2 (carry, A, B); // Carry = A AND B

    endmodule
    ```

*   **Half Adder (VHDL):**

    ```vhdl
    library ieee;
    use ieee.std_logic_1164.all;

    entity half_adder is
        port (
            A     : in  std_logic;
            B     : in  std_logic;
            sum   : out std_logic;
            carry : out std_logic
        );
    end entity half_adder;

    architecture rtl of half_adder is
    begin
        sum   <= A xor B;
        carry <= A and B;
    end architecture rtl;
    ```

*   **Full Adder (Verilog):**

    ```verilog
    module full_adder (input A, input B, input Cin, output sum, output Cout);

        wire s1, c1, c2;

        xor g1 (s1, A, B);     // s1 = A XOR B
        xor g2 (sum, s1, Cin);  // sum = (A XOR B) XOR Cin
        and g3 (c1, A, B);     // c1 = A AND B
        and g4 (c2, s1, Cin);  // c2 = (A XOR B) AND Cin
        or g5 (Cout, c1, c2);   // Cout = (A AND B) OR ((A XOR B) AND Cin)

    endmodule
    ```

*   **Explanation:**
    *   Each `module` (Verilog) or `entity` (VHDL) defines a circuit.
    *   `input` and `output` declarations specify the circuit's inputs and outputs.
    *   `wire` (Verilog) declarations define internal connections within the circuit.  VHDL uses signals inside the `architecture` block.
    *   The gate instances (e.g., `and g1 (Output, A, B);`) connect the signals to implement the desired logic.  The format is `gate_type instance_name (output, input1, input2, ...);`

## 4. Verification of Boolean Theorems

*   **DeMorgan's Law:**

    *   Theorem 1: `NOT (A AND B) = (NOT A) OR (NOT B)`
    *   Theorem 2: `NOT (A OR B) = (NOT A) AND (NOT B)`

    **Verilog Implementation to verify Theorem 1:**

    ```verilog
    module demorgan1 (input A, input B, output F1, output F2);

        wire notA, notB;

        not u1 (notA, A);
        not u2 (notB, B);
        and u3 (F1, A, B);
        not u4 (F1, F1);
        or u5 (F2, notA, notB);

    endmodule
    ```

    **Verification:** Simulate the `demorgan1` module with different combinations of A and B.  Verify that the outputs F1 and F2 are always equal, demonstrating the validity of DeMorgan's Law.

*   **Distributive Law:**

    *   Theorem: `A AND (B OR C) = (A AND B) OR (A AND C)`

    **Verilog Implementation:**

    ```verilog
    module distributive (input A, input B, input C, output F1, output F2);

        wire orBC, andAB, andAC;

        or u1 (orBC, B, C);
        and u2 (F1, A, orBC);
        and u3 (andAB, A, B);
        and u4 (andAC, A, C);
        or u5 (F2, andAB, andAC);

    endmodule
    ```

    **Verification:** Simulate the `distributive` module with all possible combinations of A, B, and C.  Verify that F1 and F2 are always equal, proving the distributive law.

## 5. Advantages and Disadvantages of Gate-Level Modelling

*   **Advantages:**
    *   **Precise Control:** Allows for very fine-grained control over the circuit's structure.
    *   **Optimization:** Enables manual optimization for performance, area, and power.
    *   **Direct Mapping to Hardware:**  Reflects the actual hardware implementation, making it easier to debug and troubleshoot.
    *   **Low-Level Understanding:**  Provides a deep understanding of how digital circuits work.

*   **Disadvantages:**
    *   **Complexity:**  Becomes very complex and time-consuming for larger circuits.
    *   **Tedious:**  Writing gate-level code can be tedious and error-prone.
    *   **Less Portable:** Gate-level designs are often tied to a specific technology or library, making them less portable.
    *   **Difficult to Understand:**  For complex circuits, the gate-level description can be difficult to understand and maintain.

## 6. Important Points to Remember

*   Understand the truth tables and functions of all primitive gates.
*   Pay close attention to signal connections and naming conventions in Verilog/VHDL code.
*   Use simulation tools to verify the correctness of gate-level designs.
*   Gate-level modelling is more suitable for smaller, critical sections of a larger design where optimization is crucial.

## 7. Practice Questions/Exercises

1.  **Design a 2-to-1 multiplexer using gate-level modelling in Verilog or VHDL.**  (Hint: You'll need AND, OR, and NOT gates.)

    **Answer (Verilog):**

    ```verilog
    module mux2to1 (input A, input B, input select, output Y);

        wire not_select;
        wire and1_out, and2_out;

        not (not_select, select);
        and (and1_out, A, not_select);
        and (and2_out, B, select);
        or (Y, and1_out, and2_out);

    endmodule
    ```

2.  **Implement a NOT gate using only NAND gates.**

    **Answer:** Connect the input of the NAND gate to both inputs of the NAND gate.  This effectively implements a NOT gate.

3.  **Write Verilog code to implement the Boolean function F = (A AND B) OR (C AND D) using gate-level modelling.**

    **Answer:**

    ```verilog
    module boolean_function (input A, input B, input C, input D, output F);

        wire and1_out, and2_out;

        and (and1_out, A, B);
        and (and2_out, C, D);
        or (F, and1_out, and2_out);

    endmodule
    ```

4.  **Describe the difference between structural and behavioral modelling.**

    **Answer:** Structural modelling describes a circuit based on its components and their interconnections (like gate-level modelling). Behavioral modelling describes a circuit based on its function or algorithm, without specifying the exact implementation details.

5.  **What are the limitations of using gate-level modelling for complex digital systems?**

    **Answer:** Complexity, Tediousness, less Portable and Difficult to Understand.
