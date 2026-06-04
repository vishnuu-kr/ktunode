---
title: "Structural design and hierarchy - lower level module instantiation, gate level primitives, user defined primitives, adding delay to primitives."
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 3: MSI Logic and Digital Building Blocks"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad5c"
status: "completed"
scrapedAt: "2026-05-20T16:23:58.154Z"
---
## DIGITAL ELECTRONICS AND LOGIC DESIGN - Module 3: MSI Logic and Digital Building Blocks - Structural Design and Hierarchy

These study notes cover structural design and hierarchy in Verilog (or similar HDL) including lower-level module instantiation, gate-level primitives, user-defined primitives (UDPs), and adding delay to primitives.

**Learning Outcomes:**

*   Understand the concept of structural modeling in HDL.
*   Be able to instantiate lower-level modules within higher-level modules.
*   Be able to use gate-level primitives (AND, OR, NOT, etc.) in HDL.
*   Understand and be able to define User Defined Primitives (UDPs).
*   Be able to incorporate timing delays in HDL models for more realistic simulation.

### 1. Structural Modeling and Hierarchy

*   **Structural Modeling:** Describes a digital system by specifying the interconnections of its components. This approach emphasizes the *structure* of the design, rather than its behavior.  It's akin to creating a schematic diagram with individual components connected by wires.
*   **Hierarchy:**  Organizing a design into multiple levels of abstraction.  Complex systems are broken down into smaller, more manageable modules, which can then be further subdivided.  This makes designs easier to understand, debug, and reuse.
*   **Top-Down Design:** Starts with the highest-level module and progressively refines it into smaller sub-modules.
*   **Bottom-Up Design:** Starts with the basic building blocks and combines them to create larger, more complex modules.
*   **Benefits of Hierarchical Design:**
    *   **Modularity:** Modules can be designed, tested, and reused independently.
    *   **Abstraction:** Allows designers to focus on the functionality of a module without needing to know the details of its implementation.
    *   **Complexity Management:**  Simplifies complex designs by breaking them into smaller, manageable pieces.
    *   **Easier Debugging:** Issues can be isolated and resolved within specific modules.
    *   **Reusability:** Modules can be used in multiple designs.

### 2. Lower-Level Module Instantiation

*   **Instantiation:** Creating an instance of a module within another module.  This allows you to reuse the same module multiple times in your design.
*   **Syntax (Verilog):**

```verilog
module top_module;
  // Declare wires that connect the instances
  wire w1, w2;

  // Instantiate the lower-level module
  lower_module instance_name (
      .input1(signal1),   // Port connection 1
      .input2(signal2),   // Port connection 2
      .output1(w1)      // Port connection 3
  );

  another_lower_module instance_name2 (
     .inputA(w1),
     .outputB(w2)
  );

  // ... rest of the top_module definition ...
endmodule

module lower_module (input input1, input input2, output output1);
  // Implementation of lower_module
  assign output1 = input1 & input2; // Example: AND gate
endmodule

module another_lower_module (input inputA, output outputB);
  assign outputB = ~inputA;
endmodule

```

*   **Explanation:**
    *   `lower_module instance_name(...)`: Creates an instance of the `lower_module`. `instance_name` is a unique identifier for this specific instance.
    *   `.input1(signal1)`: Connects the port `input1` of the `lower_module` to the signal `signal1` in the `top_module`. This is *named port association*. It's generally preferred over positional association for readability and maintainability.
    *  **Positional Association:** (Less Preferred): `lower_module instance_name (signal1, signal2, w1);`  The order of signals must match the order in the module definition.
*   **Important Notes:**
    *   The data types of the connected signals must be compatible.
    *   The number of ports in the instantiated module must match the number of connections specified in the instantiation.

**Example:**  Building a 2-bit adder using half adders.

```verilog
module half_adder (input a, input b, output sum, output carry);
  assign sum = a ^ b;
  assign carry = a & b;
endmodule

module full_adder(input a, input b, input cin, output sum, output cout);
    wire w1, w2, w3;

    half_adder HA1 ( .a(a), .b(b), .sum(w1), .carry(w2) );
    half_adder HA2 ( .a(w1), .b(cin), .sum(sum), .carry(w3) );

    assign cout = w2 | w3;
endmodule

module two_bit_adder(input [1:0] A, input [1:0] B, input Cin, output [1:0] Sum, output Cout);
    wire C1;
    full_adder FA0 (.a(A[0]), .b(B[0]), .cin(Cin), .sum(Sum[0]), .cout(C1));
    full_adder FA1 (.a(A[1]), .b(B[1]), .cin(C1), .sum(Sum[1]), .cout(Cout));
endmodule
```

