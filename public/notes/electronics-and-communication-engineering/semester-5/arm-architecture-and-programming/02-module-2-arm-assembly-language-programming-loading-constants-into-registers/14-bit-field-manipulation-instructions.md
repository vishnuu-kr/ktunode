---
title: "bit field manipulation instructions"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaf6"
status: "completed"
scrapedAt: "2026-05-23T17:53:29.978Z"
---
# ARM Assembly Language Programming: Bit Field Manipulation Instructions

## Module 2: Loading Constants into Registers

**Topic:** Bit Field Manipulation Instructions

**Course Outcomes Addressed:**
*   **CO1:** Use the features of C that are frequently used in embedded systems (Knowledge Level: K3) - While this topic is assembly, understanding bit manipulation is crucial for implementing C features like bitwise operators, flags, and packed data structures.
*   **CO2:** Explain a programmer’s view of processor architecture (Knowledge Level: K2) - This topic directly exposes the programmer's view by detailing specific instructions that operate on bits within registers, demonstrating how the processor manipulates data at a granular level.
*   **CO3:** Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3) - Understanding the power and efficiency of assembly bit manipulation can inform decisions about when to drop down to assembly for performance-critical operations or direct hardware control, even when most of the system is in C.

**Learning Outcomes:**

*   Understand the purpose and functionality of bit field manipulation instructions.
*   Identify and explain common bit field manipulation instructions in ARM assembly.
*   Apply these instructions to extract, insert, and modify specific fields within a register.
*   Recognize the efficiency and necessity of bit field manipulation in embedded systems programming.

---

### 1. Introduction to Bit Field Manipulation

In embedded systems, data is often packed into fields within a larger register. This is done for efficiency, especially when dealing with hardware registers or data packets. Bit field manipulation instructions allow us to efficiently work with these individual fields without having to manually create masks and perform multiple shifts and logical operations.

**Key Concepts:**

*   **Bit Field:** A contiguous sequence of bits within a larger data word (e.g., a register).
*   **Register:** A small, fast storage location within the CPU.
*   **Masking:** Using bitwise AND operations with a carefully crafted bit pattern (mask) to isolate specific bits.
*   **Shifting:** Moving bits to the left or right.

**Why is Bit Field Manipulation Important?**

*   **Hardware Register Access:** Many embedded peripherals' control and status registers are designed with specific bit fields representing different settings or states.
*   **Data Compression and Packing:** Storing multiple smaller pieces of data in a single register to save memory and bandwidth.
*   **Efficient Flag Handling:** Managing individual status flags within a status register.
*   **Protocol Implementation:** Parsing and generating data for communication protocols often involves extracting or inserting specific bit fields.

---

### 2. Common Bit Field Manipulation Instructions

ARM processors, particularly those in the Cortex-M series, provide a rich set of instructions for bit field manipulation. These instructions are often more efficient than a sequence of shifts and logical operations.

**2.1 Bit Field Extraction Instructions**

These instructions are used to extract a specified bit field from a source register and place it into a destination register, often right-aligned and zero-extended.

*   **`UBFX` (Unsigned Bit Field Extract)**
    *   **Purpose:** Extracts an unsigned bit field from a source register, shifts it left to align the least significant bit of the field with the least significant bit of the destination register, and zero-extends the result.
    *   **Syntax:** `UBFX <Rd>, <Rn>, #<lsb>, #<width>`
        *   `<Rd>`: Destination register.
        *   `<Rn>`: Source register.
        *   `<lsb>`: The position of the least significant bit of the bit field to be extracted (0-31).
        *   `<width>`: The number of bits in the bit field to be extracted (1-32).
    *   **Example:** Extract a 4-bit field starting at bit position 2 from `R1` and place it in `R0`.
        ```assembly
        MOV R1, #0b11010110  // R1 = 0xD6 (Binary: 11010110)
        UBFX R0, R1, #2, #4  // Extract bits [5:2] from R1
        // R0 will become 0b00000101 (Decimal 5)
        // The field is 0101, shifted right to bit 0, zero-extended.
        ```
    *   **Reference:** Lewis (2e) likely covers basic register operations which lay the groundwork. Yiu (3e) in "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors" provides in-depth details on these specific instructions.

*   **`UXTH` (Unsigned Extend Halfword)**
    *   **Purpose:** Extracts the lower 16 bits (a halfword) from a source register, zero-extends it to 32 bits, and places it in the destination register.
    *   **Syntax:** `UXTH <Rd>, <Rn>`
    *   **Example:**
        ```assembly
        MOV R1, #0xFFFF00A5  // R1 = 0xFFFF00A5
        UXTH R0, R1         // Extract lower 16 bits of R1
        // R0 will become 0x000000A5
        ```
    *   **Note:** This is useful for accessing 16-bit data fields within a 32-bit register.

*   **`UXTB` (Unsigned Extend Byte)**
    *   **Purpose:** Extracts the lower 8 bits (a byte) from a source register, zero-extends it to 32 bits, and places it in the destination register.
    *   **Syntax:** `UXTB <Rd>, <Rn>`
    *   **Example:**
        ```assembly
        MOV R1, #0xFFFFFFA5  // R1 = 0xFFFFFFA5
        UXTB R0, R1         // Extract the lower 8 bits of R1
        // R0 will become 0x000000A5
        ```
    *   **Note:** Similar to `UXTH` but for byte-sized fields.

