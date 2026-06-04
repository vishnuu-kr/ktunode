---
title: "transfer rate and latency"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb0c"
status: "completed"
scrapedAt: "2026-05-23T17:53:43.906Z"
---
# ARM Architecture and Programming: Module 4 - IO Programming in Assembly: Interrupts and Exceptions

## Topic: Transfer Rate and Latency

This module delves into how Input/Output (IO) operations are handled in ARM architectures, with a specific focus on the critical concepts of **transfer rate** and **latency**, particularly in the context of interrupts and exceptions. Understanding these metrics is crucial for designing efficient and responsive embedded systems.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Define and explain the concepts of transfer rate and latency in the context of IO operations.**
*   **Differentiate between programmed I/O, interrupt-driven I/O, and Direct Memory Access (DMA) in terms of their impact on transfer rate and latency.**
*   **Analyze how interrupt handling mechanisms affect overall system performance and latency.**
*   **Identify factors that contribute to I/O latency and methods to minimize it.**
*   **Understand the trade-offs between different I/O techniques regarding transfer rate and latency.**

---

### Key Concepts and Definitions:

#### 1. Transfer Rate (Throughput)

*   **Definition:** The rate at which data can be moved between a peripheral device and the processor or memory. It's typically measured in bits per second (bps), bytes per second (B/s), kilobytes per second (KB/s), or megabytes per second (MB/s).
*   **What it represents:** How much data can be processed or moved over a given period. Higher transfer rates mean faster data movement.
*   **Factors influencing Transfer Rate:**
    *   **Bus Speed:** The clock frequency of the system bus connecting the processor, memory, and peripherals.
    *   **Peripheral Capabilities:** The inherent speed of the IO device itself (e.g., speed of an ADC, DAC, UART baud rate, SPI clock speed).
    *   **Data Bus Width:** The number of bits that can be transferred simultaneously.
    *   **Protocol Overhead:** The extra data required for communication protocols (e.g., start bits, stop bits, parity in UART).
    *   **Processor Overhead:** The time the processor spends managing the data transfer (especially in programmed I/O).
    *   **Memory Bandwidth:** The rate at which data can be read from or written to memory.

#### 2. Latency

*   **Definition:** The time delay between the initiation of an I/O operation (e.g., a request to read data from a sensor) and the completion of that operation (e.g., the data being available in a processor register).
*   **What it represents:** How quickly a system can respond to an event or start processing a request. Lower latency means faster response times.
*   **Components of I/O Latency:**
    *   **Peripheral Latency:** The internal delay within the peripheral device itself to generate or process data.
    *   **Bus Latency:** The time taken for a data transaction to traverse the system bus.
    *   **Interrupt Latency:** The time from when an interrupt signal is asserted to when the first instruction of the Interrupt Service Routine (ISR) is executed. This is a critical component.
    *   **Processor Execution Time:** The time the processor takes to fetch and execute instructions related to the I/O operation.
    *   **Software Overhead:** The time spent in device drivers, operating system kernels, or application code managing the I/O.

---

### I/O Techniques and Their Impact on Transfer Rate and Latency:

This section builds upon the understanding of programmed I/O, interrupt-driven I/O, and DMA, highlighting how each affects transfer rate and latency.

#### 1. Programmed I/O (Polling)

*   **Mechanism:** The processor repeatedly checks the status of a peripheral device to see if it's ready for an operation.
*   **Transfer Rate:** Generally **low**. The processor is occupied with polling, which is inefficient for high-speed data transfer. The rate is limited by how fast the processor can poll and the peripheral's ready status.
*   **Latency:** Can be **high and variable**. The processor only checks at discrete intervals. If a data request happens between polls, the response is delayed until the next poll. The latency is directly proportional to the polling interval.
    *   **Example:** A simple loop to read a byte from a UART status register:
        ```assembly
        LDR R0, =UART_SR  ; Load address of UART Status Register
        LOOP:
            LDR R1, [R0]      ; Read status register
            TST R1, #DATA_READY ; Check if data is ready (e.g., bit 0)
            BEQ LOOP          ; If not ready, loop again
        ; Data is ready, proceed to read data register
        ```
    *   **Problem:** The processor wastes cycles polling, and there's an unpredictable delay before it detects that data is ready.

