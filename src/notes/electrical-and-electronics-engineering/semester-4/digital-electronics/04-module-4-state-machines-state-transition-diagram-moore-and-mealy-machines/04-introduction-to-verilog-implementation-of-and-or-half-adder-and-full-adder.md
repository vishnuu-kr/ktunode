---
title: "Introduction to Verilog – Implementation of AND, OR, half adder and full adder."
subject: "DIGITAL ELECTRONICS"
module: "Module 4: State Machines – state transition diagram – Moore and Mealy machines."
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e59"
status: "completed"
scrapedAt: "2026-05-23T16:15:58.056Z"
---
# Digital Electronics: Module 4 - State Machines & Introduction to Verilog

## Topic: Introduction to Verilog – Implementation of AND, OR, Half Adder and Full Adder

**Module:** Module 4: State Machines – state transition diagram – Moore and Mealy machines.
**Subject:** DIGITAL ELECTRONICS

---

### 1. Introduction to Verilog HDL

Verilog Hardware Description Language (HDL) is a widely used language for designing and verifying digital circuits. It allows engineers to describe the behavior and structure of electronic systems at various levels of abstraction, from gate-level to algorithmic-level.

**Learning Outcomes Addressed:**
*   **CO5:** Explain the basic concepts of programming using Verilog HDL (Knowledge Level: K2)

**Key Concepts:**
*   **HDL (Hardware Description Language):** A specialized computer language used to describe the design, simulation, and testing of electronic circuits.
*   **Abstraction Levels:** Verilog supports different levels of abstraction:
    *   **Behavioral:** Describes the functionality of a circuit using high-level constructs like `always` blocks, `if-else` statements, and procedural assignments.
    *   **Dataflow:** Describes the flow of data through the circuit using continuous assignments (e.g., `assign`).
    *   **Structural:** Describes the circuit as an interconnection of primitive gates and lower-level modules.
*   **Modules:** The fundamental building blocks in Verilog. A module encapsulates a specific piece of hardware.
*   **Ports:** The inputs and outputs of a module.
*   **Data Types:** Verilog has various data types, including `reg` (for storing values in sequential logic) and `wire` (for connecting components).
*   **Operators:** Verilog supports a wide range of operators, including logical, arithmetic, relational, and bitwise operators.

**Key Points to Remember (CO5 - K2):**
*   Verilog is used to *describe* hardware, not to program a general-purpose computer.
*   The primary purpose of Verilog is to facilitate the design, simulation, and synthesis of digital systems.
*   Modules are reusable components in Verilog design.

**Textbook References:**
*   **Digital Design: With an Introduction to the Verilog HDL, VHDL, and System Verilog by M. Morris Mano, Michael D. Ciletti (6/e, 2018):** Chapter 1 introduces the fundamentals of HDLs and Verilog, covering basic syntax, modules, and data types.
*   **Fundamentals of Digital Logic with Verilog Design by Stephen Brown (2nd Edition):** Provides a solid foundation in Verilog syntax and its application in digital circuit design.

---

### 2. Implementing Basic Logic Gates (AND, OR) in Verilog

We can implement basic logic gates like AND and OR using Verilog's dataflow modeling style with the `assign` statement.

**Learning Outcomes Addressed:**
*   **CO2:** Design combinational logic circuits. (Knowledge Level: K3)
*   **CO5:** Explain the basic concepts of programming using Verilog HDL (Knowledge Level: K2)
*   **CO6:** Design and realize hardware circuits. medium complexity practical digital (Knowledge Level: K6)

#### 2.1. AND Gate

**Concept:** An AND gate outputs a '1' only if all its inputs are '1'.

**Verilog Implementation (Dataflow):**

```verilog
// Module for a 2-input AND gate
module and_gate (
    input wire a,
    input wire b,
    output wire y
);

    // Continuous assignment for the AND operation
    assign y = a & b; // '&' is the bitwise AND operator in Verilog

endmodule
```

