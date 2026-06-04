---
title: "dataflow modelling"
subject: "DIGITAL LAB"
module: "Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aed1"
status: "completed"
scrapedAt: "2026-05-20T16:24:13.849Z"
---
## Digital Lab: Module 1 - Dataflow Modelling

**Topic:** Dataflow Modelling (from Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates.)

**Learning Outcomes:**  Upon completion of this topic, you will be able to:

*   Understand the concept of dataflow modelling in digital design.
*   Describe the difference between structural and dataflow modelling.
*   Write Verilog or VHDL code using dataflow constructs (assign statements, concurrent statements).
*   Implement basic digital circuits using dataflow modelling.
*   Apply dataflow modelling to verify Boolean theorems.
*   Analyze and interpret dataflow code for combinational logic.

---

### 1. Introduction to Dataflow Modelling

*   **Definition:** Dataflow modelling describes a digital circuit by defining the flow of data through the circuit. It focuses on *what* operations are performed on the data, rather than *how* those operations are implemented (as in structural modelling). It's like describing a recipe based on the ingredients and the final product, without detailing the exact steps someone takes to chop, stir, or bake.

*   **Key Concept: Concurrent Execution:**  In dataflow modelling, assignments are inherently *concurrent*. This means that the order in which the statements are written in the code *does not* affect the execution order of the circuit.  The simulator evaluates all statements simultaneously whenever any input changes.  This reflects the actual parallel nature of digital circuits.

*   **Contrast with Structural Modelling:**
    *   **Structural Modelling:** Describes a circuit by explicitly specifying the interconnection of its components (gates, flip-flops, etc.). It's like providing a detailed block diagram showing how each IC is connected.
    *   **Dataflow Modelling:** Describes a circuit by specifying the relationship between inputs and outputs using expressions. It's a higher level of abstraction.

*   **Advantages of Dataflow Modelling:**
    *   **Conciseness:**  Dataflow descriptions are often shorter and easier to understand than structural descriptions, especially for complex circuits.
    *   **Readability:**  Dataflow code is often more readable, as it directly reflects the logical function being implemented.
    *   **Synthesis-Friendly:**  Dataflow code is generally easier for synthesis tools to translate into an optimized gate-level implementation.

### 2. Dataflow Constructs in Verilog and VHDL

#### 2.1 Verilog

*   **`assign` Statement:** The fundamental construct for dataflow modelling in Verilog.  The `assign` statement continuously assigns a value to a signal based on an expression.

    *   **Syntax:** `assign <net_name> = <expression>;`

    *   **Example:** `assign out = a & b;`  This statement assigns the AND of signals `a` and `b` to the signal `out`.

*   **Continuous Assignment:** The `assign` statement represents a continuous assignment.  Whenever the value of any operand in the expression on the right-hand side changes, the expression is re-evaluated, and the result is assigned to the net on the left-hand side.

*   **Operators:** Verilog provides a rich set of operators for use in dataflow expressions:
    *   **Logical Operators:** `&&` (AND), `||` (OR), `!` (NOT)
    *   **Bitwise Operators:** `&` (AND), `|` (OR), `~` (NOT), `^` (XOR), `^~` or `~^` (XNOR)
    *   **Reduction Operators:** `&` (AND), `|` (OR), `^` (XOR), `~&` (NAND), `~|` (NOR), `~^` or `^~` (XNOR) - operate on a single operand to produce a single-bit result.
    *   **Relational Operators:** `==` (equal), `!=` (not equal), `>` (greater than), `<` (less than), `>=` (greater than or equal to), `<=` (less than or equal to)
    *   **Arithmetic Operators:** `+` (addition), `-` (subtraction), `*` (multiplication), `/` (division), `%` (modulo)
    *   **Conditional Operator:** `? :` (ternary operator)

#### 2.2 VHDL

*   **Concurrent Signal Assignment (`<=`)**: Similar to the `assign` statement in Verilog, VHDL uses concurrent signal assignments (`<=`) to express dataflow behavior.

    *   **Syntax:** `<signal_name> <= <expression>;`

    *   **Example:** `out <= a and b;` This statement assigns the AND of signals `a` and `b` to the signal `out`.

*   **Process Statement (Optional but powerful for complex dataflow):** While not strictly necessary for simple dataflow, the `process` statement can be used to model more complex behavior.  Within a process, signal assignments become sequential (like in procedural programming), but the process itself is executed concurrently with other processes and concurrent signal assignments.

    *   **Syntax:**

    ```vhdl
    process (sensitivity_list)
    begin
        -- Sequential statements here (signal assignments, if-then-else, case statements, etc.)
    end process;
    ```

    *   **Sensitivity List:** The sensitivity list specifies which signals, when changed, cause the process to execute.