### 3. Gate-Level Primitives

*   **Gate-Level Modeling:**  Describes a digital circuit using basic logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR).
*   **Primitives:** Built-in gates provided by the HDL.
*   **Common Verilog Primitives:**
    *   `and`: AND gate
    *   `or`: OR gate
    *   `not`: NOT gate (inverter)
    *   `nand`: NAND gate
    *   `nor`: NOR gate
    *   `xor`: XOR gate
    *   `xnor`: XNOR gate
    *   `buf`: Buffer (non-inverting)
    *   `bufif1`: Tri-state buffer, enabled when control signal is 1
    *   `bufif0`: Tri-state buffer, enabled when control signal is 0
    *   `notif1`: Tri-state inverter, enabled when control signal is 1
    *   `notif0`: Tri-state inverter, enabled when control signal is 0
*   **Syntax (Verilog):**

```verilog
module gate_example (input a, input b, output y1, output y2, output y3);
  and g1 (y1, a, b);  // AND gate: y1 = a AND b
  or  g2 (y2, a, b);  // OR gate:  y2 = a OR b
  not g3 (y3, a);     // NOT gate: y3 = NOT a
endmodule
```

*   **Explanation:**
    *   `and g1 (y1, a, b);`: Creates an instance of an AND gate named `g1`.  `y1` is the output, `a` and `b` are the inputs.  **The output is always listed first.**

**Example:** Implementing a 2-to-1 multiplexer using gate-level primitives.

```verilog
module mux_2to1 (input sel, input d0, input d1, output out);
  wire w1, w2;

  and g1 (w1, d0, ~sel);  // d0 AND (NOT sel)
  and g2 (w2, d1, sel);   // d1 AND sel
  or  g3 (out, w1, w2);   // (d0 AND (NOT sel)) OR (d1 AND sel)
endmodule
```

### 4. User Defined Primitives (UDPs)

*   **UDPs:**  Custom primitives defined by the user using a truth table.  Useful for implementing simple combinational or sequential logic functions that are not readily available as built-in primitives.
*   **Types of UDPs:**
    *   **Combinational UDPs:** Output depends only on the current inputs.
    *   **Sequential UDPs:** Output depends on the current inputs and the previous state (memory elements like flip-flops).
*   **Syntax (Verilog):**

```verilog
primitive my_and (output out, input in1, input in2);
  table
    // in1  in2 : out;
    0    0    : 0;
    0    1    : 0;
    1    0    : 0;
    1    1    : 1;
  endtable
endprimitive

module udp_example (input a, input b, output y);
  my_and u1 (y, a, b);
endmodule
```

*   **Explanation:**
    *   `primitive my_and (output out, input in1, input in2);`: Defines a UDP named `my_and` with one output and two inputs.
    *   `table ... endtable`:  Specifies the truth table for the UDP.  Each line represents a combination of inputs and the corresponding output.  The syntax `in1 in2 : out;` defines the relationship.
    *   **Sequential UDP Syntax:**  Uses `init <initial_state>` to define the initial state of the memory element.  The truth table will include the current state and next state.

**Example: Implementing a simple D latch using a sequential UDP:**

```verilog
primitive d_latch (q, d, enable);
  output q;
  input d, enable;
  reg q; // Required for sequential UDPs - declare the output as a reg
  init 0; // Initialize the output to 0

  table
    // d  enable  : q_current : q_next;
    0    1       : ?         : 0;   // d = 0, enable = 1, output becomes 0
    1    1       : ?         : 1;   // d = 1, enable = 1, output becomes 1
    ?    0       : 0         : 0;   // enable = 0, output remains 0
    ?    0       : 1         : 1;   // enable = 0, output remains 1
  endtable
endprimitive

module latch_example (input din, input en, output qout);
  d_latch l1 (qout, din, en);
endmodule
```

*   **Key Points about UDPs:**
    *   UDPs are generally used for simple logic functions.
    *   UDPs offer a concise way to represent truth tables directly in Verilog.
    *   Sequential UDPs allow for modeling simple memory elements.
    *   For complex logic, more structured HDL code is preferred for readability and maintainability.
    *   The `?` in the truth table represents a "don't care" condition.

