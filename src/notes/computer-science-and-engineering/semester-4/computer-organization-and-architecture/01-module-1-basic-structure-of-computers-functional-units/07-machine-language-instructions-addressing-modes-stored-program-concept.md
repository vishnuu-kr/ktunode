---
title: "Machine language - Instructions, addressing modes, Stored program concept."
subject: "COMPUTER ORGANIZATION AND ARCHITECTURE"
module: "Module 1: Basic Structure of computers :– Functional units "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b03d"
status: "completed"
scrapedAt: "2026-05-20T16:11:11.356Z"
---
# COMPUTER ORGANIZATION AND ARCHITECTURE - MODULE 1: BASIC STRUCTURE OF COMPUTERS

## Topic: Machine Language - Instructions, Addressing Modes, Stored Program Concept

**Learning Outcomes:**

*   Understand the concept of machine language and its role in computer execution.
*   Identify and explain the different types of instructions in machine language.
*   Describe various addressing modes and their significance.
*   Explain the stored program concept and its implications for computer architecture.

---

### 1. Machine Language Instructions

*   **Definition:** Machine language is the lowest-level programming language. It consists of binary code (0s and 1s) that directly controls the computer's hardware. Each instruction in machine language corresponds to a specific operation that the CPU can perform.

*   **Key Concepts:**
    *   **Binary Representation:** Instructions and data are represented in binary form.
    *   **Hardware Specific:** Machine language is specific to the computer's architecture (e.g., x86, ARM).  Code written for one architecture generally cannot run on another without significant translation or emulation.
    *   **Direct Execution:** The CPU directly executes machine language instructions without the need for interpretation or translation.

*   **Instruction Format (General Structure):** A machine language instruction typically consists of the following parts:
    *   **Opcode (Operation Code):** Specifies the operation to be performed (e.g., add, subtract, load, store).  It's a numeric code that the CPU recognizes.
    *   **Operand(s):** Specifies the data or memory location(s) to be used in the operation. Operands can be:
        *   **Registers:**  Small, fast storage locations within the CPU.
        *   **Memory Addresses:** Locations in main memory.
        *   **Immediate Values:**  Constants or literals embedded directly within the instruction.

*   **Instruction Types (Examples):**  These categories are not exclusive, and some instructions may fall into multiple categories.

    *   **Data Transfer Instructions:**
        *   `LOAD`: Transfers data from memory to a register.
        *   `STORE`: Transfers data from a register to memory.
        *   `MOVE`: Transfers data between registers.
    *   **Arithmetic Instructions:**
        *   `ADD`: Adds two operands.
        *   `SUB`: Subtracts two operands.
        *   `MUL`: Multiplies two operands.
        *   `DIV`: Divides two operands.
    *   **Logical Instructions:**
        *   `AND`: Performs a bitwise AND operation.
        *   `OR`: Performs a bitwise OR operation.
        *   `NOT`: Performs a bitwise NOT operation.
        *   `XOR`: Performs a bitwise XOR operation.
    *   **Control Flow Instructions:**
        *   `JMP` (Jump): Unconditionally transfers control to a specified address.
        *   `BEQ` (Branch if Equal): Transfers control to a specified address if two operands are equal.
        *   `BNE` (Branch if Not Equal): Transfers control to a specified address if two operands are not equal.
        *   `BLT` (Branch if Less Than): Transfers control to a specified address if the first operand is less than the second.
        *   `BGT` (Branch if Greater Than): Transfers control to a specified address if the first operand is greater than the second.
    *   **Input/Output Instructions:**
        *   `IN`: Reads data from an input device.
        *   `OUT`: Writes data to an output device.

*   **Example (Simplified Machine Language):**  Assume a 3-bit opcode and 3-bit operands.

    *   `000 001 010`: Load the value from memory location 010 into register 001.  (Opcode 000 = LOAD)
    *   `001 010 011`: Add the contents of register 010 and register 011, store the result in register 010. (Opcode 001 = ADD)
    *   `010 001 100`: Store the contents of register 001 into memory location 100. (Opcode 010 = STORE)

