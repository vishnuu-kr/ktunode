---
title: "Factorial of a number."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 3: ALP programming for implementing Boolean and logical instructions: bit manipulation."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364f1"
status: "completed"
scrapedAt: "2026-05-23T16:23:08.141Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS LAB

## Module 3: ALP Programming for Implementing Boolean and Logical Instructions: Bit Manipulation

### Topic: Factorial of a Number

**Learning Outcomes:**

*   Understand and apply ALP instructions for implementing arithmetic and logical operations.
*   Develop ALP programs to calculate the factorial of a given number.
*   Utilize bit manipulation techniques for efficient implementation of algorithms.
*   Simulate and debug ALP programs using appropriate tools.

**Course Outcomes Alignment:**

*   **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)** - This topic directly addresses CO1 by focusing on developing an ALP program to solve an arithmetic problem (factorial calculation) using fundamental instructions.
*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)** - While this topic is about ALP, understanding the underlying logic and operations can aid in developing equivalent C code.
*   **CO3: Examine circuits for interfacing processor with various peripheral devices (Knowledge Level: K4)** - Not directly addressed by this topic, but understanding ALP is foundational for interacting with peripherals at a low level.
*   **CO4: Design a microcontroller based system with the help of various interfacing devices (Knowledge Level: K6)** - Not directly addressed by this topic, but the ability to implement core algorithms like factorial is a building block for more complex system designs.
*   **CO5: Design an Arduino based system with the help of various interfacing devices (Knowledge Level: K6)** - Similar to CO4, understanding fundamental programming concepts in ALP is transferable to other microcontroller platforms like Arduino.

---

### 1. Introduction to Factorial

The factorial of a non-negative integer 'n', denoted by n!, is the product of all positive integers less than or equal to n.

**Definition:**
n! = n * (n-1) * (n-2) * ... * 2 * 1

**Examples:**
*   0! = 1 (by definition)
*   1! = 1
*   5! = 5 * 4 * 3 * 2 * 1 = 120

**Algorithm for Factorial Calculation:**

The factorial can be calculated iteratively or recursively. For embedded systems, an iterative approach is generally preferred due to potential stack limitations with recursion.

**Iterative Approach:**
1.  Initialize a variable `result` to 1.
2.  Initialize a counter `i` to the input number `n`.
3.  If `n` is 0 or 1, the factorial is 1.
4.  If `n` > 1, loop from `i = n` down to 1:
    *   Multiply `result` by `i`.
    *   Decrement `i`.
5.  The final value of `result` is n!.

---

### 2. ALP Programming for Factorial Calculation (8051 Microcontroller)

This section will demonstrate how to implement the factorial calculation using Assembly Language Programming (ALP) for the 8051 microcontroller. We'll assume the input number is stored in a register or memory location and the result will be stored in another. For simplicity, we'll consider calculating the factorial of a number that fits within the 8-bit register of the 8051. For larger numbers, you would need to implement multi-byte arithmetic.

**Key 8051 Instructions Used:**

*   **MOV:** Move data between registers, memory locations, and immediate values.
    *   `MOV A, #data`: Move immediate data to accumulator.
    *   `MOV A, Rn`: Move register Rn to accumulator.
    *   `MOV Rn, A`: Move accumulator to register Rn.
    *   `MOV A, @Ri`: Move data from memory pointed by Ri to accumulator.
    *   `MOV @Ri, A`: Move data from accumulator to memory pointed by Ri.
    *   `MOV DPTR, #data16`: Load 16-bit data into DPTR.
*   **ADD:** Add with carry.
    *   `ADD A, Rn`: Add register Rn to accumulator.
    *   `ADD A, direct`: Add direct address to accumulator.
*   **MUL:** Multiply accumulator by register B. The 16-bit result is stored with the lower byte in accumulator (A) and the higher byte in register B.
    *   `MUL AB`: Multiply A by B.
*   **DJNZ:** Decrement and Jump if Not Zero.
    *   `DJNZ Rn, label`: Decrement register Rn and jump to `label` if Rn is not zero.
    *   `DJNZ direct, label`: Decrement memory location and jump to `label` if not zero.
