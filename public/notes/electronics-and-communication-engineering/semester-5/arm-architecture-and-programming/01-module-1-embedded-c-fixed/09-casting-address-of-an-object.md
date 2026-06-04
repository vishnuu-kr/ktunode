---
title: "casting address of an object"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feae0"
status: "completed"
scrapedAt: "2026-05-23T17:53:15.433Z"
---
# ARM Architecture and Programming

## Module 1: Embedded C: Fixed

### Topic: Casting the Address of an Object

---

### 1. Introduction to Pointers and Memory Addresses

In embedded systems, direct manipulation of memory is crucial. Pointers are fundamental C constructs that allow us to work with memory addresses.

*   **Memory Address:** A unique identifier for each byte of memory within the system.
*   **Pointer:** A variable that stores a memory address.
*   **Dereferencing:** The process of accessing the value stored at the memory address pointed to by a pointer.

**Relevant Textbooks:**

*   **Lewis (Pearson, 2e, 2015):** Chapter 4, "Pointers and Arrays," provides a thorough introduction to pointers and their usage in C, essential for understanding memory address manipulation.
*   **Yiu (Elsevier, 3e, 2014):** While focusing on Cortex-M architecture, Yiu's book implicitly assumes a strong understanding of C pointers as they are the bridge to hardware registers and memory-mapped peripherals.

**Course Outcome Alignment:**

*   **CO1 (K3):** Understanding how to cast addresses is a direct application of C features frequently used in embedded systems.
*   **CO2 (K2):** This topic helps in explaining a programmer's view of processor architecture by demonstrating how software interacts with the physical memory space.

---

### 2. The Need for Casting Addresses

While C is a strongly typed language, sometimes we need to explicitly tell the compiler to treat a memory address as a different data type. This is where casting comes in.

**Key Concepts:**

*   **Type Casting:** The process of converting a value from one data type to another.
*   **Implicit Casting:** When the compiler automatically converts a type without explicit instruction.
*   **Explicit Casting (Casting):** When the programmer explicitly instructs the compiler to convert a type.

**Why Cast Addresses?**

1.  **Accessing Different Data Sizes:** Microcontrollers often have peripherals mapped to specific memory addresses. The data associated with these peripherals might be 8-bit, 16-bit, or 32-bit. Casting allows us to correctly interpret the data at these addresses.
2.  **Generic Pointers:** Sometimes, you might want to write functions that can operate on memory of any type. Using a generic pointer type (like `void *`) and then casting it to the appropriate type within the function is common.
3.  **Working with Hardware Registers:** Embedded programming often involves directly interacting with hardware registers. These registers are memory-mapped, and their size (e.g., a status register might be 8 bits, while a control register might be 32 bits) dictates how we should cast their addresses.
4.  **Portability:** While embedded systems often have specific memory layouts, casting can sometimes help in writing more portable code, especially when dealing with different microcontroller architectures or memory configurations.

**Example Scenario:**

Imagine a simple LED control where an LED is connected to a specific GPIO port's data register, which is a 32-bit register. However, you might want to toggle a single bit within that register. To do this effectively, you'll need to understand how to access and manipulate the 32-bit register using its address.

---

### 3. Types of Address Casting in C

C provides several ways to cast memory addresses. The most common involve casting to pointer types.

**Key Concepts:**

*   **Pointer to `void` (`void *`):** A generic pointer type that can point to any data type. It's often used when the actual data type is unknown at compile time or when passing pointers to functions that can handle various data types.
*   **Pointer to `char` (`char *` or `unsigned char *`):** `char` is typically the smallest addressable unit in memory (often a byte). Casting an address to `char *` allows you to access memory byte by byte. This is fundamental for low-level memory manipulation.
*   **Pointer to specific data types (e.g., `int *`, `short *`, `uint32_t *`):** Casting to these types tells the compiler to interpret the memory at that address as holding a variable of that specific type and size.

**Syntax for Explicit Casting:**

```c
(new_type) expression
```

Where `new_type` is the target pointer type and `expression` evaluates to the address you want to cast.

**Common Casting Scenarios:**

*   **Casting to `void *`:**
    ```c
    int my_variable = 10;
    void *generic_ptr;
    generic_ptr = &my_variable; // Implicit cast to void *
    ```
    To use `generic_ptr`, you must cast it back to a known type:
    ```c
    int *int_ptr = (int *)generic_ptr;
    printf("Value: %d\n", *int_ptr);
    ```

