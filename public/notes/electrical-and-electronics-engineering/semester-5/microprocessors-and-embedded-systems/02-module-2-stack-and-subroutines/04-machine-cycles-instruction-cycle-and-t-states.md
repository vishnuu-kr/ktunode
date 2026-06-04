---
title: "Machine cycles, instruction cycle and T states"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 2: Stack and Subroutines"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36217"
status: "completed"
scrapedAt: "2026-05-23T16:22:43.147Z"
---
# Module 2: Stack and Subroutines - Machine Cycles, Instruction Cycle, and T-States

This module delves into the fundamental timing mechanisms of microprocessors, specifically focusing on how they execute instructions. Understanding machine cycles, instruction cycles, and T-states is crucial for comprehending the internal operation of microprocessors like the 8085, as well as for real-time embedded system design where timing is critical.

## 1. Introduction to Microprocessor Timing

Microprocessors perform operations by fetching instructions from memory, decoding them, and then executing them. This entire process is orchestrated by a clock signal. The clock signal dictates the pace at which the microprocessor operates.

*   **Clock Signal:** A periodic electrical pulse that synchronizes the operations within a microprocessor. The frequency of the clock signal determines the speed of the microprocessor.
*   **Clock Period (T):** The duration of one complete cycle of the clock signal. It is the inverse of the clock frequency (T = 1/Frequency).

## 2. T-States (Timing States)

The fundamental unit of time in a microprocessor's operation is the **T-state**. Each T-state represents one oscillation of the clock signal. All operations within the microprocessor are measured in terms of the number of T-states they take.

*   **Definition:** A T-state is the smallest indivisible unit of time within a microprocessor, corresponding to one clock pulse.
*   **Significance:** Microprocessor operations are broken down into sequences of T-states. The number of T-states required for an operation determines its execution time.

**Example:** If a microprocessor has a clock frequency of 2 MHz, its clock period is:
T = 1 / (2 x 10^6 Hz) = 0.5 x 10^-6 seconds = 0.5 microseconds (µs).
So, one T-state would last for 0.5 µs.

**(Reference: Ram, B., *Fundamentals of Microprocessor and Microcontrollers*, Chapter on 8085 Architecture)**

## 3. Machine Cycles

A **machine cycle** is a fundamental operation performed by the microprocessor to interact with external devices (like memory or I/O ports) or to perform internal operations. These cycles are composed of a specific number of T-states.

*   **Definition:** A machine cycle is a sequence of operations required to perform a specific internal or external action, such as fetching an instruction, reading data from memory, writing data to memory, or handling an I/O operation.
*   **Duration:** The duration of a machine cycle varies depending on the type of operation being performed. It is measured in T-states.
*   **Common Machine Cycles in 8085:**
    *   **Opcode Fetch Cycle:** To fetch the first byte of an instruction (the opcode) from memory. This typically takes 4 or 6 T-states.
    *   **Memory Read Cycle:** To read a byte of data from memory. This typically takes 3 T-states.
    *   **Memory Write Cycle:** To write a byte of data to memory. This typically takes 3 T-states.
    *   **I/O Read Cycle:** To read a byte of data from an I/O port. This typically takes 3 T-states.
    *   **I/O Write Cycle:** To write a byte of data to an I/O port. This typically takes 3 T-states.
    *   **Interrupt Acknowledge Cycle:** To acknowledge an interrupt request. This typically takes 2 or 3 T-states.
    *   **Bus Idle Cycle:** A cycle where the processor is idle and doesn't perform any bus activity.
    *   **Bus Hold Acknowledge Cycle:** When the processor is busied by an external device.

**(Reference: Gaonkar, R., *Microprocessor, Architecture, Programming and Applications*, Chapter on 8085 Instruction Timing)**

