---
title: "accessing memory mapped IO using pointers"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feadc"
status: "completed"
scrapedAt: "2026-05-23T17:53:12.628Z"
---
# ARM Architecture and Programming: Module 1 - Embedded C: Fixed

## Topic: Accessing Memory-Mapped I/O Using Pointers

This module focuses on fundamental C programming techniques essential for embedded systems development, specifically how to interact with hardware peripherals. Memory-mapped I/O (MMIO) is a core concept in embedded systems, allowing the processor to control and read data from hardware devices by treating their registers as memory locations. This topic will delve into how to effectively access these memory locations using pointers in C, a crucial skill for interacting with the ARM Cortex-M architecture.

---

### 1. Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   **Understand the concept of Memory-Mapped I/O (MMIO):** Explain how hardware peripherals are accessed as memory addresses.
*   **Declare and use pointers to access MMIO registers:** Effectively translate hardware register addresses into C pointer declarations.
*   **Perform read and write operations on MMIO registers:** Manipulate hardware through pointer dereferencing.
*   **Recognize and mitigate potential issues with MMIO access:** Address concerns related to volatile data, data alignment, and processor endianness.
*   **Apply these concepts to practical embedded C programming scenarios:** Write C code to control common embedded peripherals.

---

### 2. Key Concepts and Definitions

#### 2.1 Memory-Mapped I/O (MMIO)

*   **Definition:** In MMIO, hardware peripherals (like timers, GPIO pins, UARTs, etc.) have their control and data registers mapped to specific memory addresses. The processor accesses these registers just like it accesses regular memory locations.
*   **Contrast with Port-Mapped I/O (PMIO):** Some architectures use PMIO, where I/O devices have a separate address space accessed via special I/O instructions. ARM predominantly uses MMIO.
*   **Why MMIO is prevalent in Embedded Systems:** Simplifies the processor's instruction set and allows for unified access to both memory and I/O devices.

**Referenced in:**
*   *Fundamentals of Embedded Software with the ARM Cortex M3* by Daniel W. Lewis (Chapter on I/O Hardware)
*   *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors* by Joseph Yiu (Chapter on Memory System)

#### 2.2 Pointers in C

*   **Definition:** A pointer is a variable that stores the memory address of another variable.
*   **Declaration:** `data_type *pointer_name;`
    *   `data_type`: Specifies the type of data the pointer points to (e.g., `int`, `char`, `uint8_t`). This is crucial for correct memory access and interpretation.
    *   `*`: The dereference operator, used to access the value stored at the address pointed to by the pointer.
*   **Initialization:** `pointer_name = &variable_name;` (assigns the address of `variable_name` to `pointer_name`).
*   **Dereferencing:** `value = *pointer_name;` (reads the value at the memory address stored in `pointer_name`).
*   **Pointer Arithmetic:** Performing arithmetic operations on pointers (e.g., `pointer_name++`) moves the pointer by a number of bytes equal to the size of the data type it points to.

**Referenced in:**
*   *Fundamentals of Embedded Software with the ARM Cortex M3* by Daniel W. Lewis (Chapter on Pointers and Arrays)
*   *Embedded systems with ARM Cortex M Microcontrollers in Assembly and C* by Yifeng Zhu (Chapter on C Language Fundamentals)

#### 2.3 Volatile Keyword

*   **Definition:** The `volatile` keyword is a type qualifier that tells the compiler that a variable's value can change at any time without any action on the part of the software currently in execution.
*   **Importance for MMIO:** MMIO registers are hardware-controlled and can change their values independently of the C program's execution (e.g., a timer counter, a status flag from a peripheral). Without `volatile`, the compiler might optimize away reads or writes to these locations, assuming the values remain constant between accesses, leading to incorrect behavior.

**Referenced in:**
*   *Fundamentals of Embedded Software with the ARM Cortex M3* by Daniel W. Lewis (Section on Volatile Qualifiers)
*   *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors* by Joseph Yiu (Chapter on Programming Considerations)

#### 2.4 Data Types for MMIO Registers

*   **Standard Integer Types:** It's crucial to use appropriate standard integer types from `<stdint.h>` to match the register width.
    *   `uint8_t`: For 8-bit registers.
    *   `uint16_t`: For 16-bit registers.
    *   `uint32_t`: For 32-bit registers.
*   **Why Fixed-Width Types?** Microcontrollers often have peripherals with specific register sizes. Using fixed-width types ensures your C code accurately reflects the hardware's expectations, avoiding unexpected behavior due to default integer promotions or widths.

**Referenced in:**
*   *Fundamentals of Embedded Software with the ARM Cortex M3* by Daniel W. Lewis (Chapter on Data Types)
*   *Embedded systems with ARM Cortex M Microcontrollers in Assembly and C* by Yifeng Zhu (Chapter on C Language Fundamentals)

---

### 3. Accessing MMIO Registers Using Pointers

#### 3.1 The Process

