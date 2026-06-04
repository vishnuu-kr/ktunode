---
title: "Model a given Boolean function (SOP and POS) in Verilog using"
subject: "DIGITAL LAB"
module: "Module 1: Study of basic digital ICs and verification of Boolean theorems using digital logic gates."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aed3"
status: "completed"
scrapedAt: "2026-05-20T16:24:15.245Z"
---
## DIGITAL LAB: Module 1 - Modeling Boolean Functions in Verilog

**Topic:** Modeling a given Boolean function (SOP and POS) in Verilog

**Learning Outcomes:**

*   Understand the Sum-of-Products (SOP) and Product-of-Sums (POS) forms of Boolean expressions.
*   Be able to convert a Boolean expression into SOP and POS forms.
*   Learn to model Boolean functions represented in SOP form using Verilog.
*   Learn to model Boolean functions represented in POS form using Verilog.
*   Understand how to test the Verilog models for correctness using test benches.

### 1. Introduction to Boolean Algebra and Logic Gates

*   **Boolean Algebra:** A mathematical system dealing with binary variables (0 and 1) and logical operations (AND, OR, NOT).

*   **Logic Gates:** Electronic circuits that implement Boolean functions. Common gates include:
    *   **AND:** Output is 1 only if all inputs are 1.
    *   **OR:** Output is 1 if at least one input is 1.
    *   **NOT:** Output is the inverse of the input.
    *   **NAND:** AND followed by NOT (NOT-AND).
    *   **NOR:** OR followed by NOT (NOT-OR).
    *   **XOR:** Output is 1 if inputs are different.
    *   **XNOR:** Output is 1 if inputs are the same.

*   **Truth Tables:** A table listing all possible input combinations and their corresponding outputs for a logic gate or Boolean function.

### 2. Sum-of-Products (SOP) Form

*   **Definition:** A Boolean expression written as the ORing of several AND terms (product terms).  Each AND term consists of variables or their complements (literals).

