---
title: "translating structure references to assembly"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaf0"
status: "completed"
scrapedAt: "2026-05-23T17:53:25.807Z"
---
# ARM Architecture and Programming: Module 2 - Arm Assembly Language Programming: Loading Constants into Registers

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## Topic: Translating Structure References to Assembly

**Learning Outcomes Covered:**

*   Translate C structure references to ARM assembly language.
*   Understand how memory addresses and offsets are used to access structure members in assembly.
*   Explain the impact of data alignment on memory access and structure layout.
*   Demonstrate the ability to load and use structure members in ARM assembly.

**Course Outcomes Alignment:**

*   **CO1 (K3):** This topic directly addresses how C features (structures) are translated into lower-level assembly, enabling a deeper understanding of how C code interacts with the processor.
*   **CO2 (K2):** Understanding structure references in assembly reinforces the programmer's view of the processor's memory access mechanisms, including registers, base addresses, and offsets.
*   **CO3 (K3):** By learning to translate structure references, developers can make informed decisions about when to use C for complex data structures and when direct assembly manipulation might be more efficient for specific access patterns.

---

### 1. Introduction to Structures in C

**Key Concepts:**

*   **Structure:** A user-defined data type that groups together variables of different data types under a single name. This allows for logical organization of related data.
*   **Members:** Individual variables within a structure.
*   **Offset:** The distance in bytes from the beginning of the structure to a specific member.

**Textbook Reference:**

*   **Lewis (2e):** Chapter 5 "Data Structures" discusses how C structures are organized in memory, which is fundamental to understanding their assembly translation.

**Example (C):**

```c
struct SensorData {
    int timestamp;     // 4 bytes
    float reading;     // 4 bytes
    unsigned char status; // 1 byte
};
```

In this example, `SensorData` is a structure with three members: `timestamp`, `reading`, and `status`.

---

### 2. Memory Layout of Structures

**Key Concepts:**

*   **Sequential Allocation:** Members of a structure are typically allocated in memory sequentially in the order they are declared.
*   **Padding:** The compiler may insert unused bytes (padding) between structure members to ensure that each member is aligned to a specific memory address boundary. This improves performance on many processors.
*   **Alignment:** The requirement that data of a certain size must start at a memory address that is a multiple of that size. For example, a 4-byte integer might need to be aligned on a 4-byte boundary.
*   **Structure Size:** The total size of a structure includes the size of all its members plus any padding.

**Textbook/Reference Book Content:**

*   **Lewis (2e) & Yiu (3e):** Both textbooks extensively discuss memory layout and data alignment. Yiu's "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors" is particularly strong on processor-specific alignment requirements and their impact on performance.
*   **Zhu (3e):** Also covers memory organization and the impact of data types on memory usage.

**Example (Illustrative Memory Layout with Alignment):**

Let's consider the `SensorData` structure again, assuming a typical ARM Cortex-M processor where `int` is 4 bytes, `float` is 4 bytes, and `unsigned char` is 1 byte, and assuming 4-byte alignment for `int` and `float`.

```
struct SensorData {
    int timestamp;     // Offset 0 (4 bytes) - Aligned to 4-byte boundary
    float reading;     // Offset 4 (4 bytes) - Aligned to 4-byte boundary
    unsigned char status; // Offset 8 (1 byte) - No padding needed before it for typical alignment
                         // Compiler might add padding at the end for overall structure alignment
};
```

In this scenario:

*   `timestamp` starts at offset 0.
*   `reading` starts at offset 4.
*   `status` starts at offset 8.
*   The total size of the structure might be 12 bytes if the compiler adds padding at the end to make the total size a multiple of 4.

**Important Point to Remember:** The exact padding and total structure size can vary depending on the compiler, target architecture, and compiler options. It's crucial to understand the alignment rules for your specific target.

---

### 3. Translating Structure References to Assembly

**Key Concepts:**

*   **Base Address:** The memory address where the structure begins.
*   **Offset Calculation:** To access a member, we need its base address and its offset within the structure.
*   **Load/Store Instructions:** ARM assembly uses instructions like `LDR` (Load Register) and `STR` (Store Register) to move data between memory and registers.
*   **Register Usage:** Registers are used to hold the base address of the structure and the loaded/stored member values.

**Steps for Translation:**

