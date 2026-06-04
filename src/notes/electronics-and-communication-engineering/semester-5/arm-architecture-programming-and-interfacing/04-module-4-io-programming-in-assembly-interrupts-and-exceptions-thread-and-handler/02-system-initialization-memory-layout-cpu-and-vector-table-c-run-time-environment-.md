---
title: "System initialization: Memory layout, cpu and vector table, C run-time environment, System Timer"
subject: "ARM ARCHITECTURE, PROGRAMMING AND INTERFACING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions, thread and handler modes, entering the exception handler, returning from exception handler, latency reduction techniques, priorities and nested exceptions, synchronization, transfer rate and latency, buffers and queues, double buffering, polled waiting loops, interrupt driven IO, DMA"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec18"
status: "completed"
scrapedAt: "2026-05-23T17:53:56.344Z"
---
This document provides comprehensive study notes for the topic "System Initialization" within Module 4: IO Programming in Assembly of ARM Architecture, Programming, and Interfacing. These notes are designed to align with the provided learning outcomes, course outcomes, and incorporate insights from the specified textbooks.

---

# Module 4: IO Programming in Assembly - System Initialization

## 1. Introduction to System Initialization

System initialization is the crucial first step in bringing an embedded system to life. It involves setting up the processor, memory, peripherals, and essential software components to a known, operational state. For ARM Cortex-M microcontrollers, this process is fundamental for enabling any subsequent operation, including I/O programming and interrupt handling.

**Key Concept:** Initialization ensures that the system starts in a predictable and safe state, allowing the program to execute correctly.

## 2. Memory Layout

Understanding the memory map of an ARM Cortex-M microcontroller is essential for effective system initialization. The memory map defines the address ranges allocated to different functional blocks.

### 2.1. Typical Memory Map Components

*   **Flash Memory:** Stores the program code (instructions) and constant data.
*   **SRAM (Static Random-Access Memory):** Used for variables, stack, and heap. It's volatile and loses its content when power is removed.
*   **Peripheral Memory-Mapped Registers:** Each peripheral (e.g., GPIO, UART, Timer) has a set of control and data registers mapped to specific memory addresses. Accessing these addresses allows software to configure and interact with the peripherals.
*   **System Control Block (SCB):** Contains registers for processor control, such as exception handling, system reset, and configuration.
*   **NVIC (Nested Vectored Interrupt Controller):** Manages interrupt prioritization and routing.

**Example:** A microcontroller might have Flash starting at `0x00000000`, SRAM from `0x20000000`, and peripheral registers starting from `0x40000000`. The exact addresses are device-specific and can be found in the microcontroller's datasheet.

**Reference:** *Fundamentals of Embedded Software with the ARM Cortex M3* by Daniel W. Lewis often dedicates chapters to memory architecture and memory-mapped peripherals, providing detailed examples of common memory maps.

### 2.2. Linker Scripts

The linker script is a critical file in embedded development that dictates how the compiler's output (object files) is combined and placed into the final executable image. It defines the memory regions available and assigns sections of the code and data to specific memory addresses.

**Key Concepts:**
*   **Sections:** Code (`.text`), initialized data (`.data`), uninitialized data (`.bss`), stack (`.stack`), heap (`.heap`).
*   **Memory Regions:** Defines the start address and size of Flash, RAM, etc.
*   **Entry Point:** Specifies the starting address of the program execution.

**Example (Simplified Linker Script Snippet):**

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
    KEEP(*(.vectors)) /* Place vector table first */
    *(.text*)
  } > FLASH

  .data :
  {
    _sdata = .;
    *(.data)
    _edata = .;
  } > RAM AT > FLASH /* Load from Flash, run from RAM */

  .bss :
  {
    _sbss = .;
    *(.bss)
    *(COMMON)
    _ebss = .;
  } > RAM
}

