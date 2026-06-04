---
title: "Memory addressing examples: translating C pointer expressions to assembly"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 2: Arm assembly language programming: Loading constants into registers"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feaee"
status: "completed"
scrapedAt: "2026-05-23T17:53:24.420Z"
---
# ARM Architecture and Programming: Module 2 - ARM Assembly Language Programming

## Topic: Memory Addressing Examples: Translating C Pointer Expressions to Assembly

This module focuses on understanding how C pointer expressions, a fundamental concept in embedded systems programming, are translated into ARM assembly language. We will explore various memory addressing modes and their corresponding assembly instructions, drawing upon insights from our core textbooks.

---

### 1. Understanding C Pointers and Memory Addressing

**1.1 What is a Pointer?**

*   A pointer is a variable that stores the memory address of another variable.
*   In C, pointers are crucial for dynamic memory allocation, efficient data structures, and direct hardware manipulation.
*   **Relationship to Embedded Systems (CO1, K3):** Pointers are essential in embedded systems for accessing peripherals (memory-mapped I/O), managing data buffers, and implementing real-time operating systems.

**1.2 Memory as an Array of Bytes**

*   The ARM processor, like most CPUs, views memory as a contiguous sequence of bytes, each with a unique address.
*   Data items (integers, characters, floats) occupy multiple bytes. The size of the data determines how many bytes are accessed.
*   **Processor View (CO2, K2):** Understanding this byte-addressable nature is key to comprehending how the processor fetches and stores data of different sizes.

**1.3 C Pointer Expressions and their Assembly Equivalents**

The core of this topic is translating C expressions involving pointers into ARM assembly. This requires understanding the various addressing modes available in ARM.

---

### 2. Key Concepts and Definitions

**2.1 Pointer Dereferencing**

*   **C Concept:** The `*` operator in C is used to dereference a pointer, meaning to access the value stored at the memory address pointed to by the pointer.
*   **Assembly Equivalent:** Dereferencing typically involves an **LDR** (Load Register) or **STR** (Store Register) instruction. The address stored in the pointer register is used to access memory.

**2.2 Pointer Arithmetic**

*   **C Concept:** When you add or subtract an integer to a pointer, the address is adjusted based on the size of the data type the pointer points to. For example, `ptr + 1` moves the pointer to the *next element* of the array, not just the next byte.
*   **Assembly Equivalent:** This involves multiplying the integer offset by the size of the data type before adding it to the base address. ARM's addressing modes are designed to facilitate this.

**2.3 Base Register + Offset Addressing**

*   A fundamental addressing mode where the memory address is calculated by adding an offset (a constant or another register value) to the value in a base register.
*   **Syntax (ARM Assembly):** `[Rn, #offset]` or `[Rn, Rm]` or `[Rn, Rm, LSL #shift_amount]`
    *   `Rn`: Base register holding the base address.
    *   `#offset`: Immediate offset (a constant value).
    *   `Rm`: Register holding an offset value.
    *   `LSL #shift_amount`: Logical Shift Left by a specified amount, often used for byte-to-word conversions.

**2.4 Pre-indexed Addressing**

*   The memory address is calculated, the data is accessed, and then the base register is updated by adding the offset.
*   **Syntax (ARM Assembly):** `[Rn, #offset]!` or `[Rn, Rm]!`
    *   The `!` indicates that the base register (`Rn`) will be updated after the memory access.

**2.5 Post-indexed Addressing**

*   The memory address is calculated using the base register, the data is accessed, and *then* the base register is updated by adding the offset.
*   **Syntax (ARM Assembly):** `[Rn], #offset` or `[Rn], Rm`

---

### 3. Memory Addressing Examples: Translating C Pointer Expressions to Assembly

We will use the ARM Cortex-M3/M4 architecture and instruction set as our reference, as discussed in Lewis and Yiu.

**Example 1: Simple Pointer Dereferencing**

**C Code:**

```c
int *ptr; // Assume ptr holds the address of an integer
int value;
value = *ptr; // Read the integer value at the address pointed to by ptr
```

**Translation:**

*   **Assumptions:**
    *   `ptr` is loaded into register `R0`.
    *   `value` will be stored in register `R1`.

*   **Assembly:**

    ```assembly
    LDR R1, [R0]       ; Load the 32-bit value from the address in R0 into R1
    ```

*   **Explanation:**
    *   `LDR R1, [R0]` uses **base register addressing** with an implicit offset of 0. The address held in `R0` is used to fetch a 32-bit word, which is then placed into `R1`. This directly corresponds to `value = *ptr;`.

