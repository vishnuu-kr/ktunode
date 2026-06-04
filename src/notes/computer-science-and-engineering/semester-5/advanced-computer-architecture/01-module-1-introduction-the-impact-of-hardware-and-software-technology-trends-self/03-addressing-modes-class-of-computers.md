---
title: "addressing modes Class of Computers"
subject: "ADVANCED COMPUTER ARCHITECTURE"
module: "Module 1: Introduction – The impact of hardware and software technology trends Self review – Instruction set Architecture"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b848"
status: "completed"
scrapedAt: "2026-05-20T16:42:24.837Z"
---
# ADVANCED COMPUTER ARCHITECTURE - MODULE 1: Addressing Modes & Classes of Computers

**Module Overview:** Introduction – The impact of hardware and software technology trends Self review – Instruction set Architecture

**Topic:** Addressing Modes & Classes of Computers

**Learning Outcomes:** Upon completion of this topic, you will be able to:

*   Define and explain different addressing modes.
*   Identify the advantages and disadvantages of each addressing mode.
*   Apply addressing modes to specific instruction formats.
*   Classify computers based on architectural characteristics (e.g., Flynn's Taxonomy).
*   Understand the evolution and characteristics of different computer classes (e.g., SISD, SIMD, MISD, MIMD).

## 1. Addressing Modes

Addressing modes determine how the operand (the data on which an instruction operates) is located. They provide flexibility in accessing data stored in memory or registers.

**1.1 Key Concepts and Definitions:**

*   **Operand:** The data or address on which an instruction operates.
*   **Address:** A location in memory or a register where data is stored.
*   **Effective Address (EA):** The actual memory address used to access the operand.  The addressing mode calculation results in the EA.
*   **Instruction Format:**  The layout of an instruction, defining fields for opcode, operands, and addressing modes.

**1.2 Common Addressing Modes:**

*   **1.2.1 Immediate Addressing:**
    *   **Definition:** The operand is directly included in the instruction itself.
    *   **Example (Assembly-like):** `ADD R1, #5`  (Add the immediate value 5 to register R1)
    *   **EA:** Operand = Value in the instruction.
    *   **Advantages:** Fast access to the operand (no memory access required).
    *   **Disadvantages:** Limited operand size (constrained by the instruction word size). Not suitable for large data values.
    *   **When to use:** Initializing registers with constant values, small increment/decrement operations.

*   **1.2.2 Direct Addressing (Absolute Addressing):**
    *   **Definition:** The instruction contains the direct memory address of the operand.
    *   **Example (Assembly-like):** `LOAD R1, 1000` (Load the content of memory location 1000 into register R1)
    *   **EA:** Operand = Address in the instruction.
    *   **Advantages:** Simple to implement.
    *   **Disadvantages:** Limited address space (restricted by the size of the address field in the instruction). Not flexible, as the address is fixed.
    *   **When to use:** Accessing variables at known memory locations (less common in modern architectures due to memory management).

*   **1.2.3 Indirect Addressing:**
    *   **Definition:** The instruction contains the *address* of a memory location that holds the *actual address* of the operand.
    *   **Example (Assembly-like):** `LOAD R1, (1000)` (Load the content of the memory location whose address is stored in memory location 1000, into register R1)
    *   **EA:** Operand = [Address in the instruction]  (Content of the memory location pointed to by the address in the instruction.)
    *   **Advantages:** Greater address space. Allows for dynamic memory allocation and pointers.
    *   **Disadvantages:** Slower access (requires two memory accesses).  More complex to implement.
    *   **When to use:** Implementing pointers, accessing data structures dynamically.

*   **1.2.4 Register Addressing:**
    *   **Definition:** The operand is located in a register.
    *   **Example (Assembly-like):** `ADD R1, R2` (Add the content of register R2 to register R1)
    *   **EA:** Operand = Register.
    *   **Advantages:** Very fast access (register access is much faster than memory access).
    *   **Disadvantages:** Limited number of registers.
    *   **When to use:** Frequently accessed variables, intermediate calculations.

*   **1.2.5 Register Indirect Addressing:**
    *   **Definition:** The instruction specifies a register that contains the *address* of the operand in memory.
    *   **Example (Assembly-like):** `LOAD R1, (R2)` (Load the content of the memory location whose address is stored in register R2 into register R1)
    *   **EA:** Operand = [Register] (Content of the register)
    *   **Advantages:** More flexible than direct addressing.  Allows for addressing data structures in memory without knowing the exact memory address at compile time.
    *   **Disadvantages:** Requires one register to hold the address.  Slightly slower than register addressing due to the memory access.
    *   **When to use:** Accessing arrays, linked lists, and other data structures.

*   **1.2.6 Displacement Addressing (Indexed Addressing, Base Register Addressing):**
    *   **Definition:** The instruction contains a register (the *base register* or *index register*) and a displacement (offset).  The effective address is calculated by adding the content of the register and the displacement.
    *   **Example (Assembly-like):** `LOAD R1, 100(R2)` (Load the content of memory location [R2 + 100] into register R1.  R2 is the base register, 100 is the displacement.)
    *   **EA:** Operand = [Register] + Displacement.
    *   **Advantages:** Useful for accessing elements in arrays.  The displacement can be a constant offset.  Good for relative addressing.
    *   **Disadvantages:** Requires an extra addition operation.
    *   **When to use:** Accessing elements in arrays, records, or structures.

*   **1.2.7 Stack Addressing:**
    *   **Definition:** Operands are implicitly located on a stack.  Instructions implicitly push or pop operands from the stack.
    *   **Example (Assembly-like - implied):** `PUSH R1` (Push the content of R1 onto the stack);  `POP R2` (Pop the top of the stack into R2)
    *   **EA:** Implied by the stack pointer (SP). PUSH increments/decrements SP; POP decrements/increments SP.
    *   **Advantages:** Efficient for subroutine calls and expression evaluation.
    *   **Disadvantages:** Limited to stack operations.  Less flexible than other addressing modes.
    *   **When to use:** Subroutine calls, function parameter passing, expression evaluation (e.g., in compilers).

*   **1.2.8 Relative Addressing:**
    *   **Definition:** Similar to displacement addressing, but the register used is the Program Counter (PC).  The displacement is added to the PC to calculate the effective address.
    *   **Example (Assembly-like):** `JUMP +10` (Jump to the instruction 10 bytes ahead of the current instruction)
    *   **EA:** Operand = [PC] + Displacement
    *   **Advantages:** Position-independent code (code can be loaded anywhere in memory and still work correctly). Facilitates code relocation.
    *   **Disadvantages:** Limited address range (determined by the size of the displacement field).
    *   **When to use:** Branching and jumping within a program.

**1.3 Applying Addressing Modes to Instruction Formats:**

Instruction formats typically include:

*   **Opcode:**  Specifies the operation to be performed (e.g., ADD, LOAD, STORE).
*   **Addressing Mode Field:** Specifies the addressing mode for each operand.
*   **Operand Field(s):** Contains the operand value (for immediate addressing) or the address information (for other addressing modes).

The addressing mode field determines how the operand field is interpreted.  For example, if the addressing mode field indicates "immediate addressing", the operand field is treated as the direct value.  If it indicates "direct addressing", the operand field is treated as a memory address.

**1.4 Important Points to Remember about Addressing Modes:**

*   Addressing modes significantly affect the instruction set architecture's flexibility, performance, and complexity.
*   The choice of addressing modes depends on the specific application and the trade-offs between speed, code size, and address space.
*   Modern architectures often employ a combination of addressing modes to provide a versatile and efficient programming environment.

## 2. Classes of Computers

Computers can be classified based on their architectural characteristics. A common classification is based on Flynn's Taxonomy.

**2.1 Flynn's Taxonomy:**

Flynn's Taxonomy classifies computer architectures based on the number of instruction streams and data streams they can process concurrently.

*   **2.1.1 SISD (Single Instruction, Single Data):**
    *   **Definition:** A traditional sequential computer. One instruction stream operates on one data stream.
    *   **Characteristics:**
        *   Single processor.
        *   Instructions are executed sequentially.
        *   Examples: Most traditional single-core CPUs.
    *   **Diagram:**

    ```
    Instruction Stream --> Processing Unit --> Data Stream
    ```

*   **2.1.2 SIMD (Single Instruction, Multiple Data):**
    *   **Definition:** One instruction stream operates on multiple data streams simultaneously.
    *   **Characteristics:**
        *   Multiple processing elements (PEs) execute the same instruction on different data.
        *   Good for data-parallel problems (e.g., image processing, scientific simulations).
        *   Examples: GPUs, vector processors, SIMD instructions in CPUs (e.g., SSE, AVX).
    *   **Diagram:**

    ```
    Instruction Stream --> Control Unit --> Processing Element 1 --> Data Stream 1
                                       |--> Processing Element 2 --> Data Stream 2
                                       |--> Processing Element N --> Data Stream N
    ```

*   **2.1.3 MISD (Multiple Instruction, Single Data):**
    *   **Definition:** Multiple instruction streams operate on a single data stream.
    *   **Characteristics:**
        *   Rare in practice.
        *   Fault tolerance is a potential application (multiple processors processing the same data and comparing results).
        *   Examples:  Hypothetical, some fault-tolerant systems might be considered MISD.
    *   **Diagram:**

    ```
    Instruction Stream 1 --> Processing Unit 1 --> Data Stream
    Instruction Stream 2 --> Processing Unit 2 -->
    Instruction Stream N --> Processing Unit N -->
    ```

*   **2.1.4 MIMD (Multiple Instruction, Multiple Data):**
    *   **Definition:** Multiple instruction streams operate on multiple data streams.
    *   **Characteristics:**
        *   The most general and flexible parallel architecture.
        *   Multiple processors can execute different instructions on different data concurrently.
        *   Examples: Multi-core processors, clusters of computers, distributed systems.
        *   Can be further classified as shared-memory MIMD (multiprocessors) or distributed-memory MIMD (multicomputers).
    *   **Diagram:**

    ```
    Instruction Stream 1 --> Processing Unit 1 --> Data Stream 1
    Instruction Stream 2 --> Processing Unit 2 --> Data Stream 2
    Instruction Stream N --> Processing Unit N --> Data Stream N
    ```

**2.2 Evolution and Characteristics of Different Computer Classes:**

*   **SISD:** Historically the dominant architecture.  Limited by the speed of a single processor (Moore's Law limitations led to the rise of parallel architectures).

*   **SIMD:** Initially used in specialized applications (e.g., vector processing in supercomputers). Now widely available in GPUs and SIMD extensions in CPUs, accelerating multimedia and scientific computations.

*   **MISD:** Less commercially successful due to complexity and limited practical applications. Primarily found in research or specialized fault-tolerant systems.

*   **MIMD:** The most prevalent parallel architecture today.  Multi-core processors are ubiquitous in desktops, laptops, and servers.  Clusters and distributed systems are used for large-scale scientific computing and data processing.

**2.3 Important Points to Remember about Computer Classes:**

*   Flynn's Taxonomy provides a high-level classification of computer architectures.
*   Each class has its strengths and weaknesses, making them suitable for different types of applications.
*   The evolution of computer architecture has been driven by the need for increased performance and scalability.

## 3. Practice Questions/Exercises

**Question 1:**

Explain the difference between direct addressing and indirect addressing.  Give an example of when you might use each.

**Answer:**

*   **Direct Addressing:** The instruction contains the actual memory address of the operand.  It is simple to implement but has a limited address space and lacks flexibility.  It might be used when accessing a global variable at a known, fixed memory location (though this is becoming less common due to memory management).  Example: `LOAD R1, 1000` (Load the content of memory location 1000 into R1).

*   **Indirect Addressing:** The instruction contains the address of a memory location that holds the *actual* address of the operand. It offers a larger address space and allows for pointer-based programming but requires an extra memory access. It is useful for implementing pointers and accessing dynamically allocated data structures. Example: `LOAD R1, (1000)` (Load the content of the memory location pointed to by the address stored in memory location 1000 into R1).

**Question 2:**

Which addressing mode is most suitable for accessing elements of an array stored in memory? Explain your reasoning.

**Answer:**

Displacement (Indexed) addressing is the most suitable.  The base register can hold the starting address of the array, and the displacement can represent the offset from the base address to access a specific element.  This allows for efficient iteration through the array by incrementing the index or by using a different displacement for different elements.

**Question 3:**

Describe Flynn's Taxonomy and provide an example of a computer architecture that falls into each category.

**Answer:**

Flynn's Taxonomy classifies computer architectures based on the number of instruction streams and data streams:

*   **SISD:** Single Instruction, Single Data. Example: Traditional single-core CPU.
*   **SIMD:** Single Instruction, Multiple Data. Example: GPU, vector processor.
*   **MISD:** Multiple Instruction, Single Data. Example: Rare, possibly some fault-tolerant systems.
*   **MIMD:** Multiple Instruction, Multiple Data. Example: Multi-core processor, cluster of computers.

**Question 4:**

What are the advantages and disadvantages of immediate addressing?

**Answer:**

*   **Advantages:** Fast access to the operand (no memory access required).
*   **Disadvantages:** Limited operand size (constrained by the instruction word size).

**Question 5:**

Why has MIMD architecture become so prevalent in modern computing?

**Answer:**

MIMD architecture offers the greatest flexibility and scalability. It allows multiple processors to work on different parts of a problem concurrently, enabling significant performance improvements. This is essential for handling complex and data-intensive applications, and it aligns well with the trend towards multi-core processors and distributed computing systems.  The other architectures have more limited applications for general purpose tasks.
