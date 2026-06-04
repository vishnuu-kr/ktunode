---
title: "Half adder, full adder, half subtractor, full subtractor"
subject: "DIGITAL LAB"
module: "Module 2: Design and implement a combinational logic circuit for arbitrary functions (any two)"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8aeda"
status: "completed"
scrapedAt: "2026-05-20T16:24:19.446Z"
---
## DIGITAL LAB - Module 2: Combinational Logic Circuits

### Topic: Half Adder, Full Adder, Half Subtractor, Full Subtractor

**Description:**  This module focuses on designing and implementing combinational logic circuits for arbitrary functions. This section delves into the fundamental building blocks of arithmetic circuits: Half Adders, Full Adders, Half Subtractors, and Full Subtractors.  We will explore their logic gates, truth tables, and equations, ultimately enabling you to design and implement these circuits.

**Learning Outcomes:**

*   Understand the functionality and truth tables of half adders, full adders, half subtractors, and full subtractors.
*   Derive the Boolean expressions for the sum, carry, difference, and borrow outputs.
*   Design and implement these circuits using basic logic gates (AND, OR, XOR, NOT).
*   Analyze and compare the differences between adders and subtractors.
*   Simulate and test the designed circuits.

---

### 1. Key Concepts and Definitions

*   **Combinational Logic Circuit:** A digital circuit whose output(s) at any instant of time depends only on the input(s) present at that instant. It has no memory elements.
*   **Adder:** A digital circuit that performs the addition of two or more binary digits.
*   **Subtractor:** A digital circuit that performs the subtraction of two binary digits.
*   **Half Adder:** A combinational logic circuit that adds two single-bit binary numbers and produces a sum and a carry.
*   **Full Adder:** A combinational logic circuit that adds three single-bit binary numbers (two input bits and a carry-in) and produces a sum and a carry-out.
*   **Half Subtractor:** A combinational logic circuit that subtracts two single-bit binary numbers and produces a difference and a borrow.
*   **Full Subtractor:** A combinational logic circuit that subtracts two single-bit binary numbers and a borrow-in and produces a difference and a borrow-out.
*   **Truth Table:** A table that shows all possible input combinations and their corresponding output values for a logic circuit.
*   **Boolean Expression:** A mathematical expression that describes the relationship between inputs and outputs in a logic circuit using Boolean algebra.
*   **Logic Gates:** Basic electronic circuits that implement fundamental Boolean operations (AND, OR, NOT, XOR, etc.).

---

### 2. Half Adder

*   **Functionality:** Adds two single-bit binary numbers (A and B).
*   **Outputs:**
    *   **Sum (S):** The sum of A and B.
    *   **Carry (C):** The carry-out generated when the sum is greater than 1.
*   **Truth Table:**

    | A | B | S | C |
    |---|---|---|---|
    | 0 | 0 | 0 | 0 |
    | 0 | 1 | 1 | 0 |
    | 1 | 0 | 1 | 0 |
    | 1 | 1 | 0 | 1 |

*   **Boolean Expressions:**
    *   S = A ⊕ B  (A XOR B)
    *   C = A ⋅ B  (A AND B)
*   **Logic Gate Implementation:** The Half Adder can be implemented using one XOR gate and one AND gate.

    ```
    A ---- XOR ---- S
    |
    AND ---- C
    |
    B ----
    ```
*   **Diagram:** (Illustrative - actual diagram will vary depending on the drawing tool used). Imagine A and B lines entering, XOR gate outputs to S, and AND gate outputs to C.
*   **Example:**
    *   A = 1, B = 0: S = 1, C = 0
    *   A = 1, B = 1: S = 0, C = 1

---

### 3. Full Adder

*   **Functionality:** Adds three single-bit binary numbers (A, B, and Carry-In (Cin)).
*   **Outputs:**
    *   **Sum (S):** The sum of A, B, and Cin.
    *   **Carry-Out (Cout):** The carry-out generated when the sum is greater than 1.
*   **Truth Table:**

    | A | B | Cin | S | Cout |
    |---|---|-----|---|------|
    | 0 | 0 | 0   | 0 | 0    |
    | 0 | 0 | 1   | 1 | 0    |
    | 0 | 1 | 0   | 1 | 0    |
    | 0 | 1 | 1   | 0 | 1    |
    | 1 | 0 | 0   | 1 | 0    |
    | 1 | 0 | 1   | 0 | 1    |
    | 1 | 1 | 0   | 0 | 1    |
    | 1 | 1 | 1   | 1 | 1    |

