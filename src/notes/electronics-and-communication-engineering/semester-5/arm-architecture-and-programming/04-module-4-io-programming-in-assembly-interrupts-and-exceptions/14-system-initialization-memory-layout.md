---
title: "System initialization: Memory layout"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb12"
status: "completed"
scrapedAt: "2026-05-23T17:53:48.512Z"
---
# ARM Architecture and Programming: Module 4 - IO Programming in Assembly: Interrupts and Exceptions

## Topic: System Initialization: Memory Layout

---

### **Introduction**

System initialization is a critical phase in the execution of any embedded system. It involves setting up the processor, peripherals, and memory in a predictable and functional state before the main application code begins. A fundamental aspect of this process is understanding the **memory layout** of the system. The memory layout dictates where different types of code and data reside in the processor's address space, which is crucial for tasks like exception handling, interrupt service routines, and accessing peripheral registers. This topic will delve into the typical memory organization of ARM Cortex-M microcontrollers, as described in our textbooks, and its significance during system initialization.

---

### **Learning Outcomes Covered:**

*   **Understanding the Memory Map:** Identify and describe the various memory regions (Flash, RAM, Peripheral, System) present in a typical ARM Cortex-M microcontroller and their respective purposes. (K2, K3)
*   **Vector Table Location and Purpose:** Explain the role of the vector table, its fixed location in memory, and how it's used to handle exceptions and interrupts. (K2, K3)
*   **Startup Code:** Understand the function of startup code (often in assembly) in initializing the system, including setting up the stack, clearing BSS, copying initialized data, and branching to the main application. (K3)
*   **Memory Access:** Recognize how the memory map influences how peripherals are accessed through memory-mapped I/O. (K2)

---

### **Key Concepts and Definitions**

*   **Memory Map:** A conceptual representation of the entire address space of a processor, showing how it is divided into different regions for various purposes (e.g., Flash for code, RAM for data, peripherals).
*   **Memory-Mapped I/O:** A technique where peripheral control registers are assigned specific addresses within the processor's memory address space. This allows peripherals to be accessed using the same instructions used for memory access (e.g., `LDR`, `STR`).
*   **Flash Memory:** Non-volatile memory used to store program code and constant data. It retains its contents even when power is off.
*   **RAM (Random Access Memory):** Volatile memory used for storing variables, the stack, and heap. Data is lost when power is turned off.
    *   **SRAM (Static RAM):** Generally faster and more power-efficient than DRAM, commonly used in microcontrollers.
    *   **DRAM (Dynamic RAM):** Requires periodic refreshing to retain data, typically used in larger memory systems.
*   **Peripheral Memory:** A dedicated region in the memory map where the registers of various peripherals (e.g., timers, UARTs, GPIOs) are located.
*   **System Memory:** Often reserved for special functions, such as the interrupt vector table or memory protection units.
*   **Vector Table:** A table of interrupt and exception handler addresses. The processor uses the vector table to find the correct routine to execute when an interrupt or exception occurs.
*   **Exception:** An event that disrupts the normal flow of program execution. This includes interrupts, reset, and faults.
*   **Interrupt:** An asynchronous event originating from a hardware device that signals the processor to pause its current task and handle the event.
*   **Reset Vector:** The first entry in the vector table, pointing to the initial program execution address (usually the startup code).
*   **Stack:** A region of RAM used for storing temporary data, function arguments, local variables, and return addresses during function calls and interrupt handling.
*   **BSS (Block Started by Symbol):** A section in object files that contains uninitialized global and static variables. These variables are typically zero-initialized by the startup code.
*   **Data Section (.data):** A section in object files that contains initialized global and static variables. This data needs to be copied from non-volatile memory (Flash) to RAM during initialization.
*   **Startup Code:** A special piece of code, usually written in assembly, that executes immediately after reset. Its primary responsibilities include initializing the processor and memory before jumping to the main `main()` function.

---

### **1. Understanding the Memory Map**

ARM Cortex-M microcontrollers adhere to a well-defined memory map that standardizes the location of different memory types and peripherals. This consistent layout simplifies programming and interoperability between different Cortex-M devices.

**General Cortex-M Memory Map (as described in Lewis and Yiu):**

The Cortex-M processor core has a 32-bit address bus, providing an addressable space of 4 GB. However, specific microcontrollers implement only a portion of this. A typical Cortex-M memory map is divided into the following regions:

