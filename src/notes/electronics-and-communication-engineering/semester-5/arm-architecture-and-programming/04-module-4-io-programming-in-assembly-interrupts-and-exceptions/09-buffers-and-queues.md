---
title: "buffers and queues"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb0d"
status: "completed"
scrapedAt: "2026-05-23T17:53:44.605Z"
---
# ARM Architecture and Programming: Module 4 - IO Programming in Assembly: Interrupts and Exceptions

## Topic: Buffers and Queues

This topic explores how buffers and queues are implemented and utilized in assembly programming within the context of interrupts and exceptions on ARM Cortex-M processors. Understanding these data structures is crucial for efficient and robust input/output (I/O) handling, especially when dealing with asynchronous events.

### Learning Outcomes Covered:

*   **Understanding the role of buffers and queues in interrupt-driven I/O:** How they facilitate smooth data transfer between hardware and software.
*   **Implementing basic buffer and queue structures in ARM assembly:** Demonstrating the use of memory and registers for data management.
*   **Managing buffer and queue operations within interrupt service routines (ISRs):** Handling data insertion and retrieval while minimizing overhead.
*   **Considering the impact of concurrency and atomicity on buffer/queue operations:** Ensuring data integrity in the presence of interrupts.

---

### 1. Buffers and Queues: Concepts and Definitions

**What are Buffers and Queues?**

*   **Buffer:** A temporary storage area in memory used to hold data that is being transferred from one place to another. Buffers are often used to smooth out differences in speed between devices or between a device and a program.
    *   **Example:** When receiving data from a UART, a buffer can store incoming bytes until the CPU is ready to process them, preventing data loss if the CPU is busy with other tasks.
*   **Queue:** A First-In, First-Out (FIFO) data structure. Elements are added to the rear (enqueue) and removed from the front (dequeue).
    *   **Example:** A print spooler uses a queue to manage print jobs. The first job sent to the printer is the first one printed.

**Why are they essential in Interrupt-Driven I/O?**

In an interrupt-driven system, data often arrives asynchronously. This means data can arrive at unpredictable times and at varying rates.

*   **Bridging Speed Mismatches:** Hardware devices often operate at different speeds than the CPU. Buffers can absorb bursts of data from faster devices, allowing the CPU to process it at its own pace.
*   **Decoupling:** Buffers and queues decouple the producer (hardware or interrupt source) from the consumer (main program or another task). This allows each to operate more independently.
*   **Data Integrity:** Without buffers, if data arrives while the CPU is handling another interrupt or a time-critical task, that data could be lost.

---

### 2. Implementing Buffers in ARM Assembly

#### 2.1. Basic Buffer Implementation

A buffer can be implemented as a contiguous block of memory. We need mechanisms to track:

*   **Start Address:** The beginning of the buffer.
*   **End Address (or Size):** The end of the buffer or its total capacity.
*   **Write Pointer (or Tail):** The next available location to write data into the buffer.
*   **Read Pointer (or Head):** The next location to read data from the buffer.
*   **Count (or Fill Level):** The number of valid data elements currently in the buffer.

**Example: Circular Buffer (Ring Buffer)**

Circular buffers are very common for I/O buffering as they efficiently reuse memory. When the end of the buffer is reached, the pointers wrap around to the beginning.

**Conceptual Structure:**

```
Buffer: | Byte 0 | Byte 1 | ... | Byte N-1 |
        ^               ^
        Read Pointer    Write Pointer
```

When the write pointer reaches the end, it wraps back to the start. Similarly for the read pointer.

**Assembly Implementation Considerations:**

*   **Memory Allocation:** Reserve a block of memory for the buffer.
*   **Pointer Management:** Use registers to hold the read and write pointers.
*   **Modulo Arithmetic:** Use the modulo operator (or equivalent bitwise operations for power-of-2 sizes) to handle wrap-around.

**Example (Conceptual ARM Assembly Snippet):**

Let's assume a buffer of size `BUFFER_SIZE`.

