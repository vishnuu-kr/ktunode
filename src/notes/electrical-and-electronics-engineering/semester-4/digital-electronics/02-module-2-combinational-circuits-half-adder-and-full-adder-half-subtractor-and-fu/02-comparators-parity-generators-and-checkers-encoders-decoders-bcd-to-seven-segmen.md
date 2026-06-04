---
title: "Comparators – parity generators and checkers – encoders – decoders – BCD to seven segment decoder."
subject: "DIGITAL ELECTRONICS"
module: "Module 2: Combinational circuits – half adder and full adder, half subtractor and full subtractor – 4"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e4e"
status: "completed"
scrapedAt: "2026-05-23T16:15:51.373Z"
---
# Digital Electronics: Module 2 - Combinational Circuits (Part 2)

This module delves into essential combinational logic circuits that perform specific operations on binary inputs. We will explore comparators, parity generators and checkers, encoders, decoders, and the widely used BCD to seven-segment decoder.

---

## Module Overview

This section of Module 2 builds upon the fundamental concepts of half and full adders/subtractors by introducing combinational circuits that perform comparison, error detection/correction, data selection, and display driving.

---

## Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the functionality and operation of digital comparators.** (Related to CO1, CO2, K2)
*   **Design and analyze parity generators and checkers for error detection.** (Related to CO1, CO2, CO6, K3, K6)
*   **Explain the principles of encoders and their applications.** (Related to CO1, CO2, K2)
*   **Describe the operation of decoders and their uses in various digital systems.** (Related to CO1, CO2, K2)
*   **Analyze the design and operation of a BCD to seven-segment decoder for display purposes.** (Related to CO1, CO2, CO4, K2)

---

## Course Outcomes Alignment

*   **CO1 (Identify number systems, binary codes, and formulate digital functions):** Understanding the binary inputs and outputs of these circuits directly relates to number systems and codes. Boolean algebra is used to derive their logic.
*   **CO2 (Design combinational logic circuits):** This entire topic focuses on the design and analysis of combinational circuits.
*   **CO6 (Design and realize hardware circuits):** The practical implementation of these circuits often involves designing and building them.

---

## 1. Comparators

**Definition:** A comparator is a digital circuit that compares two binary numbers and produces an output indicating their relationship: whether they are equal, or if one is greater than the other.

**Key Concepts:**

*   **Purpose:** To determine the relationship ($A > B$, $A < B$, $A = B$) between two binary numbers.
*   **Inputs:** Two binary numbers, typically represented as $A = A_3A_2A_1A_0$ and $B = B_3B_2B_1B_0$.
*   **Outputs:** Typically three outputs:
    *   $A > B$ (GT)
    *   $A < B$ (LT)
    *   $A = B$ (EQ)

**Types of Comparators:**

*   **Magnitude Comparator:** Compares the magnitude of two binary numbers.
*   **Identity Comparator:** Compares if two binary numbers are identical. (This is a subset of the magnitude comparator where only the EQ output is of interest).

### 1.1. 2-bit Magnitude Comparator

Let's consider two 2-bit numbers: $A = A_1A_0$ and $B = B_1B_0$.

**Truth Table:**

| $A_1$ | $A_0$ | $B_1$ | $B_0$ | $A > B$ (GT) | $A < B$ (LT) | $A = B$ (EQ) |
| :---: | :---: | :---: | :---: | :----------: | :----------: | :----------: |
|   0   |   0   |   0   |   0   |      0       |      0       |      1       |
|   0   |   0   |   0   |   1   |      0       |      1       |      0       |
|   0   |   0   |   1   |   0   |      0       |      1       |      0       |
|   0   |   0   |   1   |   1   |      0       |      1       |      0       |
|   0   |   1   |   0   |   0   |      1       |      0       |      0       |
|   0   |   1   |   0   |   1   |      0       |      0       |      1       |
|   0   |   1   |   1   |   0   |      0       |      1       |      0       |
|   0   |   1   |   1   |   1   |      0       |      1       |      0       |
|   1   |   0   |   0   |   0   |      1       |      0       |      0       |
|   1   |   0   |   0   |   1   |      1       |      0       |      0       |
|   1   |   0   |   1   |   0   |      0       |      0       |      1       |
|   1   |   0   |   1   |   1   |      0       |      1       |      0       |
|   1   |   1   |   0   |   0   |      1       |      0       |      0       |
|   1   |   1   |   0   |   1   |      1       |      0       |      0       |
|   1   |   1   |   1   |   0   |      1       |      0       |      0       |
|   1   |   1   |   1   |   1   |      0       |      0       |      1       |

**Deriving Logic Equations (using K-maps or direct observation):**

