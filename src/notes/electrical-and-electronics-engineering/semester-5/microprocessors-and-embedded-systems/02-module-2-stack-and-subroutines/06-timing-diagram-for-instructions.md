---
title: "Timing diagram for instructions"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 2: Stack and Subroutines"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36219"
status: "completed"
scrapedAt: "2026-05-23T16:22:44.635Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS - Module 2: Stack and Subroutines

## Topic: Timing Diagram for Instructions

This topic focuses on understanding how instructions are executed by the microprocessor over a sequence of clock cycles, as visualized through timing diagrams. This is crucial for understanding the operational behavior of the microprocessor and for tasks like interrupt handling and subroutine execution.

### Learning Outcomes Addressed:

*   **Understanding the timing diagram of the 8085 microprocessor and interfacing (CO2 - K2)**: This topic directly contributes to this outcome by explaining the sequential execution of instructions and their timing.
*   **Describing the architecture of the 8085 microprocessor and 8085 Assembly language programming (CO1 - K2)**: Understanding instruction timing is fundamental to understanding how assembly language programs execute on the 8085 architecture.

---

### 1. Introduction to Timing Diagrams

*   **Definition:** A timing diagram is a graphical representation that shows the sequence of operations performed by a microprocessor (or any digital system) over time, synchronized with the clock signal. It illustrates the states of various control signals, data bus, and address bus during the execution of an instruction.
*   **Purpose:**
    *   To understand the step-by-step execution of each instruction.
    *   To determine the number of clock cycles (T-states) required for each instruction.
    *   To analyze the interaction between the microprocessor and external peripherals.
    *   To appreciate the role of control signals like ALE, RD, WR, IO/M, S0, S1, etc.
    *   Essential for designing and interfacing external components, especially for precise timing requirements.

---

### 2. Key Concepts for Understanding Timing Diagrams

*   **Clock Signal:** The fundamental signal that drives all operations within the microprocessor. Each pulse of the clock signal represents a *clock cycle* (or T-state).
*   **Instruction Cycle:** The total time required by the microprocessor to fetch an instruction from memory, decode it, and execute it. This cycle is composed of one or more *machine cycles*.
*   **Machine Cycle:** A basic unit of operation for the microprocessor. It represents a specific task, such as fetching an instruction, reading data from memory, writing data to memory, or performing I/O operations. Each machine cycle consists of a certain number of T-states.
*   **T-states (Clock Periods):** The smallest time unit in the microprocessor's operation, determined by the clock frequency. Each machine cycle is divided into T-states.
*   **Bus Status Signals:**
    *   **IO/M (I/O or Memory):** Indicates whether the current bus operation is for memory (IO/M = 0) or I/O device (IO/M = 1).
    *   **S1, S0 (Status Signals):** Provide information about the current machine cycle. For example:
        *   S1=0, S0=0: Opcode Fetch
        *   S1=0, S0=1: Memory Read
        *   S1=1, S0=0: Memory Write
        *   S1=1, S0=1: Halt
*   **Address Latch Enable (ALE):** A signal that indicates the presence of a valid address on the address/data bus multiplexed lines (AD0-AD7). When ALE is high, the AD lines carry the lower 8 bits of the address. When ALE is low, AD lines carry data.
*   **Read (RD):** When asserted (low), it enables the microprocessor to read data from memory or an I/O device.
*   **Write (WR):** When asserted (low), it enables the microprocessor to write data to memory or an I/O device.
*   **Address Bus (A8-A15):** Carries the higher 8 bits of the address.
*   **Address/Data Bus (AD0-AD7):** Multiplexed lines that carry the lower 8 bits of the address during the first part of a machine cycle and data during the latter part.

---

### 3. Common Machine Cycles and Their Timing Diagrams (8085 Microprocessor)

The 8085 typically uses several types of machine cycles. Let's look at the timing diagrams for some fundamental ones.

#### 3.1. Opcode Fetch Cycle

*   **Purpose:** To fetch the first byte of an instruction (the opcode) from memory.
*   **Duration:** Typically 4 or 6 T-states (T1 to T4 or T1 to T6). For most common instructions, it's 4 T-states, but some instructions might require more for additional fetching.
*   **Key Operations:**
    1.  **T1:** The 8085 places the address of the instruction (stored in the Program Counter, PC) onto the address bus (A8-A15 and AD0-AD7). ALE is asserted high, latching the lower address bytes into an external latch. IO/M is low, S1=0, S0=0, indicating memory access and opcode fetch. RD is asserted low to signal a read operation.
    2.  **T2:** The AD0-AD7 lines are now used as a data bus. The microprocessor reads the opcode from the addressed memory location.
    3.  **T3:** The opcode is read and placed into the Instruction Register (IR) within the microprocessor. The address and data buses are released (often floats or goes to a high-impedance state). RD remains low.
    4.  **T4:** The microprocessor decodes the fetched opcode to determine the instruction type and the required machine cycles for execution. The bus is released.

