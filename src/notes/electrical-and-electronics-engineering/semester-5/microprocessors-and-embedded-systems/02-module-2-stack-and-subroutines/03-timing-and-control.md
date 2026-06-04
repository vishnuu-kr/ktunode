---
title: "Timing and control"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 2: Stack and Subroutines"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36216"
status: "completed"
scrapedAt: "2026-05-23T16:22:42.393Z"
---
# MICROPROCESSORS AND EMBEDDED SYSTEMS

## Module 2: Stack and Subroutines

### Topic: Timing and Control

**Learning Outcomes:**

*   Understand the concept of timing and control in microprocessors.
*   Explain the role of control signals in microprocessor operation.
*   Analyze the timing diagrams for various microprocessor operations.
*   Understand how subroutines and stack operations affect timing.
*   Relate timing and control concepts to embedded system design.

**Course Outcomes Alignment:**

*   **CO2:** Understand the need for interrupts, Subroutines, timing diagram of 8085 microprocessor and interfacing. (Knowledge Level: K2)
    *   This topic directly addresses understanding the timing diagrams of the 8085 microprocessor and how control signals dictate its operations, which are fundamental to the broader context of interrupts and subroutines.
*   **CO3:** Understand and gain the basic idea about the embedded system and selection of processors. (Knowledge Level: K2)
    *   Timing and control are critical factors in selecting the appropriate processor for an embedded system, as they directly impact performance, power consumption, and real-time responsiveness.
*   **CO4:** Able to gain working level knowledge about a Arduino Uno based system architecture and Arduino IDE (Knowledge Level: K2)
    *   While the Arduino Uno is a more complex microcontroller, understanding fundamental timing and control concepts from basic microprocessors like the 8085 helps in appreciating the underlying principles that enable its operation and the timing of its tasks.
*   **CO5:** Write Programs using Embedded C and implement an application using Arduino UNO board. (Knowledge Level: K3)
    *   Efficient programming in Embedded C often requires an understanding of how the underlying hardware executes instructions and how timing is managed to achieve desired performance.

---

### 1. Introduction to Timing and Control

In any digital system, especially microprocessors and embedded systems, the **timing and control unit** is a crucial component responsible for generating and coordinating all the signals required for the processor to execute instructions. It dictates *when* and *how* different operations occur.

*   **Key Function:** To synchronize the operations of the microprocessor with external devices and internal components.
*   **Analogy:** Think of it as the conductor of an orchestra, ensuring each instrument (processor components, memory, peripherals) plays its part at the right time.

**Core Concepts:**

*   **Clock Signal:** The fundamental timing pulse that drives the entire system. Microprocessor operations are synchronized with the rising or falling edges of the clock signal.
    *   **Clock Frequency:** Determines the speed of operation (e.g., 1 MHz, 100 MHz).
    *   **Clock Period:** The duration of one clock cycle (1/Frequency).
*   **Instruction Cycle:** The sequence of operations required to execute a single instruction. It typically consists of several machine cycles.
*   **Machine Cycle:** A basic step in the execution of an instruction, such as fetching an instruction from memory, decoding it, or reading/writing data.
*   **T-State:** The smallest unit of time in a microprocessor operation, corresponding to one clock pulse. A machine cycle consists of a specific number of T-states.

**Textbook References:**

*   **Ram, B. (Fundamentals of Microprocessor and Microcontrollers):** Provides a detailed explanation of clock signals, instruction cycles, and machine cycles, often with examples of the 8085.
*   **Gaonkar, Ramesh (Microprocessor, Architecture, Programming and Applications):** Offers excellent coverage of timing diagrams and the role of the control unit in the 8085 architecture.
*   **Rafiquzzaman, M. (Microprocessor Theory and Application):** Discusses the timing aspects of instruction execution and the generation of control signals.

---

### 2. Control Signals and Their Role

The control unit generates and uses various control signals to manage data flow and operations within the microprocessor and between the microprocessor and external devices.

**Key Control Signals (8085 Example):**

*   **ALE (Address Latch Enable):**
    *   **Function:** Used to latch the lower-order address bits (AD0-AD7) from the multiplexed address/data bus into an external latch. This separation is necessary because the 8085 uses the same pins for both address and data.
    *   **Timing:** ALE is high during the first part of a machine cycle when the address is being output.
*   **RD (Read):**
    *   **Function:** Indicates that the microprocessor wants to read data from memory or an I/O device.
    *   **Timing:** Active low. Goes low when the processor is ready to read.
*   **WR (Write):**
    *   **Function:** Indicates that the microprocessor wants to write data to memory or an I/O device.
    *   **Timing:** Active low. Goes low when the processor is ready to write.