*   **Casting to `char *` (or `unsigned char *`) for byte-level access:**
    ```c
    uint32_t large_value = 0x12345678;
    unsigned char *byte_ptr;

    byte_ptr = (unsigned char *)&large_value;

    // Accessing bytes:
    printf("Byte 0 (LSB): 0x%02X\n", *byte_ptr);       // Typically 0x78
    printf("Byte 1:       0x%02X\n", *(byte_ptr + 1)); // Typically 0x56
    printf("Byte 2:       0x%02X\n", *(byte_ptr + 2)); // Typically 0x34
    printf("Byte 3 (MSB): 0x%02X\n", *(byte_ptr + 3)); // Typically 0x12
    ```
    This is crucial for understanding endianness.

*   **Casting to a specific pointer type for register access:**
    Let's assume a memory-mapped register for a timer, located at address `0x40001000`, which is a 32-bit register.

    ```c
    // Define the base address of the timer peripheral
    #define TIMER_BASE_ADDRESS 0x40001000

    // Define a pointer to a 32-bit unsigned integer at the timer's base address
    volatile uint32_t *timer_control_reg = (volatile uint32_t *)TIMER_BASE_ADDRESS;

    // To enable the timer, you might write a specific value to it:
    *timer_control_reg = 0x00000001; // Set the enable bit

    // To read the current timer value:
    uint32_t current_timer_value = *timer_control_reg;
    ```
    **Important Note:** The `volatile` keyword is essential here. It tells the compiler that the value at this memory location can change at any time without any action being taken by the compiler in its optimization. This is vital for hardware registers.

**Relevant Textbooks:**

*   **Lewis (Pearson, 2e, 2015):** Chapter 4.4, "Pointers to void," and Chapter 4.6, "Pointer Arithmetic," are directly relevant to understanding how to cast and manipulate pointers.
*   **Zhu (E-man Press, 3e, 2018):** Chapter 5, "Pointers and Arrays," covers pointer casting and its applications in embedded contexts, including memory-mapped I/O.

**Course Outcome Alignment:**

*   **CO1 (K3):** Demonstrates the practical application of C's type casting features in embedded scenarios.
*   **CO2 (K2):** Helps visualize how memory addresses map to hardware and how software interacts with them via pointers.
*   **CO3 (K3):** Illustrates how C, through casting, allows for low-level hardware interaction, often replacing the need for assembly for certain tasks.

---

### 4. Casting Addresses and Pointer Arithmetic

When you cast an address to a pointer type, pointer arithmetic is performed based on the size of the pointed-to type.

**Key Concepts:**

*   **Pointer Arithmetic:** Adding or subtracting an integer to a pointer results in a new pointer that is offset by a multiple of the size of the pointed-to data type.
    *   `ptr + n` moves the pointer `n * sizeof(*ptr)` bytes forward.
    *   `ptr - n` moves the pointer `n * sizeof(*ptr)` bytes backward.

**Examples:**

1.  **Casting to `char *`:**
    ```c
    uint32_t data = 0xAABBCCDD;
    char *char_ptr = (char *)&data; // sizeof(char) is 1 byte

    // char_ptr points to the first byte (LSB) of data
    printf("Value at char_ptr: 0x%02X\n", *char_ptr); // Prints 0xDD (assuming little-endian)

    // char_ptr + 1 points to the second byte
    printf("Value at char_ptr + 1: 0x%02X\n", *(char_ptr + 1)); // Prints 0xCC
    ```
    Here, `char_ptr + 1` moves the pointer by `1 * sizeof(char)` = 1 byte.

2.  **Casting to `uint32_t *`:**
    ```c
    uint32_t array[3] = {10, 20, 30};
    uint32_t *uint32_ptr = (uint32_t *)array; // sizeof(uint32_t) is 4 bytes

    // uint32_ptr points to array[0]
    printf("Value at uint32_ptr: %d\n", *uint32_ptr); // Prints 10

    // uint32_ptr + 1 points to array[1]
    // This moves the pointer forward by sizeof(uint32_t) = 4 bytes
    printf("Value at uint32_ptr + 1: %d\n", *(uint32_ptr + 1)); // Prints 20

    // uint32_ptr + 2 points to array[2]
    // This moves the pointer forward by 2 * sizeof(uint32_t) = 8 bytes
    printf("Value at uint32_ptr + 2: %d\n", *(uint32_ptr + 2)); // Prints 30
    ```