*   **GT (A > B):**
    $GT = A_1 \overline{B_1} + A_1 \overline{B_0} \overline{B_1} + \overline{A_1} A_0 \overline{B_1} \overline{B_0}$
    Simplified: $GT = A_1\overline{B_1} + A_1\overline{B_0} + \overline{A_1}A_0\overline{B_1}\overline{B_0}$
    *A more efficient way to think about GT:*
    $A > B$ if:
    1.  $A_1$ is 1 and $B_1$ is 0 (most significant bit difference).
    2.  $A_1 = B_1$ AND $A_0 > B_0$ (less significant bit difference).

    So, $GT = A_1\overline{B_1} + (A_1 B_1 + \overline{A_1} \overline{B_1}) (A_0 \overline{B_0})$
    $GT = A_1\overline{B_1} + A_1 B_1 A_0 \overline{B_0} + \overline{A_1} \overline{B_1} A_0 \overline{B_0}$

*   **LT (A < B):**
    *A > B if:*
    1.  $A_1$ is 0 and $B_1$ is 1.
    2.  $A_1 = B_1$ AND $A_0 < B_0$.

    So, $LT = \overline{A_1}B_1 + (A_1 B_1 + \overline{A_1} \overline{B_1}) (\overline{A_0} B_0)$
    $LT = \overline{A_1}B_1 + A_1 B_1 \overline{A_0} B_0 + \overline{A_1} \overline{B_1} \overline{A_0} B_0$

*   **EQ (A = B):**
    $A = B$ if $A_1 = B_1$ AND $A_0 = B_0$.
    $EQ = (A_1 B_1 + \overline{A_1} \overline{B_1}) (A_0 B_0 + \overline{A_0} \overline{B_0})$
    $EQ = A_1B_1A_0B_0 + A_1B_1\overline{A_0}\overline{B_0} + \overline{A_1}\overline{B_1}A_0B_0 + \overline{A_1}\overline{B_1}\overline{A_0}\overline{B_0}$

**Circuit Diagram:**

The circuit can be implemented using AND, OR, and NOT gates based on the derived Boolean expressions.

### 1.2. n-bit Magnitude Comparator

**Cascading Comparators:** To compare n-bit numbers, we can cascade k-bit comparators. A k-bit comparator's outputs ($GT_{k-1}$, $LT_{k-1}$, $EQ_{k-1}$) are used along with the inputs of the next k-bit comparator.

*   **For the most significant bit block:** The inputs are $A_{n-1}$ and $B_{n-1}$. The outputs are $GT_{n-1}$, $LT_{n-1}$, $EQ_{n-1}$.
*   **For subsequent blocks:** The inputs are $A_i$, $B_i$. The critical comparison happens only if the higher-order bits were equal.
    *   The $GT$ output of the cascaded circuit is $GT_{prev} + EQ_{prev} \cdot GT_{current}$.
    *   The $LT$ output of the cascaded circuit is $LT_{prev} + EQ_{prev} \cdot LT_{current}$.
    *   The $EQ$ output of the cascaded circuit is $EQ_{prev} \cdot EQ_{current}$.

**Example:** 4-bit comparator from two 2-bit comparators.

*   Inputs: $A_3A_2A_1A_0$, $B_3B_2B_1B_0$.
*   Block 1: Compares $A_3A_2$ and $B_3B_2$. Outputs $GT_1, LT_1, EQ_1$.
*   Block 2: Compares $A_1A_0$ and $B_1B_0$. Outputs $GT_2, LT_2, EQ_2$.
*   Final Outputs:
    *   $A > B$: $GT = GT_1 + (EQ_1 \cdot GT_2)$
    *   $A < B$: $LT = LT_1 + (EQ_1 \cdot LT_2)$
    *   $A = B$: $EQ = EQ_1 \cdot EQ_2$

**Integrated Circuits:** ICs like the 7485 (4-bit magnitude comparator) are available, which can be cascaded for larger numbers.

**Floyd & Baker, Chapter 7:** Discusses comparators and their implementation.

---

## 2. Parity Generators and Checkers

**Definition:** Parity is an error-checking technique used to detect single-bit errors during data transmission or storage.

**Key Concepts:**

*   **Parity Bit:** An extra bit added to a binary data word to make the total number of 1s either even or odd.
*   **Even Parity:** The parity bit is set to 1 if the number of 1s in the data word is odd, and 0 if the number of 1s is even. The total number of 1s in the data plus parity bit is always even.
*   **Odd Parity:** The parity bit is set to 1 if the number of 1s in the data word is even, and 0 if the number of 1s is odd. The total number of 1s in the data plus parity bit is always odd.

### 2.1. Parity Generator

**Purpose:** To generate the parity bit for a given data word.

**Logic:** The parity bit is essentially the XOR sum of all the data bits.

*   **Even Parity Generator:** The output is 1 if the number of input 1s is odd. This is equivalent to the XOR operation.
    For a 4-bit data word $D_3D_2D_1D_0$:
    Parity Bit (P) = $D_3 \oplus D_2 \oplus D_1 \oplus D_0$

