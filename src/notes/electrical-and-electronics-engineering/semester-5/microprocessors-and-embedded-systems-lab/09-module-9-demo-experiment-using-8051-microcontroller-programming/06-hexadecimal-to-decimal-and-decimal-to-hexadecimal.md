---
title: "Hexadecimal to Decimal and Decimal to Hexadecimal"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 9: Demo experiment using 8051 Microcontroller programming."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f36502"
status: "completed"
scrapedAt: "2026-05-23T16:23:16.431Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS LAB - Module 9: Demo Experiment using 8051 Microcontroller Programming

## Topic: Hexadecimal to Decimal and Decimal to Hexadecimal Conversion

This module focuses on practical implementation of number system conversions using the 8051 microcontroller. These conversions are fundamental for understanding how data is represented and manipulated within embedded systems.

---

### 1. Introduction to Number Systems

Understanding different number systems is crucial for working with microcontrollers. The 8051, like most digital systems, internally operates using binary (base-2). However, for easier human readability and manipulation, we often work with decimal (base-10) and hexadecimal (base-16) representations.

*   **Binary (Base-2):** Uses only two digits: 0 and 1. Each position represents a power of 2.
    *   Example: $1101_2 = 1 \times 2^3 + 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 = 8 + 4 + 0 + 1 = 13_{10}$

*   **Decimal (Base-10):** The system we use daily. Uses digits 0-9. Each position represents a power of 10.
    *   Example: $123_{10} = 1 \times 10^2 + 2 \times 10^1 + 3 \times 10^0 = 100 + 20 + 3 = 123_{10}$

*   **Hexadecimal (Base-16):** Uses digits 0-9 and letters A-F to represent values 10-15. Each position represents a power of 16. Hexadecimal is particularly useful because one hex digit can represent exactly four binary digits (a nibble).
    *   Digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A (10), B (11), C (12), D (13), E (14), F (15)
    *   Example: $A3_{16} = A \times 16^1 + 3 \times 16^0 = 10 \times 16 + 3 \times 1 = 160 + 3 = 163_{10}$
    *   Example: $1F_{16} = 1 \times 16^1 + F \times 16^0 = 1 \times 16 + 15 \times 1 = 16 + 15 = 31_{10}$

---

### 2. Hexadecimal to Decimal Conversion

This process involves multiplying each hexadecimal digit by its corresponding power of 16 and summing the results.

**Algorithm:**

1.  Start with a decimal result initialized to zero.
2.  Iterate through the hexadecimal number from right to left (least significant digit to most significant digit).
3.  For each hexadecimal digit:
    *   Convert the hex digit to its decimal equivalent (0-9 for digits, 10-15 for A-F).
    *   Multiply this decimal equivalent by $16^p$, where 'p' is the position of the digit (starting from 0 for the rightmost digit).
    *   Add the result to the total decimal sum.

**Example (using 8051 Assembly Language Concepts):**

Let's convert the hexadecimal number `4B` to decimal.

*   Hexadecimal Number: `4B`
*   Least significant digit: `B` (decimal 11) at position 0 ($16^0 = 1$)
*   Most significant digit: `4` (decimal 4) at position 1 ($16^1 = 16$)

Calculation:
$(4 \times 16^1) + (B \times 16^0)$
$(4 \times 16) + (11 \times 1)$
$64 + 11 = 75_{10}$

**8051 Assembly Implementation Considerations (CO1 - K3):**

To implement this in 8051 Assembly Language (ALP), you would typically:

*   **Store the hexadecimal number:** In a register (e.g., `R0`).
*   **Use multiplication:** The 8051 has `MUL A, Rn` and `MUL AB` instructions for multiplication.
*   **Handle multi-digit numbers:** This requires looping and managing intermediate sums.
*   **Convert hex digits to decimal:** This can be done using conditional jumps (`CJNE`, `JNZ`) or lookup tables if dealing with A-F.

**Quote from Kenneth Ayala's "The 8051 Microcontroller":**
"The 8051 processor has built-in instructions to perform arithmetic operations. For conversion tasks, you will often need to implement algorithms that utilize these basic arithmetic operations like addition and multiplication." (Paraphrased concept)

---

### 3. Decimal to Hexadecimal Conversion

This process involves repeatedly dividing the decimal number by 16 and recording the remainders. The hexadecimal number is formed by the remainders read from bottom to top.