*   **JC/JNC:** Jump if Carry/Jump if No Carry.
*   **ACALL/LCALL:** Absolute/Long Call.
*   **RET:** Return from subroutine.
*   **ANL:** AND logical operation.
*   **ORL:** OR logical operation.
*   **XRL:** Exclusive OR logical operation.
*   **CPL:** Complement accumulator.
*   **RL A:** Rotate accumulator left.
*   **RLC A:** Rotate accumulator left through carry.
*   **RR A:** Rotate accumulator right.
*   **RRC A:** Rotate accumulator right through carry.
*   **SWAP A:** Swap nibbles in accumulator.

**Example Program: Factorial of a number (e.g., 5)**

Let's assume the input number is 5 and we want to store it in register R0. The result will be stored in memory location `RESULT_LO` and `RESULT_HI` (for a potential 16-bit result, though for 5! = 120, it fits in 8 bits).

```assembly
ORG 0000H       ; Start address of program

MAIN:
    MOV R0, #05H    ; Input number N = 5, store in R0
    MOV A, #01H     ; Initialize accumulator (result) to 1

    ; Handle base cases for 0! and 1! implicitly if N is 0 or 1
    ; If N=0 or N=1, the loop won't execute, and A will remain 1, which is correct.

    ; Initialize counter for loop, using R7 as loop counter
    MOV R7, R0      ; Copy N to R7 for the loop counter

    ; Check if N is greater than 1 before entering loop
    CJNE R0, #01H, LOOP_START ; If N is 1, skip the loop
    SJMP EXIT       ; If N is 0 or 1, result is already in A (1)

LOOP_START:
    ; Store current result in B for multiplication
    MOV B, A        ; Move current result (A) to B

    ; Multiply A (current result) by the loop counter (R0)
    MUL AB          ; A = A * B (lower byte), B = result (higher byte)

    ; For 8-bit result, we only care about A.
    ; For larger numbers, we'd need multi-byte multiplication.

    ; Decrement the loop counter R0 and jump if not zero
    DJNZ R0, LOOP_START

    ; After the loop, the factorial result is in the accumulator (A)

EXIT:
    MOV RESULT_LO, A ; Store the lower byte of the result
    ; If the result could exceed 255, you'd store B in RESULT_HI
    ; MOV RESULT_HI, B

    SJMP $          ; Infinite loop to stop execution

; Data area (define memory locations for results)
ORG 30H
RESULT_LO: DB 00H
; RESULT_HI: DB 00H

END             ; End of assembly program
```

**Explanation of the Program:**

1.  **`ORG 0000H`**: Sets the starting address for the program in the 8051's program memory.
2.  **`MOV R0, #05H`**: Loads the input number 5 into register R0. This register will also serve as our loop counter.
3.  **`MOV A, #01H`**: Initializes the accumulator (A) to 1. This will hold the calculated factorial.
4.  **`CJNE R0, #01H, LOOP_START`**: This instruction checks if R0 is equal to 1.
    *   If `R0` is **not** 1 (meaning the input was greater than 1), it jumps to `LOOP_START`.
    *   If `R0` **is** 1 (input was 1), it proceeds to the next instruction.
5.  **`SJMP EXIT`**: If the input was 1, we jump to `EXIT` because the factorial of 1 is 1, which is already in the accumulator. (Note: If the input was 0, R0 would be 0, and the `CJNE` would not jump, and the next `DJNZ` would decrement R0 to FFh, potentially causing issues. A more robust check for N=0 would be needed for general cases, or ensure N is at least 1).
6.  **`LOOP_START:`**: This is the label for the beginning of our multiplication loop.
7.  **`MOV B, A`**: Before multiplying, the current accumulated result (in A) is moved to register B. The `MUL AB` instruction requires one operand in A and the other in B.
8.  **`MUL AB`**: This instruction multiplies the contents of the accumulator (A) by the contents of register B. The 16-bit result is stored with the lower byte in A and the higher byte in B. For numbers whose factorial is less than or equal to 255 (e.g., 0! to 6!), the higher byte (B) will be 0.
9.  **`DJNZ R0, LOOP_START`**: This is the core of the loop control.
    *   It decrements the value in R0 by 1.
    *   If the value in R0 becomes zero after decrementing, the program continues to the next instruction.
    *   If the value in R0 is **not** zero, it jumps back to the `LOOP_START` label. This continues the multiplication process until R0 reaches 1.
