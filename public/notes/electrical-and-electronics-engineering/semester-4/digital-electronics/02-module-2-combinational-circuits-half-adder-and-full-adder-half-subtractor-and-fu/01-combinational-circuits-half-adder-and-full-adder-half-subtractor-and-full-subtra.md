---
title: "Combinational circuits – half adder and full adder, half subtractor and full subtractor – 4-bit parallel binary adder/subtractor."
subject: "DIGITAL ELECTRONICS"
module: "Module 2: Combinational circuits – half adder and full adder, half subtractor and full subtractor – 4"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e4d"
status: "completed"
scrapedAt: "2026-05-23T16:15:50.634Z"
---
# DIGITAL ELECTRONICS - Module 2: Combinational Circuits

## Topic: Adders and Subtractors & 4-bit Parallel Binary Adder/Subtractor

---

### **Introduction to Combinational Circuits**

Combinational circuits are digital circuits where the output depends only on the current input values. There is no memory element. The output changes immediately when the input changes.

**Key Concept:** The design of combinational circuits involves deriving Boolean expressions for the outputs based on the inputs and then implementing these expressions using logic gates.

**Referenced Textbooks:**
*   **Digital Fundamentals by Floyd T.L:** Chapter 4 covers combinational logic circuits and their basic building blocks.
*   **Digital Principles and Applications by Albert Paul Malvino & Donald P. Leach:** Chapter 5 focuses on logic functions and their implementation.

---

### **1. Half Adder**

A half adder is a fundamental combinational circuit that performs the addition of two single binary bits. It produces two outputs: a **Sum (S)** and a **Carry (C)**.

**Inputs:**
*   A: First binary bit
*   B: Second binary bit

**Outputs:**
*   Sum (S): The least significant bit of the sum (A XOR B).
*   Carry (C): The most significant bit of the sum (A AND B).

**Truth Table:**

| A | B | Sum (S) | Carry (C) |
|---|---|---------|-----------|
| 0 | 0 | 0       | 0         |
| 0 | 1 | 1       | 0         |
| 1 | 0 | 1       | 0         |
| 1 | 1 | 0       | 1         |

**Boolean Expressions:**
*   S = A ⊕ B (A XOR B)
*   C = A ⋅ B (A AND B)

**Logic Diagram:**

```
      A ----| XOR |---- S
            |     |
      B ----|-----|----| AND |---- C
            |     |    |     |
            -------    -------
```

**Implementation using Logic Gates:**
*   Sum (S) is implemented using an XOR gate.
*   Carry (C) is implemented using an AND gate.

**Key Concept:** The half adder is a building block for more complex arithmetic circuits. It cannot handle a carry-in from a previous stage.

**Referenced Textbooks:**
*   **Digital Fundamentals by Floyd T.L:** Section 4-1 explains half adders.
*   **Digital Principles and Applications by Albert Paul Malvino & Donald P. Leach:** Chapter 5 demonstrates the half adder circuit.

---

### **2. Full Adder**

A full adder is a combinational circuit that adds three single binary bits. It is used when we need to add bits from different positions in binary numbers, including a potential carry-in from a less significant bit.

**Inputs:**
*   A: First binary bit
*   B: Second binary bit
*   C<sub>in</sub>: Carry-in from the previous stage

**Outputs:**
*   Sum (S): The least significant bit of the sum (A ⊕ B ⊕ C<sub>in</sub>).
*   Carry (C<sub>out</sub>): The most significant bit of the sum (generated when two or three inputs are 1).

**Truth Table:**

| A | B | C<sub>in</sub> | Sum (S) | Carry (C<sub>out</sub>) |
|---|---|------------|---------|-------------------|
| 0 | 0 | 0          | 0       | 0                 |
| 0 | 0 | 1          | 1       | 0                 |
| 0 | 1 | 0          | 1       | 0                 |
| 0 | 1 | 1          | 0       | 1                 |
| 1 | 0 | 0          | 1       | 0                 |
| 1 | 0 | 1          | 0       | 1                 |
| 1 | 1 | 0          | 0       | 1                 |
| 1 | 1 | 1          | 1       | 1                 |

