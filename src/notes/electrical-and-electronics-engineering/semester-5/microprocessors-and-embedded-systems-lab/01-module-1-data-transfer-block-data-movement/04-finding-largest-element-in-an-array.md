---
title: "finding largest element in an array."
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS LAB"
module: "Module 1: Data transfer: Block data movement"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200862b85456187f364e6"
status: "completed"
scrapedAt: "2026-05-23T16:23:01.077Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS LAB

## Module 1: Data Transfer: Block Data Movement

---

### Topic: Finding the Largest Element in an Array

---

**Learning Outcomes:**

Upon completion of this topic, you will be able to:

*   Understand the concept of arrays in assembly language programming.
*   Implement algorithms for finding the largest element within an array using 8051 assembly language.
*   Apply data transfer instructions for efficient array processing.
*   Trace the execution of a program to find the largest element in an array.
*   Debug and verify the correctness of the assembly code.

---

**Course Outcomes Alignment:**

*   **CO1: Develop and execute ALP programs for solving arithmetic and logical problems using microcontroller (Knowledge Level: K3)** - This topic directly addresses the development and execution of an assembly language program (ALP) to solve a logical problem (finding the largest element).
*   **CO2: Develop embedded C programming using instruction sets of 8051 (Knowledge Level: K3)** - While the focus is on ALP, understanding the underlying logic can be translated to embedded C. (This outcome is less directly addressed by the ALP topic, but the conceptual understanding is transferable).

---

### 1. Introduction to Arrays in 8051 Assembly

An array is a collection of data items of the same type, stored in contiguous memory locations. In 8051 assembly language, arrays are typically implemented by:

*   **Defining the array data:** Using assembler directives like `DB` (Define Byte) or `DW` (Define Word) to allocate memory and initialize array elements.
*   **Using a pointer:** A register (like R0, R1, etc.) is used as a pointer to hold the starting address of the array.
*   **Looping and indexing:** Iterative instructions are used to traverse the array, accessing each element by incrementing the pointer.

**Key Concept:** The ability to move data in blocks is fundamental to array processing. Instructions that facilitate sequential data access and modification are crucial.

---

### 2. Algorithm for Finding the Largest Element

The general algorithm to find the largest element in an array is as follows:

1.  **Initialization:**
    *   Assume the first element of the array is the largest. Store it in a dedicated register (e.g., `ACC`).
    *   Initialize a pointer to the second element of the array.
    *   Initialize a counter for the number of elements to compare.

2.  **Comparison Loop:**
    *   Get the current element from the array using the pointer.
    *   Compare the current element with the assumed largest element (stored in `ACC`).
    *   If the current element is greater than the assumed largest, update the assumed largest element in `ACC` with the current element.
    *   Move the pointer to the next element in the array.
    *   Decrement the counter.
    *   Repeat the comparison until all elements have been processed (counter reaches zero).

3.  **Result:** The `ACC` register will hold the largest element after the loop terminates.

**Textbook Reference:**

*   **Ayala, Kenneth. *The 8051 Microcontroller*. (Cengage Learning):** Chapter 5, "Instruction Set," often discusses data movement and arithmetic instructions that are essential for array manipulation. The concept of indirect addressing (using pointers) is also covered here, crucial for accessing array elements.
*   **Das, R. LylaB. *Microprocessors and Microcontrollers*. (Pearson Education):** Similar to Ayala, this book would detail the instruction set and provide examples of basic programming constructs like loops and comparisons.

---

### 3. 8051 Assembly Implementation Example

Let's assume we have an array of 8-bit numbers stored in internal RAM starting at address `30H`. The array has 5 elements. We want to find the largest element and store it in the accumulator.

**Array Data:**

| Address | Value |
| :------ | :---- |
| `30H`   | `15H` |
| `31H`   | `2BH` |
| `32H`   | `0FH` |
| `33H`   | `33H` |
| `34H`   | `1AH` |

**Objective:** Find the largest element (which is `33H`) and store it in the accumulator.

**Assembly Code:**