*   **IO/M (Input/Output or Memory):**
    *   **Function:** Differentiates between memory access (IO/M = 0) and I/O access (IO/M = 1).
    *   **Timing:** The processor asserts this signal along with the address.
*   **S0, S1 (Status Signals):**
    *   **Function:** Indicate the type of machine cycle being performed (e.g., fetch, read, write, interrupt acknowledge).
    *   **Timing:** Asserted during the machine cycle.
*   **READY:**
    *   **Function:** An input signal used by slower peripheral devices to signal the microprocessor that they are ready to complete a data transfer. If READY is low, the microprocessor waits in a HALT state (inserting wait states) until READY goes high.
    *   **Timing:** Crucial for interfacing with devices of varying speeds.
*   **HOLD and HLDA (Hold and Hold Acknowledge):**
    *   **Function:** Used for Bus Demultiplexing. When a peripheral (like DMA controller) needs direct control of the address/data bus, it asserts HOLD. The microprocessor, upon completing its current bus activity, relinquishes bus control by asserting HLDA.
    *   **Timing:** Enables bus sharing.

**Textbook References:**

*   **Gaonkar, Ramesh (Microprocessor, Architecture, Programming and Applications):** Extensive coverage of the 8085 control signals and their specific timing during different operations.
*   **Rafiquzzaman, M. (Microprocessor Theory and Application):** Explains the function and timing of control signals in the context of bus operations.

---

### 3. Timing Diagrams

Timing diagrams are graphical representations that illustrate the sequence and timing of control signals, address bus, and data bus during various microprocessor operations. They are essential for understanding how instructions are fetched, decoded, and executed, and how data is transferred.

**Key Operations and Their Timing Diagrams:**

*   **Opcode Fetch Cycle:**
    *   The processor outputs the address of the instruction.
    *   ALE is asserted to latch the address.
    *   The processor asserts IO/M = 0 and RD = 0.
    *   Memory sends the instruction byte to the data bus.
    *   The processor reads the instruction byte.
    *   The processor decodes the instruction.
    *   **Timing:** Typically takes multiple machine cycles (e.g., 4 T-states for fetching the opcode).

*   **Memory Read Cycle:**
    *   The processor outputs the memory address.
    *   ALE is asserted.
    *   The processor asserts IO/M = 0 and RD = 0.
    *   Memory sends the data byte to the data bus.
    *   The processor reads the data.
    *   **Timing:** Similar to opcode fetch, but the data read is used by the processor.

*   **Memory Write Cycle:**
    *   The processor outputs the memory address.
    *   ALE is asserted.
    *   The processor asserts IO/M = 0 and WR = 0.
    *   The processor places the data byte on the data bus.
    *   Memory latches the data.
    *   **Timing:** Involves outputting address, data, and control signals.

*   **I/O Read Cycle:**
    *   Similar to Memory Read, but IO/M = 1.

*   **I/O Write Cycle:**
    *   Similar to Memory Write, but IO/M = 1.

**Example: 8085 Opcode Fetch Timing (Simplified)**

| T1    | T2    | T3    | T4    | ... |
| :---- | :---- | :---- | :---- | :-- |
| **Address Bus** | Addr (A15-A8) | Addr (A7-A0) | Addr (A7-A0) | Addr (A7-A0) | ... |
| **Data Bus** | High-Z | Data (D7-D0) | Data (D7-D0) | High-Z | ... |
| **ALE** | HIGH  | LOW   | LOW   | LOW   | ... |
| **IO/M** | LOW   | LOW   | LOW   | LOW   | ... |
| **RD**  | HIGH  | LOW   | LOW   | HIGH  | ... |
| **S1, S0** | 1, 0  | 1, 0  | 1, 0  | 1, 0  | ... |

*   **T1:** Address (A15-A8) on AD15-AD8, Address (A7-A0) on AD7-AD0. ALE is HIGH.
*   **T2:** Address (A7-A0) is latched by external devices using ALE. Address bus now carries A15-A8 and A7-A0. Data bus is High-Z. RD and IO/M are low. S1=1, S0=0 (Opcode Fetch).
*   **T3:** Memory outputs the opcode on the data bus. Processor reads the opcode. RD is low.
*   **T4:** Processor internal operation (decoding). Data bus is High-Z.

**Textbook References:**

*   **Gaonkar, Ramesh (Microprocessor, Architecture, Programming and Applications):** The primary source for detailed 8085 timing diagrams of various operations.
*   **Ram, B. (Fundamentals of Microprocessor and Microcontrollers):** Provides clear illustrations and explanations of timing diagrams.

---

### 4. Timing in Stack and Subroutine Operations

