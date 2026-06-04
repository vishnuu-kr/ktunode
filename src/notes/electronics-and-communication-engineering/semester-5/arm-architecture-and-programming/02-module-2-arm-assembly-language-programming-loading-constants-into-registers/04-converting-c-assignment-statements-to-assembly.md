---
title: "converting C assignment statements to assembly"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaec"
status: "completed"
scrapedAt: "2026-05-23T17:53:23.030Z"
---
# ARM Architecture and Programming - Module 2: ARM Assembly Language Programming

## Topic: Converting C Assignment Statements to Assembly

This topic focuses on translating simple C assignment statements into their equivalent ARM assembly language instructions. This is crucial for understanding how high-level language constructs are realized at the hardware level and for effective embedded systems programming where direct hardware manipulation is often required.

---

### Learning Outcomes:

*   **Understand the mapping of C variables to ARM registers and memory.**
*   **Translate basic arithmetic and logical C assignment statements into ARM assembly.**
*   **Recognize the impact of data types and sizes on assembly code generation.**
*   **Appreciate the role of compiler optimizations in generating assembly code.**

---

### Key Concepts and Definitions:

*   **Registers:** Small, fast memory locations within the CPU used to hold data and instructions. ARM processors have a set of general-purpose registers (R0-R15).
    *   **R0-R12:** General-purpose registers.
    *   **R13 (SP):** Stack Pointer.
    *   **R14 (LR):** Link Register.
    *   **R15 (PC):** Program Counter.
*   **Memory:** Larger, slower storage area for variables and data. In embedded systems, this often refers to RAM or Flash memory.
*   **Assembly Language:** A low-level programming language that uses mnemonics to represent machine code instructions.
*   **C Assignment Statement:** A statement in C that assigns a value to a variable. Example: `variable = expression;`
*   **Data Types:** Define the type and size of data a variable can hold (e.g., `int`, `char`, `float`). This influences the assembly instructions used.
*   **Immediate Value:** A constant value directly embedded within an instruction.
*   **Register Indirect Addressing:** Accessing memory using the address stored in a register.

---

### 1. C Variables and Their Representation in Assembly

In assembly language, C variables are typically mapped to:

*   **Registers:** For frequently accessed or temporary values. This is the fastest way to access data.
*   **Memory Locations:** For variables that are too numerous to fit in registers, or for data that needs to persist across function calls (e.g., global variables, local variables on the stack).

**Mapping:**

*   **Local Variables:** Declared within functions. Typically allocated on the stack frame of the function. Their addresses are usually determined relative to the Stack Pointer (SP) or Frame Pointer (FP).
*   **Global Variables:** Declared outside of any function. Allocated in a dedicated data section of memory. Their addresses are typically fixed or determined at link time.

---

### 2. Translating Basic Arithmetic and Logical C Assignment Statements

The process involves identifying the operands (variables and constants) and the operation, then selecting the appropriate ARM assembly instructions.

#### 2.1 Assignment with Immediate Values

**C Statement:**
```c
int a = 10;
```

**Assembly Translation (assuming `a` is mapped to register `R0`):**

*   **Concept:** Load an immediate value into a register.
*   **ARM Instruction:** `MOV` (Move)
    *   `MOV Rd, Operand2`
    *   `Rd`: Destination register.
    *   `Operand2`: Can be a register, an immediate value, or a shifted register.

```assembly
    MOV R0, #10   @ Load the immediate value 10 into register R0
```

**Explanation:**
The `MOV` instruction is used to copy the immediate value `10` into register `R0`. The `#` symbol indicates that `10` is an immediate value.

**From Textbooks:**
*   **Lewis (2e, 2015), Chapter 5: "Introduction to Assembly Language":** Discusses the `MOV` instruction for loading immediate values into registers.
*   **Yiu (3e, 2014), Chapter 4: "ARM Instruction Set":** Covers the `MOV` instruction and its various forms, including immediate operands.

#### 2.2 Assignment with Register Values

**C Statement:**
```c
int b = a;
```