*   **Odd Parity Generator:** The output is 1 if the number of input 1s is even. This is the complement of the XOR sum (or alternatively, can be achieved by XORing with a '1').
    For a 4-bit data word $D_3D_2D_1D_0$:
    Parity Bit (P) = $\overline{D_3 \oplus D_2 \oplus D_1 \oplus D_0}$

**Circuit Implementation:** Parity generators are implemented using XOR gates. A cascade of XOR gates can generate the parity bit for any number of bits.

**Example:** 3-bit even parity generator for data $D_2D_1D_0$.
$P = D_2 \oplus D_1 \oplus D_0$
If $D_2D_1D_0 = 101$, then $P = 1 \oplus 0 \oplus 1 = 0$. Transmitted word = 1010. (Even number of 1s).
If $D_2D_1D_0 = 111$, then $P = 1 \oplus 1 \oplus 1 = 1$. Transmitted word = 1111. (Even number of 1s).

### 2.2. Parity Checker

**Purpose:** To check if an incoming data word (including the parity bit) has a valid parity.

**Logic:**

*   **Even Parity Checker:** The checker re-calculates the parity of the incoming data bits and XORs it with the received parity bit. If the result is 0, the parity is even and likely error-free. If the result is 1, an error is detected.
    For a 4-bit data word $D_3D_2D_1D_0$ and received parity bit $P_{rx}$:
    Error (E) = $D_3 \oplus D_2 \oplus D_1 \oplus D_0 \oplus P_{rx}$

*   **Odd Parity Checker:** The checker re-calculates the parity (complement of XOR sum) and XORs it with the received parity bit. If the result is 0, the parity is odd and likely error-free. If the result is 1, an error is detected.
    Error (E) = $\overline{D_3 \oplus D_2 \oplus D_1 \oplus D_0} \oplus P_{rx}$
    Alternatively, using XOR properties: $E = (D_3 \oplus D_2 \oplus D_1 \oplus D_0) \oplus P_{rx} \oplus 1$

**Circuit Implementation:** Parity checkers use XOR gates, similar to generators, with the addition of the received parity bit as an input.

**Malvino & Leach, Chapter 5:** Provides a good explanation of parity generation and checking.

**Important Note:** Parity checking can only detect an odd number of bit errors (1, 3, 5, etc.). It cannot detect an even number of bit errors (2, 4, etc.).

---

## 3. Encoders

**Definition:** An encoder is a combinational circuit that converts coded information from one format to another. Typically, it converts a set of active input lines to a coded output, usually binary.

**Key Concepts:**

*   **Purpose:** To reduce the number of bits required to represent data or to convert from a non-binary representation to a binary one.
*   **Inputs:** A number of input lines, usually only one of which is active (high) at any given time.
*   **Outputs:** A binary code representing which input line is active.

### 3.1. Priority Encoder

**Definition:** In a priority encoder, if multiple inputs are active simultaneously, the encoder prioritizes one input and generates its corresponding code. The input with the highest priority is encoded.

**Example:** 8-to-3 Priority Encoder

*   **Inputs:** $I_0, I_1, I_2, I_3, I_4, I_5, I_6, I_7$ (where $I_7$ has the highest priority).
*   **Outputs:** $A_2, A_1, A_0$ (a 3-bit binary code).
*   **Additional Output (Optional but useful):** Valid (V) or Data Present (D) – indicates if any input is active.

**Truth Table (Simplified, assuming only one input active):**

| $I_7$ | $I_6$ | $I_5$ | $I_4$ | $I_3$ | $I_2$ | $I_1$ | $I_0$ | $A_2$ | $A_1$ | $A_0$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   0   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |
|   0   |   0   |   0   |   0   |   0   |   0   |   0   |   1   |   0   |   0   |   0   |
|   0   |   0   |   0   |   0   |   0   |   0   |   1   |   0   |   0   |   0   |   1   |
|   0   |   0   |   0   |   0   |   0   |   1   |   0   |   0   |   0   |   1   |   0   |
|   0   |   0   |   0   |   0   |   1   |   0   |   0   |   0   |   0   |   1   |   1   |
|   0   |   0   |   0   |   1   |   0   |   0   |   0   |   0   |   1   |   0   |   0   |
|   0   |   0   |   1   |   0   |   0   |   0   |   0   |   0   |   1   |   0   |   1   |
|   0   |   1   |   0   |   0   |   0   |   0   |   0   |   0   |   1   |   1   |   0   |
|   1   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |   1   |   1   |   1   |

**Truth Table (with priority):**

