---
title: "Different Addressing Modes Supported by 8051"
subject: "EMBEDDED SYSTEMS"
module: "Module 2: Designing with 8051 : "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c248"
status: "completed"
scrapedAt: "2026-05-20T17:05:32.024Z"
---
# Embedded Systems: Module 2 - Designing with 8051

## Topic: Different Addressing Modes Supported by 8051

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Identify and explain the various addressing modes supported by the 8051 microcontroller.
*   Understand the purpose and functionality of each addressing mode.
*   Differentiate between the various addressing modes and their suitability for different tasks.
*   Write simple 8051 assembly language programs utilizing different addressing modes.
*   Analyze the impact of addressing modes on instruction execution and memory access.

---

### 1. Introduction to Addressing Modes

**Definition:** Addressing modes are the different ways in which the operand of an instruction can be specified. In simpler terms, it's how the processor knows *where* to find the data it needs to operate on. The 8051 microcontroller supports a variety of addressing modes to provide flexibility and efficiency in accessing data from different memory locations and registers.

**Importance:** Choosing the right addressing mode can significantly impact:
    *   **Code size:** Some addressing modes require fewer bytes for instruction encoding.
    *   **Execution speed:** Certain modes allow for faster data access.
    *   **Flexibility:** Different modes enable efficient manipulation of various data structures and memory areas.

---

### 2. Types of Addressing Modes in 8051

The 8051 microcontroller supports the following primary addressing modes:

#### 2.1. Immediate Addressing

*   **Concept:** The operand is a constant value that is directly embedded within the instruction itself. The data is part of the instruction code.
*   **Syntax:** The immediate value is prefixed with a '#' symbol.
*   **Purpose:** Used for loading constant values into registers or memory locations.
*   **Example:**
    ```assembly
    MOV A, #55H    ; Load the hexadecimal value 55 into the Accumulator (A)
    MOV R0, #12    ; Load the decimal value 12 into register R0
    ```
*   **Key Points:**
    *   The operand is part of the instruction.
    *   Ideal for initializing registers or memory with fixed values.
    *   Efficient for small, constant data.

#### 2.2. Register Addressing

*   **Concept:** The operand is located in one of the 8051's general-purpose registers (R0 to R7). The instruction specifies which register to use.
*   **Syntax:** The register name is directly used as the operand.
*   **Purpose:** Used for operations involving data stored in registers. This is the fastest addressing mode as data is accessed directly from the CPU's internal registers.
*   **Example:**
    ```assembly
    MOV A, R5      ; Move the content of register R5 to the Accumulator (A)
    ADD R1, R0     ; Add the content of R0 to R1, storing the result in R1
    MOV R7, A      ; Move the content of the Accumulator (A) to register R7
    ```
*   **Key Points:**
    *   Operands are in CPU registers (R0-R7).
    *   Fastest addressing mode due to direct register access.
    *   Common for arithmetic, logical, and data transfer operations between registers.

#### 2.3. Direct Addressing

*   **Concept:** The operand is located in an internal RAM location (00H to 7FH) or the Special Function Register (SFR) area (80H to FFH). The instruction specifies the 8-bit address of the memory location.
*   **Syntax:** The 8-bit memory address is directly used as the operand.
*   **Purpose:** Used for accessing data stored in the internal RAM or SFRs.
*   **Example:**
    ```assembly
    MOV A, 30H     ; Move the content of internal RAM location 30H to the Accumulator (A)
    MOV P1, A      ; Move the content of the Accumulator (A) to Port 1 (SFR address 90H)
    MOV 50H, R2    ; Move the content of R2 to internal RAM location 50H
    ```
*   **Key Points:**
    *   Operands are in internal RAM (00H-7FH) or SFRs (80H-FFH).
    *   The address is encoded within the instruction.
    *   The address range is limited to 256 locations (00H-FFH).

#### 2.4. Indirect Addressing

*   **Concept:** The address of the operand is held in a register. The instruction specifies which register contains the address. This allows for flexible access to memory.
*   **Syntax:** The register holding the address is prefixed with an '@' symbol.
*   **Supported Registers:** Only R0 and R1 of the currently selected register bank, and the DPTR (Data Pointer) can be used for indirect addressing.
*   **Purpose:**
    *   **Using R0/R1:** Accessing internal RAM (00H-7FH) and External RAM (0000H-FFFFH).
    *   **Using DPTR:** Primarily used for accessing External RAM (0000H-FFFFH) and program memory (code memory).