| Address Range (Hex)     | Size   | Region Name      | Description                                                                                                                                                                                          | Textbooks Reference                                     |
| :---------------------- | :----- | :--------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------ |
| `0x00000000 - 0x1FFFFFFF` | 512 MB | Code             | Primarily used for Flash memory (program code, constant data). Some devices may place bootloader or ROM here.                                                                         | Lewis (Ch 2), Yiu (Ch 3)                                |
| `0x20000000 - 0x3FFFFFFF` | 512 MB | SRAM             | Used for RAM (stack, heap, global/static variables). Multiple SRAM banks might exist.                                                                                                  | Lewis (Ch 2), Yiu (Ch 3)                                |
| `0x40000000 - 0x5FFFFFFF` | 512 MB | Peripheral       | Contains I/O ports and peripheral control registers. Each peripheral is mapped to a specific address range within this region.                                                        | Lewis (Ch 2), Yiu (Ch 3)                                |
| `0x60000000 - 0xDFFFFFFF` | 1.75 GB| Reserved/External | Reserved for external memory interfaces (e.g., SDRAM, NOR Flash) or other system-specific functions. Not all devices implement this.                                                | Lewis (Ch 2), Yiu (Ch 3)                                |
| `0xE0000000 - 0xE00FFFFF` | 1 MB   | Private Peripheral Bus (PPB) | Contains core-specific peripherals like the SysTick timer, NVIC (Nested Vectored Interrupt Controller), SCB (System Control Block), and MPU (Memory Protection Unit). | Lewis (Ch 2, Ch 6), Yiu (Ch 3, Ch 4)                    |
| `0xE0100000 - 0xFFFFFFFF` | 256 MB | Reserved         | Reserved for future use or specific vendor implementations.                                                                                                                            | Lewis (Ch 2), Yiu (Ch 3)                                |

**Importance of Memory Layout in Initialization:**

*   **Vector Table Placement:** The vector table must reside in a specific, predictable location, usually at the beginning of the Code region (`0x00000000`). The processor fetches the initial program counter (PC) and stack pointer (SP) from the first two entries in this table after reset.
*   **Stack Initialization:** The initial stack pointer must be set to the top of the available RAM region. The startup code needs to know the end address of the RAM to configure the main stack pointer (MSP).
*   **Data Initialization:** The startup code must know where the initialized data (`.data` section) is stored in Flash and where to copy it in RAM. Similarly, it needs to know the size of the BSS section to zero-initialize it in RAM.
*   **Peripheral Access:** To interact with hardware peripherals, the startup code (or subsequent application code) must know the base addresses of the peripheral region and the specific offsets for each peripheral's registers.

---

### **2. Vector Table Location and Purpose**

The **vector table** is a cornerstone of exception handling in ARM Cortex-M processors. It's a table of 32-bit addresses that point to the entry points of different exception and interrupt service routines (ISRs).

**Key Aspects:**

*   **Location:** By default, the vector table is located at the base of the memory map, typically address `0x00000000`. This is also known as the **reset vector**.
*   **First Entry (Reset Vector):** The first entry (`[0]`) contains the initial value of the Main Stack Pointer (MSP) upon reset. The second entry (`[1]`) contains the initial value of the Program Counter (PC), which should point to the start of the system initialization code.
*   **Subsequent Entries:** Entries `[2]` through `[N]` (where `N` depends on the number of interrupts supported by the specific microcontroller) contain the addresses of the ISRs for various exceptions (e.g., NMI, HardFault, SVC) and external interrupts.
*   **NVIC Interaction:** The Nested Vectored Interrupt Controller (NVIC) uses the vector table to determine which ISR to execute when an interrupt request is asserted.
*   **Configuration:** While the default is `0x00000000`, the vector table's base address can be relocated to other RAM locations using the `VTOR` (Vector Table Offset Register) in the System Control Block (SCB). This is a common practice for bootloaders or when the application is loaded into RAM. (Yiu Ch 4, Lewis Ch 6.3)

**Example Structure of a Vector Table (Conceptual):**

```assembly
.section .vectors
.global _vectors

_vectors:
    ldr     sp, =_stack_top         ; Initial Stack Pointer (MSP) value
    ldr     pc, =Reset_Handler      ; PC value for Reset Exception
    ldr     pc, =NMI_Handler        ; PC value for NMI
    ldr     pc, =HardFault_Handler; PC value for HardFault
    ; ... other exception handlers ...
    ldr     pc, =TIM2_IRQHandler    ; Example: Timer 2 Interrupt
    ; ... other interrupt handlers ...

_stack_top:
    ; Symbol indicating the end of the stack region
```

