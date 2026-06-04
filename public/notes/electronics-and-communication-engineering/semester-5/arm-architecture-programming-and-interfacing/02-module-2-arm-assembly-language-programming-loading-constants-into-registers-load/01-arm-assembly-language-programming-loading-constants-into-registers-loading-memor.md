---
title: "Arm assembly language programming: Loading constants into registers, loading memory data into registers, storing data from registers to memory, converting C assignment statements to assembly, memory address calculations, Memory addressing examples: translating C pointer expressions to assembly, translating C subscript expressions to assembly, translating structure references to assembly, Stack instructions, data processing"
subject: "ARM ARCHITECTURE, PROGRAMMING AND INTERFACING"
module: "Module 2: Arm assembly language programming: Loading constants into registers, loading memory data into registers, storing data from registers to memory, converting C assignment statements to assembly, memory address calculations, Memory addressing examples: translating C pointer expressions to assembly, translating C subscript expressions to assembly, translating structure references to assembly, Stack instructions, data processing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec12"
status: "completed"
scrapedAt: "2026-05-23T17:53:53.432Z"
---
# Module 2: ARM Assembly Language Programming

## 1. Introduction to ARM Assembly Language Programming

This module delves into the fundamental concepts of ARM assembly language programming, covering how to manipulate data within registers, interact with memory, and translate high-level C constructs into assembly code. Understanding these building blocks is crucial for efficient embedded system development.

**Course Outcome Alignment:**
*   **CO2 (K2):** Explains the programmer's view of the processor architecture by detailing register usage, memory access, and instruction set operations.
*   **CO3 (K3):** Enables students to choose between assembly and C by demonstrating how C statements translate to assembly, highlighting performance and control aspects.

**Textbook References:**
*   **Lewis (Ch 2):** Provides an overview of the ARM Cortex-M3 processor's architecture, including register set and memory organization, which are foundational for assembly programming.
*   **Zhu (Ch 3):** Introduces the ARM instruction set and basic assembly programming concepts.
*   **Yiu (Ch 3, Ch 4):** Offers a deep dive into the ARM Cortex-M3 and Cortex-M4 processor core, instruction sets, and assembly language programming practices.

---

## 2. Loading Constants into Registers

Registers are the primary workspace for the CPU. Loading constants allows us to initialize variables or set immediate values for operations.

### 2.1. `MOV` Instruction

The `MOV` instruction is the most fundamental way to load an immediate value (a constant) into a register.

**Syntax:**
```assembly
MOV {cond} <Rd>, <Rm>
```
*   `<Rd>`: Destination register.
*   `<Rm>`: Source register or an immediate value (preceded by `#`).

**Examples:**
*   Loading the decimal value 10 into register R0:
    ```assembly
    MOV R0, #10
    ```
*   Loading the hexadecimal value 0x5A into register R1:
    ```assembly
    MOV R1, #0x5A
    ```

**Important Points:**
*   The immediate value must be representable by an 8-bit value rotated by an even number of bits. If the constant doesn't fit these criteria, you might need a sequence of instructions or a different approach (e.g., loading from memory).
*   `MOV` can also be used to copy the content of one register to another.

**Textbook References:**
*   **Zhu (Ch 3.3.1):** Covers the `MOV` instruction and its usage for loading immediate values.
*   **Yiu (Ch 4.2.1):** Details the `MOV` instruction and its operand limitations.

---

## 3. Loading Memory Data into Registers

Most data in embedded systems resides in memory. We need instructions to bring this data into registers for processing.

### 3.1. Load Instructions (`LDR`)

The `LDR` instruction is used to load data from memory into a register. It supports various addressing modes, allowing access to data at different memory locations.

**Syntax:**
```assembly
LDR {cond} <Rd>, [<Rn>{, #offset}]
LDR {cond} <Rd>, [<Rn>, <Rm>]
LDR {cond} <Rd>, <label>
```
*   `<Rd>`: Destination register.
*   `<Rn>`: Register holding the base address.
*   `#offset`: An immediate byte offset.
*   `<Rm>`: A register holding an offset.
*   `<label>`: A symbolic name for a memory address.