1.  **Determine the Base Address:** The base address of the structure will typically be stored in a register (e.g., `R0`, `R1`).
2.  **Calculate Member Address:** The address of a specific member is calculated as `Base Address + Offset`.
3.  **Load/Store the Member:** Use `LDR` or `STR` with an offset to access the member. The syntax for `LDR` with an offset is `LDR <destination_register>, [<base_address_register>, #<offset>]`.

**Example (Accessing `timestamp` from `SensorData`):**

Assume the `SensorData` structure is located at memory address `0x2000`.
Assume the base address of the structure is loaded into `R0`.

```c
// C code accessing timestamp
struct SensorData data_instance;
int ts_value = data_instance.timestamp;
```

**Assembly Translation:**

```assembly
    .syntax unified
    .cpu cortex-m3
    .thumb

    .section .data
SensorData_Base:
    .word 0x12345678  @ Dummy data for timestamp
    .word 0x3F800000  @ Dummy data for reading (float 1.0)
    .byte 0x01        @ Dummy data for status

    .section .text
    .global main

main:
    ldr r0, =SensorData_Base  @ Load the base address of SensorData into R0

    @ Accessing the timestamp member (offset 0)
    ldr r1, [r0, #0]          @ Load the value at [R0 + 0] (timestamp) into R1

    @ Now R1 holds the timestamp value (0x12345678)

    @ Accessing the reading member (offset 4)
    ldr r2, [r0, #4]          @ Load the value at [R0 + 4] (reading) into R2

    @ Accessing the status member (offset 8)
    ldr r3, [r0, #8]          @ Load the byte at [R0 + 8] (status) into R3
                              @ Note: LDR can load a word, but the byte will be in the LSB of R3.
                              @ For byte access, LDRB might be preferred, but LDR works if we handle it.

    @ Example: Storing a new timestamp
    mov r4, #0xAABBCCDD      @ New timestamp value
    str r4, [r0, #0]          @ Store the value in R4 to [R0 + 0] (timestamp)

    @ Example: Storing a new status
    mov r5, #0xFF             @ New status value
    strb r5, [r0, #8]         @ Store the byte in R5 to [R0 + 8] (status)


    @ Infinite loop to halt execution
halt:
    b halt

    .end
```

**Explanation:**

*   `ldr r0, =SensorData_Base`: This pseudo-instruction loads the address of the `SensorData_Base` label into register `R0`. This `R0` now holds the base address of our structure.
*   `ldr r1, [r0, #0]`: This instruction loads a 32-bit word from the memory location pointed to by the sum of the address in `R0` and the immediate offset `#0`. This effectively loads the `timestamp` member.
*   `ldr r2, [r0, #4]`: Loads a word from the memory location `R0 + 4`, accessing the `reading` member.
*   `ldr r3, [r0, #8]`: Loads a word from the memory location `R0 + 8`. Since `status` is a byte, only the least significant byte of the loaded word will contain the `status` value.
*   `str r4, [r0, #0]`: Stores the 32-bit value from register `R4` into the memory location `R0 + 0`.
*   `strb r5, [r0, #8]`: Stores the byte value from register `R5` into the memory location `R0 + 8`. `STRB` is specifically for byte stores.

**Important Point to Remember:** When accessing individual members, always consider their data types and use the appropriate load/store instructions (`LDR`, `LDRB`, `LDRH`, `STR`, `STRB`, `STRH`).

---

### 4. Handling Different Data Types and Alignment in Assembly

**Key Concepts:**

*   **Byte Access (`LDRB`, `STRB`):** Used for `char` or `unsigned char` members.
*   **Halfword Access (`LDRH`, `STRH`):** Used for `short` or `unsigned short` members (typically 2 bytes).
*   **Word Access (`LDR`, `STR`):** Used for `int`, `long`, `float`, or pointers (typically 4 bytes).
*   **Alignment Requirements:** Accessing misaligned data can cause exceptions or performance degradation on some ARM architectures. The Cortex-M series generally handles misaligned access, but it might incur a performance penalty. It's good practice to respect alignment.

**Example (Structure with Mixed Data Types and Alignment Considerations):**

```c
struct Config {
    unsigned short id;          // Offset 0 (2 bytes) - Aligned to 2-byte boundary
    unsigned int flags;         // Offset 2 (2 bytes padding) + Offset 4 (4 bytes) - Aligned to 4-byte boundary
    unsigned char mode;         // Offset 8 (1 byte)
                                // Offset 9, 10, 11 (3 bytes padding for overall 4-byte alignment)
};
```

Memory Layout (typical 4-byte alignment for words):