### 5. Adding Delay to Primitives

*   **Delay Modeling:**  Adding delays to primitives to simulate the propagation delay of real-world gates.  This makes simulations more realistic and helps identify potential timing issues.
*   **Types of Delays:**
    *   **Rise Delay (trise):** Time taken for the output to transition from low to high (0 to 1).
    *   **Fall Delay (tfall):** Time taken for the output to transition from high to low (1 to 0).
    *   **Turn-off Delay (toff):** Time taken for a tri-state buffer to go into the high-impedance state (Z).
    *   **Minimum, Typical, and Maximum Delays:** Specify a range of possible delay values.  Used for worst-case and best-case timing analysis.
*   **Syntax (Verilog):**

```verilog
module delay_example (input a, input b, output y1, output y2, output y3);
  and #(5) g1 (y1, a, b);     // AND gate with 5 time units delay
  or  #(3, 7) g2 (y2, a, b);   // OR gate with trise=3, tfall=7
  not #(2, 4) g3 (y3, a);     // NOT gate with trise = 2, tfall = 4

  //Min, Typ, Max Delays
  and #(1:3:5) g4 (y4, a,b); //min:typ:max
endmodule
```

*   **Explanation:**
    *   `and #(5) g1 (y1, a, b);`: Creates an AND gate with a delay of 5 time units.  The same delay is applied to both rising and falling transitions.
    *   `or #(3, 7) g2 (y2, a, b);`: Creates an OR gate with a rise delay of 3 and a fall delay of 7.
    *  `and #(1:3:5) g4 (y4, a,b);` Min: 1, Typ: 3, Max: 5.  The simulator will use the typical delay unless configured otherwise to analyze for best/worst case.
*   **Important Notes:**
    *   Delay values are specified in time units defined by the timescale directive (`timescale 1ns/1ps;`).
    *   Adding delays significantly increases simulation time. Use it judiciously.
    *   Real-world gate delays vary depending on factors such as temperature, voltage, and manufacturing process.

**Example:  2-to-1 MUX with gate delays**

```verilog
module mux_2to1_delayed (input sel, input d0, input d1, output out);
  wire w1, w2;

  and #(1) g1 (w1, d0, ~sel);
  and #(1) g2 (w2, d1, sel);
  or  #(2) g3 (out, w1, w2);
endmodule
```

### Practice Questions/Exercises

1.  **Write Verilog code for a 4-bit ripple carry adder using full adder modules instantiated structurally.**
    *   *Answer: You would need to instantiate four full_adder modules, connecting the carry-out of one full adder to the carry-in of the next.*
2.  **Implement a 3-input NAND gate using gate-level primitives (AND and NOT).**
    *   *Answer:*

```verilog
module nand3 (input a, input b, input c, output y);
  wire w1;
  and g1 (w1, a, b, c);
  not g2 (y, w1);
endmodule
```

3.  **Define a UDP for a 2-input XNOR gate.**
    *   *Answer:*

```verilog
primitive my_xnor (output out, input in1, input in2);
  table
    0 0 : 1;
    0 1 : 0;
    1 0 : 0;
    1 1 : 1;
  endtable
endprimitive
```

4.  **Modify the 2-to-1 MUX code to include different rise and fall delays for each gate.**
    * *Answer:* See Example: 2-to-1 MUX with gate delays section of notes.

5.  **What is the primary advantage of structural modeling in HDL?**
    *   *Answer: It allows for the representation of a design as an interconnection of components, making it easier to understand, debug, and reuse design blocks.*

### Important Points to Remember

*   Structural modeling focuses on *how* components are connected.
*   Hierarchy helps manage the complexity of large designs.
*   Gate-level primitives provide a low-level building block approach.
*   UDPs allow for custom logic function definitions using truth tables.
*   Delays are important for realistic simulation and timing analysis.
*   Choose the appropriate modeling style based on the design requirements and the level of abstraction needed.  Behavioral modeling is often preferred for higher-level descriptions, while structural modeling can be useful for implementing specific architectures.
*   Named port connections are preferred for readability and maintainability.

These notes should give you a comprehensive overview of structural design and hierarchy in digital electronics and logic design. Good luck with your studies!
