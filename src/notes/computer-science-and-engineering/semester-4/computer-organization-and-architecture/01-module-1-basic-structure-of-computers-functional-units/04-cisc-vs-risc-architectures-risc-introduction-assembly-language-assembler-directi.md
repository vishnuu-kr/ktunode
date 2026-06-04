---
title: "CISC vs RISC architectures:- RISC Introduction - Assembly Language, Assembler directives, Assembling."
subject: "COMPUTER ORGANIZATION AND ARCHITECTURE"
module: "Module 1: Basic Structure of computers :– Functional units "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b03a"
status: "completed"
scrapedAt: "2026-05-20T16:11:09.213Z"
---
# COMPUTER ORGANIZATION AND ARCHITECTURE: Module 1 - CISC vs RISC Architectures & Assembly Language

## 1. Introduction: CISC vs. RISC

This section compares and contrasts Complex Instruction Set Computing (CISC) and Reduced Instruction Set Computing (RISC) architectures, focusing on the key differences and advantages/disadvantages of each. We'll then dive into RISC architecture specifically, covering assembly language, assembler directives, and the assembling process.

**Learning Outcome:** Understand the fundamental differences between CISC and RISC architectures and appreciate the advantages of RISC in specific contexts.

**Key Concepts and Definitions:**

*   **Instruction Set Architecture (ISA):** Defines the instructions that a processor can execute.  It's the interface between hardware and software.
*   **CISC (Complex Instruction Set Computing):** Architecture characterized by a large and complex instruction set, where single instructions can perform multiple low-level operations (e.g., memory access, arithmetic operation, and condition code setting).
*   **RISC (Reduced Instruction Set Computing):** Architecture characterized by a smaller, simpler instruction set, emphasizing instructions that can be executed quickly. It relies more on software for complex operations.
*   **Clock Cycle:** The time required for one basic operation of the processor.
*   **CPI (Cycles Per Instruction):** The average number of clock cycles required to execute one instruction.  Lower CPI generally indicates higher performance.

**CISC Architecture:**

*   **Characteristics:**
    *   Large number of instructions (hundreds).
    *   Variable instruction lengths (different number of bytes per instruction).
    *   Complex addressing modes (e.g., direct, indirect, indexed, based).
    *   Instructions can perform multiple operations.
    *   Emphasis on hardware complexity.
    *   Code size is typically smaller due to complex instructions.
*   **Advantages:**
    *   Code size can be smaller, potentially saving memory space.  This was important in early computing when memory was expensive.
    *   Simplified compiler design (in theory, a single instruction could map directly to a high-level language statement).
*   **Disadvantages:**
    *   More complex hardware design, leading to higher cost and power consumption.
    *   Lower performance due to variable instruction lengths and complex operations. Instructions take variable time to execute.
    *   Higher CPI (Cycles Per Instruction).  Many instructions are rarely used.
    *   Difficult to optimize instruction pipelines.
*   **Examples:** Intel x86 architecture, Motorola 68000 series.

**RISC Architecture:**

*   **Characteristics:**
    *   Small number of instructions (typically less than 200).
    *   Fixed instruction lengths (e.g., all instructions are 4 bytes).
    *   Simple addressing modes (e.g., load/store architecture).
    *   Instructions perform simple operations.
    *   Emphasis on software complexity. Compilers are responsible for translating complex operations into sequences of simple RISC instructions.
    *   Load/Store Architecture:  Only load and store instructions can access memory.  Arithmetic and logical operations are performed on registers.
*   **Advantages:**
    *   Simpler hardware design, leading to lower cost and power consumption.
    *   Higher performance due to fixed instruction lengths and simpler operations.
    *   Lower CPI (Cycles Per Instruction).  Instructions execute in one or a few clock cycles.
    *   Easy to optimize instruction pipelines, leading to faster execution.
    *   Enables efficient use of compilers.
*   **Disadvantages:**
    *   Code size can be larger, potentially requiring more memory space.
    *   More complex compiler design. Compilers need to translate complex high-level language statements into sequences of simpler RISC instructions.
*   **Examples:** ARM architecture, MIPS architecture, PowerPC architecture.

**Comparison Table:**

| Feature             | CISC                               | RISC                                  |
| ------------------- | ----------------------------------- | ------------------------------------- |
| Instruction Set Size | Large                                | Small                                 |
| Instruction Length  | Variable                             | Fixed                                 |
| Addressing Modes    | Complex                              | Simple                                |
| CPI                 | High                                 | Low                                  |
| Hardware Complexity | High                                 | Low                                  |
| Code Size           | Small                                | Large                                 |
| Compiler Complexity | Low (theoretically, not always true)| High                                 |
| Power Consumption   | High                                 | Low                                  |

**Practice Question:**

1.  Which architecture typically has a lower CPI, CISC or RISC? Explain why.

**Answer:** RISC typically has a lower CPI because instructions are simpler and execute in fewer clock cycles.  The fixed instruction length and simpler addressing modes also contribute to a lower CPI.

