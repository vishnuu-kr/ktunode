---
title: "memory model"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feae5"
status: "completed"
scrapedAt: "2026-05-23T17:53:18.921Z"
---
# ARM Architecture and Programming: Module 1 - Embedded C: Fixed

## Topic: Memory Model

This module focuses on the fundamental aspects of embedded C programming for ARM processors, with a particular emphasis on the memory model. Understanding the memory model is crucial for efficient and correct embedded software development.

---

### 1. Introduction to Memory Models in Embedded Systems (CO1: K3, CO2: K2)

An embedded system's memory model defines how the processor accesses and manages the various types of memory available. This includes volatile and non-volatile memory, RAM, ROM, and peripheral registers. For ARM processors, especially the Cortex-M series, the memory model is a key factor in understanding data placement, access rights, and performance.

**Key Concepts:**

*   **Memory Map:** A conceptual layout of all accessible memory addresses within a processor. It defines distinct regions for code, data, stack, heap, and peripheral access.
*   **Memory Regions:** Specific ranges of addresses dedicated to particular types of memory or functionality.
*   **Address Space:** The total range of addresses that a processor can access.
*   **Volatile Memory:** Memory that loses its contents when power is removed (e.g., RAM).
*   **Non-Volatile Memory:** Memory that retains its contents even when power is removed (e.g., Flash, EEPROM).

**Textbook Reference:**

*   **Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3" (2nd Ed.):** Chapter 2 (Embedded C Programming) and Chapter 4 (ARM Cortex-M3 Processor Fundamentals) will provide a good overview of the memory map and its importance.
*   **Yiu, "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors" (3rd Ed.):** Chapter 1 (Introduction to ARM Cortex-M Processors) and Chapter 3 (Memory System) are essential for a deep understanding of the ARM memory architecture.

**Course Alignment:**

*   **CO1 (K3):** Understanding the memory model is a core application of C features in embedded systems, dictating where variables and code are placed.
*   **CO2 (K2):** The memory map directly influences a programmer's view of the processor, showing where different functional blocks reside.

---

### 2. ARM Cortex-M Memory Map Overview (CO1: K3, CO2: K2)

ARM Cortex-M processors, by default, follow a standardized memory map that simplifies hardware design and software development. This map divides the 4GB address space into several distinct regions.

**Key Concepts:**

*   **Main Memory:** Typically Flash memory for storing program code and constant data.
*   **Internal RAM:** On-chip SRAM for storing variables, stack, and heap.
*   **Peripheral Memory:** Memory-mapped registers for controlling and interacting with peripherals (e.g., GPIO, timers, UARTs).
*   **External Device Memory:** Access to memory on external buses (e.g., SDRAM, external Flash).
*   **System Control Space:** Reserved for system-level functions, including the Memory Protection Unit (MPU) and system timers.

**Standard Cortex-M Memory Map (Simplified):**

| Address Range        | Size     | Description                                      |
| :------------------- | :------- | :----------------------------------------------- |
| `0x00000000` - `0x1FFFFFFF` | 512MB    | Code, Constants (typically Flash)                |
| `0x20000000` - `0x3FFFFFFF` | 512MB    | SRAM, Stack, Heap                                |
| `0x40000000` - `0x5FFFFFFF` | 512MB    | Peripheral Memory                                |
| `0x60000000` - `0xDFFFFFFF` | 2GB      | External Device Memory (if applicable)           |
| `0xE0000000` - `0xE00FFFFF` | 1MB      | System Control Space (e.g., NVIC, SysTick)       |
| `0xF0000000` - `0xFFFFFFFF` | 256MB    | Vendor Specific                                  |

**Important Note:** The actual memory available on a specific microcontroller will be a subset of this general map. The datasheet for the target microcontroller is the definitive source.

**Example:**

In a typical Cortex-M microcontroller, the Flash memory might be mapped from `0x00000000` to `0x0003FFFF` (256KB), and the internal SRAM from `0x20000000` to `0x20007FFF` (32KB). Peripheral registers for GPIO port A might be located at `0x40010800`.

