---
title: "Arithmetic operations: Addition"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 1: Data transfer: Block data movement"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364e7"
status: "completed"
scrapedAt: "2026-05-23T16:23:01.932Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS LAB

## Module 1: Data Transfer: Block Data Movement

### Topic: Arithmetic Operations: Addition

---

**Course Outcomes Alignment:** This topic primarily supports **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)**. Understanding addition is foundational to many arithmetic and logical operations.

---

### 1. Introduction to Addition in Microprocessors

Addition is a fundamental arithmetic operation performed by the Arithmetic Logic Unit (ALU) within a microcontroller. It involves summing two binary numbers. In the context of the 8051 microcontroller, addition can be performed on bytes (8-bit numbers) or even larger data sizes by combining byte additions.

*   **Key Concept:** The ALU is responsible for performing arithmetic and logical operations.
*   **Definition:** Addition is the process of combining two or more quantities to find their sum. In binary, addition follows specific rules:
    *   0 + 0 = 0
    *   0 + 1 = 1
    *   1 + 0 = 1
    *   1 + 1 = 0 with a carry of 1
*   **Significance:** Addition is a building block for more complex arithmetic operations like subtraction (often implemented as addition of the negative), multiplication, and division. It's also crucial for address calculations, loop control, and data manipulation.

---

### 2. 8051 Instructions for Addition

The 8051 microcontroller provides several instructions to perform addition. These instructions vary based on the source and destination of the operands.

#### 2.1. ADD: Add Content of Accumulator with a Second Operand

This is the most common addition instruction. It adds the content of the Accumulator (register A) with another operand and stores the result in the Accumulator.

*   **Syntax:**
    *   `ADD A, <source_operand>`
*   **`<source_operand>` can be:**
    *   **Register:** `Rn` (where `n` is 0-7, representing registers R0-R7)
    *   **Direct Address:** `<8-bit_address>` (a byte from internal RAM)
    *   **Indirect Address:** `@Rn` (using the content of R0 or R1 as a pointer to internal RAM)
    *   **Immediate Data:** `#<8-bit_data>` (a constant value)

*   **How it works:**
    *   `A = A + <source_operand>`
*   **Flags Affected:**
    *   **CY (Carry Flag):** Set if there is a carry out of the most significant bit (MSB) of the result. This indicates an overflow for unsigned 8-bit addition.
    *   **AC (Auxiliary Carry Flag):** Set if there is a carry out of bit 3 (lower nibble) to bit 4 (higher nibble). Important for BCD (Binary Coded Decimal) arithmetic.
    *   **OV (Overflow Flag):** Set if an arithmetic overflow occurs for signed arithmetic. This happens when the addition of two numbers with the same sign results in a number with the opposite sign.
    *   **P (Parity Flag):** Set if the number of set bits in the Accumulator is odd.

*   **Examples (referencing Ayala, Chapter 4 - "8051 Instruction Set"):**

    1.  **Adding two registers:**
        ```assembly
        MOV A, R0   ; Load R0 into Accumulator
        ADD A, R1   ; Add R1 to Accumulator (A = A + R1)
        ; Result is in A
        ```

    2.  **Adding immediate data to Accumulator:**
        ```assembly
        MOV A, #55h ; Load 55h into Accumulator
        ADD A, #0Ah ; Add 0Ah to Accumulator (A = 55h + 0Ah = 65h)
        ; Result is in A
        ```

    3.  **Adding direct address content to Accumulator:**
        ```assembly
        MOV A, 30h  ; Load content of RAM location 30h into Accumulator
        ADD A, 50h  ; Add content of RAM location 50h to Accumulator (A = A + RAM[50h])
        ; Result is in A
        ```

    4.  **Adding indirect address content to Accumulator:**
        ```assembly
        MOV R0, #40h ; Load address 40h into R0
        MOV A, @R0   ; Load content of RAM location 40h into Accumulator
        INC R0       ; Move R0 to point to next byte (address 41h)
        ADD A, @R0   ; Add content of RAM location 41h to Accumulator (A = A + RAM[41h])
        ; Result is in A
        ```

