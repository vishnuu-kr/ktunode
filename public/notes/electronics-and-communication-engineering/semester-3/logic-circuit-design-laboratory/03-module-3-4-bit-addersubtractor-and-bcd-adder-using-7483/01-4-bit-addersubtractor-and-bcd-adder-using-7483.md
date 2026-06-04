---
title: "4 bit adder/subtractor and BCD adder using 7483"
subject: "LOGIC CIRCUIT DESIGN LABORATORY"
module: "Module 3: 4 bit adder/subtractor and BCD adder using 7483"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe440"
status: "completed"
scrapedAt: "2026-05-23T17:46:18.447Z"
---
# Logic Circuit Design Laboratory - Module 3: 4-bit Adder/Subtractor and BCD Adder using 7483

## Topic: 4-bit Adder/Subtractor and BCD Adder using 7483

### Introduction

This module delves into the practical implementation of arithmetic circuits using the **7483 IC**, a versatile 4-bit binary adder. We will explore its application in constructing both a 4-bit binary adder/subtractor and a Binary Coded Decimal (BCD) adder. These circuits are fundamental building blocks in digital systems, enabling numerical operations.

---

### 1. The 7483 IC: A 4-bit Binary Adder

The 7483 is a monolithic integrated circuit that performs the addition of two 4-bit binary numbers. It features:

*   **Two 4-bit binary inputs:** Labeled as A0-A3 and B0-B3.
*   **One carry-in input:** Labeled as $C_0$.
*   **Four sum outputs:** Labeled as $S_0-S_3$.
*   **One carry-out output:** Labeled as $C_4$ (or $C_{out}$).

**Key Concepts:**

*   **Binary Addition:** The process of adding binary numbers, where each bit position is added along with any carry from the previous position.
*   **Full Adder:** A combinational circuit that adds three input bits (two data bits and a carry-in) and produces a sum bit and a carry-out bit. The 7483 IC internally utilizes full adders.
*   **Ripple Carry Adder:** A type of adder where the carry-out of each stage is fed as the carry-in to the next stage. This is the fundamental operation of the 7483.

**How the 7483 works (Internal Structure - Conceptual):**

The 7483 can be conceptually understood as a cascade of four full adders.

*   **LSB (Least Significant Bit) Addition:** $S_0 = A_0 \oplus B_0 \oplus C_0$ and $C_1 = (A_0 \cdot B_0) + (C_0 \cdot (A_0 \oplus B_0))$
*   **Subsequent Bits:** For $i = 1, 2, 3$:
    *   $S_i = A_i \oplus B_i \oplus C_i$
    *   $C_{i+1} = (A_i \cdot B_i) + (C_i \cdot (A_i \oplus B_i))$

**Pin Diagram (Typical 7483):**

```
        +-----------------+
        |                 |
   A0 --|1    7483     16|-- VCC
   B0 --|2             15|-- C4 (Carry Out)
   S0 --|3             14|-- S3
   A1 --|4             13|-- B3
   B1 --|5             12|-- S2
   S1 --|6             11|-- A3
   C0 --|7             10|-- B2
   GND --|8     (NC)  9|-- S2
        |                 |
        +-----------------+
```

*(Note: Pin numbers might vary slightly based on specific manufacturer datasheets. Always refer to the datasheet for the IC you are using.)*

**Important Points to Remember:**

*   The 7483 performs unsigned binary addition.
*   The carry-in ($C_0$) is crucial for cascading adders or for representing signed numbers in certain schemes.
*   The carry-out ($C_4$) indicates an overflow condition if the result exceeds the 4-bit capacity.

**Textbook References:**

*   **Roth C.H. - Fundamentals of Logic Design:** Provides a solid foundation on binary addition, full adders, and ripple carry adders, which are the underlying principles of the 7483's operation. Chapter 7 on "Combinational Logic Circuits" would be relevant.
*   **Verilog HDL Synthesis: A Practical Primer by J. Bhasker:** While focused on HDL, it implicitly covers the logic of addition circuits that the 7483 implements.

---

### 2. Designing a 4-bit Binary Adder/Subtractor using 7483

To perform subtraction using only adders, we utilize the **2's complement** method.

**Key Concepts:**

