---
title: "storing data from registers to memory"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaeb"
status: "completed"
scrapedAt: "2026-05-23T17:53:22.339Z"
---
# ARM ARCHITECTURE AND PROGRAMMING: MODULE 2 - ARM ASSEMBLY LANGUAGE PROGRAMMING

## TOPIC: Storing Data from Registers to Memory

### Learning Outcomes:

*   **LO1:** Differentiate between memory and register storage.
*   **LO2:** Explain the basic operation of memory access instructions in ARM.
*   **LO3:** Utilize ARM assembly language instructions to store data from registers into memory.
*   **LO4:** Understand the concept of memory addressing modes relevant to storing data.

### 1. Introduction: Registers vs. Memory Storage

**Key Concepts:**

*   **Registers:** Small, fast storage locations within the CPU itself. They are used for holding data that the CPU is actively working with, such as operands for arithmetic operations, program counters, and status flags. Accessing registers is significantly faster than accessing memory.
*   **Memory:** Larger, slower storage locations outside the CPU, typically RAM (Random Access Memory). Memory is used to store the program instructions, data, and variables. Accessing memory involves communication between the CPU and the memory controller, which takes more time.

**Why store data from registers to memory?**

*   **Data Persistence:** Data needs to be saved for later use or when it's no longer actively needed in the CPU's working set.
*   **Data Sharing:** Data needs to be made available to other parts of the program or other processes.
*   **Variable Storage:** Program variables reside in memory.
*   **Function Call Stack:** Local variables and return addresses for function calls are managed in memory.
*   **Output Operations:** Data to be displayed or sent to peripherals is often moved to memory before being processed by I/O controllers.

**Alignment with Course Outcomes:**

*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2):** Understanding the fundamental difference between registers and memory is crucial for a programmer's view of how a processor operates. This topic directly addresses this by highlighting their distinct roles and characteristics.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3):** Knowing how to directly manipulate memory through assembly instructions allows programmers to make informed decisions about when assembly might be necessary for performance-critical operations or low-level hardware interaction where C might abstract these details.

### 2. ARM Memory Access Instructions: Stores

**Key Concepts:**

ARM processors provide a set of instructions specifically designed to move data *from* registers *to* memory. These are commonly referred to as "store" instructions. The core idea is to specify:

1.  **The source register:** The register containing the data to be stored.
2.  **The destination memory address:** The location in memory where the data will be written.

**Basic Operation:**

Store instructions typically perform the following actions:

1.  **Address Calculation:** The effective memory address is calculated based on the base register and any offset or indexing specified by the addressing mode.
2.  **Data Transfer:** The content of the source register is transferred to the calculated memory address.
3.  **Memory Update:** The data is written into the memory location.

**General Syntax for Store Instructions (Conceptual):**

```assembly
STR {condition} <Rn>, [<Rm> {, <offset>}]
```

Where:

*   `STR`: The mnemonic for the store instruction (e.g., `STR` for word, `STRH` for half-word, `STRB` for byte).
*   `{condition}`: Optional condition code to control execution (e.g., `EQ`, `NE`, `GT`).
*   `<Rn>`: The source register containing the data to be stored.
*   `[<Rm> {, <offset>}]`: The memory address.
    *   `<Rm>`: The base register containing the base memory address.
    *   `{<offset>}`: An optional offset value that can be a register or an immediate value.

**Important Note:** The curly braces `{}` indicate optional parts of the syntax.

### 3. ARM Store Instructions and Their Usage

The ARM architecture provides several store instructions to handle different data sizes:

*   **`STR` (Store Register Word):** Stores a 32-bit word (4 bytes) from a register to memory.
    *   **Description:** This is the most common store instruction. It takes the value from a specified register and writes it to a memory location.
    *   **Syntax:** `STR <Rn>, <address>`
    *   **Example:** Store the value in register `R0` to the memory address held in register `R1`.
        ```assembly
        STR R0, [R1]  ; Store the 32-bit word from R0 to the address in R1
        ```

*   **`STRH` (Store Register Half-word):** Stores a 16-bit half-word (2 bytes) from a register to memory.
    *   **Description:** Used to store half the size of a word. The value from the lower 16 bits of the source register is stored. The ARM architecture can automatically handle endianness for half-word and byte accesses.
    *   **Syntax:** `STRH <Rn>, <address>`
    *   **Example:** Store the lower 16 bits of `R0` to the memory address held in `R1`.
        ```assembly
        STRH R0, [R1]  ; Store the 16-bit half-word from R0 to the address in R1
        ```