*   **Example:** `F = (A AND B) OR (NOT A AND C) OR (B AND NOT C)` which can be written as `F = AB + A'C + BC'` (where '+' denotes OR, and ' denotes NOT).

*   **Min Term:** A product term that contains each variable in either complemented or uncomplemented form exactly once. For 'n' variables, there are 2^n min terms.

*   **Canonical SOP:** An SOP expression where each product term is a min term.
    *   **Example:** `F(A, B, C) = A'B'C + A'BC + AB'C + ABC`

### 3. Product-of-Sums (POS) Form

*   **Definition:** A Boolean expression written as the ANDing of several OR terms (sum terms). Each OR term consists of variables or their complements (literals).

*   **Example:** `F = (A OR B) AND (NOT A OR C) AND (B OR NOT C)` which can be written as `F = (A+B)(A'+C)(B+C')`

*   **Max Term:** A sum term that contains each variable in either complemented or uncomplemented form exactly once.  For 'n' variables, there are 2^n max terms.

*   **Canonical POS:** A POS expression where each sum term is a max term.
    *   **Example:** `F(A, B, C) = (A+B+C)(A+B+C')(A+B'+C)(A'+B+C)`

### 4. Converting Boolean Expressions to SOP and POS

*   **SOP Conversion:**
    1.  Simplify the expression (if needed) using Boolean algebra laws.
    2.  Identify the product terms.
    3.  For each product term, if a variable is missing, AND the term with `(X + X')` where X is the missing variable.  Expand using distributive law.
    4.  Repeat step 3 until all product terms contain all variables.
    5.  Remove duplicate terms.

*   **POS Conversion:**
    1.  Simplify the expression (if needed) using Boolean algebra laws.
    2.  Identify the sum terms.
    3.  For each sum term, if a variable is missing, OR the term with `(X * X')` where X is the missing variable. Expand using distributive law.
    4.  Repeat step 3 until all sum terms contain all variables.
    5.  Remove duplicate terms.

*   **Conversion between SOP and POS:** Use DeMorgan's Theorem. `(AB)' = A' + B'` and `(A+B)' = A'B'`.

### 5. Modeling SOP Functions in Verilog

*   **Verilog Operators:**
    *   `&`  : AND
    *   `|`  : OR
    *   `~`  : NOT
    *   `^`  : XOR
    *   `~^` or `^~` : XNOR

*   **Verilog Module Structure:**

```verilog
module SOP_Function (input A, input B, input C, output F);

  // Declare internal wires if needed
  wire term1, term2, term3;

  // Implement each AND term
  assign term1 = A & B;
  assign term2 = ~A & C;
  assign term3 = B & ~C;

  // OR the AND terms to get the final output
  assign F = term1 | term2 | term3;

endmodule
```

*   **Simplified Version using `assign` directly:**

```verilog
module SOP_Function (input A, input B, input C, output F);

  assign F = (A & B) | (~A & C) | (B & ~C);

endmodule
```

*   **Example:** Model the SOP expression `F = AB + A'C + BC'` in Verilog.

```verilog
module sop_example (input A, input B, input C, output F);

  assign F = (A & B) | (~A & C) | (B & ~C);

endmodule
```

### 6. Modeling POS Functions in Verilog

*   **Verilog Module Structure:**

```verilog
module POS_Function (input A, input B, input C, output F);

  // Declare internal wires if needed
  wire sum1, sum2, sum3;

  // Implement each OR term
  assign sum1 = A | B;
  assign sum2 = ~A | C;
  assign sum3 = B | ~C;

  // AND the OR terms to get the final output
  assign F = sum1 & sum2 & sum3;

endmodule
```

*   **Simplified Version using `assign` directly:**

```verilog
module POS_Function (input A, input B, input C, output F);

  assign F = (A | B) & (~A | C) & (B | ~C);

endmodule
```

*   **Example:** Model the POS expression `F = (A+B)(A'+C)(B+C')` in Verilog.

```verilog
module pos_example (input A, input B, input C, output F);

  assign F = (A | B) & (~A | C) & (B | ~C);

endmodule
```

### 7. Test Benches for Verilog Models

*   **Purpose:** Verify the functionality of the Verilog module by applying a set of input stimuli and checking the output against expected values.

*   **Basic Structure:**

```verilog
module testbench;

  // Declare signals to connect to the module
  reg A, B, C; // Inputs are declared as 'reg'
  wire F;      // Output is declared as 'wire'

  // Instantiate the module under test (UUT - Unit Under Test)
  sop_example UUT (
    .A(A),
    .B(B),
    .C(C),
    .F(F)
  );

  // Stimulus block - generates input patterns
  initial begin
    // Initialize inputs
    A = 0;
    B = 0;
    C = 0;

    // Apply input combinations and wait for a specific time
    #10 A = 0; B = 0; C = 1;
    #10 A = 0; B = 1; C = 0;
    #10 A = 0; B = 1; C = 1;
    #10 A = 1; B = 0; C = 0;
    #10 A = 1; B = 0; C = 1;
    #10 A = 1; B = 1; C = 0;
    #10 A = 1; B = 1; C = 1;
    #10 $finish; // End simulation
  end

  // Optional: Display the results
  initial begin
    $monitor("A=%b, B=%b, C=%b, F=%b", A, B, C, F);
  end

endmodule
```

*   **Explanation:**
    *   **`reg` and `wire`:** `reg` is used for signals that are assigned values in a procedural block (e.g., `initial` or `always`).  `wire` is used for signals that are driven by continuous assignments (e.g., `assign`).
    *   **Instantiation:**  `sop_example UUT (...)` creates an instance of the `sop_example` module.  The `.` notation connects the signals in the testbench to the ports of the module.  For example, `.A(A)` connects the testbench signal `A` to the module's input port `A`.
    *   **Stimulus Block:** The `initial` block generates the input patterns. The `#10` delays the simulation by 10 time units (the unit is defined in the simulator settings).
    *   **`$monitor`:** Displays the values of the signals during simulation.
    *   **`$finish`:** Terminates the simulation.

*   **Verification:** Compare the simulated output `F` with the expected output based on the truth table of the Boolean function.

### 8. Key Points to Remember

*   Verilog is case-sensitive.
*   `assign` statements are used for continuous assignments.
*   Test benches are crucial for verifying the correctness of your Verilog models.
*   Understand the difference between `reg` and `wire` data types in Verilog.
*   Always initialize `reg` signals in the testbench.
*   Use meaningful names for signals and modules.
*   Simulation time is specified using the `#` operator.

### 9. Practice Questions/Exercises

1.  **Convert the following Boolean expression to SOP form:**  `F = A(B + C)`
    *   **Answer:**  `F = AB + AC`

2.  **Convert the following Boolean expression to POS form:** `F = A + BC`
    *   **Answer:** `F = (A+B)(A+C)`

3.  **Model the Boolean function `F = (A'B + C)` in Verilog.**

```verilog
module function_example (input A, input B, input C, output F);

  assign F = (~A & B) | C;

endmodule
```

4.  **Write a test bench for the Verilog module in question 3 to verify its functionality.**

```verilog
module testbench;
  reg A, B, C;
  wire F;

  function_example UUT (
    .A(A),
    .B(B),
    .C(C),
    .F(F)
  );

  initial begin
    A = 0; B = 0; C = 0;
    #10 A = 0; B = 0; C = 1;
    #10 A = 0; B = 1; C = 0;
    #10 A = 0; B = 1; C = 1;
    #10 A = 1; B = 0; C = 0;
    #10 A = 1; B = 0; C = 1;
    #10 A = 1; B = 1; C = 0;
    #10 A = 1; B = 1; C = 1;
    #10 $finish;
  end

  initial begin
    $monitor("A=%b, B=%b, C=%b, F=%b", A, B, C, F);
  end

endmodule
```

5.  **What is the difference between a minterm and a maxterm?**
    *   **Answer:** A minterm is a product term that contains each variable in either complemented or uncomplemented form exactly once. A maxterm is a sum term that contains each variable in either complemented or uncomplemented form exactly once.  A minterm evaluates to 1 for only one combination of inputs, while a maxterm evaluates to 0 for only one combination of inputs.

By understanding these concepts and practicing with examples, you will be able to effectively model Boolean functions in Verilog and verify their correctness using test benches.  Good luck!