#### 2.2. ADDC: Add with Carry

This instruction adds the content of the Accumulator, the Carry flag, and another operand, storing the result in the Accumulator. This is essential for multi-byte addition.

*   **Syntax:**
    *   `ADDC A, <source_operand>`
*   **`<source_operand>` can be:**
    *   `Rn`
    *   `<8-bit_address>`
    *   `@Rn`
    *   `#<8-bit_data>`

*   **How it works:**
    *   `A = A + <source_operand> + CY`
*   **Flags Affected:** Same as `ADD` (CY, AC, OV, P).

*   **Examples (referencing Ayala, Chapter 4):**

    1.  **Multi-byte Addition (2 bytes):**
        Let's add `DATA1 = 12h` (lower byte) and `DATA2 = 34h` (higher byte). Assume they are stored at RAM locations `30h` and `31h` respectively.
        ```assembly
        MOV A, 30h      ; Load lower byte of the first number into A (A = 12h)
        ADD A, 31h      ; Add lower byte of the second number to A (A = 12h + 34h = 46h)
        MOV 40h, A      ; Store the lower byte of the sum in RAM location 40h

        MOV A, #00h     ; Clear Accumulator for the higher byte addition
        ADDC A, #00h    ; Add 0 to A and the Carry flag (effectively loading Carry into A)
                        ; If there was a carry from the previous ADD, A will be 01h, otherwise 00h.

        MOV R1, #31h    ; Point R1 to the higher byte of the first number (assuming it's already loaded elsewhere or is 0)
        ADDC A, @R1     ; Add the higher byte of the first number (assuming it's 00h for simplicity here) to A
                        ; Example: If previous sum had no carry, A = 00h. If it had a carry, A = 01h.

        ; For actual multi-byte addition, you'd load the actual higher bytes:
        ; Let's say DATA1 = 12h, DATA2 = 34h (lower bytes)
        ; and DATA1_HIGH = 56h, DATA2_HIGH = 78h (higher bytes)

        MOV A, 30h      ; A = DATA1 (12h)
        ADD A, 31h      ; A = DATA1 + DATA2 (12h + 34h = 46h)
        MOV 40h, A      ; Store sum_low (46h) at RAM[40h]

        MOV A, #00h     ; Clear A for higher byte addition
        MOV R0, #30h    ; R0 points to DATA1
        MOV R1, #31h    ; R1 points to DATA2

        ADDC A, @R0     ; Add higher byte of DATA1 (assuming it's 00h if not specified)
                        ; If DATA1 was 5612h, then A would be 56h.
        ADDC A, @R1     ; Add higher byte of DATA2 (assuming it's 00h if not specified)
                        ; If DATA2 was 7834h, then A would be A + 78h.

        ; Corrected multi-byte addition example:
        ; Add 16-bit number at 30h:31h with 16-bit number at 32h:33h
        ; Result to be stored at 40h:41h
        MOV A, 30h      ; Load lower byte of first number (e.g., 12h)
        ADD A, 32h      ; Add lower byte of second number (e.g., 34h) -> A = 46h
        MOV 40h, A      ; Store sum_low (46h)

        MOV A, 31h      ; Load higher byte of first number (e.g., 56h)
        ADDC A, 33h     ; Add higher byte of second number (e.g., 78h) and carry (e.g., 56h + 78h + 0 = D2h)
        MOV 41h, A      ; Store sum_high (D2h)
        ; Result: 16-bit sum is D246h at RAM[41h]:RAM[40h]
        ```
        *(Reference: Lyla B. Das, Chapter 6 - "8051 Microcontroller")*

#### 2.3. INC: Increment

While not strictly an addition of two different operands, `INC` adds 1 to a register or memory location.

*   **Syntax:**
    *   `INC <destination>`