**Example 2: Storing a Value via Pointer Dereferencing**

**C Code:**

```c
int *ptr; // Assume ptr holds the address where an integer should be stored
int data_to_store = 100;
*ptr = data_to_store; // Store the integer value into the memory location pointed to by ptr
```

**Translation:**

*   **Assumptions:**
    *   `ptr` is loaded into register `R0`.
    *   `data_to_store` (value 100) is loaded into register `R1`.

*   **Assembly:**

    ```assembly
    STR R1, [R0]       ; Store the 32-bit value from R1 into the address in R0
    ```

*   **Explanation:**
    *   `STR R1, [R0]` uses **base register addressing** with an implicit offset of 0. The value in `R1` is stored at the memory address held in `R0`. This corresponds to `*ptr = data_to_store;`.

**Example 3: Pointer Arithmetic - Array Access**

**C Code:**

```c
int array[10];
int *ptr = array; // ptr points to the first element of the array
int element = *(ptr + 5); // Access the 6th element (index 5) of the array
```

**Translation:**

*   **Assumptions:**
    *   `ptr` (base address of `array`) is loaded into register `R0`.
    *   The result `element` will be stored in register `R1`.

*   **Assembly:**

    ```assembly
    ; Calculate the address of the 6th element: array + 5 * sizeof(int)
    ; sizeof(int) is typically 4 bytes on ARM Cortex-M
    MOV R2, #5          ; Load the index into R2
    LSL R2, R2, #2      ; Multiply R2 by 4 (sizeof(int)): R2 = R2 << 2
    ADD R0, R0, R2      ; Add the offset to the base address: R0 = R0 + R2
    
    ; Now R0 holds the address of array[5]
    LDR R1, [R0]       ; Load the value from the calculated address into R1
    ```

*   **Explanation:**
    *   We first load the index `5` into `R2`.
    *   `LSL R2, R2, #2` performs a left shift by 2 bits on `R2`. This is equivalent to multiplying by $2^2 = 4$, which is the size of an `int` in bytes. This correctly calculates the byte offset for the 5th element.
    *   `ADD R0, R0, R2` adds this byte offset to the base address in `R0`, resulting in the address of `array[5]`.
    *   Finally, `LDR R1, [R0]` loads the value from this calculated address.

**Alternative using `[Rn, Rm, LSL #shift]` addressing mode:**

This demonstrates the power of ARM's addressing modes, which can perform the offset calculation and memory access in a single instruction.

```assembly
    MOV R0, #base_address_of_array ; Load base address into R0
    MOV R2, #5                     ; Load index into R2
    
    ; Address calculation and load in one instruction
    LDR R1, [R0, R2, LSL #2]      ; Load value from [R0 + (R2 << 2)] into R1
```

*   **Explanation:**
    *   `[R0, R2, LSL #2]` is a powerful addressing mode. It takes the base address from `R0`, multiplies the value in `R2` by 4 (left shift by 2), and adds this result to `R0` to form the memory address. The value at this address is then loaded into `R1`. This is the most efficient way to translate `*(ptr + 5)`.

**Example 4: Pre-indexed Addressing**

**C Code:**

```c
int array[10];
int *ptr = array;
*ptr = 50; // Store 50 at the beginning of the array and advance ptr to the next element
```

**Translation:**

*   **Assumptions:**
    *   `ptr` is loaded into register `R0`.
    *   The value `50` is loaded into register `R1`.

*   **Assembly:**

    ```assembly
    ; Assume sizeof(int) is 4 bytes
    STR R1, [R0, #4]!   ; Store R1 at [R0 + 4] and then update R0 to R0 + 4
    ```

*   **Explanation:**
    *   `STR R1, [R0, #4]!` uses **pre-indexed addressing**.
    *   The memory address is calculated as `R0 + 4` (the address of the second integer in the array).
    *   The value `R1` (50) is stored at this calculated address.
    *   The `!` suffix updates the base register `R0` by adding the offset `4` to it. So, after this instruction, `R0` will point to the *second* integer element of the array.
    *   This directly translates to storing the value and then effectively advancing the pointer as if `ptr++` was implicitly done after the assignment.

**Example 5: Post-indexed Addressing**

**C Code:**

```c
int array[10];
int *ptr = array;
*ptr = 60; // Store 60 at the beginning of the array
ptr++;     // Advance ptr to the next element
```