**Addressing Modes:**

*   **Register Indirect with Offset:**
    *   **Pre-indexed:** `LDR R0, [R1, #4]` - Loads from address `R1 + 4` into `R0`. The base register `R1` is *not* updated.
    *   **Pre-indexed with Writeback:** `LDR R0, [R1, #4]!` - Loads from address `R1 + 4` into `R0`. The base register `R1` is updated to `R1 + 4`.
    *   **Post-indexed:** `LDR R0, [R1], #4` - Loads from address `R1` into `R0`. Then, `R1` is updated to `R1 + 4`.
    *   **Offset by Register:** `LDR R0, [R1, R2]` - Loads from address `R1 + R2` into `R0`.

*   **PC-Relative Addressing:**
    *   `LDR R0, =myVariable` - Loads the address of `myVariable` into `R0`. This is a pseudo-instruction and the assembler converts it into an `LDR` instruction that loads the address from a literal pool.

**Examples:**
*   Assume `myArray` is at memory address `0x20000000`. Load the byte at `0x20000004` into R0:
    ```assembly
    LDR R0, [R1, #4] ; Assume R1 holds 0x20000000
    ```
*   Load the address of `myVariable` into R3:
    ```assembly
    LDR R3, =myVariable
    ```

**Important Points:**
*   `LDR` typically loads 32-bit words (4 bytes) by default. Use `LDRB` for bytes and `LDRH` for half-words (16 bits).
*   The `!` for writeback is crucial when you want to update the base register after the load.

**Textbook References:**
*   **Lewis (Ch 2.3.1):** Discusses memory organization and the role of load/store instructions.
*   **Zhu (Ch 3.3.2):** Explains the `LDR` instruction and various addressing modes.
*   **Yiu (Ch 4.2.3):** Provides a comprehensive treatment of `LDR` and its addressing capabilities.

---

## 4. Storing Data from Registers to Memory

Just as we load data from memory, we also need to store processed data back into memory.

### 4.1. Store Instructions (`STR`)

The `STR` instruction is used to store data from a register to a memory location. It mirrors the `LDR` instruction in its addressing modes.

**Syntax:**
```assembly
STR {cond} <Rm>, [<Rn>{, #offset}]
STR {cond} <Rm>, [<Rn>, <Rm>]
STR {cond} <Rm>, <label> ; Less common for direct storing, usually with PC-relative address
```
*   `<Rm>`: Source register containing the data to be stored.
*   `<Rn>`: Register holding the base address.
*   `#offset`: An immediate byte offset.
*   `<Rm>`: A register holding an offset.

**Addressing Modes:** Similar to `LDR` (Pre-indexed, Pre-indexed with Writeback, Post-indexed, Offset by Register).

**Examples:**
*   Store the value in R0 to the memory location pointed to by R1 plus an offset of 8 bytes:
    ```assembly
    STR R0, [R1, #8] ; Assume R1 holds the base address
    ```
*   Store the value in R2 to the memory location pointed to by R1, and then increment R1 by 4 bytes:
    ```assembly
    STR R2, [R1], #4
    ```

**Important Points:**
*   `STR` typically stores 32-bit words. Use `STRB` for bytes and `STRH` for half-words.
*   Ensure the memory address is correctly calculated to avoid corrupting other data.

**Textbook References:**
*   **Zhu (Ch 3.3.2):** Covers the `STR` instruction and its relationship with `LDR`.
*   **Yiu (Ch 4.2.3):** Details the `STR` instruction and its various addressing modes.

---

## 5. Converting C Assignment Statements to Assembly

Translating C code to assembly is a core skill for understanding performance and optimizing code.

### 5.1. Basic Assignment

