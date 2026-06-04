---
title: "translating C subscript expressions to assembly"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaef"
status: "completed"
scrapedAt: "2026-05-23T17:53:25.115Z"
---
# ARM Architecture and Programming - Module 2: ARM Assembly Language Programming

## Topic: Translating C Subscript Expressions to Assembly

This topic focuses on understanding how C array subscript expressions are translated into ARM assembly language. This is crucial for efficient embedded software development where direct memory manipulation is often required, aligning with Course Outcomes CO1 (using C features in embedded systems) and CO3 (choosing between C and assembly). Understanding this translation also contributes to CO2 by providing a programmer's view of how memory access works at a lower level.

---

### Learning Outcomes Covered:

*   Understand the structure of C subscript expressions (e.g., `array[index]`).
*   Identify the assembly instructions and addressing modes used to access array elements in ARM.
*   Translate simple C array access expressions into equivalent ARM assembly code.
*   Appreciate the role of register allocation in efficient array access.

---

### Key Concepts and Definitions:

*   **Array:** A contiguous block of memory that stores elements of the same data type.
*   **Subscript Expression:** A C expression used to access an element within an array, typically in the form `array_name[index]`.
*   **Base Address:** The memory address of the first element of an array.
*   **Element Size:** The size (in bytes) of each element in the array (e.g., 4 bytes for an `int`, 1 byte for a `char`).
*   **Offset:** The distance in bytes from the base address to the desired array element. The offset is calculated as `index * element_size`.
*   **ARM Addressing Modes:** ARM processors offer various ways to access memory, which are fundamental to translating subscript expressions. Key modes include:
    *   **Register Indirect:** Accessing memory at the address stored in a register.
    *   **Register Indirect with Offset:** Accessing memory at an address calculated by adding an immediate offset to the content of a register.
    *   **Register Indirect with Index (Post-indexed/Pre-indexed):** Accessing memory at an address calculated by adding the content of another register (the index register) to the content of the base address register. Post-indexed modifies the base register after access, while pre-indexed modifies it before.

---

### Understanding the C Subscript Expression `array[index]`

In C, the expression `array[index]` is fundamentally translated into accessing memory at a location determined by:

1.  **The base address of the array:** This is the memory location where the `array` starts.
2.  **The offset from the base address:** This is calculated based on the `index` and the `element_size`.
    *   `offset = index * element_size`

The memory address of the `index`-th element is therefore:

*   `address = base_address + (index * element_size)`

---

### Translating to ARM Assembly

When translating `array[index]` to ARM assembly, we need to:

1.  **Load the base address of the array into a register.**
2.  **Load the index into another register.**
3.  **Calculate the offset by multiplying the index by the element size.**
4.  **Calculate the final memory address.**
5.  **Use an appropriate ARM load/store instruction to access the memory location.**

Let's consider an example:

**C Code:**

```c
int data_array[10]; // Array of 10 integers
int index = 3;
int value;

// Accessing the element at index 3
value = data_array[index];
```

**Assumptions:**

*   `data_array` is allocated memory starting at address `0x20000000`.
*   `int` is 4 bytes.
*   The base address of `data_array` is loaded into register `R0`.
*   The `index` (value 3) is loaded into register `R1`.
*   We want to load the value into register `R2`.

**Assembly Translation Steps:**

1.  **Calculate the offset:** `offset = index * element_size`
    *   `offset = 3 * 4 = 12`

2.  **Calculate the memory address:** `address = base_address + offset`
    *   `address = 0x20000000 + 12 = 0x2000000C`

