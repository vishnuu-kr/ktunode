---
title: "Review of computer organization: Memory, CPU, IO, Introduction to Arm cortex M architecture: Internal organization-general purpose and special registers, instruction pipelining, memory model, bit banding, Arm assembly language instruction format and operands"
subject: "ARM ARCHITECTURE, PROGRAMMING AND INTERFACING"
module: "Module 1: Embedded C: Fixed"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780fec10"
status: "completed"
scrapedAt: "2026-05-23T17:53:52.726Z"
---
# ARM ARCHITECTURE, PROGRAMMING AND INTERFACING

## Module 1: Embedded C: Fixed

### Topic: Review of Computer Organization & Introduction to ARM Cortex-M Architecture

This module provides a foundational understanding of how computers are organized and then dives into the specifics of the ARM Cortex-M architecture, focusing on its internal organization, memory model, and assembly language. This knowledge is crucial for effectively programming embedded systems using C and assembly language.

---

### 1. Review of Computer Organization

Before delving into ARM specifics, it's essential to have a firm grasp of the fundamental building blocks of any computer system.

#### 1.1 Memory
Memory is the component responsible for storing data and instructions.

*   **Types of Memory:**
    *   **RAM (Random Access Memory):**
        *   Volatile: Data is lost when power is removed.
        *   Fast: Used for actively running programs and their data.
        *   **SRAM (Static RAM):** Faster, uses more transistors per bit, more expensive, typically used for CPU caches.
        *   **DRAM (Dynamic RAM):** Slower, uses fewer transistors per bit, cheaper, typically used for main system memory.
        *   *Relevance to Embedded Systems:* Used for program execution, variables, and temporary data storage.
    *   **ROM (Read-Only Memory):**
        *   Non-Volatile: Data persists even when power is removed.
        *   Used for firmware, bootloaders, and fixed data.
        *   **PROM (Programmable Read-Only Memory):** Can be programmed once.
        *   **EPROM (Erasable Programmable Read-Only Memory):** Can be erased with UV light and reprogrammed.
        *   **EEPROM (Electrically Erasable Programmable Read-Only Memory):** Can be erased and reprogrammed electrically, slower than flash.
        *   **Flash Memory:** Non-volatile, electrically erasable and programmable. Widely used in microcontrollers for program storage due to its speed and cost-effectiveness.
        *   *Relevance to Embedded Systems:* Stores the program code and configuration data that the microcontroller executes.

*   **Memory Organization:**
    *   Memories are organized into addressable units, typically bytes.
    *   Each unit has a unique address.
    *   The CPU fetches instructions and data from memory using these addresses.
    *   **Memory Map:** A conceptual layout of how different memory types (RAM, ROM, I/O registers) are assigned addresses within the system. This is crucial for both hardware designers and software developers.

*   **Memory Access:**
    *   **Read Operation:** CPU sends an address to the memory and receives data.
    *   **Write Operation:** CPU sends an address and data to the memory.

**Key Concept:** The CPU interacts with memory by reading and writing data to specific memory addresses. The memory map defines which address ranges correspond to which types of memory and peripherals.

#### 1.2 CPU (Central Processing Unit)
The CPU is the "brain" of the computer, responsible for executing instructions.

*   **Core Components:**
    *   **Arithmetic Logic Unit (ALU):** Performs arithmetic (addition, subtraction) and logical (AND, OR, NOT) operations.
    *   **Control Unit (CU):** Fetches instructions from memory, decodes them, and directs other components (ALU, memory, I/O) to execute them. It manages the flow of data within the CPU and between the CPU and other system components.
    *   **Registers:** Small, high-speed storage locations within the CPU used to hold data, instructions, addresses, and status information that the CPU is actively working with.
        *   **General-Purpose Registers:** Can be used by the programmer for temporary data storage, arithmetic operations, etc.
        *   **Special-Purpose Registers:** Have dedicated functions (e.g., program counter, stack pointer, status register).