**Algorithm:**

1.  Start with the decimal number.
2.  Repeatedly divide the number by 16.
3.  The remainder of each division is a hexadecimal digit.
    *   If the remainder is 0-9, it's the digit itself.
    *   If the remainder is 10-15, convert it to the corresponding hex character (A-F).
4.  The quotient becomes the new number for the next division.
5.  Continue until the quotient is 0.
6.  The hexadecimal number is formed by the remainders in reverse order of calculation.

**Example (using 8051 Assembly Language Concepts):**

Let's convert the decimal number `75` to hexadecimal.

1.  $75 \div 16 = 4$ with a remainder of $11$ (which is `B` in hex).
2.  $4 \div 16 = 0$ with a remainder of $4$.

The remainders are 11 (`B`) and 4. Reading from bottom to top, we get `4B`.

**8051 Assembly Implementation Considerations (CO1 - K3):**

To implement this in 8051 ALP:

*   **Use division:** The 8051 doesn't have a direct division instruction. You'll typically implement division by repeated subtraction or use a software division routine.
*   **Obtain remainders:** The modulo operation is what yields the remainder.
*   **Convert remainders to hex digits:** Similar to hex-to-decimal, use conditional logic.
*   **Store the hex digits:** In memory locations or registers, possibly in reverse order and then reordered.

**Quote from R. Lyla B. Das's "Microprocessors and Microcontrollers":**
"Division algorithms are essential for many data processing tasks in microcontrollers. When converting decimal to other bases, the division-remainder method is a common technique to implement." (Paraphrased concept)

---

### 4. Practical Experiment using 8051 Microcontroller

**Objective:** Write and execute an 8051 ALP program to convert a given hexadecimal number (stored in a register) to its decimal equivalent and display it, and vice-versa.

**Hardware Setup:**

*   8051 Development Board
*   LEDs or a 7-segment display to show the output (for demonstration purposes).
*   Possibly a serial interface (UART) for displaying results on a PC terminal.

**Software (Assembly Language):**

Let's outline a conceptual program structure.

**Part 1: Hexadecimal to Decimal Conversion**

*   **Input:** A byte in register `R0` representing the hexadecimal value (e.g., `R0 = 4Bh`).
*   **Output:** The decimal equivalent (e.g., 75) displayed on LEDs or sent via UART.

```assembly
; Assume R0 contains the hex value (e.g., 4Bh)
; We will convert it to decimal and store in R1 (tens) and R2 (units)

HEX2DEC:
    MOV A, R0      ; Move the hex value to Accumulator
    CLR C          ; Clear Carry for subtraction
    MOV B, #10     ; Divisor for decimal conversion (tens place)
    
    ; --- Division by 10 (repeated subtraction) ---
    ; Count = 0
    MOV R7, #0     ; Counter for tens place

DIV_LOOP:
    SUBB A, B      ; Subtract 10 from A
    JC  DIV_DONE   ; If borrow (A < 10), division is done
    INC R7         ; Increment tens counter
    JMP DIV_LOOP   ; Repeat subtraction

DIV_DONE:
    MOV R1, A      ; Remainder is units digit (store in R1) - Wait, remainder is what's left after subtraction!
                   ; The quotient is in R7. Let's fix this.

; Corrected approach for Hex to Decimal (using a software division routine concept)
; The 8051 has MUL AB instruction.
; To convert a byte N to decimal XY (10X + Y), we can find X and Y.
; N = Q * 10 + R
; N is in A, Q is the quotient, R is the remainder.

HEX2DEC_CORRECT:
    MOV A, R0      ; Input hex value (e.g., 4Bh = 75)
    MOV B, #10     ; Divisor
    MOV R7, #0     ; Initialize quotient register (tens)
    
    ; Perform division A / B
    ; If A < B, quotient is 0, remainder is A.
    ; If A >= B, subtract B from A, increment quotient, repeat.

DEC_DIV_LOOP:
    SUBB A, B      ; A = A - B
    JC  DEC_DIV_END ; If borrow, A < B, so jump to end
    INC R7         ; Increment quotient (tens)
    JMP DEC_DIV_LOOP ; Continue subtracting

DEC_DIV_END:
    ; Now A contains the remainder (units)
    ; R7 contains the quotient (tens)
    MOV R2, A      ; Store units digit in R2
    MOV R1, R7     ; Store tens digit in R1
    
    ; Now R1 has tens, R2 has units (e.g., R1=7, R2=5 for 75)
    ; Further steps would involve converting R1 and R2 to ASCII or displaying on LEDs.
```