3.  **ARM Assembly Implementation:**

    We can achieve this using different ARM addressing modes.

    **Method 1: Using `LDR` with Register Indirect with Immediate Offset**

    This is a common and often efficient method.

    ```assembly
    ; Assume:
    ; R0 contains the base address of data_array (e.g., 0x20000000)
    ; R1 contains the index (e.g., 3)
    ; Element size is 4 bytes (for int)

    LDR R2, [R0, #12]   ; Load the value from memory address R0 + 12 into R2
                        ; (This assumes the offset is pre-calculated or known)
    ```

    **Explanation:**
    *   `LDR R2, [R0, #12]` : This instruction loads a word (32-bit value) into register `R2`. The memory address is calculated by taking the value in `R0` (the base address) and adding an immediate offset of `12`. This directly corresponds to `data_array[3]` where the offset is `3 * 4 = 12`.

    **Method 2: Using `LDR` with Register Indirect with Register Offset (and multiplication)**

    If the offset is not a constant or is more dynamically calculated, we can use register-based offsets.

    ```assembly
    ; Assume:
    ; R0 contains the base address of data_array (e.g., 0x20000000)
    ; R1 contains the index (e.g., 3)
    ; Element size is 4 bytes (for int)

    MOV R3, #4          ; Load the element size (4 bytes for int) into R3
    MUL R3, R1, R3      ; Multiply index (R1) by element size (R3), result in R3
                        ; Now R3 holds the offset (12)
    LDR R2, [R0, R3]    ; Load the value from memory address R0 + R3 into R2
    ```

    **Explanation:**
    *   `MOV R3, #4`: Loads the constant value 4 into register `R3`.
    *   `MUL R3, R1, R3`: Performs a multiplication of the value in `R1` (index) by the value in `R3` (element size). The result (the calculated offset) is stored back into `R3`.
    *   `LDR R2, [R0, R3]`: Loads a word into `R2` from the memory address obtained by adding the contents of `R0` (base address) and `R3` (calculated offset).

    **Method 3: Using `LDR` with Register Indirect with Index (Pre-indexed)**

    This mode is useful when you need to update the base address register for subsequent accesses.

    ```assembly
    ; Assume:
    ; R0 contains the base address of data_array (e.g., 0x20000000)
    ; R1 contains the index (e.g., 3)
    ; Element size is 4 bytes (for int)

    MOV R3, #4          ; Load the element size (4 bytes for int) into R3
    MUL R3, R1, R3      ; Multiply index (R1) by element size (R3), result in R3
                        ; Now R3 holds the offset (12)

    LDR R2, [R0, R3]!   ; Load the value from memory address R0 + R3 into R2.
                        ; The '!' indicates that R0 will be updated after the load.
                        ; R0 = R0 + R3
    ```

    **Explanation:**
    *   The `!` in `[R0, R3]!` signifies a **pre-indexed addressing mode**.
    *   The address is calculated as `R0 + R3`.
    *   The value is loaded into `R2` from this calculated address.
    *   **Crucially, after the load, the base address register `R0` is updated by adding the offset `R3` to it.** So, `R0` will now point to the memory location `0x20000000 + 12 = 0x2000000C`. This is useful if the next access is to `data_array[4]` and you want to reuse the base pointer.

    **Method 4: Using `LDR` with Register Indirect with Index (Post-indexed)**

    ```assembly
    ; Assume:
    ; R0 contains the base address of data_array (e.g., 0x20000000)
    ; R1 contains the index (e.g., 3)
    ; Element size is 4 bytes (for int)

    MOV R3, #4          ; Load the element size (4 bytes for int) into R3
    MUL R3, R1, R3      ; Multiply index (R1) by element size (R3), result in R3
                        ; Now R3 holds the offset (12)

    LDR R2, [R0], R3    ; Load the value from memory address R0 into R2.
                        ; After the load, R0 will be updated by adding R3 to it.
                        ; R0 = R0 + R3
    ```

    **Explanation:**
    *   The `[R0], R3` syntax signifies a **post-indexed addressing mode**.
    *   The value is loaded into `R2` from the address currently held in `R0`.
    *   **After the load, the base address register `R0` is updated by adding the value in `R3` (the offset) to it.** So, `R0` will now point to the memory location `0x20000000 + 12 = 0x2000000C`.

---

### Considerations for Different Data Types:

The `element_size` is critical.

