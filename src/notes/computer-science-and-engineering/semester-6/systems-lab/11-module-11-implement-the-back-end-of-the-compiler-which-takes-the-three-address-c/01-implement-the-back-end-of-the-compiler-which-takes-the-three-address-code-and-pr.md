---
title: "Implement the back end of the compiler which takes the three address code and produces assembly language instructions that can be assembled and run using a corresponding assembler. The target assembly instructions can be simple move, add, sub, jump etc."
subject: "SYSTEMS LAB"
module: "Module 11: Implement the back end of the compiler which takes the three address code and produces assembly language instructions that can be assembled and run using a corresponding assembler. The target assembly instructions can be simple move, add, sub, jump etc."
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8c044"
status: "completed"
scrapedAt: "2026-05-20T16:57:40.349Z"
---
# SYSTEMS LAB - Module 11: Compiler Backend (Three-Address Code to Assembly)

This module focuses on the crucial final stage of the compilation process: transforming the intermediate representation of a program (Three-Address Code or TAC) into machine-readable assembly language.

## 1. Learning Outcomes

Upon successful completion of this module, you will be able to:

*   **Understand the role and necessity of the compiler backend.**
*   **Analyze Three-Address Code (TAC) for instruction generation.**
*   **Map TAC operations to corresponding assembly language instructions.**
*   **Generate assembly code for basic arithmetic, data movement, and control flow statements.**
*   **Understand the concept of register allocation and its importance.**
*   **Produce runnable assembly code for a given TAC input.**
*   **Familiarize yourself with a target assembly language and assembler.**

## 2. Key Concepts and Definitions

### 2.1. Compiler Backend

The **compiler backend** is the part of a compiler responsible for taking the intermediate representation (IR) of a program and translating it into target machine code or assembly language. Its primary goals are:

*   **Instruction Selection:** Choosing the most appropriate machine instructions for each IR operation.
*   **Register Allocation:** Assigning program variables and intermediate results to CPU registers to minimize memory access.
*   **Instruction Scheduling:** Reordering instructions to optimize performance, taking into account pipeline effects and dependencies.
*   **Code Generation:** Emitting the final sequence of assembly or machine code.

### 2.2. Three-Address Code (TAC)

**Three-Address Code (TAC)** is an intermediate representation where each instruction has at most three operands. It's a linear sequence of simple operations, making it easier to analyze and translate. Common forms include:

*   **Assignment:** `result = operand1 operator operand2` (e.g., `t1 = a + b`)
*   **Copy:** `result = operand1` (e.g., `t2 = t1`)
*   **Unconditional Jump:** `goto label`
*   **Conditional Jump:** `if operand1 operator operand2 goto label` (e.g., `if t1 > 0 goto L1`)
*   **Procedure Calls:** `call function, arg1, arg2, ...`
*   **Return:** `return result`

**Key Advantages of TAC:**

*   **Simplicity:** Each instruction performs a single, simple operation.
*   **Regularity:** Uniform structure makes parsing and manipulation easier.
*   **Machine Independence (to a degree):** While representing operations, it's not tied to a specific machine's instruction set.
*   **Facilitates Optimization:** Many compiler optimizations are performed on TAC.

### 2.3. Assembly Language

**Assembly language** is a low-level programming language that has a very strong correspondence with the instruction set architecture (ISA) of a computer. Each assembly instruction typically corresponds to one machine code instruction.

**Key Characteristics:**

*   **Mnemonics:** Uses human-readable mnemonics for operations (e.g., `MOV` for move, `ADD` for add).
*   **Operands:** Can use registers, memory addresses, and immediate values.
*   **Labels:** Used to mark locations in the code for jumps and branches.
*   **Direct Hardware Control:** Allows for fine-grained control over CPU and memory.

### 2.4. Target Assembly Language and Assembler

The specific assembly language and assembler used will depend on the target architecture (e.g., x86, ARM, MIPS). For this module, we'll assume a simple, hypothetical assembly language for demonstration.

**Example Target Assembly Instructions:**