**C Statement:**
```c
variable = constant;
```
**Assembly Translation:**
```assembly
MOV <register_for_variable>, #constant
```

**C Statement:**
```c
variable1 = variable2;
```
**Assembly Translation:**
```assembly
MOV <register_for_variable1>, <register_for_variable2>
```

**C Statement:**
```c
variable = memory_location;
```
**Assembly Translation:**
```assembly
LDR <register_for_variable>, =memory_location ; Load address of memory_location
LDR <register_for_variable>, [<register_holding_address>] ; Load value from memory
```
Or, if the address is already in a register:
```assembly
LDR <register_for_variable>, [R<n>] ; Assuming R<n> holds the address
```

**C Statement:**
```c
memory_location = variable;
```
**Assembly Translation:**
```assembly
STR <register_for_variable>, [R<n>] ; Assuming R<n> holds the address
```

**Example:**
**C Code:**
```c
int a = 10;
int b;
b = a;
int dataArray[5];
dataArray[0] = 25;
```

**Assembly Translation (Conceptual):**
```assembly
; int a = 10;
MOV R0, #10       ; Assume R0 represents 'a'

; int b;
; b = a;
MOV R1, R0        ; Assume R1 represents 'b', copy 'a' to 'b'

; int dataArray[5];
; dataArray[0] = 25;
LDR R2, =dataArray  ; Load the base address of dataArray into R2
MOV R3, #25         ; Load the value 25 into R3
STR R3, [R2, #0]    ; Store R3 (25) into the first element of dataArray (offset 0)
```

**Course Outcome Alignment:**
*   **CO1 (K3):** Reinforces the understanding of C data types and assignments by showing their direct translation.
*   **CO3 (K3):** Illustrates the mapping between C operations and assembly instructions, aiding in choosing the appropriate level of programming.

**Textbook References:**
*   **Zhu (Ch 3.4):** Provides examples of translating simple C statements into ARM assembly.

---

## 6. Memory Address Calculations

Efficiently accessing data in memory often requires calculating addresses. This involves base addresses, offsets, and potentially pointer arithmetic.

### 6.1. Calculating Addresses Using Registers

*   **Adding an Offset:** `ADD <Rd>, <Rn>, #offset`
*   **Subtracting an Offset:** `SUB <Rd>, <Rn>, #offset`
*   **Adding a Register:** `ADD <Rd>, <Rn>, <Rm>`

These instructions are fundamental for creating the effective memory addresses used by `LDR` and `STR`.

**Example:** Calculate the address of the 3rd element in an array where each element is 4 bytes. If `R1` holds the base address of the array:
```assembly
; Address of 3rd element = base_address + (element_index * element_size)
; For the 3rd element, element_index = 2 (0-based indexing)
; element_size = 4 bytes
MOV R2, #2          ; Index of the 3rd element
MOV R3, #4          ; Size of each element
MUL R4, R2, R3      ; R4 = 2 * 4 = 8 (offset)
ADD R5, R1, R4      ; R5 = R1 (base address) + 8 (offset)
; Now R5 holds the address of the 3rd element
```

**Textbook References:**
*   **Lewis (Ch 2.3.3):** Discusses memory addressing and the use of base registers with offsets.
*   **Yiu (Ch 4.3):** Covers arithmetic instructions used for address calculations.

---

## 7. Memory Addressing Examples

This section demonstrates how to translate C pointer and subscript expressions into ARM assembly.

### 7.1. Translating C Pointer Expressions to Assembly

**C Pointer Expression:**
```c
*ptr; // Dereferencing a pointer
```
**Assembly Translation:**
Assuming `R0` holds the address stored in `ptr`:
```assembly
LDR R1, [R0] ; Load the value at the address in R0 into R1
```