*   **Operators:** VHDL's operators are similar to Verilog's:

    *   **Logical Operators:** `and`, `or`, `not`, `nand`, `nor`, `xor`, `xnor`
    *   **Relational Operators:** `=`, `/=`, `>`, `<`, `>=`, `<=`
    *   **Arithmetic Operators:** `+`, `-`, `*`, `/`, `mod`, `rem`
    *   **Conditional Signal Assignment:** `<signal_name> <= <expression1> when <condition> else <expression2>;`
    *   **Selected Signal Assignment:** Used for implementing multiplexers and decoders (more complex than the `when...else` assignment).

### 3. Implementing Basic Digital Circuits using Dataflow Modelling

#### 3.1 AND Gate

*   **Verilog:**

    ```verilog
    module and_gate (input a, input b, output out);
        assign out = a & b;
    endmodule
    ```

*   **VHDL:**

    ```vhdl
    entity and_gate is
        port (a : in std_logic;
              b : in std_logic;
              out : out std_logic);
    end entity and_gate;

    architecture dataflow of and_gate is
    begin
        out <= a and b;
    end architecture dataflow;
    ```

#### 3.2 OR Gate

*   **Verilog:**

    ```verilog
    module or_gate (input a, input b, output out);
        assign out = a | b;
    endmodule
    ```

*   **VHDL:**

    ```vhdl
    entity or_gate is
        port (a : in std_logic;
              b : in std_logic;
              out : out std_logic);
    end entity or_gate;

    architecture dataflow of or_gate is
    begin
        out <= a or b;
    end architecture dataflow;
    ```

#### 3.3 XOR Gate

*   **Verilog:**

    ```verilog
    module xor_gate (input a, input b, output out);
        assign out = a ^ b;
    endmodule
    ```

*   **VHDL:**

    ```vhdl
    entity xor_gate is
        port (a : in std_logic;
              b : in std_logic;
              out : out std_logic);
    end entity xor_gate;

    architecture dataflow of xor_gate is
    begin
        out <= a xor b;
    end architecture dataflow;
    ```

#### 3.4 Multiplexer (2-to-1)

*   **Verilog:**

    ```verilog
    module mux_2to1 (input a, input b, input sel, output out);
        assign out = (sel == 1) ? b : a; // Using the conditional operator
    endmodule
    ```

*   **VHDL:**

    ```vhdl
    entity mux_2to1 is
        port (a : in std_logic;
              b : in std_logic;
              sel : in std_logic;
              out : out std_logic);
    end entity mux_2to1;

    architecture dataflow of mux_2to1 is
    begin
        out <= b when sel = '1' else a;
    end architecture dataflow;
    ```

#### 3.5 Half Adder

*   **Verilog:**

    ```verilog
    module half_adder (input a, input b, output sum, output carry);
        assign sum = a ^ b;
        assign carry = a & b;
    endmodule
    ```

*   **VHDL:**

    ```vhdl
    entity half_adder is
        port (a : in std_logic;
              b : in std_logic;
              sum : out std_logic;
              carry : out std_logic);
    end entity half_adder;

    architecture dataflow of half_adder is
    begin
        sum <= a xor b;
        carry <= a and b;
    end architecture dataflow;
    ```

### 4. Verification of Boolean Theorems using Dataflow Modelling

*   **Goal:** To demonstrate the equivalence of different Boolean expressions using simulation.

*   **Method:**
    1.  Write dataflow code for both sides of the Boolean theorem.
    2.  Apply all possible input combinations.
    3.  Simulate the code and compare the outputs of both sides.  If the outputs are identical for all input combinations, the theorem is verified.

*   **Example: DeMorgan's Law (A NAND B = NOT(A) OR NOT(B))**

    *   **Verilog:**

        ```verilog
        module demorgan_test (input a, input b, output nand_ab, output not_a_or_not_b);
            assign nand_ab = ~(a & b);
            assign not_a_or_not_b = ~a | ~b;
        endmodule
        ```

    *   **VHDL:**

        ```vhdl
        entity demorgan_test is
            port (a : in std_logic;
                  b : in std_logic;
                  nand_ab : out std_logic;
                  not_a_or_not_b : out std_logic);
        end entity demorgan_test;

        architecture dataflow of demorgan_test is
        begin
            nand_ab <= not (a and b);
            not_a_or_not_b <= (not a) or (not b);
        end architecture dataflow;
        ```

    *   **Simulation:** Simulate for all input combinations (a=0, b=0; a=0, b=1; a=1, b=0; a=1, b=1). Verify that `nand_ab` and `not_a_or_not_b` are always equal.

*   **Other Theorems:** This method can be applied to verify other Boolean theorems like the distributive law, associative law, etc.

### 5. Analyzing Dataflow Code for Combinational Logic

*   **Combinational Logic:** Logic circuits where the output depends solely on the present inputs, not on past inputs (no memory elements).  Dataflow modelling is particularly well-suited for describing combinational logic.