```assembly
ORG 0000H      ; Start address of program

; --- Initialization ---
MOV DPTR, #ARRAY_START  ; Load the starting address of the array into DPTR
MOV R0, #5              ; Initialize the counter for the number of elements (N=5)
MOVX A, @DPTR           ; Get the first element and load it into ACC (assume it's the largest)
INC DPTR                ; Move DPTR to the second element
DJNZ R0, COMPARE_LOOP   ; Decrement counter and jump to COMPARE_LOOP if not zero (initially R0=5, so loop runs 4 times for remaining elements)

; --- Comparison Loop ---
COMPARE_LOOP:
    MOVX B, @DPTR       ; Get the current array element into register B
    CJNE A, B, CHECK_GREATER ; Compare ACC with B. If not equal, jump to CHECK_GREATER.
    SJMP NEXT_ELEMENT     ; If equal, no update needed, move to next element.

CHECK_GREATER:
    CLR C               ; Clear Carry flag for subtraction
    SUBB A, B           ; Subtract B from A (A - B). If A < B, Carry will be set.
    JC UPDATE_LARGEST   ; If Carry is set (A < B), then B is larger. Jump to update.
    SJMP NEXT_ELEMENT     ; If Carry is not set (A >= B), A is still the largest.

UPDATE_LARGEST:
    MOV A, B            ; Move the larger element (from B) into ACC

NEXT_ELEMENT:
    INC DPTR            ; Move DPTR to the next element in the array
    DJNZ R0, COMPARE_LOOP ; Decrement counter and repeat if not zero

; --- Program Termination (Optional) ---
HERE: JMP HERE          ; Infinite loop to halt execution

; --- Data Definition ---
ARRAY_START:
    DB 15H, 2BH, 0FH, 33H, 1AH ; Define the array elements (5 bytes)

END
```

**Explanation of Key Instructions:**

*   **`ORG 0000H`**: Sets the origin (starting address) of the program in program memory.
*   **`MOV DPTR, #ARRAY_START`**: Loads the 16-bit address of `ARRAY_START` into the Data Pointer register (`DPTR`). `DPTR` is essential for accessing external memory or data tables.
*   **`MOV R0, #5`**: Initializes Register `R0` with the count of elements in the array. `R0` will be used as a loop counter.
*   **`MOVX A, @DPTR`**: `MOVX` is used for accessing external data memory. `@DPTR` means the content at the address pointed to by `DPTR`. This instruction loads the first element of the array into the Accumulator (`A`).
*   **`INC DPTR`**: Increments the `DPTR` to point to the next memory location, effectively moving to the next element of the array.
*   **`DJNZ R0, COMPARE_LOOP`**: Decrement `R0` by 1. If `R0` is not zero after decrementing, jump to the label `COMPARE_LOOP`. This instruction is used for loop control.
*   **`MOVX B, @DPTR`**: Loads the current array element pointed to by `DPTR` into Register `B`.
*   **`CJNE A, B, CHECK_GREATER`**: Compare `A` and `B`. If they are not equal, jump to `CHECK_GREATER`. If they are equal, execution continues to the next instruction.
*   **`CLR C`**: Clears the Carry flag.
*   **`SUBB A, B`**: Subtracts `B` from `A` and stores the result in `A`, setting the Carry flag if `A < B` after the subtraction (or if a borrow is needed). This is a standard way to check for greater than in 8051 assembly.
*   **`JC UPDATE_LARGEST`**: Jump if Carry is set. If `A < B` (Carry is set), it means `B` is the larger element.
*   **`MOV A, B`**: If `B` was found to be larger, this instruction moves `B`'s content into the Accumulator (`A`), updating the current largest element.
*   **`JMP HERE`**: An infinite loop to stop the program execution after finding the largest element.

---

### 4. Tracing the Example Program

Let's trace the execution with the given array: `15H, 2BH, 0FH, 33H, 1AH`