#### 2. Interrupt-Driven I/O

*   **Mechanism:** The peripheral device signals the processor via an interrupt when it's ready to transfer data or has completed an operation. The processor then suspends its current task, executes an Interrupt Service Routine (ISR) to handle the I/O, and resumes its task.
*   **Transfer Rate:** Can be **much higher than programmed I/O**, especially for bursts of data. The processor is not constantly polling. The rate is limited by the speed of the interrupt handling and the peripheral's transfer capabilities.
*   **Latency:** Significantly **lower and more deterministic than programmed I/O** for the initial detection of data readiness. However, the *total* latency includes:
    *   **Interrupt Latency:** The time from interrupt assertion to ISR start. This is a critical factor.
    *   **ISR Execution Time:** The time taken by the ISR to process the data.
    *   **Context Switching Overhead:** Saving and restoring processor state.
    *   **Example:** A UART receiving a byte triggers an interrupt. The ISR reads the byte from the data register.
    *   **Key Point:** While the *detection* latency is low, the *overall* latency of a transfer might still be influenced by the ISR's efficiency and the time spent returning to the interrupted task.

#### 3. Direct Memory Access (DMA)

*   **Mechanism:** A dedicated hardware controller manages data transfers between peripherals and memory without direct processor intervention. The processor initiates the DMA transfer and is then free to perform other tasks.
*   **Transfer Rate:** Typically the **highest**. DMA controllers can often perform transfers in parallel with processor execution and can utilize the full bus bandwidth.
*   **Latency:**
    *   **Initiation Latency:** The time taken by the processor to set up the DMA transfer (configure source, destination, count, etc.). This is usually low.
    *   **Transfer Latency:** The time the DMA controller takes to move the data. This is very efficient and can be considered near-zero in terms of processor involvement.
    *   **Overall System Latency:** While the DMA transfer itself is fast, it can introduce contention on the bus, potentially increasing latency for other processor-initiated bus transactions if not managed carefully.
    *   **Example:** Transferring a block of audio samples from an ADC to memory. The processor configures the DMA, and the DMA controller handles the continuous transfer while the processor runs other application logic.
    *   **Benefit:** Frees up the processor for other tasks, improving overall system throughput.

---

### Understanding and Minimizing Interrupt Latency:

Interrupt latency is a critical component of I/O latency, especially in interrupt-driven I/O.

#### Components of Interrupt Latency (from the perspective of ARM Cortex-M):

1.  **Interrupt Source to NVIC (Nested Vectored Interrupt Controller):** The time it takes for the peripheral to assert the interrupt line and for the signal to reach the NVIC. This is typically very fast.
2.  **NVIC to Core:** The NVIC determines the priority of the interrupt and whether it should be serviced. If an interrupt of higher priority is already being serviced, the current interrupt waits. The NVIC then signals the core to enter exception mode.
3.  **Core Entry to ISR Execution:** This is the most significant part of the interrupt latency. It includes:
    *   **Pipeline Flushing:** The processor may need to discard instructions that were already fetched but are no longer relevant due to the exception.
    *   **Register Saving:** The processor automatically pushes several core registers (e.g., R0-R3, R12, LR, PC, xPSR) onto the stack. This takes a fixed number of clock cycles on Cortex-M.
    *   **Vector Fetch:** The processor reads the ISR address from the exception vector table.
    *   **ISR Execution Start:** The first instruction of the ISR begins execution.

#### Factors Affecting Interrupt Latency:

*   **Interrupt Priority:** Lower priority interrupts will have higher latency if higher priority interrupts are active. The Cortex-M family uses a priority-based nested interrupt system.
*   **Current Processor State:** If the processor is in a critical section (e.g., executing a disable-interrupt instruction or handling a higher-priority interrupt), the current interrupt will be delayed.
*   **Instruction Pipelining:** While pipelining speeds up execution, it can add to latency during exceptions as the pipeline needs to be refilled.
*   **Memory Access Times:** If the vector table or the first few ISR instructions are in slower memory, latency increases.
*   **Bus Arbitration:** If the bus is busy with other transactions (e.g., DMA), the fetch of the ISR address or the first instructions can be delayed.
*   **Compiler Optimization:** How efficiently the compiler generates code for the ISR.
*   **ISR Complexity:** Longer and more complex ISRs mean the processor is occupied for longer, potentially delaying other interrupts or tasks.

