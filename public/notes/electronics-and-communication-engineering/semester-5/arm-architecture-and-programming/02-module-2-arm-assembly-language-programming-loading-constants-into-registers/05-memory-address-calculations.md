---
title: "memory address calculations"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaed"
status: "completed"
scrapedAt: "2026-05-23T17:53:23.728Z"
---
# ARM ARCHITECTURE AND PROGRAMMING

## Module 2: ARM Assembly Language Programming: Loading Constants into Registers

### Topic: Memory Address Calculations

This module focuses on the fundamental operations of ARM assembly language programming, specifically how to load constant values into registers. A critical aspect of this is understanding how to calculate and manipulate memory addresses. This topic is essential for accessing data stored in memory, which is a cornerstone of any embedded system.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the concept of memory addresses in ARM systems.
*   Perform basic arithmetic operations to calculate memory addresses.
*   Use ARM assembly instructions to load calculated addresses into registers.
*   Explain how address calculations are used to access data structures like arrays and structures.
*   Relate memory address calculations to the programmer's view of processor architecture.

---

### Course Outcomes Alignment

This topic directly contributes to the following course outcomes:

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
    *   While this topic is about assembly, understanding memory address calculations in assembly provides a deeper insight into how C pointers and array accesses are translated into machine code. This knowledge helps in writing more efficient and predictable C code for embedded systems. For example, understanding how array elements are accessed sequentially in assembly informs how you might structure your data in C for better cache performance.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
    *   This topic directly addresses the programmer's view by explaining how memory is organized and accessed. You'll learn about registers, memory locations, and the instructions used to move data between them, which are fundamental to understanding the processor's architecture from a programming perspective.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
    *   Understanding the intricacies of memory address calculations in assembly highlights the power and flexibility of low-level programming. This knowledge allows you to make informed decisions about when to use assembly for performance-critical sections (e.g., complex address manipulations, device driver interactions) versus using C for higher-level logic and portability.

---

### 1. Understanding Memory Addresses in ARM Systems

*   **What is a Memory Address?**
    *   A memory address is a unique numerical label assigned to each byte (or sometimes a word, depending on the architecture) of memory in a computer system. It acts like a street address, allowing the processor to uniquely identify and access a specific location in RAM or ROM.
    *   **Key Concept:** Memory is viewed as a linear sequence of bytes, each with its own address.
*   **Byte-Addressable Memory:**
    *   ARM processors, like many modern architectures, are byte-addressable. This means each individual byte of memory has a unique address.
    *   **Reference:** Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3," likely discusses memory organization and addressing modes in detail in early chapters. (Chapter 2 or 3 might be relevant here).
*   **Word Size:**
    *   The "word size" of a processor refers to the number of bits it can process in a single operation. For ARM Cortex-M3/M4 processors, the word size is typically 32 bits (4 bytes).
    *   When accessing multi-byte data (like a 32-bit integer), the processor needs to know the starting address of that data. The subsequent bytes are located at contiguous addresses.
*   **Endianness:**
    *   **Definition:** Endianness refers to the order in which bytes of a multi-byte word are stored in memory.
    *   **Little-Endian:** The least significant byte (LSB) is stored at the lowest memory address. This is the default for most ARM Cortex-M processors.
    *   **Big-Endian:** The most significant byte (MSB) is stored at the lowest memory address.
    *   **Importance:** Understanding endianness is crucial when interpreting data stored in memory, especially when sharing data between systems with different endianness or when working with protocols that specify byte order.
    *   **Example (32-bit value 0x12345678):**
        *   **Little-Endian:**
            *   Address `0x1000`: `0x78` (LSB)
            *   Address `0x1001`: `0x56`
            *   Address `0x1002`: `0x34`
            *   Address `0x1003`: `0x12` (MSB)
        *   **Big-Endian:**
            *   Address `0x1000`: `0x12` (MSB)
            *   Address `0x1001`: `0x34`
            *   Address `0x1002`: `0x56`
            *   Address `0x1003`: `0x78` (LSB)
    *   **Reference:** Yiu, "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors," will have extensive coverage of memory architecture, including endianness. (Chapters related to memory system, e.g., Chapter 3 or 4).

---

### 2. Performing Basic Arithmetic Operations for Address Calculations

Memory addresses are essentially numerical values, so standard arithmetic operations can be used to calculate new addresses.

*   **Addition:**
    *   Used to move to the next element in an array or to access data at a specific offset from a base address.