**Explanation:**
*   `module and_gate (...)`: Declares a module named `and_gate`.
*   `input wire a, input wire b`: Defines two input ports named `a` and `b`, both of type `wire`.
*   `output wire y`: Defines an output port named `y`, of type `wire`.
*   `assign y = a & b;`: This is a continuous assignment. It continuously evaluates the expression `a & b` and assigns the result to `y`. The `&` operator performs a bitwise AND operation.

**Simulation Example:**
If `a = 1` and `b = 0`, then `y` will be `0`.
If `a = 1` and `b = 1`, then `y` will be `1`.

#### 2.2. OR Gate

**Concept:** An OR gate outputs a '1' if at least one of its inputs is '1'.

**Verilog Implementation (Dataflow):**

```verilog
// Module for a 2-input OR gate
module or_gate (
    input wire a,
    input wire b,
    output wire y
);

    // Continuous assignment for the OR operation
    assign y = a | b; // '|' is the bitwise OR operator in Verilog

endmodule
```

**Explanation:**
*   Similar to the AND gate, but uses the `|` operator for bitwise OR.

**Simulation Example:**
If `a = 0` and `b = 0`, then `y` will be `0`.
If `a = 1` and `b = 0`, then `y` will be `1`.
If `a = 0` and `b = 1`, then `y` will be `1`.
If `a = 1` and `b = 1`, then `y` will be `1`.

**Key Points to Remember (CO2 - K3, CO5 - K2, CO6 - K6):**
*   The `assign` statement is used for combinational logic in dataflow modeling.
*   Bitwise operators (`&`, `|`, `^`, `~`) are fundamental for implementing logic gates.
*   These simple gate implementations form the basis for more complex combinational circuits.

**Textbook References:**
*   **Digital Fundamentals by Floyd T.L (11/e, 2017):** Chapter 4 discusses logic gates and their truth tables, which directly translate to Verilog operators.
*   **Digital Integrated Electronics by Herbert Taub and Donald Schilling (2017):** Provides foundational knowledge on the behavior of logic gates, useful for understanding Verilog implementations.

---

### 3. Implementing Half Adder in Verilog

**Concept:** A half adder is a combinational circuit that adds two single binary digits, producing a sum bit and a carry-out bit.

**Truth Table for Half Adder:**

| A | B | Sum (S) | Carry (C) |
|---|---|---------|-----------|
| 0 | 0 | 0       | 0         |
| 0 | 1 | 1       | 0         |
| 1 | 0 | 1       | 0         |
| 1 | 1 | 0       | 1         |

From the truth table, we can derive the Boolean expressions:
*   Sum (S) = A XOR B
*   Carry (C) = A AND B

**Verilog Implementation (Dataflow):**

```verilog
// Module for a Half Adder
module half_adder (
    input wire a,
    input wire b,
    output wire sum,
    output wire carry
);

    // Continuous assignment for Sum (XOR operation)
    assign sum = a ^ b; // '^' is the bitwise XOR operator in Verilog

    // Continuous assignment for Carry (AND operation)
    assign carry = a & b;

endmodule
```

**Explanation:**
*   The module `half_adder` has two inputs (`a`, `b`) and two outputs (`sum`, `carry`).
*   `assign sum = a ^ b;` implements the Sum output using the XOR operator.
*   `assign carry = a & b;` implements the Carry output using the AND operator.

**Key Points to Remember (CO2 - K3, CO5 - K2, CO6 - K6):**
*   Half adders are essential building blocks for arithmetic circuits.
*   Understanding truth tables is crucial for deriving the logic in Verilog.
*   The XOR gate generates the sum bit, and the AND gate generates the carry bit.

**Textbook References:**
*   **Digital Principles and Applications by Albert Paul Malvino & Donald P. Leach (4/e, 2018):** Chapter 6 covers binary addition and introduces half adders.
*   **Digital Fundamentals by Floyd T.L (11/e, 2017):** Chapter 4 also covers basic arithmetic circuits like half adders.

---