*   **Limitations of Machine Language:**
    *   **Difficult to Read and Write:**  Binary code is cumbersome and error-prone for humans.
    *   **Hardware Dependent:**  Code is not portable across different computer architectures.
    *   **Time-Consuming:**  Writing and debugging machine language programs is a lengthy process.  This led to the development of assembly language and higher-level languages.

### 2. Addressing Modes

*   **Definition:** Addressing modes specify how the operand of an instruction is interpreted.  They determine how the effective address of the operand is calculated.  The "effective address" is the actual memory address that the instruction accesses.

*   **Importance:**
    *   **Flexibility:** Allows programs to access data in various ways, such as directly, indirectly, or relative to a base address.
    *   **Efficiency:**  Optimizes memory access and reduces code size.
    *   **Program Relocation:** Some addressing modes facilitate program relocation, allowing programs to be loaded into different memory locations without modification.

*   **Common Addressing Modes:**

    *   **Immediate Addressing:**
        *   **Description:** The operand is the actual value to be used in the instruction. The operand field contains the data itself.
        *   **Example:** `ADD R1, #5`  (Add the immediate value 5 to register R1.)
        *   **Advantage:** Fast, as no memory access is required to fetch the operand.
        *   **Disadvantage:**  Operand value is fixed at compile time. Limited to small constants.

    *   **Direct Addressing (Absolute Addressing):**
        *   **Description:** The operand is the memory address where the data is stored. The operand field contains the actual memory address.
        *   **Example:** `LOAD R2, 1000` (Load the value from memory location 1000 into register R2.)
        *   **Advantage:** Simple and straightforward.
        *   **Disadvantage:** Limited range (address field size). Not flexible for data structures.  Code may not be easily relocatable.

    *   **Indirect Addressing:**
        *   **Description:** The operand is a memory address that *contains* the address of the actual data. The operand field points to a pointer, which in turn points to the data.
        *   **Example:** `LOAD R3, (1000)` (Load the value from the memory location whose address is stored at memory location 1000 into register R3.)  If memory location 1000 contains the value 2000, then the instruction will load the value from memory location 2000 into R3.
        *   **Advantage:** Powerful for accessing data structures (linked lists, etc.).  Allows for dynamic memory access.
        *   **Disadvantage:** Slower, as it requires an extra memory access to get the actual address.

    *   **Register Addressing:**
        *   **Description:** The operand is a register within the CPU.
        *   **Example:** `ADD R4, R5` (Add the contents of register R5 to register R4.)
        *   **Advantage:** Fastest addressing mode, as registers are located within the CPU.
        *   **Disadvantage:** Limited number of registers.

    *   **Register Indirect Addressing:**
        *   **Description:** The operand is a register that *contains* the memory address of the data. Similar to indirect addressing, but uses a register as the pointer.
        *   **Example:** `LOAD R6, (R7)` (Load the value from the memory location whose address is stored in register R7 into register R6.)
        *   **Advantage:** More flexible than direct addressing. Efficient for array access.
        *   **Disadvantage:** Requires a register to hold the address.

    *   **Displacement Addressing (Indexed Addressing/Base Addressing):**
        *   **Description:** The operand is calculated by adding a constant (displacement) to the contents of a register (index register or base register).

        *   **Indexed Addressing:** Uses an index register.  `LOAD R8, 100(R9)` (Load the value from the memory location calculated by adding 100 to the contents of register R9 into register R8.) Often used to access elements in an array.
        *   **Base Addressing:** Uses a base register. `LOAD R8, 100(R10)` (Load the value from the memory location calculated by adding 100 to the contents of register R10 into register R8.) Useful for program relocation.
        *   **Advantage:**  Flexible for accessing arrays and data structures.  Facilitates program relocation.
        *   **Disadvantage:** Requires an addition operation to calculate the effective address.

    *   **Relative Addressing:**
        *   **Description:** The operand is calculated by adding a displacement to the program counter (PC).  Used primarily for branching and looping within a program.
        *   **Example:** `JMP +10` (Jump to the instruction located 10 bytes ahead of the current instruction (PC + 10).)
        *   **Advantage:**  Useful for creating position-independent code, as addresses are relative to the current instruction.
        *   **Disadvantage:** Limited range of addresses.