**Textbook Reference:**

*   **Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3" (2nd Ed.):** Chapter 4 provides diagrams and explanations of the Cortex-M3 memory map.
*   **Yiu, "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors" (3rd Ed.):** Chapter 3 offers a detailed breakdown of the memory regions, including their intended usage and access characteristics.
*   **Zhu, "Embedded systems with ARM Cortex M Microcontrollers in Assembly and C" (3rd Ed.):** Chapter 4 discusses memory organization and memory-mapped I/O, crucial for understanding peripheral access.

**Course Alignment:**

*   **CO1 (K3):** C's ability to specify memory locations (e.g., through pointers) directly relates to this map.
*   **CO2 (K2):** The memory map is a fundamental aspect of the programmer's view of the processor.

---

### 3. C Language Constructs for Memory Access (CO1: K3, CO3: K3)

Embedded C provides powerful constructs that allow developers to directly interact with and control memory, aligning with the specific requirements of embedded systems.

**Key Concepts:**

*   **Pointers:** Variables that store memory addresses. Essential for accessing data at specific locations, including peripheral registers.
*   **Volatile Keyword:** Informs the compiler that a variable's value can change unexpectedly (e.g., by hardware). The compiler must not optimize away reads or writes to volatile variables. This is critical for memory-mapped peripherals.
*   **`const` Keyword:** Indicates that a variable's value should not be modified after initialization. Often used for program code and constant data stored in Flash.
*   **Type Casting:** Explicitly changing the data type of a value. Used to treat integer values as pointers to specific memory addresses.
*   **`#define` and `typedef`:** Preprocessor directives used to create symbolic names for memory addresses and data types, improving code readability and maintainability.

**Examples:**

**a) Accessing Peripheral Registers:**

Let's assume a peripheral register (e.g., a GPIO data register) is mapped at address `0x40010800`.

```c
// Using #define for readability
#define GPIO_PORTA_DATA_REG (*(volatile unsigned int *)0x40010800)

void set_gpio_pin(void) {
    // Set the first bit (Pin 0) of the GPIO Port A Data Register
    GPIO_PORTA_DATA_REG |= (1 << 0);
}
```

*   `volatile unsigned int *`: Declares a pointer to an `unsigned int` that is volatile. This prevents the compiler from optimizing out reads/writes to this address.
*   `*(volatile unsigned int *)0x40010800`: This is a type cast and dereference. It treats the address `0x40010800` as a pointer to a volatile unsigned integer, and then dereferences it to access the value at that address.

**b) Storing Constant Data:**

```c
const unsigned char message[] = "Hello, Embedded World!";
```

The compiler will typically place this `message` array in the read-only memory (ROM) or Flash memory, preventing accidental modification.

**c) Using `typedef` for Structures:**

```c
typedef struct {
    volatile unsigned int DATA;
    volatile unsigned int DIRECTION;
    // ... other registers
} GPIO_TypeDef;

#define GPIO_PORTA ((GPIO_TypeDef *) 0x40010800)

void configure_gpio_pin(void) {
    // Configure Pin 0 of Port A as output
    GPIO_PORTA->DIRECTION |= (1 << 0);
    // Set Pin 0 high
    GPIO_PORTA->DATA |= (1 << 0);
}
```

This structured approach makes peripheral access much cleaner and more organized.

**Textbook Reference:**

*   **Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3" (2nd Ed.):** Chapter 2 covers C language features like pointers, `const`, and `volatile`. Chapter 6 ("Embedded C Functions") will likely discuss structured access to memory.
*   **Zhu, "Embedded systems with ARM Cortex M Microcontrollers in Assembly and C" (3rd Ed.):** Chapter 4 on memory organization and Chapter 7 on C programming for embedded systems will provide practical examples of using `volatile` and pointers for hardware manipulation.

**Course Alignment:**

*   **CO1 (K3):** Demonstrates the practical application of C features (pointers, volatile, const, typedef) for embedded memory management.
*   **CO3 (K3):** Understanding how to directly access memory with C is crucial when deciding whether C is sufficient or if assembly is needed for specific low-level hardware control.

