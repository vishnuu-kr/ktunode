---
title: "synchronization"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb0b"
status: "completed"
scrapedAt: "2026-05-23T17:53:43.199Z"
---
# ARM Architecture and Programming: Module 4 - IO Programming in Assembly: Interrupts and Exceptions

## Topic: Synchronization

This topic explores the critical concept of **synchronization** within the context of interrupt and exception handling in ARM assembly programming. Synchronization is essential for managing concurrent access to shared resources and ensuring predictable program behavior when interrupts or exceptions alter the normal program flow.

---

### Learning Outcomes Covered:

*   **Understanding Synchronization Mechanisms:** Grasp the need for synchronization and learn about various mechanisms used to achieve it in ARM assembly, particularly in interrupt-driven environments.
*   **Protecting Shared Resources:** Learn how to prevent race conditions and data corruption when multiple execution contexts (e.g., main program and interrupt service routines - ISRs) access the same memory locations or peripherals.
*   **Implementing Synchronization Primitives:** Gain practical knowledge of how to implement common synchronization primitives like semaphores, mutexes, and atomic operations in ARM assembly.
*   **Disabling/Enabling Interrupts:** Understand how temporarily disabling interrupts can be a form of synchronization, albeit with trade-offs.
*   **Interfacing with Peripherals:** Recognize how synchronization plays a role in coordinating interactions with hardware peripherals that can be triggered by or trigger interrupts.

---

### Key Concepts and Definitions

#### 1. Synchronization

**Definition:** Synchronization refers to the coordination of the execution of multiple processes or threads that access shared resources. In embedded systems, this often involves coordinating the main program flow with interrupt service routines (ISRs) or multiple ISRs.

**Why is Synchronization Necessary?**

*   **Race Conditions:** Occur when the outcome of an operation depends on the unpredictable timing of multiple concurrent execution flows accessing shared data. This can lead to data corruption or incorrect program behavior.
*   **Shared Resources:** These include global variables, peripheral registers, memory buffers, and hardware devices.

#### 2. Atomic Operations

**Definition:** An atomic operation is a sequence of one or more operations that are guaranteed to execute as a single, indivisible unit. No other process or thread can interrupt or interfere with an atomic operation once it has begun.

*   **Importance:** Atomic operations are fundamental building blocks for synchronization. If an operation that modifies shared data is atomic, race conditions are prevented for that specific operation.

**Examples in ARM Assembly (Cortex-M):**

*   **Load-Exclusive/Store-Exclusive (LDREX/STREX):** These instructions are specifically designed for atomic operations in ARMv7-M and later.
    *   `LDREX Rd, [Rn]` : Loads a value from memory address `Rn` into `Rd` and marks the memory location for a subsequent `STREX`.
    *   `STREX Rt, Rd, [Rn]` : Attempts to store the value in `Rd` to the memory address `Rn`. If the memory location has not been modified by another processor/peripheral since the preceding `LDREX`, the store succeeds (returns 0 in `Rt`); otherwise, it fails (returns 1 in `Rt`).

#### 3. Disabling/Enabling Interrupts

**Definition:** Temporarily preventing interrupts from being serviced by the processor.

*   **Mechanism:** This is typically achieved by manipulating the **Interrupt Mask Register (IMR)** or the **Primask Register (PRIMASK)**.
    *   **`CPSID I` (Clear Instruction Set Disable, Interrupts)**: Disables interrupts (sets PRIMASK.PM to 1).
    *   **`CPSIE I` (Clear Instruction Set Enable, Interrupts)**: Enables interrupts (clears PRIMASK.PM to 0).
*   **Synchronization Use:** Can be used to protect a critical section of code that accesses shared resources. By disabling interrupts, you ensure that no ISR can modify the shared resource while the critical section is executing.

**Trade-offs:**