**Assembly Translation (assuming `a` is in `R0` and `b` is to be stored in `R1`):**

*   **Concept:** Copy the value from one register to another.
*   **ARM Instruction:** `MOV`

```assembly
    MOV R1, R0   @ Copy the value from R0 to R1
```

**Explanation:**
The `MOV` instruction copies the content of `R0` into `R1`.

#### 2.3 Arithmetic Assignment Statements

**C Statement:**
```c
int x = 5;
int y = 3;
int sum = x + y;
```

**Assembly Translation (assuming `x` in `R0`, `y` in `R1`, `sum` in `R2`):**

*   **Concept:** Perform addition between two registers.
*   **ARM Instruction:** `ADD`
    *   `ADD Rd, Rn, Operand2`
    *   `Rd`: Destination register.
    *   `Rn`: First source register.
    *   `Operand2`: Second operand (register, immediate, or shifted register).

```assembly
    MOV R0, #5      @ int x = 5;
    MOV R1, #3      @ int y = 3;
    ADD R2, R0, R1  @ int sum = x + y; (sum = R0 + R1)
```

**Explanation:**
First, `x` and `y` are loaded into `R0` and `R1`. Then, the `ADD` instruction adds the contents of `R0` and `R1` and stores the result in `R2`.

**Other Arithmetic Operations:**

*   **Subtraction:** `SUB Rd, Rn, Operand2`
    ```c
    int diff = x - y;  @ SUB R3, R0, R1
    ```
*   **Multiplication:** `MUL Rd, Rn, Rm` (32-bit result)
    ```c
    int prod = x * y;  @ MUL R4, R0, R1
    ```
    *(Note: For larger multiplications, `SMULL` and `UMULL` are used for signed and unsigned 64-bit results respectively.)*
*   **Division:** `SDIV Rd, Rn, Rm` (Signed division) or `UDIV Rd, Rn, Rm` (Unsigned division)
    ```c
    int div = x / y;   @ UDIV R5, R0, R1 (assuming x, y are unsigned)
    ```

**From Textbooks:**
*   **Lewis (2e, 2015), Chapter 5:** Details arithmetic instructions like `ADD`, `SUB`, `MUL`.
*   **Yiu (3e, 2014), Chapter 4:** Provides an exhaustive list of arithmetic instructions and their operand forms.

#### 2.4 Logical Assignment Statements

**C Statement:**
```c
unsigned int val1 = 0x55; // Binary 01010101
unsigned int val2 = 0xAA; // Binary 10101010
unsigned int result_and = val1 & val2;
unsigned int result_or = val1 | val2;
unsigned int result_xor = val1 ^ val2;
```

**Assembly Translation (assuming `val1` in `R0`, `val2` in `R1`, results in `R2`, `R3`, `R4`):**

*   **Concept:** Perform bitwise logical operations.
*   **ARM Instructions:** `AND`, `ORR`, `EOR` (Exclusive OR)

```assembly
    MOV R0, #0x55   @ unsigned int val1 = 0x55;
    MOV R1, #0xAA   @ unsigned int val2 = 0xAA;

    AND R2, R0, R1  @ unsigned int result_and = val1 & val2;
    ORR R3, R0, R1  @ unsigned int result_or = val1 | val2;
    EOR R4, R0, R1  @ unsigned int result_xor = val1 ^ val2;
```

**Explanation:**
*   `AND R2, R0, R1`: Performs a bitwise AND between `R0` and `R1`, storing the result in `R2`.
*   `ORR R3, R0, R1`: Performs a bitwise OR between `R0` and `R1`, storing the result in `R3`.
*   `EOR R4, R0, R1`: Performs a bitwise XOR between `R0` and `R1`, storing the result in `R4`.

**Bitwise NOT:**
The `MVN` (Move Not) instruction can be used for bitwise NOT if the operand is an immediate value. For register operands, it's often achieved by XORing with all ones.

**C Statement:**
```c
unsigned int complement_val1 = ~val1;
```

**Assembly Translation:**