**2.2 Bit Field Insertion Instructions**

These instructions are used to insert a bit field from a source register into a specific position within a destination register.

*   **`BFI` (Bit Field Insert)**
    *   **Purpose:** Inserts a bit field from the most significant bits of a source register into a specified position within a destination register. The bits not covered by the inserted field in the destination register are left unchanged.
    *   **Syntax:** `BFI <Rd>, <Rn>, #<lsb>, #<width>`
        *   `<Rd>`: Destination register.
        *   `<Rn>`: Source register.
        *   `<lsb>`: The position of the least significant bit of the bit field to be inserted into the destination register (0-31).
        *   `<width>`: The number of bits in the bit field to be inserted (1-32).
    *   **Example:** Insert the lower 4 bits of `R1` into `R0` starting at bit position 3.
        ```assembly
        MOV R0, #0b11110000  // R0 = 0xF0
        MOV R1, #0b1010      // R1 = 0x0A (We want to insert 1010)
        BFI R0, R1, #3, #4   // Insert 4 bits from R1 into R0 starting at bit 3
        // The field from R1 is 1010.
        // In R0, bits [6:3] will be replaced by 1010.
        // R0 will become 0b11010000 (Decimal 0xD0)
        ```
    *   **Reference:** Yiu (3e) provides detailed examples of `BFI` for register manipulation.

*   **`SXTX` (Sign Extend Doubleword, 64-bit to 32-bit)**
    *   **Purpose:** This instruction is part of the Thumb-2 instruction set and is used to sign-extend a byte or halfword from a 64-bit source (implied in typical ARM context for 32-bit registers) into a 32-bit destination. For bit field manipulation specifically, it might be used implicitly when dealing with signed values.
    *   **Note:** While not a direct bit field insertion, understanding sign extension is related to how bit fields might be interpreted if they represent signed numbers.

**2.3 Bit Field Manipulation Instructions (Combined Extract & Insert)**

Some instructions combine extraction and insertion logic, or offer more complex bit manipulation.

*   **`SBFX` (Signed Bit Field Extract)**
    *   **Purpose:** Extracts a signed bit field from a source register, shifts it left to align the least significant bit of the field with the least significant bit of the destination register, and sign-extends the result.
    *   **Syntax:** `SBFX <Rd>, <Rn>, #<lsb>, #<width>`
    *   **Example:** Extract a 4-bit signed field starting at bit position 2 from `R1` and place it in `R0`, sign-extended.
        ```assembly
        MOV R1, #0b11111010  // R1 = 0xFA. The field at bits [5:2] is 1010. As signed 4-bit, this is -6.
        SBFX R0, R1, #2, #4  // Extract signed bits [5:2] from R1
        // R0 will become 0xFFFFFFFA (Decimal -6)
        // The field 1010 is sign-extended to 32 bits.
        ```

*   **`REV` (Reverse Bytes)**
    *   **Purpose:** Reverses the order of bytes within a 32-bit register.
    *   **Syntax:** `REV <Rd>, <Rn>`
    *   **Example:** If `R1` contains `0x12345678`, then `REV R0, R1` will result in `R0` being `0x78563412`.
    *   **Note:** Useful when dealing with different endianness or structured data.

*   **`REV16` (Reverse Halfwords)**
    *   **Purpose:** Reverses the order of 16-bit halfwords within a 32-bit register.
    *   **Syntax:** `REV16 <Rd>, <Rn>`
    *   **Example:** If `R1` contains `0x12345678`, then `REV16 R0, R1` will result in `R0` being `0x34127856`.

*   **`REVSH` (Reverse Halfword Signed)**
    *   **Purpose:** Reverses the order of bytes within the lower 16 bits of a 32-bit register and sign-extends the result to 32 bits.
    *   **Syntax:** `REVSH <Rd>, <Rn>`
    *   **Example:** If `R1` contains `0x00001234`, then `REVSH R0, R1` will result in `R0` being `0x00003412`.

---

### 3. Applying Bit Field Manipulation in C Context (CO1 & CO3)

While these are assembly instructions, they directly support C programming practices in embedded systems.

*   **Implementing Bitwise Operators:** The underlying logic of C's bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`) can be implemented very efficiently using ARM assembly. For instance, a C `x >> 3` might compile to an `LSR` (Logical Shift Right) or `ASR` (Arithmetic Shift Right) instruction, and a sequence for extracting a bit field `(value >> lsb) & ((1 << width) - 1)` would often be replaced by a single `UBFX` or `SBFX` by an optimizing compiler.

