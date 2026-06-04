---
title: "Review of computer organization: Memory, CPU, IO"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feae2"
status: "completed"
scrapedAt: "2026-05-23T17:53:16.829Z"
---
# ARM Architecture and Programming: Module 1 - Embedded C: Fixed

## Topic: Review of Computer Organization: Memory, CPU, IO

This module provides a fundamental review of computer organization, focusing on the core components essential for understanding embedded systems development with ARM processors. We will revisit the roles of the Central Processing Unit (CPU), Memory, and Input/Output (I/O) devices, emphasizing how these elements interact in a typical embedded system. This review is crucial for grasping how C code translates into instructions executed by the ARM processor and how it interacts with the hardware.

**Textbook Reference:** Lewis, Chapter 1 (Introduction to Embedded Systems) and relevant sections on hardware architecture.

**Course Outcome Alignment:**
*   **CO1 (K3):** Understanding the basic organization of a computer system is fundamental to using C features effectively in embedded systems, as we'll see how data is stored, processed, and communicated.
*   **CO2 (K2):** This topic directly addresses a programmer's view of the processor architecture by detailing the CPU, memory, and I/O.
*   **CO3 (K3):** A solid understanding of computer organization helps in deciding when assembly language might be more appropriate for low-level hardware interaction compared to C.

---

### 1. The Central Processing Unit (CPU)

The CPU is the "brain" of the computer system. It fetches instructions from memory, decodes them, and executes them. In the context of ARM architecture, we are primarily concerned with the ARM Cortex-M family, which are designed for microcontrollers and embedded applications.

**1.1 Key Components of a CPU:**

*   **Arithmetic Logic Unit (ALU):** Performs arithmetic operations (addition, subtraction, multiplication, division) and logical operations (AND, OR, NOT, XOR).
    *   **Example:** An instruction like `ADD R0, R1, R2` would have the ALU add the values in registers R1 and R2 and store the result in R0.
*   **Control Unit (CU):** Directs the operation of the processor. It fetches instructions from memory, decodes them, and generates control signals to the ALU, memory, and I/O devices.
    *   **Key Role:** The CU orchestrates the entire instruction execution cycle.
*   **Registers:** Small, high-speed storage locations within the CPU that hold data, instructions, and memory addresses currently being processed.
    *   **Types of Registers:**
        *   **General-Purpose Registers (GPRs):** Used for storing data and intermediate results. In ARM Cortex-M, these are typically R0-R12.
        *   **Program Counter (PC):** Holds the memory address of the next instruction to be fetched.
        *   **Stack Pointer (SP):** Points to the top of the stack, a region of memory used for temporary data storage, function parameters, and return addresses.
        *   **Link Register (LR):** Stores the return address when a function call is made.
        *   **Status Registers (e.g., CPSR - Current Program Status Register):** Contains flags that indicate the result of operations (e.g., zero flag, carry flag) and processor status bits (e.g., interrupt enable/disable).
    *   **Reference:** Yiu, Chapter 2 (ARM Cortex-M Processor Architecture) provides detailed information on the register set of Cortex-M processors.
    *   **Important Point:** Registers are the fastest way for the CPU to access data. Efficient use of registers is crucial for performance.

**1.2 Instruction Execution Cycle (Fetch-Decode-Execute):**

1.  **Fetch:** The CU fetches the next instruction from memory, using the address stored in the Program Counter (PC).
2.  **Decode:** The instruction is decoded by the CU to determine what operation needs to be performed and which operands are involved.
3.  **Execute:** The CU sends control signals to the appropriate units (ALU, memory, etc.) to carry out the operation. This might involve fetching data from memory, performing a calculation, or writing data to memory.
4.  **Write-back (Optional):** The result of the execution is written back to a register or memory.

**1.3 Programmer's View of the CPU (CO2 - K2):**

From a programmer's perspective, the CPU is accessed through its registers and the instruction set. C code is translated by a compiler into a sequence of these machine instructions. Understanding the register set (e.g., R0-R12, SP, LR, PC) helps in optimizing code and debugging.

*   **Example:** When you write a C function, the compiler might map local variables to registers for faster access. The function call mechanism uses the Link Register (LR) and Stack Pointer (SP) to manage execution flow.