**Part 2: Decimal to Hexadecimal Conversion**

*   **Input:** A decimal number, typically represented by two BCD digits (e.g., Tens digit in `R1`, Units digit in `R2`).
*   **Output:** The hexadecimal equivalent (e.g., `4Bh`) stored in a register.

```assembly
; Assume R1 contains the tens digit (e.g., 7) and R2 contains the units digit (e.g., 5)
; We want to combine them into a hex value in R0.
; Original decimal number = R1 * 10 + R2

DEC2HEX:
    MOV A, R1      ; Load tens digit (e.g., 7)
    MOV B, #10     ; Multiplier
    MUL A, B       ; A = A * 10 (e.g., 7 * 10 = 70)
                   ; Note: MUL AB instruction stores 16-bit result in B:A.
                   ; For single-byte result (max 255), A holds the low byte.
                   ; If R1 * 10 exceeds 255, we have an issue. Assuming inputs are within 0-255.
    
    ADD A, R2      ; Add units digit (e.g., 70 + 5 = 75)
    MOV R0, A      ; Store the result in R0 (e.g., R0 = 4Bh)
    
    ; Now R0 contains the hex equivalent.
```

**Important Note:** The above assembly snippets are conceptual. A full implementation would require:
*   Initialization of the 8051.
*   Display routines (e.g., converting BCD digits to ASCII for serial output, or driving 7-segment displays).
*   Error handling for inputs outside the expected range.

**Textbook Reference:**
Kenneth Ayala's "The 8051 Microcontroller" provides detailed examples of arithmetic operations and subroutine development which are essential for implementing these conversion routines. Chapter 7 often covers I/O ports and subroutines, crucial for displaying results.

---

### 5. Learning Outcomes Addressed

*   **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)**
    *   This topic directly addresses CO1 by requiring the development of ALP programs for arithmetic conversions (multiplication, subtraction, addition). The execution on the 8051 board solidifies this outcome.

*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)**
    *   While the example uses ALP, the logic applied can be directly translated to embedded C. In C, you'd use standard arithmetic operators (`*`, `/`, `%`) and implement similar algorithms. Understanding the underlying ALP logic helps in writing efficient C code. For example, if you were to write `decimal_value = (hex_value / 10) * 100 + (hex_value % 10)` in C, you are essentially mirroring the algorithmic steps used in ALP.

*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)**
    *   To *display* the results of these conversions, you'd need to interface the 8051 with peripherals like LEDs, 7-segment displays, or a UART. Examining how these interfaces work and how to control them to show the converted numbers directly relates to CO3. For example, understanding how to send a character via the 8051's serial port to a PC terminal to display the decimal output requires knowledge of UART circuits and programming.

*   **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6)**
    *   Designing a system that performs these conversions as a core function, and then displays the output meaningfully (e.g., a calculator-like function, a data logger displaying values in a readable format), falls under CO4. You'd need to select appropriate output devices and integrate the conversion logic with them.

---

### 6. Key Concepts and Definitions

*   **Nibble:** A 4-bit unit. One hexadecimal digit maps directly to one nibble.
*   **Byte:** An 8-bit unit.
*   **Accumulator (A):** A primary register in the 8051 used for arithmetic and logical operations.
*   **Registers (R0-R7):** General-purpose registers available in the 8051.
*   **Program Counter (PC):** Keeps track of the address of the next instruction to be executed.
*   **Conditional Jumps:** Instructions like `JC`, `JNC`, `JZ`, `JNZ` that alter program flow based on the status of flags (like Carry, Zero).
*   **Subroutine:** A block of code that performs a specific task and can be called from multiple places in the main program.
*   **BCD (Binary Coded Decimal):** A representation where each decimal digit (0-9) is encoded by a 4-bit binary number. This is different from direct binary representation. For example, decimal 75 is `01001011` in binary, but in BCD it's `0111 0101` (where `0111` is 7 and `0101` is 5).

---

### 7. Important Points to Remember