10. **`EXIT:`**: This label marks the end of the factorial calculation.
11. **`MOV RESULT_LO, A`**: The final calculated factorial (which is in the accumulator A) is moved to the memory location `RESULT_LO`.
12. **`SJMP $`**: This is an infinite loop, effectively halting the program execution at this point. This is common in embedded systems where the program might run continuously or be triggered by interrupts.
13. **`ORG 30H`**: Sets the starting address for data storage.
14. **`RESULT_LO: DB 00H`**: Defines a byte of memory at address `30H` and initializes it to `00H`. This is where the result of the factorial calculation will be stored.
15. **`END`**: Indicates the end of the assembly program.

**Important Considerations for Factorial Calculation:**

*   **Result Size:** The 8051's registers are 8-bit. The factorial grows very rapidly.
    *   7! = 5040 (requires more than 8 bits)
    *   8! = 40320 (requires more than 8 bits)
    *   For factorials of numbers greater than 6, you will need to implement multi-byte arithmetic for multiplication and store the result in multiple memory locations. This involves more complex ALP.
*   **Input Range:** The current program is suitable for calculating the factorial of small numbers (0 to 6) whose result fits within an 8-bit unsigned integer (0-255).
*   **Error Handling:** The provided program does not include error handling for negative inputs or inputs that would cause overflow. In a real-world application, you would need to add checks for these conditions.
*   **Register Usage:** Be mindful of register usage. If your main program uses registers heavily, choose available registers for temporary storage and loop counters.

---

### 3. Bit Manipulation Instructions and Their Relevance to Factorial

While the factorial calculation primarily uses arithmetic instructions (`MUL`, `ADD`), the underlying principles of bit manipulation are essential for understanding how these instructions work and how to handle larger numbers or optimize algorithms.

**Bit Manipulation Instructions:**

*   **ANL (AND Logical):** Performs a bitwise AND operation. Useful for masking bits (setting unwanted bits to 0).
    *   Example: `ANL A, #0FH` clears the upper nibble of the accumulator.
*   **ORL (OR Logical):** Performs a bitwise OR operation. Useful for setting bits (forcing bits to 1).
    *   Example: `ORL A, #0FH` sets the lower nibble of the accumulator to 1.
*   **XRL (Exclusive OR Logical):** Performs a bitwise XOR operation. Useful for toggling bits or comparing values.
    *   Example: `XRL A, #0FFH` complements the accumulator.
*   **CPL (Complement Accumulator):** Flips all the bits in the accumulator (0 becomes 1, 1 becomes 0). Equivalent to `XRL A, #0FFH`.
*   **RL A (Rotate Accumulator Left):** Rotates all bits in the accumulator one position to the left. The leftmost bit is moved to the rightmost position.
*   **RLC A (Rotate Accumulator Left through Carry):** Rotates all bits in the accumulator one position to the left, with the leftmost bit going into the carry flag, and the carry flag's content going into the rightmost bit. This is crucial for multi-bit shifts and arithmetic.
*   **RR A (Rotate Accumulator Right):** Rotates all bits in the accumulator one position to the right. The rightmost bit is moved to the leftmost position.
*   **RRC A (Rotate Accumulator Right through Carry):** Rotates all bits in the accumulator one position to the right, with the rightmost bit going into the carry flag, and the carry flag's content going into the leftmost bit.
*   **SWAP A:** Swaps the upper and lower nibbles (4 bits) of the accumulator.

**Relevance to Factorial:**

*   **Multi-byte Arithmetic:** For calculating factorials of larger numbers, you'll need to perform multi-byte multiplications. Bit manipulation instructions like `RLC` and `RRC` are fundamental building blocks for implementing these operations efficiently. For instance, a multi-byte multiplication algorithm might involve shifting bytes and then performing additions.
*   **Optimized Multiplication:** While the `MUL AB` instruction is direct, understanding bitwise operations can help in designing custom multiplication routines for specific scenarios or processors where a direct `MUL` instruction might not be available or optimized.
*   **Conditional Logic:** Bit manipulation can be used to set or clear status bits that can then be used in conditional jumps, making your code more efficient.
*   **Data Packing/Unpacking:** If you were to store intermediate results or factorials in a compact form, bit manipulation would be essential for packing and unpacking data.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 4. Textbooks and Reference Material