**C Pointer Expression:**
```c
ptr++; // Incrementing a pointer (assumes pointer to type with size 1, like char)
```
**Assembly Translation:**
```assembly
ADD R0, R0, #1 ; Increment the address in R0 by 1 byte
```
If `ptr` points to a larger data type (e.g., `int *ptr`), the increment would be by the size of the data type:
```assembly
ADD R0, R0, #4 ; Increment by 4 bytes for an int pointer
```

**C Pointer Expression:**
```c
*ptr++ = value; // Store value, then increment pointer
```
**Assembly Translation:**
Assuming `R0` holds `ptr` and `R1` holds `value`:
```assembly
STR R1, [R0]   ; Store value into the location pointed to by R0
ADD R0, R0, #4 ; Increment R0 (pointer) by 4 bytes (assuming int pointer)
```

**C Pointer Expression:**
```c
*++ptr = value; // Increment pointer, then store value
```
**Assembly Translation:**
Assuming `R0` holds `ptr` and `R1` holds `value`:
```assembly
ADD R0, R0, #4 ; Increment R0 (pointer) by 4 bytes
STR R1, [R0]   ; Store value into the new location pointed to by R0
```

**Example:**
**C Code:**
```c
int *p;
int x = 50;
*p = x; // Assume p points to a valid memory location
```
**Assembly Translation:**
```assembly
; Assume R0 holds the address stored in p
; Assume R1 holds the value of x (50)

MOV R1, #50       ; Load x into R1
; If p is not initialized, load its address into R0
; LDR R0, =p
; LDR R0, [R0] ; Load the address p points to into R0

STR R1, [R0]      ; Store the value from R1 into the memory location pointed to by R0
```

### 7.2. Translating C Subscript Expressions to Assembly

**C Subscript Expression:**
```c
array[index]; // Accessing an element (assuming int array)
```
**Assembly Translation:**
Assuming `R0` holds the base address of `array` and `R1` holds `index`:
```assembly
; Calculate offset: offset = index * sizeof(element)
MOV R2, #4        ; sizeof(int) is 4 bytes
MUL R3, R1, R2    ; R3 = index * 4 (offset)

; Calculate effective address: effective_address = base_address + offset
ADD R4, R0, R3    ; R4 = R0 (base_address) + R3 (offset)

; Now R4 holds the address of array[index]
```

**C Subscript Expression:**
```c
array[index] = value; // Assigning a value to an element
```
**Assembly Translation:**
Assuming `R0` holds the base address of `array`, `R1` holds `index`, and `R2` holds `value`:
```assembly
; Calculate offset: offset = index * sizeof(element)
MOV R3, #4        ; sizeof(int) is 4 bytes
MUL R4, R1, R3    ; R4 = index * 4 (offset)

; Calculate effective address: effective_address = base_address + offset
ADD R5, R0, R4    ; R5 = R0 (base_address) + R4 (offset)

; Store the value to the calculated address
STR R2, [R5]      ; Store R2 (value) into memory at address R5
```

**C Subscript Expression:**
```c
value = array[index]; // Reading a value from an element
```
**Assembly Translation:**
Assuming `R0` holds the base address of `array` and `R1` holds `index`:
```assembly
; Calculate offset: offset = index * sizeof(element)
MOV R2, #4        ; sizeof(int) is 4 bytes
MUL R3, R1, R2    ; R3 = index * 4 (offset)

; Calculate effective address: effective_address = base_address + offset
ADD R4, R0, R3    ; R4 = R0 (base_address) + R3 (offset)

; Load the value from the calculated address into R5
LDR R5, [R4]      ; Load value from memory at address R4 into R5
```

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 7.3. Translating Structure References to Assembly

Structures group related data items. Accessing members requires calculating offsets from the structure's base address.

**C Structure Reference:**
```c
struct MyStruct {
    int id;       // Offset 0
    char name[20]; // Offset 4 (assuming int is 4 bytes)
    float value;  // Offset 24 (assuming char array is 20 bytes)
};

struct MyStruct myData;
int studentId = myData.id;
```
**Assembly Translation:**
Assuming `R0` holds the base address of `myData`:
```assembly
; Load myData.id into R1
LDR R1, [R0, #0] ; Load word from address R0 + 0 into R1
```