*   **Examples:**

    *   **Indirect Addressing with R0/R1 for Internal RAM:**
        ```assembly
        MOV R0, #40H   ; Load address 40H into R0
        MOV A, @R0     ; Move the content of internal RAM location pointed to by R0 (40H) to A
        INC R0         ; Increment R0 to point to the next location (41H)
        MOV @R0, B     ; Move the content of register B to the internal RAM location pointed to by R0 (41H)
        ```

    *   **Indirect Addressing with R0/R1 for External RAM:**
        ```assembly
        MOV DPTR, #0100H ; Load the address 0100H into DPTR
        MOVX A, @DPTR    ; Move the content of External RAM location 0100H to A
        INC DPTR         ; Increment DPTR to point to the next location (0101H)
        MOVX @DPTR, R7   ; Move the content of R7 to External RAM location 0101H
        ```
        *Note: `MOVX` instructions are used for accessing external memory.*

    *   **Indirect Addressing with DPTR for Program Memory:**
        ```assembly
        MOV DPTR, #PROG_ADDR ; Load the program memory address into DPTR
        MOVX A, @A+DPTR     ; This is not a standard instruction for program memory. 
                            ; For program memory access, typically use MOVC (Move Code)
        MOVC A, @A+DPTR     ; Example of accessing program memory. This requires careful understanding of how pointers work with program memory. 
        ```
        *Correction/Clarification for Program Memory Access:* The `MOVC` instruction is used to fetch data from program memory (ROM). The address can be formed using `DPTR` or `PC` (Program Counter).
        ```assembly
        MOV DPTR, #0F000H    ; Load address into DPTR
        MOVC A, @DPTR      ; Move the byte from program memory location F000H to A
        ```

*   **Key Points:**
    *   The address of the operand is stored in a register (R0, R1, or DPTR).
    *   Provides flexibility for accessing sequential memory locations or blocks of data.
    *   `MOVX` is used for external data memory access.
    *   `MOVC` is used for program memory access.

#### 2.5. Indexed Addressing

*   **Concept:** The address of the operand is formed by adding the contents of the Accumulator (A) to the contents of a base register.
*   **Supported Base Registers:** The DPTR or the Program Counter (PC).
*   **Syntax:** The operand is represented as `@A + BaseRegister`.
*   **Purpose:** Primarily used for accessing lookup tables stored in program memory (ROM). This is very useful for tasks like character displays (ASCII to segment codes) or decoding tables.
*   **Example:**
    ```assembly
    MOV A, #02H          ; Load the index (e.g., 02) into the Accumulator
    MOV DPTR, #TABLE_START ; Load the starting address of the lookup table into DPTR
    MOVC A, @A + DPTR    ; Fetch the byte from program memory at address (TABLE_START + 02H) and store it in A
    ```
    *Explanation:* If `TABLE_START` is at program memory address `0F000H`, and `A` contains `02H`, then `@A + DPTR` will point to `0F002H`. The `MOVC` instruction will then fetch the byte from that location.
*   **Key Points:**
    *   Address is calculated by `Base Register + Accumulator`.
    *   Mainly used for accessing lookup tables in program memory.
    *   `MOVC` is used for program memory access.

#### 2.6. Relative Addressing

*   **Concept:** Used exclusively by jump instructions (like `SJMP`, `JNC`, `JC`, `DJNZ`, etc.). The operand is a signed displacement that is added to the current Program Counter (PC) value to determine the target address of the jump.
*   **Syntax:** The displacement is directly specified.
*   **Purpose:** To implement conditional and unconditional jumps within the program flow.
*   **Example:**
    ```assembly
    HERE: MOV A, R0
          CJNE A, #0FFH, LOOP  ; Compare A with FFH. If not equal, jump to LOOP.
          SJMP END            ; Unconditional jump to END.

    LOOP: INC R1
          SJMP HERE           ; Relative jump back to HERE.

    END:  NOP
    ```
*   **Key Points:**
    *   Used only for jump instructions.
    *   The displacement is relative to the PC.
    *   The displacement is an 8-bit signed value (range of -128 to +127 bytes).
    *   This allows for short jumps within a certain range of the current instruction.

#### 2.7. Absolute Addressing

*   **Concept:** Used by only a few instructions, such as `ACALL` (Absolute CALL) and `AJMP` (Absolute JUMP). These instructions allow jumping or calling to any location within the *same 2K block* of program memory.
*   **Syntax:** The 11-bit address is directly encoded in the instruction.
*   **Purpose:** To call subroutines or jump to a location within a specific 2K segment of the code memory.
*   **Example:**
    ```assembly
    AJMP 0800H   ; Jump to program memory address 0800H.
                 ; The instruction assumes it is within the same 2K block as the current instruction.
    ACALL SUBROUTINE_ADDR ; Call a subroutine located within the same 2K block.
    ```
*   **Key Points:**
    *   Used by `ACALL` and `AJMP`.
    *   Targets addresses within the same 2K block of program memory.
    *   The 11-bit address is part of the instruction.

#### 2.8. Long Addressing

*   **Concept:** Used by `LCALL` (Long CALL) and `LJMP` (Long JUMP) instructions. These instructions allow jumping or calling to any location within the entire 64K program memory space.
*   **Syntax:** The 16-bit address is directly encoded in the instruction.
*   **Purpose:** To call subroutines or jump to any location in the entire program memory.
*   **Example:**
    ```assembly
    LJMP 15000H  ; Jump to program memory address 15000H.
    LCALL MY_SUBROUTINE ; Call a subroutine anywhere in the 64K program memory.
    ```
*   **Key Points:**
    *   Used by `LCALL` and `LJMP`.
    *   Targets any address within the entire 64K program memory.
    *   The 16-bit address is part of the instruction.

---

### 3. Summary of Addressing Modes