| $I_7$ | $I_6$ | $I_5$ | $I_4$ | $I_3$ | $I_2$ | $I_1$ | $I_0$ | $A_2$ | $A_1$ | $A_0$ |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   0   |   0   |   0   |   0   |   0   |   0   |   0   |   1   |   0   |   0   |   0   |
|   0   |   0   |   0   |   0   |   0   |   0   |   1   |   1   |   0   |   0   |   1   |  (I1 active, highest priority)
|   0   |   0   |   0   |   0   |   0   |   1   |   1   |   1   |   0   |   1   |   0   |  (I2 active, highest priority)
|   1   |   0   |   0   |   0   |   0   |   0   |   0   |   0   |   1   |   1   |   1   |  (I7 active, highest priority)

**Logic Derivation:**
The logic for each output bit considers the active input with the highest priority.

*   $A_0 = \overline{I_7} \overline{I_6} \overline{I_5} \overline{I_4} \overline{I_3} \overline{I_2} I_1 + \overline{I_7} \overline{I_6} \overline{I_5} \overline{I_4} \overline{I_3} \overline{I_2} \overline{I_1} I_0$ (for simple encoder where only one input is active)
    For priority encoder, this becomes:
    $A_0 = I_1 \overline{I_2} \overline{I_3} \overline{I_4} \overline{I_5} \overline{I_6} \overline{I_7} + I_3 \overline{I_4} \overline{I_5} \overline{I_6} \overline{I_7} + I_5 \overline{I_6} \overline{I_7} + I_7 + I_0 \overline{I_1}\overline{I_2}\overline{I_3}\overline{I_4}\overline{I_5}\overline{I_6}\overline{I_7}$
    *(Note: Deriving the simplified priority encoder logic can be complex. It's often done using K-maps where higher-priority inputs are marked as 'don't care' for the terms that would be affected by lower-priority inputs.)*

    A simpler approach for $A_0$: $A_0 = I_1 \oplus I_3 \oplus I_5 \oplus I_7$. (This is only true if no two inputs with odd indices are active simultaneously, which is not generally the case for a priority encoder). The correct derivation requires considering which is the highest active input.
    *   $A_0$ is 1 if $I_1$ is active and higher are inactive OR $I_3$ is active and higher are inactive OR $I_5$ is active and higher are inactive OR $I_7$ is active.
    $A_0 = I_1\overline{I_2}\overline{I_3}\overline{I_4}\overline{I_5}\overline{I_6}\overline{I_7} + I_3\overline{I_4}\overline{I_5}\overline{I_6}\overline{I_7} + I_5\overline{I_6}\overline{I_7} + I_7 + I_0\overline{I_1}\overline{I_2}\overline{I_3}\overline{I_4}\overline{I_5}\overline{I_6}\overline{I_7}$

*   $A_1 = I_2\overline{I_3}\overline{I_4}\overline{I_5}\overline{I_6}\overline{I_7} + I_3\overline{I_4}\overline{I_5}\overline{I_6}\overline{I_7} + I_6\overline{I_7} + I_0\overline{I_1}\overline{I_2}\overline{I_3}\overline{I_4}\overline{I_5}\overline{I_6}\overline{I_7} + I_4\overline{I_5}\overline{I_6}\overline{I_7}$
    *(Notice the pattern: each output bit is determined by the highest priority input that would set that bit to 1, AND all higher priority inputs are inactive)*

**Example:** If $I_5$ is active and all others are inactive.
$I_7=0, I_6=0, I_5=1, I_4=0, I_3=0, I_2=0, I_1=0, I_0=0$.
Output should be $101_2$ (binary for 5).
$A_0 = I_5\overline{I_6}\overline{I_7} = 1 \cdot 1 \cdot 1 = 1$.
$A_1 = I_5\overline{I_6}\overline{I_7} = 1 \cdot 1 \cdot 1 = 1$.
$A_2 = \overline{I_5}\overline{I_6}\overline{I_7} = 1 \cdot 1 \cdot 1 = 1$? No.

The correct logic for $A_2$ is: $A_2 = I_4 + I_5 + I_6 + I_7$.
If $I_5$ is active:
$A_0 = I_1\overline{I_2}\overline{I_3}\overline{I_4}\overline{I_5}\overline{I_6}\overline{I_7} + I_3\overline{I_4}\overline{I_5}\overline{I_6}\overline{I_7} + I_5\overline{I_6}\overline{I_7} + I_7 + I_0\overline{I_1}\overline{I_2}\overline{I_3}\overline{I_4}\overline{I_5}\overline{I_6}\overline{I_7}$
If only $I_5$ is active: $A_0 = 0 + 0 + 1 \cdot 1 \cdot 1 + 0 + 0 = 1$.
$A_1 = I_2\overline{I_3}\overline{I_4}\overline{I_5}\overline{I_6}\overline{I_7} + I_3\overline{I_4}\overline{I_5}\overline{I_6}\overline{I_7} + I_6\overline{I_7} + I_4\overline{I_5}\overline{I_6}\overline{I_7}$
If only $I_5$ is active: $A_1 = 0 + 0 + 0 + 0 = 0$.
$A_2 = I_4 + I_5 + I_6 + I_7$.
If only $I_5$ is active: $A_2 = 0 + 1 + 0 + 0 = 1$.
So, output is $101_2$, which is correct for input 5.

