---
title: "Digital Building Blocks - Arithmetic Circuits - Half adder, Full adder, half subtractor, full subtractor"
subject: "DIGITAL ELECTRONICS AND LOGIC DESIGN"
module: "Module 3: MSI Logic and Digital Building Blocks"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ad5a"
status: "completed"
scrapedAt: "2026-05-20T16:23:56.721Z"
---
# DIGITAL ELECTRONICS AND LOGIC DESIGN - Module 3: MSI Logic and Digital Building Blocks

## Topic: Digital Building Blocks - Arithmetic Circuits - Half Adder, Full Adder, Half Subtractor, Full Subtractor

**Learning Outcomes:**

*   Understand the function and operation of half adders and full adders.
*   Understand the function and operation of half subtractors and full subtractors.
*   Derive the truth tables, logical expressions, and implement logic circuits for half adders, full adders, half subtractors, and full subtractors.
*   Explain the limitations of half adders and half subtractors.
*   Apply adders and subtractors in simple arithmetic circuits.

---

### 1. Introduction to Arithmetic Circuits

*   Arithmetic circuits are fundamental digital circuits that perform arithmetic operations like addition and subtraction on binary numbers.
*   These circuits are essential building blocks in more complex digital systems such as calculators, computers, and digital signal processors.
*   We will cover four basic arithmetic circuits: half adder, full adder, half subtractor, and full subtractor.

### 2. Half Adder

*   **Definition:** A half adder is a combinational logic circuit that performs the addition of two single-bit binary numbers. It produces two outputs: a *sum* bit (S) and a *carry* bit (C).
*   **Limitations:** It can only add two bits. It cannot handle a carry-in from a previous stage, making it unsuitable for multi-bit addition.

*   **Truth Table:**

    | A | B | Sum (S) | Carry (C) |
    |---|---|---------|-----------|
    | 0 | 0 | 0       | 0         |
    | 0 | 1 | 1       | 0         |
    | 1 | 0 | 1       | 0         |
    | 1 | 1 | 0       | 1         |

*   **Logical Expressions:**

    *   Sum (S) = A XOR B  (S = A'B + AB')
    *   Carry (C) = A AND B (C = AB)

*   **Logic Circuit Implementation:**

    *   The sum can be implemented using an XOR gate.
    *   The carry can be implemented using an AND gate.

    ```
    A ---- XOR ---- Sum (S)
    |
    AND ---- Carry (C)
    |
    B ----
    ```

*   **Key Concepts:**

    *   Half adders are the simplest form of binary adders.
    *   The XOR gate produces a '1' output only when inputs are different.
    *   The AND gate produces a '1' output only when both inputs are '1'.

### 3. Full Adder

*   **Definition:** A full adder is a combinational logic circuit that performs the addition of three single-bit binary numbers: two input bits (A and B) and a carry-in bit (Cin) from a previous stage. It produces two outputs: a *sum* bit (S) and a *carry-out* bit (Cout).
*   **Advantage:**  Handles carry-in from previous stages, making it suitable for multi-bit addition.

*   **Truth Table:**

    | A | B | Cin | Sum (S) | Cout |
    |---|---|-----|---------|------|
    | 0 | 0 | 0   | 0       | 0    |
    | 0 | 0 | 1   | 1       | 0    |
    | 0 | 1 | 0   | 1       | 0    |
    | 0 | 1 | 1   | 0       | 1    |
    | 1 | 0 | 0   | 1       | 0    |
    | 1 | 0 | 1   | 0       | 1    |
    | 1 | 1 | 0   | 0       | 1    |
    | 1 | 1 | 1   | 1       | 1    |

*   **Logical Expressions:**

    *   Sum (S) = A XOR B XOR Cin
    *   Carry-out (Cout) = (A AND B) OR (Cin AND (A XOR B))  or  AB + Cin(A XOR B)