**Example of Machine Cycle Steps (Opcode Fetch):**
1.  **Address Bus:** The address of the memory location containing the opcode is placed on the address bus.
2.  **Control Signals:** The processor asserts control signals like `ALE` (Address Latch Enable) and `RD` (Read) or `WR` (Write).
3.  **Data Bus:** The instruction byte is read from or written to the data bus.
4.  **Internal Operations:** The microprocessor decodes and executes the instruction.

## 4. Instruction Cycle

An **instruction cycle** is the total time required by the microprocessor to execute a complete instruction. It is composed of one or more machine cycles.

*   **Definition:** An instruction cycle is the sequence of operations the processor must perform to execute a single machine instruction. It typically involves fetching the instruction from memory, decoding it, and then executing it.
*   **Components:**
    *   **Fetch Cycle:** Retrieving the instruction from memory.
    *   **Decode Cycle:** Interpreting the instruction to determine the operation to be performed.
    *   **Execute Cycle:** Performing the operation specified by the instruction. This may involve data transfers, arithmetic operations, etc.
    *   **Memory/IO Read/Write Cycles (if necessary):** If the instruction requires reading data from or writing data to memory or I/O ports, additional machine cycles are involved.

*   **Duration:** The duration of an instruction cycle varies depending on the complexity of the instruction and the number of machine cycles it requires. It is the sum of the T-states of all the machine cycles involved.

**Example: Executing the `MOV A, M` instruction in 8085**

This instruction reads a byte from memory (pointed to by HL pair) and moves it to the Accumulator.

1.  **Opcode Fetch Cycle:** The processor fetches the opcode for `MOV A, M`. This takes 4 T-states.
2.  **Memory Read Cycle:** The processor reads the operand (the byte to be moved) from the memory location specified by the HL register pair. This takes 3 T-states.
3.  **Execution:** The data is moved from the memory buffer to the Accumulator. This internal operation is often part of the memory read cycle or might take an additional T-state. For simplicity, we can consider it to be completed within the Memory Read cycle.

Therefore, the total instruction cycle for `MOV A, M` is 4 T-states (fetch) + 3 T-states (read) = **7 T-states**.

**(Reference: Rafiquzzaman, M., *Microprocessor Theory and Application*, Chapter on Instruction Timing)**

**Important Point to Remember:** The number of T-states for an instruction is not fixed for all instructions. It depends on the instruction's opcode, addressing mode, and whether it involves memory or I/O operations.

## 5. Instruction Cycle Stages and Timing Diagrams

Microprocessors, like the 8085, communicate with external devices through buses (Address Bus, Data Bus, Control Bus). The timing of these communications is depicted in **timing diagrams**.

*   **Timing Diagram:** A graphical representation of the signals on the address bus, data bus, and control bus over a period of time, showing how they change during different machine cycles.
*   **Key Signals in 8085 Timing:**
    *   **ALE (Address Latch Enable):** A pulse that indicates that the address lines (AD0-AD7) are carrying a valid address. It is used to latch the lower byte of the address.
    *   **RD (Read):** Active low. Indicates that the processor wants to read data from memory or an I/O device.
    *   **WR (Write):** Active low. Indicates that the processor wants to write data to memory or an I/O device.
    *   **IO/M (Input/Output or Memory):** Differentiates between memory and I/O operations. High for I/O, Low for memory.
    *   **AD0-AD7 (Address/Data Bus):** Multiplexed lines that carry both the lower byte of the address and the data.

**Example Timing Diagram Snippet (Opcode Fetch in 8085):**

| T-States | AD0-AD7        | A8-A15 | IO/M | RD | WR | ALE | Status Signals (S0, S1, S2) |
| :------- | :------------- | :----- | :--- | :-- | :-- | :-- | :-------------------------- |
| T1       | Lower Address  | High   | L    | H   | H   | H   | 1,0,1 (Opcode Fetch)        |
| T2       | Data (Opcode)  | High   | L    | H   | H   | L   | 1,0,1                       |
| T3       | Data (Opcode)  | High   | L    | L   | H   | L   | 1,0,1                       |
| T4       | High Impedance | High   | L    | H   | H   | L   | 1,0,1                       |