**Boolean Expressions:**
*   S = A ⊕ B ⊕ C<sub>in</sub>
*   C<sub>out</sub> = (A ⋅ B) + (A ⋅ C<sub>in</sub>) + (B ⋅ C<sub>in</sub>)
    *   Alternatively, C<sub>out</sub> = (A ⋅ B) + (C<sub>in</sub> ⋅ (A ⊕ B))

**Logic Diagram (using two half adders):**

A full adder can be constructed using two half adders and an OR gate.

```
      A ----| HA1 |---- S1
            |-----|
      B ----|     |
            |-----|---- C1
            -------
                |
      Cin ----| XOR |---- S (Sum)
            |-----|
            | HA2 |---- C2
            |-----|
            -------
                |
      C1 ----| OR  |---- Cout (Carry Out)
            |-----|
            |     |
      C2 ----|-----|
            -------
```

**Key Concept:** Full adders are cascaded to perform addition on binary numbers of multiple bits. Each full adder adds a pair of bits from the input numbers and the carry-in from the previous stage.

**Referenced Textbooks:**
*   **Digital Fundamentals by Floyd T.L:** Section 4-2 details full adders.
*   **Digital Principles and Applications by Albert Paul Malvino & Donald P. Leach:** Chapter 5 discusses full adders and their implementation.
*   **Digital Design: With an Introduction to the Verilog HDL, VHDL, and System Verilog by M. Morris Mano, Michael D. Ciletti:** Chapter 6 covers arithmetic circuits, including full adders.

---

### **3. Half Subtractor**

A half subtractor is a combinational circuit that performs the subtraction of two single binary bits. It produces two outputs: a **Difference (D)** and a **Borrow (B)**.

**Inputs:**
*   A: Minuend (the number from which another is to be subtracted)
*   B: Subtrahend (the number to be subtracted)

**Outputs:**
*   Difference (D): The result of the subtraction (A ⊕ B).
*   Borrow (B): Indicates if a borrow is needed from the next significant bit. This occurs when A is 0 and B is 1.

**Truth Table:**

| A | B | Difference (D) | Borrow (B) |
|---|---|----------------|------------|
| 0 | 0 | 0              | 0          |
| 0 | 1 | 1              | 1          |
| 1 | 0 | 1              | 0          |
| 1 | 1 | 0              | 0          |

**Boolean Expressions:**
*   D = A ⊕ B (A XOR B)
*   B = Ā ⋅ B (NOT A AND B)

**Logic Diagram:**

```
      A ----| XOR |---- D
            |     |
      B ----|-----|----| NOT |----| AND |---- B
            |     |    |-----|    |     |
            -------         |    |     |
                            |----|-----|
```

**Key Concept:** Similar to the half adder, the half subtractor cannot handle a borrow-in from a previous stage.

**Referenced Textbooks:**
*   **Digital Fundamentals by Floyd T.L:** Section 4-3 describes half subtractors.
*   **Digital Principles and Applications by Albert Paul Malvino & Donald P. Leach:** Chapter 5 includes subtractor circuits.

---

### **4. Full Subtractor**

A full subtractor is a combinational circuit that subtracts three single binary bits. It is used for subtracting bits from different positions in binary numbers, including a potential borrow-in from a less significant bit.

**Inputs:**
*   A: Minuend
*   B: Subtrahend
*   B<sub>in</sub>: Borrow-in from the previous stage

**Outputs:**
*   Difference (D): The result of the subtraction (A ⊕ B ⊕ B<sub>in</sub>).
*   Borrow (B<sub>out</sub>): Indicates if a borrow is needed for the next significant bit.

**Truth Table:**

| A | B | B<sub>in</sub> | Difference (D) | Borrow (B<sub>out</sub>) |
|---|---|------------|----------------|-----------------|
| 0 | 0 | 0          | 0              | 0               |
| 0 | 0 | 1          | 1              | 1               |
| 0 | 1 | 0          | 1              | 1               |
| 0 | 1 | 1          | 0              | 1               |
| 1 | 0 | 0          | 1              | 0               |
| 1 | 0 | 1          | 0              | 0               |
| 1 | 1 | 0          | 0              | 0               |
| 1 | 1 | 1          | 1              | 0               |