### 3. Stored Program Concept

*   **Definition:** The stored program concept is a fundamental principle of computer architecture, stating that both instructions (the program) and data are stored in the computer's memory.  This allows the computer to execute different programs simply by loading them into memory.

*   **Key Ideas:**
    *   **Instructions and Data in Memory:**  Both are represented as binary numbers and stored in the same memory locations.  The CPU distinguishes between instructions and data based on the context of their usage.
    *   **Fetch-Decode-Execute Cycle:** The CPU repeatedly fetches instructions from memory, decodes them to determine the operation to be performed, and executes the operation.
    *   **Flexibility and Programmability:** Allows the computer to perform a wide variety of tasks by simply loading different programs into memory.

*   **Implications:**

    *   **Program Modification:**  Programs can modify themselves by writing new instructions into memory.  This is less common now due to security concerns but was historically important for some techniques.
    *   **Dynamic Program Loading:** Programs can be loaded into memory at runtime, allowing for efficient use of memory resources.
    *   **Virtual Memory:**  The stored program concept is essential for implementing virtual memory, which allows programs to access more memory than is physically available.
    *   **Bootstrap Loading:** A small "bootstrap" program is stored in read-only memory (ROM). When the computer is turned on, the bootstrap program loads the operating system from disk into memory, allowing the computer to function.

*   **Von Neumann Architecture:** Most modern computers are based on the von Neumann architecture, which embodies the stored program concept.  A key characteristic of the von Neumann architecture is a single address space for both instructions and data. This architecture also has a CPU, memory, and I/O devices connected by a system bus. A modification called the Harvard architecture uses separate memory spaces for instructions and data, allowing for parallel fetching of instructions and data, potentially improving performance.

---

### Practice Questions & Exercises

1.  **Explain the difference between an opcode and an operand in a machine language instruction.**

    *   **Answer:** The opcode specifies the *operation* to be performed (e.g., ADD, LOAD), while the operand(s) specify the *data* or *memory location(s)* that the operation will use.

2.  **Convert the decimal number 15 to its binary equivalent.**

    *   **Answer:** 1111

3.  **Describe the advantages and disadvantages of immediate addressing.**

    *   **Answer:**
        *   **Advantages:** Fast access, no memory access required.
        *   **Disadvantages:**  Limited range, fixed value at compile time.

4.  **Explain how indirect addressing works and provide an example.**

    *   **Answer:** The operand specifies a memory location that *contains* the address of the data. For example, `LOAD R1, (100)` means load the value from the address that is stored at memory location 100 into register R1.

5.  **What is the key principle behind the stored program concept?**

    *   **Answer:** Both instructions and data are stored in the computer's memory.

6.  **Why is the stored program concept important for modern computing?**

    *   **Answer:** It allows computers to perform a wide variety of tasks by simply loading different programs into memory.  This provides flexibility, programmability, and efficient resource utilization.

7.  **Consider an instruction `LOAD R1, 1000(R2)`. What addressing mode is being used? Explain how the effective address is calculated.**

    *   **Answer:** Displacement/Indexed Addressing. The effective address is calculated by adding the value 1000 to the content of register R2.  The value at that effective memory address is then loaded into register R1.

---

### Important Points to Remember

*   Machine language is the lowest level of programming.
*   Addressing modes determine how operands are accessed.
*   The stored program concept is the cornerstone of modern computer architecture.
*   Understanding these concepts is crucial for understanding how computers work at a fundamental level.