---

### 2. Memory

Memory is where instructions and data are stored. Embedded systems typically use different types of memory, each with its own characteristics.

**2.1 Types of Memory:**

*   **Random Access Memory (RAM):**
    *   **Volatile:** Data is lost when power is removed.
    *   **Read/Write:** Data can be read from and written to.
    *   **Types:**
        *   **SRAM (Static RAM):** Faster, more expensive, and consumes more power than DRAM. Often used for CPU caches and on-chip memory.
        *   **DRAM (Dynamic RAM):** Slower, less expensive, and denser than SRAM. Used for main system memory.
    *   **In Embedded Systems:** Often used for variables, stack, and heap.
*   **Read-Only Memory (ROM):**
    *   **Non-Volatile:** Data persists even when power is removed.
    *   **Read-Only (typically):** Data is programmed during manufacturing or by a specific process and cannot be easily changed by the running program.
    *   **Types:**
        *   **Mask ROM:** Programmed at the factory, for high-volume production.
        *   **PROM (Programmable ROM):** Can be programmed once by the user.
        *   **EPROM (Erasable Programmable ROM):** Can be erased by UV light and reprogrammed.
        *   **EEPROM (Electrically Erasable Programmable ROM):** Can be electrically erased and reprogrammed, often in sectors.
        *   **Flash Memory:** A type of EEPROM that can be erased and reprogrammed in blocks, offering higher density and faster writes than traditional EEPROM. This is the most common non-volatile memory for storing program code in modern microcontrollers.
    *   **In Embedded Systems:** Used to store the program executable (firmware), constant data, and configuration settings.
*   **Memory-Mapped I/O:**
    *   **Concept:** I/O devices are treated as memory locations. The CPU accesses I/O registers by reading from or writing to specific memory addresses.
    *   **Reference:** Lewis, Chapter 2 (Processor Architecture for Embedded Systems) discusses memory-mapped I/O.
    *   **Important Point:** This unification simplifies the instruction set, as the same load/store instructions used for memory access can be used for I/O access.

**2.2 Memory Addressing:**

*   Each byte of memory has a unique address. The CPU uses these addresses to access specific data or instructions.
*   **Byte-addressable:** The smallest unit of addressable memory is a byte.
*   **Word-addressable:** Some architectures may have word-aligned access, where instructions must start at addresses that are multiples of the word size. ARM Cortex-M is typically byte-addressable.

**2.3 Memory Organization in Embedded Systems (ARM Cortex-M Example):**

ARM Cortex-M microcontrollers typically have a unified memory map that includes:

*   **Code/Flash Memory:** For program instructions.
*   **RAM:** For variables, stack, heap.
*   **Peripherals:** I/O devices (GPIO, UART, SPI, Timers, ADC, etc.) are mapped into the memory space.

**2.4 Programmer's View of Memory (CO1 - K3):**

As C programmers, we interact with memory through:

*   **Variable Declarations:** `int x;` allocates space in RAM for variable `x`.
*   **Pointers:** `int *ptr = &x;` stores the memory address of `x` in `ptr`.
*   **Array Access:** `myArray[5]` accesses the sixth element of `myArray` in memory.
*   **`const` Keyword:** `const int MAX_VALUE = 100;` typically places the value in read-only memory (e.g., Flash).
*   **Memory Allocation:** `malloc()` and `free()` for dynamic memory allocation on the heap.

**Example:**

```c
// Global variable, typically placed in RAM or Flash depending on linkage
int global_var = 10;

void myFunction() {
    // Local variable, typically on the stack (RAM)
    int local_var = 20;
    // Pointer to local_var
    int *ptr_local = &local_var;

    // Accessing global_var
    global_var++;

    // Accessing local_var through pointer
    *ptr_local = 30;

    // Function call might push return address onto the stack
    // and potentially parameters.
}
```

---

### 3. Input/Output (I/O)

I/O devices are the interfaces through which the embedded system communicates with the external world or other hardware components.

**3.1 Categories of I/O Devices:**

