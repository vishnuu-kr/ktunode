---
title: "C run-time environment"
subject: "ARM ARCHITECTURE AND PROGRAMMING"
module: "Module 4: IO programming in assembly: Interrupts and exceptions"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c460b09ce205780feb14"
status: "completed"
scrapedAt: "2026-05-23T17:53:49.939Z"
---
## ARM Architecture and Programming: Module 4 - IO Programming in Assembly: Interrupts and Exceptions

### Topic: C Run-Time Environment

This topic explores how the C programming language interacts with the underlying ARM processor, particularly in the context of embedded systems and how it manages execution flow, including the crucial aspects of interrupts and exceptions. Understanding the C run-time environment is vital for writing efficient, reliable, and predictable embedded software, especially when dealing with hardware interactions.

---

### Learning Outcomes Covered:

*   **Understanding the C Run-Time Environment:** How C code is structured and executed on an ARM processor, including startup code, memory layout, and function calls.
*   **C and Assembly Interfacing:** How C functions can call assembly routines and vice-versa, crucial for low-level hardware control and optimization.
*   **Stack Management in C:** The role of the stack in function calls, parameter passing, and local variable storage, with implications for interrupt service routines (ISRs).
*   **Exception Handling in C:** How C can be used to handle exceptions and interrupts, including the use of function pointers and assembly glue code.
*   **Memory Model and C:** How the C memory model relates to the ARM processor's memory map, including global variables, static variables, and heap.

---

### Key Concepts and Definitions:

*   **C Run-Time Environment (RTE):** The software infrastructure that supports the execution of C programs on a specific processor. This includes startup code, standard library functions, memory management, and exception/interrupt handling mechanisms.
*   **Startup Code (Runtime Initialization):** A small piece of assembly code that runs before the `main()` function. Its primary responsibilities include:
    *   Initializing the stack pointer.
    *   Setting up the Vector Table (or the initial vector table base address).
    *   Initializing the Data Segment (copying initialized global/static variables from ROM to RAM).
    *   Clearing the Block Started by Symbol (BSS) segment (zeroing uninitialized global/static variables).
    *   Calling the `main()` function.
    *   (Lewis, Chapter 5: Program Execution and Startup)
*   **Vector Table:** A table in memory that contains the starting addresses of interrupt and exception handlers. When an interrupt or exception occurs, the processor uses the vector table to find the appropriate handler.
*   **Stack:** A region of memory used for:
    *   Storing return addresses for function calls.
    *   Passing function arguments.
    *   Storing local variables.
    *   Saving register values during function calls and context switching (important for interrupts).
    *   (Lewis, Chapter 3: Processor State and Registers, Stack Operation)
    *   (Yiu, Chapter 2: The Cortex-M Core Registers, Stack Pointer)
*   **Stack Pointer (SP):** A register that points to the top of the stack. In ARM, the stack typically grows downwards.
*   **Frame Pointer (FP) / Frame Pointer (R7):** A register often used to point to the base of the current function's stack frame, making it easier to access local variables and arguments, especially in nested function calls.
*   **Link Register (LR):** Stores the return address from a function call. When a function returns, the `BX LR` (Branch and Exchange to Link Register) instruction is used to return to the caller.
*   **Interrupt Service Routine (ISR) / Interrupt Handler:** A function that is executed when a specific interrupt signal is received by the processor.
*   **Exception Handler:** A function that is executed when an exception (e.g., fault, system call) occurs.
*   **`setjmp`/`longjmp`:** C standard library functions that provide a way to perform non-local jumps, similar to exceptions in other languages. `setjmp` saves the current execution environment, and `longjmp` restores it.
*   **`volatile` Keyword:** An essential keyword in C when working with hardware registers or shared memory. It tells the compiler that a variable's value can change at any time without any action on the part of the compiler. This prevents the compiler from optimizing away reads or writes to such variables.
*   **Memory Segments:**
    *   **Text Segment (.text):** Contains the executable code.
    *   **Data Segment (.data):** Contains initialized global and static variables.
    *   **BSS Segment (.bss):** Contains uninitialized global and static variables (typically initialized to zero by startup code).
    *   **Stack Segment:** Used for function calls, local variables, and temporary storage.
    *   **Heap Segment:** Used for dynamic memory allocation (`malloc`, `free`).

---

### C Run-Time Environment in Detail:

#### 1. Startup Code and Initialization

The journey of a C program on an ARM Cortex-M microcontroller begins with startup code, often written in assembly. This code is crucial for preparing the processor for C execution.