**8051 Microcontroller by Kenneth Ayala:**
*   **Key Concepts Covered:** Chapters on Instruction Set Architecture, Addressing Modes, and Assembly Language Programming provide foundational knowledge for understanding how instructions like `MOV`, `ADD`, `MUL`, and `DJNZ` work. Ayala's book often provides examples of basic arithmetic operations.
*   **Relevance to Topic:** Understanding the accumulator, registers, and basic arithmetic operations from Ayala's book is crucial for writing the factorial program.

**Microprocessors and Microcontrollers by R. Lyla B. Das:**
*   **Key Concepts Covered:** This book typically covers the architecture of microprocessors and microcontrollers, including the instruction set of the 8051. It would detail the functionality of logical and arithmetic instructions.
*   **Relevance to Topic:** Provides a comprehensive overview of the 8051's instruction set, which is directly applied in the factorial calculation.

**The 8051 Microcontroller by I. Scott MacKenzie, Raphael C.-W. Phan:**
*   **Key Concepts Covered:** This reference book likely dives deeper into specific instruction timings, practical programming examples, and interfacing. It might offer alternative ways to implement arithmetic operations or discuss the limitations of 8-bit arithmetic.
*   **Relevance to Topic:** Could offer insights into more efficient looping mechanisms or the handling of larger numbers if multi-byte arithmetic is discussed.

**The 8051 microcontroller and embedded systems by Muhammad Ali Mazidi:**
*   **Key Concepts Covered:** Mazidi's book is a popular choice and is known for its practical examples. It would likely have dedicated sections on arithmetic and logical operations, including examples that might resemble factorial calculations or demonstrate multi-byte arithmetic.
*   **Relevance to Topic:** Mazidi's book is highly relevant for its practical ALP examples. It's a good resource for understanding how to string together instructions for complex tasks and how to manage memory for storing results.

---

### 5. Practice Questions and Exercises

**Question 1:**
Write an 8051 ALP program to calculate the factorial of the number stored in memory location `0x20`. Assume the result will fit within an 8-bit register and store the result in memory location `0x21`. Handle the case where the input number is 0 or 1.

**Answer 1:**

```assembly
ORG 0000H

MAIN:
    MOV R1, #0x20   ; Get the address of the input number
    MOV A, @R1      ; Load the input number into Accumulator A

    MOV R0, A       ; Copy N to R0 for loop counter
    MOV R7, A       ; Save N in R7 (optional, could use R0 if no other use)

    ; Handle N=0 or N=1
    CJNE R0, #01H, CHECK_ZERO ; If N is not 1, check if it's 0
    SJMP STORE_RESULT     ; If N=1, result is 1 (already in A)

CHECK_ZERO:
    CJNE R0, #00H, START_LOOP ; If N is not 0, proceed to loop
    SJMP STORE_RESULT     ; If N=0, result is 1 (already in A)

START_LOOP:
    MOV B, A        ; Move current result to B
    MUL AB          ; A = A * B (lower byte), B = high byte

    DJNZ R0, START_LOOP ; Decrement counter and loop if not zero

STORE_RESULT:
    MOV R1, #0x21   ; Get the address to store the result
    MOV @R1, A      ; Store the result in memory location 0x21

    SJMP $          ; Infinite loop

END
```

**Explanation of Answer 1:**
*   The input number is fetched from `0x20` into the accumulator.
*   It's copied to `R0` to be used as the loop counter.
*   `CJNE` instructions are used to check for inputs 1 and 0. If the input is 1 or 0, the program directly jumps to `STORE_RESULT` as the factorial is already correctly in the accumulator (initialized to 1).
*   The `START_LOOP` section performs the multiplication as explained previously.
*   Finally, the result from the accumulator `A` is stored at memory location `0x21`.

---

**Question 2:**
Explain the difference between `RL A` and `RLC A` instructions and provide a scenario where `RLC A` would be more useful than `RL A`.

**Answer 2:**