```assembly
    MVN R5, R0     @ unsigned int complement_val1 = ~val1; (if R0 is 32-bit)
    @ OR
    MOV R6, #0xFFFFFFFF @ Load all ones
    EOR R7, R0, R6  @ unsigned int complement_val1 = ~val1; (alternative using EOR)
```

**From Textbooks:**
*   **Lewis (2e, 2015), Chapter 5:** Covers logical instructions like `AND`, `ORR`, `EOR`, `MVN`.
*   **Yiu (3e, 2014), Chapter 4:** Provides detailed explanations of all bitwise logical operations.

#### 2.5 Assignment with Shift Operations

**C Statement:**
```c
int data = 5;
int shifted_left = data << 2;  // Equivalent to data * 4
int shifted_right = data >> 1; // Equivalent to data / 2 (integer division)
```

**Assembly Translation (assuming `data` in `R0`, results in `R1`, `R2`):**

*   **Concept:** Perform left or right shifts on a register's value.
*   **ARM Instructions:** `LSL` (Logical Shift Left), `LSR` (Logical Shift Right), `ASR` (Arithmetic Shift Right)
    *   `LSL Rd, Rn, Imm`
    *   `LSR Rd, Rn, Imm`
    *   `ASR Rd, Rn, Imm`
    *   `Operand2` in `MOV` and `ADD` can also be a shifted register.

```assembly
    MOV R0, #5      @ int data = 5;

    LSL R1, R0, #2  @ int shifted_left = data << 2; (R1 = R0 << 2)
    LSR R2, R0, #1  @ int shifted_right = data >> 1; (R2 = R0 >> 1, logical shift)
```

**Explanation:**
*   `LSL R1, R0, #2`: Shifts the value in `R0` left by 2 bits and stores the result in `R1`.
*   `LSR R2, R0, #1`: Shifts the value in `R0` right by 1 bit logically (fills with 0s) and stores the result in `R2`.

**Arithmetic vs. Logical Shift Right:**
*   `LSR` (Logical Shift Right): Fills the most significant bits with zeros. Suitable for unsigned integers.
*   `ASR` (Arithmetic Shift Right): Fills the most significant bits with the sign bit of the original number. Suitable for signed integers to preserve the sign.

**C Statement (for signed right shift):**
```c
signed int signed_data = -8;
signed int arith_shifted_right = signed_data >> 1;
```

**Assembly Translation:**

```assembly
    MOV R0, #-8     @ signed int signed_data = -8;

    ASR R1, R0, #1  @ signed int arith_shifted_right = signed_data >> 1; (R1 = R0 ASR 1)
```

**From Textbooks:**
*   **Lewis (2e, 2015), Chapter 5:** Explains shift instructions.
*   **Yiu (3e, 2014), Chapter 4:** Provides comprehensive details on `LSL`, `LSR`, and `ASR`, including their use as shift operands.

---

### 3. Impact of Data Types and Sizes

The data type of a C variable significantly influences the generated assembly code.

*   **`char` (typically 8 bits):**
    *   If loaded into a register, the upper bits of the register will be zero-extended (for unsigned) or sign-extended (for signed) by the load instruction.
    *   Arithmetic and logical operations might need to operate on the full register width, and the result might then be truncated or re-extended if stored back to a smaller type.
*   **`int` (typically 32 bits on ARM Cortex-M):**
    *   Operates on the full width of a register.
    *   Instructions like `ADD`, `SUB`, `AND` naturally work with 32-bit values.
*   **`long` and `long long` (64 bits):**
    *   Require multiple registers (e.g., R0 and R1 for a 64-bit value).
    *   Special instructions like `ADD RdLo, RnLo, RmLo, setflags` and `ADC RdHi, RnHi, RmHi` (Add with Carry) are used for multi-word arithmetic.
    *   `UMULL` and `SMULL` for multiplication.
    *   `UDIV` and `SDIV` for division (operate on 32-bit operands to produce a 32-bit quotient). 64-bit division is more complex and may involve sequences of instructions.
