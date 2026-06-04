---
title: "Memory addressing"
subject: "ADVANCED COMPUTER ARCHITECTURE"
module: "Module 1: Introduction – The impact of hardware and software technology trends Self review – Instruction set Architecture"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b847"
status: "completed"
scrapedAt: "2026-05-20T16:42:24.100Z"
---
## ADVANCED COMPUTER ARCHITECTURE: Module 1 - Memory Addressing

**Subject:** ADVANCED COMPUTER ARCHITECTURE
**Module:** Module 1: Introduction – The impact of hardware and software technology trends Self review – Instruction set Architecture
**Topic:** Memory Addressing
**Description:** Topic Memory addressing from Module 1: Introduction – The impact of hardware and software technology trends Self review – Instruction set Architecture in ADVANCED COMPUTER ARCHITECTURE

**Learning Outcomes:** (Implicit - to be derived from the content below, but encompassing understanding memory addressing techniques, address spaces, and the impact of architectural decisions on memory addressing)

### I. Introduction to Memory Addressing

*   **Definition:** Memory addressing refers to the scheme used by a processor to locate and access specific locations (bytes, words, etc.) in the computer's memory. It's the fundamental mechanism enabling the CPU to read and write data.

*   **Importance:** Efficient memory addressing is crucial for:
    *   **Performance:** Faster access to data translates to faster program execution.
    *   **Memory Usage:** Effective addressing schemes allow for efficient utilization of available memory.
    *   **Program Complexity:** The addressing mode directly impacts how programmers access and manipulate data.
    *   **System Design:** The chosen memory addressing technique heavily influences the overall architecture of the system.

*   **Hardware and Software Trends Impacting Memory Addressing:**
    *   **Increasing Memory Sizes:**  Modern systems have significantly larger memory capacities (GBs and TBs). This necessitates addressing schemes capable of handling such large address spaces.
    *   **Multicore Processors:** Parallel processing requires mechanisms for different cores to access memory concurrently and safely, leading to considerations about shared vs. private memory and cache coherence.
    *   **Virtualization:**  Virtual machines abstract the physical memory, requiring memory management techniques like address translation.
    *   **Cloud Computing:**  Cloud environments need to efficiently manage and share memory resources across multiple users and applications.
    *   **Embedded Systems:**  Resource-constrained embedded systems often use simpler addressing modes to minimize hardware overhead.
    *   **Security Concerns:**  Address space layout randomization (ASLR) and other security features influence memory addressing to mitigate vulnerabilities like buffer overflows.

### II. Key Concepts and Definitions

*   **Address Space:** The range of memory locations that a processor can address directly. It is determined by the number of bits in the address bus.
    *   **Example:** A 32-bit address bus allows for an address space of 2<sup>32</sup> bytes (4 GB).
    *   **Example:** A 64-bit address bus allows for an address space of 2<sup>64</sup> bytes (16 EB).

*   **Address Bus:**  A set of electrical conductors (wires) used to specify the memory address. The width of the address bus determines the size of the address space.

*   **Data Bus:** A set of electrical conductors used to transfer data between the CPU and memory. The width of the data bus determines the amount of data that can be transferred in a single memory access (e.g., 8 bits, 16 bits, 32 bits, 64 bits).

*   **Word Size:** The number of bits that a processor typically processes at one time. This is usually the same as the size of a register. It can affect the way memory is organized and addressed.

*   **Memory Organization:**
    *   **Byte-Addressable:**  Each byte in memory has a unique address (most common).
    *   **Word-Addressable:** Each word in memory has a unique address (less common). Requires the address to be multiplied by word size to get the byte offset.

*   **Addressing Modes:**  Different ways that the operand's address is specified in an instruction. They dictate how the effective address (the actual memory location being accessed) is calculated. Key addressing modes include:

    *   **Immediate Addressing:** The operand is directly included in the instruction itself.
        *   **Example:** `ADD R1, #5` (Adds the immediate value 5 to register R1).  No memory access is needed to retrieve the operand.
        *   **Advantage:** Fast, no memory access for the operand.
        *   **Disadvantage:** Limited operand size, operand is fixed at compile time.

    *   **Direct (Absolute) Addressing:** The instruction contains the actual memory address of the operand.
        *   **Example:** `LOAD R1, 1000` (Loads the contents of memory location 1000 into register R1).
        *   **Advantage:** Simple to implement.
        *   **Disadvantage:** Limited address space, code is not relocatable.

    *   **Register Addressing:** The operand is located in a CPU register.
        *   **Example:** `ADD R1, R2` (Adds the contents of register R2 to register R1).
        *   **Advantage:** Very fast (no memory access).
        *   **Disadvantage:** Limited number of registers.

    *   **Indirect Addressing:** The instruction contains the address of a memory location that holds the *address* of the operand.
        *   **Example:** `LOAD R1, (1000)` (Loads the contents of the memory location whose address is stored at memory location 1000 into register R1).
        *   **Advantage:** Allows access to a larger address space using a smaller immediate value in the instruction.
        *   **Disadvantage:** Requires an extra memory access, which can slow down execution.

    *   **Register Indirect Addressing:**  The instruction contains a register that holds the address of the operand.
        *   **Example:** `LOAD R1, (R2)` (Loads the contents of the memory location whose address is stored in register R2 into register R1).
        *   **Advantage:** More flexible than direct addressing, allows accessing data pointed to by a register.
        *   **Disadvantage:** Requires the register to be initialized with the correct address.

    *   **Displacement (Base/Index) Addressing:** The instruction contains a register (base or index register) and a displacement (offset). The effective address is calculated by adding the displacement to the contents of the register.
        *   **Example:** `LOAD R1, 100(R2)` (Loads the contents of the memory location at address (R2 + 100) into register R1).  R2 is the base/index register, 100 is the displacement.
        *   **Advantage:** Useful for accessing elements in arrays or structures.
        *   **Disadvantage:** Requires an addition operation to calculate the effective address.

    *   **Indexed Addressing:** Similar to displacement addressing, but often involves scaling the index register value (e.g., multiplying by the size of each element).
        *   **Example:**  `LOAD R1, (R2 + R3 * 4)` (If R3 contains the index of an element in an array of 4-byte integers, the effective address is the base address in R2 plus the index in R3 times the size of each element).

    *   **PC-Relative Addressing:** The effective address is calculated by adding a displacement to the Program Counter (PC).  Commonly used for branch instructions.
        *   **Example:** `BRANCH 50` (Branches to the instruction located 50 bytes after the current instruction).
        *   **Advantage:** Code is easily relocatable.
        *   **Disadvantage:** Limited range (determined by the size of the displacement).