**C Structure Reference:**
```c
myData.name[5] = 'A';
```
**Assembly Translation:**
Assuming `R0` holds the base address of `myData`:
```assembly
; Calculate address of name[5]: base_address + offset_of_name + (index * sizeof(char))
; Offset of name is 4 bytes. sizeof(char) is 1 byte. Index is 5.
; Total offset = 4 + (5 * 1) = 9 bytes

MOV R1, #'A'      ; Load the character 'A' into R1
STRB R1, [R0, #9] ; Store R1 as a byte at address R0 + 9
```

**C Structure Reference:**
```c
float sensorReading = myData.value;
```
**Assembly Translation:**
Assuming `R0` holds the base address of `myData`:
```assembly
; Load myData.value into R1 (assuming value is a float, usually loaded as word)
LDR R1, [R0, #24] ; Load word from address R0 + 24 into R1
```

**Important Points:**
*   **Structure Padding:** Compilers may insert padding bytes between structure members for alignment. This means offsets might not be contiguous. Always refer to the compiler's output or documentation if unsure.
*   **Data Sizes:** Be mindful of the size of each data member (byte, half-word, word, float). Use appropriate load/store instructions (`LDRB`, `STRH`, `LDR`, `STR`, potentially FPU instructions for floats).

**Textbook References:**
*   **Lewis (Ch 2.3.3):** Explains memory access patterns and addressing modes relevant to structures.
*   **Zhu (Ch 3.4):** Includes examples of accessing array elements and potentially simple structures.
*   **Yiu (Ch 4.2.3, Ch 4.3):** Provides detailed explanations of addressing modes and their application to data structures.

---

## 8. Stack Instructions

The stack is a region of memory used for temporary storage, function call parameters, and local variables. It operates on a Last-In, First-Out (LIFO) principle.

### 8.1. Stack Pointer (SP)

The Stack Pointer (`SP`) register (often R13) always points to the top of the stack.

### 8.2. Push and Pop Instructions

*   **`PUSH`:** Stores one or more registers onto the stack. The stack pointer is decremented before each store.
    *   **Syntax:** `PUSH {<Rn>{, <Rn+1>{, ...}}} `
    *   **Example:** `PUSH {R0, R1, R2}` - Stores R0, R1, and R2 onto the stack.
*   **`POP`:** Loads one or more registers from the stack. Registers are loaded from memory, and the stack pointer is incremented after each load.
    *   **Syntax:** `POP {<Rn>{, <Rn+1>{, ...}}} `
    *   **Example:** `POP {R0, R1, R2}` - Loads values from the stack into R0, R1, and R2.

**Important Points:**
*   The order of registers in `PUSH` and `POP` matters for `POP` to retrieve them correctly.
*   You can push/pop multiple registers at once. The ARM architecture defines specific multiple-register transfer instructions like `LDM` (Load Multiple) and `STM` (Store Multiple) which are often used for stack operations. `PUSH` is a shorthand for `STMDB` (Store Multiple, Decrement Before) and `POP` for `LDMIA` (Load Multiple, Increment After).
*   **Stack Growth Direction:** On Cortex-M, the stack typically grows downwards (from higher addresses to lower addresses).

### 8.3. Push/Pop with Link Register (`LR`) and Program Counter (`PC`)

*   `PUSH {LR}`: Saves the return address of the current function onto the stack.
*   `POP {PC}`: Restores the return address from the stack and jumps to that address, effectively returning from a function.

**Example: Function Prologue and Epilogue**
```assembly
MyFunction:
    PUSH {R4, LR}       ; Save registers R4 and the return address (LR) onto the stack
    ; ... function code ...
    MOV R0, #123        ; Example: Set return value in R0
    POP {R4, PC}        ; Restore R4 and return to the caller (PC = restored LR)
```