| Instruction            | DPTR Value | R0 Value | ACC Value | B Value | Flags (C, Z) | Notes                                      |
| :--------------------- | :--------- | :------- | :-------- | :------ | :----------- | :----------------------------------------- |
| `ORG 0000H`            | -          | -        | -         | -       | -            | Program starts                             |
| `MOV DPTR, #ARRAY_START` | `0030H`    | -        | -         | -       | -            | DPTR points to `30H`                       |
| `MOV R0, #5`           | `0030H`    | `05H`    | -         | -       | -            | R0 initialized to 5                        |
| `MOVX A, @DPTR`        | `0030H`    | `05H`    | `15H`     | -       | -            | ACC = `15H` (First element)                |
| `INC DPTR`             | `0031H`    | `05H`    | `15H`     | -       | -            | DPTR points to the second element          |
| `DJNZ R0, COMPARE_LOOP` | `0031H`    | `04H`    | `15H`     | -       | -            | R0 decremented, not zero, loop starts      |
| `MOVX B, @DPTR`        | `0031H`    | `04H`    | `15H`     | `2BH`   | -            | B = `2BH`                                  |
| `CJNE A, B, CHECK_GREATER` | `0031H`    | `04H`    | `15H`     | `2BH`   | -            | `15H != 2BH`, Jump to `CHECK_GREATER`      |
| `CHECK_GREATER:`       |            |          |           |         |              |                                            |
| `CLR C`                | `0031H`    | `04H`    | `15H`     | `2BH`   | 0, -         | Carry cleared                              |
| `SUBB A, B`            | `0031H`    | `04H`    | `EAH`     | `2BH`   | 1, -         | `15H - 2BH` -> Borrow needed (C=1)         |
| `JC UPDATE_LARGEST`    | `0031H`    | `04H`    | `EAH`     | `2BH`   | 1, -         | C=1, Jump to `UPDATE_LARGEST`              |
| `UPDATE_LARGEST:`      |            |          |           |         |              |                                            |
| `MOV A, B`             | `0031H`    | `04H`    | `2BH`     | `2BH`   | 1, -         | ACC = `2BH` (New largest)                  |
| `NEXT_ELEMENT:`        |            |          |           |         |              |                                            |
| `INC DPTR`             | `0032H`    | `04H`    | `2BH`     | `2BH`   | 1, -         | DPTR points to the third element           |
| `DJNZ R0, COMPARE_LOOP` | `0032H`    | `03H`    | `2BH`     | `2BH`   | 1, -         | R0 decremented, not zero, loop continues   |
| `MOVX B, @DPTR`        | `0032H`    | `03H`    | `2BH`     | `0FH`   | -            | B = `0FH`                                  |
| `CJNE A, B, CHECK_GREATER` | `0032H`    | `03H`    | `2BH`     | `0FH`   | -            | `2BH != 0FH`, Jump to `CHECK_GREATER`      |
| `CHECK_GREATER:`       |            |          |           |         |              |                                            |
| `CLR C`                | `0032H`    | `03H`    | `2BH`     | `0FH`   | 0, -         | Carry cleared                              |
| `SUBB A, B`            | `0032H`    | `03H`    | `2BH`     | `0FH`   | 0, -         | `2BH - 0FH` -> No borrow (C=0)             |
| `JC UPDATE_LARGEST`    | `0032H`    | `03H`    | `2BH`     | `0FH`   | 0, -         | C=0, Does NOT jump                         |
| `SJMP NEXT_ELEMENT`   | `0032H`    | `03H`    | `2BH`     | `0FH`   | 0, -         | Jump to `NEXT_ELEMENT`                     |
| `NEXT_ELEMENT:`        |            |          |           |         |              |                                            |
| `INC DPTR`             | `0033H`    | `03H`    | `2BH`     | `0FH`   | 0, -         | DPTR points to the fourth element          |
| `DJNZ R0, COMPARE_LOOP` | `0033H`    | `02H`    | `2BH`     | `0FH`   | 0, -         | R0 decremented, not zero, loop continues   |
| `MOVX B, @DPTR`        | `0033H`    | `02H`    | `2BH`     | `33H`   | -            | B = `33H`                                  |
| `CJNE A, B, CHECK_GREATER` | `0033H`    | `02H`    | `2BH`     | `33H`   | -            | `2BH != 33H`, Jump to `CHECK_GREATER`      |
| `CHECK_GREATER:`       |            |          |           |         |              |                                            |
| `CLR C`                | `0033H`    | `02H`    | `2BH`     | `33H`   | 0, -         | Carry cleared                              |
| `SUBB A, B`            | `0033H`    | `02H`    | `02H`     | `33H`   | 1, -         | `2BH - 33H` -> Borrow needed (C=1)         |
| `JC UPDATE_LARGEST`    | `0033H`    | `02H`    | `02H`     | `33H`   | 1, -         | C=1, Jump to `UPDATE_LARGEST`              |
| `UPDATE_LARGEST:`      |            |          |           |         |              |                                            |
| `MOV A, B`             | `0033H`    | `02H`    | `33H`     | `33H`   | 1, -         | ACC = `33H` (New largest)                  |
| `NEXT_ELEMENT:`        |            |          |           |         |              |                                            |
| `INC DPTR`             | `0034H`    | `02H`    | `33H`     | `33H`   | 1, -         | DPTR points to the fifth element           |
| `DJNZ R0, COMPARE_LOOP` | `0034H`    | `01H`    | `33H`     | `33H`   | 1, -         | R0 decremented, not zero, loop continues   |
| `MOVX B, @DPTR`        | `0034H`    | `01H`    | `33H`     | `1AH`   | -            | B = `1AH`                                  |
| `CJNE A, B, CHECK_GREATER` | `0034H`    | `01H`    | `33H`     | `1AH`   | -            | `33H != 1AH`, Jump to `CHECK_GREATER`      |
| `CHECK_GREATER:`       |            |          |           |         |              |                                            |
| `CLR C`                | `0034H`    | `01H`    | `33H`     | `1AH`   | 0, -         | Carry cleared                              |
| `SUBB A, B`            | `0034H`    | `01H`    | `33H`     | `1AH`   | 0, -         | `33H - 1AH` -> No borrow (C=0)             |
| `JC UPDATE_LARGEST`    | `0034H`    | `01H`    | `33H`     | `1AH`   | 0, -         | C=0, Does NOT jump                         |
| `SJMP NEXT_ELEMENT`   | `0034H`    | `01H`    | `33H`     | `1AH`   | 0, -         | Jump to `NEXT_ELEMENT`                     |
| `NEXT_ELEMENT:`        |            |          |           |         |              |                                            |
| `INC DPTR`             | `0035H`    | `01H`    | `33H`     | `1AH`   | 0, -         | DPTR points past the last element          |
| `DJNZ R0, COMPARE_LOOP` | `0035H`    | `00H`    | `33H`     | `1AH`   | 0, -         | R0 decremented to 0, loop terminates       |
| `HERE: JMP HERE`       | `0035H`    | `00H`    | `33H`     | `1AH`   | 0, -         | Program halts. ACC holds `33H`.            |