*   **T1:** Processor places the address on AD0-AD7 and A8-A15. ALE goes high to latch the lower address. IO/M is low (memory access). RD and WR are high (no read/write). Status signals indicate Opcode Fetch.
*   **T2:** AD0-AD7 lines are now used for data transfer (or carry the second part of the address for a 16-bit address). ALE goes low.
*   **T3:** RD goes low, signaling that the processor is ready to read data from the bus. The memory device places the opcode on the data bus.
*   **T4:** The processor reads the opcode from the data bus. RD returns to high, and the bus is released.

**(Reference: Gaonkar, R., *Microprocessor, Architecture, Programming and Applications*, Chapter on 8085 Instruction Timing and Examples)**

## 6. Instruction Cycle and T-States for Different Operations (8085 Specific Examples)

Let's look at the breakdown for a few common operations to reinforce the concepts.

*   **Instruction:** `MVI A, data` (Move Immediate data to Accumulator)
    *   **Opcode Fetch:** 4 T-states
    *   **Memory Read (for immediate data):** 3 T-states
    *   **Total Instruction Cycle:** 4 + 3 = **7 T-states**

*   **Instruction:** `LDA address` (Load Accumulator Direct)
    *   **Opcode Fetch:** 4 T-states
    *   **Memory Read (for lower byte of address):** 3 T-states
    *   **Memory Read (for higher byte of address):** 3 T-states
    *   **Memory Read (for data):** 3 T-states
    *   **Total Instruction Cycle:** 4 + 3 + 3 + 3 = **13 T-states**

*   **Instruction:** `STA address` (Store Accumulator Direct)
    *   **Opcode Fetch:** 4 T-states
    *   **Memory Read (for lower byte of address):** 3 T-states
    *   **Memory Read (for higher byte of address):** 3 T-states
    *   **Memory Write (for data):** 3 T-states
    *   **Total Instruction Cycle:** 4 + 3 + 3 + 3 = **13 T-states**

*   **Instruction:** `ADD M` (Add content of memory pointed by HL to Accumulator)
    *   **Opcode Fetch:** 4 T-states
    *   **Memory Read (for operand from memory):** 3 T-states
    *   **Execution:** (often internal and combined with Memory Read)
    *   **Total Instruction Cycle:** 4 + 3 = **7 T-states**

**(Reference: Ram, B., *Fundamentals of Microprocessor and Microcontrollers*, Chapter on 8085 Instruction Set and Timing)**

## 7. Machine Cycles and T-States in the Context of Subroutines (CO2)

Subroutines are blocks of code that can be called from different parts of a program. The processor needs to manage the execution flow and return addresses when dealing with subroutines.

*   **CALL Instruction:**
    *   **Opcode Fetch:** Fetches the opcode of the `CALL` instruction.
    *   **Memory Read:** Fetches the lower byte of the 16-bit address of the subroutine.
    *   **Memory Read:** Fetches the higher byte of the 16-bit address of the subroutine.
    *   **Memory Write:** Pushes the current Program Counter (PC) value (return address) onto the stack (2 Memory Write cycles if byte-by-byte push is considered, or a dedicated stack write operation). In 8085, it's typically two memory write operations to push the 16-bit return address.
    *   **Execution:** Loads the new address of the subroutine into the PC.

*   **RET Instruction:**
    *   **Opcode Fetch:** Fetches the opcode of the `RET` instruction.
    *   **Memory Read:** Pops the lower byte of the return address from the stack.
    *   **Memory Read:** Pops the higher byte of the return address from the stack.
    *   **Execution:** Loads the return address back into the PC.

The efficiency of subroutine calls and returns is directly tied to the number of machine cycles and T-states involved in pushing and popping the return address from the stack.

**(Reference: Gaonkar, R., *Microprocessor, Architecture, Programming and Applications*, Chapter on Stack and Subroutines)**

## 8. Relevance to Embedded Systems (CO3)