### 4. Implementing Full Adder in Verilog

**Concept:** A full adder is a combinational circuit that adds three single binary digits, producing a sum bit and a carry-out bit. It is used to add multiple-bit numbers, where each bit position requires adding the two input bits and the carry-in from the previous bit position.

**Truth Table for Full Adder:**

| A | B | Cin | Sum (S) | Carry (Cout) |
|---|---|-----|---------|--------------|
| 0 | 0 | 0   | 0       | 0            |
| 0 | 0 | 1   | 1       | 0            |
| 0 | 1 | 0   | 1       | 0            |
| 0 | 1 | 1   | 0       | 1            |
| 1 | 0 | 0   | 1       | 0            |
| 1 | 0 | 1   | 0       | 1            |
| 1 | 1 | 0   | 0       | 1            |
| 1 | 1 | 1   | 1       | 1            |

From the truth table, we can derive the Boolean expressions:
*   Sum (S) = A ⊕ B ⊕ Cin
*   Carry (Cout) = (A ⋅ B) + (Cin ⋅ (A ⊕ B))  *or equivalently*  (A ⋅ B) + (A ⋅ Cin) + (B ⋅ Cin)

**Verilog Implementation (Dataflow):**

```verilog
// Module for a Full Adder
module full_adder (
    input wire a,
    input wire b,
    input wire cin,
    output wire sum,
    output wire cout
);

    // Continuous assignment for Sum (XOR operations)
    assign sum = a ^ b ^ cin;

    // Continuous assignment for Carry (using the simplified expression)
    assign cout = (a & b) | (cin & (a ^ b));
    // Alternative implementation for carry:
    // assign cout = (a & b) | (a & cin) | (b & cin);

endmodule
```

**Explanation:**
*   The module `full_adder` has three inputs (`a`, `b`, `cin`) and two outputs (`sum`, `cout`).
*   `assign sum = a ^ b ^ cin;` implements the Sum output using cascading XOR operations.
*   `assign cout = (a & b) | (cin & (a ^ b));` implements the Carry output. This expression first calculates `a XOR b`, and then ORs it with `a AND b`. The alternative expression `(a & b) | (a & cin) | (b & cin)` is also valid and might be more intuitive for some.

**Verilog Implementation (Structural - using Half Adders):**

A full adder can also be constructed using two half adders and an OR gate.

```verilog
// Module for a Full Adder (structural implementation)
module full_adder_structural (
    input wire a,
    input wire b,
    input wire cin,
    output wire sum,
    output wire cout
);

    // Internal wires to connect the half adders
    wire sum1, carry1, carry2;

    // Instantiate the first half adder
    half_adder ha1 (
        .a(a),
        .b(b),
        .sum(sum1),
        .carry(carry1)
    );

    // Instantiate the second half adder
    half_adder ha2 (
        .a(sum1),
        .b(cin),
        .sum(sum),     // Final sum output
        .carry(carry2)
    );

    // OR the carries from both half adders for the final carry-out
    assign cout = carry1 | carry2;

endmodule

// Assuming the half_adder module from section 3 is defined elsewhere or in the same file.
module half_adder (
    input wire a,
    input wire b,
    output wire sum,
    output wire carry
);
    assign sum = a ^ b;
    assign carry = a & b;
endmodule
```

**Explanation:**
*   This implementation demonstrates structural modeling, where the full adder is built by instantiating pre-defined modules (two `half_adder` modules and an implicit OR operation for the carry).
*   `wire sum1, carry1, carry2;` declare internal signals to connect the components.
*   The `half_adder ha1(...)` and `half_adder ha2(...)` statements are module instantiations.
*   `.sum(sum1)` and `.a(a)` are port connections, mapping the output `sum` of `ha1` to `sum1` and the input `a` of `ha1` to the module's input `a`.
*   The final `cout` is the OR of the carry outputs from the two half adders.