*   **Instruction Cycle:** The fundamental process by which a CPU executes a program:
    1.  **Fetch:** Retrieve the next instruction from memory.
    2.  **Decode:** Interpret the instruction to determine what operation needs to be performed.
    3.  **Execute:** Perform the operation specified by the instruction (e.g., add two numbers, move data).
    4.  **Write-back (or Store):** Store the result of the execution back into a register or memory.

**Key Concept:** The CPU executes instructions sequentially, performing calculations and data manipulations. Registers are vital for fast access to data and control information.

#### 1.3 I/O (Input/Output)
I/O devices allow the computer system to interact with the external world.

*   **Types of I/O Devices:**
    *   **Input Devices:** Keyboard, mouse, sensors (temperature, pressure), ADC (Analog-to-Digital Converter).
    *   **Output Devices:** Display screen, LEDs, speakers, DAC (Digital-to-Analog Converter), actuators.
    *   **Input/Output Devices:** Touchscreen, network interfaces, storage devices (hard drives, SSDs).

*   **I/O Interfacing:** The process of connecting I/O devices to the CPU. This typically involves:
    *   **I/O Ports:** Dedicated pins on the microcontroller that can be configured as input or output.
    *   **Peripheral Devices:** Integrated circuits on the microcontroller that provide specific I/O functionality (e.g., UART for serial communication, SPI, I2C, Timers, GPIO).
    *   **Memory-Mapped I/O (MMIO):** I/O devices are accessed as if they were memory locations. The CPU uses the same instructions (load/store) to access both memory and I/O registers. This simplifies the instruction set and bus structure.
    *   **I/O-Mapped I/O (Port-Mapped I/O):** Uses separate I/O instructions to access I/O devices. This requires dedicated I/O address space. (Less common in modern architectures like ARM Cortex-M).

*   **Data Transfer Mechanisms:**
    *   **Programmed I/O (PIO):** The CPU polls the I/O device to check its status and then performs data transfers. This is CPU-intensive.
    *   **Interrupt-Driven I/O:** The I/O device signals the CPU when it's ready for a data transfer via an interrupt. The CPU then suspends its current task to service the interrupt. This is more efficient than PIO.
    *   **Direct Memory Access (DMA):** A dedicated controller transfers data directly between I/O devices and memory without involving the CPU for each data transfer. This significantly offloads the CPU, allowing it to perform other tasks concurrently.

**Key Concept:** I/O allows the microcontroller to receive information from and send information to the outside world. Memory-mapped I/O is a common way to interact with peripherals.

---

### 2. Introduction to ARM Cortex-M Architecture

The ARM Cortex-M family is a series of popular 32-bit RISC processor cores designed for microcontroller applications. They are known for their low power consumption, high performance, and efficient integration of peripherals.

#### 2.1 Internal Organization (General View)

The Cortex-M architecture is designed with a focus on simplicity, efficiency, and determinism, making it ideal for real-time embedded systems.

*   **RISC (Reduced Instruction Set Computing):**
    *   Uses a smaller, simpler set of instructions.
    *   Instructions are typically fixed-length and execute in a single clock cycle.
    *   Emphasizes compiler optimization and pipelining.
    *   *Contrast with CISC (Complex Instruction Set Computing):* Uses a larger, more complex set of instructions, some of which can take multiple clock cycles.

*   **Key Architectural Features:**
    *   **Thumb Instruction Set:** A 16-bit instruction set that provides a good balance between code density and performance. Many Cortex-M processors also support the 32-bit Thumb-2 instruction set, which offers improved performance and code density.
    *   **Load/Store Architecture:** Only `LOAD` and `STORE` instructions access memory. All other operations (arithmetic, logical) are performed on data held in registers.
    *   **32-bit Architecture:** Operates on 32-bit data words.

**Key Concept:** ARM Cortex-M cores are RISC processors designed for embedded systems, utilizing the Thumb instruction set for code efficiency.

#### 2.2 General-Purpose and Special Registers

Cortex-M processors have a set of registers that the programmer can utilize.