**Important Note on `SUBB A, B` and Carry:**
The `SUBB A, B` instruction is crucial here. It performs `A = A - B - Carry`.
*   If `A` is greater than `B`, no borrow is needed from the next bit position, so the Carry flag is *clear* (0).
*   If `A` is less than `B`, a borrow is needed, so the Carry flag is *set* (1).
*   `JC` (Jump if Carry is set) will execute if `A < B`, indicating `B` is larger and needs to be moved to `A`.

---

### 5. Alternative using `ORG` and `MOVX` with Direct Addressing

If the array is small and its size is known, it can be stored in program memory (ROM) using `ORG` and `DB`. Accessing this data might use `MOVC` (Move Code) or `MOVX` with `DPTR` and indirect addressing. The example above uses `MOVX @DPTR`.

**Using `MOVX` vs `MOVC`:**
*   `MOVX` is used for accessing **external data memory**.
*   `MOVC` is used for accessing **program memory (ROM)**, often for lookup tables or data stored directly in the code. For data embedded within the code, `MOVC` is more appropriate.

Let's revise the example to use `MOVC` assuming the array is in program memory.

```assembly
ORG 0000H      ; Start address of program

; --- Initialization ---
MOV DPTR, #ARRAY_START  ; Load the starting address of the array into DPTR
MOV R0, #5              ; Initialize the counter for the number of elements (N=5)
MOVC A, @DPTR           ; Get the first element from program memory into ACC
INC DPTR                ; Move DPTR to the second element
DJNZ R0, COMPARE_LOOP   ; Decrement counter and jump to COMPARE_LOOP if not zero

; --- Comparison Loop ---
COMPARE_LOOP:
    MOVC B, @DPTR       ; Get the current array element from program memory into register B
    CJNE A, B, CHECK_GREATER ; Compare ACC with B.
    SJMP NEXT_ELEMENT     ; If equal, no update needed.

CHECK_GREATER:
    CLR C               ; Clear Carry flag for subtraction
    SUBB A, B           ; Subtract B from A (A - B). If A < B, Carry will be set.
    JC UPDATE_LARGEST   ; If Carry is set (A < B), then B is larger.
    SJMP NEXT_ELEMENT     ; If Carry is not set (A >= B), A is still the largest.

UPDATE_LARGEST:
    MOV A, B            ; Move the larger element (from B) into ACC

NEXT_ELEMENT:
    INC DPTR            ; Move DPTR to the next element in the array
    DJNZ R0, COMPARE_LOOP ; Decrement counter and repeat if not zero

; --- Program Termination (Optional) ---
HERE: JMP HERE          ; Infinite loop to halt execution

; --- Data Definition ---
ARRAY_START:
    DB 15H, 2BH, 0FH, 33H, 1AH ; Define the array elements (stored in program memory)

END
```