*   **Input Devices:** Provide data to the CPU (e.g., buttons, sensors, keypads, A/D converters).
*   **Output Devices:** Receive data from the CPU to control external components (e.g., LEDs, motors, displays, DACs, UART).
*   **Bidirectional Devices:** Can both send and receive data (e.g., communication interfaces like UART, SPI, I2C).

**3.2 Methods of I/O Communication:**

*   **Memory-Mapped I/O (MMIO):** As discussed earlier, I/O registers are treated as memory locations. The CPU uses the same load/store instructions. This is the prevalent method in ARM Cortex-M.
*   **Port-Mapped I/O (PMIO):** Dedicated I/O instructions are used to access I/O ports. Less common in modern ARM architectures like Cortex-M.

**3.3 Programmer's View of I/O (CO1 - K3, CO2 - K2):**

In memory-mapped I/O systems, C code interacts with I/O devices by reading from and writing to specific memory addresses that correspond to I/O registers.

*   **Peripheral Register Access:** You'll use pointers to access these registers.
    *   **Example:** To set a General Purpose Input/Output (GPIO) pin as an output and turn on an LED connected to it:

    Consider a hypothetical GPIO peripheral with a Data Register (GPIO_DATA) and a Direction Register (GPIO_DIR).

    ```c
    // Define the memory address of the GPIO peripheral registers
    // These addresses are specific to the microcontroller
    #define GPIO_PORTA_BASE   0x40010800
    #define GPIO_DATA_REG     (*((volatile unsigned int *)(GPIO_PORTA_BASE + 0x00)))
    #define GPIO_DIR_REG      (*((volatile unsigned int *)(GPIO_PORTA_BASE + 0x04)))

    // Let's assume we want to control pin 5
    #define PIN_5 (1 << 5) // Binary: 0010 0000

    void initializeLED(void) {
        // Set pin 5 of Port A as an output
        // Read current direction, set bit 5 to 1 (output)
        GPIO_DIR_REG |= PIN_5;
    }

    void turnLEDOn(void) {
        // Write a '1' to the data register at pin 5 to turn the LED ON
        GPIO_DATA_REG |= PIN_5;
    }

    void turnLEDOff(void) {
        // Write a '0' to the data register at pin 5 to turn the LED OFF
        GPIO_DATA_REG &= ~PIN_5;
    }

    int main(void) {
        initializeLED();
        turnLEDOn();
        // ... program continues ...
        return 0;
    }
    ```
    *   **`volatile` Keyword:** This is crucial when accessing peripheral registers. It tells the compiler that the value of the variable can change at any time without any action being taken by the software. This prevents the compiler from optimizing away read/write operations to these registers, ensuring that the actual hardware is accessed.
    *   **Pointer Casting:** `(*((volatile unsigned int *)(address)))` is a common way to declare a pointer to a hardware register at a specific memory address.

*   **Abstraction Layers:** Embedded systems often use libraries or drivers to abstract the low-level register manipulation, providing functions like `digitalWrite(pin, state)` or `uart_send_byte(data)`. Understanding the underlying register access is still important for debugging and optimization (CO3 - K3).

**3.4 I/O Control Mechanisms:**

*   **Polling:** The CPU repeatedly checks the status of an I/O device until it is ready for the next operation. This can be inefficient as the CPU spends time waiting.
*   **Interrupts:** When an I/O device needs attention (e.g., data received by UART), it can signal the CPU via an interrupt. The CPU temporarily suspends its current task, handles the interrupt service routine (ISR), and then resumes its original task. This is a much more efficient way to handle I/O.
    *   **Reference:** Yiu, Chapter 4 (Interrupts and Exception Handling) covers this in detail.
    *   **C Implementation:** ISRs are special functions written in C (or sometimes assembly) that are executed when a specific interrupt occurs.

---

### Key Concepts and Definitions to Remember:

*   **CPU:** Executes instructions (ALU, CU, Registers).
*   **Registers:** Fastest storage within the CPU (GPRs, PC, SP, LR, CPSR).
*   **Memory:** Stores instructions and data (RAM, ROM, Flash).
*   **Memory-Mapped I/O:** I/O devices accessed as memory locations.
*   **`volatile` Keyword:** Prevents compiler optimization for hardware registers.
*   **Instruction Execution Cycle:** Fetch-Decode-Execute.
*   **Embedded System Architecture:** Unified memory map for code, data, and peripherals.