*   **General-Purpose Registers (R0-R15):**
    *   R0-R12: General-purpose registers, can be used for any purpose.
    *   R13 (SP - Stack Pointer): Points to the top of the stack in memory. The stack is used for function calls, local variables, and interrupt handling. Cortex-M supports two stack pointers: Main Stack Pointer (MSP) and Process Stack Pointer (PSP).
    *   R14 (LR - Link Register): Stores the return address when a subroutine (function) is called.
    *   R15 (PC - Program Counter): Points to the address of the next instruction to be fetched. (Note: The PC is usually read as the address of the current instruction + 4 bytes for 32-bit instructions or + 2 bytes for 16-bit instructions).

*   **Special-Purpose Registers:**
    *   **Program Status Register (PSR):** Contains condition flags, interrupt status, and processor mode information. It is a composite register.
        *   **APSR (Application Program Status Register):** Contains condition flags (N, Z, C, V) for comparison results and the GE flags for saturation arithmetic.
        *   **IPSR (Interrupt Program Status Register):** Contains the exception/interrupt number.
        *   **EPSR (Execution Program Status Register):** Contains the Thumb state bit (T) and the IT (If-Then) block enable bits.
    *   **Core Register:** There are also core registers like the **Control Register** and **Stack Pointer Selection Register** that control processor behavior.

**Example:**
When a function `my_function` is called, the return address (the address of the instruction immediately following the function call) is automatically saved in the Link Register (LR). When `my_function` finishes, the `BX LR` (Branch and Exchange to Link Register) instruction is used to return to the calling code.

**Important Point:** Understanding the purpose of each register is critical for writing efficient assembly code and for understanding how C code translates to machine instructions.

#### 2.3 Instruction Pipelining

Pipelining is a technique used to improve the throughput of a processor by overlapping the execution of multiple instructions.

*   **Basic Idea:** Divide the instruction execution process into multiple stages (e.g., Fetch, Decode, Execute, Memory Access, Write-back). Multiple instructions are in different stages of execution simultaneously.
*   **Stages:**
    1.  **Fetch:** Fetch the instruction from memory.
    2.  **Decode:** Decode the fetched instruction.
    3.  **Execute:** Perform the operation using the ALU.
    4.  **Memory Access:** Access memory for load/store operations.
    5.  **Write-back:** Write the result back to a register.
*   **Benefits:** Increases the number of instructions executed per unit of time, leading to higher performance.
*   **Challenges (Hazards):**
    *   **Structural Hazards:** When two instructions require the same hardware resource in the same clock cycle. (Less common in well-designed pipelines).
    *   **Data Hazards:** When an instruction needs data that has not yet been produced by a previous instruction that is still in the pipeline. (Techniques like forwarding and stalling are used).
    *   **Control Hazards:** When a branch instruction is encountered, the pipeline doesn't know which instruction to fetch next until the branch condition is evaluated. (Techniques like branch prediction and flushing are used).

*   **Cortex-M Pipelining:** Cortex-M processors typically employ a **3-stage pipeline (Fetch, Decode, Execute)** or a slightly deeper pipeline depending on the specific core. The Thumb-2 instruction set and load/store architecture are designed to work efficiently with pipelining.

**Key Concept:** Pipelining allows the CPU to work on multiple instructions concurrently, improving overall performance.

#### 2.4 Memory Model

The memory model defines how the processor views and accesses memory.

*   **Linear Address Space:** Cortex-M processors have a **flat, 32-bit linear address space**, ranging from 0x00000000 to 0xFFFFFFFF. This provides a total of 4GB of addressable memory.
*   **Memory Map of Cortex-M:** The 4GB address space is divided into different regions for specific purposes:
    *   **Code Region:** Typically for program instructions (ROM, Flash).
    *   **Vector Table:** Located at the beginning of the code region (address 0x00000000 or a configurable location), containing pointers to interrupt service routines (ISRs) and the initial stack pointer.
    *   **Private Peripheral Bus (PPB) Region:** Contains system-level peripherals like the Nested Vectored Interrupt Controller (NVIC), System Timer (SysTick), and Debug Access Port (DAP). This region is usually at the top of the address space (e.g., 0xE0000000 - 0xE00FFFFF).
    *   **External RAM:** For general-purpose data storage.
    *   **External ROM/Flash:** For program storage.
    *   **External Peripherals:** For custom peripheral devices.
    *   **Internal Peripherals:** On-chip peripherals like GPIO, UART, SPI, I2C, Timers, ADC, DAC. These are memory-mapped.