**Boolean Expressions:**
*   D = A ⊕ B ⊕ B<sub>in</sub>
*   B<sub>out</sub> = (Ā ⋅ B) + (Ā ⋅ B<sub>in</sub>) + (B ⋅ B<sub>in</sub>)
    *   Alternatively, B<sub>out</sub> = (Ā ⋅ B) + (B<sub>in</sub> ⋅ (Ā ⊕ B))

**Logic Diagram (using two half subtractors):**

A full subtractor can be constructed using two half subtractors and an OR gate.

```
      A ----| HS1 |---- D1
            |-----|
      B ----|     |
            |-----|---- B1
            -------
                |
      Bin ----| XOR |---- D (Difference)
            |-----|
            | HS2 |---- B2
            |-----|
            -------
                |
      B1 ----| OR  |---- Bout (Borrow Out)
            |-----|
            |     |
      B2 ----|-----|
            -------
```

**Key Concept:** Full subtractors are cascaded to perform subtraction on binary numbers of multiple bits. The borrow-out from one stage becomes the borrow-in for the next more significant stage.

**Referenced Textbooks:**
*   **Digital Fundamentals by Floyd T.L:** Section 4-3 also covers full subtractors.
*   **Digital Principles and Applications by Albert Paul Malvino & Donald P. Leach:** Chapter 5 includes full subtractor circuits.
*   **Digital Integrated Electronics by Herbert Taub and Donald Schilling:** Chapter 10 discusses arithmetic circuits including subtractors.

---

### **5. 4-bit Parallel Binary Adder**

A 4-bit parallel binary adder is a circuit that adds two 4-bit binary numbers and produces a 4-bit sum and a carry-out. It uses four full adders connected in cascade.

**Inputs:**
*   Two 4-bit binary numbers: A = A3 A2 A1 A0, B = B3 B2 B1 B0
*   Carry-in to the least significant bit: C0 (usually 0 for simple addition)

**Outputs:**
*   4-bit Sum: S = S3 S2 S1 S0
*   Carry-out from the most significant bit: C4

**Structure:**
*   The first full adder (FA0) adds A0, B0, and C0 to produce S0 and C1.
*   The second full adder (FA1) adds A1, B1, and C1 (carry-out from FA0) to produce S1 and C2.
*   The third full adder (FA2) adds A2, B2, and C2 (carry-out from FA1) to produce S2 and C3.
*   The fourth full adder (FA3) adds A3, B3, and C3 (carry-out from FA2) to produce S3 and C4.

**Block Diagram:**

```
      C0 ----| FA0 |---- S0
             |-----|
      A0 ----|     |---- C1
      B0 ----|-----|
             -------
                 |
      C1 ----| FA1 |---- S1
             |-----|
      A1 ----|     |---- C2
      B1 ----|-----|
             -------
                 |
      C2 ----| FA2 |---- S2
             |-----|
      A2 ----|     |---- C3
      B2 ----|-----|
             -------
                 |
      C3 ----| FA3 |---- S3
             |-----|
      A3 ----|     |---- C4 (Carry Out)
      B3 ----|-----|
             -------
```

**Example:** Add 1011 (11) and 0110 (6)

Let A = 1011 and B = 0110. Assume C0 = 0.

*   **FA0:** A0=1, B0=0, C0=0 => S0=1, C1=0
*   **FA1:** A1=1, B1=1, C1=0 => S1=0, C2=1
*   **FA2:** A2=0, B2=1, C2=1 => S2=0, C3=1
*   **FA3:** A3=1, B3=0, C3=1 => S3=0, C4=1

Sum (S3 S2 S1 S0) = 0001. Carry-out (C4) = 1.
Result: 10001 (17), which is 11 + 6.