*   **Logic Circuit Implementation:**

    *   The sum can be implemented using two XOR gates.
    *   The carry-out can be implemented using AND and OR gates based on the logical expression. It can also be implemented using two half adders and an OR gate.

    ```
    A ---- XOR ---- (A XOR B)---- XOR ---- Sum (S)
    |                     |
    B ---- XOR ----       |
    |                     AND ----
    Cin------------------->OR ---- Carry-out (Cout)
                           |
                           (A XOR B)
    ```

    OR

    ```
    A ---- Half Adder 1 ---- Sum 1 ---- XOR(Cin) ---- S
    |                    |
    B ----            Carry 1
    |                    |
    Cin------------------->Half Adder 2----> Carry 2
                           |
                           OR(Carry 1, Carry 2) ---- Cout

    ```

*   **Key Concepts:**

    *   Full adders are essential for building multi-bit adders.
    *   The carry-out bit from one full adder can be used as the carry-in bit for the next higher-order full adder (ripple carry adder).

### 4. Half Subtractor

*   **Definition:** A half subtractor is a combinational logic circuit that performs the subtraction of two single-bit binary numbers. It produces two outputs: a *difference* bit (D) and a *borrow* bit (B).
*   **Limitations:** It can only subtract two bits. It cannot handle a borrow-in from a previous stage, making it unsuitable for multi-bit subtraction.

*   **Truth Table:**

    | A | B | Difference (D) | Borrow (B) |
    |---|---|------------------|------------|
    | 0 | 0 | 0                | 0          |
    | 0 | 1 | 1                | 1          |
    | 1 | 0 | 1                | 0          |
    | 1 | 1 | 0                | 0          |

*   **Logical Expressions:**

    *   Difference (D) = A XOR B (D = A'B + AB')
    *   Borrow (B) = A' AND B (B = A'B)

*   **Logic Circuit Implementation:**

    *   The difference can be implemented using an XOR gate.
    *   The borrow can be implemented using an AND gate with one input inverted.

    ```
    A ---- XOR ---- Difference (D)
    |
    NOT---- AND ---- Borrow (B)
    |
    B ----
    ```

*   **Key Concepts:**

    *   Half subtractors are the simplest form of binary subtractors.
    *   The borrow bit indicates that a '1' must be borrowed from the next higher-order bit position.

### 5. Full Subtractor

*   **Definition:** A full subtractor is a combinational logic circuit that performs the subtraction of three single-bit binary numbers: two input bits (A and B) and a borrow-in bit (Bin) from a previous stage. It produces two outputs: a *difference* bit (D) and a *borrow-out* bit (Bout).
*   **Advantage:**  Handles borrow-in from previous stages, making it suitable for multi-bit subtraction.

*   **Truth Table:**

    | A | B | Bin | Difference (D) | Bout |
    |---|---|-----|------------------|------|
    | 0 | 0 | 0   | 0                | 0    |
    | 0 | 0 | 1   | 1                | 1    |
    | 0 | 1 | 0   | 1                | 1    |
    | 0 | 1 | 1   | 0                | 1    |
    | 1 | 0 | 0   | 1                | 0    |
    | 1 | 0 | 1   | 0                | 0    |
    | 1 | 1 | 0   | 0                | 0    |
    | 1 | 1 | 1   | 1                | 1    |

*   **Logical Expressions:**

    *   Difference (D) = A XOR B XOR Bin
    *   Borrow-out (Bout) = (A' AND B) OR (Bin AND (A XOR B)') or A'B + Bin(A XOR B)'

*   **Logic Circuit Implementation:**

    *   The difference can be implemented using two XOR gates.
    *   The borrow-out can be implemented using AND, OR and NOT gates based on the logical expression.  It can also be implemented using two half subtractors and an OR gate.

    ```
    A ---- XOR ---- (A XOR B)---- XOR ---- Difference (D)
    |                     |
    B ---- XOR ----       |
    |                     NOT---- AND ----
    Bin------------------->OR ---- Borrow-out (Bout)
                           |
                           (A XOR B)'
    ```

    OR

     ```
    A ---- Half Subtractor 1 ---- Difference 1 ---- XOR(Bin) ---- D
    |                    |
    B ----            Borrow 1
    |                    |
    Bin------------------->Half Subtractor 2----> Borrow 2
                           |
                           OR(Borrow 1, Borrow 2) ---- Bout

    ```

