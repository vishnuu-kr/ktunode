---
title: "Introduction to microprocessors - Features and Architecture of 8085"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 1: Introduction to microprocessors "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3620b"
status: "completed"
scrapedAt: "2026-05-23T16:22:34.981Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS - Module 1: Introduction to Microprocessors

## Topic: Introduction to Microprocessors - Features and Architecture of 8085

**Course Outcomes Addressed:**
*   CO1: Describe the architecture of 8085 microprocessor and 8085 Assembly language programming. (Knowledge Level: K2)
*   CO3: Understand the need for interrupts, Subroutines, timing diagram of 8085 microprocessor and interfacing (Knowledge Level: K2) - *While this topic primarily focuses on architecture, understanding it is foundational for understanding interrupts, subroutines, and interfacing as per CO2.*

**Learning Outcomes Covered in this Topic:**
*   Understanding the basic concept of a microprocessor.
*   Identifying the key features of a microprocessor.
*   Explaining the architecture of the 8085 microprocessor.
*   Describing the function of each internal component of the 8085.

**Textbook References:**
*   **Fundamentals of Microprocessor and Micro controllers by Ram, B** (DHANPAT Rai Publications (P) Ltd.-New Delhi,) - *Likely to provide a strong foundation on basic microprocessor concepts and 8085 architecture.*
*   **Microprocessor, Architecture, Programming and Applications by Ramesh Gaonkar** (Penram International Publishing, Sixth edition, 2014) - *Considered a definitive text for 8085, this book will be heavily referenced for detailed architecture and programming aspects.*
*   **Microprocessor Theory and Application by Rafiquzzaman** (PHI Learning, First Edition) - *Offers theoretical insights and practical applications, useful for understanding the 'why' behind the architecture.*

---

### 1. Introduction to Microprocessors

**Key Concepts:**
*   **Microprocessor:** A central processing unit (CPU) on a single integrated circuit (IC) or a few ICs. It's the "brain" of a computer, responsible for fetching, decoding, and executing instructions.
*   **Integrated Circuit (IC):** A miniaturized electronic circuit fabricated on a semiconductor material, typically silicon.
*   **CPU (Central Processing Unit):** The primary component of a computer that performs most of the processing. It includes the Arithmetic Logic Unit (ALU), Control Unit, and Registers.

**Definition:**
A microprocessor is a programmable electronic device that contains a central processing unit (CPU) on a single chip. It executes instructions from a program, performs arithmetic and logic operations, and manages data flow within a system.

**Evolution:**
Microprocessors evolved from early vacuum tube-based computers to transistors, then to Integrated Circuits (ICs), leading to the development of complex CPUs on a single chip. This miniaturization and integration have made computing more accessible and powerful.

**Role in Embedded Systems:**
Microprocessors are the core of many embedded systems. They are chosen based on the specific requirements of the application, considering factors like processing power, cost, power consumption, and available peripherals.

---

### 2. Key Features of a Microprocessor

**Key Concepts:**
*   **Word Length:** The number of bits the microprocessor can process at a time (e.g., 8-bit, 16-bit, 32-bit). This affects the data transfer rate and the size of numbers it can handle.
*   **Clock Speed:** The rate at which the microprocessor executes instructions, measured in Hertz (Hz). Higher clock speeds generally mean faster processing.
*   **Instruction Set:** The collection of commands that a microprocessor understands and can execute. A larger and more complex instruction set can perform more operations but might require more complex hardware.
*   **Bus Structure:** The pathways used to transfer data, addresses, and control signals between the microprocessor and other components in the system.
    *   **Data Bus:** Carries data between the CPU and memory/I/O devices. It's bidirectional.
    *   **Address Bus:** Carries memory addresses from the CPU to memory/I/O devices. It's unidirectional (CPU to others).
    *   **Control Bus:** Carries control signals (e.g., read, write, clock) that manage the operations of the system.
*   **Number of Pins:** The physical connections on the IC package, which dictate the number of external devices and peripherals it can interface with.
*   **Power Consumption:** The amount of electrical power the microprocessor requires to operate. This is a crucial factor in battery-powered or portable embedded systems.
*   **Interrupt Handling:** The ability of the microprocessor to respond to external events or requests from peripheral devices.