1.  **Identify the Register Address:** Consult the microcontroller's datasheet or reference manual to find the base address of the peripheral and the offset of the specific register you need to access.
2.  **Define the Pointer Type:** Determine the data width of the register (e.g., 8-bit, 16-bit, 32-bit) and declare a pointer of the corresponding type (e.g., `volatile uint8_t *`, `volatile uint32_t *`).
3.  **Assign the Address to the Pointer:** Cast the memory address (typically a hexadecimal constant) to the correct pointer type and assign it.
4.  **Dereference the Pointer:** Use the dereference operator (`*`) to read from or write to the register.

#### 3.2 Example: Controlling a General Purpose Input/Output (GPIO) Pin

Let's assume we want to control a GPIO pin configured as an output. We'll need to write to a data register.

**Scenario:**
*   Peripheral Base Address: `0x40020000` (Hypothetical)
*   GPIO Data Output Register Offset: `0x0014` (Hypothetical)
*   Register Width: 32-bit

**Steps:**

1.  **Determine the full address:** `0x40020000 + 0x0014 = 0x40020014`

2.  **Declare a volatile pointer to a 32-bit unsigned integer:**
    ```c
    #include <stdint.h> // For uint32_t

    // Define the address of the GPIO data output register
    #define GPIO_DATA_OUT_REG (*(volatile uint32_t *)0x40020014)
    ```
    *   **Explanation:**
        *   `0x40020014`: The memory address of the register.
        *   `(volatile uint32_t *)`: Casts the address to a pointer of type `volatile uint32_t`. This is crucial:
            *   `uint32_t`: Ensures we are accessing a 32-bit value.
            *   `volatile`: Informs the compiler that this memory location can change unexpectedly.
        *   `*`: Dereferences the pointer. This creates a symbolic name for the register itself.

3.  **Write to the register (e.g., set the pin high):**
    ```c
    void set_gpio_pin_high() {
        GPIO_DATA_OUT_REG = 0x00000001; // Set the least significant bit to 1
    }
    ```
    *   **Explanation:** Assigning a value to `GPIO_DATA_OUT_REG` writes to the memory location `0x40020014`.

4.  **Read from the register (e.g., check a status flag):**
    Let's assume a status register is at `0x40020020` and the least significant bit indicates if a peripheral is ready.

    ```c
    #define GPIO_STATUS_REG (*(volatile uint32_t *)0x40020020)

    int is_gpio_ready() {
        if (GPIO_STATUS_REG & 0x00000001) { // Check the least significant bit
            return 1; // Ready
        } else {
            return 0; // Not ready
        }
    }
    ```
    *   **Explanation:** Reading from `GPIO_STATUS_REG` retrieves the current value of the status register. The bitwise AND (`&`) is used to isolate the specific status bit.

#### 3.3 Defining Macros for Registers

Using `#define` to create symbolic names for MMIO registers is a common and highly recommended practice.

*   **Benefits:**
    *   **Readability:** Code becomes much clearer when you use names like `GPIOA_ODR` instead of raw addresses.
    *   **Maintainability:** If the memory map changes, you only need to update the `#define` statements.
    *   **Portability:** Makes it easier to port code between different microcontroller families or versions by changing the definitions.

**Example (based on common ARM Cortex-M peripherals, e.g., STM32):**

```c
#include <stdint.h>

// Base addresses (example - consult your MCU datasheet!)
#define PERIPH_BASE     0x40000000UL
#define GPIOA_BASE      (PERIPH_BASE + 0x00000000UL) // Assuming GPIOA starts at 0x40000000

// Register offsets from peripheral base address
#define GPIO_MODER_OFFSET   0x00UL // Mode register
#define GPIO_ODR_OFFSET     0x14UL // Output data register
#define GPIO_IDR_OFFSET     0x10UL // Input data register

// Define pointers to the registers
#define GPIOA_MODER         (*(volatile uint32_t *)(GPIOA_BASE + GPIO_MODER_OFFSET))
#define GPIOA_ODR           (*(volatile uint32_t *)(GPIOA_BASE + GPIO_ODR_OFFSET))
#define GPIOA_IDR           (*(volatile uint32_t *)(GPIOA_BASE + GPIO_IDR_OFFSET))

// Function to set a specific GPIO pin high
void set_pin_PA5_high() {
    // Assuming we want to set the 5th pin (bit 5)
    GPIOA_ODR |= (1 << 5); // Use bitwise OR to set the 5th bit without affecting others
}

// Function to read the state of a specific GPIO pin
uint8_t read_pin_PA0_state() {
    // Assuming we want to read the 0th pin (bit 0)
    return (GPIOA_IDR >> 0) & 0x01; // Shift right by 0 and mask to get the bit value
}
```

**Important Note:** The actual base addresses and register offsets are specific to the microcontroller. **Always refer to the datasheet for your target hardware.**

---

### 4. Important Points to Remember