**Course Outcome Alignment:**
*   **CO2 (K2):** Explains the programmer's view of the processor architecture by detailing the role of the Stack Pointer and how the stack is used for function calls.
*   **CO3 (K3):** Demonstrates how function calls and returns are managed at the assembly level, which is crucial for understanding C function behavior.

**Textbook References:**
*   **Lewis (Ch 2.5):** Introduces the stack and its operations.
*   **Zhu (Ch 3.3.3):** Covers stack operations and their use in function calls.
*   **Yiu (Ch 3.5, Ch 4.2.4):** Provides detailed explanations of the stack pointer, `PUSH`, `POP`, `LDM`, and `STM` instructions.

---

## 9. Data Processing Instructions

These instructions perform arithmetic and logical operations on data in registers.

### 9.1. Arithmetic Instructions

*   **`ADD`:** Addition. `ADD <Rd>, <Rn>, <operand2>`
*   **`SUB`:** Subtraction. `SUB <Rd>, <Rn>, <operand2>`
*   **`MUL`:** Multiplication. `MUL <Rd>, <Rn>, <Rm>` (Multiplies two registers, result in Rd. For Cortex-M, typically produces a 32-bit result from two 32-bit operands).
*   **`SDIV`, `UDIV`:** Signed/Unsigned Division. (Available on Cortex-M4 and later, or via software emulation).
*   **`ADC`, `SBC`:** Addition/Subtraction with Carry.

**Syntax:**
`<operand2>` can be a register (`<Rm>`) or an immediate value (`#imm`).

**Example:**
```assembly
MOV R0, #5
MOV R1, #3
ADD R2, R0, R1    ; R2 = R0 + R1 = 5 + 3 = 8

SUB R3, R2, R0    ; R3 = R2 - R0 = 8 - 5 = 3

MUL R4, R0, R1    ; R4 = R0 * R1 = 5 * 3 = 15
```

### 9.2. Logical Instructions

*   **`AND`:** Bitwise AND. `AND <Rd>, <Rn>, <operand2>`
*   **`ORR`:** Bitwise OR. `ORR <Rd>, <Rn>, <operand2>`
*   **`EOR`:** Bitwise Exclusive OR. `EOR <Rd>, <Rn>, <operand2>`
*   **`BIC`:** Bitwise Clear (AND NOT). `BIC <Rd>, <Rn>, <operand2>`
*   **`TST`:** Test bits (AND, but only sets flags). `TST <Rn>, <operand2>`
*   **`CMP`:** Compare (SUB, but only sets flags). `CMP <Rn>, <operand2>`

**Example:**
```assembly
MOV R0, #0b10101010
MOV R1, #0b11001100

AND R2, R0, R1     ; R2 = 0b10001000 (R0 AND R1)
ORR R3, R0, R1     ; R3 = 0b11101110 (R0 OR R1)
EOR R4, R0, R1     ; R4 = 0b01100110 (R0 XOR R1)
BIC R5, R0, #0b11000000 ; R5 = 0b00101010 (R0 AND NOT 0b11000000)

TST R0, #0b00001000  ; Sets flags based on R0 AND 0b00001000. Z flag will be 0.
CMP R0, R1         ; Sets flags based on R0 - R1. N flag might be set.
```

### 9.3. Shift and Rotate Instructions

*   **Logical Shift Left (`LSL`):** Shifts bits left, fills with zeros.
    *   `LSL <Rd>, <Rm>, #imm_shift`
    *   `LSL <Rd>, <Rm>, <Rs>` (Shift by amount in register Rs)
*   **Logical Shift Right (`LSR`):** Shifts bits right, fills with zeros.
    *   `LSR <Rd>, <Rm>, #imm_shift`
    *   `LSR <Rd>, <Rm>, <Rs>`