*   **`RL A` (Rotate Accumulator Left):** This instruction shifts all bits in the accumulator one position to the left. The bit that is shifted out from the most significant bit (MSB) position is lost, and a 0 is inserted into the least significant bit (LSB) position.

    *   Example: If `A = 10110010`, then `RL A` results in `A = 01100100`. The MSB `1` is lost.

*   **`RLC A` (Rotate Accumulator Left through Carry):** This instruction shifts all bits in the accumulator one position to the left. The bit that is shifted out from the MSB position is moved into the Carry flag (CY). The content of the Carry flag is then shifted into the LSB position.

    *   Example: If `A = 10110010` and `CY = 1`, then `RLC A` results in `A = 01100101`, and the Carry flag becomes `1`.

**Scenario where `RLC A` is more useful:**

`RLC A` is crucial for **multi-byte arithmetic operations**, particularly when implementing multiplication or division of numbers that exceed the accumulator's (8-bit) capacity.

**Scenario:** Consider multiplying a 16-bit number (stored in `R0` and `R1`, where `R0` is the LSB and `R1` is the MSB) by 2 using ALP.

Let's say `R0 = 11001010` (LSB) and `R1 = 01011011` (MSB).
We want to calculate `(R1:R0) * 2`.

We can use `RLC A` for this:

```assembly
    MOV A, R0       ; Load LSB into A
    RLC A           ; Shift LSB left, MSB bit goes to CY
    MOV R0, A       ; Store the shifted LSB

    MOV A, R1       ; Load MSB into A
    RLC A           ; Shift MSB left, its MSB bit goes to CY, and CY content goes to LSB of R1
    MOV R1, A       ; Store the shifted MSB
```

If `R0 = 11001010` and `R1 = 01011011` (representing `0101101111001010` binary), after the operations:
*   `RLC A` on `R0` (11001010) gives `A = 10010100` and `CY = 1`. `R0` becomes `10010100`.
*   `RLC A` on `R1` (01011011) with `CY = 1` gives `A = 10110111` and `CY = 0`. `R1` becomes `10110111`.

The new 16-bit number is `1011011110010100`, which is the correct result of multiplying the original number by 2.

Without `RLC A`, if we used `RL A`, the carry from the MSB would be lost, and the LSB would be filled with 0, leading to an incorrect result for multi-byte shifts.

---

### 6. Important Points to Remember

*   **Understand the Problem:** Clearly define the input, output, and any constraints (like the size of the number and its factorial).
*   **Algorithm Choice:** For factorial, an iterative approach is generally better in embedded systems than a recursive one.
*   **Register Allocation:** Plan which registers you will use for the input number, the loop counter, and the intermediate/final results.
*   **Instruction Set:** Familiarize yourself with the specific instructions needed for arithmetic (`MUL`, `ADD`), data movement (`MOV`), and looping (`DJNZ`).
*   **Result Overflow:** Be acutely aware of the 8-bit limitations of the 8051. Factorials grow very quickly. For numbers greater than 6, you *must* implement multi-byte arithmetic.
*   **Base Cases:** Always handle base cases for factorial (0! = 1, 1! = 1) correctly.
*   **Debugging:** Use a simulator to step through your code, examine register values, and memory contents to identify and fix errors.
*   **Bit Manipulation's Role:** While factorial is arithmetic, bit manipulation is fundamental for advanced ALP and understanding how processors work at a lower level, especially for multi-byte operations.

---

### 7. Further Exploration

*   **Multi-byte Factorial:** Try to implement a program to calculate the factorial of a slightly larger number (e.g., 8! or 9!) using multi-byte addition and multiplication routines in ALP.
*   **Input Validation:** Add code to check if the input number is negative or too large for an 8-bit result and handle these cases appropriately (e.g., return an error code).
*   **Lookup Table:** For a fixed range of inputs, a lookup table for factorials could be more efficient than calculating them on the fly. This involves storing pre-calculated factorial values in memory.
*   **Embedded C:** Compare the ALP implementation with an equivalent factorial calculation in embedded C for the 8051.

This comprehensive set of notes covers the factorial of a number within the context of ALP for the 8051, aligning with the course outcomes and providing practical examples and explanations. Remember to practice by writing and simulating your own ALP programs.