**Key Concept:** This circuit is called a "ripple carry adder" because the carry signal "ripples" from one stage to the next. The speed of addition is limited by the time it takes for the carry to propagate through all stages.

**Referenced Textbooks:**
*   **Digital Fundamentals by Floyd T.L:** Chapter 4-2 discusses cascaded full adders for multi-bit addition.
*   **Digital Principles and Applications by Albert Paul Malvino & Donald P. Leach:** Chapter 5-6 covers multi-bit adders.
*   **Digital Design: With an Introduction to the Verilog HDL, VHDL, and System Verilog by M. Morris Mano, Michael D. Ciletti:** Chapter 6 elaborates on ripple-carry adders.

---

### **6. 4-bit Parallel Binary Adder/Subtractor**

This circuit can perform both addition and subtraction of two 4-bit binary numbers. It utilizes the concept of **2's Complement** for subtraction.

**Key Concept: 2's Complement**
To subtract a binary number B from a binary number A, we can add the 2's complement of B to A: A - B = A + (2's complement of B).
The 2's complement of a binary number is obtained by inverting all its bits (1's complement) and then adding 1.

**Circuit Components:**
*   Four Full Adders (FA0, FA1, FA2, FA3)
*   Four XOR gates (one for each bit)
*   A control signal (Mode or M)