2. What is the primary reason for using a load/store architecture in RISC?

**Answer:**  To simplify instruction execution.  By restricting memory access to only load and store instructions, the processor can perform arithmetic and logical operations directly on data in registers, which is significantly faster than constantly accessing memory.

**Important Points to Remember:**

*   The choice between CISC and RISC depends on the specific application and design constraints.
*   RISC architectures dominate modern processors, especially in mobile devices and embedded systems due to their power efficiency and performance.
*   Modern x86 processors (CISC) incorporate RISC-like features internally to improve performance, blurring the lines between the two architectures.

## 2. RISC Introduction - Deep Dive

**Learning Outcome:** Understand the core principles behind RISC architecture and its key characteristics.

**Key Concepts and Definitions:**

*   **Load/Store Architecture:** As previously mentioned, this is a fundamental characteristic of RISC. Only load and store instructions are allowed to access memory.
*   **Register File:** A large set of registers used to hold data and addresses.  RISC architectures typically have a larger register file than CISC architectures.
*   **Pipelining:** A technique that allows multiple instructions to be in different stages of execution simultaneously, improving performance.  RISC's fixed instruction length and simpler instructions make pipelining easier.
*   **Delayed Branching:** An optimization technique used to improve pipeline performance in RISC. The instruction immediately following a branch instruction is always executed, regardless of whether the branch is taken.

**Detailed RISC Characteristics:**

*   **Simplified Instruction Set:** Instructions are designed to be simple and execute in a single clock cycle (ideally).
*   **Load/Store Architecture:** Only load and store instructions access memory. All other operations are performed on registers.
*   **Fixed Instruction Length:** Simplifies instruction fetch and decode.
*   **Large Register File:** Reduces the need to access memory frequently.
*   **Hardwired Control:** Control logic is implemented using hardwired circuits, which are faster than microprogrammed control (often used in CISC).
*   **Emphasis on Compiler Technology:** RISC relies heavily on compilers to optimize code and translate high-level language statements into efficient sequences of RISC instructions.
*   **Pipelined Execution:**  Enables parallel execution of instruction stages.

**Why RISC Works Well:**

*   **Faster Execution:** Simpler instructions and fixed instruction lengths lead to faster execution.
*   **Improved Pipelining:** Easier to implement and optimize pipelines, allowing for higher throughput.
*   **Lower Power Consumption:** Simpler hardware design and lower clock speeds result in lower power consumption.
*   **Efficient Compiler Optimization:** Compiler can perform aggressive optimizations to generate efficient code.

**Example:**

Consider a simple addition operation.

*   **CISC (Example):**  `ADD R1, address` (Add the value at 'address' to register R1) - This instruction directly accesses memory.
*   **RISC (Example):**
    1.  `LOAD R2, address` (Load the value at 'address' into register R2)
    2.  `ADD R1, R1, R2` (Add the value in register R2 to register R1) - This uses registers.

While the RISC example requires two instructions, each instruction is simpler and can be executed faster. The overall effect is often better performance due to pipelining and optimized hardware.

**Practice Question:**

1.  Explain the concept of "Load/Store Architecture" and why it's important in RISC.

**Answer:** Load/Store architecture dictates that only load and store instructions can access main memory. All other instructions operate on data stored in registers. This is crucial for RISC because it simplifies instruction execution, allowing for faster processing and efficient pipelining. By minimizing memory access, RISC processors can maintain a high instruction throughput.

2. What is the main benefit of using a fixed instruction length in RISC?

**Answer:** Fixed instruction length simplifies instruction fetch and decode. The processor knows exactly how many bytes to fetch for each instruction, making the instruction pipeline more efficient.

**Important Points to Remember:**

*   RISC relies on a combination of simple hardware and sophisticated compiler techniques to achieve high performance.
*   The load/store architecture is a defining characteristic of RISC.
*   Pipelining is crucial for realizing the performance benefits of RISC.

## 3. Assembly Language, Assembler Directives, Assembling

**Learning Outcome:** Understand the fundamentals of assembly language programming, assembler directives, and the assembling process.

**Key Concepts and Definitions:**

*   **Assembly Language:** A low-level programming language that uses mnemonic codes to represent machine instructions. It provides a more human-readable representation of machine code.
*   **Assembler:** A program that translates assembly language code into machine code.
*   **Assembler Directives (Pseudo-ops):** Instructions to the assembler itself, not actual machine instructions. They control the assembly process, define data, allocate memory, and perform other tasks.
*   **Symbol Table:** A table created by the assembler that stores the addresses of labels (symbols) used in the assembly code.
*   **Opcode:** The part of a machine instruction that specifies the operation to be performed (e.g., ADD, SUB, LOAD).
*   **Operand:** The part of a machine instruction that specifies the data or addresses that the instruction will operate on.

**Assembly Language Fundamentals:**

