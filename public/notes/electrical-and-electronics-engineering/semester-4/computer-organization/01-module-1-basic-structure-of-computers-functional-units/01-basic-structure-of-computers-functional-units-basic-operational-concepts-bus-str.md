---
title: "Basic Structure of computers –functional units - basic operational concepts - bus structures."
subject: "COMPUTER ORGANIZATION"
module: "Module 1: Basic Structure of computers –functional units "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f50"
status: "completed"
scrapedAt: "2026-05-23T16:14:54.850Z"
---
## Computer Organization: Module 1 - Basic Structure of Computers & Functional Units

This module introduces the fundamental building blocks of a computer system, focusing on how different components interact to execute instructions.

---

### 1. Basic Structure of Computers – Functional Units

A computer, at its core, is a system designed to process information. It achieves this through the coordinated operation of several key functional units.

**Key Concepts:**

*   **System Unit:** The central part of the computer that houses the main processing and memory components.
*   **Peripherals:** External devices that interact with the computer, such as input and output devices.

**Functional Units:**

1.  **Central Processing Unit (CPU):** The "brain" of the computer responsible for executing instructions. It comprises:
    *   **Arithmetic Logic Unit (ALU):** Performs arithmetic (addition, subtraction, etc.) and logical (AND, OR, NOT, etc.) operations.
    *   **Control Unit (CU):** Directs and coordinates all operations within the computer. It fetches instructions from memory, decodes them, and generates control signals to execute them.
    *   **Registers:** Small, high-speed storage locations within the CPU used to hold data and instructions that are currently being processed. Common registers include:
        *   **Program Counter (PC):** Holds the memory address of the next instruction to be fetched.
        *   **Instruction Register (IR):** Holds the instruction currently being executed.
        *   **Memory Address Register (MAR):** Holds the address of the memory location to be accessed.
        *   **Memory Data Register (MDR) / Memory Buffer Register (MBR):** Holds the data being read from or written to memory.
        *   **Accumulator (AC):** A general-purpose register often used for arithmetic operations.

2.  **Memory Unit:** Stores programs and data. It's organized into a series of locations, each with a unique address.
    *   **Main Memory (RAM - Random Access Memory):** Volatile memory that stores instructions and data currently in use by the CPU. It allows for fast access to any memory location.
    *   **Secondary Storage (e.g., Hard Drives, SSDs):** Non-volatile storage used for long-term storage of programs and data. Access is slower than RAM.

3.  **Input Devices:** Allow users to enter data and instructions into the computer (e.g., keyboard, mouse, scanner).

4.  **Output Devices:** Display or present the results of the computer's processing (e.g., monitor, printer, speakers).

5.  **Bus Structures:** A set of electrical pathways that connect the different functional units and allow them to communicate with each other.

**Example:**

Imagine you want to add two numbers, 5 and 3.
*   The **input devices** (keyboard) send '5' and '3' to the computer.
*   These numbers are stored in **memory**.
*   The **CPU's Control Unit** fetches an "add" instruction from memory and also fetches the numbers 5 and 3.
*   The numbers are loaded into **registers** within the CPU.
*   The **ALU** performs the addition.
*   The result (8) is stored back in **memory** or a **register**.
*   Finally, the **output device** (monitor) displays the result '8'.

**Learning Outcomes Addressed:**

*   **CO1:** This section directly addresses identifying the relevance of functional units in a digital computer.

**Key Points to Remember:**

*   The CPU is the central component, but it cannot function without memory and I/O.
*   Registers are crucial for fast, temporary storage within the CPU.

---

### 2. Basic Operational Concepts

This section delves into how the functional units work together to execute a program. The fundamental process involves fetching, decoding, and executing instructions.

**Key Concepts:**

*   **Instruction Set Architecture (ISA):** Defines the set of instructions that a processor can understand and execute. This includes the types of instructions, their formats, and how they operate on data.
*   **Instruction Cycle (Fetch-Decode-Execute Cycle):** The fundamental sequence of operations performed by the CPU to execute a single instruction.