*   **`float` and `double`:**
    *   Require floating-point unit (FPU) instructions if available (e.g., on Cortex-M4F and later).
    *   `VMOV`, `VADD`, `VSUB`, etc., instructions are used, operating on floating-point registers (e.g., S0-S31 for single-precision, D0-D31 for double-precision).

**Example: `char` to `int` assignment**

**C Statement:**
```c
char c_val = 'A'; // ASCII value 65 (0x41)
int i_val = c_val;
```

**Assembly Translation (assuming `c_val` is stored at memory address `MEM_C_VAL`, `c_val` is loaded into `R0`, `i_val` is stored in `R1`):**

*   **Concept:** Load a byte from memory and extend it to 32 bits.
*   **ARM Instructions:** `LDRB` (Load Register Byte), `UXTH` (Unsigned Extend Halfword) or `SXTH` (Signed Extend Halfword), or simply `MOV` if the load instruction handles extension.

```assembly
    LDRB R0, [R_C_VAL]    @ Load the byte from memory address R_C_VAL into R0
    UXTH R1, R0           @ unsigned int i_val = c_val; (Zero-extend R0 to 32 bits in R1)
    @ Or if assuming signed extension is desired (though char is typically unsigned in this context):
    @ SXTH R1, R0         @ Signed extend R0 to 32 bits in R1
```

**Explanation:**
*   `LDRB R0, [R_C_VAL]` loads the single byte from the memory location pointed to by `R_C_VAL` into the lower 8 bits of `R0`. The upper 24 bits of `R0` are zeroed.
*   `UXTH R1, R0` takes the 16-bit value in `R0` (which is the 8-bit character followed by zeros) and zero-extends it to 32 bits, storing the result in `R1`. If the character was treated as signed and needed sign extension, `SXTH` would be used.

**From Textbooks:**
*   **Lewis (2e, 2015), Chapter 5:** Discusses different load instructions (`LDR`, `LDRB`, `LDRH`) and how they affect register contents.
*   **Zhu (3e, 2018), Chapter 5: "Data Transfer Instructions":** Details byte, halfword, and word transfers, and the implications of sign extension.

---

### 4. Role of Compiler Optimizations

Compilers perform various optimizations to generate efficient assembly code. When converting C to assembly manually, it's important to understand these optimizations:

*   **Register Allocation:** The compiler tries to keep frequently used variables in registers to minimize memory access.
*   **Common Subexpression Elimination:** If the same expression is calculated multiple times, the compiler calculates it once and reuses the result.
*   **Dead Code Elimination:** Code that has no effect on the program's output is removed.
*   **Loop Optimizations:** Techniques like loop unrolling and strength reduction (replacing multiplication with shifts) can be applied.
*   **Instruction Scheduling:** Reordering instructions to improve pipeline utilization.

**Example: Compiler optimization**

**C Statement:**
```c
int x = 5;
int y = x + 2;
int z = x * 3;
```

**Potential compiler-generated assembly (optimized):**
If `x` is assigned to `R0`, the compiler might generate:

```assembly
    MOV R0, #5      @ int x = 5;
    ADD R1, R0, #2  @ int y = x + 2;
    ADD R2, R0, R0  @ int z = x + x; (Strength reduction: x*3 = x+x+x -> x*3 = x+x+x, can be x+x+x)
    @ or if x*3 is common:
    ADD R2, R0, R0  @ Intermediate for x*2
    ADD R2, R2, R0  @ x*3
```
A more direct translation of `x * 3` could be:
```assembly
    MOV R0, #5      @ int x = 5;
    ADD R1, R0, #2  @ int y = x + 2;
    ADD R2, R0, R0  @ R2 = x + x = 10 (x * 2)
    ADD R2, R2, R0  @ R2 = R2 + x = 10 + 5 = 15 (x * 3)
```
This shows how multiplication might be broken down or optimized.

**From Textbooks:**
*   **Lewis (2e, 2015), Chapter 5:** Briefly mentions how compilers translate C to assembly and the role of optimization.
*   **Yiu (3e, 2014), Chapter 11: "Compiler Considerations":** Discusses compiler optimizations in more detail, including register allocation, instruction selection, and peephole optimization.
*   **Zhu (3e, 2018), Chapter 9: "Embedded Software Development":** Touches upon compiler usage and optimization levels.