---

### 4. Memory Sections and Linker Scripts (CO1: K3)

While the ARM processor defines a memory map, the linker script is responsible for assigning specific memory regions (sections) of your compiled program (code, initialized data, uninitialized data) to physical locations within that map.

**Key Concepts:**

*   **Sections:** Segments of the executable program file, such as `.text` (code), `.data` (initialized global/static variables), and `.bss` (uninitialized global/static variables).
*   **Linker Script (`.ld` file):** A configuration file for the linker, specifying memory regions, section placement, and symbol definitions. It dictates how the compiled object files are combined into a final executable image.
*   **Memory Regions in Linker Script:** Defines the start address and size of available memory blocks (e.g., `FLASH`, `RAM`).
*   **Section Placement:** The linker script instructs the linker where to place each section within the defined memory regions.

**Example (Conceptual Linker Script Snippet):**

```ld
MEMORY
{
  FLASH (rx) : ORIGIN = 0x08000000, LENGTH = 128K
  RAM (xrw)  : ORIGIN = 0x20000000, LENGTH = 32K
}

SECTIONS
{
  .text :
  {
    KEEP(*(.isr_vector)) /* Place interrupt vector table at the beginning */
    *(.text)             /* Place code sections */
    *(.text.*)
    *(.rodata)           /* Place read-only data */
    *(.rodata.*)
  } > FLASH

  .data : AT ( ADDR(.text) + SIZEOF(.text) ) /* Initialize data placed after code */
  {
    *(.data)
    *(.data.*)
  } > RAM

  .bss :
  {
    *(.bss)              /* Uninitialized data */
    *(.bss.*)
    *(COMMON)
  } > RAM
}
```

**Explanation:**

*   `MEMORY` block defines `FLASH` and `RAM` regions with their starting addresses (`ORIGIN`) and sizes (`LENGTH`).
*   `SECTIONS` block specifies where each section (`.text`, `.data`, `.bss`) should be placed.
*   `.text` is placed in `FLASH`.
*   `.data` is initialized in `FLASH` but loaded into `RAM` at runtime.
*   `.bss` is placed directly in `RAM` and typically zero-initialized by startup code.

**Important Points to Remember:**

*   **Initialization of `.data`:** Variables in the `.data` section are initialized in Flash and copied to RAM during the program's startup sequence.
*   **Initialization of `.bss`:** Variables in the `.bss` section are not stored in the executable image, saving space. They are initialized to zero by the startup code.
*   **Stack and Heap:** These are typically allocated in the `.bss` section or explicitly defined in the linker script.

**Textbook Reference:**

*   **Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3" (2nd Ed.):** Chapter 5 ("Memory Management and the Linker") is crucial for understanding how linker scripts manage memory sections.
*   **Yiu, "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors" (3rd Ed.):** Chapter 3 delves into memory systems and how they are configured, including the role of the linker.
*   **Zhu, "Embedded systems with ARM Cortex M Microcontrollers in Assembly and C" (3rd Ed.):** Chapter 4 will cover memory organization and the use of linker scripts for memory mapping.

**Course Alignment:**

*   **CO1 (K3):** Understanding and potentially modifying linker scripts is a critical C programming skill for embedded systems to control memory allocation.

---

### 5. Stack and Heap Memory Management (CO1: K3)

The stack and heap are dynamic memory regions used for function calls, local variables, and dynamically allocated memory, respectively.

**Key Concepts:**

*   **Stack:** A region of memory used for storing function call information (return addresses, parameters) and local variables. It grows downwards in memory.
    *   **Stack Pointer (SP):** A register that points to the top of the stack.
    *   **Push/Pop Operations:** Adding or removing data from the stack.
*   **Heap:** A region of memory used for dynamic memory allocation (e.g., using `malloc`, `calloc`, `realloc`, `free`). It is generally less structured than the stack.
*   **Stack Overflow:** Occurs when the stack pointer moves beyond the allocated stack memory, often due to excessive function nesting or large local variables. This can lead to program crashes or unpredictable behavior.
*   **Heap Fragmentation:** A common issue with dynamic memory allocation where the heap becomes divided into small, unusable blocks, even if there is enough total free memory.