In embedded systems, precise timing is often critical. Understanding machine cycles and T-states is essential for:

*   **Real-time Performance:** Ensuring that critical tasks are completed within their deadlines. For instance, a sensor reading or actuator control might need to happen within a specific time window.
*   **Interrupt Service Routines (ISRs):** The overhead of entering and exiting an ISR, which often involves saving/restoring registers (using stack operations), is directly related to instruction cycle timings. A faster ISR means less impact on the main program's execution.
*   **Interfacing with Peripherals:** Some peripherals require data to be sent or received within specific time intervals. The processor's ability to meet these timing requirements depends on its instruction execution speed.
*   **Power Consumption:** While not directly the focus here, understanding the timing can indirectly help in optimizing code for lower power consumption by minimizing unnecessary operations.
*   **Microcontroller Clock Speed:** The clock speed of microcontrollers (like those used in Arduino) directly dictates the duration of T-states and thus the execution time of instructions. Selecting an appropriate clock speed for an embedded application is crucial.

**(Reference: Arduino Cookbook by Margolis, M., various sections on timing and performance)**
**(Reference: Singh, R., Gehlot, A., & Singh, B., *Arduino-Based Embedded Systems*, Chapter on Microcontroller Timings)**

## 9. Arduino and Timing (CO4, CO5)

While Arduino abstracts away much of the low-level timing details, the underlying AVR microcontrollers (e.g., ATmega328P on Arduino Uno) operate based on these principles.

*   **Clock Speed:** Arduino Uno typically runs at 16 MHz. This means each T-state (for a single-clock cycle instruction) is 1/16,000,000 seconds = 62.5 nanoseconds.
*   **`delay()` Function:** The `delay()` function in Arduino is a software-based delay that uses loops to consume clock cycles, effectively pausing the program for a specified number of milliseconds. The precision of `delay()` is limited by the instruction cycle times of the instructions used within the delay loop.
*   **`millis()` and `micros()`:** For non-blocking timing, `millis()` and `micros()` are preferred. They use hardware timers within the microcontroller to track elapsed time, which is more efficient and accurate than software delays. The timers themselves are incremented by the microcontroller's clock, reinforcing the importance of understanding clock cycles.
*   **Performance of Arduino Functions:** Even high-level functions in the Arduino libraries have underlying C code that is executed by the microcontroller, with each instruction taking a certain number of clock cycles. For computationally intensive tasks or those requiring precise timing, understanding these low-level details can be beneficial.

**(Reference: Baichtal, J., *Arduino for beginners: Essential Skills Every Maker Needs*, Sections on timing)**
**(Reference: Monk, S., *Programming Arduino Next Steps: Going Further with Sketches*, Sections on timers and interrupts)**

## 10. RISC Architecture and Timing (CO6)

While the 8085 is a CISC (Complex Instruction Set Computing) processor, modern embedded systems often use RISC (Reduced Instruction Set Computing) architectures like ARM.

*   **RISC Philosophy:** RISC processors aim for simpler, fixed-length instructions that can be executed in a single clock cycle (or very few clock cycles). This leads to a more predictable and often faster execution pipeline.
*   **Pipelining:** RISC architectures heavily utilize pipelining, where different stages of instruction execution (fetch, decode, execute, memory access, write-back) overlap. This allows the processor to complete instructions at a much higher rate, often one instruction per clock cycle on average.
*   **Implications for Embedded Systems:**
    *   **Predictable Performance:** RISC's simpler instruction set and pipelining make performance more predictable, which is valuable for real-time applications.
    *   **Efficiency:** The focus on single-cycle instructions can lead to more energy-efficient designs.
    *   **ARM Cortex-M Series:** Commonly found in Arduino Due and many other microcontrollers, these processors are designed for embedded systems and benefit from RISC principles. Understanding that their instructions generally take fewer clock cycles than complex CISC instructions is key.

**(Reference: Introduction to ARM Architecture (General Knowledge for CO6))**

## Important Points to Remember:

*   **T-State:** The smallest unit of microprocessor time, one clock cycle.
*   **Machine Cycle:** A basic operation (fetch, read, write) made up of T-states.
*   **Instruction Cycle:** The total time to execute an instruction, composed of one or more machine cycles.
*   **Clock Frequency:** Determines the speed of operations and the duration of T-states.
*   **Timing Diagrams:** Essential for visualizing bus activity and signal timings during machine cycles.
*   **Subroutines:** Require stack operations (push/pop) which add to the instruction cycle time.
*   **Embedded Systems:** Precise timing is often critical for real-time operation and interfacing.
*   **RISC vs. CISC:** RISC architectures generally have simpler instructions executed in fewer clock cycles, facilitating pipelining and predictable performance.

---

## Practice Questions and Answers

**Question 1:** Define T-state and Machine Cycle. How many T-states are typically required for an Opcode Fetch cycle in the 8085 microprocessor?

**Answer:**
*   **T-state:** The smallest unit of time in a microprocessor's operation, corresponding to one clock pulse.
*   **Machine Cycle:** A basic operation performed by the microprocessor to interact with external devices or perform internal actions, composed of a specific number of T-states.
*   In the 8085, an Opcode Fetch cycle typically requires **4 T-states**. Some sources might mention 6 T-states for specific scenarios involving interrupt handling during fetch, but 4 is the standard for a regular opcode fetch.

**Question 2:** An 8085 microprocessor is operating at a clock frequency of 3.2 MHz. Calculate the duration of one T-state.

**Answer:**
Clock Frequency = 3.2 MHz = 3.2 x 10^6 Hz
Clock Period (T) = 1 / Clock Frequency
T = 1 / (3.2 x 10^6) seconds
T = 0.3125 x 10^-6 seconds
T = 0.3125 microseconds (µs)

**Question 3:** Explain the Instruction Cycle for the `LDA address` instruction in the 8085 microprocessor, listing the machine cycles and their respective T-states.

**Answer:**
The `LDA address` (Load Accumulator Direct) instruction requires fetching the opcode and then reading the 16-bit address from memory, followed by reading the data from that address.
*   **Opcode Fetch Cycle:** 4 T-states
*   **Memory Read Cycle (for low byte of address):** 3 T-states
*   **Memory Read Cycle (for high byte of address):** 3 T-states
*   **Memory Read Cycle (for data):** 3 T-states
*   **Total Instruction Cycle:** 4 + 3 + 3 + 3 = **13 T-states**

**Question 4:** How does the concept of instruction cycles and T-states relate to writing efficient real-time embedded software?

**Answer:**
In real-time embedded systems, tasks must be completed within strict deadlines. Understanding instruction cycles and T-states allows developers to:
*   **Predict execution times:** Estimate how long specific code segments will take to execute, which is crucial for meeting timing requirements.
*   **Optimize critical routines:** Identify and optimize time-consuming instructions or sequences to ensure timely responses, especially in interrupt service routines or control loops.
*   **Manage resource usage:** Efficient code that executes faster can free up the processor for other tasks or reduce overall power consumption.
*   **Interface with hardware:** Ensure that data is sent to or received from peripherals within their specified timing windows.

**Question 5:** What is the main difference in instruction execution timing between a typical CISC processor (like 8085) and a RISC processor (like ARM Cortex-M) concerning their instruction sets?

**Answer:**
The main difference lies in the complexity and length of instructions, and consequently, the number of clock cycles required for execution:
*   **CISC (e.g., 8085):** Has complex instructions that can perform multiple operations (e.g., load from memory, perform an arithmetic operation, and store back to memory) and often take multiple clock cycles or machine cycles to execute. Instructions can be of variable length.
*   **RISC (e.g., ARM):** Emphasizes simpler, fixed-length instructions that are designed to be executed in a single clock cycle (or a small, fixed number of cycles). Complex operations are achieved by sequencing multiple simple instructions. This architecture supports efficient pipelining.