*   **Subtraction:**
    *   Used to move to a previous element in an array or to calculate the distance between two addresses.
*   **Multiplication and Division:**
    *   Often used to calculate the size of data elements or the number of elements to skip in memory. For example, to find the address of the Nth element of an array of 4-byte integers, you would multiply N by 4.

*   **Key Concept:** Address calculations are fundamental to pointer arithmetic in C and array indexing in assembly.

---

### 3. Using ARM Assembly Instructions for Address Loading

The core of loading constants and calculated addresses into registers involves a few key instructions.

*   **Loading Immediate Values (Constants):**
    *   **`MOV` (Move):** The most basic instruction to copy a value from one register to another or to load a small immediate value (up to 8 bits, extendable to 12 bits with specific patterns) into a register.
        *   **Syntax:** `MOV <Rd>, <Rm>` (Register to Register)
        *   **Syntax:** `MOV <Rd>, #<immediate>` (Immediate value to Register)
        *   **Example:** `MOV R0, #10`  ; Load the constant value 10 into register R0.
    *   **`MVN` (Move Not):** Loads the bitwise complement of an immediate value into a register. Useful for creating masks or specific bit patterns.
        *   **Syntax:** `MVN <Rd>, #<immediate>`
        *   **Example:** `MVN R1, #0` ; Load all ones (0xFFFFFFFF) into R1.

*   **Loading Larger Immediate Values:**
    *   For immediate values that don't fit the standard `MOV` limitations, the assembler uses a combination of `MOV` and `MOVT` (Move Top).
    *   **`MOVT` (Move Top):** Loads the upper 16 bits of a 32-bit register. The lower 16 bits are preserved.
    *   **`MOV` (with a 16-bit immediate):** Loads the lower 16 bits of a 32-bit register.
    *   **How it works:** To load a 32-bit constant, the assembler typically first loads the upper 16 bits using `MOVT` and then the lower 16 bits using `MOV`. The assembler handles this transparently when you use a 32-bit immediate.
    *   **Example:** `MOV R2, #0x12345678` ; Assembler will typically generate:
        ```assembly
        MOVT R2, #0x5678  ; Load upper 16 bits
        MOV R2, #0x1234   ; Load lower 16 bits (clears upper bits if not already done by MOVT) - NOTE: This is a simplification. The actual instruction sequence is more complex and depends on the assembler and CPU architecture. The common pattern is MOVT followed by MOV for the lower 16 bits of a 32-bit constant. A more precise assembler output for 0x12345678 would be `MOVT R2, #0x5678` followed by `MOVW R2, #0x1234`. (MOVW loads the lower 16 bits and zeros the upper bits).
        ```
        *   **Correction/Refinement:** The typical sequence for a 32-bit immediate is often `MOVW` (Move Word - 16-bit immediate into lower 16 bits of destination register) followed by `MOVT` (Move Top - 16-bit immediate into upper 16 bits of destination register).
        *   **Example revisited with `MOVW` and `MOVT`:** `MOV R2, #0x12345678` ; Assembler generates:
            ```assembly
            MOVW R2, #0x5678  ; Load lower 16 bits into R2
            MOVT R2, #0x1234  ; Load upper 16 bits into R2
            ```
            *(Note: The order of `MOVW` and `MOVT` can sometimes be reversed depending on the assembler and target architecture, but the principle of splitting a 32-bit immediate into two 16-bit chunks remains.)*
    *   **Reference:** Yiu, "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors," dedicates sections to instruction sets and data transfer instructions. (Chapters on Instruction Set Architecture, e.g., Chapter 4). Lewis also covers basic instructions in his chapters on assembly language.

