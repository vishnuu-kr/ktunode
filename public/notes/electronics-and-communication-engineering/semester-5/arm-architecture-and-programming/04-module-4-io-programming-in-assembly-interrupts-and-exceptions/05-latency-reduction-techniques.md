---
title: "latency reduction techniques"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb09"
status: "completed"
scrapedAt: "2026-05-23T17:53:41.810Z"
---
## ARM Architecture and Programming: Module 4 - IO Programming in Assembly: Interrupts and Exceptions

### Topic: Latency Reduction Techniques

**Knowledge Level Focus:** K2 (Explanation), K3 (Usage/Choice)

**Course Outcomes Alignment:**
*   **CO1:** Understanding how efficient interrupt handling (a core aspect of latency reduction) impacts C-level embedded software design.
*   **CO2:** Explaining the programmer's view of processor architecture in the context of minimizing interrupt response time.
*   **CO3:** Choosing assembly-level optimizations for latency-critical sections of code.

---

### 1. Introduction to Interrupt Latency

**Definition:** Interrupt latency is the time elapsed from the moment an interrupt signal is asserted to the moment the first instruction of the Interrupt Service Routine (ISR) begins execution. Minimizing this latency is crucial in real-time embedded systems where timely responses to external events are critical.

**Why Reduce Latency?**
*   **Real-time deadlines:** Meeting strict timing requirements for critical tasks.
*   **Data loss prevention:** Ensuring incoming data is processed before it's overwritten.
*   **System responsiveness:** Providing a fluid and predictable user experience.
*   **Avoiding cascading failures:** Preventing one missed deadline from impacting subsequent operations.

**Factors Contributing to Latency:**
*   **Hardware:**
    *   Interrupt controller (NVIC in Cortex-M) configuration and prioritization.
    *   Bus arbitration and signal propagation delays.
    *   Clock speeds and pipeline stages.
*   **Software:**
    *   Current processor state (e.g., executing instruction).
    *   Context switching overhead (saving/restoring registers).
    *   ISR entry and exit code.
    *   ISR execution time.

---

### 2. Understanding the Interrupt Handling Process (Cortex-M Perspective)

To reduce latency, we must understand the steps involved when an interrupt occurs. For ARM Cortex-M processors, the process is largely automated by the Nested Vectored Interrupt Controller (NVIC) and the processor core itself.

**Typical Interrupt Handling Sequence (Simplified):**

1.  **Interrupt Assertion:** An external device asserts an interrupt request line.
2.  **NVIC Detection:** The NVIC detects the asserted interrupt request.
3.  **NVIC Prioritization:** The NVIC checks if the interrupt has a higher priority than the currently executing process. If so, it proceeds.
4.  **Automatic State Saving:** The processor core automatically saves essential registers to the stack (e.g., PC, PSR, R0-R3, R12). This is often referred to as "automatic hardware stacking."
5.  **Vector Fetch:** The NVIC determines the interrupt vector address based on the interrupt source.
6.  **ISR Entry:** The processor loads the PC with the ISR address, effectively jumping to the ISR.
7.  **ISR Execution:** The ISR code executes.
8.  **Return from Interrupt:** The ISR executes a special return instruction (e.g., `BX LR` or `POP {..., PC}` for Cortex-M).
9.  **Automatic State Restoration:** The processor core automatically restores the saved registers from the stack.
10. **Resumption of Interrupted Task:** The interrupted task resumes execution from where it left off.

**Key Hardware Components (Cortex-M):**

*   **Nested Vectored Interrupt Controller (NVIC):**
    *   Manages interrupt prioritization and enabling/disabling.
    *   Supports 256 interrupt sources (including NMI, HardFault, and 16 system exceptions).
    *   Allows programmable priority levels for each interrupt.
    *   Implements preemption: a higher-priority interrupt can interrupt a lower-priority ISR.