**The Instruction Cycle:**

The instruction cycle typically consists of the following steps:

1.  **Fetch:**
    *   The **Program Counter (PC)** holds the address of the next instruction.
    *   This address is sent to **memory** via the **MAR**.
    *   The **Control Unit** requests to read the instruction from that memory location.
    *   The instruction is transferred from **memory** to the **MDR**.
    *   The instruction is then moved from **MDR** to the **Instruction Register (IR)**.
    *   The **PC** is incremented to point to the next instruction in sequence.

2.  **Decode:**
    *   The **Control Unit** decodes the instruction in the **IR**.
    *   It determines the operation to be performed (e.g., add, subtract, load, store) and the operands (data or memory addresses) involved.
    *   If the instruction requires fetching data from memory, the address is placed in the **MAR**, and the data is fetched into the **MDR**.

3.  **Execute:**
    *   The **Control Unit** generates control signals based on the decoded instruction.
    *   These signals direct the **ALU** and other components to perform the required operation.
    *   For example, if the instruction is "ADD R1, R2" (add the contents of register R2 to register R1):
        *   The **Control Unit** signals the **ALU** to perform addition.
        *   It signals to transfer the contents of **R2** to an ALU input.
        *   It signals to transfer the contents of **R1** to another ALU input.
        *   The result from the ALU is typically stored back in a register (e.g., R1) or in the **MDR** if it's to be written to memory.

4.  **Memory Access (if applicable):**
    *   If the instruction requires reading from or writing to memory (e.g., "LOAD R1, [address]" or "STORE R1, [address]"), the address is placed in the **MAR**, and data is transferred to/from **MDR**.

5.  **Write Back (if applicable):**
    *   If the result of the execution needs to be stored back into a register, it is done at this stage.

**Example: Executing `ADD R1, [1000]`**

Let's assume:
*   `PC` = 500 (address of the instruction)
*   Memory at address 500 contains the instruction `ADD R1, [1000]`
*   `R1` contains the value 10
*   Memory at address 1000 contains the value 5

**Instruction Cycle Steps:**

1.  **Fetch:**
    *   `PC` (500) -> `MAR`
    *   `CU` requests read from memory at address 500.
    *   Memory returns the instruction `ADD R1, [1000]` to `MDR`.
    *   `MDR` -> `IR`. `IR` now holds `ADD R1, [1000]`.
    *   `PC` is incremented to 501.

2.  **Decode:**
    *   `CU` decodes `ADD R1, [1000]`. It understands this is an addition operation, where the result should go into `R1`, and the operand is fetched from memory location 1000.
    *   The address `1000` is extracted from the instruction and placed in `MAR`.

3.  **Execute (and Memory Access):**
    *   `CU` requests a read from memory at address 1000.
    *   Memory returns the value 5 to `MDR`.
    *   `CU` signals the ALU to perform addition.
    *   `R1` (value 10) is sent to one input of the ALU.
    *   `MDR` (value 5) is sent to the other input of the ALU.
    *   ALU computes 10 + 5 = 15.

4.  **Write Back:**
    *   The result from the ALU (15) is written back to `R1`. `R1` now contains 15.

The cycle then repeats for the next instruction at `PC` = 501.

**Interrupts:**

*   **Definition:** An interrupt is a signal to the processor emitted by hardware or software indicating an event that needs immediate attention.
*   **Types:**
    *   **Hardware Interrupts:** Generated by external devices (e.g., I/O devices signaling completion of an operation).
    *   **Software Interrupts (Traps):** Generated by executing an instruction (e.g., division by zero, system calls).
*   **Handling:** When an interrupt occurs, the CPU suspends the current program, saves its state (e.g., PC, registers), and jumps to a specific interrupt service routine (ISR) to handle the interrupt. After handling, the CPU restores the saved state and resumes the interrupted program.