*   **Endianness:**
    *   **Big-Endian:** The most significant byte (MSB) is stored at the lowest memory address.
    *   **Little-Endian:** The least significant byte (LSB) is stored at the lowest memory address.
    *   **Cortex-M:** Configurable to be **bi-endian**, meaning it can operate in either big-endian or little-endian mode. However, most microcontroller vendors configure them to be **little-endian**.

**Example:**
If you have a 32-bit word `0x12345678` and store it at address `0x1000`:
*   In **little-endian**: `0x78` at `0x1000`, `0x56` at `0x1001`, `0x34` at `0x1002`, `0x12` at `0x1003`.
*   In **big-endian**: `0x12` at `0x1000`, `0x34` at `0x1001`, `0x56` at `0x1002`, `0x78` at `0x1003`.

**Reference (Lewis, Chapter 2):** Lewis provides detailed memory maps for various Cortex-M devices, illustrating the typical allocation of code, data, and peripheral regions.

**Key Concept:** Cortex-M has a flat 32-bit address space, but this space is segmented into regions for code, data, peripherals, and system control. Endianness determines the byte order in memory.

#### 2.5 Bit Banding

Bit banding is a feature found in some ARM Cortex-M processors (specifically Cortex-M3 and Cortex-M4) that allows for efficient manipulation of individual bits.

*   **Concept:** A small portion of memory (the "bit-band region") is mirrored onto a larger region of memory (the "bit-band alias region"). Each bit in the bit-band region corresponds to a word (32 bits) in the bit-band alias region.
*   **How it Works:**
    *   **Bit-Band Region:** A contiguous block of memory where each bit is addressable.
    *   **Bit-Band Alias Region:** A much larger memory region where each individual bit can be set or cleared by writing a 0 or 1 to a specific word-sized address in the alias region.
*   **Mechanism:** When you write to a word address in the bit-band alias region, the CPU maps this to a specific bit in the bit-band region.
    *   Writing `0x00000001` to an alias address sets the corresponding bit.
    *   Writing `0x00000000` to an alias address clears the corresponding bit.
    *   Reading from an alias address returns `0x00000001` if the bit is set, and `0x00000000` if the bit is clear.
*   **Location:** The bit-band region and its alias are typically located within the SRAM and peripheral address spaces.
*   **Benefits:**
    *   **Atomic Bit Manipulation:** Setting or clearing a single bit is an atomic operation, meaning it cannot be interrupted. This is crucial for shared resources and avoiding race conditions.
    *   **Efficiency:** Eliminates the need for read-modify-write sequences (e.g., `LDR`, `ORR`/`BIC`, `STR`) to manipulate individual bits, saving instruction cycles and code space.
*   **Example (Conceptual):**
    Suppose a bit in the bit-band region is located at memory address `BIT_ADDR`. The corresponding alias address in the bit-band alias region would be `ALIAS_ADDR`.
    *   To set the bit: `STR R1, [ALIAS_ADDR]` where `R1` contains `0x00000001`.
    *   To clear the bit: `STR R1, [ALIAS_ADDR]` where `R1` contains `0x00000000`.

**Reference (Yiu, Chapter 4):** Joseph Yiu's book provides a detailed explanation of the bit-banding mechanism, including the memory regions involved and how to perform atomic bit operations.

**Important Point:** Bit banding is a powerful feature for optimizing bit manipulation operations, especially for peripheral control where individual bits often represent flags or control signals.