**Examples of Features:**
*   **8085 Microprocessor:** An 8-bit microprocessor.
    *   **Word Length:** 8 bits.
    *   **Clock Speed:** Typically around 3.25 MHz (though variations exist).
    *   **Instruction Set:** CISC (Complex Instruction Set Computing) architecture.
    *   **Bus Structure:** 8-bit data bus, 16-bit address bus.
    *   **Number of Pins:** 40 pins.
    *   **Interrupts:** Supports multiple interrupt request lines.

**Highlight:** The word length and address bus size are critical for determining the system's capability. An 8-bit data bus means it can transfer 8 bits of data at a time, while a 16-bit address bus allows it to access $2^{16} = 65,536$ memory locations (64 KB).

---

### 3. Architecture of the 8085 Microprocessor

**Key Concepts:**
*   **ALU (Arithmetic Logic Unit):** Performs arithmetic (addition, subtraction) and logical (AND, OR, NOT) operations.
*   **Register Array:** A set of high-speed storage locations within the CPU used to hold data, instructions, and addresses temporarily.
*   **Control Unit:** Decodes instructions and generates control signals to coordinate the operations of the ALU, registers, and other components.
*   **Timing and Control Unit:** Generates timing and control signals for the operation of the microprocessor and its interaction with peripherals.
*   **Interrupt Control:** Manages interrupt requests from external devices.
*   **Serial I/O Control:** Handles serial communication.

**Introduction to 8085 Architecture:**
The Intel 8085 is an 8-bit microprocessor introduced by Intel in 1977. It was one of the most popular microprocessors of its time and is widely used for educational purposes to teach microprocessor fundamentals. It is a 40-pin DIP (Dual In-line Package) IC.

**Functional Blocks of 8085:**

The architecture of the 8085 can be broadly divided into these functional blocks:

1.  **Accumulator (A):**
    *   An 8-bit register.
    *   Used for arithmetic and logical operations.
    *   Operands and results of many operations are stored in the accumulator.
    *   It is part of the Register Array.

2.  **Arithmetic Logic Unit (ALU):**
    *   Performs 8-bit arithmetic operations (addition, subtraction, increment, decrement) and logical operations (AND, OR, XOR, NOT, shifts, rotates).
    *   Operates on data supplied by the accumulator and one of the other registers.
    *   The result of the operation is usually stored back in the accumulator.
    *   Includes a set of **Flags** that indicate the status of the operation.

3.  **Flag Register (or Status Register):**
    *   An 8-bit register, but only 5 bits are used as flags.
    *   These flags reflect the result of an ALU operation.
    *   The 5 flags are:
        *   **Sign Flag (S):** Set if the result is negative (MSB is 1), reset if positive (MSB is 0).
        *   **Zero Flag (Z):** Set if the result is zero, reset if non-zero.
        *   **Auxiliary Carry Flag (AC):** Set if there is a carry from bit 3 to bit 4 during an addition or a borrow from bit 4 to bit 3 during a subtraction. Used in BCD arithmetic.
        *   **Parity Flag (P):** Set if the result has even parity (even number of 1s), reset if odd parity (odd number of 1s).
        *   **Carry Flag (CY):** Set if there is a carry out of bit 7 during addition or a borrow into bit 7 during subtraction.

4.  **Register Array:**
    *   Contains general-purpose registers and special-purpose registers.
    *   **General-Purpose Registers:**
        *   Six 8-bit registers: B, C, D, E, H, L.
        *   Can be used to store 8-bit data.
        *   Can also be paired up to form 16-bit registers: BC, DE, HL. These pairs are used for 16-bit operations and for addressing memory.
    *   **Special-Purpose Registers:**
        *   **Accumulator (A):** Already described.
        *   **Flag Register:** Already described.

5.  **Instruction Register (IR):**
    *   Holds the current instruction being decoded and executed.
    *   Receives the opcode from memory.

6.  **Program Counter (PC):**
    *   A 16-bit register.
    *   Holds the memory address of the next instruction to be fetched.
    *   It is incremented automatically after each instruction fetch.
    *   Crucial for sequential execution of programs.

7.  **Stack Pointer (SP):**
    *   A 16-bit register.
    *   Points to a location in memory called the "stack".
    *   The stack is used for temporary storage of data, especially during subroutine calls and interrupt handling.
    *   When a subroutine is called, the return address (address of the next instruction after the call) is pushed onto the stack. When the subroutine returns, this address is popped off the stack.
    *   The stack grows from higher memory addresses to lower memory addresses.