*   **`<destination>` can be:**
    *   `A`
    *   `Rn`
    *   `Direct Address`
    *   `@Rn`
    *   `DPTR` (16-bit increment)

*   **How it works:**
    *   `<destination> = <destination> + 1`
*   **Flags Affected:**
    *   **CY (Carry Flag):** Not affected by `INC` on registers/RAM.
    *   **CY (Carry Flag):** Affected by `INC DPTR` (carry out of bit 15 is set in CY).
    *   **AC (Auxiliary Carry Flag):** Affected.
    *   **OV (Overflow Flag):** Affected.
    *   **P (Parity Flag):** Not affected.

*   **Examples:**
    ```assembly
    MOV A, #10h     ; A = 10h
    INC A           ; A = 11h

    MOV R5, #25h    ; R5 = 25h
    INC R5          ; R5 = 26h

    INC DPTR        ; Increments the 16-bit Data Pointer
    ```

#### 2.4. DJNZ: Decrement and Jump if Not Zero

This instruction decrements a register or memory location and jumps to a specified address if the result is not zero. It's a loop control instruction but involves a decrement, which is effectively subtraction of 1.

*   **Syntax:**
    *   `DJNZ <reg/mem>, <relative_address>`
*   **`<reg/mem>` can be:**
    *   `Rn` (R0-R7)
    *   `Direct Address`
*   **How it works:**
    *   `<reg/mem> = <reg/mem> - 1`
    *   If `<reg/mem>` is not zero, PC jumps to `<relative_address>`.

*   **Flags Affected:** None. This is a key characteristic of `DJNZ`.

*   **Examples:**
    ```assembly
    MOV R7, #05h     ; Initialize loop counter R7 to 5

    LOOP_START:
        ; ... operations to be repeated ...
        MOV A, R7       ; Example: Load counter into A for display
        ; ... display A ...

        DJNZ R7, LOOP_START ; Decrement R7. If not zero, jump back to LOOP_START.
    ```

---

### 3. BCD Addition

The 8051 has specific instructions to handle BCD arithmetic, which is a way of representing decimal numbers in binary. Each decimal digit is represented by 4 bits.

*   **Key Concept:** BCD numbers require special handling because a direct binary addition might result in values greater than 9 for a nibble, which is invalid in BCD.
*   **DA A: Decimal Adjust Accumulator**
    *   This instruction is used *after* a binary addition (using `ADD` or `ADDC`) to correct the result to a valid BCD format.
    *   **How it works:**
        1.  If the lower nibble (bits 0-3) of the accumulator is greater than 9, or if the AC flag is set, it adds 6 to the lower nibble.
        2.  Then, it checks the higher nibble (bits 4-7). If the higher nibble is greater than 9, or if the CY flag is set (after the potential addition of 6 in the lower nibble), it adds 6 to the higher nibble.
    *   **Flags Affected:** CY (reflects carry out of the most significant digit), AC (cleared by DA A), OV (affected).