```assembly
.data
buffer_start: .space BUFFER_SIZE     @ Reserve memory for the buffer
write_ptr:    .word buffer_start     @ Initialize write pointer to buffer start
read_ptr:     .word buffer_start     @ Initialize read pointer to buffer start
buffer_count: .word 0                @ Initialize count to 0

.equ BUFFER_SIZE, 64 @ Example buffer size

.text
@ Assume this is within an ISR or a function that populates the buffer

populate_buffer:
    LDR R0, =buffer_start       @ Load base address of buffer
    LDR R1, [SP, #offset_to_data] @ Load the data byte to store (e.g., from RXDR register)

    @ Get current write pointer
    LDR R2, =write_ptr
    LDR R3, [R2]                @ R3 = current write_ptr address

    @ Store data byte at the write pointer location
    STR R1, [R3]

    @ Update write pointer (circularly)
    ADD R3, R3, #1              @ Increment write pointer
    LDR R4, =buffer_start       @ Load buffer start address
    ADD R4, R4, #BUFFER_SIZE    @ R4 = buffer_end_address + 1 (for modulo comparison)

    CMP R3, R4                  @ Compare with end + 1
    ADDLT R3, R3, #1            @ If write_ptr < buffer_end + 1, increment (normal case)
    SUBEQ R3, R3, #BUFFER_SIZE  @ If write_ptr == buffer_end + 1, wrap around to buffer_start

    STR R3, [R2]                @ Store updated write pointer

    @ Update buffer count (handle overflow if necessary)
    LDR R5, =buffer_count
    LDR R6, [R5]                @ R6 = current count
    ADD R6, R6, #1              @ Increment count
    STR R6, [R5]                @ Store updated count

    BX LR                       @ Return
```

**Key Points for Buffer Implementation:**

*   **Atomicity:** Operations like incrementing the write pointer and storing the data *must* be atomic with respect to reading from the same pointer. If an interrupt occurs between reading the pointer and writing the data, the pointer could be read incorrectly.
*   **Pointer Updates:** The logic for updating pointers (especially wrap-around) is critical.
*   **Count Management:** Keeping track of the number of valid elements is essential for knowing when the buffer is full or empty.

---

### 3. Implementing Queues in ARM Assembly

A queue builds upon the buffer concept by defining a specific access pattern (FIFO).

#### 3.1. Queue as a Circular Buffer

The most efficient way to implement a queue in embedded systems is often by using a circular buffer.

*   **Enqueue (Add to Queue):**
    1.  Write data at the `write_ptr`.
    2.  Increment `write_ptr` (circularly).
    3.  Increment `buffer_count`.
*   **Dequeue (Remove from Queue):**
    1.  Read data from the `read_ptr`.
    2.  Increment `read_ptr` (circularly).
    3.  Decrement `buffer_count`.

**Assembly Implementation Considerations:**

*   **Full/Empty Detection:**
    *   **Full:** `buffer_count == BUFFER_SIZE`.
    *   **Empty:** `buffer_count == 0`.
    *   **Common Issue:** If `write_ptr == read_ptr`, it can be ambiguous whether the queue is full or empty if we only use pointers. Using a `buffer_count` or reserving one slot in the buffer clarifies this. (If `BUFFER_SIZE` is reserved, `write_ptr == read_ptr` means empty; if `write_ptr == read_ptr` after enqueueing, it means full).

**Example (Conceptual ARM Assembly Snippet for Enqueue/Dequeue):**

```assembly
@ Assume buffer_start, write_ptr, read_ptr, buffer_count are defined and initialized

.equ QUEUE_SIZE, 64 @ Example queue size (often size-1 to differentiate full/empty)

.equ BUFFER_SIZE, QUEUE_SIZE + 1 @ For clear full/empty distinction

.data
queue_buffer: .space BUFFER_SIZE
queue_write_ptr: .word queue_buffer
queue_read_ptr: .word queue_buffer
queue_count:    .word 0

.text

@ Function to enqueue a byte
enqueue_byte:
    PUSH {R0-R3, LR}        @ Save registers

    LDR R1, =queue_count
    LDR R2, [R1]            @ R2 = current count
    CMP R2, #QUEUE_SIZE     @ Check if queue is full
    BGE enqueue_full        @ Branch if full (e.g., return error)

    LDR R0, =queue_write_ptr
    LDR R3, [R0]            @ R3 = current write pointer

    @ Store the data byte (assuming it's in R0, but will be passed as argument)
    STR R0, [R3]            @ Store data byte

    @ Update write pointer
    ADD R3, R3, #1
    LDR R4, =queue_buffer
    ADD R4, R4, #BUFFER_SIZE @ R4 = queue_buffer + BUFFER_SIZE (end + 1)
    CMP R3, R4
    SUBEQ R3, R3, #BUFFER_SIZE @ Wrap around if necessary
    STR R3, [R0]            @ Store updated write pointer

    @ Update count
    ADD R2, R2, #1
    STR R2, [R1]            @ Store updated count

enqueue_full:
    POP {R0-R3, LR}
    BX LR                   @ Return

@ Function to dequeue a byte
dequeue_byte:
    PUSH {R0-R3, LR}        @ Save registers

    LDR R1, =queue_count
    LDR R2, [R1]            @ R2 = current count
    CMP R2, #0              @ Check if queue is empty
    BEQ dequeue_empty       @ Branch if empty (e.g., return error/default)

    LDR R0, =queue_read_ptr
    LDR R3, [R0]            @ R3 = current read pointer

    LDR R0, [R3]            @ Load data byte from read pointer location

    @ Update read pointer
    ADD R3, R3, #1
    LDR R4, =queue_buffer
    ADD R4, R4, #BUFFER_SIZE @ R4 = queue_buffer + BUFFER_SIZE (end + 1)
    CMP R3, R4
    SUBEQ R3, R3, #BUFFER_SIZE @ Wrap around if necessary
    STR R3, [R0]            @ Store updated read pointer

    @ Update count
    SUB R2, R2, #1
    STR R2, [R1]            @ Store updated count

    POP {R0-R3, LR}
    BX LR                   @ Return data in R0

dequeue_empty:
    @ Handle empty queue case, e.g., return a specific value or flag
    MOV R0, #0              @ Example: return 0
    POP {R1-R3, LR}
    BX LR                   @ Return
```