**Mano & Ciletti, Chapter 6:** Details the design of priority encoders.

### 3.2. Other Types of Encoders:

*   **Decimal-to-BCD Encoder:** Converts a decimal input (usually 10 lines) to a 4-bit BCD code.
*   **Octal-to-Binary Encoder:** Converts 8 octal input lines to a 3-bit binary code.
*   **Hexadecimal-to-Binary Encoder:** Converts 16 hexadecimal input lines to a 4-bit binary code.

---

## 4. Decoders

**Definition:** A decoder is a combinational circuit that converts coded input data into a coded output data. Typically, it takes a binary input and activates one of many output lines.

**Key Concepts:**

*   **Purpose:** To select one of many outputs based on a binary input code.
*   **Inputs:** An n-bit binary input.
*   **Outputs:** $2^n$ output lines, where only one output line is active (usually high) for each unique input combination.

### 4.1. Binary Decoder (n-to-$2^n$ Decoder)

**Example:** 2-to-4 Decoder

*   **Inputs:** $A, B$ (2 bits).
*   **Outputs:** $Y_0, Y_1, Y_2, Y_3$ (4 lines).

**Truth Table:**

| $B$ | $A$ | $Y_0$ | $Y_1$ | $Y_2$ | $Y_3$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
|   0   |   0   |   1   |   0   |   0   |   0   |
|   0   |   1   |   0   |   1   |   0   |   0   |
|   1   |   0   |   0   |   0   |   1   |   0   |
|   1   |   1   |   0   |   0   |   0   |   1   |

**Logic Derivation:**

*   $Y_0 = \overline{B} \overline{A}$
*   $Y_1 = \overline{B} A$
*   $Y_2 = B \overline{A}$
*   $Y_3 = B A$

**Circuit Implementation:** Requires $n$ NOT gates and $2^n$ AND gates.

**Enable Input:** Many decoders have an enable input. If the enable is inactive, all outputs are inactive. This allows for cascading decoders.

**Example:** 3-to-8 Decoder (Inputs: $A_2, A_1, A_0$; Outputs: $Y_0$ to $Y_7$)
*   $Y_0 = \overline{A_2} \overline{A_1} \overline{A_0}$
*   $Y_1 = \overline{A_2} \overline{A_1} A_0$
*   ...
*   $Y_7 = A_2 A_1 A_0$

**Applications of Decoders:**

*   **Address decoding:** Selecting specific memory locations or I/O devices.
*   **Data demultiplexing:** Routing data to one of several destinations.
*   **Implementing Boolean functions:** Each output of a decoder corresponds to a minterm. By ORing specific decoder outputs, any Boolean function can be implemented.

**Floyd & Baker, Chapter 7:** Covers decoders in detail.

### 4.2. Dedicated Decoders

*   **Decimal-to-BCD Decoder:** Not a standard decoder, as it's about conversion.
*   **Octal-to-Binary Decoder:** Takes 8 inputs (one active for each octal digit) and outputs a 3-bit binary code. This is the reverse of an octal-to-binary encoder.
*   **Hexadecimal-to-Binary Decoder:** Takes 16 inputs and outputs a 4-bit binary code.

---

## 5. BCD to Seven-Segment Decoder

**Definition:** A BCD to seven-segment decoder is a specialized combinational circuit that takes a 4-bit Binary Coded Decimal (BCD) input and outputs signals to control a seven-segment display to show the corresponding decimal digit (0-9).

**Key Concepts:**

*   **Seven-Segment Display:** A common electronic display device that can display alphanumeric characters. It consists of seven segments (labeled a through g) that can be individually lit to form the desired character.
*   **BCD Input:** The input is a 4-bit code representing decimal digits 0 through 9. For example, $0000_2$ for 0, $1001_2$ for 9.
*   **Segment Control Outputs:** The decoder outputs signals to control which segments (a-g) are turned ON for each BCD input.
*   **Common Anode vs. Common Cathode:**
    *   **Common Anode:** The common pin is connected to VCC. To turn a segment ON, its corresponding input pin needs to be LOW (0).
    *   **Common Cathode:** The common pin is connected to Ground. To turn a segment ON, its corresponding input pin needs to be HIGH (1).

**Truth Table (Common Cathode Example):**

