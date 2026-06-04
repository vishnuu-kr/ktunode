---
title: "Design and implement a combinational logic circuit for arbitrary functions (any two)"
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aed8"
status: "completed"
scrapedAt: "2026-05-20T16:24:18.039Z"
---
# DIGITAL LAB - Module 2: Combinational Logic Circuit Design for Arbitrary Functions

## Topic: Design and Implement a Combinational Logic Circuit for Arbitrary Functions (Any Two)

This module focuses on the design and implementation of combinational logic circuits that can realize any two arbitrary functions. This involves understanding Boolean algebra, truth tables, simplification techniques, and the use of logic gates to create the desired circuit.

### Learning Outcomes:

*   Understand the principles of combinational logic circuits.
*   Be able to represent arbitrary functions using truth tables and Boolean expressions.
*   Apply Boolean algebra and simplification techniques (Karnaugh Maps) to minimize logic functions.
*   Design combinational logic circuits using basic logic gates (AND, OR, NOT, NAND, NOR, XOR, XNOR).
*   Implement and test the designed circuits using appropriate hardware or simulation tools.

### 1. Key Concepts and Definitions

*   **Combinational Logic Circuit:** A digital circuit whose output(s) at any given time depends only on the input(s) at that same time.  No memory elements are involved.
*   **Boolean Algebra:** A mathematical system dealing with binary variables (0 and 1) and logical operations. Key operations include AND, OR, and NOT.
*   **Truth Table:** A table that lists all possible input combinations to a logic circuit and the corresponding output(s) for each combination.
*   **Boolean Expression:** An algebraic representation of a logic function using Boolean variables and operators.
*   **Logic Gates:** Electronic circuits that implement basic Boolean operations. Common gates include AND, OR, NOT (Inverter), NAND, NOR, XOR, and XNOR.
*   **Sum-of-Products (SOP):** A Boolean expression in which the output is expressed as the OR of several AND terms (products).  Each AND term contains literals (variables or their complements).  Also referred to as a disjunctive normal form (DNF).
*   **Product-of-Sums (POS):** A Boolean expression in which the output is expressed as the AND of several OR terms (sums). Each OR term contains literals (variables or their complements). Also referred to as a conjunctive normal form (CNF).
*   **Karnaugh Map (K-Map):** A graphical tool used to simplify Boolean expressions by grouping adjacent 1s (for SOP) or 0s (for POS) in the map.
*   **Minimization:** The process of simplifying a Boolean expression to reduce the number of terms and literals, leading to a simpler and less expensive circuit implementation.
*   **Canonical Form:**  Boolean expressions expressed in standard forms, like standard SOP or standard POS, where each term contains all input variables.  These forms can be directly derived from truth tables.

### 2. Designing Combinational Logic Circuits: A Step-by-Step Approach

1.  **Define the Problem:** Clearly understand the functions you want to implement. State the inputs and outputs and their relationships.
2.  **Create Truth Tables:**  Develop a truth table for *each* function, mapping all possible input combinations to the corresponding output values.
3.  **Derive Boolean Expressions:** From each truth table, derive a Boolean expression.  This can be done using either SOP or POS form.
    *   **SOP:** For each output that is '1', write an AND term of the inputs.  If the input variable is '0', use its complement.  Then, OR all the AND terms together.
    *   **POS:** For each output that is '0', write an OR term of the inputs.  If the input variable is '1', use its complement. Then, AND all the OR terms together.
4.  **Simplify Boolean Expressions:** Use Boolean algebra rules or K-maps to minimize the Boolean expressions. This reduces the number of gates required for implementation.
    *   **Boolean Algebra Rules:**  Apply identities such as A + A' = 1, A + 0 = A, A * 1 = A, etc., to simplify the expressions.
    *   **K-Map Simplification:** Group adjacent 1s (for SOP) or 0s (for POS) in the K-map to form larger terms. Each group represents a simplified term.  Groups must be powers of 2 (1, 2, 4, 8, etc.) and can wrap around the edges of the map.
5.  **Implement the Circuit:** Design the circuit diagram using logic gates based on the simplified Boolean expressions.
6.  **Test and Verify:** Test the circuit using simulation software (e.g., Logisim, Multisim, Tinkercad) or by building it on a breadboard. Verify that the circuit produces the correct outputs for all possible input combinations, according to the truth tables.

### 3. Examples

**Example 1: Designing a 2-bit Comparator and a Half Adder**

Let's design a 2-bit comparator (F1) that outputs '1' if A > B, and a Half Adder (F2) with sum output.  Assume A and B are 2-bit numbers (A = A1A0, B = B1B0).

**Function 1: 2-bit Comparator (A > B)**

1.  **Inputs:** A1, A0, B1, B0
2.  **Output:** F1 (A > B)
3.  **Truth Table:**

    | A1 | A0 | B1 | B0 | F1 (A > B) |
    |----|----|----|----|-------------|
    | 0  | 0  | 0  | 0  | 0           |
    | 0  | 0  | 0  | 1  | 0           |
    | 0  | 0  | 1  | 0  | 0           |
    | 0  | 0  | 1  | 1  | 0           |
    | 0  | 1  | 0  | 0  | 1           |
    | 0  | 1  | 0  | 1  | 0           |
    | 0  | 1  | 1  | 0  | 0           |
    | 0  | 1  | 1  | 1  | 0           |
    | 1  | 0  | 0  | 0  | 1           |
    | 1  | 0  | 0  | 1  | 1           |
    | 1  | 0  | 1  | 0  | 0           |
    | 1  | 0  | 1  | 1  | 0           |
    | 1  | 1  | 0  | 0  | 1           |
    | 1  | 1  | 0  | 1  | 1           |
    | 1  | 1  | 1  | 0  | 1           |
    | 1  | 1  | 1  | 1  | 0           |