**Importance During Initialization:**

The startup code must first configure the MSP using the address found in the vector table's first entry. Then, it must ensure that the vector table itself is correctly placed in memory (either at the default `0x00000000` or a relocated address). For external RAM booting, the vector table might need to be copied to RAM first, and then the `VTOR` register updated.

---

### **3. Startup Code**

The **startup code** (often named `startup_stm32fxxx.s` or similar for STMicroelectronics devices, or `startup_cortex_m.s` for generic examples) is the very first piece of code that executes after reset. It's typically written in assembly language for direct control over hardware initialization.

**Primary Responsibilities of Startup Code:**

1.  **Stack Initialization:**
    *   Load the initial value of the Main Stack Pointer (MSP) from the first entry of the vector table.
    *   `ldr sp, =_stack_top` (or similar)

2.  **Vector Table Initialization (Optional but common):**
    *   If the vector table is to be placed in RAM (e.g., for bootloaders), copy the table from its default location (Flash) to the RAM location and update the `VTOR` register.
    *   `ldr r0, =_vectors`
    *   `ldr r1, =__vectors_ram` ; Target RAM address
    *   `ldr r2, =__vectors_end`
    *   `mov r3, #0`
    *   `add r1, r1, r3`
    *   `add r2, r2, r3`
    *   `mov r3, #0`
    *   `mov r4, #0`
    *   Loop:
        *   `ldr r4, [r0, r3]`
        *   `str r4, [r1, r3]`
        *   `add r3, r3, #4`
        *   `cmp r3, r2`
        *   `blt Loop`
    *   `ldr r0, =_vectors_ram`
    *   `ldr r1, =0xE000ED08` ; SCB->VTOR address
    *   `str r0, [r1]`

3.  **Zero-Initializing the BSS Section:**
    *   The `.bss` section contains uninitialized global and static variables. The C standard requires these to be zero-initialized.
    *   The linker script defines the start and end addresses of the `.bss` section.
    *   The startup code iterates through this region and writes zeros to each byte or word.
    *   `ldr r0, =__bss_start__`
    *   `ldr r1, =__bss_end__`
    *   `mov r2, #0`
    *   Loop:
        *   `cmp r0, r1`
        *   `bge end_bss`
        *   `str r2, [r0], #4` ; Store zero and increment address by 4 bytes
        *   `b Loop`
    *   `end_bss:`

4.  **Copying Initialized Data (.data section):**
    *   The `.data` section contains global and static variables that have been initialized in the source code (e.g., `int global_var = 10;`).
    *   This data is stored in the Flash memory image.
    *   The startup code must copy this data from its Flash location to its designated RAM location.
    *   The linker script defines the start and end addresses of the `.data` section in Flash (`.data_load`) and its start address in RAM (`.data_run`).
    *   `ldr r0, =__data_load__` ; Source address in Flash
    *   `ldr r1, =__data_run__`   ; Destination address in RAM
    *   `ldr r2, =__data_end__`
    *   Loop:
        *   `cmp r1, r2`
        *   `bge end_data`
        *   `ldr r3, [r0], #4`
        *   `str r3, [r1], #4`
        *   `b Loop`
    *   `end_data:`

5.  **Calling the Main Application:**
    *   After all initializations are complete, the startup code calls the `main()` function written in C.
    *   `bl main`

