---
title: "loading memory data into registers"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaea"
status: "completed"
scrapedAt: "2026-05-23T17:53:21.645Z"
---
# ARM Architecture and Programming: Module 2 - Arm Assembly Language Programming

## Topic: Loading Memory Data into Registers

This module focuses on fundamental assembly language programming techniques for ARM processors, specifically how to move data from memory locations into processor registers. This is a crucial step in most programs as processors operate on data held within registers.

---

### 1. Learning Outcomes Covered

By the end of this topic, you will be able to:

*   **Load data from memory into registers using various addressing modes.** (Related to CO2, CO3)
*   **Understand the role of memory addresses in accessing data.** (Related to CO2)
*   **Differentiate between different load instructions based on data size.** (Related to CO2)
*   **Utilize base register + offset addressing for efficient memory access.** (Related to CO2, CO3)
*   **Apply pre-indexed and post-indexed addressing modes.** (Related to CO2, CO3)
*   **Write simple assembly programs to move data from memory to registers.** (Related to CO1, CO3)

---

### 2. Key Concepts and Definitions

*   **Register:** A small, high-speed storage location within the CPU. ARM processors typically have a set of general-purpose registers (R0-R15).
*   **Memory:** The main storage area of a computer system where instructions and data are stored.
*   **Memory Address:** A unique identifier for each byte of memory.
*   **Data Transfer Instructions:** Instructions that move data between registers and memory.
*   **Load Instruction:** An instruction that retrieves data from memory and places it into a register.
*   **Store Instruction:** An instruction that writes data from a register to a memory location. (While not the primary focus of this topic, it's the counterpart to load).
*   **Addressing Mode:** The method by which the operand for an instruction is specified. This dictates how the memory address is calculated.
*   **Word:** Typically 32 bits (4 bytes) on ARM Cortex-M processors.
*   **Halfword:** 16 bits (2 bytes).
*   **Byte:** 8 bits (1 byte).

---

### 3. Load Instructions in ARM Assembly

The primary instructions for loading data from memory into registers are:

*   **`LDR` (Load Register):** Used for loading 32-bit words (and sometimes 16-bit halfwords or 8-bit bytes depending on the specific variant and syntax).
*   **`LDRH` (Load Register Halfword):** Specifically used for loading 16-bit halfwords.
*   **`LDRB` (Load Register Byte):** Specifically used for loading 8-bit bytes.

**General Syntax:**

```assembly
<instruction> <destination_register>, [<base_register> {, <offset>}]
```

Where:
*   `<instruction>`: `LDR`, `LDRH`, or `LDRB`.
*   `<destination_register>`: The register where the loaded data will be placed.
*   `<base_register>`: A register containing the base memory address.
*   `<offset>`: An optional value that is added to the base register to calculate the final memory address.

---

### 4. Addressing Modes for Loading Memory Data

The flexibility of ARM assembly comes from its various addressing modes, which allow efficient calculation of memory addresses.

#### 4.1. Immediate Offset (Pre-indexed)

The offset is a constant value. The memory address is calculated as `Base Register + Offset`.

*   **Syntax:** `LDR Rd, [Rn, #offset]`

*   **Description:** The `LDR` instruction reads a word from the memory address calculated by adding the immediate offset to the value in register `Rn`. The result is placed in register `Rd`. The base register `Rn` is **not** modified by this operation.

*   **Example:** Load a word from memory address `0x20000000 + 8` into `R0`. Assume `R1` holds `0x20000000`.

    ```assembly
    MOV R1, #0x20000000  ; Load base address into R1
    LDR R0, [R1, #8]     ; Load word from address (R1 + 8) into R0
    ```

*   **Textbook Reference:**
    *   *Fundamentals of Embedded Software with the ARM Cortex M3* by Daniel W Lewis (2015) discusses basic register operations and memory access in Chapter 3, introducing simple load instructions.
    *   *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors* by Joseph Yiu (2014) provides a comprehensive overview of addressing modes in Chapter 4, including immediate offsets.

#### 4.2. Register Offset (Pre-indexed)

The offset is the value held in another register.

*   **Syntax:** `LDR Rd, [Rn, Rm]`

*   **Description:** The `LDR` instruction reads a word from the memory address calculated by adding the value in register `Rm` to the value in register `Rn`. The result is placed in register `Rd`. Neither `Rn` nor `Rm` is modified.

*   **Example:** Load a word from memory address `0x20000000 + 4` into `R0`. Assume `R1` holds `0x20000000` and `R2` holds `4`.

    ```assembly
    MOV R1, #0x20000000  ; Load base address into R1
    MOV R2, #4           ; Load offset into R2
    LDR R0, [R1, R2]     ; Load word from address (R1 + R2) into R0
    ```

#### 4.3. Pre-indexed with Address Update (Write-back)

This mode performs the load and then updates the base register with the calculated address.

*   **Syntax:** `LDR Rd, [Rn, #offset]!` or `LDR Rd, [Rn, Rm]!`

*   **Description:** The memory address is calculated as `Rn + offset` (or `Rn + Rm`). The data is loaded into `Rd`. Crucially, the base register `Rn` is **updated** with this calculated address after the load operation. The `!` symbol signifies this write-back.

*   **Example:** Load a word from memory address `0x20000000 + 8` into `R0`, and update `R1` to contain `0x20000008`. Assume `R1` holds `0x20000000`.

    ```assembly
    MOV R1, #0x20000000  ; Load base address into R1
    LDR R0, [R1, #8]!    ; Load word from (R1 + 8) into R0, then update R1 with (R1 + 8)
    ```
    After this instruction, `R0` will contain the data from `0x20000008`, and `R1` will contain `0x20000008`.

*   **Textbook Reference:**
    *   *Embedded systems with ARM Cortex M Microcontrollers in Assembly and C* by Yifeng Zhu (2018) covers indexed addressing and write-back functionality in its chapters on ARM assembly programming.

#### 4.4. Post-indexed

The load occurs using the address in the base register, and then the base register is updated.

*   **Syntax:** `LDR Rd, [Rn], #offset` or `LDR Rd, [Rn], Rm`

*   **Description:** The `LDR` instruction first loads the word from the memory address currently held in `Rn` into `Rd`. **After** the load operation, the base register `Rn` is updated by adding the offset (either immediate or from register `Rm`).

*   **Example:** Load a word from memory address `0x20000000` into `R0`, and then update `R1` to contain `0x20000004`. Assume `R1` holds `0x20000000`.

    ```assembly
    MOV R1, #0x20000000  ; Load base address into R1
    LDR R0, [R1], #4     ; Load word from R1 into R0, then update R1 with (R1 + 4)
    ```
    After this instruction, `R0` will contain the data from `0x20000000`, and `R1` will contain `0x20000004`.

*   **Key Difference from Pre-indexed with Update:** The address used for the load is the *original* value of the base register.

#### 4.5. Loading Different Data Sizes

*   **Loading Bytes (`LDRB`):** Loads an 8-bit byte from memory. The byte is zero-extended into the destination register (the upper 24 bits are filled with zeros).

    *   **Syntax:** `LDRB Rd, [Rn, #offset]`

    *   **Example:** Load a byte from memory address `0x20000000 + 5` into `R0`. Assume `R1` holds `0x20000000`.

        ```assembly
        MOV R1, #0x20000000
        LDRB R0, [R1, #5]  ; Load byte from (R1 + 5) into R0 (zero-extended)
        ```

*   **Loading Halfwords (`LDRH`):** Loads a 16-bit halfword from memory. The halfword is zero-extended into the destination register (the upper 16 bits are filled with zeros).

    *   **Syntax:** `LDRH Rd, [Rn, #offset]`

    *   **Example:** Load a halfword from memory address `0x20000000 + 2` into `R0`. Assume `R1` holds `0x20000000`.

        ```assembly
        MOV R1, #0x20000000
        LDRH R0, [R1, #2]  ; Load halfword from (R1 + 2) into R0 (zero-extended)
        ```

*   **Important Note:** For signed byte/halfword loads, use `LDRSB` and `LDRSH` respectively. These instructions sign-extend the loaded value.

    *   `LDRSB Rd, [Rn, #offset]` (Loads a byte and sign-extends it)
    *   `LDRSH Rd, [Rn, #offset]` (Loads a halfword and sign-extends it)

*   **Textbook Reference:**
    *   Lewis (2015) and Yiu (2014) both detail the `LDRB`, `LDRH`, `LDRSB`, and `LDRSH` instructions and their behavior with respect to zero-extension and sign-extension.

#### 4.6. PC-Relative Addressing (for constants and literals)

While this topic is about loading *memory data*, `LDR` can also be used to load constants that are placed in memory as "literals" by the assembler. This uses the program counter (`PC`) as the base register.

*   **Syntax:** `LDR Rd, Label` or `LDR Rd, =constant_value`

*   **Description:** The assembler places the `constant_value` at a location near the current instruction. The `LDR` instruction then calculates the address of this literal pool using the PC and loads the value into `Rd`. This is a common way to load immediate values larger than what can be encoded directly in an instruction.

*   **Example:** Load the value `0x12345678` into `R0`.

    ```assembly
    LDR R0, =0x12345678 ; Assembler places 0x12345678 in a literal pool
                       ; and generates PC-relative LDR to load it.
    ```

*   **Textbook Reference:**
    *   This is a critical concept for efficient ARM programming and is well-covered in all referenced textbooks, particularly in sections discussing data access and assembler directives. Yiu (2014) dedicates significant attention to PC-relative addressing.

---

### 5. Practice Questions and Exercises

**Instructions:** For each question, write the ARM assembly code snippet to perform the described operation. Assume necessary registers are initialized.

**Question 1:**
Load a 32-bit word from memory address `0x20001000 + 12` into register `R3`. Base address `0x20001000` is in register `R4`. Use immediate offset addressing.

**Question 2:**
Load a 16-bit halfword from memory address `0x20001000 + 6` into register `R5`. Base address `0x20001000` is in register `R4`. Use register offset addressing, with the offset `6` in register `R6`.

**Question 3:**
Load a 32-bit word from memory address `0x20001000 + 20` into register `R0`, and then update register `R4` to contain the address `0x20001020`. Base address `0x20001000` is in register `R4`. Use pre-indexed addressing with write-back.

**Question 4:**
Load a 32-bit word from memory address `0x20001000` into register `R1`, and then update register `R4` to contain the address `0x20001000 + 4`. Base address `0x20001000` is in register `R4`. Use post-indexed addressing with an immediate offset of `4`.

**Question 5:**
Load a single byte from memory address `0x20001000 + 7` into register `R2`. Base address `0x20001000` is in register `R4`. The loaded byte should be zero-extended into `R2`.

**Question 6:**
Load the value `0xAABBCCDD` into register `R7` using PC-relative addressing.

---

### 6. Answers to Practice Questions

**Question 1:**
```assembly
MOV R4, #0x20001000  ; Initialize R4 with base address
LDR R3, [R4, #12]    ; Load word from [R4 + 12] into R3
```

**Question 2:**
```assembly
MOV R4, #0x20001000  ; Initialize R4 with base address
MOV R6, #6           ; Initialize R6 with offset
LDRH R5, [R4, R6]    ; Load halfword from [R4 + R6] into R5
```

**Question 3:**
```assembly
MOV R4, #0x20001000  ; Initialize R4 with base address
LDR R0, [R4, #20]!   ; Load word from [R4 + 20] into R0, then update R4 with [R4 + 20]
```

**Question 4:**
```assembly
MOV R4, #0x20001000  ; Initialize R4 with base address
LDR R1, [R4], #4     ; Load word from R4 into R1, then update R4 with [R4 + 4]
```

**Question 5:**
```assembly
MOV R4, #0x20001000  ; Initialize R4 with base address
LDRB R2, [R4, #7]    ; Load byte from [R4 + 7] into R2 (zero-extended)
```

**Question 6:**
```assembly
LDR R7, =0xAABBCCDD  ; Load the immediate value using PC-relative addressing
```

---

### 7. Important Points to Remember

*   **Instruction Choice:** Always use the appropriate load instruction (`LDR`, `LDRH`, `LDRB`) based on the size of the data you intend to load.
*   **Zero vs. Sign Extension:** Be aware of whether you need zero-extension (`LDRB`, `LDRH`) or sign-extension (`LDRSB`, `LDRSH`) when loading bytes or halfwords.
*   **Addressing Mode Impact:** Understand how each addressing mode affects the calculated memory address and whether the base register is updated.
*   **`!` for Write-back:** The exclamation mark (`!`) is crucial for indicating that the base register should be updated after the operation in pre-indexed addressing.
*   **Post-indexed Behavior:** Remember that post-indexed addressing uses the *original* value of the base register for the load operation, and then updates the base register.
*   **Literal Pools:** `LDR Rd, =value` is an efficient way to load immediate values that cannot be directly encoded into instructions. The assembler handles the details of placing the constant in memory.
*   **Register Usage:** Always ensure your base registers contain valid memory addresses and that your destination registers are chosen to avoid overwriting essential data.

---

### 8. Alignment

For optimal performance on ARM Cortex-M processors, data accesses should be aligned.

*   **Word accesses (32-bit):** Should be aligned to a 4-byte boundary.
*   **Halfword accesses (16-bit):** Should be aligned to a 2-byte boundary.
*   **Byte accesses (8-bit):** Are always aligned.

While the processor might handle unaligned accesses (often with a performance penalty or by generating a fault), it's good practice to align data in memory when possible. The load instructions (`LDR`, `LDRH`, `LDRB`) themselves can handle accessing unaligned data, but the performance implications should be considered.

*   **Textbook Reference:** Yiu (2014) extensively discusses memory alignment and its performance impact on Cortex-M processors.

---

### 9. Alignment with Course Outcomes

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
    *   This topic directly supports CO1 by providing the underlying assembly knowledge of how data is moved. Understanding these assembly operations is crucial for appreciating how C compilers generate code for memory access. For example, when you access an array element `myArray[i]`, the compiler translates this into assembly load instructions using one of the learned addressing modes.

*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
    *   This topic is a core component of explaining the programmer's view. It directly addresses how data is fetched from memory into the CPU's working storage (registers) and introduces the critical concepts of memory addressing and different data types. The various addressing modes reveal the flexibility and power of the ARM architecture.

*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
    *   By understanding the direct control and efficiency offered by assembly load instructions, students can begin to make informed decisions about when assembly might be preferred (e.g., for performance-critical sections, direct hardware interaction, or very specific memory manipulation) versus when the abstraction and ease of use of C are more suitable. This topic lays the groundwork for comparing assembly implementations to their C equivalents.

---
This concludes the study notes for loading memory data into registers. Remember to practice writing and assembling these instructions to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