*   **Register Access in C:** When you interact with hardware registers in C, especially those with specific bit fields (e.g., in peripheral configuration registers), the compiler translates your C code into assembly. Understanding these assembly instructions helps you appreciate how efficiently such operations can be performed and why direct register manipulation in assembly might be preferred for performance-critical I/O.

    *   **Example (C code):**
        ```c
        volatile uint32_t* GPIO_PIN_REGISTER = (volatile uint32_t*)0x40020C00;
        uint32_t pin_config = *GPIO_PIN_REGISTER;
        uint8_t speed_setting = (pin_config >> 2) & 0x03; // Extract bits 3:2
        ```
    *   **Likely Assembly Translation:** The compiler might translate the extraction part `(pin_config >> 2) & 0x03` into an instruction like `UBFX R0, R_pin_config, #2, #2`.

*   **Choosing Assembly vs. C:** If you need to manipulate specific bits within a register with maximum efficiency, or if you are directly interfacing with hardware that uses compact bit fields, writing that small section in assembly might be beneficial. For example, rapidly toggling specific bits on a GPIO port for high-frequency signaling.

---

### 4. Practice Questions and Exercises

**Question 1:**
Given a register `R1` containing the value `0xABCDEF01`.
What will be the value of `R0` after executing the following instruction:
`UBFX R0, R1, #4, #8`
Explain your reasoning.

**Question 2:**
You have a 32-bit status register in `R2`. Bits 15 and 14 (field width 2) indicate the device mode.
Value in `R2` is `0x00004500`.
Write ARM assembly code to:
a) Extract the 2-bit mode field.
b) Insert a new mode value of `2` (binary `10`) into bits 15:14 of `R2`, leaving other bits unchanged. Assume the new mode value is already in `R3`.

**Question 3:**
If `R5` contains `0x0000FEDA`, what will `R0` contain after `REVSH R0, R5`?

---

### 5. Answers to Practice Questions

**Answer 1:**
*   **Explanation:** The instruction `UBFX R0, R1, #4, #8` extracts an 8-bit unsigned bit field from `R1` starting at bit position 4. The source value in `R1` is `0xABCDEF01`.
    *   Binary representation of `0xABCDEF01`: `1010 1011 1100 1101 1110 1111 0000 0001`
    *   The field starts at bit 4 (the 5th bit from the right). The 8 bits are: `1110 1111`.
    *   These 8 bits are then shifted right to align with bit 0 and zero-extended.
    *   The field `1110 1111` (decimal 239) becomes `0xEF`.
*   **Result:** `R0` will contain `0x000000EF`.

**Answer 2:**
*   **a) Extract the 2-bit mode field:**
    The mode field is at bits 15:14. We need to extract 2 bits starting from bit position 14.
    ```assembly
    MOV R2, #0x00004500    // Load example status register value
    UBFX R3, R2, #14, #2   // Extract the 2-bit field starting at bit 14 into R3
    // R3 will contain 0x00000001 (binary 01)
    ```
    **Explanation:** `UBFX R3, R2, #14, #2` takes 2 bits from `R2` starting at bit 14 and places them in `R3`, aligned to bit 0. In `0x00004500`, bits 15:14 are `01`.

*   **b) Insert a new mode value:**
    Assume the new mode value `2` (binary `10`) is in `R4`. We want to insert these 2 bits into `R2` starting at bit position 14.
    ```assembly
    MOV R2, #0x00004500    // Load example status register value
    MOV R4, #2             // Load the new mode value (0x02 or binary 10)
    BFI R2, R4, #14, #2    // Insert 2 bits from R4 into R2 starting at bit 14
    // R2 will now contain 0x0000A500 (binary 0b0000 1010 0101 0000 0000 0000)
    ```
    **Explanation:** `BFI R2, R4, #14, #2` takes the lower 2 bits from `R4` (which is `10`) and inserts them into `R2` starting at bit position 14. The original bits 15:14 in `R2` (`01`) are replaced by `10`.

**Answer 3:**
*   **Explanation:** `REVSH R0, R5` reverses the bytes within the lower 16 bits of `R5` and then sign-extends the result.
    *   `R5` = `0x0000FEDA`.
    *   Lower 16 bits of `R5` = `0xFEDA`.
    *   Reversing bytes in `0xFEDA` gives `0xADFE`.
    *   The instruction sign-extends this 16-bit value to 32 bits. `0xADFE` as a 16-bit signed number is negative (most significant bit is 1).
*   **Result:** `R0` will contain `0xFFFFADFE`.

---

### 6. Important Points to Remember

*   **Efficiency:** Bit field instructions are typically single-cycle operations, significantly more efficient than manually constructing masks and performing multiple shifts.
*   **Clarity:** They make the programmer's intent clearer when manipulating specific data fields within registers.
*   **`UBFX` vs. `SBFX`:** Use `UBFX` for unsigned bit fields and `SBFX` for signed bit fields to ensure correct interpretation and sign extension.
*   **`BFI` Destination:** The destination register `<Rd>` is modified by `BFI`. The bits not covered by the insertion remain unchanged.
*   **Context is Key:** Understanding the bit layout of hardware registers or packed data structures is crucial for correctly using these instructions.
*   **Compiler Optimization:** Modern compilers are adept at recognizing bit manipulation patterns in C and translating them into these efficient ARM instructions.

---

This concludes the study notes on bit field manipulation instructions. Refer to the specified textbooks for more detailed examples and explanations specific to the ARM Cortex-M architecture.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