```
struct Config {
    unsigned short id;          // Offset 0 (2 bytes)
                                // Offset 2 (2 bytes padding)
    unsigned int flags;         // Offset 4 (4 bytes)
    unsigned char mode;         // Offset 8 (1 byte)
                                // Offset 9 (3 bytes padding)
};
// Total size = 12 bytes
```

**Assembly Translation:**

Assume the base address of `Config` is in `R0`.

```assembly
    .syntax unified
    .cpu cortex-m3
    .thumb

    .section .data
Config_Base:
    .hword 0xABCD      @ Dummy data for id
    .word 0x12345678  @ Dummy data for flags
    .byte 0xEF        @ Dummy data for mode

    .section .text
    .global access_config

access_config:
    ldr r0, =Config_Base      @ Load base address of Config into R0

    @ Accessing 'id' (offset 0, 2 bytes)
    ldrh r1, [r0, #0]         @ Load halfword (2 bytes) into R1

    @ Accessing 'flags' (offset 4, 4 bytes)
    ldr r2, [r0, #4]          @ Load word (4 bytes) into R2

    @ Accessing 'mode' (offset 8, 1 byte)
    ldrb r3, [r0, #8]         @ Load byte (1 byte) into R3

    @ Storing a new 'id'
    mov r4, #0x1122
    strh r4, [r0, #0]         @ Store halfword into 'id'

    @ Storing a new 'flags'
    mov r5, #0x98765432
    str r2, [r0, #4]          @ Store word into 'flags' (Mistake in example, should be str r5)
    str r5, [r0, #4]          @ Corrected: Store word into 'flags'

    @ Storing a new 'mode'
    mov r6, #0xAA
    strb r6, [r0, #8]         @ Store byte into 'mode'

    bx lr                     @ Return from function

    .end
```

**Important Considerations:**

*   **Compiler Behavior:** Always consult your compiler's documentation regarding structure packing and alignment options. Some compilers provide pragmas or attributes to control padding (e.g., `__attribute__((packed))` in GCC).
*   **Performance:** While misaligned access might be handled, it can be slower. Designing structures with alignment in mind is generally good practice for performance-critical code.
*   **Portability:** Structure padding and size can differ between architectures and compilers. Relying on specific padding behavior can make code less portable.

---

### 5. Advanced Structure Referencing (Arrays of Structures, Pointers to Structures)

**Key Concepts:**

*   **Arrays of Structures:** A collection of structures of the same type. Accessing an element requires calculating the base address of the desired structure within the array.
*   **Pointers to Structures:** A pointer variable that stores the memory address of a structure. This allows for indirect access.

**Example (Array of Structures):**

```c
struct Point {
    int x; // Offset 0
    int y; // Offset 4
};

struct Point path[3]; // An array of 3 Point structures
```

Memory Layout:
`path[0]` at address `Base`
`path[1]` at address `Base + sizeof(struct Point)`
`path[2]` at address `Base + 2 * sizeof(struct Point)`

`sizeof(struct Point)` = 8 bytes (assuming 4-byte alignment for `int` and no padding at the end).

**Assembly Translation (Accessing `path[1].x`):**

Assume `path` is located at `0x3000`, and its base address is in `R0`.