*   **2's Complement:** A method for representing signed binary numbers. To find the 2's complement of a number:
    1.  Invert all the bits (1's complement).
    2.  Add 1 to the result.
*   **Subtraction using 2's Complement:** To compute $A - B$, we compute $A + (-B)$. The $-B$ is represented by the 2's complement of $B$.

**Implementation Strategy:**

1.  **For Addition ($A+B$):**
    *   Connect the bits of A to the A inputs of the 7483.
    *   Connect the bits of B to the B inputs of the 7483.
    *   Set $C_0$ to LOW (0).
    *   The outputs $S_0-S_3$ will give the sum, and $C_4$ will be the carry-out.

2.  **For Subtraction ($A-B$):**
    *   Connect the bits of A to the A inputs of the 7483.
    *   To get $-B$ (2's complement of B):
        *   Invert each bit of B using **NOT gates (e.g., 7404 IC)**. These inverted bits are fed to the B inputs of the 7483.
        *   Set the carry-in $C_0$ to HIGH (1). This effectively adds the '1' required for the 2's complement.
    *   The outputs $S_0-S_3$ will give the difference.
    *   The carry-out $C_4$ in subtraction indicates:
        *   If $C_4=1$: The result is positive (or the subtraction was valid without borrow).
        *   If $C_4=0$: The result is negative (and requires 2's complement to interpret, or indicates a borrow).

**Circuit Diagram (Conceptual):**

```
     A0 -----| 7483 A inputs
     A1 -----|
     A2 -----|
     A3 -----|

     B0 ----- NOT gate -----| 7483 B inputs
     B1 ----- NOT gate -----|
     B2 ----- NOT gate -----|
     B3 ----- NOT gate -----|

     C0 ----- LOW (0) for Addition
             HIGH (1) for Subtraction

     7483 S0-S3 ----- Sum/Difference Outputs
     7483 C4 -------- Carry Out / Borrow Indicator
```

**Example: $5 - 3$**

*   $A = 5$ (binary: 0101)
*   $B = 3$ (binary: 0011)

**For Subtraction ($A-B$):**

1.  **A inputs:** 0101
2.  **B inputs (inverted):**
    *   $B_0 = 0 \rightarrow \overline{B_0} = 1$
    *   $B_1 = 1 \rightarrow \overline{B_1} = 0$
    *   $B_2 = 1 \rightarrow \overline{B_2} = 0$
    *   $B_3 = 0 \rightarrow \overline{B_3} = 1$
    So, the B inputs to 7483 are: 1001.
3.  **$C_0$:** Set to 1 (for 2's complement addition).

The 7483 will compute: $0101 + 1001 + 1$ (with the carry-in)

Let's trace:
*   $S_0 = 0 \oplus 1 \oplus 1 = 0$
*   $C_1 = (0 \cdot 1) + (1 \cdot (0 \oplus 1)) = 0 + (1 \cdot 1) = 1$

*   $S_1 = 0 \oplus 0 \oplus C_1 = 0 \oplus 0 \oplus 1 = 1$
*   $C_2 = (0 \cdot 0) + (C_1 \cdot (0 \oplus 0)) = 0 + (1 \cdot 0) = 0$

*   $S_2 = 1 \oplus 0 \oplus C_2 = 1 \oplus 0 \oplus 0 = 1$
*   $C_3 = (1 \cdot 0) + (C_2 \cdot (1 \oplus 0)) = 0 + (0 \cdot 1) = 0$

*   $S_3 = 0 \oplus 1 \oplus C_3 = 0 \oplus 1 \oplus 0 = 1$
*   $C_4 = (0 \cdot 1) + (C_3 \cdot (0 \oplus 1)) = 0 + (0 \cdot 1) = 0$

The output $S_3S_2S_1S_0$ is 1110. The $C_4$ is 0.
The result 1110 is the 2's complement representation of -2. This is incorrect, the expected result is 2.

**Correction and Understanding the $C_4$ for Subtraction:**

The issue is in interpreting the result. When performing $A - B$, we compute $A + \overline{B} + 1$.
If $A \ge B$:
*   The result $S_3S_2S_1S_0$ is the correct difference.
*   The carry-out $C_4$ will be 1.

If $A < B$:
*   The result $S_3S_2S_1S_0$ is the 2's complement of the correct difference (which will be negative).
*   The carry-out $C_4$ will be 0. To get the magnitude of the difference, you would invert the $S$ outputs and add 1.

Let's re-examine $5 - 3$ where $A=0101, B=0011$.
We computed $0101 + \overline{0011} + 1 = 0101 + 1100 + 1$.
Adding 1 to $B$ directly: $B = 0011$.
1's complement of $B = 1100$.
2's complement of $B = 1100 + 1 = 1101$.
So we need to compute $0101 + 1101$.

*   $S_0 = 0 \oplus 1 \oplus 0 = 1$
*   $C_1 = (0 \cdot 1) + (0 \cdot (0 \oplus 1)) = 0 + (0 \cdot 1) = 0$

*   $S_1 = 0 \oplus 0 \oplus C_1 = 0 \oplus 0 \oplus 0 = 0$
*   $C_2 = (0 \cdot 0) + (C_1 \cdot (0 \oplus 0)) = 0 + (0 \cdot 0) = 0$

*   $S_2 = 1 \oplus 1 \oplus C_2 = 1 \oplus 1 \oplus 0 = 0$
*   $C_3 = (1 \cdot 1) + (C_2 \cdot (1 \oplus 1)) = 1 + (0 \cdot 0) = 1$

*   $S_3 = 0 \oplus 1 \oplus C_3 = 0 \oplus 1 \oplus 1 = 0$
*   $C_4 = (0 \cdot 1) + (C_3 \cdot (0 \oplus 1)) = 0 + (1 \cdot 1) = 1$

The output $S_3S_2S_1S_0$ is 0010. The $C_4$ is 1.
The result 0010 (which is 2) is correct, and $C_4=1$ indicates a positive result.

**To implement this, we need:**
*   Two 7483 ICs for a 4-bit adder/subtractor if we want to perform the operation $A-B$ directly with the 2's complement logic. Alternatively, one 7483 and external inverters and a way to control $C_0$.

**Simplified 4-bit Adder/Subtractor using XOR for B Input:**
A common way to implement this with minimal ICs is to use XOR gates (like in a 7486 IC) to selectively invert the B inputs.

*   **Select Line (S):**
    *   If $S=0$, XOR output is $B_i$.
    *   If $S=1$, XOR output is $\overline{B_i}$.
*   Connect the output of the XOR gate to the B input of the 7483.
*   Connect the select line (S) to the XOR gates.
*   Connect the select line (S) also to $C_0$.
    *   If $S=0$ (Addition): $C_0=0$, $B$ inputs are $B_i$. This performs $A+B$.
    *   If $S=1$ (Subtraction): $C_0=1$, $B$ inputs are $\overline{B_i}$. This performs $A + \overline{B} + 1$, which is $A-B$.

**Circuit Diagram (Conceptual with XORs):**

```
     A0 -----| 7483 A inputs
     A1 -----|
     A2 -----|
     A3 -----|

     B0 ----- XOR -----| 7483 B inputs
     B1 ----- XOR -----|
     B2 ----- XOR -----|
     B3 ----- XOR -----|

     S (Select) --------| XOR Inputs
     S (Select) --------| 7483 C0 input

     7483 S0-S3 ----- Sum/Difference Outputs
     7483 C4 -------- Carry Out / Borrow Indicator
```

**Course Outcome Alignment:**

*   **CO1 (K3):** Design and demonstrate the functioning of various combinational circuits using ICs. This topic directly involves designing an arithmetic circuit (adder/subtractor) using the 7483 IC.
*   **CO2 (K3):** Apply an industry-compatible hardware description language to implement digital circuits. While this lab focuses on ICs, the underlying logic for addition and subtraction can be synthesized in Verilog/VHDL, as discussed in Bhasker and Palnitkar.

---

### 3. Designing a BCD Adder using 7483

**Key Concepts:**

*   **Binary Coded Decimal (BCD):** A system where each decimal digit (0-9) is represented by its 4-bit binary equivalent.
    *   0: 0000
    *   1: 0001
    *   ...
    *   9: 1001
*   **BCD Addition Rules:**
    1.  Add the two BCD numbers using a standard binary adder.
    2.  If the result of the binary addition is less than or equal to 9 (i.e., 0000 to 1001), the result is a valid BCD number.
    3.  If the result of the binary addition is greater than 9 (i.e., 1010 to 1111), or if there is a carry-out from the addition, then the result is not a valid BCD number. In this case, we must add 6 (binary 0110) to the result to correct it and generate the correct BCD output and the next higher BCD digit.

**Why does adding 6 work?**

Consider a BCD addition $X_{BCD} + Y_{BCD}$.
The binary sum $S = X_{BCD} + Y_{BCD}$.
If $S > 9$, it means the sum has "overflowed" the decimal digit.
The BCD representation requires that each decimal digit be encoded in 4 bits.
When we add two BCD numbers, say $D_1$ and $D_2$, the binary sum can be:
*   $D_1 + D_2 < 10$: This is directly representable in BCD.
*   $10 \le D_1 + D_2 \le 18$: The binary sum will be between 1010 (10) and 10010 (18).
    *   Example: $5_{BCD} + 7_{BCD} = 12_{BCD}$.
    *   Binary addition: $0101 + 0111 = 1100$ (12 decimal).
    *   $1100$ is not a valid BCD representation for 12. The correct BCD for 12 is $0001\ 0010$.
    *   If the binary sum is $> 9$, we need to add 6.
    *   $1100 + 0110 = 10010$.
    *   The lower 4 bits are $0010$ (which is 2, the units digit of 12).
    *   The carry-out is 1 (which represents the tens digit of 12).
    *   So, the addition of 6 effectively "carries over" the excess to the next decimal digit position.

**Implementation Strategy:**

To add two 4-bit BCD numbers (say $A_0-A_3$ and $B_0-B_3$), we need to consider the addition of a "correction factor" if the initial binary sum is invalid.

**Method 1: Using two 7483 ICs and logic gates**

1.  **First Addition:** Use a 7483 IC to add the two 4-bit BCD numbers $A$ and $B$. Let the sum outputs be $S_0-S_3$ and the carry-out be $C_{4,1}$.
2.  **Correction Logic:**
    *   Determine if correction is needed. Correction is needed if:
        *   The sum is greater than 9 (i.e., $S_3S_2S_1S_0 > 1001_2$). This condition can be checked by looking for specific patterns like $S_3=1$ and $S_2=0$ and ($S_1=0$ or $S_0=0$), or more directly, checking if $S_3S_2S_1S_0$ is in the range 1010 to 1111.
        *   There was a carry-out from the first addition ($C_{4,1} = 1$).
    *   A simpler way to detect if the sum $S$ is $> 9$ is to check if $S_3$ is 1 OR if ($S_3$ is 0 AND $S_2$ is 1 AND ($S_1$ is 1 OR $S_0$ is 1)).
    *   Alternatively, and more commonly derived: The sum $S$ is $> 9$ if $S_3$ is 1 OR ($S_2$ is 1 AND $S_1$ is 1).
    *   Let's analyze the conditions when $S > 9$:
        *   If $C_{4,1} = 1$, then the sum is definitely $> 9$.
        *   If $C_{4,1} = 0$, the sum is $> 9$ if the binary value of $S_3S_2S_1S_0$ is $1010$ (10), $1011$ (11), $1100$ (12), $1101$ (13), $1110$ (14), $1111$ (15).
        *   A logic expression for "sum > 9" when $C_{4,1}=0$ is $S_3 \cdot (\overline{S_2} + \overline{S_1} + \overline{S_0})$. This isn't the simplest.
        *   A more common and simpler condition for BCD correction is derived from analyzing the possible sums: the sum needs correction if the output is $1010, 1011, 1100, 1101, 1110, 1111$ OR if there is a carry-out.
        *   **The most effective condition for correction is $C_{4,1} \cdot \overline{S_3} + \overline{C_{4,1}} \cdot (S_3 \cdot S_2 \cdot S_1 \cdot S_0 \text{ is not zero})$.**
        *   A more practical condition derived from the state table of 4-bit addition: Correction is needed if the sum is $1010$ or greater, or if there is a carry.
        *   The condition "sum is greater than 9" can be simplified to checking if the sum bits $S_3 S_2 S_1 S_0$ fall into the invalid BCD range $1010$ to $1111$.
        *   **The standard logic for correction is derived as follows: the sum requires correction if ($S_3$ is 1) OR ($S_2$ is 1 AND $S_1$ is 1).**
            Let's verify this:
            *   Sum = 0xxx (0-7): $S_3=0$. Correct.
            *   Sum = 1000 (8): $S_3=1, S_2=0, S_1=0$. Correction needed? No. My condition is wrong.

    *   **Correct Correction Logic:**
        A valid BCD sum requires correction if the binary sum $S$ is $ \ge 10$.
        The condition for $S \ge 10$ is derived as follows:
        *   If $C_{4,1}$ is 1, correction is needed.
        *   If $C_{4,1}$ is 0, then $S$ is in the range 0 to 9. If $S$ is in the range $1010$ to $1111$, correction is needed.
        *   **The condition that the binary sum $S$ is greater than 9 is given by $C_{4,1} + S_3 \cdot S_2 + S_3 \cdot S_1$.** Let's re-check this logic:
            *   If $S=0100$ (4): $C_{4,1}=0, S_3=0, S_2=1, S_1=0$. Condition is $0 + 0 \cdot 1 + 0 \cdot 0 = 0$. Correct.
            *   If $S=1001$ (9): $C_{4,1}=0, S_3=1, S_2=0, S_1=0$. Condition is $0 + 1 \cdot 0 + 1 \cdot 0 = 0$. Correct.
            *   If $S=1010$ (10): $C_{4,1}=0, S_3=1, S_2=0, S_1=1$. Condition is $0 + 1 \cdot 0 + 1 \cdot 1 = 1$. Correction needed. Correct.
            *   If $S=1100$ (12): $C_{4,1}=0, S_3=1, S_2=1, S_1=0$. Condition is $0 + 1 \cdot 1 + 1 \cdot 0 = 1$. Correction needed. Correct.
            *   If $S=1111$ (15): $C_{4,1}=0, S_3=1, S_2=1, S_1=1$. Condition is $0 + 1 \cdot 1 + 1 \cdot 1 = 1$. Correction needed. Correct.
            *   If $S=10001$ (17, with $C_{4,1}=1$): Condition is $1 + S_3 \cdot S_2 + S_3 \cdot S_1 = 1 + 0 \cdot 0 + 0 \cdot 0 = 1$. Correction needed. Correct.

        So, the correction signal $C_{corr} = C_{4,1} + S_3 \cdot S_2 + S_3 \cdot S_1$.

3.  **Second Addition:** Use a second 7483 IC.
    *   The inputs to the second 7483 are:
        *   A inputs: $S_0-S_3$ from the first 7483.
        *   B inputs: $0000$ (constant 0).
        *   $C_0$ input: The correction signal $C_{corr}$.
    *   The outputs $S'_0-S'_3$ from this second 7483 will be the BCD sum.
    *   The carry-out $C_{4,2}$ from this second 7483 will be the carry to the next BCD digit.

**Circuit Diagram (Conceptual for BCD Adder):**

```
   BCD A0 ---| 7483(1) A0
   BCD A1 ---|         A1
   BCD A2 ---|         A2
   BCD A3 ---|         A3

   BCD B0 ---|         B0
   BCD B1 ---|         B1
   BCD B2 ---|         B2
   BCD B3 ---|         B3

   7483(1) S0-S3 --> To Correction Logic and 7483(2) A0-A3
   7483(1) C4,1 ----|
                     |--> Correction Logic --> 7483(2) C0
                     |
   Correction Logic also checks S3, S2, S1 of 7483(1)

   7483(1) S0 --| 7483(2) A0
   7483(1) S1 --|         A1
   7483(1) S2 --|         A2
   7483(1) S3 --|         A3

   7483(2) B0-B3 -- 0000 (GND)

   7483(2) S0-S3 --> BCD Sum Outputs
   7483(2) C4,2 ----> Carry to next BCD digit
```

**Example: $6_{BCD} + 7_{BCD}$**

*   $A = 6$ (BCD: 0110)
*   $B = 7$ (BCD: 0111)

**First Addition (7483(1)):**
*   A inputs: 0110
*   B inputs: 0111
*   $C_{0,1}$: 0

Binary sum: $0110 + 0111 = 1101$ (Decimal 13).
*   $S_3S_2S_1S_0 = 1101$
*   $C_{4,1} = 0$

**Correction Logic:**
Calculate $C_{corr} = C_{4,1} + S_3 \cdot S_2 + S_3 \cdot S_1$
$C_{corr} = 0 + 1 \cdot 1 + 1 \cdot 1 = 0 + 1 + 1 = 1$.
Correction is needed.

**Second Addition (7483(2)):**
*   A inputs: $S_0-S_3$ from first addition = 1101
*   B inputs: 0000
*   $C_{0,2}$: $C_{corr}$ = 1

Binary sum: $1101 + 0000 + 1 = 1110$ (Decimal 14).
*   $S'_3S'_2S'_1S'_0 = 1110$
*   $C_{4,2} = 1$

The output is $C_{4,2}S'_3S'_2S'_1S'_0 = 11110$.
The lower 4 bits $S'_3S'_2S'_1S'_0 = 1110$ is decimal 14. This is still not the correct BCD.

**Mistake in understanding/application of the correction logic.**

Let's re-evaluate the BCD addition steps and the logic for correction.

**Correct BCD Addition Process:**

1.  Add the two BCD numbers using a 4-bit binary adder (like 7483). Let the sum be $S$ and the carry-out be $C_{out}$.
2.  **Check for correction:** The result is not a valid BCD if:
    *   The carry-out $C_{out}$ is 1.
    *   OR the binary sum $S$ is greater than 9 (i.e., $1010$ to $1111$).
    A simpler condition for this is: **correction is needed if $C_{out} = 1$ OR $S_3 = 1$ AND ($S_2 = 1$ OR $S_1 = 1$).** Let's re-check this logic.
    *   Sum 0-7: $C_{out}=0, S_3=0$. No correction.
    *   Sum 8: $C_{out}=0, S_3=1, S_2=0, S_1=0$. Correction needed? No. My condition is incorrect again.

Let's use the established logic for correction signal derivation.
**Correction condition is met if the binary sum $S$ is $\ge 10$.**
This is true if:
*   $C_{out} = 1$.
*   OR ($C_{out} = 0$ AND $S_3=1$ AND ($S_2=1$ OR $S_1=1$ OR $S_0=1$)). This is still too complex.

**The correct condition for correction is when the binary sum is $1010$ to $1111$ (decimal 10 to 15) or when a carry is generated.**
The binary sum $S$ requires correction if $S \ge 10$.
The condition for $S \ge 10$ is given by **$C_{out} \cdot (\overline{S_3} + \overline{S_2} + \overline{S_1} + \overline{S_0}) + \overline{C_{out}} \cdot (S_3 \cdot (\overline{S_2} + \overline{S_1} + \overline{S_0}))$**. This is getting too complicated.

**Let's use the simpler logic from textbooks.**
The sum requires a correction of adding 6 if:
1.  The carry-out $C_{out}$ from the first 4-bit addition is 1.
2.  OR the sum bits $S_3S_2S_1S_0$ are in the invalid range $1010$ to $1111$. This happens if $S_3=1$ and ($S_2=1$ or $S_1=1$).

**The logic for correction $C_{corr}$ is often derived as: $C_{corr} = C_{out} + S_3(\overline{S_2} + \overline{S_1})$.**
Let's test this:
*   Sum = 0100 (4): $C_{out}=0, S_3=0, S_2=1, S_1=0$. $C_{corr} = 0 + 0(0+0) = 0$. Correct.
*   Sum = 1001 (9): $C_{out}=0, S_3=1, S_2=0, S_1=0$. $C_{corr} = 0 + 1(1+0) = 1$. **Incorrect!** For 9, no correction is needed.

**The correct logic for BCD correction is:**
Correction is needed if the sum is greater than 9. This occurs if:
*   The carry-out $C_{out}$ is 1.
*   OR the sum is $1010, 1011, 1100, 1101, 1110, 1111$.
The sum bits $S_3S_2S_1S_0$ represent values from 0 to 15.
We need to detect when the binary sum is $10, 11, 12, 13, 14, 15$.
This happens if:
*   $S_3=1$ AND $S_2=0$ AND ($S_1=1$ OR $S_0=1$). (Sums 10, 11)
*   $S_3=1$ AND $S_2=1$ AND ($S_1=0$ OR $S_1=1$). (Sums 12, 13, 14, 15)

Combining these: Correction is needed if:
$C_{out} = 1$
OR $S_3 \cdot \overline{S_2} \cdot (S_1 + S_0)$
OR $S_3 \cdot S_2$

So, $C_{corr} = C_{out} + S_3 \cdot \overline{S_2} \cdot (S_1 + S_0) + S_3 \cdot S_2$.
This can be simplified. Notice that $S_3 \cdot S_2$ implies $S_3=1$ and $S_2=1$.
If $S_3=1$ and $S_2=1$, the term $S_3 \cdot S_2$ is 1.
If $S_3=1$ and $S_2=0$, we have $S_3 \cdot \overline{S_2} \cdot (S_1 + S_0) = 1 \cdot 1 \cdot (S_1 + S_0) = S_1 + S_0$.
So, the condition for sums $10$ to $15$ (when $C_{out}=0$) is $S_3 \cdot S_2 + S_3 \cdot \overline{S_2} \cdot (S_1 + S_0)$.
This simplifies to $S_3 \cdot (S_2 + \overline{S_2} \cdot (S_1 + S_0)) = S_3 \cdot (S_2 + S_1 + S_0)$.

**Therefore, the correction condition $C_{corr}$ is: $C_{corr} = C_{out} + S_3 \cdot (S_2 + S_1 + S_0)$.**
Let's test this again:
*   Sum = 0100 (4): $C_{out}=0, S_3=0, S_2=1, S_1=0, S_0=0$. $C_{corr} = 0 + 0 \cdot (1+0+0) = 0$. Correct.
*   Sum = 1001 (9): $C_{out}=0, S_3=1, S_2=0, S_1=0, S_0=1$. $C_{corr} = 0 + 1 \cdot (0+0+1) = 1$. **Still Incorrect!** 9 should not be corrected.

**There must be a misunderstanding of the conditions $S_i$ relate to the sum.**

Let's use the commonly accepted expression for detecting if a 4-bit binary number $A_3A_2A_1A_0$ is GREATER THAN 9:
It is greater than 9 if:
*   $A_3=1$ AND ($A_2=1$ OR $A_1=1$)

Let's re-apply this to our BCD adder.
The binary sum from the first 7483 is $S_3S_2S_1S_0$.
The carry-out is $C_{4,1}$.

Correction is needed if:
*   $C_{4,1} = 1$
*   OR ($C_{4,1} = 0$ AND $S_3=1$ AND ($S_2=1$ OR $S_1=1$)).

Let's simplify this expression for $C_{corr}$:
$C_{corr} = C_{4,1} + \overline{C_{4,1}} \cdot S_3 \cdot (S_2 + S_1)$
$C_{corr} = C_{4,1} + S_3 \cdot (S_2 + S_1)$  (This is equivalent to the expression $C_{out} + S_3 \cdot S_2 + S_3 \cdot S_1$ shown earlier, which we found to be problematic).

**Let's return to the example: $6_{BCD} + 7_{BCD}$**
*   $A=0110, B=0111$
*   First 7483 sum: $S=1101$ (13), $C_{4,1}=0$.

Is this sum greater than 9? Yes, 13 > 9.
The condition for needing correction is if the binary sum is $10$ through $15$.
*   $1010$ (10): $S_3=1, S_2=0, S_1=1, S_0=0$.
*   $1011$ (11): $S_3=1, S_2=0, S_1=1, S_0=1$.
*   $1100$ (12): $S_3=1, S_2=1, S_1=0, S_0=0$.
*   $1101$ (13): $S_3=1, S_2=1, S_1=0, S_0=1$.
*   $1110$ (14): $S_3=1, S_2=1, S_1=1, S_0=0$.
*   $1111$ (15): $S_3=1, S_2=1, S_1=1, S_0=1$.

The condition that the sum $S$ is $>9$ (when $C_{4,1}=0$) can be expressed by detecting these invalid BCD patterns.
The standard logic for detecting if a 4-bit number $X_3X_2X_1X_0$ is greater than $9_{10}$ is:
$X_3 \cdot X_2 \cdot X_1 + X_3 \cdot X_2 \cdot X_0 + X_3 \cdot \overline{X_2} \cdot X_1$. This is still complex.

**The most robust and commonly used detection for "sum is greater than 9" given $S_3S_2S_1S_0$ and $C_{4,1}$ is the following:**
The correction is needed if **$C_{4,1} = 1$ OR $S_3 \cdot S_2 \cdot S_1 \cdot S_0$ is NOT $0000$ AND the sum bits are not $0000$ to $1001$.**

Let's use the logic derived from the behavior of the 7483:
Correction is needed if the first sum is $10_{10}$ to $15_{10}$ OR if there is a carry.
*   The sums $10$ to $15$ are represented by $S_3S_2S_1S_0$ being $1010$ to $1111$.
*   This condition is met if $S_3=1$ AND ($S_2=1$ OR $S_1=1$). This is for sums 12-15. What about 10 and 11?
    *   $10 = 1010$: $S_3=1, S_2=0, S_1=1$.
    *   $11 = 1011$: $S_3=1, S_2=0, S_1=1$.

So, the sum is $>9$ if:
($S_3 \cdot \overline{S_2} \cdot S_1$) OR ($S_3 \cdot S_2$)

Thus, $C_{corr} = C_{4,1} + S_3 \cdot \overline{S_2} \cdot S_1 + S_3 \cdot S_2$.
Let's re-test this:
*   Sum = 0100 (4): $C_{4,1}=0, S_3=0, S_2=1, S_1=0$. $C_{corr} = 0 + 0 \cdot 1 \cdot 0 + 0 \cdot 1 = 0$. Correct.
*   Sum = 1001 (9): $C_{4,1}=0, S_3=1, S_2=0, S_1=0$. $C_{corr} = 0 + 1 \cdot 1 \cdot 0 + 1 \cdot 0 = 0$. Correct.
*   Sum = 1010 (10): $C_{4,1}=0, S_3=1, S_2=0, S_1=1$. $C_{corr} = 0 + 1 \cdot 1 \cdot 1 + 1 \cdot 0 = 1$. Correct.
*   Sum = 1100 (12): $C_{4,1}=0, S_3=1, S_2=1, S_1=0$. $C_{corr} = 0 + 1 \cdot 0 \cdot 0 + 1 \cdot 1 = 1$. Correct.
*   Sum = 1111 (15): $C_{4,1}=0, S_3=1, S_2=1, S_1=1$. $C_{corr} = 0 + 1 \cdot 0 \cdot 1 + 1 \cdot 1 = 1$. Correct.
*   Sum with $C_{4,1}=1$: The expression will naturally evaluate to 1 if $C_{4,1}=1$.

**So, the correction signal is $C_{corr} = C_{4,1} + S_3 \cdot \overline{S_2} \cdot S_1 + S_3 \cdot S_2$.**

**Let's re-do Example: $6_{BCD} + 7_{BCD}$**
*   $A=0110, B=0111$
*   First 7483 sum: $S_3S_2S_1S_0 = 1101$, $C_{4,1}=0$.
*   Correction calculation: $C_{corr} = 0 + 1 \cdot \overline{1} \cdot 0 + 1 \cdot 1 = 0 + 1 \cdot 0 \cdot 0 + 1 = 1$. Correction is needed.

**Second Addition (7483(2)):**
*   A inputs: $S_0-S_3$ from first addition = 1101
*   B inputs: 0000
*   $C_{0,2}$: $C_{corr}$ = 1

Binary sum: $1101 + 0000 + 1 = 1110$ (Decimal 14).
*   $S'_3S'_2S'_1S'_0 = 1110$
*   $C_{4,2} = 1$

The output is $C_{4,2}S'_3S'_2S'_1S'_0 = 11110$.
The $S'$ outputs are $1110$. This is still not the BCD for 13.

**The correction factor is ADDED to the ORIGINAL sum $S_0-S_3$, not performed on the output of the first 7483 as A inputs to the second 7483.**

**Correct Method 1 (Using two 7483s):**

1.  **First Addition:** Use 7483(1) to add BCD numbers $A$ and $B$. Result is $S_0-S_3$ and $C_{4,1}$.
2.  **Correction Logic:** Generate $C_{corr} = C_{4,1} + S_3 \cdot \overline{S_2} \cdot S_1 + S_3 \cdot S_2$.
3.  **Second Addition:** Use 7483(2).
    *   A inputs: $S_0-S_3$ (from first 7483).
    *   B inputs: $0000$ (constant 0).
    *   $C_0$ input: $C_{corr}$.
    *   The outputs $S'_0-S'_3$ will be the BCD sum.
    *   $C_{4,2}$ will be the carry to the next BCD digit.

Let's retry $6_{BCD} + 7_{BCD}$ with this understanding.
*   $A=0110, B=0111$.
*   First 7483 sum ($S$): $1101$, $C_{4,1}=0$.
*   $C_{corr}$ calculation: $0 + 1 \cdot \overline{1} \cdot 0 + 1 \cdot 1 = 1$.
*   Second 7483:
    *   A inputs: $1101$
    *   B inputs: $0000$
    *   $C_0$: $1$
    *   Sum: $1101 + 0000 + 1 = 1110$.
    *   $S'_3S'_2S'_1S'_0 = 1110$.
    *   $C_{4,2}=1$.

The final BCD sum should be $0001\ 0011$ (13). My calculation $1110$ is still wrong.

**The missing piece is that we add 6 (0110) if correction is needed.**

**Correct Method 1 (Revised):**

1.  **First Addition:** Use 7483(1) to add BCD numbers $A$ and $B$. Result is $S_0-S_3$ and $C_{4,1}$.
2.  **Correction Logic:** Generate $C_{corr} = C_{4,1} + S_3 \cdot \overline{S_2} \cdot S_1 + S_3 \cdot S_2$.
3.  **If $C_{corr}$ is 0:** The result is $S_0-S_3$.
4.  **If $C_{corr}$ is 1:** We need to add 6 to $S_0-S_3$. This requires another adder.

This implies we need a way to selectively add 6. This can be done by using another adder.

**Method 2: Using two 7483 ICs and a multiplexer (or logic to enable addition of 6)**

This becomes more complex. A simpler approach is to use logic gates to detect the correction condition and then add 6 if needed.

**Standard BCD Adder Implementation (Two 7483s):**

*   **IC1 (7483):** Add the two BCD numbers, $A$ and $B$.
    *   $A_0-A_3$ and $B_0-B_3$ are the inputs.
    *   $C_0$ is 0.
    *   Outputs are $S_0-S_3$ and $C_{4,1}$.
*   **Correction Logic:** The correction signal $C_{corr}$ is generated as discussed: $C_{corr} = C_{4,1} + S_3 \cdot \overline{S_2} \cdot S_1 + S_3 \cdot S_2$.
*   **IC2 (7483):** This IC performs the addition of 6 if correction is needed.
    *   If $C_{corr}=0$: We need to add 0.
    *   If $C_{corr}=1$: We need to add 6 ($0110$).
    *   To achieve this, we can set the B inputs of the second 7483 to $0000$ and the carry-in $C_0$ to $C_{corr}$ IF the sum $S$ has been corrected by adding 6.

This structure is still not quite right.

**The correct structure for a 2-IC BCD Adder:**

1.  **First 7483:** Add $A$ and $B$. Result $S_0-S_3$, $C_{4,1}$.
2.  **Logic gates:** Generate a correction value to be added. This correction value is $0110$ if correction is needed, and $0000$ otherwise.
    *   The correction is needed if $C_{4,1}=1$ or $S_3S_2S_1S_0 > 1001$.
    *   The condition for adding 6 is detected by $C_{corr} = C_{4,1} + S_3 \cdot \overline{S_2} \cdot S_1 + S_3 \cdot S_2$.
    *   The value to be added is $0110$ IF $C_{corr}=1$.
    *   This means we need to add $(C_{corr} \cdot 0110)$ to the result of the first addition.

    To add $(C_{corr} \cdot 0110)$ to the output $S_0-S_3$, we can use the second 7483.
    *   The A inputs of the second 7483 will be the outputs $S_0-S_3$ of the first 7483.
    *   The B inputs of the second 7483 will be the bits of 6, but gated by $C_{corr}$.
        *   $B_0$ for 2nd 7483 = $0 \cdot C_{corr}$
        *   $B_1$ for 2nd 7483 = $1 \cdot C_{corr}$
        *   $B_2$ for 2nd 7483 = $1 \cdot C_{corr}$
        *   $B_3$ for 2nd 7483 = $0 \cdot C_{corr}$
    *   The carry-in $C_0$ for the second 7483 is $0$.

**Example: $6_{BCD} + 7_{BCD}$ (using the correct logic)**
*   $A=0110, B=0111$.
*   First 7483 sum ($S$): $S_3S_2S_1S_0 = 1101$, $C_{4,1}=0$.
*   $C_{corr} = 0 + 1 \cdot \overline{1} \cdot 0 + 1 \cdot 1 = 1$.
*   Second 7483:
    *   A inputs: $1101$ (from $S_0-S_3$ of first 7483).
    *   B inputs:
        *   $B_0 = 0 \cdot 1 = 0$
        *   $B_1 = 1 \cdot 1 = 1$
        *   $B_2 = 1 \cdot 1 = 1$
        *   $B_3 = 0 \cdot 1 = 0$
        So, B inputs are $0110$.
    *   $C_0$: $0$.

    Second 7483 adds $1101 + 0110 + 0 = 10011$.
    *   $S'_3S'_2S'_1S'_0 = 0011$
    *   $C_{4,2} = 1$

The result is $C_{4,2}S'_3S'_2S'_1S'_0 = 10011$. The BCD sum is $0001\ 0011$.
$S'_3S'_2S'_1S'_0 = 0011$ represents 3, and $C_{4,2}=1$ represents the tens digit. This is correct for 13.

**Example: $4_{BCD} + 5_{BCD}$**
*   $A=0100, B=0101$.
*   First 7483 sum ($S$): $S_3S_2S_1S_0 = 1001$, $C_{4,1}=0$.
*   $C_{corr} = 0 + 1 \cdot \overline{0} \cdot 0 + 1 \cdot 0 = 0 + 1 \cdot 1 \cdot 0 + 0 = 0$. Correction is not needed.
*   Second 7483:
    *   A inputs: $1001$ (from $S_0-S_3$ of first 7483).
    *   B inputs:
        *   $B_0 = 0 \cdot 0 = 0$
        *   $B_1 = 1 \cdot 0 = 0$
        *   $B_2 = 1 \cdot 0 = 0$
        *   $B_3 = 0 \cdot 0 = 0$
        So, B inputs are $0000$.
    *   $C_0$: $0$.

    Second 7483 adds $1001 + 0000 + 0 = 1001$.
    *   $S'_3S'_2S'_1S'_0 = 1001$
    *   $C_{4,2} = 0$

The result is $C_{4,2}S'_3S'_2S'_1S'_0 = 01001$. The BCD sum is $0000\ 1001$.
$S'_3S'_2S'_1S'_0 = 1001$ represents 9, and $C_{4,2}=0$ means no tens digit. This is correct for 9.

**Important Points to Remember for BCD Adder:**

*   BCD addition requires a correction step if the binary sum exceeds 9 or if a carry is generated.
*   The correction involves adding 6.
*   Two 7483 ICs are typically used for a 4-bit BCD adder.
*   The logic for generating the correction signal ($C_{corr}$) is critical and must be correctly implemented.

**Textbook References:**

*   **Roth C.H. - Fundamentals of Logic Design:** Chapter 7 would cover BCD codes and BCD arithmetic, explaining the need for correction.
*   **Verilog HDL Synthesis: A Practical Primer by J. Bhasker & Verilog HDL: A guide to digital design and synthesis by Palnitkar S.:** These books would show how to synthesize BCD adders in HDL, which maps directly to the logic implemented by the 7483 and gates.

**Course Outcome Alignment:**

*   **CO1 (K3):** Design and demonstrate the functioning of various combinational circuits using ICs. Designing a BCD adder using 7483s and other gates fits this outcome.
*   **CO2 (K3):** Apply an industry-compatible hardware description language to implement digital circuits. The logic for BCD addition is a common example for HDL synthesis.

---

### 4. Laboratory Demonstration and Practical Considerations

When performing these experiments in the lab:

*   **Breadboarding:** Ensure proper connections are made. Double-check power ($V_{CC}$) and ground (GND) for all ICs.
*   **Input Signals:** Use DIP switches or logic probes for applying input bits (0 or 1).
*   **Output Observation:** Use LEDs with current-limiting resistors to observe the sum and carry outputs.
*   **IC Pinouts:** Always refer to the datasheet for the specific ICs you are using (7483, 7404, 7486, etc.).
*   **Testing:** Test all possible input combinations or a representative set to verify the functionality of the adder/subtractor and BCD adder.

**For 4-bit Adder/Subtractor:**
*   Test both addition and subtraction modes.
*   Check for overflow conditions in addition and borrow conditions in subtraction.

**For BCD Adder:**
*   Test cases where the sum is less than 9, between 10 and 18, and cases that generate a carry to the next digit.

---

### Practice Questions

**Question 1 (4-bit Adder/Subtractor):**
Design a circuit using the 7483 IC and necessary gates to perform $A - B$ where $A$ and $B$ are 4-bit binary numbers. Explain how the 2's complement method is used and what the carry-out indicates. If $A=10$ (1010) and $B=5$ (0101), what should be the output ($S_3S_2S_1S_0$ and $C_4$)?

**Answer 1:**
To perform $A-B$, we compute $A + \overline{B} + 1$. This is achieved by feeding $A$ to the $A$ inputs, feeding the inverted bits of $B$ (using NOT gates) to the $B$ inputs, and setting the carry-in $C_0$ to 1.
The carry-out $C_4$ indicates: $C_4=1$ for a non-negative result (or no borrow), and $C_4=0$ for a negative result (or borrow needed).

For $A=10$ (1010) and $B=5$ (0101):
$A = 1010$
$\overline{B} = \overline{0101} = 1010$
$C_0 = 1$

7483 inputs: A = 1010, B = 1010, $C_0 = 1$.
Sum: $1010 + 1010 + 1$
*   $S_0 = 0 \oplus 0 \oplus 1 = 1$
*   $C_1 = (0 \cdot 0) + (1 \cdot (0 \oplus 0)) = 0$
*   $S_1 = 1 \oplus 1 \oplus 0 = 0$
*   $C_2 = (1 \cdot 1) + (0 \cdot (1 \oplus 1)) = 1$
*   $S_2 = 0 \oplus 0 \oplus 1 = 1$
*   $C_3 = (0 \cdot 0) + (1 \cdot (0 \oplus 0)) = 0$
*   $S_3 = 1 \oplus 1 \oplus 0 = 0$
*   $C_4 = (1 \cdot 1) + (0 \cdot (1 \oplus 1)) = 1$

Result: $S_3S_2S_1S_0 = 0101$ (which is 5). $C_4=1$. This is correct as $10-5=5$, and the carry-out indicates a positive result.

---

**Question 2 (BCD Adder):**
Design a circuit using two 7483 ICs and necessary gates to add two BCD numbers, $4_{BCD}$ and $8_{BCD}$. Show the intermediate results and the final output.

**Answer 2:**
$A = 4_{BCD} = 0100$
$B = 8_{BCD} = 1000$

**First 7483 Addition:**
*   A inputs: 0100
*   B inputs: 1000
*   $C_0$: 0
*   Sum ($S$): $0100 + 1000 = 1100$ (Decimal 12).
*   $S_3S_2S_1S_0 = 1100$
*   $C_{4,1} = 0$

**Correction Logic:**
$C_{corr} = C_{4,1} + S_3 \cdot \overline{S_2} \cdot S_1 + S_3 \cdot S_2$
$C_{corr} = 0 + 1 \cdot \overline{1} \cdot 0 + 1 \cdot 1$
$C_{corr} = 0 + 1 \cdot 0 \cdot 0 + 1 = 0 + 0 + 1 = 1$.
Correction is needed.

**Second 7483 Addition:**
*   A inputs: $S_0-S_3$ from first 7483 = $1100$.
*   B inputs:
    *   $B_0 = 0 \cdot C_{corr} = 0 \cdot 1 = 0$
    *   $B_1 = 1 \cdot C_{corr} = 1 \cdot 1 = 1$
    *   $B_2 = 1 \cdot C_{corr} = 1 \cdot 1 = 1$
    *   $B_3 = 0 \cdot C_{corr} = 0 \cdot 1 = 0$
    So, B inputs are $0110$ (which is 6).
*   $C_0$: $0$.

Sum: $1100 + 0110 + 0 = 10010$ (Decimal 18).
*   $S'_3S'_2S'_1S'_0 = 0010$
*   $C_{4,2} = 1$

**Final Output:**
The BCD sum is represented by $C_{4,2}S'_3S'_2S'_1S'_0 = 10010$.
This corresponds to $12_{BCD}$, where the '1' is the carry from $C_{4,2}$ and '2' is from $S'_3S'_2S'_1S'_0 = 0010$. This is correct for $4+8=12$.

---

### Summary of Key Takeaways

*   The 7483 is a 4-bit binary ripple carry adder.
*   Subtraction can be performed using the 2's complement method, which involves inverting the subtrahend and adding 1 (achieved by setting $C_0=1$ and inverting B inputs).
*   BCD addition requires a correction step (adding 6) if the binary sum exceeds 9 or generates a carry.
*   A 4-bit BCD adder typically uses two 7483 ICs and logic gates for correction.
*   Understanding the condition for correction ($C_{corr}$) is crucial for BCD adder design.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### References

*   **Bhasker, J.** (2001). *Verilog HDL Synthesis: A Practical Primer*. B. S. Publications.
*   **Roth Jr., C. H., & John, L. K.** (2009). *Fundamentals of Logic Design*. Jaico Publishers.
*   **Palnitkar, S.** (2003). *Verilog HDL: A Guide to Digital Design and Synthesis* (2nd ed.). Prentice Hall.

---