**Lewis (2015) - Chapter 9: Interrupts** and **Yiu (2014) - Chapter 6: Interrupts and Exceptions**: Both texts emphasize the importance of managing shared data structures (like buffers and queues) between ISRs and the main program. They highlight the need for atomicity.

**Atomic Operations:**
*   **Small Data Types (e.g., bytes):** On Cortex-M, load and store operations for single bytes or half-words are typically atomic.
*   **Larger Data Types (e.g., words):** If you need to manipulate multi-word data structures atomically, you might need to disable interrupts temporarily during the critical section.

**Yiu (2014) - Chapter 6.3: Interrupt Latency and Determinism:** Discusses how disabling interrupts affects system responsiveness. Therefore, minimizing critical sections is crucial.

**Zhu (2018) - Chapter 5: Interrupt Handling and Chapter 6: DMA Transfer:** While focusing on C, Zhu illustrates how buffers are used for DMA, which often interfaces with I/O. The underlying principles of managing contiguous memory and pointers are similar in assembly.

---

### 4. Managing Buffers and Queues within ISRs

**Producer-Consumer Scenario:**

*   **Producer:** The hardware peripheral (e.g., UART Rx interrupt) generates data.
*   **Consumer:** The main program logic or another task processes the data.

**Common Implementation Pattern:**

1.  **ISR (Producer):**
    *   When an interrupt occurs (e.g., data received in UART), the ISR is executed.
    *   The ISR reads the data from the hardware register (e.g., `DR`).
    *   The ISR attempts to enqueue the data into a receive buffer/queue.
    *   **Critical Section:** Updating the write pointer and the count needs to be handled carefully to avoid race conditions if the buffer is also accessed by the consumer in a non-interrupt context (or even by another ISR).

2.  **Main Program (Consumer):**
    *   The main program periodically checks the buffer/queue.
    *   If the buffer/queue is not empty, it dequeues data.
    *   Processes the dequeued data.

**Important Considerations within ISRs:**

*   **Minimize ISR Execution Time:** ISRs should be as short and fast as possible. Avoid complex calculations or lengthy operations. Enqueueing a single byte is usually fast.
*   **Shared Data Access:**
    *   If the main program is the sole consumer, it can check the buffer after enabling interrupts.
    *   If multiple ISRs or tasks access the same buffer/queue, inter-task synchronization mechanisms or disabling interrupts for critical sections might be necessary.
*   **Buffer Overflow/Underflow:**
    *   **Overflow:** Occurs when data is enqueued faster than it can be dequeued. The ISR needs to handle this (e.g., discard data, set an error flag).
    *   **Underflow:** Occurs when the consumer attempts to dequeue from an empty buffer.

**Example: UART Receive Buffer in an ISR**

Let's say a UART generates an interrupt when a byte is received.