#### 2.6 ARM Assembly Language Instruction Format and Operands

Understanding the structure of ARM assembly instructions is essential for low-level programming and for comprehending compiler output.

*   **Instruction Set Architecture (ISA):** The set of instructions that a processor understands. Cortex-M primarily uses the **Thumb-2 ISA**, which is a mixture of 16-bit and 32-bit instructions.

*   **Basic Instruction Format (Thumb-2):**
    *   **Mnemonic:** The symbolic name of the instruction (e.g., `MOV`, `ADD`, `LDR`, `STR`, `B`, `BL`).
    *   **Operands:** The data or memory locations the instruction operates on.
        *   **Registers:** Typically represented by `Rn` (e.g., `R0`, `R1`, `SP`).
        *   **Immediate Values:** Constant numbers embedded directly in the instruction.
        *   **Memory Addresses:** Specified using registers or immediate offsets.
    *   **Condition Codes (Optional):** Some instructions can be executed only if certain conditions are met (e.g., `EQ` for equal, `NE` for not equal, `GT` for greater than). These conditions are based on flags in the PSR.

*   **Instruction Examples and Operands:**

    1.  **Data Processing Instructions:**
        *   **`MOV R0, R1`**: Move the content of register R1 to register R0.
            *   Mnemonic: `MOV`
            *   Operands: Destination Register (`R0`), Source Register (`R1`).
        *   **`ADD R2, R0, R1`**: Add the contents of R0 and R1, store the result in R2.
            *   Mnemonic: `ADD`
            *   Operands: Destination Register (`R2`), Source Register 1 (`R0`), Source Register 2 (`R1`).
        *   **`ADD R3, R4, #5`**: Add the content of R4 and the immediate value 5, store the result in R3.
            *   Mnemonic: `ADD`
            *   Operands: Destination Register (`R3`), Source Register (`R4`), Immediate Value (`#5`).

    2.  **Load/Store Instructions:**
        *   **`LDR R0, [R1]`**: Load the value from the memory address pointed to by R1 into register R0.
            *   Mnemonic: `LDR`
            *   Operands: Destination Register (`R0`), Memory Address (specified by `[R1]`).
        *   **`LDR R0, [R1, #4]`**: Load the value from the memory address R1 + 4 into register R0.
            *   Mnemonic: `LDR`
            *   Operands: Destination Register (`R0`), Memory Address (base register `[R1]` + offset `#4`).
        *   **`STR R0, [R1]`**: Store the content of register R0 into the memory address pointed to by R1.
            *   Mnemonic: `STR`
            *   Operands: Source Register (`R0`), Memory Address (specified by `[R1]`).

    3.  **Branch Instructions:**
        *   **`B label`**: Unconditional branch to the instruction at `label`.
            *   Mnemonic: `B`
            *   Operand: Label (`label`).
        *   **`BL subroutine_label`**: Branch with Link. Call a subroutine at `subroutine_label`. The return address is saved in LR.
            *   Mnemonic: `BL`
            *   Operand: Subroutine Label (`subroutine_label`).

    4.  **Special Instructions:**
        *   **`BX LR`**: Branch and Exchange. Branch to the address in LR. This is used to return from a function.
            *   Mnemonic: `BX`
            *   Operand: Register (`LR`).

*   **Syntax:**
    *   Most assemblers use the **AT&T syntax** or **Intel syntax**. ARM's native assemblers often use a syntax similar to Intel syntax but with specific ARM conventions. For example, the destination register is often listed first.
    *   Comments start with a semicolon `;`.

**Reference (Zhu, Chapters 2-4):** Zhu's textbook provides comprehensive coverage of ARM assembly language for Cortex-M processors, including detailed explanations of instruction formats, addressing modes, and practical examples.

**Important Point:** ARM assembly instructions are typically of fixed size (16-bit or 32-bit) and follow a consistent format: Mnemonic, Destination Operand, Source Operand(s).

---

### Practice Questions