**Memory Placement in the Map:**

*   The stack typically resides in the `.bss` or a specifically defined `STACK` section, often at the highest address of the available RAM and grows downwards.
*   The heap also resides in RAM and grows upwards, typically starting after the statically allocated data and ending before the stack.

**Example:**

```c
int global_var; // Placed in .bss

void myFunction(int param) {
    int local_var_stack; // Stored on the stack
    static int static_var = 10; // Stored in .data or .bss (initialized or not)

    local_var_stack = param * 2;
    // ...
}

int main() {
    int* dynamic_array = (int*)malloc(10 * sizeof(int)); // Allocated from heap
    if (dynamic_array != NULL) {
        // Use dynamic_array
        free(dynamic_array); // Release memory
    }
    myFunction(5);
    return 0;
}
```

**Important Points to Remember:**

*   **Stack Size:** The stack size must be carefully chosen. Too small, and you risk stack overflows. Too large, and you waste valuable RAM.
*   **Dynamic Allocation in Embedded Systems:** Use `malloc` and `free` with caution in deeply embedded systems due to potential fragmentation and the overhead involved. Consider static allocation or custom memory allocators if possible.
*   **Runtime Initialization:** Startup code typically initializes the stack pointer and zero-initializes the `.bss` section before `main()` is called.

**Textbook Reference:**

*   **Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3" (2nd Ed.):** Chapter 5 on memory management will discuss stack and heap.
*   **Zhu, "Embedded systems with ARM Cortex M Microcontrollers in Assembly and C" (3rd Ed.):** Chapter 8 ("C Language Features for Embedded Systems") often covers stack usage and dynamic memory management.

**Course Alignment:**

*   **CO1 (K3):** Understanding how C manages memory for function calls and dynamic allocation is crucial for writing robust embedded code.

---

### 6. Memory Alignment (CO1: K3, CO2: K2)

Memory alignment refers to the requirement that data items should be stored in memory at addresses that are multiples of their size. This can significantly impact performance and, in some architectures, is a strict requirement.

**Key Concepts:**

*   **Alignment Requirement:** A data type has an alignment requirement equal to its size (e.g., a 4-byte `int` has an alignment of 4 bytes).
*   **Aligned Access:** Reading or writing data at an address that is a multiple of its alignment requirement.
*   **Unaligned Access:** Reading or writing data at an address that is not a multiple of its alignment requirement.
*   **Performance Impact:** Aligned accesses are generally faster than unaligned accesses because they can be performed in a single bus transaction. Unaligned accesses may require multiple transactions or special hardware support, leading to performance degradation.
*   **ARM Cortex-M Behavior:** ARM Cortex-M processors (especially M3 and later) generally support unaligned accesses, but they are often slower. Some older ARM architectures or specific configurations might fault on unaligned accesses.

**Example:**

Consider an array of 4-byte integers:

```c
int data[3];
```

If `data[0]` is placed at address `0x20000000` (which is divisible by 4), then:
*   `data[0]` is at `0x20000000` (aligned)
*   `data[1]` is at `0x20000004` (aligned)
*   `data[2]` is at `0x20000008` (aligned)

Now, imagine `data[0]` is placed at address `0x20000001`:
*   `data[0]` is at `0x20000001` (unaligned)
*   `data[1]` is at `0x20000005` (unaligned)
*   `data[2]` is at `0x20000009` (unaligned)

Accessing `data[1]` from `0x20000001` would involve crossing a 4-byte boundary.

**How C Handles Alignment:**

*   The compiler and the linker, guided by the target architecture's ABI (Application Binary Interface), generally ensure that data structures are aligned appropriately.
*   For structures, members are typically laid out to satisfy their individual alignment requirements, and the structure itself might be padded to align with its largest member.

**Controlling Alignment in C:**

*   **`__attribute__((aligned(N)))` (GCC/Clang):** A compiler-specific extension to enforce alignment for variables.