*   **Boolean Expressions:**
    *   S = A ⊕ B ⊕ Cin
    *   Cout = (A ⋅ B) + (Cin ⋅ (A ⊕ B))
*   **Logic Gate Implementation:** The Full Adder can be implemented using two XOR gates, two AND gates, and one OR gate.  It can also be implemented using two Half Adders and one OR gate.

    ```
    A ---- XOR1 ----
          |           |
          |           XOR2 ---- S
          |           |
    B ----           |
          |           |
          AND1--------+
          |           |
          Cin---AND2--+--- OR ---- Cout
    ```

*   **Diagram:** (Illustrative - actual diagram will vary depending on the drawing tool used).  Imagine two Half Adders, one adding A and B, the other adding the result to Cin. An OR gate combines the carries from both Half Adders to produce Cout.
*   **Example:**
    *   A = 1, B = 0, Cin = 1: S = 0, Cout = 1
    *   A = 1, B = 1, Cin = 0: S = 0, Cout = 1

---

### 4. Half Subtractor

*   **Functionality:** Subtracts two single-bit binary numbers (A and B).
*   **Outputs:**
    *   **Difference (D):** The result of A - B.
    *   **Borrow (B):** The borrow generated when A < B.
*   **Truth Table:**

    | A | B | D | B |
    |---|---|---|---|
    | 0 | 0 | 0 | 0 |
    | 0 | 1 | 1 | 1 |
    | 1 | 0 | 1 | 0 |
    | 1 | 1 | 0 | 0 |

*   **Boolean Expressions:**
    *   D = A ⊕ B  (A XOR B)
    *   B = A' ⋅ B  (NOT A AND B)
*   **Logic Gate Implementation:** The Half Subtractor can be implemented using one XOR gate and one AND gate with an inverter.

    ```
    A ---- XOR ---- D
    |
    NOT--AND ---- B
    |
    B ----
    ```

*   **Diagram:** (Illustrative - actual diagram will vary depending on the drawing tool used). Imagine A and B lines entering, XOR gate outputs to D, A inverts and then ANDed with B outputs to B.
*   **Example:**
    *   A = 0, B = 1: D = 1, B = 1
    *   A = 1, B = 0: D = 1, B = 0

---

### 5. Full Subtractor

*   **Functionality:** Subtracts two single-bit binary numbers (A and B) and a Borrow-In (Bin).
*   **Outputs:**
    *   **Difference (D):** The result of A - B - Bin.
    *   **Borrow-Out (Bout):** The borrow generated when A < (B + Bin).
*   **Truth Table:**

    | A | B | Bin | D | Bout |
    |---|---|-----|---|------|
    | 0 | 0 | 0   | 0 | 0    |
    | 0 | 0 | 1   | 1 | 1    |
    | 0 | 1 | 0   | 1 | 1    |
    | 0 | 1 | 1   | 0 | 1    |
    | 1 | 0 | 0   | 1 | 0    |
    | 1 | 0 | 1   | 0 | 0    |
    | 1 | 1 | 0   | 0 | 0    |
    | 1 | 1 | 1   | 1 | 1    |

*   **Boolean Expressions:**
    *   D = A ⊕ B ⊕ Bin
    *   Bout = (A' ⋅ B) + (Bin ⋅ (A' ⊕ B))
*   **Logic Gate Implementation:** The Full Subtractor can be implemented using two XOR gates, two AND gates, two NOT gates, and one OR gate. It can also be implemented using two Half Subtractors and one OR gate.

    ```
    A ---- XOR1 ----
          |           |
          |           XOR2 ---- D
          |           |
    B ----           |
          |           |
    NOT--AND1--------+
    |     |           |
    Bin--NOT--AND2--+--- OR ---- Bout
    ```

*   **Diagram:** (Illustrative - actual diagram will vary depending on the drawing tool used).  Imagine two Half Subtractors, one subtracting A and B, the other subtracting the result from Bin. An OR gate combines the borrows from both Half Subtractors to produce Bout.
*   **Example:**
    *   A = 0, B = 1, Bin = 0: D = 1, Bout = 1
    *   A = 1, B = 1, Bin = 1: D = 1, Bout = 1

---

### 6. Analysis and Comparison

| Feature          | Half Adder | Full Adder | Half Subtractor | Full Subtractor |
|------------------|------------|------------|-----------------|-------------------|
| Inputs          | 2          | 3          | 2               | 3                 |
| Outputs         | 2          | 2          | 2               | 2                 |
| Carry/Borrow In   | No         | Yes        | No              | Yes               |
| Used for         | Single-bit addition | Multi-bit addition  | Single-bit subtraction | Multi-bit subtraction |
| Primary Function | Adds two bits  | Adds three bits | Subtracts two bits | Subtracts two bits & Borrow |