/* Stack definition */
_stack_top = ORIGIN(RAM) + LENGTH(RAM);
```

**Learning Outcome Alignment:** This section directly supports **CO2** (explain a programmer's view of processor architecture) by detailing how the processor interacts with memory, and **CO3** (choose between programming at the level of assembly or C) as linker scripts are crucial for both, especially for memory-critical assembly routines.

## 3. CPU and Vector Table

The CPU core needs to be configured, and the vector table is paramount for efficient interrupt and exception handling.

### 3.1. CPU Core Initialization

*   **Clock Configuration:** Setting up the system clock to the desired frequency is crucial for all operations. This often involves configuring the internal oscillator or an external crystal, and then using a Phase-Locked Loop (PLL) to generate higher frequencies.
*   **System Initialization (e.g., Reset Handler):** The microcontroller typically starts execution at a predefined address after a reset. This initial code, often written in assembly, performs fundamental setup.

### 3.2. Vector Table

The Vector Table is a table of addresses stored at the beginning of the memory space (typically Flash). Each entry in the table points to the starting address of a specific interrupt service routine (ISR) or exception handler.

**Key Concepts:**
*   **Interrupt Vector Table (IVT):** A table containing addresses of ISRs.
*   **Exception Table:** For ARM Cortex-M, the vector table includes entries for various exceptions (e.g., NMI, HardFault, SVCall, SysTick) as well as peripheral interrupts.
*   **Vector Table Offset Register (VTOR):** A special register in the System Control Block (SCB) that can be programmed to point to the vector table if it's not located at the default address (`0x00000000`). This allows the vector table to be placed in RAM or a different Flash sector.

**Structure of the Vector Table (for ARM Cortex-M):**

The vector table typically contains 15 fixed entries for exceptions, followed by entries for each peripheral interrupt. The first entry is usually the **initial stack pointer** value, and the second is the **reset vector**, which points to the reset handler.

| Offset   | Exception/Interrupt      | Handler Routine Address |
| :------- | :----------------------- | :---------------------- |
| 0x00     | Initial Stack Pointer    | (Set by linker/startup) |
| 0x04     | Reset                    | Reset Handler           |
| 0x08     | NMI (Non-Maskable Int.)  | NMI Handler             |
| 0x0C     | HardFault                | HardFault Handler       |
| ...      | ...                      | ...                     |
| 0x2C     | SVCall (Supervisor Call) | SVCall Handler          |
| ...      | ...                      | ...                     |
| 0x54     | PendSV                   | PendSV Handler          |
| 0x58     | SysTick                  | SysTick Handler         |
| 0x5C     | Window Watchdog Int.     | WDT Handler             |
| 0x60     | PVD                      | PVD Handler             |
| ...      | Peripheral Interrupts    | ISRs                    |

**Example (Assembly - Reset Handler):**

```assembly
    .syntax unified
    .cpu cortex-m4
    .thumb

    .global _start
    .section .vectors
    .word _initial_sp_top  /* Initial Stack Pointer */
    .word Reset_Handler   /* Reset Handler */
    .word NMI_Handler     /* NMI Handler */
    .word HardFault_Handler /* HardFault Handler */
    /* ... other exception handlers ... */
    .word SysTick_Handler /* SysTick Handler */
    /* ... peripheral interrupt handlers ... */

    .section .text
    .global Reset_Handler
Reset_Handler:
    /* 1. Initialize Stack Pointer (if not done by .vectors) */
    /*    ldr sp, =_stack_top  // Set SP to top of stack in RAM */

    /* 2. Copy initialized data from Flash to RAM */
    ldr r0, =_sdata
    ldr r1, =_edata
    ldr r2, =_sidata /* Start of initialized data in Flash */
    mov r3, #0