*   **Key Concepts:**

    *   Full subtractors are essential for building multi-bit subtractors.
    *   The borrow-out bit from one full subtractor can be used as the borrow-in bit for the next higher-order full subtractor (ripple borrow subtractor).

### 6.  Ripple Carry Adder/Subtractor (Multi-bit adder/subtractor)

*   Multi-bit addition or subtraction can be achieved by cascading full adders or full subtractors respectively.

*   **Ripple Carry Adder:**  Several full adders are cascaded to add multi-bit numbers. The carry-out (Cout) of one full adder stage is connected to the carry-in (Cin) of the next higher-order stage.  This type of adder is known as a *ripple carry adder* because the carry bit ripples through the adder stages.

*   **Ripple Borrow Subtractor:** Several full subtractors are cascaded to subtract multi-bit numbers. The borrow-out (Bout) of one full subtractor stage is connected to the borrow-in (Bin) of the next higher-order stage.  This type of subtractor is known as a *ripple borrow subtractor* because the borrow bit ripples through the subtractor stages.

*   **Limitation of Ripple Carry Adder/Subtractor:**  The speed of operation is limited by the propagation delay through each full adder/subtractor stage.  The worst-case delay occurs when the carry/borrow ripples through all stages.  More advanced adder/subtractor architectures exist (e.g., carry-lookahead adders) to improve speed.

### 7. Application of Adders and Subtractors

*   **Arithmetic Logic Units (ALUs):**  Adders and subtractors are key components of ALUs, which perform a variety of arithmetic and logical operations in computers.

*   **Digital Signal Processing (DSP):**  Adders and subtractors are used extensively in DSP applications for tasks such as filtering, convolution, and correlation.

*   **Address Calculation:**  Adders are used to calculate memory addresses in computer systems.

*   **Counters:**  Adders and subtractors can be used to implement counters.

### 8. Important Points to Remember

*   Half adders and half subtractors are limited to single-bit operations without carry/borrow handling.
*   Full adders and full subtractors can handle carry-in/borrow-in, making them suitable for multi-bit operations.
*   Multi-bit adders/subtractors can be constructed by cascading full adders/subtractors.
*   The ripple carry/borrow adder/subtractor is a simple but relatively slow implementation due to the carry/borrow propagation delay.

### 9. Practice Questions

1.  **Design a 4-bit ripple carry adder using full adders.**
    *   **Answer:** Cascade four full adders. The least significant bit (LSB) inputs are connected to the inputs of the first full adder. The carry-out of the first full adder is connected to the carry-in of the second full adder, and so on. The carry-in to the first full adder can be set to '0' if no initial carry is needed.

2.  **What are the differences between a half adder and a full adder?**
    *   **Answer:** A half adder adds two bits, while a full adder adds three bits (two input bits and a carry-in).  A half adder does not have a carry-in input, while a full adder does.

3.  **Implement a full adder using only NAND gates.**
    *   **Answer:** This requires understanding how to express XOR, AND, and OR gates using NAND gates.  The implementation is more complex but achievable using DeMorgan's theorem and Boolean algebra manipulation. (A good exercise for practicing logic gate implementation)

4.  **Design a circuit that subtracts two 2-bit numbers using full subtractors.**
    *   **Answer:** Cascade two full subtractors. The least significant bit (LSB) inputs are connected to the inputs of the first full subtractor. The borrow-out of the first full subtractor is connected to the borrow-in of the second full subtractor. The borrow-in to the first full subtractor can be set to '0' if no initial borrow is needed.

5. **Write the logical expressions for Sum and Carry-out of a full adder.**
    *   **Answer:** Sum (S) = A XOR B XOR Cin,  Carry-out (Cout) = (A AND B) OR (Cin AND (A XOR B))

---