#### Methods to Minimize Interrupt Latency:

*   **Assign Appropriate Priorities:** Assign higher priorities to time-critical I/O events.
*   **Keep ISRs Short and Efficient:** Perform only essential I/O handling within the ISR. Defer non-critical processing to the main loop or a task.
*   **Avoid Nested Interrupts (when possible):** While supported, deeply nested interrupts can increase complexity and latency.
*   **Use Assembly for Critical Sections:** For extremely timing-sensitive operations, hand-written assembly can sometimes be more efficient than C.
*   **Optimize Memory Access:** Ensure the vector table and frequently accessed peripherals/memory are in fast SRAM.
*   **Minimize Context Switching Overhead:** The Cortex-M's automatic stacking is efficient, but excessive register usage in the ISR can still impact performance.
*   **Consider DMA for High-Volume Transfers:** Offload bulk data transfers to DMA to free the CPU.

---

### Trade-offs Between Transfer Rate and Latency:

| I/O Technique         | Typical Transfer Rate | Typical Latency (Initial Response) | Key Characteristics                                                                 |
| :-------------------- | :-------------------- | :--------------------------------- | :---------------------------------------------------------------------------------- |
| **Programmed I/O**    | Low                   | High & Variable                    | Simple, low CPU overhead for infrequent I/O, but inefficient for continuous data. |
| **Interrupt-Driven I/O** | Medium to High        | Low & Deterministic                | Efficient for event-driven I/O, good responsiveness, but has interrupt overhead.  |
| **DMA**               | Very High             | Low (Initiation)                   | Best for high-volume data, frees CPU, but can cause bus contention.               |

**Important Considerations:**

*   **System Requirements:** The choice depends heavily on the application's needs. A real-time control system might prioritize low latency, while a data logger might prioritize high transfer rate.
*   **Resource Constraints:** The availability of DMA controllers, the processor's speed, and memory bandwidth are crucial factors.
*   **Complexity:** Programmed I/O is simplest, DMA is most complex to set up.

---

### Practical Examples and Exercises:

**Example Scenario:** Designing a system to sample audio from an ADC at 44.1 kHz and store it in memory.

*   **Option 1: Programmed I/O:** The CPU would continuously poll the ADC status register.
    *   **Transfer Rate:** Very low. The CPU would spend most of its time polling and would likely miss samples.
    *   **Latency:** High and variable. The CPU might only check the ADC every few microseconds, by which time the data might be stale or lost.
*   **Option 2: Interrupt-Driven I/O:** The ADC triggers an interrupt when a sample is ready.
    *   **Transfer Rate:** Potentially good. An ISR handles each sample. The rate is limited by interrupt latency and ISR execution time.
    *   **Latency:** Low for individual samples. The ISR is triggered promptly. However, if many other interrupts are active or the ISR is complex, it could cause issues.
*   **Option 3: DMA:** The ADC is configured to trigger a DMA transfer of each sample to a circular buffer in memory.
    *   **Transfer Rate:** Excellent. DMA handles continuous transfers efficiently without CPU intervention.
    *   **Latency:** Low initiation latency. The DMA controller manages the transfers autonomously. This is the most suitable method for high-speed, continuous data streams.

---

### Practice Questions:

1.  **Define and explain the key difference between transfer rate and latency in the context of embedded systems I/O.**
2.  **Consider a system where a sensor needs to report its status every millisecond. Which I/O technique (programmed I/O, interrupt-driven I/O, or DMA) would be most appropriate, and why? Discuss the expected transfer rate and latency characteristics of your chosen method.**
3.  **List at least three factors that contribute to interrupt latency on an ARM Cortex-M processor.**
4.  **How can you effectively minimize interrupt latency in an embedded system?**
5.  **You are designing a system to read 1024 bytes of data from an external EEPROM via an SPI interface. The SPI interface can transfer data at 1 Mbps. Which I/O method would you choose to maximize the transfer rate, and what are the potential latency considerations?**