Subroutines and stack operations, while user-defined for program flow, have specific timing implications for the microprocessor.

*   **Subroutine Call (CALL instruction):**
    *   The processor needs to save the **Program Counter (PC)** value onto the stack before jumping to the subroutine.
    *   This involves:
        *   **Pushing** the higher byte of PC onto the stack (memory write operation).
        *   **Pushing** the lower byte of PC onto the stack (memory write operation).
        *   Then, fetching the instruction at the subroutine's starting address.
    *   **Timing Impact:** Adds extra machine cycles for the stack push operations, increasing the overall execution time of the CALL.

*   **Subroutine Return (RET instruction):**
    *   The processor needs to retrieve the saved PC value from the stack.
    *   This involves:
        *   **Popping** the lower byte of PC from the stack (memory read operation).
        *   **Popping** the higher byte of PC from the stack (memory read operation).
        *   The PC is now restored, and the processor continues from where it left off.
    *   **Timing Impact:** Adds extra machine cycles for the stack pop operations, increasing the execution time of the RET.

*   **Stack Operations (PUSH/POP instructions):**
    *   Similar to subroutine calls/returns, PUSH and POP instructions directly manipulate the stack pointer and involve memory read/write operations.
    *   Each PUSH or POP typically takes two memory cycles (one for each byte of a register pair).
    *   **Timing Impact:** Directly adds to the execution time based on the number of PUSH/POP operations.

**Example: CALL Instruction Timing**

A CALL instruction might typically involve:
1.  Fetch CALL opcode (e.g., 4 T-states).
2.  Decrement SP, Push PC (high byte) (e.g., 6 T-states - 3 per memory write).
3.  Decrement SP, Push PC (low byte) (e.g., 6 T-states - 3 per memory write).
4.  Fetch the first instruction of the subroutine (e.g., 4 T-states).

Total overhead for a CALL instruction can be significant compared to a simple jump.

**Textbook References:**

*   **Gaonkar, Ramesh (Microprocessor, Architecture, Programming and Applications):** Often dedicates sections to how subroutine calls and returns are implemented and their timing implications.
*   **Ram, B. (Fundamentals of Microprocessor and Microcontrollers):** Explains the mechanism of pushing and popping data to/from the stack.

---

### 5. Timing and Control in Embedded Systems

The principles of timing and control are fundamental to the design and operation of embedded systems. Embedded systems often have real-time constraints, meaning operations must be completed within specific time limits.

*   **Real-Time Constraints:**
    *   Many embedded applications (e.g., industrial control, automotive systems, medical devices) require deterministic timing. If a task is late, the system can fail.
    *   Understanding the execution time of instructions, interrupt service routines, and data transfers is crucial for meeting these deadlines.

*   **Processor Selection:**
    *   The clock speed, instruction set complexity, and bus architecture (which dictate timing) are key factors when selecting a processor for an embedded system.
    *   For high-speed or time-critical applications, faster processors with efficient instruction execution (e.g., RISC architectures) are preferred.

*   **Peripheral Interfacing:**
    *   When interfacing with peripherals (sensors, actuators, displays), timing becomes critical.
    *   The READY signal is vital for synchronizing the processor with slower peripherals, preventing data loss.
    *   DMA (Direct Memory Access) controllers can offload data transfer tasks, improving system throughput by minimizing processor intervention during critical timing periods.

*   **Interrupts and Timing:**
    *   Interrupts are used to respond to external events. The time taken from an interrupt occurring to the start of its service routine (Interrupt Latency) is a critical timing parameter.
    *   The complexity of the interrupt service routine (ISR) and the number of context switches (saving/restoring registers) directly impact the overall system timing.

*   **Arduino Uno and Timing:**
    *   While Arduino abstracts many low-level details, the microcontroller (ATmega328P) on the Arduino Uno operates based on its own clock and instruction timing.
    *   When writing Arduino sketches (in C/C++), functions like `delay()`, `millis()`, and interrupt service routines rely heavily on the microcontroller's internal timing mechanisms.
    *   Understanding the execution time of your code is important for creating responsive and efficient Arduino projects. For instance, a simple loop might take microseconds, while a complex computation can take milliseconds.

**Textbook References:**

*   **Arduino Cookbook by Michael Margolis:** While focused on Arduino, it implicitly relies on understanding timing for projects, especially those involving real-time interaction.
*   **Arduino-Based Embedded Systems by Rajesh Singh et al.:** Discusses embedded system design principles using Arduino, which inherently involves timing considerations.
*   **Embedded C by Michael J. Pont:** Focuses on writing efficient C code for embedded systems, where understanding instruction timing can lead to better-optimized code.

---