*   **`STRB` (Store Register Byte):** Stores an 8-bit byte (1 byte) from a register to memory.
    *   **Description:** Used to store a single byte. The value from the lower 8 bits of the source register is stored.
    *   **Syntax:** `STRB <Rn>, <address>`
    *   **Example:** Store the lowest byte of `R0` to the memory address held in `R1`.
        ```assembly
        STRB R0, [R1]  ; Store the 8-bit byte from R0 to the address in R1
        ```

**Textbook/Reference Integration:**

*   **Lewis (2e, 2015):** Chapter 4, "ARM Assembly Language Programming," likely covers basic data movement instructions, including stores. It would explain the syntax and functionality of `STR`, `STRH`, and `STRB` for transferring data between registers and memory.
*   **Yiu (3e, 2014):** Chapter 3, "ARM Instruction Set," would provide a detailed breakdown of the store instructions, their encoding, and supported addressing modes. He emphasizes the importance of understanding the target architecture's instruction set for efficient programming.
*   **Zhu (3e, 2018):** Chapter 5, "Memory Access Instructions," would likely dedicate sections to store operations, detailing how to use them with various addressing modes and for different data types.

### 4. Memory Addressing Modes for Stores

**Key Concepts:**

The effectiveness of store instructions is amplified by the various addressing modes ARM offers. These modes determine how the memory address is calculated. For stores, the primary modes are:

*   **Register Indirect Addressing:** The memory address is directly held in a register.
    *   **Syntax:** `[Rn]`
    *   **Example:** `STR R0, [R1]` - Stores `R0` to the address in `R1`.

*   **Register Indirect with Immediate Offset:** The memory address is calculated by adding an immediate (constant) offset to the base address in a register.
    *   **Syntax:** `[Rn, #offset]` (Pre-indexed) or `[Rn, #offset]!` (Pre-indexed with write-back)
    *   **Example (Pre-indexed):** `STR R0, [R1, #4]` - Stores `R0` to the address `R1 + 4`. The base register `R1` is *not* modified.
    *   **Example (Pre-indexed with write-back):** `STR R0, [R1, #4]!` - Stores `R0` to the address `R1 + 4`, and then updates `R1` to `R1 + 4`. This is useful for sequential memory access.

*   **Register Indirect with Register Offset:** The memory address is calculated by adding the value of another register (the offset register) to the base address in a register.
    *   **Syntax:** `[Rn, Rm]` (Pre-indexed) or `[Rn, Rm]!` (Pre-indexed with write-back)
    *   **Example:** `STR R0, [R1, R2]` - Stores `R0` to the address `R1 + R2`. `R1` is not modified.

*   **Register Indirect with Scaled Register Offset:** The memory address is calculated by adding a shifted (scaled) value of an offset register to the base address in a register. The scaling is typically by a power of 2 (e.g., `LSL #1`, `LSL #2`).
    *   **Syntax:** `[Rn, Rm, <shift>]` (Pre-indexed) or `[Rn, Rm, <shift>]!` (Pre-indexed with write-back)
    *   **Example:** `STR R0, [R1, R2, LSL #2]` - Stores `R0` to the address `R1 + (R2 << 2)`. This is very efficient for accessing elements in arrays where the index is stored in `R2`.

**Important Note on Write-Back (`!`):**

The `!` suffix in the addressing mode signifies "write-back." When used, the base register (`Rn`) is updated with the calculated memory address after the store operation is complete. This is highly efficient for iterating through memory blocks.

**Alignment with Course Outcomes:**

*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2):** Understanding addressing modes is fundamental to a programmer's view. It explains how instructions can efficiently access various memory locations without needing explicit addition instructions before the store.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3):** Advanced addressing modes like scaled register offsets are often used in assembly for high-performance array manipulation. Knowing these allows a programmer to determine if assembly is the right tool for optimizing such operations.

### 5. Examples of Storing Data

Let's illustrate with some practical examples, assuming we are using an ARM Cortex-M processor where the stack pointer (`SP`) or general-purpose registers are used for memory addresses.

**Scenario 1: Storing a simple variable**

We want to store the value `0x12345678` into a memory location pointed to by `R1`.

```assembly
    .syntax unified      @ Use unified syntax
    .arch armv7e-m     @ Specify architecture (e.g., Cortex-M4)
    .text                @ Code section

main:
    MOV R0, #0x12345678  @ Load the value into R0
    MOV R1, #0x20001000  @ Load a memory address into R1 (e.g., RAM address)

    STR R0, [R1]         @ Store the 32-bit word from R0 to the address in R1

    @ Program continues...
    B .                  @ Infinite loop (for demonstration)
```

**Explanation:**