**Translation:**

*   **Assumptions:**
    *   `ptr` is loaded into register `R0`.
    *   The value `60` is loaded into register `R1`.

*   **Assembly:**

    ```assembly
    ; Assume sizeof(int) is 4 bytes
    STR R1, [R0], #4    ; Store R1 at the address in R0, then update R0 to R0 + 4
    ```

*   **Explanation:**
    *   `STR R1, [R0], #4` uses **post-indexed addressing**.
    *   The memory address for the store operation is simply the value currently in `R0`. The value `R1` (60) is stored at this address.
    *   After the memory access, the base register `R0` is updated by adding the offset `4` to it. So, `R0` now points to the *second* integer element of the array.
    *   This sequence accurately reflects the C code `*ptr = 60; ptr++;`.

**Example 6: Character Array (String) Manipulation**

**C Code:**

```c
char message[] = "Hello";
char *char_ptr = message;
char first_char = *char_ptr; // Get the first character
char_ptr++;                 // Move to the next character
```

**Translation:**

*   **Assumptions:**
    *   `char_ptr` is loaded into register `R0`.
    *   The result `first_char` will be stored in register `R1`.

*   **Assembly:**

    ```assembly
    LDRB R1, [R0]       ; Load the byte from the address in R0 into R1 (zero-extended)
    ADD R0, R0, #1      ; Increment R0 by 1 byte to point to the next character
    ```

*   **Explanation:**
    *   For characters, we use `LDRB` (Load Register Byte) and `STRB` (Store Register Byte) instructions. These operate on single bytes.
    *   `LDRB R1, [R0]` loads the byte at the address in `R0` into `R1`. By default, `LDRB` zero-extends the byte to fill the 32-bit register.
    *   `ADD R0, R0, #1` increments the pointer `R0` by 1 byte, moving it to the next character in the `message` array.

**Example 7: Accessing Elements of a 2D Array**

**C Code:**

```c
int matrix[3][4]; // A 3x4 matrix of integers
int *ptr_to_element;

// Access element matrix[1][2]
ptr_to_element = &matrix[1][2]; 
```

**Translation:**

*   **Assumptions:**
    *   `matrix` base address is in `R0`.
    *   `ptr_to_element` will be stored in `R1`.

*   **Assembly:**

    ```assembly
    ; Calculate the address of matrix[1][2]
    ; Address = base_address + (row_index * num_cols_per_row * sizeof(int)) + (col_index * sizeof(int))
    ; Address = R0 + (1 * 4 * 4) + (2 * 4)
    ; Address = R0 + 16 + 8 = R0 + 24
    
    MOV R2, #24         ; Load the total byte offset into R2
    ADD R1, R0, R2      ; Calculate the final address: R1 = R0 + R2
    
    ; If we wanted to load the value:
    ; LDR R3, [R1]       ; Load the value from matrix[1][2] into R3
    ```

*   **Explanation:**
    *   To find the address of `matrix[1][2]`, we need to calculate the total number of bytes from the beginning of the matrix.
    *   `matrix[1]` starts after 1 row, so that's `1 * 4 * sizeof(int)` bytes.
    *   `matrix[1][2]` is the 2nd element (index 2) in that row, so that's `2 * sizeof(int)` bytes.
    *   Total offset = $(1 \times 4 \times 4) + (2 \times 4) = 16 + 8 = 24$ bytes.
    *   The assembly calculates this offset and adds it to the base address of the `matrix`.

**Using `[Rn, Rm, LSL #shift]` for 2D Arrays:**

This is more complex because the offset calculation isn't a simple `row_index * stride`. However, you can often express row strides. Let's say we want `matrix[row][col]`:

```assembly
    ; Access matrix[row][col]
    ; R0 = base address of matrix
    ; R1 = row index
    ; R2 = column index
    ; R3 = num_cols_per_row (e.g., 4)
    ; R4 = sizeof(int) (e.g., 4)
    
    MUL R5, R1, R3      ; R5 = row_index * num_cols_per_row
    MUL R5, R5, R4      ; R5 = (row_index * num_cols_per_row) * sizeof(int)  (row_offset)
    
    MUL R6, R2, R4      ; R6 = col_index * sizeof(int) (col_offset)
    
    ADD R7, R5, R6      ; R7 = row_offset + col_offset (total_offset)
    
    ADD R8, R0, R7      ; R8 = base_address + total_offset (address of matrix[row][col])
    
    ; LDR R9, [R8]       ; Load the value into R9
```