*   **System Handler Control and State Register (SHCSR):** Controls certain system handlers like NMI, HardFault, SVC, PendSV, and SysTick.
*   **Vector Table:** A table in memory containing the starting addresses of exception handlers (ISRs).

---

### 3. Latency Reduction Techniques

We can categorize latency reduction techniques into hardware configuration and software (assembly) optimization.

#### 3.1. Hardware Configuration Techniques

These techniques involve configuring the microcontroller's peripherals and the NVIC to minimize delays.

*   **Interrupt Prioritization:**
    *   **Concept:** Assigning lower numerical values (higher priority) to critical interrupts. The NVIC ensures that a higher-priority interrupt will preempt a lower-priority one.
    *   **Implementation (ARM Cortex-M):**
        *   `IPR` (Interrupt Priority) registers in the NVIC. Each interrupt has a programmable priority level (typically 0-255, but implementation-defined ranges exist).
        *   **To reduce latency for a specific interrupt:** Assign it the highest possible priority (e.g., priority 0 or the lowest numerical value).
    *   **Textbook Reference:** Lewis (2e) discusses interrupt prioritization and its role in real-time systems. Yiu (3e) provides detailed explanations of the NVIC and priority grouping.
    *   **Example:** If a UART receive interrupt needs immediate attention to avoid data loss, it should have a higher priority than a timer interrupt used for periodic logging.

*   **Interrupt Grouping and Sub-priorities:**
    *   **Concept:** For Cortex-M devices that support it, the priority field can be split into group priority and sub-priority. This allows for more granular control and helps manage preemption chains.
    *   **Implementation:** The `AIRCR` (Application Interrupt and Reset Control Register) in the NVIC allows configuring priority grouping.
    *   **To reduce latency:** Carefully consider how group and sub-priorities affect preemption. A higher group priority will always preempt a lower group priority, regardless of sub-priority.

*   **Enabling Interrupts Appropriately:**
    *   **Concept:** Ensure interrupts are enabled only when necessary. Disabling unnecessary interrupts reduces the chance of them interfering with critical operations.
    *   **Implementation:**
        *   `ISER` (Interrupt Set-Enable) registers.
        *   `ICER` (Interrupt Clear-Enable) registers.
    *   **To reduce latency:** Only enable the interrupts that are actively required. Disable interrupts that are not currently being serviced or are not needed.

*   **Minimizing ISR Nesting:**
    *   **Concept:** While Cortex-M supports nested interrupts (higher priority interrupting lower priority), excessive nesting can increase the overall latency for lower-priority tasks and complicate reasoning.
    *   **To reduce latency:** Design ISRs to be short and efficient. If a long task needs to be performed, defer it to a task executed by a low-priority thread or a cooperative multitasking scheduler (e.g., using PendSV).

*   **Using Low-Latency Peripherals:**
    *   **Concept:** Select peripherals designed for fast response times. Some peripherals might have configurable latency settings or dedicated DMA channels that can offload processing from the CPU.
    *   **Example:** Using DMA to transfer data from a high-speed ADC to memory without CPU intervention significantly reduces the latency associated with data acquisition.

#### 3.2. Software (Assembly) Optimization Techniques

These techniques focus on optimizing the assembly code within the ISR itself and the surrounding interrupt handling mechanisms.