1.  `MOV R0, #0x12345678`: Loads the constant value into register `R0`.
2.  `MOV R1, #0x20001000`: Loads the memory address into register `R1`.
3.  `STR R0, [R1]`: The `STR` instruction takes the 32-bit value from `R0` and writes it to the memory location whose address is currently in `R1`.

**Scenario 2: Storing a half-word with an offset**

Store the lower 16 bits of `R2` to the memory address `R3 + 8`.

```assembly
    .syntax unified
    .arch armv7-m
    .text

main:
    MOV R2, #0xABCD1234  @ Load a value into R2
    MOV R3, #0x20001000  @ Load a base memory address into R3

    STRH R2, [R3, #8]    @ Store the 16-bit half-word from R2 to address R3 + 8

    @ Program continues...
    B .
```

**Explanation:**

1.  `MOV R2, #0xABCD1234`: Loads a 32-bit value into `R2`.
2.  `MOV R3, #0x20001000`: Loads the base address into `R3`.
3.  `STRH R2, [R3, #8]`: The `STRH` instruction stores the lower 16 bits of `R2` (i.e., `0x1234`) to the memory address calculated as `0x20001000 + 8`, which is `0x20001008`.

**Scenario 3: Storing a byte and using write-back**

Store the lowest byte of `R4` to the address in `R5`, and then update `R5` to point to the next byte.

```assembly
    .syntax unified
    .arch armv7-m
    .text

main:
    MOV R4, #0xAA        @ Load a byte into R4 (lower byte will be used)
    MOV R5, #0x20001000  @ Load the starting memory address into R5

    STRB R4, [R5, #1]!   @ Store the byte from R4 to address R5+1, then update R5 to R5+1

    @ Now R5 contains 0x20001001
    @ Program continues...
    B .
```

**Explanation:**

1.  `MOV R4, #0xAA`: Loads the value `0xAA` into `R4`. The lowest byte is `0xAA`.
2.  `MOV R5, #0x20001000`: Sets the initial memory address in `R5`.
3.  `STRB R4, [R5, #1]!`:
    *   The `STRB` instruction takes the lowest byte of `R4` (`0xAA`) and stores it at the address `R5 + 1` (which is `0x20001001`).
    *   The `!` signifies write-back. After the store, the value of `R5` is updated to `R5 + 1`, so `R5` now holds `0x20001001`. This is extremely useful for looping through memory.

**Scenario 4: Storing to an array element using scaled register offset**

Let's say `R6` holds the base address of an array of 32-bit words, `R7` holds the index of the element we want to store, and `R8` holds the data.

```assembly
    .syntax unified
    .arch armv7-m
    .text

main:
    MOV R6, #0x20002000  @ Base address of an array of 32-bit words
    MOV R7, #3           @ Index of the element (4th element, as index starts from 0)
    MOV R8, #0xDEADBEEF  @ Data to store

    @ Calculate the address: base_address + (index * sizeof(word))
    @ sizeof(word) is 4 bytes (0x4)
    @ Address = R6 + (R7 << 2)

    STR R8, [R6, R7, LSL #2] @ Store R8 to the calculated address

    @ Program continues...
    B .
```

**Explanation:**

1.  `MOV R6, #0x20002000`: `R6` points to the start of an array.
2.  `MOV R7, #3`: `R7` specifies the index of the element we want to access.
3.  `MOV R8, #0xDEADBEEF`: `R8` contains the data to store.
4.  `STR R8, [R6, R7, LSL #2]`: This is the core of the operation.
    *   `R6` is the base address.
    *   `R7` is the index.
    *   `LSL #2` shifts the value in `R7` left by 2 bits, which is equivalent to multiplying by 4 (the size of a 32-bit word). So, if `R7` is 3, `R7, LSL #2` becomes `12` (decimal).
    *   The effective address is `R6 + (R7 << 2)`. If `R6` is `0x20002000` and `R7` is `3`, the address will be `0x20002000 + 12 = 0x2000200C`.
    *   The `STR R8` instruction stores the value `0xDEADBEEF` into memory at `0x2000200C`.

**Alignment with Course Outcomes:**

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3):** These assembly examples directly map to C code like `int *array; array[index] = value;`. Understanding the assembly implementation helps in appreciating how C compilers translate such high-level constructs.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2):** The examples demonstrate how different data types (word, half-word, byte) are handled by specific instructions and how addressing modes are used to access memory efficiently.

### 6. Important Points to Remember