8.  **Timing and Control Unit:**
    *   Generates the necessary control signals for the microprocessor and the system.
    *   These signals include:
        *   **ALE (Address Latch Enable):** Used to demultiplex the address and data bus.
        *   **RD (Read):** Control signal to read data from memory or I/O.
        *   **WR (Write):** Control signal to write data to memory or I/O.
        *   **IO/M:** Differentiates between memory (M=0) and I/O (M=1) operations.
        *   **CLK (Clock):** Provides the clock pulse for synchronization.
        *   **RESET:** Used to reset the microprocessor to its initial state.
        *   **READY:** Used for interfacing with slow peripheral devices.

9.  **Interrupt Control:**
    *   Manages interrupt requests from external devices.
    *   The 8085 has five interrupt request lines:
        *   **TRAP:** Non-maskable interrupt (highest priority).
        *   **RST 7.5:** Maskable interrupt, edge-triggered.
        *   **RST 6.5:** Maskable interrupt, level-triggered.
        *   **RST 5.5:** Maskable interrupt, level-triggered.
        *   **INTR (Interrupt Request):** Maskable interrupt, general purpose.
    *   It also has an **Interrupt Enable (INT Enable)** flip-flop and an **Interrupt Mask** to control which interrupts are active.

10. **Serial I/O Ports:**
    *   The 8085 has two serial I/O lines:
        *   **SID (Serial Input Data):** For receiving serial data.
        *   **SOD (Serial Output Data):** For transmitting serial data.
    *   These are useful for communicating with serial devices like modems or other microprocessors.

**Bus Structure of 8085:**

*   **Address Bus (A0-A15):** 16-bit unidirectional bus. Used to send the 16-bit address of memory locations or I/O devices. This allows access to $2^{16} = 65,536$ memory locations.
*   **Data Bus (AD0-AD7):** 8-bit bidirectional bus. Used to transfer 8-bit data between the microprocessor and memory or I/O devices. This bus is multiplexed, meaning it carries both address (lower 8 bits) and data.
*   **Control Bus:** A collection of signals that control the operations of the system. Key signals include:
    *   `RD` (Read): Active low, indicates that the processor wants to read data from memory or I/O.
    *   `WR` (Write): Active low, indicates that the processor wants to write data to memory or I/O.
    *   `IO/M` (Input/Output or Memory): When high (`1`), the operation is with an I/O device. When low (`0`), the operation is with memory.
    *   `ALE` (Address Latch Enable): When high, the lower 8 bits of the address are on the AD0-AD7 bus. The external latch uses ALE to capture these address bits. When ALE goes low, the AD0-AD7 bus becomes available for data transfer.
    *   `CLK`: The system clock signal.
    *   `RESET`: Resets the processor to its initial state.
    *   `READY`: Input signal from peripherals to indicate if they are ready to transfer data.
    *   `HOLD` & `HLDA` (Hold Acknowledge): Signals for Direct Memory Access (DMA).

---

### 4. Internal Architecture Diagram of 8085

*(Imagine a block diagram here, showing the interconnectedness of the above components.)*

**Simplified Diagram Components:**

```
+------------------------------------------------------+
|                      8085 Microprocessor              |
|                                                      |
| +----------------------+   +-----------------------+ |
| |   Accumulator (A)    |---|                       | |
| |                      |   |                       | |
| +----------------------+   |                       | |
|                              |   Arithmetic & Logic| |
| +----------------------+   |        Unit (ALU)   | |
| |   Flag Register      |---|                       | |
| |                      |   |                       | |
| +----------------------+   +-----------------------+ |
|                              |                       |
| +----------------------+   +-----------------------+ |
| | General Purpose Regs |---|                       | |
| | (B,C,D,E,H,L)        |   |                       | |
| +----------------------+   |   Register Array      | |
|                              |                       | |
| +----------------------+   +-----------------------+ |
| |  Program Counter (PC)|---|                       | |
| +----------------------+   |                       | |
|                              |   Internal Bus/Data   | |
| +----------------------+   |        Path           | |
| |  Stack Pointer (SP)  |---|                       | |
| +----------------------+   |                       | |
|                              +-----------------------+ |
|                              |                       |
| +----------------------+   +-----------------------+ |
| | Instruction Register |---|                       | |
| +----------------------+   |   Instruction Decode  | |
|                              |   & Control Logic     | |
|                              +-----------------------+ |
|                              |                       |
| +----------------------+   +-----------------------+ |
| | Interrupt Control    |---|                       | |
| +----------------------+   |   Timing & Control    | |
|                              |        Unit           | |
| +----------------------+   |                       | |
| |  Serial I/O Control  |---|                       | |
| +----------------------+   +-----------------------+ |
|                                                      |
|  Address Bus (A0-A15) ---->                          |
|  Data Bus (AD0-AD7) <---->                          |
|  Control Bus Signals --->                            |
+------------------------------------------------------+
```