*   **Timing Diagram Representation:**

    ```
    Clock:  |-----|-----|-----|-----|-----|-----| ...
            ^     ^     ^     ^     ^     ^
            T1    T2    T3    T4    T5    T6

    ALE:    |-----|-----|     |     |     |     | ...
            High  Low

    AD0-AD7:| A8-A15| AD0-AD7 (Data) | Floats/High-Z | ...
            (Addr)

    A8-A15: | PC contents | PC contents | PC contents | ...
            (High 8 bits)

    IO/M:   |-----|-----|-----|-----|-----|-----| ...
            Low   Low

    S1:     |-----|-----|-----|-----|-----|-----| ...
            Low   Low

    S0:     |-----|-----|-----|-----|-----|-----| ...
            Low   Low

    RD:     |-----|-----|-----|-----|-----|-----| ...
            Low   Low
    ```

    *Important Note:* The exact T-state duration and the specific signals for each phase depend on the instruction's complexity. Some instructions might have an additional T-state (T4) for opcode fetching or require multiple opcode fetch cycles if the instruction is longer than one byte.

#### 3.2. Memory Read Cycle

*   **Purpose:** To read a byte of data from a memory location.
*   **Duration:** Typically 3 T-states (T1 to T3).
*   **Key Operations:**
    1.  **T1:** The microprocessor places the memory address (from PC, register pair, or other sources) onto the address bus (A8-A15 and AD0-AD7). ALE is asserted high, latching the address. IO/M is low, S1=0, S0=1, indicating memory access and data read. RD is asserted low.
    2.  **T2:** The AD0-AD7 lines are used as a data bus. The microprocessor reads the data from the addressed memory location.
    3.  **T3:** The data is transferred into the microprocessor's internal registers. The address and data buses are released. RD remains low.

*   **Timing Diagram Representation:**

    ```
    Clock:  |-----|-----|-----|-----| ...
            ^     ^     ^     ^
            T1    T2    T3    T4

    ALE:    |-----|-----|     |     | ...
            High  Low

    AD0-AD7:| A8-A15| AD0-AD7 (Data) | Floats/High-Z | ...
            (Addr)

    A8-A15: | Addr contents | Addr contents | Addr contents | ...
            (High 8 bits)

    IO/M:   |-----|-----|-----|-----| ...
            Low   Low

    S1:     |-----|-----|-----|-----| ...
            Low   Low

    S0:     |-----|-----|-----|-----| ...
            High  High

    RD:     |-----|-----|-----|-----| ...
            Low   Low
    ```

#### 3.3. Memory Write Cycle

*   **Purpose:** To write a byte of data to a memory location.
*   **Duration:** Typically 3 T-states (T1 to T3).
*   **Key Operations:**
    1.  **T1:** The microprocessor places the memory address onto the address bus (A8-A15 and AD0-AD7). ALE is asserted high, latching the address. IO/M is low, S1=1, S0=0, indicating memory access and data write.
    2.  **T2:** The microprocessor places the data to be written onto the AD0-AD7 bus. WR is asserted low to signal a write operation.
    3.  **T3:** The data remains on the AD0-AD7 bus while WR is low, allowing the memory to latch the data. The address and data buses are released.

*   **Timing Diagram Representation:**

    ```
    Clock:  |-----|-----|-----|-----| ...
            ^     ^     ^     ^
            T1    T2    T3    T4

    ALE:    |-----|-----|     |     | ...
            High  Low

    AD0-AD7:| A8-A15| Floats/High-Z | Data to Write | ...
            (Addr)

    A8-A15: | Addr contents | Addr contents | Addr contents | ...
            (High 8 bits)

    IO/M:   |-----|-----|-----|-----| ...
            Low   Low

    S1:     |-----|-----|-----|-----| ...
            High  High

    S0:     |-----|-----|-----|-----| ...
            Low   Low

    WR:     |-----|-----|-----|-----| ...
            High  Low   Low
    ```

#### 3.4. I/O Read Cycle