6.  **Infinite Loop (after main returns):**
    *   If `main()` ever returns (which it shouldn't in an embedded system), the startup code typically enters an infinite loop to prevent further execution.
    *   `b .`

**Textbook References:**

*   **Lewis:** Discusses the role of startup code and linker scripts in initializing memory for C execution (Ch 2.4.3, Ch 5.2.2).
*   **Yiu:** Provides detailed explanations of the startup process, memory sections, and the assembly code involved (Ch 3.2, Ch 3.3, Ch 4.1).
*   **Zhu:** Also covers system initialization and the critical role of startup routines for embedded systems (Ch 3.2, Ch 4.1).

**Example Snippet (Assembly - Conceptual):**

```assembly
; --- Linker script symbols for initialization ---
_stack_top      EQU     .
__bss_start__   EQU     .
__bss_end__     EQU     .
__data_load__   EQU     .
__data_run__    EQU     .
__data_end__    EQU     .
__vectors_ram   EQU     .

.section .text
.global Reset_Handler
Reset_Handler:
    ; 1. Initialize Stack Pointer
    ldr sp, =_stack_top

    ; 2. Initialize .bss section (zero-fill)
    ldr r0, =__bss_start__
    ldr r1, =__bss_end__
    mov r2, #0
bss_loop:
    cmp r0, r1
    bge bss_done
    str r2, [r0], #4
    b bss_loop
bss_done:

    ; 3. Copy .data section from Flash to RAM
    ldr r0, =__data_load__  ; Source in Flash
    ldr r1, =__data_run__   ; Destination in RAM
    ldr r2, =__data_end__
data_loop:
    cmp r1, r2
    bge data_done
    ldr r3, [r0], #4
    str r3, [r1], #4
    b data_loop
data_done:

    ; (Optional) Relocate Vector Table if needed
    ; ldr r0, =_vectors_ram
    ; ldr r1, =0xE000ED08 ; SCB_VTOR
    ; str r0, [r1]

    ; 4. Call main C function
    bl main

    ; 5. If main returns, loop indefinitely
default_loop:
    b default_loop

; (Placeholder for interrupt handlers and vector table)
```

---

### **4. Memory Access and Peripherals**

The memory map is directly tied to how you access peripheral hardware. **Memory-mapped I/O** means that each peripheral's control registers, status flags, and data buffers are assigned unique memory addresses.

**How it Works:**

*   **Peripheral Base Addresses:** The linker script or datasheet for the microcontroller will define the base addresses for different peripheral blocks (e.g., GPIOA, UART1, TIM2).
*   **Register Offsets:** Within each peripheral block, individual registers have fixed offsets from the block's base address.
*   **Load/Store Instructions:** To interact with a peripheral register, you use standard ARM load (`LDR`) and store (`STR`) instructions, specifying the register's absolute memory address.

**Example:**

Let's say:
*   The base address for the GPIOA peripheral is `0x40010800`.
*   The address for the GPIOA Output Data Register (ODR) is at an offset of `0x0C` from the base address.
*   Therefore, the absolute address of GPIOA_ODR is `0x40010800 + 0x0C = 0x4001080C`.

**Assembly Code to Set a GPIO Pin (Conceptual):**

```assembly
; Assume Pin 5 of Port A needs to be set high

; Define constants for clarity
GPIOA_BASE      EQU     0x40010800
GPIOA_ODR_OFFSET EQU    0x0C
PIN_5           EQU     (1 << 5) ; Bit mask for pin 5

; Calculate the ODR address
GPIOA_ODR_ADDR  EQU     GPIOA_BASE + GPIOA_ODR_OFFSET

.global set_pin_a5
set_pin_a5:
    ; Read the current ODR value
    ldr r0, =GPIOA_ODR_ADDR
    ldr r1, [r0]            ; r1 now holds the current ODR value

    ; Set bit 5 (for Pin 5)
    orr r1, r1, #PIN_5      ; OR the value with the pin mask

    ; Write the modified value back to ODR
    str r1, [r0]            ; Update the ODR register

    bx lr                   ; Return
```

**Importance During Initialization:**

*   **Clock Enable:** Before accessing any peripheral, its clock must be enabled. This is done by writing to specific registers within the RCC (Reset and Clock Control) or PM (Power Management) peripheral, which are themselves memory-mapped.
*   **GPIO Configuration:** Pins need to be configured as inputs or outputs, and their alternate functions (e.g., UART TX, SPI MOSI) must be set. This involves writing to GPIO configuration registers.
*   **NVIC Configuration:** Enabling and configuring interrupts involves writing to registers within the NVIC (part of the PPB region, e.g., `ISER` - Interrupt Set Enable Register, `ICER` - Interrupt Clear Enable Register, `IPR` - Interrupt Priority Register).

---

### **Highlighting Important Points to Remember:**

*   **Memory Map is Crucial:** The memory map is fundamental for system initialization, exception handling, and peripheral access. Always consult the microcontroller's datasheet for its specific memory map.
*   **Vector Table is Fixed (by default):** The vector table is the processor's lookup for exception handlers and starts at `0x00000000`.
*   **Startup Code is the First Execution:** It bridges the gap between hardware reset and the C runtime environment.
*   **BSS Zeroing & Data Copying:** These are essential steps performed by startup code to prepare the RAM for C program execution.
*   **Memory-Mapped I/O:** Peripherals are accessed using standard memory load/store instructions, making the memory map vital for hardware interaction.
*   **VTOR for Relocation:** The `VTOR` register allows the vector table to be moved from its default Flash location to RAM.

---

### **Practice Questions:**

1.  **Describe the primary purpose of the memory map in an embedded system.** (K2)
    *   *Answer:* The memory map defines how the processor's address space is organized, allocating specific regions for code (Flash), data (RAM), peripherals, and other system functions. This allows the processor to correctly locate and access different types of resources.

2.  **What is the default address of the ARM Cortex-M vector table, and what information does it contain?** (K2)
    *   *Answer:* The default address is `0x00000000`. It contains the initial stack pointer value (at offset `0x00`) and the initial program counter value pointing to the reset handler (at offset `0x04`), followed by addresses for various exception and interrupt handlers.

3.  **Explain the role of the startup code in system initialization. List at least three key tasks it performs.** (K3)
    *   *Answer:* The startup code is the first code executed after reset. Its key tasks include:
        *   Initializing the stack pointer (MSP).
        *   Zero-initializing the `.bss` section in RAM.
        *   Copying initialized data from Flash to RAM (`.data` section).
        *   (Optional) Relocating the vector table.
        *   Calling the `main()` function.

4.  **What is memory-mapped I/O, and how does the memory map facilitate it?** (K2)
    *   *Answer:* Memory-mapped I/O is a method where peripheral control registers are assigned addresses within the processor's memory address space. The memory map provides these addresses, allowing standard memory access instructions (like `LDR` and `STR`) to be used for interacting with peripherals.

5.  **A microcontroller allows the vector table to be relocated. Which register is used for this purpose, and where might you want to relocate the vector table?** (K2)
    *   *Answer:* The `VTOR` (Vector Table Offset Register) is used for relocating the vector table. You might want to relocate it to RAM if you are using a bootloader or if the application is loaded into a different memory region than the default start address.

6.  **Consider a scenario where you want to create a bootloader that lives in Flash and loads an application into RAM. How does understanding the memory map and system initialization help you design this?** (K3)
    *   *Answer:*
        *   **Memory Map:** You need to know the addresses of Flash (for the bootloader and potentially the application image), RAM (for the application code and its data), and the PPB (for configuring clocks and interrupts for the application).
        *   **Vector Table:** The bootloader would need to relocate the application's vector table to a specific RAM location and update `VTOR` before jumping to the application's entry point.
        *   **Startup Code:** The bootloader would need to copy the application's `.data` and `.bss` sections from Flash to their designated RAM locations, similar to how a regular startup code operates, but before jumping to the application's `main`.
        *   **Peripheral Initialization:** The bootloader might need to initialize clocks or other peripherals necessary to load the application (e.g., from an SD card or UART).

---

### **Course Outcome Alignment:**

*   **CO1: Use the features of C that are frequently used in embedded systems (K3)**
    *   This topic indirectly supports CO1 by explaining the underlying assembly and memory organization that C code relies on. Understanding `.data` and `.bss` sections, stack usage, and peripheral register access is crucial for writing effective embedded C.
*   **CO2: Explain a programmer’s view of processor architecture (K2)**
    *   This topic directly addresses CO2 by detailing the processor's memory map, the purpose and location of the vector table, and the fundamental steps of system initialization from a programmer's perspective.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (K3)**
    *   This topic highlights the necessity of assembly language for critical system initialization tasks like setting up the stack, zeroing BSS, and copying data. It demonstrates where assembly is indispensable, thereby informing the choice between assembly and C for different parts of an embedded system.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### **References:**

*   **Lewis, Daniel W.** *Fundamentals of Embedded Software with the ARM Cortex M3*. Pearson, 2e, 2015.
    *   *Relevant Chapters:* Chapter 2 (ARM Cortex-M3 Processor Overview), Chapter 5 (Development Tools), Chapter 6 (Interrupts and Exceptions).
*   **Yiu, Joseph.** *The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors*. Elsevier, 3e, 2014.
    *   *Relevant Chapters:* Chapter 3 (Memory System), Chapter 4 (Interrupts and Exceptions).
*   **Zhu, Yifeng.** *Embedded systems with ARM Cortex M Microcontrollers in Assembly and C*. E-man Press, 3e, 2018.
    *   *Relevant Chapters:* Chapter 3 (Processor Architecture and Instruction Set), Chapter 4 (System Initialization and Interrupts).

---