*   `MOV destination, source`  - Move data from source to destination.
*   `ADD destination, source` - Add source to destination, store result in destination.
*   `SUB destination, source` - Subtract source from destination, store result in destination.
*   `JMP label`              - Unconditional jump to a label.
*   `JE label`               - Jump if equal (often based on flags set by previous comparisons).
*   `JG label`               - Jump if greater.
*   `CMP operand1, operand2` - Compare two operands, setting flags for conditional jumps.
*   `LOAD register, memory_address` - Load data from memory into a register.
*   `STORE memory_address, register` - Store data from a register into memory.
*   `INT interrupt_number`   - Trigger an interrupt (often used for system calls like printing).

### 2.5. Register Allocation

**Register allocation** is the process of assigning program variables and intermediate values to the limited number of CPU registers. This is a critical optimization as register access is much faster than memory access.

*   **Spilling:** If there are more variables than registers, some variables must be temporarily stored in memory (spilled).
*   **Live Range:** The portion of the program during which a variable's value might be used.

For simpler backend implementations, we might use a fixed set of registers for temporary variables or use a simple "stack-based" approach for variables.

## 3. Generating Assembly from TAC

The core task of the backend is to translate each TAC instruction into one or more assembly instructions. This involves:

1.  **Instruction Selection:** Mapping the TAC operator to an assembly mnemonic.
2.  **Operand Mapping:** Determining where the operands (variables, temporaries, constants) will reside (registers or memory).
3.  **Managing State:** Keeping track of which variables are currently in which registers.

### 3.1. Handling Different TAC Instruction Types

Let's consider how to generate assembly for common TAC instructions. We'll assume we have a set of general-purpose registers (e.g., `R1`, `R2`, `R3`, etc.) available.

#### 3.1.1. Assignment and Arithmetic Operations (`result = operand1 op operand2`)

*   **Example TAC:** `t1 = a + b`
*   **Approach:**
    *   Ensure `a` and `b` are in registers. If not, load them from memory.
    *   Perform the addition using the `ADD` instruction.
    *   Store the result in a register for `t1`.

*   **Assembly Generation (Conceptual):**

    ```assembly
    ; Assume 'a' is in R1, 'b' is in R2

    ADD R3, R1, R2  ; R3 = R1 + R2. R3 now holds 't1'
    ; If 't1' needs to be stored persistently, MOV R1, R3; STORE memory_for_t1, R1
    ```

    **More Robust Scenario (considering register allocation):**

    1.  **Find registers for `a` and `b`:** Let's say `a` is in `R1` and `b` is in `R2`.
    2.  **Choose a register for `t1`:** Let's say `R3`.
    3.  **Generate the instruction:** `ADD R3, R1, R2`

    **What if `a` or `b` are not in registers?**

    *   **Case 1: `a` is in memory, `b` is in register `R2`.**
        ```assembly
        LOAD R1, address_of_a  ; Load 'a' into R1
        ADD R3, R1, R2        ; R3 = R1 + R2 (t1)
        ```
    *   **Case 2: `a` is in register `R1`, `b` is in memory.**
        ```assembly
        LOAD R2, address_of_b  ; Load 'b' into R2
        ADD R3, R1, R2        ; R3 = R1 + R2 (t1)
        ```
    *   **Case 3: Both `a` and `b` are in memory.**
        ```assembly
        LOAD R1, address_of_a  ; Load 'a' into R1
        LOAD R2, address_of_b  ; Load 'b' into R2
        ADD R3, R1, R2        ; R3 = R1 + R2 (t1)
        ```

    **Simplification:** We can often use the `MOV` instruction to facilitate operations if one operand is immediate or if the target can be one of the source operands.

    *   **Example TAC:** `x = y + 5`
    *   **Assembly (assuming y in R1, x will be in R1):**
        ```assembly
        ADD R1, R1, #5  ; R1 = R1 + 5 (x = y + 5)
        ```

#### 3.1.2. Copy Operations (`result = operand1`)

*   **Example TAC:** `t2 = t1`
*   **Approach:** Move the value of `t1` to the register allocated for `t2`.

*   **Assembly Generation:**

    ```assembly
    ; Assume 't1' is in R1 and 't2' needs to be in R3
    MOV R3, R1  ; R3 = R1 (t2 = t1)
    ```

#### 3.1.3. Jump Operations (`goto label`, `if condition goto label`)

*   **Example TAC:** `goto L1`
*   **Assembly Generation:**

    ```assembly
    JMP L1
    ```

