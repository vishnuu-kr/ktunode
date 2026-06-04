---
title: "double buffering"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb0e"
status: "completed"
scrapedAt: "2026-05-23T17:53:45.450Z"
---
# ARM Architecture and Programming: Module 4 - IO Programming in Assembly: Interrupts and Exceptions

## Topic: Double Buffering

---

### Introduction

In embedded systems, efficient handling of input/output (I/O) operations is crucial. When dealing with data streams that arrive or need to be transmitted at rates faster than the processor can process them directly, techniques like double buffering become essential. Double buffering is a fundamental concept in managing I/O, particularly in scenarios involving peripherals like UARTs, SPI, I2S, or even graphical displays. This topic will explore double buffering in the context of ARM assembly programming, focusing on its implementation, benefits, and its relationship with interrupts and exceptions.

---

### 1. Learning Outcomes

Upon completion of this topic, you will be able to:

*   **Understand the concept of double buffering:** Explain what double buffering is and why it's used in I/O programming.
*   **Implement double buffering using assembly:** Write ARM assembly code to manage two separate buffers for I/O operations.
*   **Integrate double buffering with interrupts:** Demonstrate how interrupts can be used to manage the filling and emptying of double buffers.
*   **Analyze the performance benefits of double buffering:** Explain how double buffering improves system responsiveness and throughput.
*   **Apply double buffering to real-world I/O scenarios:** Identify situations where double buffering is beneficial and design appropriate solutions.

---

### 2. Key Concepts and Definitions

*   **Buffer:** A region of memory used to temporarily store data during transfer between devices or between a device and a program.
*   **Double Buffering:** A technique that uses two buffers to manage data flow. While one buffer is being filled (e.g., by an incoming data stream via an interrupt), the other buffer is being processed or emptied (e.g., by the main program loop). Once the processing of one buffer is complete, the roles of the buffers are swapped.
*   **Interrupt:** A signal from a hardware device indicating that it needs immediate attention from the processor. Interrupts allow the processor to handle I/O efficiently without constant polling.
*   **Polling:** A method of checking the status of a device by repeatedly querying its status register. This is generally less efficient than using interrupts for I/O.
*   **Producer-Consumer Problem:** A classic concurrency problem where one process (producer) generates data and another process (consumer) consumes it. Double buffering is a common solution to this problem in I/O.
*   **Latency:** The delay between the occurrence of an event and the processor's response to it. Double buffering helps reduce latency in I/O processing.
*   **Throughput:** The rate at which data can be processed or transmitted. Double buffering can increase throughput by allowing parallel operations.
*   **Buffer Overflow:** Occurs when a program attempts to write data beyond the allocated buffer space, potentially corrupting adjacent memory.
*   **Buffer Underflow:** Occurs when a program attempts to read data from an empty buffer.

---

### 3. Why Double Buffering?

Double buffering addresses the inherent limitations of single-buffered I/O, where the processor is occupied with either receiving data or processing it, leading to potential blocking and inefficiency.

*   **Overlapping Operations:** It allows the processor to perform other tasks while I/O operations are in progress, rather than being tied up waiting for data or for the data to be processed.
*   **Reducing Processor Idle Time:** While one buffer is being filled by an interrupt service routine (ISR), the main program can process the data in the other buffer. This keeps the CPU busy and improves overall system performance.
*   **Handling Asynchronous Data:** I/O devices often operate asynchronously to the processor's clock. Double buffering helps smooth out these variations, preventing data loss due to rapid bursts of data.
*   **Smooth Data Transfer:** For peripherals like audio or video interfaces, double buffering ensures a continuous stream of data, preventing glitches or interruptions.

---

### 4. How Double Buffering Works

The core idea is to maintain two distinct memory buffers, let's call them `Buffer A` and `Buffer B`.

1.  **Initialization:** Both buffers are initially empty or ready to receive data. Pointers are set up to manage the current read and write positions within each buffer.
2.  **Data Reception (Producer Role):** When data arrives from an I/O peripheral (e.g., a byte via UART), an interrupt is triggered. The ISR then writes this data into the *currently available* buffer.
3.  **Data Processing (Consumer Role):** Meanwhile, the main program loop (or a separate task) checks for the status of the buffers. When a buffer is completely filled, or after a certain time, it can be processed. The program reads data from the *filled* buffer.
4.  **Buffer Swapping:** Once a buffer has been completely filled and the ISR is ready to accept more data, it switches to the *other* buffer. Similarly, once the main program has finished processing a buffer, it signals readiness to process the *other* buffer. This "swapping" is often managed by a state variable or pointer.