*   **Minimize Context Saving/Restoring:**
    *   **Concept:** The processor automatically saves some registers. However, if the ISR needs to use additional registers, these must be explicitly saved and restored by the programmer. Minimizing the number of additional registers used directly reduces overhead.
    *   **Implementation (Assembly):**
        *   Be judicious about which registers you use within an ISR.
        *   If you must use general-purpose registers (`R0-R11`), save them at the beginning of the ISR and restore them at the end.
        *   Use specific registers for specific purposes to avoid accidental corruption.
    *   **To reduce latency:**
        *   Only save/restore registers that are absolutely necessary for the ISR's operation and that might be used by the interrupted code.
        *   Consider the processor's register usage conventions.
    *   **Example:**
        ```assembly
        ISR_Handler:
            PUSH    {R4, LR}       ; Save R4 and LR (LR is usually saved by hardware)
                                   ; If R4 is needed for ISR logic
            ; --- ISR code ---
            ; Use R0, R1, R2, R3, R12 which are automatically stacked
            ; Use R4-R11 if explicitly pushed/popped
            ; --- End ISR code ---
            POP     {R4, LR}       ; Restore R4 and LR
            SUBS    PC, LR, #4     ; Return from interrupt (for Cortex-M)
                                   ; The hardware automatically handles PC and PSR.
                                   ; The SUBS instruction subtracts 4 from LR,
                                   ; effectively returning to the instruction after the one that was interrupted.
        ```
    *   **Important Point:** For Cortex-M, the processor automatically stacks `R0-R3`, `R12`, `LR`, `PC`, and `PSR`. You only need to manually save registers that your ISR will modify and that the interrupted code might rely on (typically `R4-R11`). The `SUBS PC, LR, #4` instruction (or similar) is the correct way to return from an exception on Cortex-M.

*   **Optimize ISR Entry and Exit Code:**
    *   **Concept:** The instructions executed to enter and exit an ISR contribute to latency. While much of this is hardware-managed, the return instruction can be optimized.
    *   **Implementation (Assembly):**
        *   **Return Instruction:** The `SUBS PC, LR, #4` instruction is generally efficient. `LR` contains the return address. The `#4` accounts for the pipeline.
        *   Avoid complex sequences for returning.
    *   **Textbook Reference:** Yiu (3e) details the exception return mechanism.

*   **Short and Efficient ISR Logic:**
    *   **Concept:** The most significant factor in ISR latency is the execution time of the ISR code itself.
    *   **To reduce latency:**
        *   **Keep ISRs focused:** Perform only the essential actions.
        *   **Use assembly for performance-critical sections:** If a specific part of the ISR needs to be extremely fast, write it in assembly.
        *   **Avoid loops and complex calculations:** If extensive processing is needed, offload it to a background task.
        *   **Use efficient instructions:** Leverage ARM's instruction set for speed.
        *   **Memory Access Optimization:** Minimize memory accesses, especially to slow peripherals. Use registers as much as possible.
    *   **Example (Assembly for a simple UART RX ISR):**
        ```assembly
        UART_RX_ISR:
            PUSH    {R4, LR}          ; Save registers if needed (assume R4 used for buffer pointer)

            LDR     R1, =UART_DR      ; Load address of UART Data Register
            LDRB    R0, [R1]          ; Read received byte into R0 (automatically stacked)

            LDR     R4, =RX_BUFFER    ; Load address of receive buffer
            STRB    R0, [R4]          ; Store received byte to buffer

            ADD     R4, R4, #1        ; Increment buffer pointer
            LDR     R1, =BUFFER_END   ; Load end of buffer address
            CMP     R4, R1            ; Check if buffer is full
            BLT     .no_wrap          ; If not full, branch
            MOV     R4, =RX_BUFFER    ; Wrap buffer pointer if full
        .no_wrap:
            STR     R4, =RX_BUFFER    ; Store updated buffer pointer back (if volatile)

            ; Acknowledge interrupt if required by hardware
            ; (Specific to microcontroller peripheral)

            POP     {R4, LR}          ; Restore registers
            SUBS    PC, LR, #4        ; Return from interrupt
        ```
        *This example assumes `RX_BUFFER` is a volatile global variable holding the buffer pointer.*

*   **Compiler Optimization Flags:**
    *   **Concept:** When using C, compiler optimization flags are crucial. `-O3` or `-Os` (optimize for size, which can sometimes lead to better performance in embedded) can significantly improve ISR code efficiency.
    *   **CO1 Alignment:** Understanding how these flags affect the generated assembly is key for C programmers in embedded systems.
    *   **CO3 Alignment:** Knowing when to drop down to assembly for specific latency-critical ISR routines is a choice driven by performance needs.