*   **Pros:** Simple to implement, guarantees atomicity for the protected code.
*   **Cons:**
    *   **Latency:** Any interrupts that occur during the disabled period will be delayed, potentially leading to missed deadlines or protocol violations for time-critical peripherals.
    *   **Priority Inversion:** A low-priority ISR might be delayed indefinitely if a high-priority ISR is disabled for a long time by the main program.
    *   **Not Suitable for Multi-core:** This method is only effective for single-core processors or for synchronizing between the main program and ISRs on the same core.

#### 4. Semaphores

**Definition:** A semaphore is a synchronization primitive that controls access to a shared resource by a limited number of processes or threads. It's essentially an integer variable that is accessed only through two standard operations: `wait` (or `P`) and `signal` (or `V`).

*   **`wait(S)`:** If `S > 0`, decrement `S`. If `S = 0`, block the process until `S > 0`.
*   **`signal(S)`:** Increment `S`. If there are processes blocked on `S`, wake one up.

**Types of Semaphores:**

*   **Binary Semaphore:** Can only take values 0 or 1. Can be used like a mutex.
*   **Counting Semaphore:** Can take any non-negative integer value. Used to control access to a pool of resources.

**Synchronization Use:**

*   **Controlling Access to Shared Buffers:** A counting semaphore can track the number of available slots in a buffer.
*   **Signaling Events:** A binary semaphore can be used to signal that an event has occurred (e.g., data is ready in a buffer).

**Implementation in ARM Assembly:**

Implementing semaphores robustly in assembly often requires atomic operations or careful interrupt disabling. For example, a `wait` operation might involve:

1.  Disabling interrupts.
2.  Checking the semaphore value.
3.  If value > 0, decrement and enable interrupts.
4.  If value = 0, block the task and enable interrupts (requires an OS or similar mechanism for blocking).

#### 5. Mutexes (Mutual Exclusion)

**Definition:** A mutex is a synchronization primitive that grants exclusive access to a shared resource. Only one thread or process can hold the mutex at a time.

*   **`lock(M)`:** If the mutex `M` is available, acquire it. If not, block until it becomes available.
*   **`unlock(M)`:** Release the mutex `M`, making it available for others.

**Synchronization Use:**

*   Protecting critical sections of code where shared variables are modified.

**Implementation in ARM Assembly:**

Similar to binary semaphores, mutexes can be implemented using atomic operations or interrupt disabling. The `LDREX`/`STREX` pair is ideal for building mutexes:

1.  **Lock Acquisition:**
    *   Attempt to atomically set a flag at a memory location to indicate the mutex is held.
    *   If successful, the mutex is acquired.
    *   If failed (another core/ISR already set the flag), retry or block.

#### 6. Critical Sections

**Definition:** A critical section is a segment of code that accesses shared resources and must not be executed by more than one thread or ISR concurrently to prevent race conditions.

**Synchronization Use:**

*   The primary purpose of synchronization mechanisms like mutexes, semaphores, and disabling interrupts is to protect critical sections.

---

### Aligning with Course Outcomes:

*   **CO1 (C Features in Embedded):** While this topic focuses on assembly, understanding synchronization in assembly provides the foundation for how these concepts are managed in C. C's `volatile` keyword, atomic built-ins (e.g., GCC's `__atomic_compare_exchange_n`), and RTOS primitives (semaphores, mutexes) all rely on the underlying hardware synchronization capabilities.
    *   **Example:** In C, `volatile int shared_data;` is necessary when shared between main and ISRs. Synchronization mechanisms ensure `shared_data` is updated correctly.