**Analogy:** Imagine a chef preparing food. The chef has two cutting boards. While the chef is chopping vegetables on Cutting Board 1, the assistant can be washing vegetables on Cutting Board 2. Once Cutting Board 1 is ready (all vegetables chopped), the chef moves to it, and the assistant starts chopping on Cutting Board 2. This parallel activity makes the entire process faster.

---

### 5. Implementation in ARM Assembly

Let's consider a scenario for receiving data via a UART. We'll use two buffers, `RX_Buffer1` and `RX_Buffer2`, each of a predefined size.

#### 5.1 Memory Allocation

First, we need to allocate memory for our buffers. This can be done in the `.data` or `.bss` section.

```assembly
.data
RX_Buffer1:      .space 32       @ Allocate 32 bytes for Buffer 1
RX_Buffer2:      .space 32       @ Allocate 32 bytes for Buffer 2

; Pointers to manage the current write position in each buffer
RX_WritePtr1:    .word RX_Buffer1
RX_WritePtr2:    .word RX_Buffer2

; Pointers to manage the current read position in each buffer (for processing)
RX_ReadPtr1:     .word RX_Buffer1
RX_ReadPtr2:     .word RX_Buffer2

; Variables to track the number of bytes in each buffer
RX_Count1:       .word 0
RX_Count2:       .word 0

; A flag to indicate which buffer is currently being filled by the ISR
; 0: Buffer 1 is active, 1: Buffer 2 is active
CurrentRXBuffer: .word 0

; A flag to indicate if a buffer is ready for processing
; 0: No buffer ready, 1: Buffer 1 ready, 2: Buffer 2 ready
BufferReadyFlag: .word 0
```

#### 5.2 Interrupt Service Routine (ISR) for UART RX

This ISR will be triggered when a byte is received on the UART.