**Operation:**
*   **Addition (M = 0):** When the control signal M is 0, the XOR gates pass the bits of the second number (B) directly to the full adders. The carry-in to the first full adder (C0) is also set to 0. This configuration allows the full adders to perform addition.
*   **Subtraction (M = 1):** When the control signal M is 1, the XOR gates invert each bit of the second number (B). This effectively calculates the 1's complement of B. Additionally, the carry-in to the first full adder (C0) is set to 1. Adding this inverted B and the initial carry-in of 1 to A results in A + (1's complement of B) + 1, which is equivalent to A + (2's complement of B).

**Block Diagram:**

```
Control (M) ----| XOR |---- B0' (Input to FA0)
                |-----|
      A0 --------| FA0 |---- S0
      B0 --------|-----|---- C1

Control (M) ----| XOR |---- B1' (Input to FA1)
                |-----|
      A1 --------| FA1 |---- S1
      B1 --------|-----|---- C2

Control (M) ----| XOR |---- B2' (Input to FA2)
                |-----|
      A2 --------| FA2 |---- S2
      B2 --------|-----|---- C3

Control (M) ----| XOR |---- B3' (Input to FA3)
                |-----|
      A3 --------| FA3 |---- S3
      B3 --------|-----|---- C4 (Final Carry/Borrow)

       Initial Carry-in (C0) controlled by M: C0 = M
```

**Explanation of Control Signal (M):**

| Mode (M) | Operation       | XOR Output (B') | Initial Carry-in (C0) | Result                                  |
|----------|-----------------|-----------------|-----------------------|-----------------------------------------|
| 0        | Addition (A + B)| B               | 0                     | A + B                                   |
| 1        | Subtraction (A - B)| Ā (1's complement of B) | 1                     | A + Ā + 1 = A + 2's complement of B |

**Interpreting the Final Carry (C4):**

*   **During Addition (M=0):** C4 is the actual carry-out from the most significant bit addition.
*   **During Subtraction (M=1):**
    *   If C4 = 1, the result is positive, and the subtraction is valid. The value of S3S2S1S0 is the correct difference.
    *   If C4 = 0, the result is negative, meaning B > A. The output S3S2S1S0 is the 2's complement of the actual difference. To get the magnitude of the difference, you would need to take the 2's complement of S3S2S1S0.

**Example:** Subtract 0110 (6) from 1011 (11)

Let A = 1011, B = 0110. Mode M = 1.

*   **XOR Gates:**
    *   B0' = 0 ⊕ 1 = 1
    *   B1' = 1 ⊕ 1 = 0
    *   B2' = 1 ⊕ 1 = 0
    *   B3' = 0 ⊕ 1 = 1
    So, B' = 1001 (1's complement of B)

*   **Initial Carry-in:** C0 = M = 1

*   **FA0:** A0=1, B0'=1, C0=1 => S0=1, C1=1
*   **FA1:** A1=1, B1'=0, C1=1 => S1=0, C2=1
*   **FA2:** A2=0, B2'=0, C2=1 => S2=1, C3=1
*   **FA3:** A3=1, B3'=1, C3=1 => S3=1, C4=1

Sum (S3 S2 S1 S0) = 1101. Carry-out (C4) = 1.
Since M=1 and C4=1, the subtraction is valid, and the result is positive.
The difference is 1101 (13). Wait, 11 - 6 = 5. Something is wrong here. Let's re-check the XOR logic.

**Correction on XOR logic:** The control signal controls whether the input bit is passed through or inverted.

Let's use the standard convention where XOR gates are used to control the operation. The carry-in `C_in` of the first stage is tied to the control signal `M`.

**Corrected Block Diagram for Adder/Subtractor:**

```
      M ----| XOR |---- A0
            |-----|
            | FA0 |---- S0
      B0 ----|-----|---- C1
            |-----|
      A0 ----| XOR |---- B0 (or B0 if M=0)

      M ----| XOR |---- A1
            |-----|
            | FA1 |---- S1
      B1 ----|-----|---- C2
            |-----|
      A1 ----| XOR |---- B1 (or B1 if M=0)

      M ----| XOR |---- A2
            |-----|
            | FA2 |---- S2
      B2 ----|-----|---- C3
            |-----|
      A2 ----| XOR |---- B2 (or B2 if M=0)

      M ----| XOR |---- A3
            |-----|
            | FA3 |---- S3
      B3 ----|-----|---- C4 (Final Carry/Borrow)
            |-----|
      A3 ----| XOR |---- B3 (or B3 if M=0)

       Initial Carry-in (C0) controlled by M: C0 = M
```
This diagram is also slightly confusing. Let's use the more common representation.

**Common Implementation of 4-bit Adder/Subtractor:**

The core idea is that for subtraction, we need A + 2's complement of B.
2's complement of B = (1's complement of B) + 1.

We can achieve this with the full adders:
*   For Addition (M=0): Add A and B. Carry-in to the first FA is 0.
*   For Subtraction (M=1): Add A and 2's complement of B. This means adding A and (inverter of B) + 1.

We can use XOR gates for both the inversion of B and the initial addition of 1.

Let `M` be the control signal.
*   If `M=0` (Add): We want to add `A` and `B`. The XOR gates should pass `B` as is. The initial carry-in `C0` should be 0.
*   If `M=1` (Subtract): We want to add `A` and `2's complement of B`. This means `A + (inv(B) + 1)`.
    *   The `inv(B)` part can be done by XORing `B` with `M=1`.
    *   The `+1` part can be achieved by setting the initial carry-in `C0` to `M=1`.

**Revised Block Diagram:**

```
Control (M) ----| XOR |---- B0 (Input to FA0)
                |-----|
      A0 --------| FA0 |---- S0
      B0 --------|-----|---- C1
                |-----|
Control (M) ----| XOR |---- B0 (Input to FA0)  <-- This is incorrect. Control needs to affect B input or C_in.

Let's use a circuit where XOR gates are placed before the full adders and control the B input, and the carry-in of the first full adder is controlled by M.

      A3 A2 A1 A0   (4-bit number A)
      B3 B2 B1 B0   (4-bit number B)
      M            (Control: 0 for ADD, 1 for SUB)

Result: S3 S2 S1 S0, C4 (Final Carry/Borrow)

Circuit Diagram:
--------------------------------------------------------------------
| A0 --| XOR --- B0_or_B0_bar --| FA0 --| S0
|      | C0 = M                |       | C1
| B0 --|-----------------------|-------|
--------------------------------------------------------------------
| A1 --| XOR --- B1_or_B1_bar --| FA1 --| S1
|      | C1                    |       | C2
| B1 --|-----------------------|-------|
--------------------------------------------------------------------
| A2 --| XOR --- B2_or_B2_bar --| FA2 --| S2
|      | C2                    |       | C3
| B2 --|-----------------------|-------|
--------------------------------------------------------------------
| A3 --| XOR --- B3_or_B3_bar --| FA3 --| S3
|      | C3                    |       | C4
| B3 --|-----------------------|-------|
--------------------------------------------------------------------

Where:
B_i_or_B_i_bar is the output of an XOR gate.
Input to XOR: B_i and M.
Output of XOR: B_i if M=0, inv(B_i) if M=1.
Input to FA0 Carry-in (C0): M.
```

**Example: Subtract 0110 (6) from 1011 (11)**
A = 1011, B = 0110, M = 1.

*   **FA0:** A0=1, B0=0, M=1. XOR(B0, M) = XOR(0, 1) = 1. C0 = M = 1.
    FA0(1, 1, 1) -> S0=1, C1=1.
*   **FA1:** A1=1, B1=1, M=1. XOR(B1, M) = XOR(1, 1) = 0. C1=1.
    FA1(1, 0, 1) -> S1=0, C2=1.
*   **FA2:** A2=0, B2=1, M=1. XOR(B2, M) = XOR(1, 1) = 0. C2=1.
    FA2(0, 0, 1) -> S2=1, C3=0. (Mistake in previous calculation, 0+0+1 = 1 with carry 0).
*   **FA3:** A3=1, B3=0, M=1. XOR(B3, M) = XOR(0, 1) = 1. C3=0.
    FA3(1, 1, 0) -> S3=0, C4=1.

Result: S3 S2 S1 S0 = 0101. C4=1.
Since M=1 and C4=1, the result is positive. The difference is 0101 (5). This is correct.

**Referenced Textbooks:**
*   **Digital Fundamentals by Floyd T.L:** Chapter 4-3 discusses subtractors and combining adders/subtractors.
*   **Digital Principles and Applications by Albert Paul Malvino & Donald P. Leach:** Chapter 5-7 covers the implementation of arithmetic circuits that can perform both addition and subtraction.
*   **Digital Design: With an Introduction to the Verilog HDL, VHDL, and System Verilog by M. Morris Mano, Michael D. Ciletti:** Chapter 6 discusses the design of arithmetic circuits, including adder-subtractors.

---

### **Learning Outcomes Addressed**

*   **CO1: Identify various number systems, binary codes and formulate digital functions using Boolean algebra.**
    *   Boolean expressions for Half Adder, Full Adder, Half Subtractor, Full Subtractor derived from truth tables.
    *   Understanding of binary number representation and arithmetic operations.
*   **CO2: Design combinational logic circuits.**
    *   Design of Half Adder, Full Adder, Half Subtractor, Full Subtractor using logic gates.
    *   Design of a 4-bit parallel binary adder.
    *   Design of a 4-bit parallel binary adder/subtractor.
*   **CO3: Design sequential logic circuits.**
    *   While this module focuses on combinational circuits, the understanding of basic arithmetic operations is foundational for sequential circuits like counters and registers that might perform arithmetic.
*   **CO4: Describe the operation of various analog to digital and digital to analog conversion circuits.**
    *   Not directly covered, but arithmetic circuits are essential components in many ADC/DAC systems.
*   **CO5: Explain the basic concepts of programming using Verilog HDL.**
    *   This module provides the logical understanding of these circuits, which can then be translated into Verilog HDL for simulation and synthesis. For example, `assign sum = a ^ b;` for a half adder.
*   **CO6: Design and realize hardware circuits of medium complexity practical digital.**
    *   A 4-bit adder/subtractor is a good example of a medium complexity circuit that can be built and tested.

---

### **Important Points to Remember**

*   **Half Adder:** Adds two bits, produces Sum and Carry. Cannot handle carry-in.
*   **Full Adder:** Adds three bits (A, B, Carry-in), produces Sum and Carry-out.
*   **Half Subtractor:** Subtracts two bits, produces Difference and Borrow. Cannot handle borrow-in.
*   **Full Subtractor:** Subtracts three bits (A, B, Borrow-in), produces Difference and Borrow-out.
*   **Cascading:** Full adders/subtractors are cascaded to perform arithmetic on multi-bit numbers.
*   **Ripple Carry Adder:** The carry propagates sequentially from one stage to the next, affecting performance.
*   **2's Complement:** The standard method for representing negative numbers and performing subtraction using addition circuits.
*   **Adder/Subtractor Circuit:** Uses XOR gates and a control signal to switch between addition and subtraction modes, leveraging 2's complement.
*   **Carry-out in Adder/Subtractor:** Indicates overflow in addition and the sign/validity of the result in subtraction.

---

### **Practice Questions**

1.  **Design a combinational circuit that adds three binary numbers, each of one bit. It should produce a 2-bit sum.**
    *   **Hint:** This is like a full adder but with two carry outputs (Sum and Carry).
    *   **Inputs:** A, B, C
    *   **Outputs:** S (Sum), C<sub>out</sub> (Carry)
    *   **Truth Table:**
        | A | B | C | S | C<sub>out</sub> |
        |---|---|---|---|-------------|
        | 0 | 0 | 0 | 0 | 0           |
        | 0 | 0 | 1 | 1 | 0           |
        | 0 | 1 | 0 | 1 | 0           |
        | 0 | 1 | 1 | 0 | 1           |
        | 1 | 0 | 0 | 1 | 0           |
        | 1 | 0 | 1 | 0 | 1           |
        | 1 | 1 | 0 | 0 | 1           |
        | 1 | 1 | 1 | 1 | 1           |
    *   **Boolean Expressions:** S = A ⊕ B ⊕ C; C<sub>out</sub> = (A ⋅ B) + (A ⋅ C) + (B ⋅ C)
    *   **Answer:** This is essentially the definition of a full adder.

2.  **What is the output of a half adder when the inputs are A=1 and B=1?**
    *   **Answer:** Sum (S) = 0, Carry (C) = 1.

3.  **How can a full subtractor be implemented using half subtractors?**
    *   **Answer:** A full subtractor can be implemented using two half subtractors and an OR gate. The first half subtractor subtracts B from A, producing a difference D1 and borrow B1. The second half subtractor subtracts B<sub>in</sub> from D1, producing the final difference D and borrow B2. An OR gate combines B1 and B2 to produce the final B<sub>out</sub>. (Refer to the logic diagram in Section 4).

4.  **Consider a 4-bit parallel adder. If the inputs are A = 1101 and B = 0011, and C0 = 0, what are the outputs S3S2S1S0 and C4?**
    *   **Calculation:**
        *   FA0: A0=1, B0=1, C0=0 -> S0=0, C1=1
        *   FA1: A1=0, B1=1, C1=1 -> S1=0, C2=1
        *   FA2: A2=1, B2=0, C2=1 -> S2=0, C3=1
        *   FA3: A3=1, B3=0, C3=1 -> S3=0, C4=1
    *   **Answer:** S3S2S1S0 = 0000, C4 = 1. (13 + 3 = 16, which is 10000 in binary).

5.  **In a 4-bit adder/subtractor circuit, what are the values of the XOR gates' inputs and the initial carry-in (C0) when performing the operation 1010 - 0101 (decimal 10 - 5)?**
    *   **Answer:**
        *   Control signal M = 1 (for subtraction).
        *   The inputs to the XOR gates for B0, B1, B2, B3 will be (B0, 1), (B1, 1), (B2, 1), (B3, 1).
        *   This means the inputs to the full adders for the second number will be the inverted bits of B.
        *   The initial carry-in (C0) will be 1.

6.  **Explain the potential delay in a ripple carry adder.**
    *   **Answer:** The delay occurs because the carry-out from each full adder stage must be generated and propagate to the next stage's carry-in. In the worst case (e.g., adding 0111 to 0001), the carry might need to ripple through all stages before the final sum and carry-out are determined. This propagation delay limits the speed of the adder.

---
This concludes Module 2, Topic 4 notes. These notes cover the fundamental combinational circuits for binary arithmetic.