*   **CO2 (Programmer's View of Processor):** This topic directly relates to the programmer's view of the processor by explaining how interrupts and exceptions alter execution flow and necessitate synchronization. Understanding registers like `PRIMASK` (via `CPSID`/`CPSIE`) and the `LDREX`/`STREX` instruction set provides insight into the processor's capabilities for managing concurrent access.
*   **CO3 (Assembly vs. C Choice):** Understanding the complexities of implementing synchronization in assembly (especially atomic operations, blocking mechanisms) highlights why higher-level languages like C, coupled with RTOS, are often preferred for managing synchronization in complex embedded systems. However, for low-level drivers or performance-critical sections, assembly remains relevant.
    *   **Example:** Implementing a lock-free queue in assembly using `LDREX`/`STREX` can be significantly more challenging and error-prone than using RTOS primitives in C.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### Textbooks and References Integration:

*   **Lewis (Fundamentals of Embedded Software):** Lewis's text would likely cover the *need* for synchronization, particularly in the context of I/O devices that generate interrupts. It might introduce concepts like critical sections and perhaps touch upon basic interrupt disabling as a synchronization method.
    *   **Likely Content:** Chapter on interrupts discussing ISRs and their interaction with the main program. Potential mention of disabling interrupts to protect shared data in simple scenarios.
*   **Yiu (The Definitive Guide to ARM Cortex-M):** Yiu's book is the most authoritative source for ARM Cortex-M specifics. It will undoubtedly detail the `LDREX`/`STREX` instructions, the behavior of the `PRIMASK` register, and how these can be used for implementing atomic operations and synchronization primitives. It might also discuss concepts like **Load-Linked/Store-Conditional (LL/SC)** which is the generic ARM term for LDREX/STREX.
    *   **Likely Content:** Detailed explanation of the Memory Model, `LDREX`/`STREX` instructions, `PRIMASK` register, and potential examples of their use in multi-processor synchronization or protecting shared resources between ISRs and main code.
*   **Zhu (Embedded Systems with ARM Cortex M):** Zhu's book, by covering both assembly and C, would provide practical examples. It might show how to implement basic synchronization in assembly, perhaps using interrupt disabling, and then contrast it with simpler approaches in C or RTOS.
    *   **Likely Content:** Examples of ISRs and how they can interfere with main code. Possible assembly snippets demonstrating interrupt disabling. Introduction to C constructs for synchronization if C is also covered.

---

### Practice Questions and Exercises:

**Question 1:**

Consider a scenario where a Timer ISR updates a shared counter variable `shared_counter`. The main program also increments `shared_counter`. Explain why a race condition can occur and how you would prevent it using ARM assembly by temporarily disabling interrupts.

**Question 2:**

What is the fundamental difference between the `LDREX` and `STREX` instruction pair and a simple `LDR` followed by `STR` when accessing shared data?

**Question 3:**

You are writing an ISR that needs to read from a peripheral status register and then based on the status, update a shared global variable. The main program also modifies this global variable. What is the primary synchronization concern here, and what are two potential assembly-level solutions? Discuss the trade-offs of each solution.

**Question 4:**

Describe a situation where using `CPSID I` to protect a critical section could lead to undesirable consequences.

---

### Answers to Practice Questions:

**Answer 1:**

*   **Race Condition:** A race condition occurs if the main program reads `shared_counter` at the same time the ISR is updating it, or if the ISR is interrupted by the main program while updating it. For example:
    1.  Main program reads `shared_counter` (e.g., value is 5).
    2.  ISR is triggered, increments `shared_counter` to 6.
    3.  Main program continues its operation based on the old value (5), potentially leading to an incorrect calculation or state.
*   **Prevention using Interrupt Disabling:**

    ```assembly
    ; Main program code to safely increment shared_counter
    ; ...
    CPSID I          ; Disable interrupts (sets PRIMASK.PM = 1)
    ; Critical Section Start
    LDR R0, =shared_counter
    LDR R1, [R0]     ; Load current value
    ADD R1, R1, #1   ; Increment value
    STR R1, [R0]     ; Store updated value
    ; Critical Section End
    CPSIE I          ; Enable interrupts (clears PRIMASK.PM = 0)
    ; ...
    ```

    This ensures that no interrupt can occur between reading and writing `shared_counter`, making the increment operation atomic with respect to interrupts.

**Answer 2:**

The `LDREX`/`STREX` pair provides an **atomic** way to perform read-modify-write operations on memory, specifically designed for synchronization in multi-processor or interrupt-driven environments.

*   `LDREX` loads a value from memory and marks the address.
*   `STREX` attempts to store a value to that marked address. The `STREX` instruction returns a condition code (in `Rt`) indicating success or failure. If another agent (another core or an ISR) modified the memory location between `LDREX` and `STREX`, `STREX` fails, preventing a corrupted update.

A simple `LDR` followed by `STR` is **not atomic**. An interrupt could occur between the `LDR` and the `STR`, allowing another execution context to modify the data, leading to a race condition and incorrect data being stored by the first context.

**Answer 3:**

*   **Primary Synchronization Concern:** Protecting the shared global variable from concurrent modification by the ISR and the main program. If both attempt to write to it without coordination, the final value could be unpredictable.
*   **Potential Solutions:**
    1.  **Disabling Interrupts:** The ISR could disable all interrupts (or at least interrupts of lower or equal priority that might access the same variable) before accessing the shared variable and re-enable them afterward.
        ```assembly
        ; In ISR before accessing shared variable:
        MRS R0, PRIMASK     ; Save current PRIMASK state
        PUSH {R0}           ; Push saved PRIMASK onto stack
        CPSID I             ; Disable all interrupts

        ; Access shared variable (critical section)
        ; ...

        POP {R0}            ; Pop saved PRIMASK state
        MSR PRIMASK, R0     ; Restore original PRIMASK state (re-enables if was enabled)
        ```
        **Trade-offs:** Simplicity. **Cons:** Increases interrupt latency for all disabled interrupts. Can lead to priority inversion if a higher priority task is blocked by this.

    2.  **Using Atomic Operations (LDREX/STREX):** If the shared variable is a single word (32-bit on Cortex-M), the ISR could use `LDREX`/`STREX` to update it atomically.
        ```assembly
        ; In ISR to update shared_var atomically
        ; Assume shared_var_addr is in R1
        LOOP_UPDATE:
        LDREX R0, [R1]      ; Load shared_var into R0
        ADD R0, R0, #1      ; Modify the value (example: increment)
        STREX R2, R0, [R1]  ; Try to store R0 back. R2 = 0 on success, 1 on failure.
        CMP R2, #0          ; Check if store was successful
        BNE LOOP_UPDATE     ; If not successful, retry
        ```
        **Trade-offs:** More complex to implement correctly. **Pros:** Does not disable interrupts for other potential ISRs, thus minimizing interrupt latency. Generally preferred for modern synchronization.

**Answer 4:**

Using `CPSID I` to protect a critical section can lead to undesirable consequences if:

*   **Missed Deadlines:** If the critical section is long, and there are time-critical peripherals that generate interrupts (e.g., communication interfaces, real-time clocks), those interrupts might be delayed. If a peripheral requires a timely response, this delay could cause data loss, protocol errors, or missed deadlines, potentially crashing the system.
*   **Priority Inversion:** In a preemptive multitasking environment (even if implemented manually), if a high-priority task is waiting for a resource that is currently being accessed by a low-priority task within a `CPSID I`-protected critical section, the high-priority task will be blocked until the critical section completes. This is a classic priority inversion problem.

---

### Important Points to Remember:

*   **Synchronization is Crucial:** Never underestimate the need for synchronization when multiple execution contexts share resources.
*   **Atomic Operations are Your Friend:** `LDREX`/`STREX` are powerful tools for implementing thread-safe and ISR-safe operations on shared data.
*   **Interrupt Disabling is a Double-Edged Sword:** Use it judiciously. Keep critical sections protected by interrupt disabling as short as possible to minimize latency impact.
*   **Context Matters:** The best synchronization strategy depends on the specific requirements: single-core vs. multi-core, real-time constraints, complexity of shared data structures, and whether an RTOS is present.
*   **Volatile Keyword in C:** When transitioning from assembly to C, remember the `volatile` keyword is essential for variables shared between different execution contexts (main vs. ISR, or between tasks) to prevent the compiler from optimizing away reads or writes that might be necessary due to external events.

---