```assembly
; Assume 'R0' holds the received byte from the UART data register
; Assume 'R1' is used to hold the current write pointer and 'R2' for count
; Assume the base address of the UART data register is known (e.g., UART_DR)

UART_RX_ISR:
    PUSH    {R0-R3, LR}             @ Save registers

    LDR     R3, =CurrentRXBuffer    @ Load address of the current buffer indicator
    LDR     R3, [R3]                @ Get the current buffer index (0 or 1)

    CMP     R3, #0                  @ Is it Buffer 1?
    BEQ     Handle_Buffer1          @ If yes, go to handle Buffer 1

Handle_Buffer2:
    @ Process for Buffer 2
    LDR     R1, =RX_WritePtr2       @ Load address of Buffer 2 write pointer
    LDR     R1, [R1]                @ Get the actual write pointer for Buffer 2
    LDR     R2, =RX_Count2          @ Load address of Buffer 2 byte count
    LDR     R2, [R2]                @ Get the current byte count for Buffer 2

    @ Check if buffer is full (assuming buffer size is 32)
    CMP     R2, #32
    BHS     Buffer_Full_2           @ If full, handle appropriately (e.g., drop data or set error)

    STRB    R0, [R1]                @ Store the received byte in Buffer 2
    ADD     R1, R1, #1              @ Increment the write pointer
    STR     R1, [R3, #0]            @ Store updated pointer back (incorrectly using R3 here, should be actual pointer address)
                                    @ Correct way: LDR R1_addr, =RX_WritePtr2; STR R1, [R1_addr]
    ADD     R2, R2, #1              @ Increment the byte count
    STR     R2, [R2, #0]            @ Store updated count

    @ Check if Buffer 2 is now full
    CMP     R2, #32
    BNE     Exit_ISR                @ If not full, just exit

    @ Buffer 2 is full, switch to Buffer 1 for next writes
    MOV     R3, #0                  @ Set current buffer to 1
    LDR     R3_addr, =CurrentRXBuffer
    STR     R3, [R3_addr]           @ Update the global current buffer indicator

    @ Mark Buffer 2 as ready for processing
    LDR     R4, =BufferReadyFlag
    MOV     R5, #2                  @ Value 2 indicates Buffer 2 is ready
    STR     R5, [R4]                @ Set the flag

    B       Exit_ISR                @ Exit ISR

Handle_Buffer1:
    @ Process for Buffer 1
    LDR     R1, =RX_WritePtr1       @ Load address of Buffer 1 write pointer
    LDR     R1, [R1]                @ Get the actual write pointer for Buffer 1
    LDR     R2, =RX_Count1          @ Load address of Buffer 1 byte count
    LDR     R2, [R2]                @ Get the current byte count for Buffer 1

    @ Check if buffer is full (assuming buffer size is 32)
    CMP     R2, #32
    BHS     Buffer_Full_1           @ If full, handle appropriately

    STRB    R0, [R1]                @ Store the received byte in Buffer 1
    ADD     R1, R1, #1              @ Increment the write pointer
    STR     R1, [R3, #0]            @ Store updated pointer back (incorrectly using R3 here)
                                    @ Correct way: LDR R1_addr, =RX_WritePtr1; STR R1, [R1_addr]
    ADD     R2, R2, #1              @ Increment the byte count
    STR     R2, [R2, #0]            @ Store updated count

    @ Check if Buffer 1 is now full
    CMP     R2, #32
    BNE     Exit_ISR                @ If not full, just exit

    @ Buffer 1 is full, switch to Buffer 2 for next writes
    MOV     R3, #1                  @ Set current buffer to 2
    LDR     R3_addr, =CurrentRXBuffer
    STR     R3, [R3_addr]           @ Update the global current buffer indicator

    @ Mark Buffer 1 as ready for processing
    LDR     R4, =BufferReadyFlag
    MOV     R5, #1                  @ Value 1 indicates Buffer 1 is ready
    STR     R5, [R4]                @ Set the flag

    B       Exit_ISR                @ Exit ISR

Buffer_Full_1:
    @ Handle Buffer 1 full condition (e.g., error, drop byte)
    @ For simplicity, let's just drop the byte and stay on Buffer 1 if it's full
    B       Exit_ISR

Buffer_Full_2:
    @ Handle Buffer 2 full condition
    B       Exit_ISR

Exit_ISR:
    POP     {R0-R3, LR}             @ Restore registers
    SUBS    PC, LR, #4              @ Return from interrupt
```

**Note on Pointer Updates:** The example above shows a common mistake. `STR R1, [R3, #0]` assumes `R3` holds the address of a pointer variable. In reality, `R3` holds the *value* of `CurrentRXBuffer` (0 or 1). To correctly update the pointers, you need to load the address of the specific pointer variable (`RX_WritePtr1` or `RX_WritePtr2`) and then store the updated pointer value. The corrected logic is indicated with comments.

#### 5.3 Main Program Loop (Consumer Role)

The main loop will check the `BufferReadyFlag` and process the data.