*   **8051 Multiplication:** The `MUL AB` instruction multiplies the Accumulator (A) by Register B and stores the 16-bit result in the register pair B:A (B holds the most significant byte, A holds the least significant byte). This is important when multiplying numbers that could result in a value larger than 255.
*   **8051 Division:** The 8051 does not have a direct hardware division instruction. Division must be implemented using software routines, often involving repeated subtraction or specialized algorithms.
*   **Data Representation:** Be mindful of whether you are working with raw binary values, BCD, or ASCII characters when performing conversions and displaying data.
*   **Register Allocation:** Plan your register usage carefully, especially when implementing complex algorithms like division, to avoid overwriting critical data.
*   **Addressing Modes:** Understand the different addressing modes of the 8051 (register, direct, indirect, indexed) to efficiently access data for your conversion routines.

---

### 8. Practice Questions

1.  **Hex to Decimal:** Convert the hexadecimal number `C5` to its decimal equivalent. Show the steps.
    *   **Answer:** $C5_{16} = (C \times 16^1) + (5 \times 16^0) = (12 \times 16) + (5 \times 1) = 192 + 5 = 197_{10}$.

2.  **Decimal to Hex:** Convert the decimal number `215` to its hexadecimal equivalent. Show the steps.
    *   **Answer:**
        *   $215 \div 16 = 13$ remainder $7$ (Hex: $7$)
        *   $13 \div 16 = 0$ remainder $13$ (Hex: $D$)
        *   Reading remainders from bottom to top: $D7_{16}$.

3.  **8051 ALP Logic:** If register `R0` contains `85h` (decimal 133), what would be the values in `R1` (tens) and `R2` (units) after executing the `HEX2DEC_CORRECT` subroutine outlined earlier?
    *   **Answer:** $85h = 133_{10}$.
        *   $133 \div 10 = 13$ remainder $3$. So, tens = 13, units = 3.
        *   The subroutine as written stores the quotient in `R7` and remainder in `A`.
        *   So, `R7` would hold `0Dh` (13) and `A` would hold `03h` (3).
        *   Then `R2` gets `A` (so `R2 = 03h`) and `R1` gets `R7` (so `R1 = 0Dh`).
        *   **Wait, the question implies decimal digits for display, which often means BCD.** If `R1` and `R2` are meant to hold BCD digits, then the calculation for Hex to BCD needs adjustment. Let's assume the goal is to get the decimal digits in BCD.
        *   For 133, the BCD representation is `0001 0011 0011`. This is too large for a single byte if we consider `R1` as tens and `R2` as units.
        *   **Reinterpreting the question:** If `R0` holds `85h` (133), and we want to store the decimal digits (1, 3, 3) in separate registers, this is more complex and might involve BCD arithmetic.
        *   **Let's assume the question implies storing the *tens* and *units* of the decimal value.**
        *   Decimal value: 133.
        *   Tens digit: 13.
        *   Units digit: 3.
        *   However, if `R1` and `R2` are to hold single digits for display (e.g., 7 and 5 for 75), then the value 133 would need to be represented as 13 and 3, or perhaps as three separate BCD digits.
        *   **Let's assume the `HEX2DEC_CORRECT` subroutine produces the tens and units as separate values, which might be single decimal digits or bytes representing counts.** If it produces tens = 13 and units = 3, and these are stored in `R1` and `R2` respectively, then:
            *   `R1` would contain `0Dh` (13)
            *   `R2` would contain `03h` (3)
        *   This is a common point of confusion. Usually, for display on 7-segment displays, you'd want BCD digits. Converting 13 to BCD is `0001 0011`.
        *   **Let's stick to the literal output of the conceptual subroutine: `R1` = quotient, `R2` = remainder.**
        *   For $85h = 133$:
            *   $133 / 10 = 13$ remainder $3$.
            *   Quotient = 13, Remainder = 3.
            *   `R1` would hold `0Dh` (13).
            *   `R2` would hold `03h` (3).

4.  **8051 ALP Logic:** If register `R1` contains `7` and `R2` contains `5`, what value will be in `R0` after executing the `DEC2HEX` subroutine?
    *   **Answer:**
        *   `A = R1 = 07h`
        *   `A = A * 10 = 07h * 0Ah = 46h` (decimal 70)
        *   `A = A + R2 = 46h + 05h = 4Bh` (decimal 75)
        *   `R0 = A = 4Bh`.

---

This module provides a hands-on introduction to fundamental data manipulation techniques using the 8051 microcontroller, directly contributing to your ability to solve arithmetic problems and interface with hardware in embedded systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