**How the Components Interact (Simplified Flow):**

1.  **Fetch:** The PC holds the address of the next instruction. This address is sent out on the address bus (A0-A15). The lower 8 bits of the address are also sent on AD0-AD7, with ALE high.
2.  **Read Opcode:** The `RD` signal is activated, and the opcode from the memory location is read into the 8085 via the AD0-AD7 data bus. The AD0-AD7 bus then becomes available for data.
3.  **Decode:** The opcode is placed in the Instruction Register. The Control Unit decodes this opcode.
4.  **Execute:** Based on the decoded instruction:
    *   Data might be fetched from memory or I/O using the PC or other registers to form the address, and `RD` signal.
    *   Data might be written to memory or I/O using `WR` signal.
    *   ALU operations are performed on data from registers (like Accumulator) and other registers, with results potentially stored back.
    *   Flags are updated based on ALU operation results.
    *   PC and SP are updated as needed (e.g., incrementing PC, pushing/popping from stack).
    *   Interrupts are checked if enabled.

---

### 5. Summary of 8085 Features

*   **8-bit data bus:** Can transfer 8 bits of data at a time.
*   **16-bit address bus:** Can address up to 64 KB of memory.
*   **7.2 MHz maximum clock frequency:** (Though common speeds were lower).
*   **50 instructions:** Includes data transfer, arithmetic, logical, branching, and control instructions.
*   **Register set:** Accumulator, general-purpose registers (B, C, D, E, H, L), PC, SP, and Instruction Register.
*   **Five interrupt lines:** TRAP, RST 7.5, RST 6.5, RST 5.5, INTR.
*   **Serial I/O ports:** SID and SOD.
*   **40-pin DIP package.**
*   **Requires single +5V power supply.**

---

### 6. Practice Questions and Answers

**Question 1:**
What is the word length of the 8085 microprocessor, and what does it imply?

**Answer:**
The word length of the 8085 microprocessor is 8 bits. This means it can process 8 bits of data at a time. It also has an 8-bit data bus for transferring data.

**Question 2:**
How many memory locations can the 8085 microprocessor address, and why?

**Answer:**
The 8085 microprocessor can address $2^{16} = 65,536$ memory locations. This is because it has a 16-bit address bus (A0-A15), which can generate 16-bit addresses.

**Question 3:**
Name the five interrupt lines of the 8085 microprocessor and their priorities (highest to lowest).

**Answer:**
The five interrupt lines are:
1.  TRAP (Highest priority, non-maskable)
2.  RST 7.5 (Maskable, edge-triggered)
3.  RST 6.5 (Maskable, level-triggered)
4.  RST 5.5 (Maskable, level-triggered)
5.  INTR (Lowest priority, maskable, general purpose)

**Question 4:**
Explain the purpose of the ALE signal in the 8085.

**Answer:**
The Address Latch Enable (ALE) signal is used to demultiplex the address and data bus. The 8085 uses a multiplexed bus where the lower 8 bits of the address (A0-A7) are transmitted on the AD0-AD7 lines during the first part of the machine cycle. When ALE is high, these lines carry the address. An external latch (like the 8212 or 74LS373) captures this address. When ALE goes low, the AD0-AD7 lines become available for data transfer.

**Question 5:**
What is the role of the Stack Pointer (SP) in the 8085?

**Answer:**
The Stack Pointer (SP) is a 16-bit register that holds the address of the top of the stack in memory. The stack is a region of memory used for temporary storage, particularly for return addresses during subroutine calls and for saving register contents during interrupt service routines. When data is pushed onto the stack, the SP is decremented, and when data is popped, it is incremented.

---

### 7. Important Points to Remember

*   The 8085 is an **8-bit microprocessor** with a **16-bit address bus**.
*   The **AD0-AD7 bus is multiplexed** for address and data, controlled by the **ALE** signal.
*   The **PC** points to the next instruction, and the **SP** points to the stack.
*   The **ALU** performs arithmetic and logical operations, and its results are reflected in the **Flags**.
*   **Interrupts** are crucial for handling external events and require careful management of priorities and masking.
*   The **Timing and Control Unit** orchestrates all operations using control signals like `RD`, `WR`, and `IO/M`.

---