*   **Using the SysTick Timer for Deferred Tasks:**
    *   **Concept:** The SysTick timer is a versatile 24-bit down counter in Cortex-M. It can be configured to generate periodic interrupts.
    *   **To reduce latency:** Instead of performing long operations directly in a peripheral ISR, the ISR can simply signal a flag or increment a counter. A lower-priority task, triggered by the SysTick interrupt, can then process this flag/counter. This keeps the primary ISR short and responsive.
    *   **PendSV Handler:** Cortex-M's PendSV (Pendable Service) is a low-priority exception ideal for context switching and deferred processing, often triggered by SysTick or other events.

*   **Disabling Interrupts Briefly (When Necessary):**
    *   **Concept:** In extremely critical sections of an ISR, it might be necessary to temporarily disable *all* interrupts or *lower-priority* interrupts to prevent them from interfering.
    *   **Implementation:**
        *   `CPSID I` (Clear PRIMASK bit): Disables all maskable interrupts.
        *   `CPSIE I` (Set PRIMASK bit): Enables all maskable interrupts.
        *   More granular control using `BASEPRI` register to block interrupts below a certain priority level.
    *   **To reduce latency:** Use this sparingly and for very short durations. The goal is to prevent higher-priority interrupts from preempting a critical part of a lower-priority ISR, not to completely stall the system.
    *   **Example:**
        ```assembly
        Critical_Section_Start:
            MRS     R0, PRIMASK       ; Read current PRIMASK state
            PUSH    {R0}              ; Save PRIMASK state
            CPSID   I                 ; Disable all interrupts

            ; --- Critical section code ---

        Critical_Section_End:
            POP     {R0}              ; Restore previous PRIMASK state
            MSR     PRIMASK, R0       ; Apply restored PRIMASK
        ```
        *This is a simplified example; using `BASEPRI` offers more flexible control.*

---

### 4. Practice Questions and Exercises

**Question 1:**
Explain the role of the NVIC in interrupt latency. How can configuring interrupt priorities in the NVIC help reduce latency for critical events? (CO2, K2)

**Answer:**
The NVIC (Nested Vectored Interrupt Controller) is responsible for managing interrupt requests from peripherals and exceptions. It prioritizes these requests, allowing higher-priority interrupts to preempt lower-priority ones. By assigning higher priorities (lower numerical values) to critical interrupts, the NVIC ensures that the processor responds to these events more quickly, thus reducing the latency from the event's assertion to the start of its handling routine.

**Question 2:**
You are designing a real-time system that needs to sample sensor data at a high rate and simultaneously communicate over a serial port. Which interrupt would you likely assign a higher priority, and why? How would you implement this priority in assembly code (conceptually)? (CO2, CO3, K2, K3)

**Answer:**
The sensor sampling interrupt would likely need a higher priority. This is because missing a sample due to interrupt latency could lead to data loss or inaccurate readings, directly impacting the integrity of the sensor data. The serial port communication, while important, might have more buffer space or tolerate slight delays without critical data loss compared to high-frequency sampling.

In assembly, this would involve configuring the NVIC's Interrupt Priority Registers (`IPR`) for the sensor interrupt with a lower numerical priority value than the serial port interrupt.

**Question 3:**
Consider a simple ISR that reads a byte from a UART and stores it in a buffer. What are the key assembly instructions that contribute to the latency of entering and exiting this ISR on a Cortex-M processor? How can you minimize the overhead of these instructions? (CO2, K2)

**Answer:**
The key instructions contributing to entry/exit latency are those related to the automatic hardware stacking of registers (`PC`, `LR`, `PSR`, `R0-R3`, `R12`) by the processor upon interrupt acknowledgement, and the specific return instruction used by the ISR. For Cortex-M, the `SUBS PC, LR, #4` instruction is used to return. To minimize this overhead:
*   Ensure the ISR uses minimal additional registers that require manual stacking/unstacking.
*   The return instruction (`SUBS PC, LR, #4`) is already optimized by the hardware for efficient exception return.