**Important Note:** Incorrect casting or pointer arithmetic can lead to **undefined behavior**, crashes, or data corruption, especially when dealing with memory that doesn't contain the expected data type. Always ensure your casts match the underlying memory structure or the intended interpretation.

**Relevant Textbooks:**

*   **Lewis (Pearson, 2e, 2015):** Chapter 4.6, "Pointer Arithmetic," is crucial for understanding how pointer increments work after casting.
*   **Yiu (Elsevier, 3e, 2014):** Discusses memory organization and access within Cortex-M, which naturally involves understanding how data types occupy memory and how pointers navigate it.

**Course Outcome Alignment:**

*   **CO1 (K3):** Reinforces the correct usage of C's pointer arithmetic, a core skill for embedded programming.
*   **CO2 (K2):** Provides a more concrete understanding of how data is laid out in memory and how the processor's memory access mechanisms work with different data types.

---

### 5. Common Pitfalls and Best Practices

Casting addresses can be a powerful tool, but it's also a source of common errors in embedded development.

**Pitfalls to Avoid:**

*   **Casting to the Wrong Type:** Casting an address to a type that doesn't match the actual data structure will lead to misinterpretation of data.
*   **Dereferencing `void *` without Casting:** You cannot directly dereference a `void *`. It must be cast to a specific pointer type first.
*   **Alignment Issues:** Some processors require data to be aligned to specific memory boundaries (e.g., a 32-bit integer might need to be at an address divisible by 4). Casting and then dereferencing unaligned data can cause hardware exceptions or crashes on certain architectures (though ARM Cortex-M generally handles unaligned access with a performance penalty).
*   **Forgetting `volatile`:** When accessing hardware registers, failing to use `volatile` can lead to the compiler optimizing away reads or writes, causing unpredictable behavior.
*   **Incorrect Pointer Arithmetic with Mixed Types:** Be cautious when performing arithmetic on pointers that have been cast from different types or when mixing byte-level access with word-level access.

**Best Practices:**

*   **Use `typedef` for Register Structures:** Define structures that map to the memory layout of peripherals. This makes your code much more readable and maintainable.

    ```c
    // Example: GPIO Port Register Structure (hypothetical)
    typedef struct {
        volatile uint32_t DATA;    // Data Register
        volatile uint32_t DIR;     // Direction Register
        volatile uint32_t PU_PD;   // Pull-up/Pull-down Register
        // ... other registers
    } GPIO_Port_TypeDef;

    // Define the base address for a specific GPIO port
    #define GPIO_PORT_A ((GPIO_Port_TypeDef *) 0x40020000)

    // Accessing a register:
    GPIO_PORT_A->DIR |= (1 << 5); // Set direction for pin 5 as output
    ```
    This approach is heavily promoted in modern embedded C programming and is indirectly supported by understanding how to cast base addresses to structure pointers.

*   **Use `const` for Read-Only Registers:** If a register is meant to be read-only, declare your pointer as `const volatile`.

    ```c
    const volatile uint32_t *timer_status_reg = (const volatile uint32_t *)TIMER_STATUS_ADDRESS;
    uint32_t status = *timer_status_reg; // Read the status
    // *timer_status_reg = 0x01; // This would be a compile-time error
    ```

*   **Be Explicit with `unsigned char *` for Byte-Level Access:** When you intend to manipulate memory byte by byte, cast to `unsigned char *` explicitly for clarity and to avoid potential sign-extension issues with signed `char *`.

*   **Comment Your Casts:** If a cast is not immediately obvious, add a comment explaining why it's being done and what data type is expected at that address.

*   **Understand Endianness:** Be aware of whether the target processor is little-endian or big-endian, as this affects how multi-byte data is stored and accessed. Casting to `char *` is the primary way to observe this.

**Relevant Textbooks:**

*   **Lewis (Pearson, 2e, 2015):** Chapter 4.8, "Common Pitfalls," highlights issues with pointers and casting.
*   **Yiu (Elsevier, 3e, 2014):** Discusses register maps and peripheral structures, implicitly promoting the use of structures and `volatile` for accessing memory-mapped peripherals.

**Course Outcome Alignment:**

*   **CO1 (K3):** Emphasizes robust and correct usage of C features in an embedded context.
*   **CO3 (K3):** Shows how a good grasp of C, including casting, can often be an alternative to assembly for direct hardware control.