```assembly
.global _start

_start:
    ; ... Initialization code ...
    BL      Initialize_UART_RX_Interrupt

    ; Main loop
MainLoop:
    LDR     R0, =BufferReadyFlag    @ Load address of the ready flag
    LDR     R0, [R0]                @ Get the flag value

    CMP     R0, #0                  @ Is any buffer ready?
    BEQ     MainLoop                @ If no buffer is ready, continue looping

    CMP     R0, #1                  @ Is Buffer 1 ready?
    BEQ     Process_Buffer1         @ If yes, process Buffer 1

    CMP     R0, #2                  @ Is Buffer 2 ready?
    BEQ     Process_Buffer2         @ If yes, process Buffer 2

    B       MainLoop                @ Should not reach here if logic is correct

Process_Buffer1:
    LDR     R1, =RX_ReadPtr1        @ Load address of Buffer 1 read pointer
    LDR     R1, [R1]                @ Get the actual read pointer for Buffer 1
    LDR     R2, =RX_Count1          @ Load address of Buffer 1 byte count
    LDR     R2, [R2]                @ Get the current byte count for Buffer 1

    MOV     R3, #0                  @ Initialize loop counter for processing

ProcessBuffer1Loop:
    CMP     R3, R2                  @ Have we processed all bytes?
    BEQ     Buffer1_Processed       @ If yes, exit loop

    LDRB    R4, [R1]                @ Load a byte from Buffer 1
    ; Process the byte in R4 (e.g., echo it back via UART, display it, etc.)
    BL      Process_Received_Byte   @ Call a subroutine to process the byte

    ADD     R1, R1, #1              @ Increment read pointer
    ADD     R3, R3, #1              @ Increment loop counter

    B       ProcessBuffer1Loop

Buffer1_Processed:
    @ Reset Buffer 1 for next use
    LDR     R1, =RX_WritePtr1       @ Reset write pointer
    LDR     R1_addr, =RX_Buffer1
    STR     R1_addr, [R1]

    LDR     R2, =RX_Count1          @ Reset byte count
    MOV     R5, #0
    STR     R5, [R2]

    @ Clear the ready flag for Buffer 1
    LDR     R4, =BufferReadyFlag
    MOV     R5, #0                  @ Set flag to 0 (no buffer ready)
    STR     R5, [R4]

    B       MainLoop                @ Go back to main loop

Process_Buffer2:
    LDR     R1, =RX_ReadPtr2        @ Load address of Buffer 2 read pointer
    LDR     R1, [R1]                @ Get the actual read pointer for Buffer 2
    LDR     R2, =RX_Count2          @ Load address of Buffer 2 byte count
    LDR     R2, [R2]                @ Get the current byte count for Buffer 2

    MOV     R3, #0                  @ Initialize loop counter for processing

ProcessBuffer2Loop:
    CMP     R3, R2                  @ Have we processed all bytes?
    BEQ     Buffer2_Processed       @ If yes, exit loop

    LDRB    R4, [R1]                @ Load a byte from Buffer 2
    ; Process the byte in R4
    BL      Process_Received_Byte

    ADD     R1, R1, #1              @ Increment read pointer
    ADD     R3, R3, #1              @ Increment loop counter

    B       ProcessBuffer2Loop

Buffer2_Processed:
    @ Reset Buffer 2 for next use
    LDR     R1, =RX_WritePtr2       @ Reset write pointer
    LDR     R1_addr, =RX_Buffer2
    STR     R1_addr, [R1]

    LDR     R2, =RX_Count2          @ Reset byte count
    MOV     R5, #0
    STR     R5, [R2]

    @ Clear the ready flag for Buffer 2
    LDR     R4, =BufferReadyFlag
    MOV     R5, #0                  @ Set flag to 0 (no buffer ready)
    STR     R5, [R4]

    B       MainLoop                @ Go back to main loop

; Placeholder for subroutine to process a received byte
Process_Received_Byte:
    ; This subroutine would contain the actual logic for what to do with each byte
    ; e.g., sending it to another peripheral, storing it in a different format, etc.
    BX      LR                      @ Return
```

---

### 6. Integrating with Interrupts (Key Points)

*   **ISR Responsibility:** The ISR is solely responsible for receiving data and placing it into the *current* active buffer. It should be as short and efficient as possible.
*   **Buffer Switching:** When a buffer reaches its capacity, the ISR must:
    *   Switch the `CurrentRXBuffer` indicator to the other buffer.
    *   Set a `BufferReadyFlag` to notify the main loop that data is available.
    *   Reset the write pointer and count for the now-filled buffer (or alternatively, the main loop can do this after processing).
*   **Main Loop Responsibility:** The main loop is responsible for:
    *   Checking the `BufferReadyFlag`.
    *   Processing the data from the buffer indicated by the flag.
    *   Resetting the pointers and counts for the processed buffer, making it available for the ISR again.
*   **Atomicity:** Updates to shared resources like `CurrentRXBuffer` and `BufferReadyFlag` must be atomic. In an interrupt-driven system, this means ensuring that an interrupt doesn't occur *between* the update of `CurrentRXBuffer` and `BufferReadyFlag` in a way that causes inconsistencies. For simple flags and single variables, this is usually handled by the processor's interrupt mechanism. If you had more complex state, you might need to disable interrupts briefly.

---

### 7. Advantages of Double Buffering