*   **Loading Addresses from Memory:**
    *   **`LDR` (Load Register):** Loads a word (32 bits) from memory into a register. This is how you fetch data or addresses that are already stored in memory.
        *   **Syntax:** `LDR <Rt>, [<Rn>{, #<offset>}]` (Addressing modes)
        *   **Syntax:** `LDR <Rt>, [<Rn>, <Rm>{, <shift>}]` (Register offset)
        *   **Syntax:** `LDR <Rt>, <label>` (Load address of a label)
    *   **Addressing Modes are Crucial for Calculations:**
        *   **Immediate Offset:** `LDR R0, [R1, #4]` ; Load data from address `R1 + 4` into R0.
            *   **Example:** If `R1` holds `0x20000000`, this instruction loads data from `0x20000004` into `R0`. This is common for accessing the next element in an array if `R1` points to the start of the array.
        *   **Register Offset:** `LDR R0, [R1, R2]` ; Load data from address `R1 + R2` into R0.
            *   **Example:** If `R1` holds `0x20000000` and `R2` holds `0x00000008`, this loads data from `0x20000008` into `R0`.
        *   **Pre-indexed Addressing:** `LDR R0, [R1, #4]!` ; Load data from `R1 + 4` into `R0`, then update `R1` to `R1 + 4`. The `!` signifies that the base register `R1` is updated.
            *   **Example:** If `R1` is `0x20000000`, `R0` gets data from `0x20000004`, and `R1` becomes `0x20000004`. This is useful for iterating through arrays.
        *   **Post-indexed Addressing:** `LDR R0, [R1], #4` ; Load data from the address in `R1` into `R0`, then update `R1` to `R1 + 4`.
            *   **Example:** If `R1` is `0x20000000`, `R0` gets data from `0x20000000`, and `R1` becomes `0x20000004`.
        *   **PC-Relative Addressing:** `LDR R0, my_variable` ; Load the value of `my_variable` into `R0`. The assembler calculates the offset from the Program Counter (PC) to `my_variable`.
            *   **Example:** This is common for accessing global variables or constants defined in the data section.
    *   **`LDR` for Loading Addresses:** If `my_address_label` is a label pointing to a memory location, `LDR R0, =my_address_label` is often used. The `=` tells the assembler to generate the appropriate instruction(s) (possibly using `LDR Rd, [PC, #offset]`) to load the *address* of `my_address_label` into `R0`.
    *   **Reference:** Zhu, "Embedded systems with ARM Cortex M Microcontrollers in Assembly and C," will provide practical examples of using `LDR` and different addressing modes for data access. (Chapters focusing on memory access and data manipulation).

---

### 4. Address Calculations for Data Structures

Understanding how to calculate addresses is vital for accessing elements within more complex data structures.

*   **Arrays:**
    *   **Concept:** A contiguous block of memory storing elements of the same data type.
    *   **Calculation:** Address of Nth element = Base Address + (N * Element Size).
    *   **Example (Array of 32-bit integers):**
        ```assembly
        .data
        my_array  DWORD   10, 20, 30, 40  ; Define an array of 4 32-bit integers

        .text
        .global main
        main:
            MOV R4, #0          ; R4 = index (N=0)
            MOV R5, #4          ; R5 = element size (32-bit = 4 bytes)
            LDR R6, =my_array   ; R6 = base address of my_array

            ; Calculate address of the 0th element (which is just the base address)
            ADD R7, R6, R4, LSL #0 ; R7 = R6 + (R4 * 1) -> R7 = address of my_array[0]

            ; Load the value of the 0th element
            LDR R0, [R7]        ; Load value from address in R7 into R0 (R0 = 10)

            ; Calculate address of the 1st element
            ADD R7, R6, R4, LSL #2 ; R7 = R6 + (R4 * 4) -> R7 = address of my_array[1]
                                    ; Note: LSL #2 is equivalent to multiplying by 4 (2^2)
            ADD R7, R7, #4      ; Increment R7 by 4 to get to the next element (if R4 was 0, R7 now points to my_array[1])

            ; A more direct way to calculate for index N:
            MOV R4, #1          ; R4 = index (N=1)
            ADD R7, R6, R4, LSL #2 ; R7 = R6 + (1 * 4) -> R7 = address of my_array[1]

            ; Load the value of the 1st element
            LDR R0, [R7]        ; Load value from address in R7 into R0 (R0 = 20)

            ; To calculate the address of the Nth element (where N is in R4):
            ; R6 contains base address, R5 contains element size (4)
            ; Address = R6 + (R4 * R5)
            ; Using LSL for multiplication by powers of 2:
            ; For element size 4 (2^2):
            ; ADD R7, R6, R4, LSL #2 ; R7 = R6 + (R4 * 4)
        ```