**Question 4 (Practical Exercise):**
Imagine you have an interrupt from a button press that needs an immediate LED toggle. Write a conceptual outline of an assembly ISR for this, focusing on minimizing register usage and ensuring a quick return.

**Conceptual Assembly ISR Outline:**

```assembly
BUTTON_ISR:
    ; No PUSH/POP needed if only hardware-stacked registers are used
    ; and no modification of R4-R11 occurs.

    ; --- ISR Logic ---
    ; Read current LED state (e.g., from a memory-mapped register)
    ; Toggle the LED state
    ; Write new LED state back to the register
    ; (Keep these operations very brief)

    ; Acknowledge interrupt if required by the button peripheral

    ; Return from interrupt
    SUBS    PC, LR, #4
```

**Answer:**
The key here is to avoid any `PUSH` or `POP` operations for general-purpose registers `R4-R11` if they are not used within the ISR. The processor automatically saves `PC`, `LR`, `PSR`, `R0-R3`, and `R12`. By keeping the ISR logic confined to reading and writing peripheral registers (which are often memory-mapped I/O) and not needing intermediate calculations in `R4-R11`, we minimize manual context switching overhead. The `SUBS PC, LR, #4` is the standard, efficient return instruction.

**Question 5:**
What is the potential drawback of using very high priorities for many interrupts? How can techniques like using `BASEPRI` or deferring tasks help mitigate this? (CO1, CO2, K2)

**Answer:**
The drawback of assigning very high priorities to many interrupts is that it can lead to excessive interrupt nesting and **priority inversion**. Priority inversion occurs when a higher-priority task is blocked waiting for a resource that is currently held by a lower-priority task. If too many interrupts have high priorities, they can constantly preempt each other, leading to unpredictable delays and potentially starving lower-priority, but still important, tasks.

*   **`BASEPRI`:** This register allows the processor to block interrupts below a certain priority level. By setting `BASEPRI`, a currently executing ISR can effectively ignore lower-priority interrupts, ensuring its critical section is not interrupted by them. This reduces the impact of having many "high" priority interrupts on each other.
*   **Deferring Tasks:** Instead of doing all work in the high-priority ISR, it can perform minimal work (e.g., set a flag) and then trigger a low-priority task (e.g., via PendSV) to do the bulk of the processing. This keeps the initial ISR latency very low, while still ensuring the work gets done eventually, without disrupting other high-priority events. This aligns with CO1 by showing how interrupt handling strategies influence C-level task management.

---

### 5. Important Points to Remember

*   **Latency is the time from interrupt assertion to ISR start.**
*   **Cortex-M automates much of the context saving/restoring.** You only need to save registers your ISR modifies and might corrupt the interrupted context.
*   **NVIC prioritization is key:** Assign lower numerical values to critical interrupts.
*   **Keep ISRs short and focused:** Perform minimal work.
*   **Assembly is powerful for critical sections:** Use it to optimize very time-sensitive ISR logic.
*   **Minimize register usage:** Especially registers not automatically stacked (`R4-R11`).
*   **`SUBS PC, LR, #4` is the standard Cortex-M return instruction.**
*   **Consider deferring tasks:** Use flags and low-priority handlers (e.g., PendSV) for non-time-critical work within an ISR.
*   **Compiler flags (`-O3`, `-Os`) are essential for C ISRs.**
*   **`BASEPRI` offers fine-grained interrupt masking.**

---

This concludes the notes on latency reduction techniques for interrupts and exceptions in ARM Architecture and Programming. By understanding the interrupt handling process and applying these hardware and software optimization strategies, developers can build more responsive and reliable embedded systems.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