**Learning Outcomes Addressed:**

*   **CO1:** Understanding memory locations and how they are accessed is key to the fetch-decode-execute cycle.
*   **CO4:** This section is foundational to understanding how control signals are generated to execute instructions.

**Key Points to Remember:**

*   The instruction cycle is the heart of computer operation.
*   The PC always points to the *next* instruction to be fetched.
*   Interrupts allow the CPU to respond to external events without constantly polling.

---

### 3. Bus Structures

Bus structures are the communication pathways that connect the various functional units of a computer. They are essential for the transfer of data, addresses, and control signals.

**Key Concepts:**

*   **Bus:** A collection of wires that carries information between components.
*   **Bus Lines:** Individual wires within a bus.
*   **Bus Width:** The number of bus lines determines the amount of data that can be transferred in one go. A wider bus generally means faster data transfer.
*   **Bus Protocol:** Rules governing how devices use the bus to communicate, including timing and arbitration.

**Types of Buses:**

1.  **Data Bus:**
    *   Carries the actual data being transferred between components.
    *   **Bidirectional:** Data can flow in both directions (e.g., from memory to CPU, or CPU to memory).
    *   The width of the data bus (e.g., 32-bit, 64-bit) determines the word size of the computer.

2.  **Address Bus:**
    *   Carries the memory addresses that the CPU wants to access (read from or write to).
    *   **Unidirectional:** Addresses are always sent from the CPU to memory or I/O devices.
    *   The width of the address bus determines the maximum amount of memory the CPU can address. For example, a 20-bit address bus can address 2^20 = 1MB of memory.

3.  **Control Bus:**
    *   Carries control signals and timing information to coordinate the activities of the various components.
    *   Examples of control signals:
        *   **Memory Read:** Signal to memory to read data.
        *   **Memory Write:** Signal to memory to write data.
        *   **I/O Read:** Signal to I/O device to read data.
        *   **I/O Write:** Signal to I/O device to write data.
        *   **Bus Request:** A device requesting to use the bus.
        *   **Bus Grant:** A signal indicating that a device has been granted bus access.
        *   **Clock:** Synchronizes operations.
        *   **Interrupt Request (IRQ):** Signals an interrupt event.

**Bus Structures:**

*   **Single Bus Structure (Common Bus):**
    *   All components (CPU, Memory, I/O) are connected to a single bus.
    *   **Advantages:** Simple design, lower cost.
    *   **Disadvantages:** Bottleneck for performance, as only one transfer can happen at a time. Data, address, and control signals share the same pathways (though separated by function).

    *   *Diagrammatic Representation:*
        ```
        +-------+       +---------+       +---------+
        |  CPU  |-------|  Memory |-------| I/O Dev |
        +-------+       +---------+       +---------+
              \             /             /
               \           /             /
                +-----------------------+
                |      Common Bus       |
                +-----------------------+
        ```

*   **Multiple Bus Structures:**
    *   To overcome the bottleneck of a single bus, computers often use multiple buses.
    *   **Example: Separate Buses for CPU and I/O:** A dedicated bus between CPU and Memory, and another for I/O devices. This allows CPU-Memory transfers and I/O transfers to occur concurrently.
    *   **Example: High-Performance Systems:** May use even more specialized buses, like a separate memory bus, I/O bus, and a cache bus.
    *   **Example: System Bus (Intel Architecture):** Typically consists of separate data, address, and control buses that are multiplexed or bundled.

    *   *Diagrammatic Representation (Conceptual - Separate CPU-Memory and I/O Buses):*
        ```
        +-------+       +---------+
        |  CPU  |-------|  Memory |
        +-------+       +---------+
              |             |
              |             | (CPU-Memory Bus)
              +-------------+

              |             |
              |             | (I/O Bus)
              +-------------+
        +-------+       +---------+
        |  CPU  |-------| I/O Dev |
        +-------+       +---------+
        ```