```assembly
UART0_RX_IRQ_Handler:
    PUSH {R0-R3, LR}        @ Save registers

    LDR R0, =UART0_DR       @ Address of UART Data Register
    LDR R1, [R0]            @ Read received byte from DR

    @ Enqueue the received byte into a receive queue
    MOV R0, R1              @ Move data to R0 for enqueue_byte function
    BL enqueue_byte         @ Call enqueue function

    POP {R0-R3, LR}
    BX LR                   @ Return from interrupt

@ In main loop:
main_loop:
    BL dequeue_byte         @ Attempt to dequeue a byte
    CMP R0, #0              @ Check if dequeue_byte returned an error/empty indicator
    BEQ no_data             @ If empty, do nothing

    @ Process the received byte in R0
    BL process_data_byte

    B main_loop

no_data:
    @ Do other tasks or idle
    B main_loop
```

---

### 5. Concurrency and Atomicity in Buffer/Queue Operations

This is a crucial aspect when dealing with interrupts.

**Race Conditions:**

A race condition occurs when the outcome of an operation depends on the timing of multiple threads or interrupts accessing shared data.

**Example:** Consider updating `buffer_count`.

1.  ISR reads `buffer_count` (value is 5).
2.  ISR increments `buffer_count` (to 6).
3.  ISR stores `buffer_count` (value is 6).
4.  *Meanwhile, main program dequeues one item:*
5.  Main program reads `buffer_count` (value is *still* 5, because the ISR hasn't finished writing).
6.  Main program decrements `buffer_count` (to 4).
7.  Main program stores `buffer_count` (value is 4).

The buffer count is now incorrect (should be 5).

**Solutions:**

*   **Disabling Interrupts (Primarily for single-core systems):**
    *   This is the most straightforward way to ensure atomicity in assembly.
    *   **Mechanism:** Use `CPSID I` (Clear Interrupt Enable bit in PRIMASK) to disable interrupts, perform the critical operation, and then `CPSIE I` (Set Interrupt Enable bit in PRIMASK) to re-enable them.
    *   **Caveat:** This increases interrupt latency and should be used sparingly for very short critical sections.

    ```assembly
    @ Critical section for enqueueing
    CPSID I                 @ Disable interrupts
    LDR R1, =buffer_count
    LDR R2, [R1]
    CMP R2, #BUFFER_SIZE
    BGE enqueue_full_int

    LDR R0, =write_ptr
    LDR R3, [R0]
    STR R1_data, [R3] @ Store the data (R1_data is the byte)

    ADD R3, R3, #1
    @ ... pointer wrap-around logic ...
    STR R3, [R0]

    ADD R2, R2, #1
    STR R2, [R1]

    CPSIE I                 @ Re-enable interrupts
    BX LR

enqueue_full_int:
    CPSIE I                 @ Re-enable interrupts
    BX LR
    ```

*   **Using a Count:** As shown in the examples, using a separate `count` variable helps distinguish between full and empty states and simplifies update logic. However, the updates to the count *itself* must be atomic.

*   **Atomic Instructions (Limited on Cortex-M):**
    *   Cortex-M processors don't have strong atomic read-modify-write instructions like `LDREX`/`STREX` for arbitrary buffer operations. These are more for multi-core synchronization.
    *   However, single-word loads/stores are atomic.

**Lewis (2015) - Chapter 9.4: Handling Shared Data:** Explicitly discusses the need for protection mechanisms when ISRs and main code access the same variables. He suggests disabling interrupts as a common approach for single-processor systems.

**Yiu (2014) - Chapter 6.3.1: Interrupt Nesting and Primask:** Details the `PRIMASK` register and how `CPSID` and `CPSIE` instructions affect interrupt masking, which is the basis for protecting critical sections.

---

### 6. Practice Questions and Exercises

**Question 1:**

Describe the purpose of a circular buffer in the context of receiving data from a serial peripheral (UART) via interrupts. Explain why a simple linear buffer might be less efficient.

**Answer:**
A circular buffer allows the UART interrupt service routine (ISR) to continuously write incoming bytes to a fixed memory area without needing to shift data when the end is reached. The ISR only needs to update a write pointer, which wraps around to the beginning of the buffer when it reaches the end. This is more efficient than a linear buffer because a linear buffer would require shifting all existing data to make space at the beginning if it were to be filled from the front, which is impractical in an interrupt context. Circular buffers reuse memory efficiently and simplify the producer-consumer pattern.

**Question 2:**

Consider a scenario where a UART transmit interrupt occurs when the transmit buffer is empty. You need to send the next byte from a queue. Write conceptual ARM assembly code for a function `send_next_byte_from_queue`. Assume the existence of functions `dequeue_byte()` that returns the byte in `R0` (or a specific value if empty) and functions to access the UART transmit data register (`UART_TX_DR`). Ensure you handle the case where the queue is empty.

**Conceptual Code:**

```assembly
@ Assume UART_TX_DR is defined as the address of the transmit data register
.equ UART_TX_DR, 0x40004000 @ Example address

.global send_next_byte_from_queue
send_next_byte_from_queue:
    PUSH {R0-R3, LR}        @ Save registers

    BL dequeue_byte         @ Call dequeue_byte, result in R0

    CMP R0, #ERROR_VALUE    @ Compare with a special value indicating queue empty (e.g., 0xFF)
    BEQ queue_empty_no_tx   @ If queue is empty, do nothing

    @ If queue is not empty, R0 contains the byte to send
    LDR R1, =UART_TX_DR
    STR R0, [R1]            @ Write the byte to the UART transmit data register

queue_empty_no_tx:
    POP {R0-R3, LR}
    BX LR                   @ Return
```

**Question 3:**

You are implementing a character echo function using interrupts. The UART receives a character, and the ISR enqueues it. The main loop dequeues it and, if it's not a control character, sends it back via UART. You want to add a small buffer for characters to be transmitted.

Outline the necessary variables and data structures in assembly to implement this transmit buffer.

**Answer:**

You would need:

*   `tx_buffer_start`: A label pointing to the beginning of the transmit buffer memory.
*   `tx_write_ptr`: A word variable holding the address of the next free location in the transmit buffer.
*   `tx_read_ptr`: A word variable holding the address of the next byte to be transmitted from the buffer.
*   `tx_buffer_count`: A word variable holding the number of bytes currently in the transmit buffer.
*   `tx_buffer_end`: (Optional but helpful) A label or calculated address for the end of the buffer to facilitate wrap-around logic.

The buffer itself would be a block of memory, e.g., `.space TX_BUFFER_SIZE`.

**Question 4:**

Explain the concept of "critical section" in the context of buffer manipulation by an ISR and the main program. What instruction(s) would you use on an ARM Cortex-M to protect a critical section that modifies both a buffer write pointer and a buffer count?

**Answer:**
A critical section is a segment of code that accesses shared resources (like buffers, pointers, or counts) and must be executed atomically, meaning no other process or interrupt can interfere during its execution.

To protect a critical section that modifies both a buffer write pointer and a buffer count in ARM Cortex-M assembly, you would use:

1.  `CPSID I` (Clear EXCEPTION bit in PRIMASK): This instruction disables all maskable interrupts.
2.  Perform the operations (e.g., read write pointer, store data, update write pointer, read count, update count).
3.  `CPSIE I` (Set EXCEPTION bit in PRIMASK): This instruction re-enables maskable interrupts.

This ensures that no interrupts can occur between reading the pointer and updating the count, preventing race conditions.

---

### 7. Important Points to Remember

*   **Circular Buffers:** Highly recommended for I/O buffering due to efficient memory reuse and simplified pointer management.
*   **Atomicity is Key:** Operations involving shared data (pointers, counts) must be atomic. On Cortex-M, use `CPSID I` / `CPSIE I` for short critical sections if necessary.
*   **ISR Design:** Keep ISRs as short and fast as possible. Offload complex processing to the main loop.
*   **Buffer Overflow/Underflow:** Implement robust checks and handling mechanisms for these conditions.
*   **Pointer Wrap-Around:** Carefully implement modulo arithmetic or equivalent bitwise operations for circular buffer pointers.
*   **`PRIMASK` Register:** Understand its role in disabling/enabling interrupts for critical section protection.

---

### Alignment with Course Outcomes:

*   **CO1 (Use C features):** While this module focuses on assembly, the concepts of buffers and queues are fundamental to embedded C programming as well. Understanding their assembly implementation provides a deeper insight into how these structures work at a lower level, which can inform C code design (e.g., understanding pointer arithmetic, memory layout).
*   **CO2 (Programmer's view of processor):** This topic directly relates to the programmer's view by showing how registers are used for managing data structures (pointers) and how memory is organized for buffers. It also demonstrates the control flow when interrupts occur and how specific instructions (`CPSID`, `CPSIE`) affect the processor's state.
*   **CO3 (Choose between assembly/C):** By understanding the low-level implementation of buffers and queues in assembly, students can appreciate when assembly might be necessary for absolute control over timing and resource usage in critical I/O paths, versus when higher-level C constructs would be more productive and maintainable for less timing-sensitive operations.

This comprehensive set of notes covers the essential aspects of buffers and queues in ARM assembly programming within the context of interrupt-driven I/O, drawing upon the provided textbook references for foundational understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