**Key Differences:**

*   Full Adders/Subtractors handle carry/borrow-in from previous stages, making them suitable for multi-bit arithmetic.  Half Adders/Subtractors are only suitable for single-bit operations.
*   The complexity of the circuit increases from Half to Full versions due to the handling of the carry/borrow input.

---

### 7. Important Points to Remember

*   Understand the truth tables thoroughly. They are the foundation for designing and analyzing these circuits.
*   Be able to derive the Boolean expressions from the truth tables using techniques like Karnaugh maps (K-maps) or Boolean algebra simplification.
*   Recognize that Full Adders and Full Subtractors are built from Half Adders/Subtractors and additional logic gates.
*   Pay close attention to the carry/borrow propagation in multi-bit addition/subtraction.  Full adders/subtractors are essential for this.
*   Practice implementing these circuits using different logic gates (e.g., using only NAND gates or NOR gates).
*   Simulation software can be incredibly useful for verifying the functionality of your designs before physical implementation.

---

### 8. Practice Questions/Exercises

**1. Design a 4-bit adder using full adders.**

**Answer:**  A 4-bit adder requires four full adders. The carry-out of each full adder is connected to the carry-in of the next higher-order full adder. The carry-in of the least significant bit (LSB) full adder can be set to 0 for simple addition, or it can be used as an additional input.

**2. Simplify the Boolean expression for the Carry-Out of a Full Adder using a Karnaugh Map (K-map).**

**Answer:**
The Cout Boolean expression is:  Cout = (A ⋅ B) + (Cin ⋅ (A ⊕ B))

Truth table from before:

| A | B | Cin | Cout |
|---|---|-----|------|
| 0 | 0 | 0   | 0    |
| 0 | 0 | 1   | 0    |
| 0 | 1 | 0   | 0    |
| 0 | 1 | 1   | 1    |
| 1 | 0 | 0   | 0    |
| 1 | 0 | 1   | 1    |
| 1 | 1 | 0   | 1    |
| 1 | 1 | 1   | 1    |

K-Map:

```
      BC\A  |  0  |  1  |
      ------|-----|-----|
      00    |  0  |  0  |
      01    |  1  |  1  |
      11    |  1  |  1  |
      10    |  0  |  1  |
```

From the K-map, we can derive the simplified expression:

Cout = AB + BCin + ACin

**3.  Implement a Half Subtractor using only NAND gates.**

**Answer:**

*   **Original Equations:**
    *   D = A ⊕ B = A'B + AB'
    *   B = A'B

*   **Implementing XOR using NAND Gates:**  A ⊕ B = (A NAND (A NAND B)) NAND (B NAND (A NAND B))

*   **Implementing A'B using NAND Gates:** A'B = (A NAND B) NAND (A NAND A) (Since A NAND A = A')

This demonstrates the implementation using NAND gates, involving intermediate steps to achieve the desired XOR and AND-NOT functionality.

**4. Design a circuit that adds two 2-bit numbers (A1A0 and B1B0) and produces a 3-bit sum (S2S1S0).**

**Answer:**
You'll need two Full Adders.

*   **LSB (Least Significant Bit):** Use a Half Adder to add A0 and B0, producing S0 and a carry C0.
*   **MSB (Most Significant Bit):** Use a Full Adder with inputs A1, B1, and C0 (the carry from the Half Adder). This generates S1 and a carry-out C1.
*   **Most Significant Bit of Sum:**  S2 is the carry-out C1 from the Full Adder.

Thus:

*   S0 = A0 XOR B0
*   C0 = A0 AND B0
*   S1 = A1 XOR B1 XOR C0
*   C1 = (A1 AND B1) OR (C0 AND (A1 XOR B1))
*   S2 = C1

**5. Explain the limitations of a half adder and how a full adder overcomes them.**

**Answer:**

The primary limitation of a Half Adder is that it can only add two single bits. It lacks the capability to handle a carry-in from a previous addition stage.  This makes it unsuitable for adding multi-bit binary numbers.

A Full Adder overcomes this limitation by including a carry-in (Cin) input. This allows it to add three single bits (A, B, and Cin), making it suitable for building multi-bit adders where each stage needs to account for the carry from the previous stage.

---

These detailed notes cover the fundamentals of Half Adders, Full Adders, Half Subtractors, and Full Subtractors, enabling you to understand, design, and implement these essential building blocks of digital arithmetic circuits. Remember to practice regularly and utilize simulation tools to solidify your understanding. Good luck!