*   **Endianness:** The order in which bytes are stored in memory.
    *   **Big-Endian:** The most significant byte (MSB) is stored at the lowest memory address.
    *   **Little-Endian:** The least significant byte (LSB) is stored at the lowest memory address.
    *   **Example:** Consider the number 0x12345678.
        *   Big-Endian: Memory location X contains 0x12, X+1 contains 0x34, X+2 contains 0x56, X+3 contains 0x78
        *   Little-Endian: Memory location X contains 0x78, X+1 contains 0x56, X+2 contains 0x34, X+3 contains 0x12

### III. Instruction Set Architecture (ISA) and Memory Addressing

*   The ISA defines the addressing modes supported by a processor.  Different ISAs offer varying levels of support for different addressing modes.

*   **CISC (Complex Instruction Set Computing) architectures (e.g., x86):**  Typically provide a large number of addressing modes to offer flexibility and code density.

*   **RISC (Reduced Instruction Set Computing) architectures (e.g., ARM, MIPS):** Generally support fewer addressing modes to simplify the hardware and improve performance.  Typically rely on load/store architecture.

*   **Load/Store Architecture:** Data processing operations can only be performed on data residing in registers. Memory access is limited to explicit load (from memory to register) and store (from register to memory) instructions. RISC architectures often use load/store.

### IV. Self-Review: Practice Questions

1.  **Question:** A processor has a 24-bit address bus. What is the maximum amount of memory (in bytes) that can be addressed?
    *   **Answer:** 2<sup>24</sup> bytes = 16,777,216 bytes = 16 MB

2.  **Question:** Explain the difference between direct addressing and indirect addressing. Give an example of when you might use each.
    *   **Answer:**
        *   **Direct Addressing:** The instruction contains the actual memory address of the operand.
        *   **Indirect Addressing:** The instruction contains the address of a memory location that holds the address of the operand.

        *   **Example of Direct Addressing:** Accessing a global variable whose address is known at compile time.
        *   **Example of Indirect Addressing:** Implementing pointers in a programming language.

3.  **Question:** What are the advantages and disadvantages of register addressing?
    *   **Answer:**
        *   **Advantages:** Very fast, no memory access required.
        *   **Disadvantages:** Limited number of registers.

4.  **Question:**  Consider the following instruction: `LOAD R1, 20(R2)`. If the contents of register R2 are 1000, what is the effective address that will be accessed?
    *   **Answer:** The effective address is R2 + 20 = 1000 + 20 = 1020.

5.  **Question:** What is endianness, and why is it important?
    *   **Answer:** Endianness refers to the order in which bytes of a multi-byte data value are stored in memory. It is important for data portability and communication between systems with different endianness.

6.  **Question:**  Explain the concept of PC-relative addressing and in what type of instruction you typically find it used.
    *   **Answer:** PC-relative addressing calculates the effective address by adding a displacement value to the Program Counter (PC). It is commonly used for branch instructions (e.g., `JUMP`, `BRANCH`), enabling code to be position-independent (relocatable).

7.  **Question:** What is a load/store architecture?
     *  **Answer:** A load/store architecture (typically found in RISC) only allows data processing operations (e.g., addition, subtraction) to be performed on data that is present in CPU registers. Data needs to be loaded from memory into registers before it can be processed, and the results need to be stored back into memory after processing.  This contrasts with architectures (typically CISC) that allow direct operations on memory operands.

### V. Important Points to Remember

*   The choice of addressing modes significantly affects the performance and complexity of a computer system.
*   Understanding memory addressing is crucial for writing efficient and optimized code.
*   The size of the address bus determines the maximum addressable memory space.
*   Endianness can impact data interpretation when transferring data between different systems.
*   Load/Store architectures are common in RISC processors and simplify the instruction set.
*   Hardware and software trends continue to influence memory addressing techniques.

### VI. Further Exploration

*   Research different ISAs (e.g., x86, ARM, MIPS) and their supported addressing modes.
*   Investigate virtual memory and address translation techniques.
*   Explore cache memory and its relationship to memory addressing.
*   Read about memory management units (MMUs) and their role in address translation and memory protection.