```assembly
    .syntax unified
    .cpu cortex-m3
    .thumb

    .section .data
path_array:
    .word 10 @ path[0].x
    .word 20 @ path[0].y
    .word 30 @ path[1].x
    .word 40 @ path[1].y
    .word 50 @ path[2].x
    .word 60 @ path[2].y

    .section .text
    .global access_path_element

access_path_element:
    ldr r0, =path_array       @ Load base address of path array into R0

    @ Calculate address of path[1]
    @ offset_of_path1 = 1 * sizeof(struct Point)
    @ sizeof(struct Point) = 8 bytes
    mov r1, #1                @ Index of the element we want (path[1])
    mov r2, #8                @ Size of one struct Point
    mul r1, r1, r2            @ Calculate offset: 1 * 8 = 8 bytes

    @ Address of path[1] = R0 + R1 (which is R0 + 8)

    @ Accessing path[1].x (offset 0 within path[1])
    @ The address of path[1].x is (Base Address of path) + (Offset to path[1]) + (Offset to x within path[1])
    @ address = R0 + R1 + 0
    ldr r3, [r0, r1, LSL #0]  @ Load path[1].x into R3.
                              @ LSL #0 is identity, equivalent to [r0, r1] for clarity

    @ Accessing path[1].y (offset 4 within path[1])
    @ The address of path[1].y is (Base Address of path) + (Offset to path[1]) + (Offset to y within path[1])
    @ address = R0 + R1 + 4
    ldr r4, [r0, r1, LSL #0]  @ Load base address of path[1] into R0 (mistake in variable usage, should be R0+R1)
    ldr r4, [r0, r1]          @ Load address of path[1] into R0
    ldr r4, [r0, #4]          @ Load path[1].y into R4.

    @ Corrected Assembly for accessing path[1].x and path[1].y
    ldr r0, =path_array       @ Load base address of path array into R0
    mov r1, #8                @ Offset to path[1] (1 * sizeof(struct Point))
    ldr r3, [r0, r1]          @ Load path[1].x (offset 0 from start of path[1]) into R3
    ldr r4, [r0, r1, LSL #0]  @ Load address of path[1] into R0 (error again, reuse R0 is fine)
    ldr r4, [r0, r1]          @ Load base address of path[1] into R0
    ldr r4, [r0, #4]          @ Load path[1].y (offset 4 from start of path[1]) into R4

    @ Let's simplify this with pre-calculated offsets and proper register usage.
    ldr r0, =path_array       @ Base address of path array
    mov r1, #8                @ Offset to path[1]
    add r2, r0, r1            @ Address of path[1] is now in R2

    @ Accessing path[1].x (offset 0 within path[1])
    ldr r3, [r2, #0]          @ Load path[1].x into R3

    @ Accessing path[1].y (offset 4 within path[1])
    ldr r4, [r2, #4]          @ Load path[1].y into R4

    bx lr
    .end
```

**Key Technique for Arrays of Structures:**

The address of the Nth element of an array of structures is:
`Base Address of Array + N * sizeof(Structure)`

And then access members using their offsets from this Nth element's base address.

---

### 6. Practice Questions and Exercises

**Question 1:**

Consider the following C structure:

```c
struct DeviceConfig {
    unsigned char enable;    // Offset 0
    int settings;            // Offset 4 (assuming padding for alignment)
    unsigned short period;   // Offset 8 (assuming padding for alignment)
};
```

Assume `sizeof(struct DeviceConfig)` is 12 bytes. If the base address of a `DeviceConfig` structure is loaded into register `R5`, write ARM assembly instructions to:

a.  Load the `enable` member into register `R0`.
b.  Load the `settings` member into register `R1`.
c.  Load the `period` member into register `R2`.
d.  Store the value `0xAA` from register `R3` into the `enable` member.
e.  Store the value `0x12345678` from register `R4` into the `settings` member.

**Answer 1:**

```assembly
    .syntax unified
    .cpu cortex-m3
    .thumb

    .section .text
    .global access_device_config

access_device_config:
    ldr r5, =0xDEADBEEF   @ Assume R5 holds the base address of DeviceConfig

    @ a. Load 'enable' into R0
    ldrb r0, [r5, #0]     @ Load byte from R5 + 0

    @ b. Load 'settings' into R1
    ldr r1, [r5, #4]      @ Load word from R5 + 4

    @ c. Load 'period' into R2
    ldrh r2, [r5, #8]     @ Load halfword from R5 + 8

    @ d. Store 0xAA from R3 into 'enable'
    mov r3, #0xAA
    strb r3, [r5, #0]     @ Store byte into R5 + 0

    @ e. Store 0x12345678 from R4 into 'settings'
    mov r4, #0x12345678
    str r4, [r5, #4]      @ Store word into R5 + 4

    bx lr
    .end
```

---

### 7. Summary and Key Takeaways

*   **Structures:** C structures provide a way to group related data.
*   **Memory Layout:** Structures are laid out sequentially in memory, with potential for padding to ensure alignment.
*   **Alignment:** Data types have alignment requirements that influence memory layout and can affect performance.
*   **Assembly Access:** Accessing structure members in assembly involves using the structure's base address and the member's offset.
*   **Instruction Choice:** Select appropriate `LDR`/`STR` variants (`LDR`, `LDRB`, `LDRH`, `STR`, `STRB`, `STRH`) based on the data type size.
*   **Arrays of Structures:** Accessing elements of an array of structures requires calculating the offset to the desired structure instance before accessing its members.

---

This comprehensive set of notes covers the translation of C structure references to ARM assembly language, emphasizing memory layout, alignment, instruction usage, and practical examples. It aligns with the specified course outcomes by illustrating how C constructs map to processor operations, aiding in understanding the programmer's view of the architecture and informed choices between C and assembly.