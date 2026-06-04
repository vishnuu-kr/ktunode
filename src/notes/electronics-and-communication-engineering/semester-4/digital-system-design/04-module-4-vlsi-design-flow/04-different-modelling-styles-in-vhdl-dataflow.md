---
title: "different modelling styles in VHDL - Dataflow"
subject: "DIGITAL SYSTEM DESIGN"
module: "Module 4: VLSI Design flow"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe724"
status: "completed"
scrapedAt: "2026-05-23T17:47:58.079Z"
---
# Digital System Design: Module 4 - VLSI Design Flow
## Topic: VHDL Modelling Styles - Dataflow

This module delves into the various ways we can describe digital hardware using the Very High-Speed Integrated Circuit Hardware Description Language (VHDL). We will focus on the **Dataflow modelling style**, which is crucial for expressing the behavior of combinational logic and understanding how data propagates through a digital system.

**Learning Outcomes:**

*   Understand the fundamental principles of dataflow modelling in VHDL.
*   Learn how to describe combinational logic circuits using dataflow constructs.
*   Be able to translate truth tables and Boolean expressions into VHDL dataflow code.
*   Recognize the advantages and limitations of the dataflow modelling style.
*   Differentiate dataflow modelling from other VHDL modelling styles (Behavioral and Structural).

**Course Outcomes Alignment:**

*   **CO4: Apply VHDL programming in digital system design (Knowledge Level: K3)**
    *   This topic directly addresses CO4 by teaching a fundamental VHDL modelling technique, enabling students to write code for digital system design.

---

### 1. Introduction to VHDL Modelling Styles

VHDL, as a hardware description language, provides different ways to model digital systems. These styles offer various levels of abstraction and are suited for different design tasks. The three primary modelling styles are:

*   **Structural Modelling:** Describes a system as a interconnection of lower-level components (e.g., gates, flip-flops, or sub-modules). This style is akin to drawing a circuit diagram.
*   **Dataflow Modelling:** Describes the flow of data through a system and the transformations applied to it, often using concurrent signal assignments. It's like describing a mathematical equation or a logic function.
*   **Behavioral Modelling:** Describes the *behavior* or *response* of a system to stimuli, often using sequential statements within processes. This style is closer to algorithmic description.

---

### 2. Dataflow Modelling Style in VHDL

The **Dataflow modelling style** focuses on describing the functionality of a digital circuit by specifying how input signals are transformed into output signals. It emphasizes the flow of data and the operations performed on it. This style is particularly well-suited for describing combinational logic circuits.

#### 2.1 Key Concepts and Definitions

*   **Concurrent Signal Assignments:** The core of dataflow modelling. These assignments occur concurrently, meaning they are evaluated whenever their input signals change. This directly mirrors how hardware operates, where changes propagate simultaneously.
*   **Operators:** VHDL provides a rich set of operators (arithmetic, logical, relational, etc.) that are used to define the transformations on data.
*   **Signals:** Represent wires or buses in hardware. They are the entities that carry data between different parts of the design.
*   **Assignments:** The `=>` operator is used to assign values to signals.

#### 2.2 Syntax and Constructs

The most common constructs for dataflow modelling are:

*   **`assign` Statement (Implicit in VHDL):** VHDL doesn't have an explicit `assign` keyword like Verilog. Instead, concurrent signal assignments are directly made using the `<=` operator.

    ```vhdl
    output_signal <= expression;
    ```

    *   `output_signal`: The signal on the left-hand side that receives the result of the expression.
    *   `expression`: A combination of input signals, constants, operators, and function calls that define the transformation.

*   **`with-select` Statement:** This is a powerful dataflow construct used to implement multiplexer-like logic. It selects one of several expressions to assign to a signal based on the value of a "selector" signal.

    ```vhdl
    with selector_signal select
        output_signal <= expression_1 when condition_1,
                         expression_2 when condition_2,
                         ...
                         expression_n when others; -- 'others' is optional for completeness
    ```

    *   `selector_signal`: The signal whose value determines which expression is chosen.
    *   `expression_i`: The expression to be assigned if `selector_signal` matches `condition_i`.
    *   `condition_i`: A specific value or range of values for `selector_signal`.

*   **`when-else` Statement (Conditional Signal Assignment):** This construct implements conditional logic similar to if-else statements in programming, but it's concurrent. It's ideal for implementing simple multiplexers or conditional logic.

    ```vhdl
    output_signal <= expression_1 when condition_1 else
                     expression_2 when condition_2 else
                     ...
                     expression_n; -- Default value if no condition is met
    ```

    *   This statement assigns `expression_1` to `output_signal` if `condition_1` is true, otherwise it evaluates the next `when-else` clause, and so on.

#### 2.3 Dataflow for Combinational Logic

Dataflow modelling is excellent for translating Boolean equations and truth tables directly into VHDL.

**Example 1: Simple Logic Gate (AND Gate)**