```c
int __attribute__((aligned(8))) aligned_int; // Ensure this int is 8-byte aligned
```

*   **`#pragma pack(N)` (GCC/Clang):** Used to control the packing of structures, potentially reducing memory usage but also affecting alignment and performance.

```c
#pragma pack(push, 1) // Pack structures to 1-byte boundary
struct PackedData {
    char a;
    int b;
    char c;
};
#pragma pack(pop)
```

**Textbook Reference:**

*   **Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3" (2nd Ed.):** Chapter 2 or 5 might touch upon data alignment.
*   **Yiu, "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors" (3rd Ed.):** Chapter 3 on memory systems will discuss alignment and its impact on the Cortex-M architecture.

**Course Alignment:**

*   **CO1 (K3):** Understanding and potentially controlling alignment using C features is important for optimization.
*   **CO2 (K2):** Knowledge of alignment is part of a programmer's understanding of how data is laid out in memory by the processor.

---

### 7. Memory Protection Unit (MPU) (CO2: K2, CO1: K3 - indirect)

While not directly a C language feature, understanding the MPU is crucial for embedded developers as it influences how memory can be accessed and protected, which can affect the design of embedded C programs, especially in RTOS environments.

**Key Concepts:**

*   **Memory Protection:** The ability to prevent certain regions of memory from being accessed by specific tasks or the system itself, or to restrict access to read-only.
*   **MPU:** A hardware unit within the processor that implements memory protection by defining memory regions with associated access permissions (read, write, execute) and attributes (cacheable, bufferable).
*   **Regions:** The MPU divides the memory map into a limited number of configurable regions.
*   **Access Permissions:** Define whether a region can be accessed by privileged or unprivileged code, and whether it's read-only or read-write.
*   **Use Cases:**
    *   **RTOS:** Essential for isolating tasks from each other, preventing one task from corrupting another's memory or the kernel's memory.
    *   **Security:** Protecting critical code or data from unauthorized access.
    *   **Debugging:** Identifying memory access violations.

**How it relates to C:**

*   While you don't directly program the MPU with standard C keywords, you might interact with MPU configuration routines provided by an RTOS or HAL (Hardware Abstraction Layer).
*   Your C code's behavior might be affected if it attempts to access memory outside its permitted region, leading to an MPU fault.

**Textbook Reference:**

*   **Lewis, "Fundamentals of Embedded Software with the ARM Cortex M3" (2nd Ed.):** Chapter 4 might briefly mention MPU as a processor feature.
*   **Yiu, "The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors" (3rd Ed.):** Chapter 3 provides a detailed explanation of the MPU and its configuration.

**Course Alignment:**

*   **CO2 (K2):** Understanding the MPU is part of a programmer's view of the processor's advanced features.
*   **CO1 (K3 - indirect):** While not a direct C feature, the MPU's capabilities influence how C code is structured and what memory accesses are permissible, impacting the design of embedded C programs.

---

### Practice Questions and Exercises

**Questions:**

1.  **Define** the terms "memory map" and "memory region" in the context of ARM processors. (CO2: K2)
2.  Why is the `volatile` keyword essential when accessing memory-mapped peripheral registers in embedded C? (CO1: K3)
3.  Explain the purpose of a linker script in assigning C program sections (`.text`, `.data`, `.bss`) to physical memory. (CO1: K3)
4.  What is the primary difference between the `.data` and `.bss` sections regarding initialization and storage in the executable image? (CO1: K3)
5.  Describe a potential problem that can arise from improper stack management in an embedded system programmed in C. (CO1: K3)
6.  How does memory alignment affect the performance of a processor? (CO1: K3, CO2: K2)
7.  Given a peripheral register at address `0x40010804` for setting a bit in a GPIO port, write a C code snippet using `#define` and `volatile` to set the second bit (bit 1). (CO1: K3)
8.  What is the role of the Memory Protection Unit (MPU) in an embedded system? (CO2: K2)

**Exercises:**