*   **`volatile` is CRITICAL:** Always use `volatile` when declaring pointers to MMIO registers. Failure to do so can lead to unexpected behavior due to compiler optimizations.
*   **Correct Data Types:** Use `stdint.h` for fixed-width integer types (`uint8_t`, `uint16_t`, `uint32_t`) that precisely match the register widths.
*   **Datasheet is Your Bible:** Never guess memory addresses or register definitions. The microcontroller's datasheet and reference manual are the definitive sources.
*   **Bit Manipulation:** Most hardware registers control specific bits. Use bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`) for precise manipulation of individual bits within registers.
    *   Setting a bit: `REGISTER |= (1 << BIT_NUM);`
    *   Clearing a bit: `REGISTER &= ~(1 << BIT_NUM);`
    *   Toggling a bit: `REGISTER ^= (1 << BIT_NUM);`
    *   Checking a bit: `(REGISTER >> BIT_NUM) & 0x01`
*   **Endianness:** While C pointers abstract much of this, be aware of the processor's endianness (Little-endian vs. Big-endian). ARM Cortex-M processors are typically Little-endian. This matters when accessing multi-byte registers if not using the correct pointer type. For example, a 32-bit register will have its least significant byte at the lowest address.
*   **Memory Alignment:** Some processors may have performance penalties or even cause exceptions if data is not aligned to its natural boundary (e.g., a 32-bit integer should ideally be at an address divisible by 4). While C compilers and the `volatile` keyword help manage this for MMIO, it's good to be aware of.

---

### 5. Aligning with Course Outcomes

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3)**
    *   This topic directly addresses `volatile` keyword, fixed-width integer types, pointers, and macro definitions, all of which are fundamental C features for embedded programming. You are expected to *apply* these concepts to control hardware.

*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2)**
    *   Understanding MMIO and how registers are mapped to memory addresses provides a crucial part of the programmer's view of the ARM architecture. You are expected to *explain* this interaction.

*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3)**
    *   By demonstrating how to directly manipulate hardware registers using C pointers, this topic highlights the power and expressiveness of C for embedded tasks. It shows how C can often provide low-level control without resorting to assembly language for basic I/O operations. You are expected to *compare and contrast* when C is sufficient for hardware interaction.

---

### 6. Practice Questions & Exercises

**Question 1:**

Consider a hypothetical microcontroller where a timer's control register is located at memory address `0x40010004` and is a 16-bit register. You want to enable the timer by setting bit 0 of this register. Write a C code snippet to achieve this using pointers.

**Answer 1:**

```c
#include <stdint.h> // For uint16_t

// Define the address and create a pointer to the timer control register
#define TIMER_CONTROL_REG (*(volatile uint16_t *)0x40010004)

void enable_timer() {
    // Set bit 0 to enable the timer
    TIMER_CONTROL_REG |= (1 << 0);
}
```

**Question 2:**

A UART status register is located at `0x40008018` and is 32-bit. Bit 5 of this register indicates if the Transmit Data Register (TDR) is empty. Write a C function that returns `1` if the TDR is empty and `0` otherwise.

**Answer 2:**

```c
#include <stdint.h> // For uint32_t

// Define the address and create a pointer to the UART status register
#define UART_STATUS_REG (*(volatile uint32_t *)0x40008018)

// Define the mask for the TDR empty bit
#define TDR_EMPTY_MASK (1 << 5)

int is_uart_tdr_empty() {
    // Read the status register and check if bit 5 is set
    if (UART_STATUS_REG & TDR_EMPTY_MASK) {
        return 1; // TDR is empty
    } else {
        return 0; // TDR is not empty
    }
}
```

**Exercise 1 (Conceptual):**

You are given a datasheet for a new ARM Cortex-M microcontroller. You need to configure a GPIO port to blink an LED connected to pin PB7.
1.  What type of MMIO registers would you typically need to access to achieve this? (Hint: Think about configuration and output).
2.  Why is it important to declare pointers to these registers as `volatile`?
3.  If the datasheet shows the Data Output Register for Port B is at `0x40010410`, how would you define a pointer to it in your C code, assuming it's a 32-bit register?

**Exercise 2 (Hands-on - Requires development environment):**

If you have access to an ARM Cortex-M development board (e.g., STM32 Nucleo, ESP32 development kit), find the datasheet for your specific microcontroller.
1.  Locate the memory map and find the base address for a GPIO port.
2.  Find the offset for the GPIO Output Data Register (ODR) and the GPIO Mode Register (MODER) for that port.
3.  Write a small C program to configure a specific pin (e.g., PA5) as an output and then toggle it at a slow rate (using a simple delay loop).

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. Further Reading

*   **Chapter 2: Memory System** in *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors* by Joseph Yiu.
*   **Chapters related to I/O hardware and C programming essentials** in *Fundamentals of Embedded Software with the ARM Cortex M3* by Daniel W. Lewis.
*   **Chapters on C language features and microcontroller peripherals** in *Embedded systems with ARM Cortex M Microcontrollers in Assembly and C* by Yifeng Zhu.

---