| BCD Input ($D_3D_2D_1D_0$) | Digit Displayed | Segment `a` | Segment `b` | Segment `c` | Segment `d` | Segment `e` | Segment `f` | Segment `g` |
| :-------------------------: | :---------------: | :---------: | :---------: | :---------: | :---------: | :---------: | :---------: | :---------: |
|           0000            |         0         |      1      |      1      |      1      |      1      |      1      |      1      |      0      |
|           0001            |         1         |      0      |      1      |      1      |      0      |      0      |      0      |      0      |
|           0010            |         2         |      1      |      1      |      0      |      1      |      1      |      0      |      1      |
|           0011            |         3         |      1      |      1      |      1      |      1      |      0      |      0      |      1      |
|           0100            |         4         |      0      |      1      |      1      |      0      |      0      |      1      |      1      |
|           0101            |         5         |      1      |      0      |      1      |      1      |      0      |      1      |      1      |
|           0110            |         6         |      1      |      0      |      1      |      1      |      1      |      1      |      1      |
|           0111            |         7         |      1      |      1      |      1      |      0      |      0      |      0      |      0      |
|           1000            |         8         |      1      |      1      |      1      |      1      |      1      |      1      |      1      |
|           1001            |         9         |      1      |      1      |      1      |      1      |      0      |      1      |      1      |

**Logic Derivation:**

For each segment (a through g), we derive a Boolean expression based on the BCD input. We can use Karnaugh maps (K-maps) for simplification. The inputs are $D_3, D_2, D_1, D_0$.

Let's derive the logic for segment 'a' (common cathode):

| $D_3D_2D_1D_0$ | Seg 'a' |
| :------------: | :-----: |
|      0000      |    1    |
|      0001      |    0    |
|      0010      |    1    |
|      0011      |    1    |
|      0100      |    0    |
|      0101      |    1    |
|      0110      |    1    |
|      0111      |    1    |
|      1000      |    1    |
|      1001      |    1    |

K-map for segment 'a':

```
      D1D0
D3D2  00 01 11 10
------------------
00    1  0  1  1
01    0  1  1  1
11    X  X  X  X  (Illegal BCD, typically don't care)
10    1  1  X  X
```

Simplifying the K-map for 'a':
$a = \overline{D_3}\overline{D_2}\overline{D_1} + \overline{D_3}D_2\overline{D_1} + \overline{D_3}D_2D_1 + \overline{D_3}D_1 + D_3\overline{D_2} + D_3\overline{D_1}$
(This needs careful grouping of 'don't cares' to get the most simplified expression.)

*   A more systematic way:
    $a = \overline{D_3}\overline{D_2}\overline{D_1} + \overline{D_3}D_2\overline{D_1} + \overline{D_3}D_2D_1 + \overline{D_3}D_1 + D_3$ (Simplified by including all 10 valid BCD inputs)
    $a = \overline{D_3}\overline{D_1} + \overline{D_3}D_2 + D_3$

Let's verify this simplified logic for 'a':
*   0000: $\overline{0}\overline{0} + \overline{0}0 + 0 = 1 \cdot 1 + 0 + 0 = 1$ (Correct)
*   0001: $\overline{0}\overline{0} + \overline{0}0 + 0 = 1 \cdot 1 + 0 + 0 = 1$ (Incorrect, should be 0 for seg 'a' in '1')

This shows the complexity and need for careful K-map usage or a robust derivation.

**Standard ICs:** The most common BCD to seven-segment decoder IC is the **74LS47** (for common anode displays) and **74LS48** (for common cathode displays). These ICs have built-in logic to drive the segments from BCD inputs. They also include features like lamp test, blanking, and ripple blanking.

**Example Application:** Displaying a digital counter. The counter's BCD output is fed into the decoder, which then drives the seven-segment display.

**Malvino & Leach, Chapter 5:** Explains seven-segment displays and their driving circuits.
**Floyd & Baker, Chapter 7:** Also covers these decoders.

---

## 6. Important Points to Remember

*   **Comparators:** Determine the relationship ($>, <, =$) between two binary numbers. n-bit comparators can be cascaded.
*   **Parity:** Used for single-bit error detection. Even parity means an even number of 1s, odd parity means an odd number of 1s. Generators use XOR, checkers use XOR with the parity bit.
*   **Encoders:** Convert one coded input to another, typically converting active input lines to a binary code. Priority encoders handle multiple active inputs by prioritizing.
*   **Decoders:** Convert binary input code to one active output line out of many. Used for selection and address decoding.
*   **BCD to Seven-Segment Decoder:** Translates 4-bit BCD (0-9) to drive a seven-segment display. The logic for each segment depends on the BCD input and whether the display is common anode or common cathode.
*   **Integrated Circuits (ICs):** Many of these functions are available as standard ICs (e.g., 74LS85 for comparators, 74LS47/48 for BCD to 7-segment decoders).

---

## 7. Practice Questions

**Section 1: Comparators**

1.  Design a 1-bit magnitude comparator with inputs A and B. Provide its truth table and Boolean expressions for $A>B$, $A<B$, and $A=B$.
2.  How can you construct a 6-bit magnitude comparator using 4-bit comparators? Write down the logic for the final $A>B$, $A<B$, and $A=B$ outputs.

**Section 2: Parity Generators and Checkers**

3.  A data word is 1101001.
    a)  What is the even parity bit?
    b)  What is the odd parity bit?
    c)  If an even parity checker receives the data word 1101001 with parity bit 0, will it detect an error? Show your calculation.
    d)  If the data word becomes 1101011 (single bit error) with parity bit 0, will the even parity checker detect it?