*   **`char` (1 byte):** Use `LDRB` (Load Byte) or `STRB` (Store Byte). The offset is simply `index * 1`.
*   **`short` or `uint16_t` (2 bytes):** Use `LDRH` (Load Halfword) or `STRH` (Store Halfword). The offset is `index * 2`.
*   **`int` or `uint32_t` (4 bytes):** Use `LDR` (Load Word) or `STR` (Store Word). The offset is `index * 4`.

**Example: Accessing a byte array**

**C Code:**

```c
char char_array[10]; // Array of 10 characters
int index = 5;
char value;

value = char_array[index];
```

**Assumptions:**

*   `char_array` starts at `0x20000000`.
*   `char` is 1 byte.
*   Base address in `R0`, index in `R1` (value 5).
*   Target value into `R2`.

**Assembly Translation:**

```assembly
; Assume:
; R0 contains the base address of char_array (e.g., 0x20000000)
; R1 contains the index (e.g., 5)
; Element size is 1 byte (for char)

; Method 1: Direct offset for char
LDRB R2, [R0, R1]   ; Load the byte from memory address R0 + R1 into R2
                    ; Since R1 already holds the index, and element size is 1,
                    ; R0 + R1 is the correct offset.

; Method 2: Pre-calculated offset (less common for byte arrays if index is in a register)
; MOV R3, #1       ; Element size is 1
; MUL R3, R1, R3   ; Offset = index * 1 (R3 = R1)
; LDRB R2, [R0, R3]

; Method 3: Pre-indexed
; LDRB R2, [R0, R1]! ; Load byte, then R0 = R0 + R1
```

**Explanation:**
*   `LDRB R2, [R0, R1]` directly uses the `index` in `R1` as the offset from the base address in `R0` because the element size is 1 byte. This is a highly efficient addressing mode for byte arrays where the index is readily available.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### Textbook References:

*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W Lewis:**
    *   Lewis's textbook (Chapter 5: Memory Access) would cover the fundamental concepts of memory addressing modes in ARM, including register indirect, offset, and indexed addressing, which are directly applicable to translating subscript expressions. It would likely explain how these modes map to efficient array access.
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu:**
    *   Yiu's book is a deep dive into the ARM architecture. Chapter 4 "The ARM Instruction Set" and specifically sections on load/store instructions and addressing modes (like `LDR Rd, [Rn, #offset]`, `LDR Rd, [Rn, Rm]`, and indexed variations) would provide the precise details of the instructions and modes used for array access. Yiu's emphasis on performance would highlight why certain addressing modes are preferred.
*   **Embedded Systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu:**
    *   Zhu's book would likely bridge the gap between C and assembly for embedded systems. Chapters discussing memory organization, data types, and how C constructs map to assembly would be highly relevant. The examples of translating C code snippets into assembly for memory manipulation would directly address this topic.

---

### Relationship to Course Outcomes:

*   **CO1 (Use features of C in embedded systems - K3):** Understanding how C array access works at the assembly level helps in writing more efficient C code for embedded systems. Knowing the underlying mechanics allows for better anticipation of performance implications.
*   **CO2 (Explain programmer's view of processor architecture - K2):** This topic directly exposes the programmer's view of memory access, showing how logical array indexing in C translates to physical memory addresses and register operations in ARM assembly.
*   **CO3 (Choose between assembly or C - K3):** By understanding the translation, developers can make informed decisions. For simple, static array access, C is usually sufficient. For performance-critical loops or complex memory patterns, direct assembly can offer optimization. This knowledge informs the choice of programming level.

---

### Important Points to Remember:

*   **Array indexing in C is a high-level abstraction.** Under the hood, it's all about calculating a memory address and performing a load/store operation.
*   **The offset calculation `index * element_size` is key.** Always consider the data type of the array elements.
*   **ARM addressing modes are powerful tools.** Use them effectively to translate C subscript expressions efficiently.
*   **Register allocation is crucial.** Efficiently mapping array base addresses and indices to registers minimizes overhead.
*   **Pre-indexed and Post-indexed addressing modes** can be very useful for iterating through arrays, as they update the base pointer automatically.
*   **`LDRB` / `STRB` for bytes, `LDRH` / `STRH` for halfwords, `LDR` / `STR` for words** are the correct instructions for different data sizes.

---

### Practice Questions:

1.  **Question:** Given a C array `float temperatures[20];` where the base address is `0x10000000` and `float` is 4 bytes. If we want to access `temperatures[7]`, what is the memory address and what ARM assembly instruction(s) could be used to load the value into register `R5`? Assume the base address is in `R0` and the index `7` is in `R1`.

    **Answer:**
    *   **Memory Address:** `0x10000000 + (7 * 4) = 0x10000000 + 28 = 0x1000001C`
    *   **Assembly Instruction(s):**
        *   **Method 1 (Immediate Offset):**
            ```assembly
            LDR R5, [R0, #28] ; Load word from base address (R0) + 28 bytes
            ```
        *   **Method 2 (Register Offset):**
            ```assembly
            ; Assuming R0 has base address, R1 has index 7
            MOV R3, #4      ; Element size for float
            MUL R3, R1, R3  ; R3 = 7 * 4 = 28 (offset)
            LDR R5, [R0, R3]  ; Load word from base address (R0) + offset (R3)
            ```
        *   **Method 3 (Pre-indexed):**
            ```assembly
            ; Assuming R0 has base address, R1 has index 7
            MOV R3, #4      ; Element size for float
            MUL R3, R1, R3  ; R3 = 7 * 4 = 28 (offset)
            LDR R5, [R0, R3]! ; Load word from base address (R0) + offset (R3), then R0 = R0 + 28
            ```
        *   **Method 4 (Post-indexed):**
            ```assembly
            ; Assuming R0 has base address, R1 has index 7
            MOV R3, #4      ; Element size for float
            MUL R3, R1, R3  ; R3 = 7 * 4 = 28 (offset)
            LDR R5, [R0], R3  ; Load word from base address (R0), then R0 = R0 + 28
            ```

2.  **Question:** How does the assembly translation of `char_array[i]` differ from `int_array[i]` in terms of ARM instructions and potential offsets, assuming `i` is the same value in both cases?

    **Answer:**
    *   **Instruction:** For `char_array[i]`, you would use `LDRB` (Load Byte) or `STRB` (Store Byte) because `char` is 1 byte. For `int_array[i]`, you would use `LDR` (Load Word) or `STR` (Store Word) because `int` is typically 4 bytes.
    *   **Offset Calculation:**
        *   For `char_array[i]`, the offset is `i * 1` (simply `i`).
        *   For `int_array[i]`, the offset is `i * 4`.
    *   **Addressing Mode Usage:** When `i` is already in a register, `LDRB R_value, [R_base, R_index]` is often the most direct for `char_array[i]` as the index itself serves as the byte offset. For `int_array[i]`, you might need an additional `MUL` instruction to calculate `i * 4` if `i` is in a register, or use a pre-calculated immediate offset if `i` is a constant.

3.  **Question:** Explain the difference between pre-indexed and post-indexed addressing modes when accessing an array element, and when you might choose one over the other.

    **Answer:**
    *   **Pre-indexed:** `LDR Rd, [Rn, Rm]` (or with immediate offset) calculates the address as `Rn + Rm` (or `Rn + immediate`), loads the value into `Rd`, and *then* updates `Rn` by adding `Rm` (or the immediate offset) to it.
    *   **Post-indexed:** `LDR Rd, [Rn], Rm` (or with immediate offset) loads the value into `Rd` from the address currently in `Rn`, and *then* updates `Rn` by adding `Rm` (or the immediate offset) to it.
    *   **Choice:**
        *   You might choose **pre-indexed** if you need the *modified* base address immediately available for a subsequent operation that doesn't involve a load/store.
        *   You might choose **post-indexed** if the current base address is needed for another operation before it's updated, or if the structure of your loop naturally fits this pattern (load current, then advance pointer). Often, for simple array traversal, both can achieve similar results depending on how the loop counter and base pointer are managed.

---