*   **Structures (or Structs):**
    *   **Concept:** A collection of variables of different data types, grouped together. Each member within the structure has an offset from the beginning of the structure.
    *   **Calculation:** Address of member = Base Address of Structure + Offset of Member.
    *   **Example (Structure with int, char, int):**
        ```c
        typedef struct {
            int data1;     // 4 bytes
            char flag;     // 1 byte
            int data2;     // 4 bytes
        } MyStruct;
        ```
        *   If `my_struct_ptr` points to an instance of `MyStruct`:
            *   Address of `data1` = `my_struct_ptr` (Offset 0)
            *   Address of `flag` = `my_struct_ptr + 4` (Offset 4)
            *   Address of `data2` = `my_struct_ptr + 5` (Offset 5)
        *   **Assembly Implementation:**
            ```assembly
            .data
            my_struct_instance:
                .word 100       ; data1
                .byte 1         ; flag
                .word 200       ; data2

            .text
            .global main
            main:
                LDR R6, =my_struct_instance ; R6 = base address of my_struct_instance

                ; Load data1 (offset 0)
                LDR R0, [R6]            ; R0 = 100

                ; Load flag (offset 4) - Requires loading the byte and potentially extending it
                LDRB R1, [R6, #4]       ; Load byte from R6+4 into R1 (R1 = 1)
                                        ; LDRB loads an 8-bit value.

                ; Load data2 (offset 5)
                LDR R2, [R6, #5]        ; Load word (32-bit) from R6+5 into R2 (R2 = 200)
                                        ; Note: LDR assumes the data starts at R6+5 and is 4 bytes long.
                                        ; Given the structure definition, this works due to padding or alignment.
                                        ; If `flag` was followed by a 2-byte short, you'd need a specific load instruction.
            ```
    *   **Reference:** Both Lewis and Yiu will discuss memory layout for data structures and how these translate to assembly. Understanding data types and their sizes is key, which is covered in chapters on C features for embedded systems (Lewis) or processor architecture details (Yiu).

---

### 5. Relating Address Calculations to Programmer's View

*   **Abstraction:** High-level languages like C abstract away the direct manipulation of memory addresses. When you write `myArray[i]`, the compiler translates this into assembly code that performs the necessary address calculations.
*   **Pointers:** C pointers are essentially variables that store memory addresses. Pointer arithmetic (`ptr++`, `ptr + 5`) directly corresponds to the address calculations discussed.
    *   **Example:** If `int *p;` and `p` holds address `0x20000000`, then `p++` increments `p` to `0x20000004` (because `int` is typically 4 bytes). This is equivalent to `ADD R0, R0, #4` if `R0` holds the address.
*   **Compiler's Role:** The compiler's job is to efficiently translate high-level constructs into machine code, including optimizing address calculations. Understanding assembly helps you understand what the compiler is doing and how to write C code that the compiler can optimize effectively.
*   **Debugging:** When debugging embedded systems, you often inspect memory contents at specific addresses. Knowing how to calculate these addresses manually or understanding the compiler's output is invaluable.
*   **Low-Level Control:** In scenarios requiring direct hardware interaction (e.g., memory-mapped peripherals), you'll be working with specific memory addresses. Assembly is often necessary for this level of control.
*   **CO2 Alignment:** This section directly addresses CO2 by explaining how the underlying machine operations (address calculations) support the programmer's view of memory access in C.

---

### 6. Practice Questions and Exercises

**Question 1:**
An ARM Cortex-M3 microcontroller uses little-endian byte order. If the 32-bit value `0xAABBCCDD` is stored in memory starting at address `0x20001000`, what byte will be at address `0x20001001`?

**Answer 1:**
In little-endian, the least significant byte (LSB) is stored at the lowest address.
`0xAABBCCDD`
LSB = `0xDD`
Next byte = `0xCC`
So, the byte at address `0x20001001` will be `0xCC`.

**Question 2:**
You have an array of 16-bit unsigned integers (half-words) starting at memory address `0x40010000`. If the base address is in register `R0`, and you want to access the 5th element of the array (where the first element is at index 0), what ARM assembly instruction sequence would calculate the address of the 5th element and load it into register `R1`?

**Answer 2:**
Element size = 16 bits = 2 bytes.
Index = 5.
Address of 5th element = Base Address + (Index * Element Size)
Address = `0x40010000` + (5 * 2)
Address = `0x40010000` + 10
Address = `0x4001000A`