1.  **Memory Organization:** What is the primary difference between RAM and ROM in terms of data retention? What type of memory is most commonly used for storing program code in microcontrollers?
2.  **CPU Components:** Briefly describe the role of the ALU and the Control Unit within a CPU.
3.  **I/O:** Explain the concept of Memory-Mapped I/O (MMIO). Why is it advantageous compared to I/O-Mapped I/O in many modern architectures?
4.  **Cortex-M Registers:** What is the purpose of the Link Register (LR) in ARM Cortex-M architecture? When is it typically used?
5.  **Pipelining:** What is the main advantage of instruction pipelining? What are the three main types of pipeline hazards?
6.  **Memory Model:** Describe the typical structure of the 4GB address space in an ARM Cortex-M microcontroller. Where is the vector table usually located?
7.  **Bit Banding:** If a Cortex-M3 processor supports bit banding, how can you atomically set a specific bit in a peripheral register without using a read-modify-write sequence?
8.  **Assembly Language:** Write an ARM assembly language instruction that loads a 32-bit value from the memory address stored in register `R2` into register `R0`.
9.  **Assembly Language:** Write an ARM assembly language instruction that adds the value in register `R5` to the immediate value `10` and stores the result in register `R4`.

---

### Answers to Practice Questions

1.  **Memory Organization:** RAM is volatile, meaning its data is lost when power is removed, and is used for active program execution. ROM is non-volatile, retaining data without power, and is used for storing program code and fixed data. Flash memory is the most common type for storing program code in microcontrollers.
2.  **CPU Components:** The **ALU (Arithmetic Logic Unit)** performs arithmetic and logical operations. The **Control Unit** fetches instructions from memory, decodes them, and directs the CPU's operations and the flow of data.
3.  **I/O:** Memory-Mapped I/O (MMIO) treats I/O devices as if they were memory locations. The CPU uses standard load/store instructions to access them. This is advantageous because it simplifies the instruction set and bus structure, allowing a single set of memory access instructions to interact with both memory and peripherals.
4.  **Cortex-M Registers:** The **Link Register (LR)** stores the return address when a subroutine (function) is called. It is essential for function calls and returns, allowing the program to resume execution after a function completes.
5.  **Pipelining:** The main advantage of instruction pipelining is **increased throughput** by overlapping the execution of multiple instructions. The three main types of pipeline hazards are **structural hazards**, **data hazards**, and **control hazards**.
6.  **Memory Model:** The 4GB address space of Cortex-M is segmented into regions for code, SRAM, peripherals (including system peripherals like NVIC and SysTick), and external memory. The **vector table**, containing interrupt service routine pointers and the initial stack pointer, is typically located at the beginning of the code region (address 0x00000000 or a configured offset).
7.  **Bit Banding:** If bit banding is supported, you can atomically set a bit by writing `0x00000001` to the corresponding address in the bit-band alias region. This operation is atomic, meaning it's performed as a single, indivisible unit.
8.  **Assembly Language:** `LDR R0, [R2]`
9.  **Assembly Language:** `ADD R4, R5, #10`

---

### Important Points to Remember

*   **RISC vs. CISC:** Cortex-M is a RISC architecture, emphasizing simpler instructions and pipelining.
*   **Thumb-2 ISA:** A key feature offering good code density and performance.
*   **Load/Store Architecture:** Memory access is restricted to `LOAD` and `STORE` instructions.
*   **Registers:** Understand the roles of general-purpose registers (R0-R12), SP, LR, and PC.
*   **Memory Map:** The 4GB address space is segmented for code, data, peripherals, and system control.
*   **Endianness:** Cortex-M is often configured as little-endian.
*   **Bit Banding:** An efficient mechanism for atomic bit manipulation, often found in Cortex-M3/M4.
*   **Assembly Syntax:** Pay attention to the mnemonic, operands, and addressing modes.

---

This concludes the review of computer organization and the introduction to the ARM Cortex-M architecture. These foundational concepts are critical for understanding subsequent topics in embedded C programming and ARM architecture.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