**Key Difference:** `MOVX` is replaced with `MOVC`. `MOVC` is specifically for accessing bytes from program memory (ROM).

---

### 6. Practice Questions and Exercises

**Question 1:**
Consider an array of 10 bytes stored in internal RAM starting at address `40H`. Write an 8051 assembly language program to find the smallest element in the array. Store the smallest element in register `R7`.

**Answer 1:**

```assembly
ORG 0000H

; Array: 05, 02, 09, 01, 07, 0A, 03, 04, 08, 06
ARRAY_START EQU 40H
NUM_ELEMENTS EQU 10

; --- Initialization ---
MOV R0, #ARRAY_START    ; Pointer to the start of the array
MOV R1, #NUM_ELEMENTS   ; Counter for the number of elements
MOV A, @R0              ; Assume first element is the smallest
MOV R7, A               ; Store it in R7
INC R0                  ; Move pointer to the second element
DEC R1                  ; Decrement counter (we've already processed one element)

; --- Comparison Loop ---
SMALLEST_LOOP:
    CJNE R1, #0, CONT   ; If counter is zero, exit loop
    SJMP EXIT_LOOP      ; Exit if counter is zero

CONT:
    MOV A, @R0          ; Get current element into ACC
    CLR C               ; Clear Carry for subtraction
    SUBB A, R7          ; Subtract the current smallest (R7) from the current element (A)
                        ; If A < R7, then Carry will be SET (borrow needed).
    JC UPDATE_SMALLEST  ; If Carry is set (A < R7), A is the new smallest.
    SJMP NEXT_ELEMENT   ; If Carry is clear (A >= R7), R7 is still the smallest.

UPDATE_SMALLEST:
    MOV A, @R0          ; Get the current element (which is smaller)
    MOV R7, A           ; Update R7 with the new smallest element

NEXT_ELEMENT:
    INC R0              ; Move pointer to the next element
    DJNZ R1, SMALLEST_LOOP ; Decrement counter and repeat if not zero

EXIT_LOOP:
    ; R7 now holds the smallest element

    HERE: JMP HERE      ; Halt execution

; --- Data Definition ---
ORG ARRAY_START
DB 05H, 02H, 09H, 01H, 07H, 0AH, 03H, 04H, 08H, 06H

END
```

**Explanation of `SUBB A, R7` for smallest:**
To find the smallest, we compare `CurrentElement` with `CurrentSmallest`.
*   If `CurrentElement < CurrentSmallest`:
    *   We perform `CurrentElement - CurrentSmallest`.
    *   A borrow will be needed, setting the Carry flag.
    *   `JC UPDATE_SMALLEST` will be taken.
*   If `CurrentElement >= CurrentSmallest`:
    *   No borrow needed, Carry flag remains clear.
    *   `JC UPDATE_SMALLEST` will not be taken.

**Question 2:**
Modify the original example program to find the largest element in an array of 32-bit numbers. How would the data definition and memory access instructions change?