---

### Answers to Practice Questions:

1.  **Transfer Rate** (Throughput) is the amount of data moved per unit of time (e.g., KB/s), indicating how much data can be processed. **Latency** is the time delay between an I/O event occurring and the system responding to it (e.g., microseconds), indicating how quickly the system reacts.
2.  For reporting status every millisecond, **interrupt-driven I/O** would be most appropriate.
    *   **Transfer Rate:** Sufficient for status updates, as it's not a high-volume data transfer.
    *   **Latency:** Low and deterministic. An interrupt ensures the CPU is notified promptly when the status is ready, allowing for a quick response. Programmed I/O would be inefficient due to polling, and DMA is overkill for single status bits.
3.  Three factors contributing to interrupt latency on an ARM Cortex-M:
    *   **Interrupt Priority:** Higher priority interrupts can delay lower priority ones.
    *   **Processor State:** The processor being busy in a critical section or handling a higher-priority interrupt.
    *   **Register Saving/Stacking:** The automatic process of pushing registers onto the stack when an exception occurs.
    *   *(Other valid answers include pipeline flushing, bus access, vector fetch time).*
4.  To minimize interrupt latency:
    *   Assign appropriate priorities to interrupts.
    *   Keep Interrupt Service Routines (ISRs) as short and efficient as possible.
    *   Avoid unnecessary operations within ISRs; defer non-critical work to the main loop.
    *   Optimize memory access for the vector table and critical ISR code.
    *   Use DMA for high-volume data transfers.
5.  To maximize the transfer rate for reading 1024 bytes from an SPI EEPROM at 1 Mbps:
    *   The best method would be **DMA**.
    *   **Transfer Rate:** DMA can utilize the full 1 Mbps capacity of the SPI interface efficiently, transferring the entire 1024 bytes quickly without tying up the CPU.
    *   **Latency Considerations:**
        *   **Initiation Latency:** The processor will spend some time setting up the DMA controller (source address, destination address, transfer count, SPI peripheral as source, memory as destination). This is usually a small, fixed overhead.
        *   **Bus Contention:** While DMA is active, it will use the system bus. If the CPU needs to access memory concurrently, there might be a slight increase in latency for the CPU's bus transactions, but the overall data transfer is much faster and more efficient.

---

### Important Points to Remember:

*   **Transfer Rate vs. Latency:** Don't confuse them. High transfer rate doesn't always mean low latency, and vice-versa.
*   **CPU Overhead:** Programmed I/O is CPU-intensive. Interrupt-driven I/O reduces polling but adds interrupt handling overhead. DMA offloads the CPU entirely for the transfer itself.
*   **ISR Design:** Critical for interrupt-driven I/O. Keep them short, fast, and focused.
*   **DMA is for Bulk:** Use DMA for continuous or large block data transfers where CPU intervention is inefficient.
*   **System Design Trade-offs:** The choice of I/O technique is a crucial design decision balancing performance, complexity, and resource utilization.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### Textbook and Reference Book Integration:

*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W Lewis (Pearson, 2e, 2015):** This book likely provides a good introduction to polling, interrupts, and DMA mechanisms as they relate to ARM Cortex-M processors. It will cover the fundamental differences in how these techniques manage I/O and their impact on CPU usage.
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu (Elsevier, 3e, 2014):** This is an invaluable resource for deep dives into the Cortex-M architecture. It will meticulously detail the interrupt controller (NVIC), the exception model, and the mechanisms behind interrupt latency, including register stacking and pipeline behavior during exceptions. It will also likely explain how DMA controllers interact with the processor and memory bus.
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu (E-man Press, 3e, 2018):** This book will offer practical insights, potentially with assembly code examples, demonstrating how to implement polling, interrupt handlers, and DMA transfers. It can help connect the theoretical concepts of transfer rate and latency to actual code implementation and its performance implications.

This comprehensive set of notes provides a foundational understanding of transfer rate and latency within the context of ARM I/O programming, particularly when dealing with interrupts and exceptions. By understanding these concepts and the trade-offs between different I/O techniques, you can make informed decisions for designing efficient and responsive embedded systems.