Let's model a 2-input AND gate.

**Boolean Equation:** `Y = A AND B`

**VHDL Dataflow Code:**

```vhdl
library ieee;
use ieee.std_logic_1164.all;

entity and_gate is
    port (
        a : in std_logic;
        b : in std_logic;
        y : out std_logic
    );
end entity and_gate;

architecture dataflow_arch of and_gate is
begin
    -- Concurrent signal assignment for the AND operation
    y <= a and b;
end architecture dataflow_arch;
```

**Explanation:**

*   The `y <= a and b;` line directly implements the Boolean equation. Whenever `a` or `b` changes, the `and` operation is re-evaluated, and `y` is updated concurrently.

**Example 2: Full Adder**

A full adder has three inputs (A, B, Cin) and two outputs (Sum, Cout).

**Boolean Equations:**
*   `Sum = A XOR B XOR Cin`
*   `Cout = (A AND B) OR (Cin AND (A XOR B))`

**VHDL Dataflow Code:**

```vhdl
library ieee;
use ieee.std_logic_1164.all;

entity full_adder is
    port (
        a   : in  std_logic;
        b   : in  std_logic;
        cin : in  std_logic;
        sum : out std_logic;
        cout: out std_logic
    );
end entity full_adder;

architecture dataflow_arch of full_adder is
begin
    -- Dataflow assignments for Sum and Cout
    sum  <= a xor b xor cin;
    cout <= (a and b) or (cin and (a xor b));
end architecture dataflow_arch;
```

**Explanation:**

*   Each output (`sum`, `cout`) is assigned using a concurrent signal assignment, directly translating the Boolean equations. This style clearly shows the logic functions being implemented.

**Example 3: Multiplexer using `with-select`**

Let's model a 2-to-1 multiplexer.

**Functionality:**
*   If `sel` is '0', `out_signal` = `in0`.
*   If `sel` is '1', `out_signal` = `in1`.

**VHDL Dataflow Code:**

```vhdl
library ieee.std_logic_1164.all;
use ieee.std_logic_1164.all;

entity mux_2_to_1 is
    port (
        in0 : in  std_logic;
        in1 : in  std_logic;
        sel : in  std_logic;
        out_signal : out std_logic
    );
end entity mux_2_to_1;

architecture dataflow_arch of mux_2_to_1 is
begin
    -- Using with-select for multiplexer logic
    with sel select
        out_signal <= in0 when '0',
                      in1 when '1';
end architecture dataflow_arch;
```

**Example 4: Multiplexer using `when-else`**

The same 2-to-1 multiplexer can be implemented using `when-else`.

**VHDL Dataflow Code:**

```vhdl
library ieee.std_logic_1164.all;
use ieee.std_logic_1164.all;

entity mux_2_to_1_conditional is
    port (
        in0 : in  std_logic;
        in1 : in  std_logic;
        sel : in  std_logic;
        out_signal : out std_logic
    );
end entity mux_2_to_1_conditional;

architecture dataflow_arch of mux_2_to_1_conditional is
begin
    -- Using when-else for multiplexer logic
    out_signal <= in1 when sel = '1' else in0;
end architecture dataflow_arch;
```

**Explanation (for `with-select` and `when-else`):**

*   Both `with-select` and `when-else` are excellent for implementing multiplexer logic.
*   `with-select` is often preferred when the selector has multiple distinct values that map to different outputs.
*   `when-else` is more concise for simple binary choices.

#### 2.4 Advantages of Dataflow Modelling

*   **Readability:** Clearly expresses the functional behavior of combinational logic.
*   **Conciseness:** Can be very compact for describing complex Boolean functions.
*   **Direct Mapping to Hardware:** Easily maps to the actual logic gates and interconnections of a circuit.
*   **Synthesis Friendly:** Most synthesis tools efficiently translate dataflow descriptions into optimized hardware.
*   **Ease of Debugging:** Simulating dataflow code often directly reflects the expected logic behavior.

#### 2.5 Limitations of Dataflow Modelling

*   **Not Suitable for Sequential Logic:** Dataflow modelling, using concurrent assignments, is not inherently designed for describing sequential circuits (like flip-flops or state machines) which rely on clocks and state transitions. Behavioral modeling is more appropriate for these.
*   **Limited Control Flow:** Lacks the explicit control flow structures found in behavioral modeling (e.g., `if-then-else`, `case`, `loop` within a `process`).
*   **No explicit timing control:** While it describes data propagation, it doesn't explicitly model delays or clock edges without being combined with other constructs (which would lean towards behavioral).

---

### 3. Dataflow vs. Other Modelling Styles

*   **Dataflow vs. Behavioral:**
    *   **Dataflow:** Focuses on *how* data flows and is transformed (logic functions, equations). Concurrent assignments are the primary tool.
    *   **Behavioral:** Focuses on *what* the circuit does in response to events, often over time. Uses sequential statements within `process` blocks, including sequential assignments, control structures (`if`, `case`, `loop`), and timing constructs (`wait`).