*   **Example TAC:** `if t1 > 0 goto L1`
*   **Approach:**
    *   Ensure `t1` is in a register.
    *   Perform a comparison (implicitly or explicitly).
    *   Use a conditional jump instruction.

*   **Assembly Generation (Conceptual):**

    ```assembly
    ; Assume 't1' is in R1
    CMP R1, #0      ; Compare R1 with 0. Sets flags.
    JG L1           ; Jump if Greater than 0 to L1
    ```

    **Important:** The `CMP` instruction is crucial for setting processor flags that conditional jump instructions rely on. The comparison can be between two registers, a register and an immediate value, or implied by an arithmetic operation.

#### 3.1.4. Procedure Calls and Returns

*   **Example TAC:** `call print, x`
*   **Approach:**
    *   Pass arguments (push onto stack or use designated registers).
    *   Execute the `CALL` instruction.
    *   Handle return values.

*   **Assembly Generation (Simplified):**

    ```assembly
    ; Assume 'x' is in R1
    PUSH R1         ; Push argument 'x' onto the stack
    CALL print      ; Call the 'print' procedure
    POP R1          ; Clean up stack (optional depending on calling convention)
    ; Result might be in a specific register (e.g., R0)
    ```

*   **Example TAC:** `return y`
*   **Assembly Generation (Simplified):**

    ```assembly
    ; Assume 'y' is in R1
    MOV R0, R1      ; Place return value in R0 (common convention)
    RET             ; Return from procedure
    ```

### 3.2. Register Allocation Strategies (Brief Overview)

*   **Naive Approach (No Optimization):** Load every variable from memory for each use, store it back after modification. This is very inefficient.
*   **Stack-Based Allocation:** Treat registers as a temporary stack. When a new temporary is needed, push it. When it's no longer needed, pop it. This is better but still can be suboptimal.
*   **Graph Coloring:** A more advanced technique that models register allocation as a graph coloring problem. Variables are nodes, and an edge exists between two variables if they are live at the same time. Registers are colors.

For this lab, a simpler approach is often sufficient:

*   Maintain a mapping of TAC temporaries to available registers.
*   When a temporary is needed:
    *   If it's already in a register, use that register.
    *   If not, find a free register and load the value from memory.
    *   If no free registers are available, choose a register to "spill" (store its current value back to memory) to make space.

### 3.3. Handling Labels and Control Flow

*   **Labels:** Each label in TAC should correspond to a label in assembly code.
*   **Jumps:** Unconditional and conditional jumps in TAC directly translate to their assembly counterparts.
*   **Basic Blocks:** A sequence of TAC instructions with a single entry point and a single exit point. Optimizations and code generation are often performed on basic blocks.

## 4. Example Walkthrough

Let's consider a simple TAC sequence and generate assembly.

**Target Assembly:** Hypothetical `ASM`

**TAC:**

```
1: t1 = a + b
2: t2 = t1 * c
3: if t2 > 10 goto L1
4: t3 = t2 - 5
5: goto L2
L1: t4 = t2 / 2
L2: ; ... next instructions ...
```

Assume:
*   `a`, `b`, `c` are global variables in memory.
*   We have registers `R1`, `R2`, `R3`, `R4`, `R5`, `R6`.
*   We'll allocate registers for temporaries `t1`, `t2`, `t3`, `t4`.

**Assembly Generation Process:**

1.  **`1: t1 = a + b`**
    *   Need registers for `a`, `b`, and `t1`. Let's use `R1` for `a`, `R2` for `b`, and `R3` for `t1`.
    *   `LOAD R1, address_of_a`
    *   `LOAD R2, address_of_b`
    *   `ADD R3, R1, R2`

2.  **`2: t2 = t1 * c`**
    *   Need register for `c` and `t2`. `t1` is already in `R3`. Let's use `R4` for `c` and `R5` for `t2`.
    *   `LOAD R4, address_of_c`
    *   `MUL R5, R3, R4`  (Assuming `MUL` is our multiplication instruction)

3.  **`3: if t2 > 10 goto L1`**
    *   `t2` is in `R5`. We need to compare `R5` with `10`.
    *   `CMP R5, #10`
    *   `JG L1`

4.  **`4: t3 = t2 - 5`**
    *   This instruction is executed only if the previous condition was false.
    *   `t2` is in `R5`. Need register for `t3`. Let's use `R6` for `t3`.
    *   `SUB R6, R5, #5`