*   **Example (referencing Mackenzie & Phan, Chapter 5 - "Instruction Set"):**
    Add two BCD numbers: `35h` (representing 35) and `42h` (representing 42).
    ```assembly
    MOV A, #35h     ; A = 35h (BCD representation of 35)
    ADD A, #42h     ; Binary addition: A = 35h + 42h = 77h
                    ; AC=0, CY=0
    DA A            ; Decimal Adjust Accumulator:
                    ; Lower nibble (7) is <= 9, AC=0. No change to lower nibble.
                    ; Higher nibble (7) is <= 9, CY=0. No change to higher nibble.
                    ; Result: A = 77h (BCD representation of 77)

    MOV A, #18h     ; A = 18h (BCD representation of 18)
    ADD A, #25h     ; Binary addition: A = 18h + 25h = 3Dh
                    ; Lower nibble (D) > 9. AC=1. Add 6 to lower nibble.
                    ; A = 3Dh + 06h = 43h.
                    ; Now, AC is cleared, CY=0. Higher nibble (4) is <= 9.
                    ; Result: A = 43h (BCD representation of 43)

    MOV A, #67h     ; A = 67h (BCD representation of 67)
    ADD A, #89h     ; Binary addition: A = 67h + 89h = F0h
                    ; Lower nibble (0) <= 9, AC=1. Add 6 to lower nibble.
                    ; A = F0h + 06h = F6h.
                    ; AC is cleared, CY=0. Higher nibble (F) > 9.
                    ; Now, add 6 to higher nibble because AC was set from lower nibble addition.
                    ; A = F6h + 60h = 156h. The overflow bit (CY) is set.
                    ; The result is 056h (lower 8 bits are 56h).
                    ; A = 56h, CY = 1
                    ; Result: A = 56h (BCD representation of 152) - WRONG, should be 152.

    ; Corrected BCD addition example for 67h + 89h:
    MOV A, #67h     ; A = 67h (BCD for 67)
    ADD A, #89h     ; Binary ADD: A = 67h + 89h = F0h. AC=1, CY=0.
    DA A            ; Decimal Adjust Accumulator:
                    ; Lower nibble (0) <= 9, but AC=1. Add 6.
                    ; A = F0h + 06h = F6h. AC cleared, CY=0.
                    ; Higher nibble (F) > 9. Add 60h.
                    ; A = F6h + 60h = 156h.
                    ; Result: A = 56h, CY = 1.
                    ; This represents 152 in BCD (1st digit is implied by CY).
    ```
    *(Reference: Mazidi, Chapter 4 - "8051 Instruction Set")*

---

### 4. Block Data Transfer and Addition

While the topic focuses on addition, it's within the context of "Data Transfer: Block Data Movement." This implies that the numbers to be added might be part of a block of data stored in memory.

*   **Scenario:** You need to add a block of `N` bytes from one memory location to a block of `N` bytes from another memory location.
*   **Approach:**
    1.  Initialize pointers to the start of both source blocks and the destination block.
    2.  Initialize a counter for the number of bytes to add.
    3.  Use a loop. In each iteration:
        *   Load a byte from the first block using an indirect addressing mode (e.g., `@Ri`).
        *   Add it to the accumulator.
        *   Load a byte from the second block using another indirect addressing mode (e.g., `@Rj`).
        *   Add it to the accumulator using `ADD` or `ADDC` (if handling carries across bytes).
        *   Store the result in the destination block using indirect addressing (e.g., `@Rk`).
        *   Increment the pointers.
        *   Decrement the counter.
        *   Jump back to the start of the loop if the counter is not zero.

*   **Example:** Add `N` bytes from `SOURCE_BLOCK` to `DESTINATION_BLOCK`. Assume `N` is stored in `R7`. `SOURCE_BLOCK` starts at `40h`, `DESTINATION_BLOCK` starts at `50h`.
    ```assembly
    MOV R0, #40h    ; Pointer to SOURCE_BLOCK
    MOV R1, #50h    ; Pointer to DESTINATION_BLOCK
    MOV R7, #05h    ; Number of bytes to add (N=5)

    LOOP_BLOCK_ADD:
        MOV A, @R0      ; Load byte from SOURCE_BLOCK into A
        ADD A, @R1      ; Add byte from DESTINATION_BLOCK to A
        MOV @R1, A      ; Store the sum back into DESTINATION_BLOCK (overwriting original)

        INC R0          ; Move to the next byte in SOURCE_BLOCK
        INC R1          ; Move to the next byte in DESTINATION_BLOCK

        DJNZ R7, LOOP_BLOCK_ADD ; Decrement counter and loop if not zero
    ```
    *Note: This example overwrites the second block. A separate destination block would require a third pointer.*

---

### 5. Important Points to Remember