4.  **Boolean Expression (SOP):**
    F1 = A1'A0B1'B0' + A1'A0B1'B0 + A1B0'B1'B0' + A1B0'B1'B0 + A1B1'A0'B0' + A1A0'B1'B0 + A1A0B1'B0'

5.  **K-Map Simplification:** (Difficult with 4 variables - consider using a tool or Quine-McCluskey)

    *After K-Map simplification (which is complex here), the simplified expression is:*

    F1 = A1B1' + A1A0B0' + A0B0'B1'  (Approximate simplification - actual minimal form could vary slightly).

**Function 2: Half Adder (Sum)**

1.  **Inputs:** A, B
2.  **Output:** Sum (S)
3.  **Truth Table:**

    | A | B | S |
    |---|---|---|
    | 0 | 0 | 0 |
    | 0 | 1 | 1 |
    | 1 | 0 | 1 |
    | 1 | 1 | 0 |

4.  **Boolean Expression (SOP):**  S = A'B + AB'

5.  **Simplified Expression:** S = A XOR B

**Implementation:** You would now implement these simplified Boolean expressions using logic gates (AND, OR, NOT, XOR) in a circuit diagram.

**Example 2: Implementing F = A XOR B XOR C and G = (A AND B) OR C**

1.  **Functions:**
    *   F = A XOR B XOR C
    *   G = (A AND B) OR C

2.  **Truth Tables:**

    | A | B | C | F (A XOR B XOR C) | G ((A AND B) OR C) |
    |---|---|---|----------------------|---------------------|
    | 0 | 0 | 0 | 0                    | 0                   |
    | 0 | 0 | 1 | 1                    | 1                   |
    | 0 | 1 | 0 | 1                    | 0                   |
    | 0 | 1 | 1 | 0                    | 1                   |
    | 1 | 0 | 0 | 1                    | 0                   |
    | 1 | 0 | 1 | 0                    | 1                   |
    | 1 | 1 | 0 | 0                    | 1                   |
    | 1 | 1 | 1 | 1                    | 1                   |

3.  **Boolean Expressions:**
    *   F = A'B'C + A'BC' + AB'C' + ABC
    *   G = A'B'C + A'BC + AB'C + ABC + ABC'  (Derived directly from the truth table - but already in a convenient form based on the initial expression)

4.  **Simplification:**
    *   F = A XOR B XOR C  (Already simplified - this is the definition of XOR)
    *   G = (A AND B) OR C  (Already simplified - no further reduction needed)

5.  **Implementation:** The logic circuit is directly implemented using XOR, AND, and OR gates based on the simplified expressions.

### 4. Practice Questions/Exercises

1.  **Design a combinational circuit that accepts two 2-bit binary numbers (A1A0 and B1B0) as input and outputs '1' if A1A0 is equal to B1B0, and '0' otherwise.**

    *   **Answer:**  Create the truth table. The output is 1 when A1=B1 AND A0=B0. This translates to the Boolean Expression:  (A1'B1' + A1B1) AND (A0'B0' + A0B0). This can be implemented using XNOR gates and an AND gate.

2.  **Design a combinational circuit that implements the following two functions:**

    *   F1(A, B, C) = A'BC + AB'C + ABC'
    *   F2(A, B, C) = A + B'C

    *   **Answer:** Create separate truth tables for F1 and F2. Simplify F1 (if possible, it is already near minimal form).  Simplify F2 (K-map or Boolean algebra can be used, no major simplification needed).  Implement the simplified expressions using logic gates. Notice that some terms (like A and C) might be shared between the two functions, so consider reusing them in the circuit to minimize the number of gates needed.

3.  **Simplify the following Boolean expression using a K-Map: F(A, B, C, D) = Σm(0, 2, 4, 5, 6, 7, 8, 10, 13, 15)**

    *   **Answer:** Draw the K-Map.  Group the 1s.  The simplified expression will be F = B'D' + CD + A'B'

### 5. Important Points to Remember

*   **Truth tables are essential:**  They are the foundation for designing any combinational circuit.
*   **Minimization is key:** Simplified expressions lead to simpler, cheaper, and faster circuits.
*   **Understand the limitations of K-maps:** They are practical for up to 5 variables. For more variables, consider using computer-aided design (CAD) tools or the Quine-McCluskey algorithm.
*   **DeMorgan's Theorem:** This is a powerful tool for manipulating Boolean expressions and can be useful for implementing circuits using only NAND or NOR gates.  A' + B' = (A.B)' and A'.B' = (A+B)'.
*   **Universal Gates:** NAND and NOR gates are called universal gates because any Boolean function can be implemented using only NAND gates or only NOR gates. This is useful in situations where you only have one type of gate available.
*   **Testing is critical:**  Always test your designed circuits thoroughly to ensure they meet the required specifications.