*   **Arithmetic Shift Right (`ASR`):** Shifts bits right, fills with the sign bit.
    *   `ASR <Rd>, <Rm>, #imm_shift`
    *   `ASR <Rd>, <Rm>, <Rs>`
*   **Rotate Right (`ROR`):** Rotates bits right, the bit shifted out wraps around.
    *   `ROR <Rd>, <Rm>, #imm_shift`
    *   `ROR <Rd>, <Rm>, <Rs>`
*   **Rotate Right Extended (`RRX`):** Rotates right by 1, with the Carry flag being the bit shifted into the most significant bit.

**Example:**
```assembly
MOV R0, #0b10000000 ; R0 = 128 (signed int, negative)
LSR R1, R0, #1      ; R1 = 0b01000000 (64). Logical shift right.
ASR R2, R0, #1      ; R2 = 0b11000000 (-64). Arithmetic shift right preserves sign.

MOV R3, #0b00000001
ROR R4, R3, #1      ; R4 = 0b10000000. Rotate R3 right by 1.
```

### 9.4. Branch Instructions

These instructions alter the flow of program execution.

*   **`B` (Branch):** Unconditional branch to a label.
*   **Conditional Branches (`BEQ`, `BNE`, `BLT`, `BGT`, etc.):** Branch based on the status flags (Zero, Negative, Carry, etc.) set by previous instructions like `CMP` or `TST`.

**Example:**
```assembly
MOV R0, #10
CMP R0, #5
BEQ EqualBranch   ; Branch to EqualBranch if R0 == 5 (which is false here)
B ElseBranch      ; Branch to ElseBranch

EqualBranch:
    ; Code to execute if equal
    B EndBranch

ElseBranch:
    ; Code to execute if not equal
    NOP

EndBranch:
    ; Continue program
```

**Course Outcome Alignment:**
*   **CO2 (K2):** Explains the programmer's view of the processor architecture by detailing the various data processing operations and how they manipulate data.
*   **CO3 (K3):** Helps in understanding how to implement control flow (like `if-else` statements) using conditional branches.

**Textbook References:**
*   **Lewis (Ch 2.4):** Introduces arithmetic and logical operations.
*   **Zhu (Ch 3.3):** Covers a wide range of ARM instructions including data processing and branches.
*   **Yiu (Ch 4.2):** Provides comprehensive details on arithmetic, logical, shift, and branch instructions.

---

## Practice Questions

**1. Loading and Storing:**
Suppose you have a variable `counter` stored at memory address `0x20001000`. Write ARM assembly code to:
a) Initialize `counter` to 5.
b) Increment `counter` by 1.
c) Read the value of `counter` into register R2.

**2. Pointer Arithmetic:**
Given a pointer `ptr` stored in R0, and assuming it points to an array of 32-bit integers, write ARM assembly code to:
a) Load the integer at the address `ptr + 12` into register R1.
b) Store the value in register R2 into the memory location pointed to by `ptr + 8`.

**3. Structure Access:**
Consider a structure `SensorData` with the following layout:
```c
struct SensorData {
    int status;       // Offset 0
    unsigned short reading; // Offset 4 (assuming int is 4 bytes)
    int timestamp;    // Offset 6 (assuming short is 2 bytes, padding may occur)
};
```
Assume `sensor` is a variable of type `SensorData` and its base address is in register R0. Write assembly code to:
a) Load the `status` member into register R1.
b) Store the value from register R2 into the `reading` member.

**4. Stack Usage:**
Write ARM assembly code for a simple function `CalculateSum` that takes two arguments (passed in R0 and R1) and returns their sum in R0. Ensure that registers R4 and the Link Register (LR) are saved on the stack upon entry and restored before returning.

---

## Answers to Practice Questions