*   **Accumulator is Key:** Most arithmetic instructions operate on or produce results in the Accumulator (A).
*   **Carry Flag (CY):** Crucial for multi-byte addition and for BCD arithmetic. Always check its state after addition if chaining operations.
*   **Overflow Flag (OV):** Important for signed arithmetic. Be mindful of it if dealing with numbers that can be interpreted as signed.
*   **Auxiliary Carry Flag (AC):** Essential for BCD adjustments.
*   **Register Usage:** Carefully manage registers for pointers, counters, and temporary storage.
*   **Addressing Modes:** Understand the various addressing modes (`Rn`, `@Rn`, direct, immediate, indirect) to access data efficiently for addition.
*   **`ADD` vs. `ADDC`:** Use `ADD` for the first byte in a multi-byte addition or when the carry is guaranteed to be zero. Use `ADDC` for subsequent bytes to incorporate any carry from the previous addition.
*   **`DA A`:** Always follow binary addition with `DA A` if the result is expected to be in BCD format.
*   **`INC` and `DJNZ`:** Understand their specific flag behaviors, especially `DJNZ` not affecting flags.

---

### 6. Practice Questions and Exercises

**Question 1:**
Write an ALP program to add two 8-bit numbers stored at RAM locations `20h` and `21h`. Store the result in RAM location `22h`. Assume the addition does not produce a carry.

**Answer 1:**
```assembly
ORG 0000h
MOV A, 20h      ; Load the first number into the Accumulator
ADD A, 21h      ; Add the second number to the Accumulator
MOV 22h, A      ; Store the result in RAM location 22h
END
```

**Question 2:**
Write an ALP program to add two 16-bit numbers. The first number is stored at `30h` (LSB) and `31h` (MSB). The second number is stored at `32h` (LSB) and `33h` (MSB). Store the 16-bit result at `40h` (LSB) and `41h` (MSB).

**Answer 2:**
```assembly
ORG 0000h
MOV A, 30h      ; Load LSB of the first number
ADD A, 32h      ; Add LSB of the second number
MOV 40h, A      ; Store LSB of the result

MOV A, 31h      ; Load MSB of the first number
ADDC A, 33h     ; Add MSB of the second number and the carry from the previous addition
MOV 41h, A      ; Store MSB of the result
END
```

**Question 3:**
Write an ALP program to add two BCD numbers: `45h` and `37h`. Display the result in the Accumulator.

**Answer 3:**
```assembly
ORG 0000h
MOV A, #45h     ; Load the first BCD number
ADD A, #37h     ; Perform binary addition (45h + 37h = 7Ch)
DA A            ; Adjust for BCD. Lower nibble (C) > 9, AC=1. Add 6.
                ; A = 7Ch + 06h = 82h. AC cleared, CY=0.
                ; Higher nibble (8) <= 9. No further adjustment needed.
                ; Result A = 82h (BCD for 82)
                ; The result is now in the Accumulator.
END
```

**Question 4:**
Write an ALP program that uses `DJNZ` to count down from 10 to 1, printing the value of the counter each time (assume a subroutine `PRINT_A` is available to display the accumulator).

**Answer 4:**
```assembly
ORG 0000h
MOV R7, #10     ; Initialize counter R7 to 10

LOOP_COUNTDOWN:
    MOV A, R7       ; Load counter value into Accumulator
    ; CALL PRINT_A  ; Assume this prints the value in A to a display

    DJNZ R7, LOOP_COUNTDOWN ; Decrement R7, jump if not zero
END

; Assume PRINT_A subroutine is defined elsewhere for display
```

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. References

*   **Ayala, Kenneth.** *The 8051 Microcontroller*. Cengage Learning. (Provides comprehensive explanations of instructions and addressing modes).
*   **Das, Ryla B.** *Microprocessors and Microcontrollers*. Pearson Education. (Offers practical examples and context for 8051 operations).
*   **MacKenzie, I. Scott, & Phan, Raphael C.-W.** *The 8051 Microcontroller*. (A good supplementary resource for understanding the instruction set).
*   **Mazidi, Muhammad Ali.** *The 8051 Microcontroller and Embedded Systems*. Pearson Education. (Excellent for in-depth understanding of BCD arithmetic and practical application).

---