1.  **Research:** Find the memory map for a specific ARM Cortex-M microcontroller (e.g., STM32F103 or NXP LPC17xx). Note the address ranges for Flash, SRAM, and key peripherals. Document your findings. (CO2: K2)
2.  **Linker Script Modification (Conceptual):** Imagine you need to place a specific array of constants in a dedicated read-only memory area that starts at `0x08080000`. How would you modify a conceptual linker script to achieve this? (CO1: K3)
3.  **Code Analysis:** Analyze the following C code snippet for a microcontroller. Identify where `my_variable`, `counter`, and `config_reg` are likely to be placed in memory and discuss any alignment considerations.

    ```c
    int my_variable = 100; // Global initialized variable
    volatile uint32_t config_reg = 0x00000001; // Peripheral configuration register

    void process_data(void) {
        static int counter = 0; // Static variable
        counter++;
        // Assume config_reg is at 0x40000000
        if ((config_reg & 0x02) != 0) {
            my_variable += counter;
        }
    }
    ```
    (CO1: K3, CO2: K2)

---

### Answers to Practice Questions

**Questions:**

1.  **Memory Map:** A conceptual layout of all accessible memory addresses within a processor, defining distinct regions for code, data, peripherals, etc. **Memory Region:** A specific range of addresses within the memory map dedicated to a particular type of memory or functionality (e.g., Flash region, SRAM region, Peripheral region).
2.  The `volatile` keyword is essential because peripheral registers can be modified by external hardware independently of the CPU. Without `volatile`, the compiler might optimize away reads or writes to these registers, assuming their values don't change unexpectedly, leading to incorrect hardware control.
3.  The linker script tells the linker how to combine different sections of your program (e.g., `.text` for code, `.data` for initialized variables, `.bss` for uninitialized variables) and place them into specific physical memory areas (like Flash or RAM) as defined by the microcontroller's memory map.
4.  The `.data` section contains initialized global and static variables. These variables are stored in the executable image (in Flash) and their initial values are copied to RAM during program startup. The `.bss` section contains uninitialized global and static variables. These variables are *not* stored in the executable image, saving space. They are typically initialized to zero by the startup code before `main()` is called.
5.  A potential problem is **stack overflow**. This occurs when the stack pointer moves beyond the allocated stack memory, usually due to too many nested function calls, large local variables, or excessively deep recursion. This can corrupt other memory regions, leading to crashes or unpredictable behavior.
6.  Memory alignment ensures that data is stored at addresses that are multiples of its size. Aligned accesses are typically faster because they can often be completed in a single bus transaction. Unaligned accesses may require multiple transactions or special hardware handling, leading to performance degradation.
7.  ```c
    #define PERIPH_CONFIG_REG (*(volatile uint32_t *)0x40000000)

    void set_config_bit(void) {
        PERIPH_CONFIG_REG |= (1 << 1); // Set the second bit (bit 1)
    }
    ```
8.  The MPU (Memory Protection Unit) is a hardware component that enforces memory access policies. It defines regions of memory and their associated access permissions (e.g., read-only, read-write, privileged-only access). This is used to protect memory from unauthorized access, isolate different tasks in an RTOS, and enhance system security and reliability.

---

### Important Points to Remember

*   **Datasheet is King:** Always refer to the specific microcontroller's datasheet for the definitive memory map and peripheral register details.
*   **`volatile` is Crucial:** Use `volatile` for any variable that can be modified by hardware or by an interrupt service routine, especially peripheral registers.
*   **Linker Script Control:** The linker script is your primary tool for controlling where your code and data reside in memory.
*   **Stack Overflow Risk:** Be mindful of stack usage. Recursion and large local variables can quickly exhaust the stack.
*   **Alignment for Performance:** While Cortex-M processors often handle unaligned accesses, ensuring alignment can improve performance.
*   **`const` for Read-Only:** Use `const` for data that should not be changed, allowing it to be placed in Flash memory.

---
This study material provides a comprehensive overview of the memory model in the context of embedded C programming for ARM architecture, covering key concepts, textbook references, and practical examples, all aligned with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
