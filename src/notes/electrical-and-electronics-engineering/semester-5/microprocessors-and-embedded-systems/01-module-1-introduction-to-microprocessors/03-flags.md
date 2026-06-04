---
title: "Flags"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 1: Introduction to microprocessors "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3620d"
status: "completed"
scrapedAt: "2026-05-23T16:22:36.498Z"
---
# Module 1: Introduction to Microprocessors - Topic: Flags

This module introduces the fundamental concept of flags within microprocessors, crucial for understanding program execution flow and status reporting.

## 1. What are Flags?

Flags are special bits within the **flag register (also known as the Program Status Word - PSW)** of a microprocessor. They are typically individual bits, each designed to indicate the status of a particular operation or condition.

*   **Purpose:** Flags act as indicators, signaling the outcome of arithmetic and logical operations, or the status of certain control signals or external events.
*   **Location:** They reside in a dedicated register, the flag register. The size and specific flags available vary between different microprocessor architectures.
*   **Setting/Clearing:** Flags are usually set (to 1) or cleared (to 0) automatically by the microprocessor based on the result of an instruction. Some instructions can also directly manipulate specific flags.
*   **Conditional Branching:** The primary use of flags is to control the flow of a program. Conditional jump or branch instructions examine the state of specific flags to decide whether to execute a particular block of code.

## 2. The Flag Register (Program Status Word - PSW)

The flag register is a collection of individual flip-flops, where each flip-flop represents a flag.

*   **Structure:** The arrangement and meaning of flags are specific to the microprocessor. For example, the 8085 microprocessor has a 5-bit flag register.
*   **Importance:** Understanding the flag register is essential for writing efficient and effective assembly language programs, as it allows for decision-making based on calculation results.

## 3. Key Flags and Their Functions (Focusing on 8085 Architecture as per CO1 & CO2)

While different microprocessors have varying flag sets, several common flags are fundamental. We will focus on the flags found in the 8085 microprocessor as it is a cornerstone for understanding microprocessor architecture.

**(Refer to Gaonkar, Chapter 3 for details on 8085 flag register.)**

### 3.1 Carry Flag (CY)

*   **Function:** The Carry Flag (CY) is set to 1 if there is a carry-out from the Most Significant Bit (MSB) during an arithmetic operation (like addition) or a borrow from the MSB during a subtraction. It also plays a role in logical operations and shifts.
*   **Example (Addition):**
    *   `00001000` (8) + `00000001` (1) = `00001001` (9). No carry, CY = 0.
    *   `10000000` (128) + `00000001` (1) = `10000001` (129). No carry, CY = 0.
    *   `11111111` (255) + `00000001` (1) = `1 00000000` (0). Carry-out from MSB, CY = 1. The result is stored as 00000000 in the 8-bit accumulator.