*   **Purpose:** To read a byte of data from an I/O port.
*   **Duration:** Typically 3 T-states (T1 to T3).
*   **Key Operations:** Similar to Memory Read, but the IO/M signal is high.
    1.  **T1:** Address of the I/O port placed on buses, ALE high, IO/M=1, S1=0, S0=1. RD asserted low.
    2.  **T2:** Data read from the I/O port on AD0-AD7.
    3.  **T3:** Data transferred to the microprocessor.

#### 3.5. I/O Write Cycle

*   **Purpose:** To write a byte of data to an I/O port.
*   **Duration:** Typically 3 T-states (T1 to T3).
*   **Key Operations:** Similar to Memory Write, but the IO/M signal is high.
    1.  **T1:** Address of the I/O port placed on buses, ALE high, IO/M=1, S1=1, S0=0.
    2.  **T2:** Data placed on AD0-AD7, WR asserted low.
    3.  **T3:** Data written to the I/O port.

---

### 4. Instruction Execution Time (Number of T-states)

*   Every 8085 instruction has a specific instruction cycle, which is composed of a sequence of machine cycles.
*   Each machine cycle consists of a specific number of T-states.
*   The total execution time of an instruction is the sum of the T-states of all its machine cycles.
*   The number of T-states for an instruction is typically found in the instruction set documentation for the specific microprocessor.
*   **Factors affecting instruction execution time:**
    *   **Instruction Length:** Single-byte, two-byte, or three-byte instructions.
    *   **Operation Type:** Arithmetic, logic, data transfer, control transfer (jumps, calls).
    *   **Addressing Mode:** Immediate, direct, indirect, register, register indirect.
    *   **Operand Type:** Memory, register, immediate data.
    *   **Interrupts:** If an interrupt occurs, the current instruction execution might be suspended, affecting the overall timing.

#### Example: MVI A, data (Move Immediate to Accumulator)

*   **Instruction Type:** Data Transfer
*   **Length:** 2 bytes (Opcode + 8-bit data)
*   **Addressing Mode:** Immediate
*   **Machine Cycles:**
    1.  **Opcode Fetch:** 4 T-states (fetches the `MVI A` opcode)
    2.  **Memory Read:** 3 T-states (fetches the 8-bit data)
*   **Total T-states:** 4 + 3 = 7 T-states.
*   **Timing Diagram Summary:**
    *   Cycle 1 (Opcode Fetch): T1-T4
    *   Cycle 2 (Memory Read): T5-T7 (and T8 if it was a longer instruction, but for MVI A, data it finishes at T7)

#### Example: LDA address (Load Accumulator Direct)

*   **Instruction Type:** Data Transfer
*   **Length:** 3 bytes (Opcode + 16-bit address)
*   **Addressing Mode:** Direct
*   **Machine Cycles:**
    1.  **Opcode Fetch:** 4 T-states (fetches the `LDA` opcode)
    2.  **Memory Read:** 3 T-states (fetches the lower byte of the address)
    3.  **Memory Read:** 3 T-states (fetches the higher byte of the address)
    4.  **Memory Read:** 3 T-states (fetches the data from the specified address)
*   **Total T-states:** 4 + 3 + 3 + 3 = 13 T-states.

---

### 5. Timing Diagrams and Subroutines/Interrupts (Connecting to Module 2)

While timing diagrams are fundamental to all instruction execution, they are particularly important when considering subroutines and interrupts.

*   **Subroutine Calls (CALL instruction):**
    *   The `CALL` instruction itself involves:
        *   Opcode Fetch.
        *   Reading the 16-bit address of the subroutine.
        *   **Pushing the current PC (Program Counter) onto the stack:** This involves a series of Memory Write operations to store the PC value onto the stack memory. Each stack write is a Memory Write machine cycle.
        *   Loading the PC with the subroutine's starting address.
    *   Understanding the timing of these stack operations (which are memory writes) is crucial for calculating the overhead of calling a subroutine and ensuring accurate program flow.
*   **Interrupt Service Routines (ISRs):**
    *   When an interrupt occurs, the microprocessor:
        *   Completes the current instruction.
        *   **Pushes the PC (and often the Flags register) onto the stack:** Similar to subroutine calls, this involves multiple Memory Write cycles.
        *   Loads the PC with the starting address of the ISR (obtained from an interrupt vector table).
        *   Executes the ISR.
        *   **Restores the PC and Flags from the stack:** This involves multiple Memory Read cycles.
        *   Resumes the interrupted program.
    *   The timing of the stack operations during interrupt acknowledgment and return is critical for determining the interrupt latency (the time from interrupt request to the start of ISR execution) and ensuring the system responds within deadlines.

---