copy_data_loop:
    cmp r0, r1
    bge copy_data_done
    ldr r3, [r2, #(0x0000)] /* Load word from Flash */
    str r3, [r0]           /* Store word to RAM */
    add r0, r0, #4
    add r2, r2, #4
    b copy_data_loop
copy_data_done:

    /* 3. Clear the BSS section (uninitialized data) */
    ldr r0, =_sbss
    ldr r1, =_ebss
    mov r3, #0
clear_bss_loop:
    cmp r0, r1
    bge clear_bss_done
    str r3, [r0]           /* Store zero to RAM */
    add r0, r0, #4
    b clear_bss_loop
clear_bss_done:

    /* 4. Configure System Clock, PLL, etc. (if needed) */
    /*    ... */

    /* 5. Initialize the System Timer (SysTick) */
    /*    ... */

    /* 6. Call the C runtime environment initialization */
    bl __cpp_initialize_array /* If using C++ */
    bl main /* Call the main C function */

    /* Infinite loop if main returns (should not happen) */
end_loop:
    b end_loop
```

**Learning Outcome Alignment:** This section directly addresses **CO2** by explaining the programmer's view of how the processor handles interrupts and exceptions through the vector table. **CO3** is relevant as the vector table is often defined and manipulated in assembly.

**Important Point:** The vector table must be placed at an address accessible by the processor (usually the beginning of Flash or a RAM location pointed to by VTOR). The linker script ensures this placement.

## 4. C Run-Time Environment (C Runtime)

When using C, there's a crucial layer of startup code that bridges the gap between the bare-metal hardware and the C `main()` function. This is the C runtime environment.

### 4.1. Startup Code (`startup.s` or similar)

The startup code is typically written in assembly and performs several essential tasks before calling `main()`:

1.  **Initial Stack Pointer Setup:** Sets the stack pointer to a valid location in RAM.
2.  **Vector Table Initialization:** Ensures the vector table is correctly populated and, if necessary, informs the hardware (via VTOR) where to find it.
3.  **Initialization of `.data` Section:** Copies initialized global and static variables from their read-only memory (Flash) location to their read-write memory (RAM) location.
4.  **Clearing of `.bss` Section:** Initializes uninitialized global and static variables (often to zero).
5.  **Initialization of C++ Global Objects (if applicable):** Calls constructors for global C++ objects.
6.  **Calling `main()`:** Transfers control to the user-written `main()` function.

**Reference:** *Embedded systems with ARM Cortex M Microcontrollers in Assembly and C* by Yifeng Zhu provides detailed explanations and examples of startup code for various ARM Cortex-M series microcontrollers.

### 4.2. `main()` Function

The `main()` function is the entry point for user application logic. It's executed *after* the C runtime environment has set up the necessary hardware and software structures.

**Key Concept:** `main()` is where your application's primary logic resides, interacting with peripherals and handling events.

**Learning Outcome Alignment:** This section directly supports **CO1** by explaining the underlying mechanisms that enable C programs to run on embedded systems. **CO3** is relevant as the interaction between assembly startup code and C `main()` is a core aspect.

## 5. System Timer (SysTick)

The SysTick timer is a standard part of the ARM Cortex-M core, providing a convenient way to generate periodic interrupts for timing and scheduling.

### 5.1. SysTick Timer Features

*   **100 ms Interval Timer:** Can be configured to generate an interrupt at a specified interval.
*   **Decrementing Counter:** Counts down from a reload value to zero. When it reaches zero, it generates an interrupt and reloads from the specified value.
*   **Optional Clock Source:** Can be driven by the processor clock or the external clock.
*   **Exception Generation:** When the counter reaches zero, it sets the SysTick exception pending in the NVIC.

### 5.2. SysTick Control and Status Register (STCSR)

The STCSR is the primary register for configuring and controlling the SysTick timer.

| Bit | Name      | Description                                  |
| :-- | :-------- | :------------------------------------------- |
| 0   | ENABLE    | Enables the SysTick timer.                   |
| 1   | TICKINT   | Enables SysTick exception request.           |
| 2   | CLKSOURCE | Selects clock source (0: AHB/8, 1: AHB).     |
| 16  | COUNTFLAG | Returns 1 if COUNTFLAG is set, 0 otherwise.  |

### 5.3. SysTick Reload Value Register (STRELOAD)

STRELOAD holds the initial value of the SysTick counter. When the counter reaches zero, it reloads from this value.

### 5.4. SysTick Current Value Register (STCURRENT)

STCURRENT shows the current value of the SysTick counter.

### 5.5. SysTick Calibration Value Register (STCALIB)

STCALIB provides information about the SysTick clock source.

### 5.6. Initialization Example (C)

```c
#include <stdint.h>

// SysTick Control and Status Register
#define STCSR (*((volatile uint32_t *)0xE000E010))
// SysTick Reload Value Register
#define STRELOAD (*((volatile uint32_t *)0xE000E014))
// SysTick Current Value Register
#define STCURRENT (*((volatile uint32_t *)0xE000E018))

// System Handler Priority Register (example for SysTick)
#define SHPR3 (*((volatile uint32_t *)0xE000ED20))

void SysTick_Init(uint32_t ticks) {
    // 1. Disable SysTick and interrupts during configuration
    STCSR = 0; // Clear all bits to disable

    // 2. Set the reload value
    STRELOAD = ticks - 1; // Timer counts down from ticks-1 to 0

    // 3. Set SysTick exception priority (optional, but good practice)
    //    For Cortex-M3/M4, priority values are 0-239 (lower number = higher priority)
    //    SysTick has bits 24-31. To set priority to 0 (highest), write 0x00000000.
    //    To set priority to 1, write 0x20000000.
    //    Let's set it to a reasonable priority, e.g., priority level 7 (0xE0).
    //    (0xE0 << 24) = 0xE0000000
    //    SHPR3 = 0xE0000000; // Example: Set SysTick priority to level 7
    //    However, for simplicity in this example, we'll assume default priority or let the system configure it.
    //    In a real system, you'd likely set this based on requirements.

    // 4. Set clock source (assuming processor clock, typically 16MHz or more)
    //    CLKSOURCE = 1 (use processor clock).
    //    TICKINT = 1 (enable interrupt).
    //    ENABLE = 1 (enable the timer).
    STCSR = (1 << 2) | (1 << 1) | (1 << 0); // CLKSOURCE=1, TICKINT=1, ENABLE=1
}

// Example SysTick Interrupt Service Routine (ISR)
void SysTick_Handler(void) {
    // This function is called when the SysTick timer reaches zero.
    // Typically used for OS tick, blinking LEDs, task scheduling, etc.
    // For example, toggle an LED.
    // *(volatile uint32_t *)0x40020010 ^= (1 << 5); // Example for an LED on PortA Pin5
}

int main(void) {
    // Assume SysTick needs to interrupt every 10ms if system clock is 100MHz.
    // Ticks = (100MHz * 10ms) = 1,000,000
    // STRELOAD = 1,000,000 - 1 = 999,999
    uint32_t ticks_per_ms = 100000; // Assuming 100MHz clock for 10ms interrupt
    SysTick_Init(ticks_per_ms);

    // Configure a GPIO pin as output if you want to toggle an LED
    // *(volatile uint32_t *)0x40020000 = 0x00000000; // Enable PortA clock
    // *(volatile uint32_t *)0x40020004 = 0x00000020; // Set PortA Pin5 as output

    while (1) {
        // Main application loop
    }
    return 0;
}
```

**Learning Outcome Alignment:** This section is critical for **CO4** (analyze the interfacing of peripherals) as the SysTick timer is a peripheral that needs to be initialized and configured. It also supports **CO1** and **CO3** by demonstrating how to use a core timer functionality that is essential for both C and assembly programming for timing-critical operations.

**Important Point:** The reload value for SysTick depends on the system clock frequency and the desired interrupt period. Always consult the microcontroller's datasheet for the clock configuration and SysTick details.

## 6. Practice Questions and Answers

**Question 1:** What is the primary role of the Vector Table in an ARM Cortex-M system?
    *   A) Storing program code
    *   B) Storing global variables
    *   C) Holding the addresses of interrupt and exception handlers
    *   D) Configuring the CPU clock frequency

**Answer:** C) Holding the addresses of interrupt and exception handlers. The vector table is a lookup table that the processor consults when an interrupt or exception occurs to find the appropriate routine to execute.

**Question 2:** Explain the purpose of the `.data` and `.bss` sections in an embedded system's memory layout.
    *   `.data`: Stores variables that are initialized to a specific value when the program starts. These values are typically stored in Flash memory and copied to RAM during initialization.
    *   `.bss`: Stores variables that are not explicitly initialized. The startup code typically initializes all memory in the `.bss` section to zero before `main()` is called.

**Question 3:** What are the essential steps performed by the C startup code before calling the `main()` function?
    *   Setup of the initial stack pointer.
    *   Initialization of the vector table (or ensuring it's in the correct location).
    *   Copying initialized data from Flash to RAM (`.data` section).
    *   Clearing the uninitialized data section to zero (`.bss` section).
    *   (Optional) Initialization of C++ global objects.
    *   Calling the `main()` function.

**Question 4:** If your system clock is running at 72 MHz and you want the SysTick timer to generate an interrupt every 1 millisecond, what value would you load into the `STRELOAD` register?
    *   The SysTick timer counts down from `STRELOAD` to 0. If it generates an interrupt when it reaches 0, it will tick `STRELOAD + 1` times.
    *   Desired interrupt frequency: 1 KHz (1 ms period).
    *   Number of ticks per interrupt: 1 ms * 72 MHz = 72,000 ticks.
    *   Therefore, `STRELOAD` should be set to `72,000 - 1 = 71,999`.

**Learning Outcome Alignment:** These questions cover **CO1**, **CO2**, and **CO4** by testing understanding of memory, vector tables, startup code, and peripheral (SysTick) configuration.

## 7. Summary and Key Takeaways

*   **System initialization is foundational:** It sets up the hardware and software environment for the microcontroller to operate.
*   **Memory map is critical:** Understanding where Flash, SRAM, and peripherals reside is crucial for programming. Linker scripts play a vital role in defining this.
*   **Vector table is for exceptions:** It maps exceptions and interrupts to their respective handler routines. The Reset vector is the starting point of execution.
*   **C runtime bridges hardware and software:** Startup code handles essential tasks before `main()` is called.
*   **SysTick timer is for timing:** It's a core peripheral used for scheduling, OS ticks, and general timing. Its configuration involves the `STCSR` and `STRELOAD` registers.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