**Answer 2:**

For 32-bit numbers (4 bytes per number), the following changes are needed:

1.  **Data Definition:**
    *   Each number will occupy 4 bytes. The `DB` directive will be used for each byte of the 32-bit number.
    *   Example: `DB 12H, 34H, 56H, 78H` would represent the 32-bit number `12345678H`.

2.  **Pointer Management:**
    *   The pointer (`DPTR` or a pair of registers) needs to be incremented by 4 after processing each 32-bit element to move to the next element.

3.  **Register Usage:**
    *   To hold a 32-bit number, we need multiple registers. A common approach is to use a block of registers (e.g., `R4` to `R7`) to hold the current largest number and another block for the current element being compared.

4.  **Comparison Logic:**
    *   The comparison needs to be done byte-by-byte, starting from the most significant byte.
    *   If the current element's MSB is greater than the current largest's MSB, the current element is larger.
    *   If the MSBs are equal, compare the next significant byte, and so on.
    *   If all bytes are equal, the numbers are the same.

**Conceptual Code Snippet (Illustrative - not complete):**

```assembly
; Assume current largest is in R4-R7 (MSB in R4, LSB in R7)
; Assume current element is in R0-R3 (MSB in R0, LSB in R3)

; Comparison logic would involve:
; Compare R4 (MSB of current) with R0 (MSB of element)
; If R4 < R0, then element is larger, update R4-R7 with R0-R3
; If R4 > R0, then current largest is still larger, continue
; If R4 == R0, then compare R5 with R1, and so on.
```

**Key Concept:** Handling larger data types in assembly requires meticulous byte-by-byte manipulation and careful register allocation.

---

### 7. Important Points to Remember

*   **Data Location:** Be aware of whether your array is stored in **internal RAM** (access via `MOV A, @R0` or `MOVX A, @DPTR` if external RAM is used) or **program memory (ROM)** (access via `MOVC A, @DPTR`).
*   **Pointer Register:** `DPTR` is the most convenient for accessing tables and sequential data, especially when the starting address is not in the lower 128 bytes of RAM. `R0` and `R1` can also be used as pointers.
*   **Loop Control:** `DJNZ` is an efficient instruction for loop counting.
*   **Comparison:** `CJNE` is used for equality comparison, while `SUBB A, R_or_Memory` followed by `JC` or `JNC` is used for greater-than/less-than comparisons.
*   **Data Width:** The size of the elements in the array (8-bit, 16-bit, 32-bit) dictates how many bytes you need to transfer per element and how many registers you need for comparison.
*   **Indexing:** For arrays starting at arbitrary locations or with a known offset, you can load the base address into `DPTR` or a register pair and then add an index value (possibly in another register) before accessing the element.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. Reference Books Summary and Relevance

*   **Ayala, Kenneth. *The 8051 Microcontroller*. (Cengage Learning):** Excellent for understanding the core 8051 architecture, instruction set, and fundamental programming techniques. Chapter 5 (Instruction Set) is key for data transfer and arithmetic operations, which are directly applied here. The book provides clear examples of memory access and addressing modes.
*   **Das, R. LylaB. *Microprocessors and Microcontrollers*. (Pearson Education):** Offers a good overview of microprocessors and microcontrollers, with dedicated sections on the 8051. It would cover assembly language programming, including loops, arrays, and data manipulation, reinforcing the concepts learned in Ayala.
*   **MacKenzie, I. Scott, Phan, Raphael C.-W. *The 8051 Microcontroller***: This reference would provide deeper insights into specific instruction functionalities and advanced programming techniques. It's useful for troubleshooting and optimizing code.
*   **Mazidi, Muhammad Ali. *The 8051 Microcontroller and Embedded Systems*. (Pearson Education):** A comprehensive resource that covers both the microcontroller and embedded systems aspects. It will likely have detailed examples of array manipulation and data transfer, explaining the "why" behind certain programming choices.

These textbooks and reference books are crucial for understanding the underlying principles of the 8051 instruction set, memory organization, and programming paradigms that enable efficient data transfer and array processing, directly contributing to achieving **CO1** and providing a foundation for other course outcomes.

---