*   **Dataflow vs. Structural:**
    *   **Dataflow:** Describes functionality through operations on signals.
    *   **Structural:** Describes a system as a hierarchy of interconnected components. You instantiate pre-defined modules.

**Important Point to Remember:** While VHDL has distinct modelling styles, they can often be mixed within a single design. For instance, a top-level module might be described structurally, with its sub-modules implemented using dataflow or behavioral styles.

---

### 4. Important Points to Remember

*   Dataflow modeling is primarily for **combinational logic**.
*   The core of dataflow is **concurrent signal assignments** (`<=`).
*   Operators are crucial for defining data transformations.
*   `with-select` and `when-else` are specific dataflow constructs for conditional logic and multiplexers.
*   Dataflow code is directly synthesizable into hardware.
*   For sequential logic, you will need to use behavioral modeling.

---

### 5. Practice Questions and Exercises

**Question 1:**
Write VHDL dataflow code for a 4-input AND gate.

**Answer 1:**

```vhdl
library ieee;
use ieee.std_logic_1164.all;

entity and_gate_4input is
    port (
        i1, i2, i3, i4 : in  std_logic;
        o              : out std_logic
    );
end entity and_gate_4input;

architecture dataflow_arch of and_gate_4input is
begin
    o <= i1 and i2 and i3 and i4;
end architecture dataflow_arch;
```

**Question 2:**
Implement a 2-bit comparator that outputs '1' if `A` is greater than `B`, and '0' otherwise. Assume `A` and `B` are 2-bit signals (`std_logic_vector`).

**Hint:** You can compare `std_logic_vector`s directly using relational operators.

**Answer 2:**

```vhdl
library ieee;
use ieee.std_logic_1164.all;
use ieee.numeric_std.all; -- Needed for unsigned comparisons

entity comparator_2bit is
    port (
        a : in  std_logic_vector(1 downto 0);
        b : in  std_logic_vector(1 downto 0);
        gt: out std_logic -- '1' if a > b, '0' otherwise
    );
end entity comparator_2bit;

architecture dataflow_arch of comparator_2bit is
begin
    -- Using the '>' operator for comparison
    -- Note: For signed/unsigned comparisons, numeric_std is preferred.
    -- Here, assuming std_logic_vector comparison works as intended for bit patterns.
    gt <= '1' when a > b else '0';
end architecture dataflow_arch;
```

**Question 3:**
Describe a 4-to-1 multiplexer using the `with-select` statement. The inputs are `i0`, `i1`, `i2`, `i3`, and the select lines are `s0` and `s1`. The output is `y`. Assume `s0` is the LSB and `s1` is the MSB of the select signal.

**Answer 3:**

```vhdl
library ieee;
use ieee.std_logic_1164.all;

entity mux_4_to_1 is
    port (
        i0, i1, i2, i3 : in  std_logic;
        s0, s1         : in  std_logic;
        y              : out std_logic
    );
end entity mux_4_to_1;

architecture dataflow_arch of mux_4_to_1 is
    -- Combine select lines to form a 2-bit signal
    signal sel_vec : std_logic_vector(1 downto 0);
begin
    sel_vec <= s1 & s0; -- Concatenate s1 and s0 (s1 is MSB)

    -- Use with-select to implement the multiplexer
    with sel_vec select
        y <= i0 when "00",
             i1 when "01",
             i2 when "10",
             i3 when "11";
end architecture dataflow_arch;
```

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 6. Textbook and Reference Material Mentions

*   **Digital Design with an introduction to HDL, VHDL and Verilog by M. Morris Mano and Michel D. Ciletti (Pearson education, 6/e, 2018):** This book is an excellent resource for understanding digital design principles and their translation into HDLs like VHDL. Chapters covering combinational logic design and introductory HDL concepts will reinforce the dataflow modelling style. The authors provide clear examples of translating logic functions into VHDL.
*   **Digital System Design Using VHDL by Charles Roth (PWS PUBLISHING, 1997) / Digital System Design Using VHDL by Lizy Kurian John, Charles H. Roth (Cengage, 1st, 2012):** These books are specifically dedicated to VHDL and will offer in-depth coverage of various modelling styles, including dataflow. You can expect detailed explanations of concurrent assignments, operators, and specific constructs like `with-select` and conditional signal assignments, along with numerous practical examples.
*   **Digital Principles & Design by Donald G. Givone (Tata McGraw Hill, 1/e 2002):** While not VHDL-specific, Givone's text provides a strong foundation in digital logic principles. Understanding the underlying Boolean algebra and Karnaugh maps discussed in this book will make it easier to translate those concepts into VHDL dataflow descriptions.

---

This concludes our exploration of the dataflow modelling style in VHDL. Mastering this style is fundamental to building combinational logic circuits and is a key step in effective VHDL-based digital system design.