*   **Data Size:** Always use the appropriate store instruction (`STR`, `STRH`, `STRB`) that matches the size of the data being stored and the intended memory location. Storing a word using `STRB` will only store the least significant byte.
*   **Address Validity:** Ensure the memory address calculated is valid and within the processor's accessible memory space. Accessing invalid addresses can lead to bus faults or program crashes.
*   **Endianness:** While `STR`, `STRH`, and `STRB` handle endianness automatically for half-word and byte accesses, be aware of the processor's endianness configuration (little-endian is common in Cortex-M) when interpreting multi-byte data stored in memory.
*   **Write-Back (`!`):** Use the write-back feature (`!`) judiciously. It's powerful for loops and sequential access but can be a source of bugs if not fully understood, as it modifies the base register.
*   **Load vs. Store:** Remember that `STR` (and its variants) *store* data from a register to memory, while `LDR` (and its variants) *load* data from memory into a register. They are complementary operations.
*   **Stack Operations:** Store instructions are crucial for pushing data onto the stack during function calls (`PUSH` instruction is often a macro for multiple `STR` operations).

### 7. Practice Questions and Exercises

**Question 1:**
Which ARM assembly instruction would you use to store the 32-bit value from register `R5` into memory at the address held by register `R9`?

**Answer:**
`STR R5, [R9]`

---

**Question 2:**
You have a byte of data in the lowest byte of register `R2`. You need to store this byte to memory at the address `0x20005000`. Write the ARM assembly code to achieve this.

**Answer:**
```assembly
    MOV R2, #0xC3       @ Load a byte (e.g., 0xC3) into the lower byte of R2
    MOV R9, #0x20005000 @ Load the target memory address into R9
    STRB R2, [R9]       @ Store the byte from R2 to the address in R9
```
*(Note: You could also use an immediate offset if the address was already in a register, e.g., `MOV R9, #0x20005000`, `STRB R2, [R9, #0]`. The provided answer is more direct for the specific address given.)*

---

**Question 3:**
Explain the difference between `STR R0, [R1, #4]` and `STR R0, [R1, #4]!`.

**Answer:**
*   `STR R0, [R1, #4]`: This instruction stores the value from `R0` to the memory address `R1 + 4`. The value of `R1` itself remains unchanged.
*   `STR R0, [R1, #4]!`: This instruction also stores the value from `R0` to the memory address `R1 + 4`. However, it additionally updates the base register `R1` by adding `4` to it, so `R1` will now hold `R1 + 4` after the instruction executes. This is the write-back feature.

---

**Question 4:**
You are working with an array of 16-bit integers (half-words). Register `R4` holds the base address of this array, register `R5` holds the index of the element you want to store, and register `R6` holds the 16-bit data. Write the ARM assembly code to store the data into the array element. Assume `R5` contains a valid index.

**Answer:**
```assembly
    @ Assume R4 = base address of array of half-words
    @ Assume R5 = index of element
    @ Assume R6 = data to store (lower 16 bits will be used)

    @ To access an element in an array of half-words (2 bytes),
    @ the offset is index * 2.
    @ 2 in binary is 10, so multiply by 2 is LSL #1.

    STRH R6, [R4, R5, LSL #1] @ Store the 16-bit data from R6 to array[R5]
```

---

**Question 5:**
Consider the following ARM assembly code snippet:

```assembly
    MOV R0, #0x11223344
    MOV R1, #0x20000000
    STR R0, [R1, #8]!
    MOV R2, #0xAABBCCDD
    STRB R2, [R1, #2]!
```

Assuming `R1` initially holds `0x20000000`, what will be the value of `R1` and what will be stored at memory addresses `0x20000008` and `0x2000000A` after this code executes?

**Answer:**

*   **First `STR` instruction:** `STR R0, [R1, #8]!`
    *   `R0` (value `0x11223344`) is stored at memory address `R1 + 8` (`0x20000000 + 8 = 0x20000008`).
    *   The `!` writes back to `R1`, so `R1` becomes `R1 + 8` (`0x20000000 + 8 = 0x20000008`).
    *   **Memory at `0x20000008`:** `0x11223344`

*   **Second `STRB` instruction:** `STRB R2, [R1, #2]!`
    *   `R2` (value `0xAABBCCDD`) is loaded.
    *   The lowest byte of `R2` (`0xDD`) is stored at memory address `R1 + 2` (`0x20000008 + 2 = 0x2000000A`).
    *   The `!` writes back to `R1`, so `R1` becomes `R1 + 2` (`0x20000008 + 2 = 0x2000000A`).
    *   **Memory at `0x2000000A`:** `0xDD`

**Final State:**
*   `R1` will hold `0x2000000A`.
*   Memory location `0x20000008` will contain `0x11223344`.
*   Memory location `0x2000000A` will contain `0xDD`.

---

This concludes the study notes on storing data from registers to memory in ARM assembly language programming. Remember to practice these instructions and addressing modes to build a strong foundation for embedded systems development.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