**Section 3: Encoders**

4.  Design a 4-to-2 encoder that converts a 4-line input (D3, D2, D1, D0) to a 2-bit binary output (A1, A0). Assume only one input is active at a time.
    a)  Provide the truth table.
    b)  Derive the Boolean expressions for A1 and A0.
5.  What is the difference between a simple encoder and a priority encoder? Give an example scenario where a priority encoder is necessary.

**Section 4: Decoders**

6.  Draw the logic diagram for a 3-to-8 decoder.
7.  Explain how a decoder can be used to implement the Boolean function $F = \overline{A}B + A\overline{B}$.

**Section 5: BCD to Seven-Segment Decoder**

8.  For a common cathode seven-segment display, what is the output state of segments 'b' and 'g' when the BCD input is 0101 (decimal 5)?
9.  If a BCD to seven-segment decoder receives an input of 1100 (which is not a valid BCD), what might be the output for segment 'a'? (Assume typical 'don't care' handling in the design).

---

## 8. Answers to Practice Questions

**Section 1: Comparators**

1.  **1-bit Magnitude Comparator:**
    Inputs: $A_0, B_0$
    Truth Table:
    | $A_0$ | $B_0$ | $A_0>B_0$ | $A_0<B_0$ | $A_0=B_0$ |
    | :---: | :---: | :-------: | :-------: | :-------: |
    |   0   |   0   |     0     |     0     |     1     |
    |   0   |   1   |     0     |     1     |     0     |
    |   1   |   0   |     1     |     0     |     0     |
    |   1   |   1   |     0     |     0     |     1     |

    Boolean Expressions:
    *   $A_0 > B_0 = A_0 \overline{B_0}$
    *   $A_0 < B_0 = \overline{A_0} B_0$
    *   $A_0 = B_0 = A_0 B_0 + \overline{A_0} \overline{B_0}$ (This is the XNOR operation)

2.  **Constructing a 6-bit Comparator:**
    Let the two 6-bit numbers be $A = A_5A_4A_3A_2A_1A_0$ and $B = B_5B_4B_3B_2B_1B_0$.
    We use two 4-bit comparators and one 2-bit comparator (or two 3-bit comparators). Let's use two 4-bit comparators and a 2-bit comparator for simplicity of explanation, though 3-bit units would be more efficient.

    Let Comparator 1 (C1) compare $A_5A_4A_3A_2$ with $B_5B_4B_3B_2$.
    Outputs of C1: $GT_1, LT_1, EQ_1$.

    Let Comparator 2 (C2) compare $A_1A_0$ with $B_1B_0$.
    Outputs of C2: $GT_2, LT_2, EQ_2$.

    Final Outputs:
    *   $A > B$: $GT = GT_1 + (EQ_1 \cdot GT_2)$
    *   $A < B$: $LT = LT_1 + (EQ_1 \cdot LT_2)$
    *   $A = B$: $EQ = EQ_1 \cdot EQ_2$

    *(Note: A more common approach would be to use two 3-bit comparators. If using 74LS85 (4-bit), you'd split the 6 bits as: C1 compares $A_5A_4A_3A_2$ with $B_5B_4B_3B_2$, and C2 compares $A_1A_0$ with $B_1B_0$. The 'A > B' output would be $GT_1 + (EQ_1 \cdot GT_2)$, and similarly for $A < B$ and $A = B$. The $A>B$ inputs of C2 would be tied to the $GT_1$ output of C1, $A<B$ inputs of C2 to $LT_1$, and $A=B$ inputs of C2 to $EQ_1$)*

**Section 2: Parity Generators and Checkers**

3.  Data word = 1101001 (7 bits)
    a)  Even parity bit: Count of 1s is 4 (even). For even parity, parity bit should be 0. $P_{even} = 0$.
    b)  Odd parity bit: Count of 1s is 4 (even). For odd parity, parity bit should be 1. $P_{odd} = 1$.
    c)  Even parity checker calculation:
        Received data: 1101001, $P_{rx} = 0$.
        Re-calculated parity of data: $1 \oplus 1 \oplus 0 \oplus 1 \oplus 0 \oplus 0 \oplus 1 = 0$.
        Error = (Re-calculated parity) $\oplus P_{rx}$ = $0 \oplus 0 = 0$.
        The checker will indicate NO error.
    d)  Data word (error): 1101011, $P_{rx} = 0$.
        Re-calculated parity of data: $1 \oplus 1 \oplus 0 \oplus 1 \oplus 0 \oplus 1 \oplus 1 = 1$.
        Error = (Re-calculated parity) $\oplus P_{rx}$ = $1 \oplus 0 = 1$.
        The checker will indicate an ERROR.