---

### Practice Questions and Exercises:

1.  **Convert the following C assignment statement to ARM assembly. Assume `count` is mapped to `R4`.**
    ```c
    unsigned int count;
    count = 100;
    ```
    *   **Answer:**
        ```assembly
        MOV R4, #100    @ Load the immediate value 100 into R4
        ```

2.  **Translate the following C code snippet into ARM assembly. Assume `a` is in `R0`, `b` is in `R1`, and the result `c` is to be stored in `R2`.**
    ```c
    int a, b, c;
    c = a - b;
    ```
    *   **Answer:**
        ```assembly
        SUB R2, R0, R1  @ c = a - b
        ```

3.  **Convert the C statement `result = data1 ^ 0xFF;` to ARM assembly. Assume `data1` is in `R5` and `result` is in `R6`.**
    *   **Answer:**
        ```assembly
        EOR R6, R5, #0xFF @ result = data1 ^ 0xFF
        ```
        *(Note: Alternatively, `MVN` could be used if `data1` was to be bitwise NOT-ed, but XOR with immediate is used here for the specific operation.)*

4.  **Given the C statement `value = value >> 2;`, where `value` is in `R3`, what ARM assembly instruction would be most appropriate if `value` is an unsigned integer?**
    *   **Answer:**
        ```assembly
        LSR R3, R3, #2  @ value = value >> 2 (Logical Shift Right)
        ```
        *(If `value` were a signed integer, `ASR R3, R3, #2` would be more appropriate.)*

5.  **Explain the difference between `LSR` and `ASR` in ARM assembly and when you would use each.**
    *   **Answer:**
        *   `LSR` (Logical Shift Right) shifts bits to the right and fills the most significant bits with zeros. It is used for unsigned integers.
        *   `ASR` (Arithmetic Shift Right) shifts bits to the right and fills the most significant bits with the sign bit of the original number. It is used for signed integers to preserve the sign during right shifts.

6.  **Convert the following C code to ARM assembly. Assume `x` is in `R0`, `y` is in `R1`, and the result `product` is in `R2`.**
    ```c
    int x = 7;
    int y = 4;
    int product = x * y;
    ```
    *   **Answer:**
        ```assembly
        MOV R0, #7      @ int x = 7;
        MOV R1, #4      @ int y = 4;
        MUL R2, R0, R1  @ int product = x * y;
        ```

---

### Important Points to Remember:

*   **Register Usage:** Always be mindful of which registers are used for which variables or temporary values.
*   **Immediate Prefixes:** The `#` symbol is crucial for indicating immediate values in instructions like `MOV` and `ADD`.
*   **Data Type Impact:** Consider the data type of C variables (char, int, unsigned int, etc.) as it dictates the specific ARM instructions and operand types to use (e.g., `LDRB`, `UXTH`, `ASR`).
*   **Memory Access:** Understand how to load data from memory (`LDR`, `LDRB`, `LDRH`) and store data to memory (`STR`, `STRB`, `STRH`).
*   **Instruction Set:** Familiarize yourself with the ARM instruction set, especially those for data transfer (`MOV`, `LDR`, `STR`), arithmetic (`ADD`, `SUB`, `MUL`), and logical operations (`AND`, `ORR`, `EOR`, `MVN`).
*   **Compiler Role:** Recognize that compilers perform significant optimizations, and hand-written assembly might differ from compiler output. Understanding these optimizations can help you write more efficient code.

---

### Alignment with Course Outcomes:

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
    *   This topic directly relates to understanding how fundamental C constructs (assignments, arithmetic, logical operations) are implemented, a core aspect of embedded software development.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
    *   By converting C to assembly, students gain insight into how the processor's registers and instruction set are used to execute high-level code, providing a programmer's view of the architecture.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
    *   Understanding the assembly translation process helps developers appreciate the overhead and efficiency of C code and identify situations where direct assembly might be necessary for performance-critical sections or hardware interaction.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