---

### Practice Questions and Exercises:

**Question 1:**
What is the primary function of the Arithmetic Logic Unit (ALU) within a CPU?
A. To fetch instructions from memory.
B. To decode instructions and generate control signals.
C. To perform arithmetic and logical operations.
D. To store temporary data and program addresses.

**Answer:** C. To perform arithmetic and logical operations.

**Question 2:**
Why is the `volatile` keyword essential when declaring pointers to peripheral registers in embedded C programming?
A. It makes the variable read-only.
B. It tells the compiler that the variable's value can change unexpectedly, preventing optimization.
C. It increases the speed of memory access.
D. It allocates the variable on the stack.

**Answer:** B. It tells the compiler that the variable's value can change unexpectedly, preventing optimization.

**Question 3:**
Describe the role of the Program Counter (PC) and the Link Register (LR) in managing program execution flow.

**Answer:**
The **Program Counter (PC)** holds the memory address of the next instruction to be fetched and executed. As instructions are executed, the PC is updated to point to the subsequent instruction.
The **Link Register (LR)** is used to store the return address when a function call is made. When a subroutine (function) is invoked, the address of the instruction following the call is typically saved in the LR. This allows the subroutine to return to the correct location in the calling code after its execution is complete.

**Question 4 (Practical/Conceptual):**
Imagine you are programming a microcontroller to blink an LED connected to Port B, Pin 3. The datasheet for your microcontroller indicates that the base address for Port B is `0x40010C00`, and the Data Register (for setting pin states) is at an offset of `0x00` from the base address. The Direction Register (for setting pin direction) is at an offset of `0x04`.

Write C code snippets (using placeholder definitions for the registers) to:
a) Configure Pin 3 of Port B as an output.
b) Turn the LED ON (set Pin 3 to HIGH).
c) Turn the LED OFF (set Pin 3 to LOW).

**Answer:**

```c
// Placeholder definitions for register addresses
// In a real scenario, these would be based on the microcontroller's datasheet
#define GPIOB_BASE      0x40010C00
#define GPIOB_DATA_REG  (*((volatile unsigned int *)(GPIOB_BASE + 0x00)))
#define GPIOB_DIR_REG   (*((volatile unsigned int *)(GPIOB_BASE + 0x04)))

#define PIN_3 (1 << 3) // Binary: 0000 1000

// a) Configure Pin 3 of Port B as an output
void configurePin3Output(void) {
    GPIOB_DIR_REG |= PIN_3; // Set the 3rd bit to 1 for output
}

// b) Turn the LED ON (set Pin 3 to HIGH)
void turnLEDOn(void) {
    GPIOB_DATA_REG |= PIN_3; // Set the 3rd bit to 1
}

// c) Turn the LED OFF (set Pin 3 to LOW)
void turnLEDOff(void) {
    GPIOB_DATA_REG &= ~PIN_3; // Clear the 3rd bit to 0
}

// Example usage in main:
/*
int main(void) {
    configurePin3Output();
    turnLEDOn();
    // ... do other things ...
    // turnLEDOff();
    return 0;
}
*/
```

---

### Important Points to Remember:

*   **Hardware is Key:** Embedded systems programming is intrinsically linked to the underlying hardware architecture. Understanding the CPU, memory map, and peripheral registers is paramount.
*   **`volatile` is Not Optional:** Always use `volatile` for hardware register access.
*   **Register Definitions:** Accurate register definitions, often found in header files provided by the microcontroller vendor, are critical for correct hardware interaction.
*   **C vs. Assembly:** While C is powerful, for extremely time-critical operations or direct hardware manipulation not easily expressed in C, assembly language might be necessary (addressed in later modules).
*   **Textbook Review:** Revisit the chapters mentioned in the textbooks for deeper insights into the specific ARM Cortex-M architecture and its organizational details. Lewis provides a good general overview, while Yiu offers a more in-depth technical dive into the processor.

---

This review sets the foundation for understanding how to program ARM microcontrollers using Embedded C. The subsequent modules will build upon this knowledge, focusing on specific C language features and their application in embedded contexts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