*   **Example (Subtraction - Borrow):**
    *   `00001001` (9) - `00000001` (1) = `00001000` (8). No borrow, CY = 0.
    *   `00000000` (0) - `00000001` (1) = `11111111` (-1, in 2's complement). Borrow from MSB, CY = 1.
*   **Use in 8085:** The `JC` (Jump on Carry) and `JNC` (Jump on No Carry) instructions are used to branch based on the CY flag.

### 3.2 Zero Flag (Z)

*   **Function:** The Zero Flag (Z) is set to 1 if the result of an arithmetic or logical operation is zero. Otherwise, it is cleared to 0.
*   **Example:**
    *   `00000101` (5) - `00000101` (5) = `00000000` (0). Result is zero, Z = 1.
    *   `00000110` (6) - `00000001` (1) = `00000101` (5). Result is not zero, Z = 0.
    *   `00001100` (12) AND `00001010` (10) = `00001000` (8). Result is not zero, Z = 0.
    *   `00001100` (12) XOR `00001100` (12) = `00000000` (0). Result is zero, Z = 1.
*   **Use in 8085:** The `JZ` (Jump on Zero) and `JNZ` (Jump on Not Zero) instructions are used for conditional branching.

### 3.3 Sign Flag (S)

*   **Function:** The Sign Flag (S) is set to 1 if the MSB of the result is 1, indicating a negative number in signed arithmetic (using 2's complement representation). It is cleared to 0 if the MSB is 0, indicating a positive number.
*   **Example (8-bit 2's complement):**
    *   `00001010` (10) - `00000100` (4) = `00000110` (6). MSB is 0, S = 0.
    *   `00000100` (4) - `00001010` (10) = `11111010` (-6). MSB is 1, S = 1.
*   **Use in 8085:** The `JS` (Jump on Sign) and `JNS` (Jump on No Sign) instructions are used.

### 3.4 Auxiliary Carry Flag (AC)

*   **Function:** The Auxiliary Carry Flag (AC) is set to 1 if there is a carry from bit 3 to bit 4 (nibble boundary) during an arithmetic operation. This flag is primarily used for BCD (Binary Coded Decimal) arithmetic.
*   **Example:**
    *   `00000100` (4) + `00000010` (2) = `00000110` (6). No carry from bit 3 to bit 4, AC = 0.
    *   `00001001` (9) + `00000001` (1) = `00001010` (10). Carry from bit 3 to bit 4, AC = 1.
*   **Use in 8085:** The `DAA` (Decimal Adjust Accumulator) instruction uses the AC flag to adjust the accumulator contents to form a valid BCD result after an arithmetic operation.

### 3.5 Parity Flag (P)

*   **Function:** The Parity Flag (P) is set to 1 if the result of an operation has an even number of set bits (i.e., even parity). It is cleared to 0 if the result has an odd number of set bits (i.e., odd parity).
*   **Example:**
    *   Result `00001010` (10). Set bits are at positions 1 and 3 (two set bits). Even parity, P = 1.
    *   Result `00001101` (13). Set bits are at positions 0, 2, and 3 (three set bits). Odd parity, P = 0.
*   **Use in 8085:** The `JP` (Jump on Parity) and `JPE` (Jump on Parity Even) instructions are synonymous, and `JPO` (Jump on Parity Odd) instructions are used.

## 4. Other Important Flags (May vary across architectures)

*   **Overflow Flag (OV/V):** Indicates that the result of a signed arithmetic operation has exceeded the capacity of the destination operand, leading to an incorrect signed result. This is crucial for signed arithmetic. (Found in many architectures, e.g., x86).
*   **Interrupt Enable Flag (IF):** Controls whether the processor can respond to maskable interrupt requests.
*   **Direction Flag (DF):** Controls the direction of string operations (e.g., incrementing or decrementing addresses).
*   **Trap Flag (TF):** Enables single-step execution for debugging.

**(Refer to Rafiquzzaman, Chapter 4 for more general flag concepts and examples across architectures.)**

## 5. How Flags are Used in Programming

### 5.1 Conditional Branching

This is the most common use of flags. Instructions like `JZ`, `JNZ`, `JC`, `JNC`, `JS`, `JNS`, `JP`, `JP` allow the program to make decisions based on the state of flags.

**Example (8085 Assembly):**

```assembly
MOV A, B     ; Move content of B to Accumulator
SUB C        ; Subtract content of C from Accumulator
JZ LABEL1    ; If result is zero (Z flag is 1), jump to LABEL1
; If result is not zero, continue execution here
```

### 5.2 Arithmetic Operations

*   **Carry Flag (CY):** Essential for multi-byte addition and subtraction. By performing operations byte by byte and checking the carry, you can simulate operations on larger numbers.
*   **Auxiliary Carry Flag (AC):** Used by the `DAA` instruction for BCD arithmetic.

**Example (8085 Assembly - 16-bit addition):**

```assembly
LXI H, 1000H  ; Load HL pair with address of first 16-bit number
MOV A, M      ; Load LSB of first number into A
LDAX (HL+1)   ; Load MSB of first number into A
; Assume first number is stored at address 1000H and 1001H
; and second number at 1002H and 1003H. Result stored at 1004H, 1005H

MOV B, A      ; Save MSB of first number in B

MOV A, M      ; Load LSB of first number
INX H         ; Increment HL to point to next byte
ADD M         ; Add LSB of second number to A
MOV (1004H), A; Store LSB of result

MOV A, B      ; Load MSB of first number
ADC M         ; Add MSB of second number with carry
MOV (1005H), A; Store MSB of result
```
In this example, `ADC M` (Add with Carry) instruction uses the CY flag from the previous `ADD M` instruction to correctly perform the 16-bit addition.

### 5.3 Logical Operations

Logical operations (AND, OR, XOR) also affect flags, particularly the Zero flag and Sign flag, enabling conditional execution based on bitwise comparisons.

### 5.4 Bit Manipulation

Flags are indirectly used in bit manipulation. For example, to check if a specific bit is set, you might AND the number with a mask, and then check the Zero flag.

## 6. Flags and Embedded Systems (Connecting to CO3 & CO4)

While the primary focus of flags is in microprocessor-level programming, their impact is profound in embedded systems:

*   **Control Flow:** In embedded systems, precise control of execution flow is critical. Flags enable microcontrollers to react to sensor inputs, timers, and communication protocols by making decisions based on computed states.
*   **Error Detection:** Flags can signal errors or specific conditions, allowing the embedded system to take corrective actions or report issues.
*   **Efficiency:** Using conditional jumps based on flags is far more efficient than using polling or fixed delays for many tasks, leading to faster response times in embedded applications.
*   **Arduino Context (CO4):** Although Arduino uses C/C++, the underlying AVR microcontrollers (like ATmega328P on Arduino Uno) have their own flag registers. When you write C code that performs arithmetic or comparisons, the compiler generates assembly instructions that utilize these flags. For instance, an `if` statement in C will often translate to assembly code that checks the Zero flag or other flags after a comparison.

## 7. Important Points to Remember

*   **Flag Register:** A dedicated register holding status bits.
*   **Conditional Execution:** Flags are the backbone of conditional branching.
*   **Carry Flag (CY):** Essential for multi-byte arithmetic.
*   **Zero Flag (Z):** Indicates if a result is zero.
*   **Sign Flag (S):** Indicates if a result is negative (in signed representation).
*   **Auxiliary Carry Flag (AC):** Used for BCD arithmetic.
*   **Parity Flag (P):** Indicates even or odd number of set bits in the result.
*   **Microprocessor Specific:** The exact set and behavior of flags vary between microprocessors.

## 8. Practice Questions and Exercises

**Question 1:**
Which flag in the 8085 microprocessor is set if the result of an arithmetic operation is zero?
**(a) Carry Flag (CY)**
**(b) Zero Flag (Z)**
**(c) Sign Flag (S)**
**(d) Parity Flag (P)**

**Answer:** (b) Zero Flag (Z)

**Question 2:**
Explain the function of the Carry Flag (CY) in the context of subtraction.
**Answer:** The Carry Flag (CY) is set to 1 during subtraction if a borrow is required from the Most Significant Bit (MSB) of the result. This indicates that the subtrahend was larger than the minuend.

**Question 3:**
What is the purpose of the Auxiliary Carry Flag (AC) in the 8085 microprocessor?
**Answer:** The Auxiliary Carry Flag (AC) is set to 1 if there is a carry from bit 3 to bit 4 (from the lower nibble to the upper nibble) during an arithmetic operation. It is primarily used by the DAA (Decimal Adjust Accumulator) instruction to perform BCD arithmetic correctly.

**Question 4:**
Consider the following 8-bit binary numbers. Perform the addition and determine the state of the Carry Flag (CY), Zero Flag (Z), and Sign Flag (S) after the operation.
`01101010` (106) + `00110101` (53)

**Answer:**
```
  01101010
+ 00110101
----------
  10011111
```
*   **Carry Flag (CY):** 0 (No carry out from the MSB)
*   **Zero Flag (Z):** 0 (The result is not zero)
*   **Sign Flag (S):** 1 (The MSB of the result is 1, indicating a negative number in 2's complement)

**Question 5:**
Write an 8085 assembly language snippet that checks if a number in the accumulator is positive. If it's positive, jump to a label called `POSITIVE_PATH`.
**Answer:**
```assembly
; Assume the number is already in the accumulator (A)

CHECK_SIGN:
    JNS POSITIVE_PATH   ; Jump to POSITIVE_PATH if the Sign Flag (S) is NOT set (i.e., number is positive)
    ; If the number is negative or zero, execution continues here
    ; ... (handle negative/zero case)

POSITIVE_PATH:
    ; Code to execute if the number is positive
    ; ...
```

## 9. Referencing Textbooks and Aligning with Course Outcomes

This topic directly supports:

*   **CO1: Describe the architecture of 8085 microprocessor and 8085 Assembly language programming.** Understanding flags is fundamental to grasping the internal workings of the 8085 and how assembly programs control its execution flow.
*   **CO2: Understand the need for interrupts, Subroutines, timing diagram of 8085 microprocessor and interfacing.** Flags are integral to conditional execution, a key concept in controlling program flow for interrupts, subroutines, and logical operations.
*   **CO3: Understand and gain the basic idea about the embedded system and selection of processors.** The principles of flags are universal across microprocessors, forming the basis of decision-making in embedded systems.
*   **CO4: Able to gain working level knowledge about a Arduino Uno based system architecture and Arduino IDE.** While Arduino abstracts much of the low-level detail, the underlying microcontroller uses flags, and understanding them helps in comprehending how C code translates to hardware actions.

**Textbook References:**

*   **Fundamentals of Microprocessor and Micro controllers by Ram, B:** Provides a comprehensive overview of microprocessor architecture, including flag registers and their roles in operations.
*   **Microprocessor, Architecture, Programming and Applications by Ramesh Gaonkar:** A highly recommended text for the 8085, offering detailed explanations of the flag register, individual flags, and their usage in assembly programming. Chapter 3 is particularly relevant.
*   **Microprocessor Theory and Application by Rafiquzzaman:** Offers a broader perspective on microprocessor principles, including flag sets in various architectures, aiding in understanding the universality of these concepts.

**(Note:** Arduino cookbooks are more focused on practical applications and C programming. While they don't explicitly detail low-level flag manipulation, the concepts of conditional execution and program flow derived from flag operations are implicitly used in the C code written for Arduino.)