*   **Structure of an Assembly Language Instruction:**
    ```
    [label:]  mnemonic  [operand1, operand2, ...]  [; comment]
    ```
    *   **label:** A symbolic name for a memory address.  Optional.
    *   **mnemonic:** The symbolic representation of the machine instruction (e.g., `LOAD`, `ADD`, `STORE`).
    *   **operand(s):** The data or addresses the instruction operates on.  The number and type of operands depend on the mnemonic.
    *   **comment:** Explanatory text.  Ignored by the assembler.

*   **Example Assembly Language Instruction (Generic RISC):**
    ```assembly
    loop_start:  LOAD  R1, x   ; Load the value at address 'x' into register R1
                  ADD   R2, R1, 5 ; Add 5 to the value in R1 and store the result in R2
                  STORE R2, y   ; Store the value in R2 at address 'y'
                  BRANCH loop_start ; Jump back to the start of the loop
    ```

**Common Assembler Directives:**

*   **`ORG address` (Origin):** Specifies the starting address for the subsequent code or data.
*   **`EQU symbol, value` (Equate):** Assigns a symbolic name (`symbol`) to a specific value (`value`).
*   **`DB value(s)` (Define Byte):** Defines a sequence of bytes (data).
*   **`DW value(s)` (Define Word):** Defines a sequence of words (e.g., 2 or 4 bytes, depending on the architecture).
*   **`RESB size` (Reserve Byte):** Reserves a block of memory of a specified size (in bytes).  Does not initialize the memory.
*   **`RESW size` (Reserve Word):** Reserves a block of memory of a specified size (in words).
*   **`END`:** Marks the end of the assembly program.

**Example Using Assembler Directives:**

```assembly
ORG 0x1000    ; Start at memory address 0x1000

DATA_ADDR EQU 0x2000 ; Define DATA_ADDR as 0x2000

START:  LOAD R1, DATA_ADDR  ; Load the value at DATA_ADDR into R1
        ADD  R1, R1, 10      ; Add 10 to R1
        STORE R1, RESULT    ; Store the result in RESULT
        HALT                 ; Stop the program

ORG 0x2000    ; Define data starting at 0x2000
DATA:   DW 15             ; Define a word with the value 15

ORG 0x3000    ; Define data starting at 0x3000
RESULT: RESW 1            ; Reserve one word for the result

END         ; End of the program
```

**The Assembling Process:**

The assembler typically performs a two-pass process:

1.  **Pass 1:**
    *   Reads the assembly source code.
    *   Builds the symbol table by assigning addresses to labels.
    *   Calculates the size of the program.
2.  **Pass 2:**
    *   Reads the assembly source code again.
    *   Uses the symbol table to resolve addresses.
    *   Generates the machine code.
    *   Creates an object file containing the machine code and other information (e.g., relocation information).

**Output of the Assembler:**

*   **Object File:** Contains the machine code, symbol table, and relocation information.
*   **Listing File (Optional):** Contains the assembly source code, machine code, and addresses. Useful for debugging.

**Example of Assembler Output (Simplified):**

Assume the instruction `ADD R1, R2, R3` is encoded as `0x0123` and `LOAD R1, address` is encoded as `0x0200 address`. And `address` is at location `0x2000`.

**Assembly Code:**

```assembly
START:  ADD R1, R2, R3
        LOAD R1, DATA
DATA:   DW 5
END
```

**Assembler Output (Object File - simplified):**

```
Address  | Data
-------- | --------
0x1000   | 0x0123  ; Machine code for ADD R1, R2, R3
0x1002   | 0x0200  ; Opcode for LOAD R1, DATA
0x1004   | 0x2000  ; Address of DATA
0x2000   | 0x0005  ; Value of DATA (5)
```

**Practice Question:**

1.  What is the purpose of assembler directives? Give two examples.

**Answer:** Assembler directives are instructions to the assembler program itself, not actual machine instructions that the CPU will execute. They control the assembly process.  Examples include:

    *   `ORG address`: Specifies the starting address for subsequent code or data.
    *   `EQU symbol, value`: Assigns a symbolic name to a specific value.

2.  Explain the two passes performed by a typical assembler and the purpose of each pass.

**Answer:**

    *   **Pass 1:** The assembler scans the assembly source code to build a symbol table. This table maps labels to their corresponding memory addresses. The assembler also calculates the overall size of the program in this phase.
    *   **Pass 2:** The assembler reads the assembly source code again. Using the symbol table created in pass 1, it resolves the addresses of labels and generates the actual machine code. It then outputs the object file.

**Important Points to Remember:**

*   Assembly language provides a low-level interface to the hardware.
*   Assembler directives are essential for controlling the assembly process and defining data.
*   The assembler translates assembly language code into machine code.
* Understanding the assembly process and object file is crucial for linking multiple modules.

This comprehensive guide covers the specified topic with clear explanations, examples, and practice questions to solidify understanding. Remember to consult your textbook and other resources for additional information and practice. Good luck with your studies!