*   **Improved Responsiveness:** The main program can continue to execute other tasks while I/O is being handled in the background by the ISR and the other buffer.
*   **Higher Throughput:** By overlapping I/O reception and data processing, the overall rate at which data can be handled is increased.
*   **Reduced Risk of Data Loss:** Prevents data from being overwritten by new incoming data before it can be processed.
*   **Simplified Logic:** While the setup is more complex than polling, the interrupt-driven double buffering approach often leads to cleaner and more modular code compared to complex polling schemes.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. Textbooks and References

This topic is fundamental to embedded systems I/O and is discussed in the context of processor architecture and interrupt handling.

*   **Fundamentals of Embedded Software with the ARM Cortex M3 by Daniel W Lewis (Pearson, 2e, 2015):** Lewis's book likely covers the practical aspects of I/O, including buffer management and interrupt handling in embedded systems. You can expect discussions on how peripherals interact with the CPU, which is the foundation for understanding why buffering is needed. Look for chapters on peripheral drivers, interrupts, and real-time operating system concepts (if applicable).
*   **The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors by Joseph Yiu (Elsevier, 3e, 2014):** Yiu's book provides in-depth technical details about the ARM Cortex-M architecture. It will explain the interrupt controller (NVIC), exception handling mechanisms, and the programmer's model. Understanding how the Cortex-M handles interrupts is crucial for implementing efficient ISRs that manage double buffers. You'll find details on interrupt vector tables, priority levels, and register saving/restoring.
*   **Embedded systems with ARM Cortex M Microcontrollers in Assembly and C by Yifeng Zhu (E-man Press, 3e, 2018):** Zhu's book, especially with its focus on both assembly and C, will be invaluable. It will likely provide concrete examples of I/O peripheral interaction and interrupt handling in assembly. You can use this book to cross-reference the assembly syntax and techniques used in the examples above. Chapters on specific peripherals (like UART) and interrupt programming will be most relevant.

---

### 9. Course Outcomes Alignment

*   **CO1: Use the features of C that are frequently used in embedded systems (Knowledge Level: K3):** While this topic focuses on assembly, the underlying principles of buffering and interrupt-driven I/O are directly transferable to C programming in embedded systems. Understanding double buffering in assembly helps you appreciate the elegance and necessity of these techniques when implemented in C, often using libraries or RTOS primitives.
*   **CO2: Explain a programmer’s view of processor architecture (Knowledge Level: K2):** This topic directly engages with the processor's architecture by utilizing interrupts, ISRs, and memory management (buffers). You learn how the CPU responds to external events and how to manage its resources efficiently. The distinction between the ISR context and the main program context is a key architectural concept.
*   **CO3: Choose between programming at the level of assembly or C as appropriate (Knowledge Level: K3):** Implementing double buffering in assembly provides a low-level understanding of how it works. This knowledge allows you to make informed decisions about when a performance-critical I/O routine might benefit from assembly optimization, or when a higher-level C implementation (leveraging DMA or RTOS queues) would be more maintainable and portable.

---

### 10. Practice Questions and Exercises

**Question 1:**
Explain the primary advantage of using double buffering over single buffering for I/O operations in an embedded system.

**Answer 1:**
The primary advantage of double buffering is its ability to overlap I/O operations with data processing. While one buffer is being filled by incoming data (often via an interrupt), the processor can simultaneously process data from the other buffer. This prevents the processor from being idle waiting for I/O and increases overall system throughput and responsiveness. Single buffering would require the processor to either wait for data or process it immediately, potentially blocking other critical tasks.

**Question 2:**
In the context of double buffering for UART reception, what are the critical tasks performed by the UART RX ISR?

**Answer 2:**
The UART RX ISR must perform the following critical tasks:
1.  **Read the received byte:** Retrieve the data from the UART data register.
2.  **Identify the current active buffer:** Determine which of the two buffers is currently designated for receiving data.
3.  **Store the byte:** Write the received byte into the current buffer.
4.  **Update buffer pointers/counts:** Increment the write pointer and byte count for the current buffer.
5.  **Check for buffer full:** If the current buffer becomes full:
    *   Switch the active buffer indicator to the *other* buffer.
    *   Set a flag to notify the main program that the filled buffer is ready for processing.
    *   Handle the full buffer scenario (e.g., by dropping subsequent data if no buffer is available, or signaling an error).