5.  **`5: goto L2`**
    *   Unconditional jump.
    *   `JMP L2`

6.  **`L1: t4 = t2 / 2`**
    *   `t2` is in `R5`. Need register for `t4`. We can reuse a register if `t3` or `t4` are no longer needed. For simplicity, let's use `R6` again (assuming `t3` is no longer live after the `JMP`).
    *   `DIV R6, R5, #2` (Assuming `DIV` is our division instruction)

7.  **`L2:`**
    *   This is just a label.

**Generated Assembly:**

```assembly
; Assume data segment with variables a, b, c

SECTION .text
GLOBAL main

main:
    ; ... other setup code ...

    ; 1: t1 = a + b
    LOAD R1, [a]      ; Load 'a' into R1
    LOAD R2, [b]      ; Load 'b' into R2
    ADD R3, R1, R2    ; R3 = R1 + R2 (t1)

    ; 2: t2 = t1 * c
    LOAD R4, [c]      ; Load 'c' into R4
    MUL R5, R3, R4    ; R5 = R3 * R4 (t2)

    ; 3: if t2 > 10 goto L1
    CMP R5, #10       ; Compare R5 with 10
    JG L1             ; Jump if greater to L1

    ; 4: t3 = t2 - 5
    SUB R6, R5, #5    ; R6 = R5 - 5 (t3)

    ; 5: goto L2
    JMP L2

L1:
    ; 6: t4 = t2 / 2
    DIV R6, R5, #2    ; R6 = R5 / 2 (t4)

L2:
    ; ... code execution continues here ...
    ; For a complete program, you'd likely have a function epilogue and return
    MOV R0, #0        ; Return 0 for successful execution (convention)
    RET
```

**Note:** `[a]`, `[b]`, `[c]` represent memory addresses. The specific syntax depends on the assembler. `"#10"` or `"#5"` represent immediate values.

## 5. Practice Questions & Exercises

**Question 1:**
Given the TAC instruction `t5 = t3 - t4`, where `t3` is in register `R7` and `t4` is in register `R8`, and you want to store the result `t5` in register `R9`, write the corresponding assembly instruction.

**Answer 1:**
`SUB R9, R7, R8`

**Question 2:**
Given the TAC instruction `if t6 < 0 goto L3`, where `t6` is in register `R5`, write the corresponding assembly instructions. Assume your target assembly uses `CMP` for comparison and `JL` for "Jump if Less than".

**Answer 2:**
```assembly
CMP R5, #0
JL L3
```

**Question 3:**
Consider the following TAC:
```
1: x = y + z
2: w = x - 10
3: goto END
4: label START
5: a = b * c
L1:
END:
```
If `y` is in `R1`, `z` in `R2`, and `x` is to be stored in `R3`, `w` in `R4`, `b` in `R5`, `c` in `R6`, and `a` in `R7`. Generate the assembly code for instructions 1, 2, and 5.

**Answer 3:**
```assembly
; Instruction 1: x = y + z
ADD R3, R1, R2    ; R3 = R1 + R2 (x)

; Instruction 2: w = x - 10
SUB R4, R3, #10   ; R4 = R3 - 10 (w)

; Instruction 5: goto END
JMP END
```

**Exercise:**
Take a simple program (e.g., calculating factorial iteratively or a simple loop) and:
1.  Manually generate its Three-Address Code.
2.  Translate that TAC into assembly language for a hypothetical or chosen simple assembly language.
3.  If possible, assemble and run the generated code using an appropriate assembler and simulator.

## 6. Important Points to Remember

*   **The backend is the bridge between intermediate code and machine code.**
*   **TAC provides a structured format for generating code.**
*   **Each TAC operation needs to be mapped to one or more assembly instructions.**
*   **Register allocation is crucial for performance.** Understand the trade-offs between registers and memory.
*   **Conditional jumps rely on comparison instructions that set processor flags.**
*   **Labels in TAC translate directly to labels in assembly.**
*   **The specific assembly instructions and syntax depend heavily on the target architecture.**

This module forms the foundation for understanding how high-level programming languages are ultimately executed by a computer. Mastering this translation process is key to understanding compiler design and low-level system operations.