This shows that for more complex indexing, multiple instructions are often required to calculate the final address.

---

### 4. Practice Questions and Exercises

**Question 1:**
Translate the following C code snippet to ARM assembly. Assume `int_ptr` is in `R0`, `value` is in `R1`, and the data size is 4 bytes.

```c
int *int_ptr;
int value;
*int_ptr = value;
```

**Answer:**

```assembly
STR R1, [R0]
```

**Question 2:**
Translate the following C code snippet to ARM assembly. Assume `char_ptr` is in `R0`, `byte_val` is in `R1`, and data is a character (1 byte).

```c
char *char_ptr;
char byte_val;
byte_val = *char_ptr;
```

**Answer:**

```assembly
LDRB R1, [R0]
```

**Question 3:**
Translate the following C code snippet to ARM assembly. Assume `int_array_ptr` is in `R0`, and the result `element` should be in `R1`. The array contains 32-bit integers.

```c
int *int_array_ptr; // Points to the start of an integer array
int element = *(int_array_ptr + 3); // Access the 4th element (index 3)
```

**Answer:**

```assembly
; Option 1: Using separate instructions for offset calculation
MOV R2, #3          ; Load index into R2
LSL R2, R2, #2      ; Multiply index by 4 (sizeof(int))
ADD R0, R0, R2      ; Calculate address: R0 = R0 + offset
LDR R1, [R0]        ; Load value from calculated address into R1

; Option 2: Using addressing mode with shift
MOV R2, #3          ; Load index into R2
LDR R1, [R0, R2, LSL #2] ; Load value from [R0 + (R2 << 2)] into R1
```

**Question 4:**
Translate the following C code snippet to ARM assembly using **post-indexed addressing**. Assume `ptr` is in `R0`, `data` is in `R1`, and the data type is a 32-bit integer.

```c
int *ptr;
int data;
*ptr = data;
ptr++;
```

**Answer:**

```assembly
STR R1, [R0], #4
```

---

### 5. Important Points to Remember

*   **Data Size Matters:** Always consider the size of the data being accessed (byte, halfword, word) when translating pointer operations. Use `LDRB`/`STRB` for bytes, `LDRH`/`STRH` for halfwords (16 bits), and `LDR`/`STR` for words (32 bits).
*   **Pointer Arithmetic is Byte-Based:** In assembly, pointer arithmetic must explicitly account for the size of the data type. The compiler handles this translation in C.
*   **ARM Addressing Modes are Powerful:** Utilize pre-indexed and post-indexed addressing, and the `[Rn, Rm, LSL #shift]` mode, to generate more efficient and concise assembly code, directly mapping to C pointer operations.
*   **Register Allocation:** Be mindful of which registers you use to store pointers and data. Consistent allocation simplifies translation.
*   **Debugging:** When translating, step through your assembly code with a debugger to verify that the memory addresses and values are being accessed correctly.
*   **Embedded Context (CO1, K3):** These skills are vital for directly interacting with hardware registers, which are essentially memory-mapped locations. For instance, configuring a GPIO pin might involve `*(volatile uint32_t *)0x40010800 = 0x01;`, which directly uses pointer dereferencing to write to a specific memory address.
*   **Programmer's View (CO2, K2):** Understanding how C pointers map to assembly instructions solidifies the programmer's view of the processor's interaction with memory. You see the underlying mechanics that C abstracts away.
*   **Choosing Level (CO3, K3):** While C is generally preferred for its readability and portability, understanding assembly for pointer operations allows you to optimize critical sections of code or perform direct hardware control where necessary.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 6. References and Further Reading

*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W Lewis:** Chapter 4 (Assembly Language) and Chapter 5 (C Language) will provide a foundational understanding of both C features and their assembly counterparts, particularly regarding memory access and pointers. Lewis often provides practical examples for Cortex-M.
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu:** Yiu's book is an excellent resource for detailed explanations of the ARM instruction set, including the various addressing modes. Section 2.5 "Data Transfer Instructions" and Chapter 5 "Addressing Modes" will be highly relevant. Yiu often highlights the efficiency of specific addressing modes for common programming tasks.
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu:** Zhu's book offers a practical approach to embedded systems, often blending C and assembly. Chapters covering data types, memory organization, and basic programming constructs will reinforce the concepts of pointer translation.

---

This concludes our study of translating C pointer expressions to ARM assembly. Mastering these concepts is crucial for effective embedded systems programming on ARM platforms.