| Addressing Mode     | Operand Specification                                   | Primary Use Cases                                      | Key Registers Involved | Instruction Types Used |
| :------------------ | :------------------------------------------------------ | :----------------------------------------------------- | :--------------------- | :--------------------- |
| **Immediate**       | Constant value embedded in instruction                  | Loading constants, initialization                      | None                   | MOV, ADD, SUB, etc.    |
| **Register**        | Data is in a CPU register (R0-R7)                       | Fast data manipulation, register-to-register transfer  | R0-R7                  | MOV, ADD, SUB, etc.    |
| **Direct**          | Operand is at a specific 8-bit address (internal RAM/SFR) | Accessing internal RAM and SFRs                        | None                   | MOV, ADD, SUB, etc.    |
| **Indirect**        | Address of operand is in a register (R0, R1, DPTR)      | Accessing internal/external RAM, program memory (with `MOVC`) | R0, R1, DPTR           | MOV, MOVX, MOVC        |
| **Indexed**         | Address = Base Register (DPTR/PC) + Accumulator         | Accessing lookup tables in program memory              | A, DPTR, PC            | MOVC                   |
| **Relative**        | Signed displacement added to PC                         | Conditional and unconditional jumps                    | PC                     | SJMP, JNC, JC, etc.    |
| **Absolute**        | 11-bit address within the same 2K block                 | Short jumps/calls within a 2K segment                  | PC                     | AJMP, ACALL            |
| **Long**            | 16-bit address anywhere in program memory               | Jumps/calls to any location in program memory          | PC                     | LJMP, LCALL            |

---

### 4. Practice Questions and Exercises

**Question 1:**
Which addressing mode is the fastest for accessing data? Why?

**Question 2:**
Write an assembly program snippet to load the value `0A5H` into register `R3` using immediate addressing.

**Question 3:**
If register `R0` contains the value `20H`, and you want to move the content of internal RAM location `20H` into the accumulator, which addressing mode and instruction would you use? Write the assembly instruction.

**Question 4:**
What is the difference between direct addressing and indirect addressing using `R0`?

**Question 5:**
When would you typically use indexed addressing?

**Question 6:**
Explain the purpose of relative addressing. What is the range of the displacement?

**Question 7:**
Write a program snippet to move the content of external RAM location `0500H` into register `B` using indirect addressing. Assume `DPTR` is used.

**Question 8:**
Differentiate between absolute and long addressing.

---

### 5. Answers to Practice Questions

**Answer 1:**
**Register Addressing** is the fastest because the data is accessed directly from the CPU's internal registers, requiring minimal external bus activity and no address calculation.

**Answer 2:**
```assembly
MOV R3, #0A5H
```

**Answer 3:**
You would use **Direct Addressing**.
```assembly
MOV A, 20H
```
*(Assuming 20H is the internal RAM address. If it were an SFR, it would also use direct addressing.)*

**Answer 4:**
*   **Direct Addressing:** The instruction directly specifies the 8-bit address (00H-FFH) of the internal RAM or SFR where the operand is located.
*   **Indirect Addressing (using R0):** The address of the operand is stored in register `R0`. The instruction uses `@R0` to access the data at the address contained in `R0`. This allows access to both internal RAM (00H-7FH) and external RAM (0000H-FFFFH) by simply changing the value in `R0`.

**Answer 5:**
Indexed addressing is typically used to access **lookup tables** stored in program memory (ROM). This is useful for tasks like character conversion, decoding, or accessing pre-defined data arrays.

**Answer 6:**
Relative addressing is used by jump instructions. It allows the program to jump to a new location by adding a signed displacement to the current Program Counter (PC) value. The range of the displacement is **-128 to +127 bytes**.

**Answer 7:**
```assembly
MOV DPTR, #0500H  ; Load the external RAM address into DPTR
MOVX B, @DPTR     ; Move the content of external RAM location 0500H into register B
```

**Answer 8:**
*   **Absolute Addressing:** Used by `AJMP` and `ACALL`. It allows jumps/calls to any location within the **same 2K block** of program memory. The 11-bit target address is directly encoded in the instruction.
*   **Long Addressing:** Used by `LJMP` and `LCALL`. It allows jumps/calls to **any location within the entire 64K program memory space**. The 16-bit target address is directly encoded in the instruction.

---

### 6. Important Points to Remember

*   **Addressing modes are crucial for efficient program design.** Understand their differences to select the most appropriate one for each task.
*   **Immediate addressing** is for constants.
*   **Register addressing** is the fastest.
*   **Direct addressing** is for internal RAM and SFRs.
*   **Indirect addressing** offers flexibility, using `R0`/`R1` for internal/external RAM and `DPTR` for external RAM/program memory.
*   **`MOVX`** is for external data memory; **`MOVC`** is for program memory.
*   **Indexed addressing** is ideal for lookup tables.
*   **Relative addressing** is for short jumps within a limited range.
*   **Absolute addressing** restricts jumps/calls to a 2K block.
*   **Long addressing** provides access to the entire program memory.
*   Always consider the target memory space (internal RAM, external RAM, or program memory) when choosing an addressing mode for data access.