*   **Analyzing Dataflow Code:**
    1.  **Identify Inputs and Outputs:** Determine which signals are inputs and which are outputs.
    2.  **Trace the Data Flow:** Follow the signals from the inputs through the expressions to the outputs. Understand the operations being performed on the data.
    3.  **Determine the Functionality:**  Based on the data flow, determine the overall function of the circuit (e.g., AND, OR, XOR, adder, multiplexer, etc.).
    4.  **Write the Truth Table:** For small circuits, creating a truth table can help solidify your understanding of the circuit's behavior.

*   **Example:**

    *   **Verilog:**

        ```verilog
        module mystery_circuit (input a, input b, input c, output out);
            assign out = (a & b) | (~a & c);
        endmodule
        ```

    *   **Analysis:**
        *   Inputs: `a`, `b`, `c`
        *   Output: `out`
        *   Data Flow:
            *   `a & b` calculates the AND of `a` and `b`.
            *   `~a & c` calculates the AND of the complement of `a` and `c`.
            *   The results of the two AND operations are ORed together.
        *   Functionality: This circuit implements a multiplexer, where `a` acts as the select line.  If `a` is 1, the output is `b`. If `a` is 0, the output is `c`.
        *   **Truth Table:**

            | a | b | c | out |
            |---|---|---|-----|
            | 0 | 0 | 0 |  0  |
            | 0 | 0 | 1 |  1  |
            | 0 | 1 | 0 |  0  |
            | 0 | 1 | 1 |  1  |
            | 1 | 0 | 0 |  0  |
            | 1 | 0 | 1 |  0  |
            | 1 | 1 | 0 |  1  |
            | 1 | 1 | 1 |  1  |

### 6. Important Points to Remember

*   Dataflow modelling focuses on the *flow* of data and the *relationship* between inputs and outputs.
*   `assign` statements in Verilog and concurrent signal assignments (`<=`) in VHDL are continuously evaluated.
*   Concurrency is a fundamental concept in dataflow modelling.  The order of statements does not affect the execution order.
*   Dataflow modelling is well-suited for describing combinational logic circuits.
*   Boolean theorems can be verified by comparing the outputs of dataflow implementations of both sides of the equation.
*   Always check for potential race conditions or unintended feedback loops in your dataflow descriptions.

---

### 7. Practice Questions and Exercises

**Question 1:** Write Verilog or VHDL code using dataflow modelling for a full adder. The full adder has three inputs (a, b, cin) and two outputs (sum, cout).

**Answer (Verilog):**

```verilog
module full_adder (input a, input b, input cin, output sum, output cout);
  assign sum = a ^ b ^ cin;
  assign cout = (a & b) | (a & cin) | (b & cin);
endmodule
```

**Answer (VHDL):**

```vhdl
entity full_adder is
  port (a : in std_logic;
        b : in std_logic;
        cin : in std_logic;
        sum : out std_logic;
        cout : out std_logic);
end entity full_adder;

architecture dataflow of full_adder is
begin
  sum <= a xor b xor cin;
  cout <= (a and b) or (a and cin) or (b and cin);
end architecture dataflow;
```

**Question 2:** Write Verilog or VHDL code using dataflow modelling to implement the Boolean expression:  `out = (a & b) | (c & d)`.

**Answer (Verilog):**

```verilog
module boolean_expression (input a, input b, input c, input d, output out);
  assign out = (a & b) | (c & d);
endmodule
```

**Answer (VHDL):**

```vhdl
entity boolean_expression is
  port (a : in std_logic;
        b : in std_logic;
        c : in std_logic;
        d : in std_logic;
        out : out std_logic);
end entity boolean_expression;

architecture dataflow of boolean_expression is
begin
  out <= (a and b) or (c and d);
end architecture dataflow;
```

**Question 3:** Describe the functionality of the following Verilog code using dataflow modelling:

```verilog
module mystery_logic (input a, input b, input sel, output out);
  assign out = (sel == 0) ? (a & b) : (a | b);
endmodule
```

**Answer:** This circuit implements a selectable AND/OR gate.  If `sel` is 0, the output is the AND of `a` and `b`.  If `sel` is 1, the output is the OR of `a` and `b`.  It's effectively a 2-to-1 multiplexer with a AND and OR gate acting as the inputs.

**Question 4:** How does dataflow modeling differ from structural modeling?

**Answer:** Dataflow modeling describes the *flow* of data through a circuit and the relationships between inputs and outputs using expressions. It focuses on *what* the circuit does.  Structural modeling describes the circuit by explicitly connecting components (gates, flip-flops) and focuses on *how* the circuit is implemented.

**Question 5:**  Explain why `assign out = a & b;` in Verilog represents a continuous assignment.

**Answer:**  The `assign` statement creates a continuous assignment because whenever the value of either `a` or `b` changes, the expression `a & b` is automatically re-evaluated, and the result is assigned to the signal `out`.  The simulator continuously monitors the signals on the right-hand side and updates the left-hand side whenever necessary.