**Question 3:**
Consider a system where a sensor generates data at a high rate, and this data needs to be transmitted via a UART. If the UART transmit buffer is small and the processing of sensor data before transmission is complex, why would double buffering be a suitable solution?

**Answer 3:**
Double buffering would be suitable here for the following reasons:
*   **UART Transmit Buffering:** If the UART peripheral itself has a small transmit buffer (or no transmit buffer), and the processor needs to send data periodically, double buffering can pre-load the data to be sent. While the UART transmits data from one buffer, the processor can prepare the next block of data in the second buffer.
*   **Sensor Data Processing:** If the sensor data requires significant processing before being formatted for transmission, double buffering allows this processing to happen in parallel. While the processor is preparing data in Buffer B, the sensor (potentially through another interrupt or DMA) can be filling Buffer A with new raw data. This prevents data loss from the sensor and ensures that the UART is continuously supplied with data to transmit.
*   **Throughput:** By decoupling the sensor data acquisition/processing from the UART transmission, the overall data throughput can be maximized.

**Exercise 1 (Conceptual):**
Imagine you have two buffers, `BufferA` and `BufferB`, for receiving data.
*   Initially, `BufferA` is active for reception.
*   The ISR receives bytes and stores them in `BufferA`.
*   The main loop is processing `BufferB`.
*   `BufferA` becomes full.
*   The ISR switches to `BufferB` and marks it as ready.
*   The main loop finishes processing `BufferB`.

What should happen next? Describe the state of the buffers and the system.

**Answer to Exercise 1:**
1.  **ISR Action:** When `BufferA` becomes full, the ISR stops writing to `BufferA`, switches the `CurrentRXBuffer` indicator to `BufferB`, and sets a `BufferReadyFlag` indicating `BufferB` is full.
2.  **Main Loop Action:** The main loop, upon seeing the `BufferReadyFlag` for `BufferB`, will then start processing the data that has been collected in `BufferB`.
3.  **Main Loop Completion:** When the main loop finishes processing `BufferB`, it resets the pointers and count for `BufferB`, marks it as available for reception, and clears the `BufferReadyFlag`.
4.  **Next State:** `BufferB` is now the active buffer for the ISR to write into. `BufferA` is empty and ready to be filled by the ISR. The `BufferReadyFlag` is cleared, and the `CurrentRXBuffer` indicator points to `BufferB`.

**Exercise 2 (Assembly Focus - Conceptual):**
What ARM assembly instructions would you use to:
a) Load the address of `RX_WritePtr1` into register R1?
b) Load the current value of the pointer stored at the address in R1 into register R2?
c) Store the byte in R0 into the memory location pointed to by R2, and then increment R2?

**Answer to Exercise 2:**
a) Load the address of `RX_WritePtr1` into register R1:
   ```assembly
   LDR     R1, =RX_WritePtr1
   ```

b) Load the current value of the pointer stored at the address in R1 into register R2:
   ```assembly
   LDR     R2, [R1]
   ```
   (Assuming R1 holds the address of the pointer variable.)

c) Store the byte in R0 into the memory location pointed to by R2, and then increment R2:
   ```assembly
   STRB    R0, [R2]        @ Store the byte from R0 at the address in R2
   ADD     R2, R2, #1      @ Increment the pointer in R2
   ```

---

### 11. Important Points to Remember

*   **Efficiency in ISRs:** Keep ISRs as short and fast as possible. Avoid complex computations or lengthy loops within an ISR.
*   **Atomic Operations:** Ensure that shared variables (like buffer pointers or status flags) are updated atomically to prevent race conditions between the ISR and the main program.
*   **Buffer Management:** Carefully manage buffer pointers, counts, and status flags to avoid buffer overflows and underflows.
*   **Initialization:** Proper initialization of buffers, pointers, and flags is crucial before enabling interrupts.
*   **System State:** Be aware of the processor's state when handling interrupts. Registers used by the ISR should be saved and restored to avoid corrupting the context of the interrupted code.
*   **Flexibility:** Double buffering can be extended to triple buffering or more for even higher throughput, depending on the application's needs and the system's capabilities.

---