**Key Points to Remember (CO2 - K3, CO5 - K2, CO6 - K6):**
*   Full adders are crucial for cascading addition operations, forming ripple-carry adders and other arithmetic circuits.
*   Verilog supports both dataflow and structural modeling, offering flexibility in design.
*   Structural modeling promotes modularity and reusability by composing larger circuits from smaller, pre-defined blocks.

**Textbook References:**
*   **Digital Design: With an Introduction to the Verilog HDL, VHDL, and System Verilog by M. Morris Mano, Michael D. Ciletti (6/e, 2018):** Chapter 5 covers arithmetic circuits, including full adders and their Verilog implementation.
*   **Digital Circuits and Design by S. Salivahanan (2018):** Provides detailed analysis of combinational circuits like full adders.

---

### 5. Practice Questions and Exercises

**Question 1:**
Write a Verilog module for a 2-input XOR gate using the `assign` statement.
*   **Answer:**
    ```verilog
    module xor_gate (
        input wire a,
        input wire b,
        output wire y
    );
        assign y = a ^ b;
    endmodule
    ```

**Question 2:**
Implement a 3-input AND gate in Verilog using the `assign` statement.
*   **Answer:**
    ```verilog
    module and_gate_3input (
        input wire a,
        input wire b,
        input wire c,
        output wire y
    );
        assign y = a & b & c;
    endmodule
    ```

**Question 3:**
Describe the inputs and outputs for a full adder in Verilog. What is the Boolean expression for the `sum` output?
*   **Answer:**
    *   Inputs: `a`, `b`, `cin` (carry-in)
    *   Outputs: `sum`, `cout` (carry-out)
    *   Boolean expression for `sum`: `a ^ b ^ cin`

**Question 4:**
Which Verilog operator is used for bitwise XOR?
*   **Answer:** The `^` operator.

**Question 5:**
Write a Verilog module for a half adder using behavioral modeling style with an `always` block. (Hint: You can use `if-else` or `case` statements).
*   **Answer:**
    ```verilog
    module half_adder_behavioral (
        input wire a,
        input wire b,
        output reg sum,
        output reg carry
    );

        always @(a or b) begin
            if (a == 1'b0 && b == 1'b0) begin
                sum = 1'b0;
                carry = 1'b0;
            end else if (a == 1'b0 && b == 1'b1) begin
                sum = 1'b1;
                carry = 1'b0;
            end else if (a == 1'b1 && b == 1'b0) begin
                sum = 1'b1;
                carry = 1'b0;
            end else begin // a == 1'b1 && b == 1'b1
                sum = 1'b0;
                carry = 1'b1;
            end
        end

    endmodule
    ```
    *   **Note:** For behavioral modeling, outputs that are assigned within an `always` block must be declared as `reg`. The `always @(a or b)` statement indicates that the block will re-evaluate whenever `a` or `b` changes.

---

### 6. Summary and Important Points

*   **Verilog HDL:** A language for describing hardware, used for simulation and synthesis.
*   **Modules:** The basic building blocks of Verilog designs, encapsulating inputs, outputs, and logic.
*   **Dataflow Modeling:** Uses `assign` statements for combinational logic and describes the flow of data.
*   **Operators:** `&` for AND, `|` for OR, `^` for XOR, `~` for NOT.
*   **Half Adder:** Adds two bits, produces Sum (A XOR B) and Carry (A AND B).
*   **Full Adder:** Adds three bits (A, B, Cin), produces Sum (A XOR B XOR Cin) and Carry ((A AND B) OR (Cin AND (A XOR B))).
*   **Structural Modeling:** Designs by instantiating existing modules, promoting modularity.
*   **Behavioral Modeling:** Describes the functionality using procedural statements like `always` blocks, `if-else`, and `case`.

These fundamental building blocks and Verilog concepts are essential for progressing to more complex digital designs, including the state machines (Moore and Mealy) covered in other parts of this module.

---
This concludes the introduction to Verilog and implementation of basic combinational circuits. The subsequent sections of Module 4 will build upon these concepts to explore sequential logic and state machines.