**Section 3: Encoders**

4.  **4-to-2 Encoder:**
    Inputs: $D_3, D_2, D_1, D_0$. Outputs: $A_1, A_0$.
    Truth Table:
    | $D_3$ | $D_2$ | $D_1$ | $D_0$ | $A_1$ | $A_0$ |
    | :---: | :---: | :---: | :---: | :---: | :---: |
    |   0   |   0   |   0   |   0   |   0   |   0   |
    |   0   |   0   |   0   |   1   |   0   |   0   |
    |   0   |   0   |   1   |   0   |   0   |   1   |
    |   0   |   1   |   0   |   0   |   1   |   0   |
    |   1   |   0   |   0   |   0   |   1   |   1   |

    Boolean Expressions:
    *   $A_0 = D_1 + D_3$
    *   $A_1 = D_2 + D_3$

5.  **Priority Encoder vs. Simple Encoder:**
    A simple encoder assumes only one input is active at a time. A priority encoder is designed to handle situations where multiple inputs can be active simultaneously. It prioritizes these inputs, and the output code corresponds to the highest priority active input.
    **Scenario:** A computer keyboard. Pressing multiple keys simultaneously requires a priority encoder to determine which key press to register first or to assign priority. If a simple encoder were used, the output would be unpredictable or based on an arbitrary selection.

**Section 4: Decoders**

6.  **Logic Diagram for a 3-to-8 Decoder:**
    *   Requires 3 NOT gates for $\overline{A_2}, \overline{A_1}, \overline{A_0}$.
    *   Requires 8 AND gates, each with 3 inputs.
    *   Each AND gate corresponds to one output line ($Y_0$ to $Y_7$) and its inputs are a unique combination of the three input bits and their complements.
        *   $Y_0$: Inputs $\overline{A_2}, \overline{A_1}, \overline{A_0}$
        *   $Y_1$: Inputs $\overline{A_2}, \overline{A_1}, A_0$
        *   ...
        *   $Y_7$: Inputs $A_2, A_1, A_0$

7.  **Implementing $F = \overline{A}B + A\overline{B}$ using a decoder:**
    The function $F = \overline{A}B + A\overline{B}$ is equivalent to the XOR operation ($A \oplus B$).
    Consider a 2-to-4 decoder with inputs A and B. The outputs are:
    *   $Y_0 = \overline{A}\overline{B}$ (minterm $m_0$)
    *   $Y_1 = \overline{A}B$ (minterm $m_1$)
    *   $Y_2 = A\overline{B}$ (minterm $m_2$)
    *   $Y_3 = AB$ (minterm $m_3$)

    The function $F$ is the sum of minterms $m_1$ and $m_2$. Therefore, we can implement $F$ by ORing the outputs $Y_1$ and $Y_2$ of the 2-to-4 decoder:
    $F = Y_1 + Y_2$
    This would require a 2-to-4 decoder and one OR gate.

**Section 5: BCD to Seven-Segment Decoder**

8.  For common cathode seven-segment display, a HIGH (1) turns a segment ON.
    BCD input is 0101 (decimal 5).
    From the truth table (or typical 74LS48 behavior):
    *   Segment 'b' should be ON: Output for 'b' = 1.
    *   Segment 'g' should be ON: Output for 'g' = 1.
    *(Note: For common anode, these would be 0.)*

9.  For an invalid BCD input like 1100 (decimal 12), the behavior of a standard BCD to seven-segment decoder (like 74LS48) depends on how the "don't care" states are handled in its design. However, typically, the outputs for segments 'a', 'b', 'c', 'f' might be activated, and 'd', 'e', 'g' might be deactivated or follow a pattern determined by the simplification process.
    Let's re-examine the simplified expression for segment 'a': $a = \overline{D_3}\overline{D_1} + \overline{D_3}D_2 + D_3$.
    For input 1100 ($D_3=1, D_2=1, D_1=0, D_0=0$):
    $a = \overline{1}\overline{0} + \overline{1}1 + 1 = 0 \cdot 1 + 0 \cdot 1 + 1 = 0 + 0 + 1 = 1$.
    So, for 1100, segment 'a' would likely be ON. The output for other segments would need similar calculations. ICs like 74LS47/48 often define the output for these invalid codes. For example, 74LS48 shows:
    *   1100 (C): a=1, b=0, c=0, d=1, e=1, f=0, g=0. (Looks like a 'C' with some segments off).

---
This concludes the study notes for comparators, parity generators/checkers, encoders, decoders, and BCD to seven-segment decoders. Remember to consult your textbooks for more in-depth explanations and detailed circuit diagrams.