**1. Loading and Storing:**
```assembly
; a) Initialize counter to 5
LDR R0, =counter_address   ; Load the address of 'counter' into R0
MOV R1, #5                 ; Load the value 5 into R1
STR R1, [R0]               ; Store R1 (5) into the memory location pointed to by R0

; b) Increment counter by 1
LDR R0, =counter_address   ; Load the address of 'counter' into R0
LDR R1, [R0]               ; Load the current value of 'counter' into R1
ADD R1, R1, #1             ; Increment R1 by 1
STR R1, [R0]               ; Store the incremented value back to 'counter'

; c) Read the value of counter into register R2
LDR R0, =counter_address   ; Load the address of 'counter' into R0
LDR R2, [R0]               ; Load the value from memory (counter) into R2

; Define counter_address (this is conceptual, the actual address would be known)
.equ counter_address, 0x20001000
```

**2. Pointer Arithmetic:**
```assembly
; Assuming ptr is in R0

; a) Load the integer at the address ptr + 12 into register R1.
;    ptr + 12 bytes means ptr + 3 words (3 * 4 bytes = 12 bytes)
ADD R1, R0, #12      ; Calculate address (ptr + 12) and store in R1
LDR R1, [R1]         ; Load the word from the calculated address into R1

; Alternatively, using pre-indexed addressing:
LDR R1, [R0, #12]    ; Load word from R0 + 12 directly into R1

; b) Store the value in register R2 into the memory location pointed to by ptr + 8.
;    ptr + 8 bytes means ptr + 2 words
ADD R3, R0, #8       ; Calculate address (ptr + 8) and store in R3
STR R2, [R3]         ; Store R2 into the memory location pointed to by R3

; Alternatively, using pre-indexed addressing:
STR R2, [R0, #8]     ; Store R2 into memory at R0 + 8
```

**3. Structure Access:**
```assembly
; Assuming R0 holds the base address of 'sensor'

; a) Load the 'status' member (offset 0) into register R1.
LDR R1, [R0, #0]     ; Load word from address R0 + 0 into R1

; b) Store the value from register R2 into the 'reading' member (offset 4).
;    'reading' is a short (2 bytes). Use STRH.
STRH R2, [R0, #4]    ; Store half-word (16-bit) from R2 into memory at R0 + 4
```

**4. Stack Usage:**
```assembly
CalculateSum:
    PUSH {R4, LR}       ; Save R4 and the return address (LR) onto the stack

    ; Function logic:
    ; R0 holds the first argument
    ; R1 holds the second argument
    ; R4 can be used as a temporary register if needed

    MOV R4, R0          ; Example: Copy first argument to R4
    ADD R0, R4, R1      ; Calculate sum: R0 = R4 + R1. Result is in R0.

    POP {R4, PC}        ; Restore R4 and load the return address from the stack into PC
```

---

## Important Points to Remember

*   **Register Usage:** Understand the role of general-purpose registers (R0-R12), the Stack Pointer (SP/R13), Link Register (LR/R14), and Program Counter (PC/R15).
*   **Addressing Modes:** Master the different addressing modes for `LDR` and `STR` (register indirect, pre-indexed, post-indexed, PC-relative) as they are crucial for efficient memory access.
*   **Data Sizes:** Always be aware of the size of the data you are moving (byte, half-word, word) and use the appropriate instructions (`LDRB`, `STRB`, `LDRH`, `STRH`, `LDR`, `STR`).
*   **Immediate Values:** Understand the limitations of immediate values in instructions like `MOV` and `ADD`.
*   **Assembly vs. C:** Assembly offers fine-grained control and potential performance gains but is more complex. C provides higher abstraction and portability. Choose the right tool for the job.
*   **Stack Management:** Properly saving and restoring registers on the stack is essential for correct function behavior and to prevent data corruption.
*   **Flags:** Many data processing instructions affect the processor's status flags (N, Z, C, V), which are used by conditional branch instructions.

---
This comprehensive set of notes covers the essential aspects of ARM assembly language programming as outlined in Module 2, drawing upon the provided textbooks and aligning with the course outcomes. Remember that practice and experimentation are key to mastering assembly language.