---

### 6. Practice Questions and Exercises

**Question 1:**

You have a 32-bit unsigned integer variable `config_value` at memory address `0x20000100`. You want to access and print the individual bytes of this variable, starting from the least significant byte. Write C code to achieve this.

```c
#include <stdio.h>
#include <stdint.h>

int main() {
    uint32_t config_value = 0x11223344; // Example value
    // Assume config_value is located at 0x20000100 for the purpose of this exercise.
    // In a real embedded scenario, you would get this address from a linker script or hardware mapping.

    // Your code here
    // ...

    return 0;
}
```

**Answer 1:**

```c
#include <stdio.h>
#include <stdint.h>

int main() {
    uint32_t config_value = 0x11223344;
    uint32_t *config_ptr = &config_value; // Pointer to the 32-bit value

    // Cast the address to unsigned char * to access byte by byte
    unsigned char *byte_ptr = (unsigned char *)config_ptr;

    printf("Accessing bytes of 0x%08X:\n", config_value);

    // Accessing the bytes (assuming little-endian for typical output)
    printf("Byte 0 (LSB): 0x%02X\n", *byte_ptr);       // Expected: 0x44
    printf("Byte 1:       0x%02X\n", *(byte_ptr + 1)); // Expected: 0x33
    printf("Byte 2:       0x%02X\n", *(byte_ptr + 2)); // Expected: 0x22
    printf("Byte 3 (MSB): 0x%02X\n", *(byte_ptr + 3)); // Expected: 0x11

    return 0;
}
```

**Question 2:**

Imagine a hardware register `STATUS_REG` at address `0x40000000` that is a 16-bit read-only status register. You need to read this status. Write C code to do this using appropriate casting and the `volatile` keyword.

**Answer 2:**

```c
#include <stdint.h>

// Define the address of the status register
#define STATUS_REG_ADDRESS 0x40000000

// Define a pointer to a constant volatile uint16_t at the register's address
const volatile uint16_t *status_register = (const volatile uint16_t *)STATUS_REG_ADDRESS;

int main() {
    // Read the status register
    uint16_t current_status = *status_register;

    // Now you can use current_status...
    // For example:
    if (current_status & 0x0001) {
        // The least significant bit is set
    }

    return 0;
}
```

**Question 3 (Conceptual):**

Why is the `volatile` keyword crucial when casting addresses to interact with hardware registers?

**Answer 3:**

The `volatile` keyword tells the compiler that the value at the memory address can change unexpectedly (i.e., not solely due to the program's code). This prevents the compiler from performing optimizations such as:

1.  **Caching the value in a register:** Without `volatile`, the compiler might read the register once, store its value in a CPU register, and reuse that value multiple times without re-reading the actual hardware register. This would be problematic if the hardware register's state changes between reads.
2.  **Reordering operations:** The compiler might reorder read/write operations to hardware registers. `volatile` suggests that the order of access is significant and should not be altered.

By using `volatile`, you ensure that every read and write operation to the specified memory address is performed as explicitly written in the code, guaranteeing interaction with the actual hardware.

---

### 7. Summary and Key Takeaways

*   **Pointers are essential for embedded programming** as they allow direct memory access and interaction with hardware.
*   **Casting addresses** is necessary to tell the compiler how to interpret the data at a given memory location, especially when dealing with hardware registers of different sizes.
*   **`void *` is a generic pointer**, but it must be cast to a specific type before dereferencing.
*   **`char *` (or `unsigned char *`) is used for byte-level memory access** and is fundamental for understanding data representation and endianness.
*   **Pointer arithmetic is type-dependent.** Adding `n` to a pointer moves it `n * sizeof(*pointer)` bytes.
*   **Always use `volatile`** when accessing memory-mapped hardware registers to prevent unwanted compiler optimizations.
*   **Use `typedef` with structures** to represent peripheral register layouts for more readable and maintainable code.
*   **Be mindful of data alignment** as unaligned access can cause issues on some architectures.
*   **Incorrect casting or pointer manipulation leads to undefined behavior**, crashes, and data corruption.

This topic forms a critical foundation for understanding how C code interacts with the underlying hardware in ARM-based microcontrollers and other embedded systems. It directly supports CO1, CO2, and CO3 by illustrating the practical use of C features, the programmer's view of memory, and the ability of C to perform low-level hardware control.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