### 6. Important Points to Remember

*   **Clock is King:** All microprocessor operations are synchronized with the clock signal.
*   **Timing Diagrams are Essential:** They visually represent the sequence and duration of bus and control signal activities.
*   **Control Signals Dictate Operations:** ALE, RD, WR, IO/M, etc., are crucial for coordinating actions.
*   **T-States, Machine Cycles, Instruction Cycles:** Understand the hierarchy of operations and their temporal breakdown.
*   **Subroutines and Stack Add Overhead:** Pushing and popping data to/from the stack takes additional time.
*   **Real-Time Needs:** Embedded systems often have strict timing requirements that influence processor selection and design.
*   **READY Signal:** Vital for interfacing with slower devices to prevent data loss.
*   **Interrupt Latency:** The time taken to respond to an interrupt is a critical metric in many embedded systems.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary function of the ALE signal in the 8085 microprocessor?
**(CO2)**

**Answer:**
The ALE (Address Latch Enable) signal is used to demultiplex the address/data bus. When ALE is high, the lower 8 bits of the address (AD0-AD7) are valid on the AD0-AD7 pins. An external latch uses this ALE signal to capture these address bits, separating them from the data bus so that the full 16-bit address can be sent to memory or I/O devices.

---

**Question 2:**
Explain why subroutines and stack operations increase the overall execution time of a program.
**(CO2)**

**Answer:**
Subroutine calls and returns, as well as explicit PUSH/POP operations, involve saving and restoring the program counter (PC) and/or register data onto the stack. These operations require additional memory read/write cycles, each consuming a certain number of clock cycles (T-states). Since these extra cycles are incurred for each stack operation, they add to the total execution time of the program compared to a program that doesn't use subroutines or extensive stack manipulation.

---

**Question 3:**
Describe the sequence of events and key control signals involved in an 8085 memory read operation.
**(CO2)**

**Answer:**
1.  **Address Output:** The processor outputs the memory address (16-bit) on the address bus (A8-A15 on AD8-AD15, A0-A7 on AD0-AD7).
2.  **ALE Assertion:** The ALE signal is asserted high.
3.  **Address Latching:** External latches capture the lower 8 bits of the address (AD0-AD7) using the ALE signal.
4.  **Control Signal Assertion:** The processor asserts IO/M = 0 (for memory access) and RD = 0 (for read operation). Status signals S1 and S0 also indicate the read operation.
5.  **Data Availability:** The addressed memory location outputs its data onto the data bus (AD0-AD7).
6.  **Data Latching:** The processor reads the data from the data bus during the appropriate T-state.
7.  **Control Signal De-assertion:** RD signal goes high, and the processor proceeds to the next operation.

---

**Question 4:**
How does the READY signal in a microprocessor system assist in interfacing with peripherals of different speeds?
**(CO2, CO3)**

**Answer:**
The READY signal is an input to the microprocessor that allows slower peripheral devices to synchronize their data transfers. When a peripheral is not yet ready to complete a data transfer (e.g., it needs more time to fetch data from a slow memory or prepare data to be written), it can de-assert the READY signal (pull it low). The microprocessor, upon detecting a low READY signal, will enter a HALT state, inserting "wait states" (idle T-states) until the READY signal is asserted high again by the peripheral. This ensures that the processor waits for the peripheral, preventing data corruption or loss and allowing seamless interfacing between devices of varying speeds.

---

**Question 5:**
Consider an Arduino project that needs to blink an LED every 500 milliseconds. Briefly explain how the timing and control aspects are managed by the Arduino Uno, and what functions you might use.
**(CO4, CO5)**

**Answer:**
The Arduino Uno uses an ATmega328P microcontroller that operates based on an internal clock (usually 16 MHz).
1.  **Timing Mechanism:** The microcontroller has internal timers that can count clock cycles. These timers are used to measure time intervals.
2.  **Functions:** To achieve a 500ms delay, you would typically use:
    *   `delay(500)`: This function halts the execution of the program for the specified number of milliseconds. It directly leverages the microcontroller's internal timing.
    *   `millis()`: For non-blocking timing (allowing other code to run simultaneously), you would use `millis()`. You'd record the time when the LED last changed state and then check `if (currentTime - previousTime >= 500)`. This approach is more efficient for complex projects.
3.  **Control:** The microcontroller's control unit schedules these operations based on its clock and the program instructions, ensuring the LED state is toggled at approximately the desired intervals. The code you write in the Arduino IDE is compiled into machine instructions that the microcontroller executes, adhering to its timing.

---

This comprehensive set of notes covers the timing and control aspects crucial for understanding microprocessors and embedded systems, aligning with the provided learning and course outcomes.