*   **Bus Arbitration:**
    *   When multiple devices need to use the bus, a mechanism is needed to decide which device gets control. This is called bus arbitration.
    *   **Centralized Arbitration:** A dedicated bus arbiter controls access.
    *   **Distributed Arbitration:** Devices themselves negotiate for bus access.

**Learning Outcomes Addressed:**

*   **CO1:** Understanding bus structures is fundamental to how memory locations are accessed and data is transferred.
*   **CO5:** This section directly addresses how I/O devices are organized and connected via buses.

**Key Points to Remember:**

*   The data bus, address bus, and control bus are the fundamental components of any bus structure.
*   Bus width significantly impacts performance.
*   Multiple bus structures are used to improve performance by allowing concurrent operations.

---

### Practice Questions & Exercises

**Question 1 (Knowledge Level: K2):**
Identify the primary functional unit responsible for executing arithmetic and logical operations in a computer.
a) Memory Unit
b) Control Unit
c) Arithmetic Logic Unit (ALU)
d) Input Device

**Question 2 (Knowledge Level: K2):**
What is the purpose of the Program Counter (PC) in the CPU?
a) To store the current instruction being executed.
b) To hold the address of the next instruction to be fetched.
c) To store the result of an ALU operation.
d) To manage I/O device communication.

**Question 3 (Knowledge Level: K2):**
Which bus is responsible for carrying memory addresses from the CPU to memory?
a) Data Bus
b) Control Bus
c) Address Bus
d) All of the above

**Question 4 (Knowledge Level: K3):**
Describe the sequence of events that occur during the "Fetch" phase of the instruction cycle.

**Question 5 (Knowledge Level: K2):**
Differentiate between volatile and non-volatile memory. Provide an example of each.

**Question 6 (Knowledge Level: K3):**
Explain why a multiple bus structure can improve the performance of a computer system compared to a single bus structure.

---

### Answers

**Answer 1:**
c) Arithmetic Logic Unit (ALU)

**Answer 2:**
b) To hold the address of the next instruction to be fetched.

**Answer 3:**
c) Address Bus

**Answer 4:**
During the "Fetch" phase:
1. The address currently stored in the Program Counter (PC) is transferred to the Memory Address Register (MAR).
2. This address is sent over the address bus to the memory unit.
3. The Control Unit issues a "Memory Read" command.
4. The data (instruction) at the specified memory address is read and transferred to the Memory Data Register (MDR).
5. The instruction is then moved from the MDR to the Instruction Register (IR).
6. Finally, the PC is incremented to point to the next instruction in sequence.

**Answer 5:**
*   **Volatile Memory:** Loses its stored information when the power supply is interrupted. Data is lost if the computer is turned off.
    *   **Example:** RAM (Random Access Memory).
*   **Non-Volatile Memory:** Retains its stored information even when the power supply is interrupted. Data persists even when the computer is turned off.
    *   **Example:** Hard Disk Drive (HDD), Solid State Drive (SSD), ROM (Read-Only Memory).

**Answer 6:**
A single bus structure creates a bottleneck because only one data transfer can occur at a time between any two components connected to the bus. In a multiple bus structure, different buses are dedicated to different types of transfers or components. For example, having separate buses for CPU-to-memory transfers and I/O transfers allows these operations to occur concurrently. This parallelism reduces the time spent waiting for the bus, leading to higher overall system performance.

---

### Important Points to Remember:

*   The computer's functionality relies on the coordinated interaction of its functional units: CPU, Memory, Input, Output, and Buses.
*   The CPU's core operation is the fetch-decode-execute cycle, managed by the Control Unit and utilizing ALU and registers.
*   Buses are critical communication pathways, categorized by their function (data, address, control) and their structure (single vs. multiple).
*   Bus width directly impacts the rate of data transfer.
*   Interrupts are crucial for efficient handling of external events.

---