*   **Purpose:** To establish a functional environment for the C runtime.
*   **Typical Steps:**
    1.  **Stack Initialization:** The Stack Pointer (SP) is initialized to the top of the pre-allocated stack memory. This ensures that function calls and local variable allocations have a place to reside.
        *   **Example:** `LDR R0, =_stack_top` followed by `MOV SP, R0`.
    2.  **Vector Table Setup:** The processor's Vector Table Offset Register (VTOR) is loaded with the base address of the interrupt vector table. This table is typically located at the beginning of flash memory.
        *   **Example:** `LDR R0, =__Vectors` (where `__Vectors` is a symbol pointing to the start of the vector table) followed by `LDR R1, =0xE000ED08` (address of VTOR) and `STR R0, [R1]`. (Yiu, Chapter 13: The System Control Block (SCB) and Memory Protection Unit (MPU), VTOR)
    3.  **Data Segment Initialization:** Global and static variables that are initialized in the C code are stored in the `.data` section of the executable image in flash memory. The startup code copies these values from flash to their RAM locations.
        *   **Example:** A loop copying data from a source address (in `.data`) to a destination address (in RAM).
    4.  **BSS Segment Initialization:** Uninitialized global and static variables (those declared without an explicit initial value) reside in the `.bss` section. This section is not stored in flash as it's all zeros. The startup code zeros out this memory region.
        *   **Example:** A loop setting memory locations to zero.
    5.  **Calling `main()`:** After the essential initialization, the startup code calls the `main()` function, which is the entry point for the user's application code.
    6.  **Infinite Loop (if `main` returns):** If `main()` returns (which it shouldn't in an embedded system), the startup code typically enters an infinite loop to prevent the processor from executing undefined code.

*   **Textbook Reference:** Lewis (2e) covers program execution and startup in Chapter 5, explaining the role of the startup code and the memory segments.

#### 2. Stack Management in C and Interrupts

The stack is central to C's function call mechanism and is critically important for handling interrupts.

*   **Function Call Mechanism (C):**
    *   When a function `foo()` calls `bar()`, the return address (the instruction after the call in `foo()`) is pushed onto the stack.
    *   Arguments for `bar()` are pushed onto the stack (or passed in registers, depending on the calling convention).
    *   `bar()` then sets up its own stack frame, potentially pushing registers it will use (e.g., LR, FP) to preserve them.
    *   Local variables for `bar()` are allocated on the stack.
    *   Upon return from `bar()`, its stack frame is deallocated, the return address is popped from the stack, and execution continues in `foo()`.
*   **Stack Operation in Interrupts:**
    *   When an interrupt occurs, the processor automatically saves the current Program Status Register (PSR) and Program Counter (PC) onto the stack. This is the processor's *automatic context saving*.
    *   The exception handler (ISR) then takes over. If the ISR itself calls other functions or uses local variables, it must manage its stack usage.
    *   **Crucially:** The ISR might need to save additional registers that it modifies, beyond what the processor automatically saves. These are typically pushed onto the stack at the beginning of the ISR and popped before returning. This is essential to ensure that the interrupted task can resume execution exactly as it was.
    *   **ARM Procedure Call Standard (AAPCS):** Specifies how registers are used for function calls. For example, R0-R3 are used for arguments and return values, R4-R11 are callee-saved (must be preserved by the called function), and LR and PC are important for control flow.
    *   (Yiu, Chapter 3: The Cortex-M Core Registers, Stack Pointer; Chapter 8: The Cortex-M Exception Model, Exception entry and return)
*   **Example:**
    ```c
    // Inside an ISR (simplified)
    void Timer_ISR(void) {
        // Save registers that will be modified (e.g., R4-R7)
        // This is often done automatically by compiler-generated ISR wrappers
        // or explicitly in assembly.
        // ... access hardware registers ...
        // Example: if using a function like delay_ms() which might modify R4-R7
        // push {r4-r7, lr}; // Assembly to save registers

        // ... C code interacting with peripherals ...

        // Restore registers before returning
        // pop {r4-r7, pc}; // Assembly to restore registers and return
    }
    ```
    The compiler often generates assembly wrappers around C ISRs to handle the automatic saving and restoring of registers according to the AAPCS and interrupt handling conventions.

*   **Important Point:** In embedded systems, it's vital to ensure that the stack size allocated is sufficient for the deepest function call nesting, including the calls made within ISRs. Stack overflow can lead to unpredictable behavior or crashes.

#### 3. C and Assembly Interfacing

Bridging the gap between C and assembly is fundamental for embedded programming.

*   **Calling Assembly from C:**
    *   Declare the assembly function prototype in C.
    *   Link the compiled assembly object file with the C object file.
    *   **Example:**
        *   `my_assembly_routines.s`:
            ```assembly
            .global add_asm
            .type add_asm, %function
            add_asm:
                ADD r0, r0, r1  @ Add r1 to r0 (arguments passed in r0, r1)
                BX lr           @ Return to caller
            .size add_asm, .-add_asm
            ```
        *   `main.c`:
            ```c
            extern int add_asm(int a, int b); // Declare the assembly function

            int main(void) {
                int result = add_asm(5, 3); // Call the assembly function
                // ...
                return 0;
            }
            ```
*   **Calling C from Assembly:**
    *   The assembly code can call a C function as if it were any other function, passing arguments in registers according to the AAPCS.
    *   **Example:**
        *   `main.c`:
            ```c
            int add_c(int a, int b) {
                return a + b;
            }

            int main(void) {
                // ...
                return 0;
            }
            ```
        *   `my_assembly_routines.s`:
            ```assembly
            .global call_c_from_asm

            .global main // Assuming main is defined elsewhere, or we're calling it
            extern add_c // Declare the C function to be called

            .type call_c_from_asm, %function
            call_c_from_asm:
                MOV r0, #10     @ First argument for add_c
                MOV r1, #20     @ Second argument for add_c
                BL add_c        @ Branch and Link to call add_c
                                @ The result will be in r0
                BX lr           @ Return
            .size call_c_from_asm, .-call_c_from_asm
            ```
*   **Inline Assembly:** Many compilers allow embedding assembly instructions directly within C code using `__asm` or `asm` keywords. This is useful for short, performance-critical sections.
    *   **Example:**
        ```c
        int x = 10;
        int y;
        __asm__ volatile (
            "MOV %0, %1\n"  // Move the value of x (operand 1) to y (operand 0)
            : "=r" (y)      // Output operand: y, '=r' means writeable register
            : "r" (x)       // Input operand: x, 'r' means readable register
        );
        ```
    *   (Lewis, Chapter 5: Program Execution and Startup - often discusses linking and integration)
    *   (Yiu, Chapter 7: The Cortex-M Instruction Set Architecture - fundamental for writing assembly)

#### 4. Exception Handling in C

While direct C code cannot typically *catch* hardware interrupts like a `try-catch` block, C can be used to *implement* the handlers.

*   **ISR Implementation:** ISRs are usually written as C functions. The startup code or a C runtime library function is responsible for registering these C functions with the vector table.
*   **Function Pointers:** The vector table itself often contains entries that are function pointers. The startup code might initialize these pointers to point to a default handler, or the application can set them to point to its specific C ISR functions.
    *   **Example (Conceptual):**
        ```c
        // In startup_stm32fxxx.c or similar
        void Default_Handler(void) {
            while(1); // Infinite loop for undefined handlers
        }

        // ISR for Timer 2
        void TIM2_IRQHandler(void) {
            // C code to handle Timer 2 interrupt
            // Read/write peripheral registers using volatile pointers
            volatile uint32_t *TIM2_SR = (uint32_t *)0x40000000; // Example TIM2 status register
            if (*TIM2_SR & (1 << 0)) { // Check for Update Interrupt Flag
                // Clear the flag
                *TIM2_SR &= ~(1 << 0);
                // Perform actions ...
            }
        }

        // Vector table definition (often in assembly or a specific C file)
        const uint32_t *Vectors[] __attribute__((section(".vectors"))) = {
            (uint32_t)Stack_Top,     // Initial Stack Pointer
            (uint32_t)Reset_Handler, // Reset Handler
            (uint32_t)NMI_Handler,   // NMI Handler
            (uint32_t)HardFault_Handler, // HardFault Handler
            // ... other fault handlers ...
            (uint32_t)TIM2_IRQHandler, // Timer 2 interrupt handler
            // ... other interrupt handlers ...
        };
        ```
*   **`volatile` for Peripheral Access:** When C code interacts with hardware registers (e.g., status registers, data registers), it's crucial to declare the pointers to these registers as `volatile`. This ensures that the compiler doesn't optimize away reads or writes, guaranteeing that the hardware is indeed accessed.
    *   **Example:** `volatile uint32_t *UART_DR = (volatile uint32_t *)0x40004000;`
*   **Exceptions and Faults:** While C can't directly `catch` a hard fault, the handler for a hard fault (often written in assembly or a barebones C function) can examine the processor's state (e.g., fault status registers) and potentially attempt recovery or trigger a system reset.

*   **Reference:** Yiu (3e) provides extensive details on the Cortex-M exception model, including the role of the vector table and handler entry/exit in Chapter 8.

#### 5. Memory Model and C

The C memory model aligns with the ARM processor's memory map and how the C runtime allocates and manages memory.

*   **Memory Map:** Embedded systems have a fixed memory map defining regions for Flash (code, constants), RAM (data, stack, heap), and peripherals.
*   **Global/Static Variables:**
    *   Initialized globals/statics reside in the `.data` segment. They are copied from flash to RAM during startup.
    *   Uninitialized globals/statics reside in the `.bss` segment. They are zero-initialized during startup.
*   **Stack:** Grows downwards from a high address in RAM. Used for function calls, local variables, and automatic context saving during interrupts.
*   **Heap:** Dynamically allocated memory using `malloc()` and `free()`. Resides in a separate region of RAM.
*   **`const` Qualified Data:** Data declared `const` is typically placed in the `.rodata` (read-only data) segment, which is usually mapped to Flash memory.
*   **Example Memory Layout (Simplified):**
    ```
    High Address
    +-----------------+
    |      Stack      |  <-- Grows downwards (SP points to top)
    +-----------------+
    |      Heap       |  <-- Grows upwards (for dynamic allocation)
    +-----------------+
    |     .bss        |  <-- Uninitialized global/static vars
    +-----------------+
    |     .data       |  <-- Initialized global/static vars
    +-----------------+
    |     .rodata     |  <-- Constants
    +-----------------+
    |     .text       |  <-- Code
    +-----------------+
    Low Address
    ```
*   **Textbook Reference:** Lewis (2e) often discusses memory organization and layout in the context of embedded systems, particularly in chapters related to program execution and memory management.

---

### C to Assembly - Advanced Concepts:

*   **Attributes for Inline Assembly:** Compilers provide attributes to control how inline assembly interacts with C variables and the compiler's optimization.
    *   `volatile`: Prevents the compiler from reordering or optimizing away the assembly block.
    *   `in`, `out`, `lateout`: Specify input, output, and delayed output operands.
    *   `memory`: Informs the compiler that the assembly block accesses memory, preventing certain optimizations.
*   **Optimizing Interrupt Handlers:**
    *   While writing ISRs in C is convenient, for the absolute highest performance or precise timing, hand-written assembly ISRs might be necessary.
    *   These assembly ISRs can meticulously save/restore only the absolutely necessary registers, avoiding the overhead of saving callee-saved registers that wouldn't be used.
    *   They can directly manipulate hardware registers without the indirection of C pointers.

---

### Important Points to Remember:

*   **`volatile` is Your Friend:** Always use `volatile` when accessing hardware registers directly from C.
*   **Stack Size is Critical:** Ensure sufficient stack space for your application and any ISRs. Monitor stack usage during development.
*   **AAPCS Matters:** Understand the ARM Procedure Call Standard for correct interfacing between C and assembly.
*   **Startup Code is Essential:** The startup code is the bridge between hardware reset and your `main()` function.
*   **Vector Table Configuration:** Correctly configure the vector table to point to your interrupt and exception handlers.
*   **Interrupts vs. Exceptions:** Understand the distinction. Interrupts are typically from peripherals, while exceptions are triggered by processor events (faults, system calls).
*   **Context Switching:** The processor automatically saves some context on interrupt/exception entry. ISRs must save any *additional* context they modify if the interrupted task is to resume correctly.

---

### Practice Questions and Exercises:

**Question 1:**
Explain the primary responsibilities of the startup code in an embedded C program running on an ARM Cortex-M microcontroller. List at least three key tasks it performs.

**Answer 1:**
The startup code (runtime initialization) is responsible for preparing the processor and memory for the C program's execution. Its key tasks include:
1.  **Stack Initialization:** Setting the Stack Pointer (SP) to the top of the allocated stack memory.
2.  **Vector Table Setup:** Configuring the Vector Table Offset Register (VTOR) to point to the interrupt vector table.
3.  **Data Segment Initialization:** Copying initialized global and static variables from ROM (flash) to RAM.
4.  **BSS Segment Initialization:** Zeroing out the memory for uninitialized global and static variables.

**Question 2:**
Why is the `volatile` keyword crucial when working with hardware registers in C on an embedded system? Provide a brief example.

**Answer 2:**
The `volatile` keyword is crucial because it tells the compiler that a variable's value can change at any time without its knowledge (e.g., due to external hardware events). Without `volatile`, the compiler might optimize away reads or writes to hardware registers, assuming their values only change through explicit program instructions. This can lead to incorrect behavior, as the hardware might not be updated or its status might not be correctly read.

**Example:**
```c
volatile uint32_t *TIMER_CONTROL_REG = (volatile uint32_t *)0x40001000;
// ... later in code ...
*TIMER_CONTROL_REG |= (1 << 0); // Enable timer (write to hardware register)
uint32_t status = *TIMER_CONTROL_REG; // Read status from hardware register
```

**Question 3:**
Describe the role of the Stack Pointer (SP) and the Link Register (LR) in the C function call mechanism on an ARM processor. How does this relate to interrupt handling?

**Answer 3:**
*   **Stack Pointer (SP):** Points to the top of the stack. During function calls, it is used to allocate space for local variables and to store parameters and return addresses.
*   **Link Register (LR):** Stores the return address from a function call. When a function is called using `BL` (Branch and Link), the address of the instruction immediately following the `BL` is placed in the LR. The function then returns using `BX LR`.

**Relation to Interrupt Handling:**
When an interrupt occurs, the ARM processor automatically pushes the current PC and PSR onto the stack, effectively saving the state of the interrupted task. The ISR then executes. If the ISR itself calls other C functions, it uses the stack in the same way as a normal function. Crucially, the ISR must also ensure that any registers it modifies that are used by the interrupted task are saved and restored, often by pushing them onto the stack at the ISR's entry and popping them before returning. The LR can also be used by ISRs to branch back to the interrupted code flow.

**Question 4 (Applied):**
You are writing an interrupt service routine (ISR) for a UART receive interrupt. Your ISR needs to read a byte from the UART Data Register, clear the interrupt flag in the UART Status Register, and then call a `process_byte()` function. The `process_byte()` function might be relatively complex and could potentially modify registers R4-R7. How would you structure your ISR, considering both C and potential assembly needs?

**Answer 4:**
1.  **Declare ISR in C:**
    ```c
    // Assume UART base address and register offsets are defined elsewhere
    #define UART_DR (*(volatile uint8_t *)UART_BASE_ADDR)
    #define UART_SR (*(volatile uint16_t *)(UART_BASE_ADDR + SR_OFFSET))
    #define UART_INT_FLAG (1 << 5) // Example: RX interrupt flag

    void UART_RX_ISR(void); // Function prototype
    ```

2.  **Implement ISR (C with implicit assembly wrapper):**
    The compiler typically provides a way to declare a function as an interrupt handler. The compiler-generated wrapper code will handle the automatic saving of essential registers (like PC and PSR). If the ISR uses functions that preserve registers (like `process_byte` might), the ISR itself might need to save/restore those registers.

    ```c
    void UART_RX_ISR(void) {
        // If process_byte() is known to use and modify R4-R7,
        // the compiler-generated wrapper or manual assembly might save them.
        // For demonstration, assuming the compiler handles it or we explicitly add it:
        // __asm__("push {r4-r7, lr}"); // Example if manual saving is needed

        uint8_t received_byte = UART_DR; // Read data from UART Data Register

        // Clear the interrupt flag in the UART Status Register
        UART_SR = UART_INT_FLAG; // Write to clear the flag (often write 1 to clear)

        // Call the C function to process the byte
        process_byte(received_byte);

        // If manual saving was done, restore registers
        // __asm__("pop {r4-r7, pc}"); // Example: restoring and returning
        // Note: The actual return often uses a specific instruction like BX LR or POP {PC}
    }

    // Declaration for the function called within the ISR
    extern void process_byte(uint8_t data);
    ```

3.  **Registering the ISR:** Ensure that the `UART_RX_ISR` function pointer is correctly placed in the vector table at the appropriate interrupt vector index. This is typically done via linker script configuration or explicit array initialization.

**Key Consideration:** The compiler's role in handling the context switching for ISRs is significant. Modern toolchains often generate assembly stubs that correctly save and restore registers according to the ABI and interrupt handling requirements. Understanding this generated code can be beneficial for debugging and optimization.

---

### Alignment with Course Outcomes:

*   **CO1 (Use C features in embedded systems):** This topic directly addresses the use of `volatile`, understanding of memory segments, and the structure of C programs in an embedded context. The example ISRs demonstrate practical application of C for hardware interaction. (K3)
*   **CO2 (Explain programmer's view of processor architecture):** Understanding the stack, registers (SP, LR), vector table, and memory layout provides a programmer's view of how C code maps to the underlying ARM architecture's execution model. (K2)
*   **CO3 (Choose between assembly or C):** By understanding the strengths and weaknesses of C for low-level tasks (like ISRs) and the need for assembly for fine-grained control or performance, this topic helps in making informed choices about when to use each. (K3)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