Assembly:
```assembly
    MOV R0, #0x40010000  ; Assume R0 holds the base address
    MOV R2, #5           ; R2 = index (5)
    MOV R3, #2           ; R3 = element size (2 bytes)

    ; Calculate offset: index * element_size
    MUL R2, R2, R3       ; R2 = R2 * R3 (R2 = 5 * 2 = 10)

    ; Calculate final address: base_address + offset
    ADD R1, R0, R2       ; R1 = R0 + R2 (R1 = 0x40010000 + 10 = 0x4001000A)
```
Alternatively, using register offset with `LDR` directly:
```assembly
    MOV R0, #0x40010000  ; Assume R0 holds the base address
    MOV R2, #5           ; R2 = index (5)
    LSL R2, R2, #1       ; R2 = R2 << 1 (R2 = 5 * 2 = 10). Left Shift by 1 is multiplication by 2.

    ; Load the address of the 5th element using pre-indexed addressing.
    ; This loads the value *from* the calculated address.
    ; If you just want the address, you need to load the address itself.
    ; The following loads the *value* at the address R0+R2.
    ; LDR R1, [R0, R2] ; R1 = value at address R0 + R2

    ; To load the address itself into R1, you'd typically do:
    ADD R1, R0, R2       ; R1 = R0 + R2 (R1 = 0x4001000A)
```
*Self-correction:* The question asks to load the *address* into `R1`, not the *value*. Therefore, `ADD R1, R0, R2` is the correct final step. If the intention was to load the *value* from that address into `R1`, then `LDR R1, [R0, R2]` would be used.

**Question 3:**
Consider a structure `Config` with the following layout:
```c
typedef struct {
    unsigned short status_flags; // Offset 0, 2 bytes
    unsigned int   control_reg;  // Offset 2, 4 bytes
    unsigned char  mode;         // Offset 6, 1 byte
} Config;
```
If a pointer to a `Config` structure is in `R5` (e.g., `R5 = 0x20000800`), how would you load the `mode` member into `R3` using assembly?

**Answer 3:**
The `mode` member is at an offset of 6 bytes from the beginning of the structure.
Base address in `R5` = `0x20000800`.
Offset of `mode` = 6.
Address of `mode` = `0x20000800 + 6` = `0x20000806`.
We need to load a single byte.

Assembly:
```assembly
    MOV R5, #0x20000800  ; Assume R5 holds the base address of the Config struct

    ; Load the 'mode' member (an unsigned char - 1 byte)
    LDRB R3, [R5, #6]    ; Load byte from address R5 + 6 into R3
```
*Explanation:* `LDRB` is used to load an 8-bit quantity from memory. The addressing mode `[R5, #6]` calculates the memory address by adding the immediate offset 6 to the value in register `R5`.

---

### 7. Important Points to Remember

*   **Byte Addressable:** ARM memory is byte-addressable.
*   **Endianness:** Be aware of little-endian (default for Cortex-M) and big-endian.
*   **Arithmetic Operations:** Addition and subtraction are your primary tools for address manipulation. Multiplication/shifts are used for calculating offsets based on element size.
*   **`LDR` Instruction:** The `LDR` instruction is used to load data (including addresses) from memory into registers.
*   **Addressing Modes:** Understand the various `LDR` addressing modes (immediate offset, register offset, pre-indexed, post-indexed) as they are powerful for performing address calculations efficiently.
*   **`MOV` and `MOVT`/`MOVW`:** Used for loading immediate values (constants) into registers.
*   **`LDRB`, `LDRH`:** Use these for loading byte (`LDRB`) or half-word (`LDRH`) quantities when dealing with smaller data types or specific structure members.
*   **Compiler Abstraction:** C pointers and array accesses are built upon these underlying assembly operations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 8. References and Further Reading

*   **[1] Lewis, Daniel W. *Fundamentals of Embedded Software with the ARM Cortex M3*. Pearson, 2nd ed., 2015.**
    *   Crucial for understanding the basics of embedded systems, C in embedded contexts, and how the processor interacts with memory at a fundamental level. Look for chapters on memory architecture, assembly language basics, and data types.
*   **[2] Yiu, Joseph. *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors*. Elsevier, 3rd ed., 2014.**
    *   This is an authoritative source for the ARM Cortex-M architecture. Chapters on the memory system, instruction set architecture, and addressing modes will be particularly relevant.
*   **[3] Zhu, Yifeng. *Embedded systems with ARM Cortex M Microcontrollers in Assembly and C*. E-man Press, 3rd ed., 2018.**
    *   This book offers practical examples of both C and assembly programming for ARM Cortex-M microcontrollers. It will likely provide hands-on illustrations of address calculations and data access.

---