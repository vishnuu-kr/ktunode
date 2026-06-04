---
title: "Classification of instructions"
subject: "MICROPROCESSORS AND EMBEDDED SYSTEMS"
module: "Module 1: Introduction to microprocessors "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f36212"
status: "completed"
scrapedAt: "2026-05-23T16:22:40.149Z"
---
# Microprocessors and Embedded Systems - Module 1: Introduction to Microprocessors

## Topic: Classification of Instructions

---

### 1. Introduction to Instructions

Instructions are the fundamental commands that a microprocessor executes. They tell the processor what operation to perform, on what data, and where to find or store the data. Microprocessors understand instructions in their machine code (binary) form. However, for easier programming and understanding, we use assembly language, which is a symbolic representation of machine code.

This section will explore the various ways microprocessor instructions can be classified, which is crucial for understanding how microprocessors operate and how to program them effectively.

**Key Concepts:**

*   **Instruction Set:** The complete collection of instructions that a microprocessor can execute.
*   **Machine Code:** The binary representation of an instruction that the microprocessor directly understands.
*   **Assembly Language:** A human-readable symbolic representation of machine code instructions.
*   **Opcode (Operation Code):** The part of an instruction that specifies the operation to be performed (e.g., ADD, MOV, JMP).
*   **Operand:** The data or memory address on which the operation is to be performed.

---

### 2. Classification of Instructions

Microprocessor instructions can be classified based on several criteria, providing a structured way to understand their functionality. This classification helps in understanding the processor's capabilities and the design of its instruction set architecture (ISA).

**2.1 Based on Operation Performed**

This is the most common and intuitive way to classify instructions. It groups instructions by the type of task they perform.

*   **Data Transfer Instructions (Data Movement):**
    *   **Purpose:** To move data between different locations within the microprocessor and between the microprocessor and memory or I/O devices. These instructions do not perform any arithmetic or logical operations on the data.
    *   **Key Operations:** Load, store, move, input, output.
    *   **Examples:**
        *   `MOV A, B`: Move the content of register B to register A. (Gaonkar, Chapter 3)
        *   `LDA 2000H`: Load accumulator with data from memory address 2000H. (Ram, Chapter 4)
        *   `STA 3000H`: Store the content of the accumulator to memory address 3000H. (Ram, Chapter 4)
        *   `IN 01H`: Input data from I/O port address 01H into the accumulator. (Rafiquzzaman, Chapter 2)
        *   `OUT 02H`: Output data from the accumulator to I/O port address 02H. (Rafiquzzaman, Chapter 2)
    *   **Relevance to COs:** Essential for CO1 (8085 Assembly language programming) and CO5 (Write Programs using Embedded C). Data movement is fundamental to any program.

*   **Arithmetic Instructions:**
    *   **Purpose:** To perform mathematical operations.
    *   **Key Operations:** Addition, subtraction, increment, decrement, multiplication, division (supported by some processors).
    *   **Examples:**
        *   `ADD B`: Add the content of register B to the accumulator. (Gaonkar, Chapter 3)
        *   `SUB C`: Subtract the content of register C from the accumulator. (Gaonkar, Chapter 3)
        *   `INR A`: Increment the content of the accumulator by 1. (Ram, Chapter 4)
        *   `DCR M`: Decrement the memory location pointed to by HL pair by 1. (Ram, Chapter 4)
    *   **Relevance to COs:** Directly supports CO1 (8085 Assembly language programming) and CO5 (implement an application using Arduino UNO board), as most applications require calculations.

*   **Logical Instructions:**
    *   **Purpose:** To perform logical operations on data.
    *   **Key Operations:** AND, OR, XOR, NOT, Rotate.
    *   **Examples:**
        *   `ANA B`: Perform a logical AND operation between the accumulator and register B. (Gaonkar, Chapter 3)
        *   `ORA C`: Perform a logical OR operation between the accumulator and register C. (Gaonkar, Chapter 3)
        *   `XRI 10H`: Perform a logical XOR operation between the accumulator and the immediate value 10H. (Ram, Chapter 4)
        *   `RLC`: Rotate accumulator left through carry. (Ram, Chapter 4)
    *   **Relevance to COs:** Supports CO1 and CO5 by enabling bit-level manipulation, which is common in embedded systems for controlling peripherals or processing sensor data.

*   **Branching Instructions (Control Flow Instructions):**
    *   **Purpose:** To alter the normal sequential flow of program execution. This allows for decision-making and looping.
    *   **Key Operations:** Jump (unconditional and conditional), Call, Return.
    *   **Examples:**
        *   `JMP 2050H`: Unconditional jump to memory address 2050H. (Gaonkar, Chapter 3)
        *   `JZ 2060H`: Jump to memory address 2060H if the Zero flag is set. (Ram, Chapter 4)
        *   `CALL 3000H`: Call a subroutine located at memory address 3000H. (Gaonkar, Chapter 3)
        *   `RET`: Return from a subroutine. (Gaonkar, Chapter 3)
    *   **Relevance to COs:** Crucial for CO1 and CO5, as they enable structured programming, subroutines (CO2), and implementing complex logic. Understanding conditional jumps is fundamental to creating decision-making processes.

*   **Stack Manipulation Instructions:**
    *   **Purpose:** To manage the stack, a region of memory used for temporary storage, primarily for subroutine calls and interrupt handling.
    *   **Key Operations:** Push, Pop.
    *   **Examples:**
        *   `PUSH B`: Push the contents of register pair BC onto the stack. (Ram, Chapter 4)
        *   `POP D`: Pop data from the stack into register pair DE. (Ram, Chapter 4)
    *   **Relevance to COs:** Directly relates to CO2 (Subroutines, timing diagram of 8085 microprocessor and interfacing) as stack is vital for managing function calls and interrupt service routines.

*   **Processor Control Instructions:**
    *   **Purpose:** To control the operation of the microprocessor itself or its internal flags.
    *   **Key Operations:** Set/Clear Interrupt Enable, Halt, No Operation, Break.
    *   **Examples:**
        *   `EI`: Enable Interrupts. (Gaonkar, Chapter 3)
        *   `DI`: Disable Interrupts. (Gaonkar, Chapter 3)
        *   `HLT`: Halt the microprocessor. (Ram, Chapter 4)
        *   `NOP`: No Operation (does nothing, used for timing or padding). (Ram, Chapter 4)
    *   **Relevance to COs:** Essential for CO2 (need for interrupts) and CO3 (embedded system understanding), as interrupt handling and processor state control are critical in embedded systems.

**2.2 Based on Addressing Modes**

Addressing modes define how the operand of an instruction is accessed. The choice of addressing mode affects the instruction's length, execution time, and flexibility. (Gaonkar, Chapter 3; Rafiquzzaman, Chapter 2; Ram, Chapter 4)

*   **Immediate Addressing:**
    *   **Description:** The operand is part of the instruction itself.
    *   **Example:** `MVI A, 25H` (Move Immediate: Load the accumulator with the immediate value 25H). The value 25H is directly in the instruction.
    *   **Relevance to COs:** Fundamental for CO1 and CO5, used to load constants into registers.

*   **Register Addressing:**
    *   **Description:** The operand is located in a microprocessor register.
    *   **Example:** `MOV A, B` (Move the content of register B to register A).
    *   **Relevance to COs:** Fundamental for CO1 and CO5, as register operations are very fast.

*   **Direct Addressing (Absolute Addressing):**
    *   **Description:** The instruction contains the full memory address of the operand.
    *   **Example:** `LDA 2000H` (Load Accumulator from memory address 2000H).
    *   **Relevance to COs:** Directly applicable to CO1 and CO5 for accessing specific memory locations.

*   **Indirect Addressing:**
    *   **Description:** The instruction specifies a register or register pair that contains the memory address of the operand.
    *   **Example:** `MOV A, M` (Move the content of the memory location pointed to by the HL register pair to the accumulator).
    *   **Relevance to COs:** Crucial for CO1 and CO5, especially when working with arrays, lists, or dynamically allocated memory.

*   **Register Indirect Addressing:** (This is often a sub-category of indirect addressing, but worth highlighting)
    *   **Description:** The operand's address is stored in a register or a register pair.
    *   **Example:** `LDAX B` (Load Accumulator Indirectly from memory address pointed to by BC register pair).
    *   **Relevance to COs:** Similar to direct and indirect addressing, vital for data manipulation.

*   **Implied/Implicit Addressing:**
    *   **Description:** The operand is implicitly defined by the instruction itself, often it's a specific register like the accumulator.
    *   **Example:** `RLC` (Rotate Accumulator Left through Carry). The accumulator is the implicit operand.
    *   **Relevance to COs:** Used in CO1 and CO5 for operations that inherently act on a particular register.

*   **Indexed Addressing:**
    *   **Description:** The operand's address is calculated by adding an index register's content to a base address specified in the instruction. (More common in advanced processors, but conceptually important).
    *   **Example:** (Conceptual for 8086+) `MOV AX, [BX + SI]`
    *   **Relevance to COs:** While not heavily featured in the 8085 context, understanding this concept helps appreciate more advanced architectures like ARM (CO6).

*   **Relative Addressing:**
    *   **Description:** The operand's address is calculated relative to the current program counter (PC). Often used for conditional jumps.
    *   **Example:** `JZ RELATIVE_ADDRESS` (The target address is PC + offset).
    *   **Relevance to COs:** Fundamental for branching instructions in CO1 and CO5.

**2.3 Based on Word Length**

Instructions can also be classified by the number of bytes they occupy in memory.

*   **1-Byte Instructions:** Opcode only.
    *   **Example:** `NOP`, `RLC`, `HLT` (Ram, Chapter 4).
    *   **Relevance to COs:** Simple instructions, contribute to CO1 and CO5.

*   **2-Byte Instructions:** Opcode followed by an 8-bit operand or address.
    *   **Example:** `MVI A, 25H`, `ADD B`. (Opcode + Register Code for B) (Ram, Chapter 4).
    *   **Relevance to COs:** Common for basic operations, contribute to CO1 and CO5.

*   **3-Byte Instructions:** Opcode followed by a 16-bit operand or address.
    *   **Example:** `LDA 2000H`, `JMP 3000H` (Ram, Chapter 4).
    *   **Relevance to COs:** Used for memory access and jumps, crucial for CO1 and CO5.

**Important Note:** The number of bytes an instruction occupies in memory influences program size and execution speed.

**2.4 Based on Instruction Set Architecture (ISA)**

This classification relates to the overall design philosophy of the microprocessor's instruction set.

*   **CISC (Complex Instruction Set Computer):**
    *   **Description:** Processors with a large and diverse set of instructions, often capable of performing complex operations in a single instruction (e.g., memory-to-memory operations, multi-byte operations). They have many addressing modes.
    *   **Examples:** Intel x86 family (though modern x86 processors use micro-operations internally, bridging CISC and RISC). The 8085 can be considered a relatively simple CISC processor with its instruction set. (Rafiquzzaman, Chapter 1)
    *   **Relevance to COs:** Understanding CISC provides context for the 8085's capabilities (CO1) and the evolution of processor design.

*   **RISC (Reduced Instruction Set Computer):**
    *   **Description:** Processors with a small, highly optimized set of simple instructions. Instructions are typically fixed-length, execute in a single clock cycle, and heavily rely on registers. Complex operations are achieved by combining multiple simple instructions. Emphasis on load/store architecture.
    *   **Examples:** ARM (especially relevant for CO6), MIPS, SPARC. (Rafiquzzaman, Chapter 1)
    *   **Relevance to COs:** Directly addresses CO6 (Understand the RISC Architecture), highlighting its importance in modern embedded systems due to its power efficiency and performance.

---

### 3. Linking to Course Outcomes and Textbooks

*   **CO1: Describe the architecture of 8085 microprocessor and 8085 Assembly language programming. (Knowledge Level: K2)**
    *   This entire topic is foundational to CO1. Understanding the classification of instructions directly explains the types of operations the 8085 can perform and how they are encoded. Examples from Ram (Chapter 4), Gaonkar (Chapter 3), and Rafiquzzaman (Chapter 2) are essential for grasping 8085 assembly language.

*   **CO2: Understand the need for interrupts, Subroutines, timing diagram of 8085 microprocessor and interfacing (Knowledge Level: K2)**
    *   Branching instructions (Call, Return) and Stack Manipulation instructions are critical for understanding subroutines and interrupt service routines. Processor Control Instructions (EI, DI) directly relate to interrupt handling. The timing of these instructions is also influenced by their complexity and addressing modes.

*   **CO3: Understand and gain the basic idea about the embedded system and selection of processors. (Knowledge Level: K2)**
    *   The classification of instructions helps in understanding the capabilities of different processors. For embedded systems, the instruction set (e.g., RISC vs. CISC) impacts power consumption, speed, and code density, which are key selection criteria.

*   **CO4: Able to gain working level knowledge about a Arduino Uno based system architecture and Arduino IDE (Knowledge Level: K2)**
    *   Arduino Uno is based on an AVR microcontroller, which has an RISC-like architecture. While the notes focus on general classifications and 8085 examples, the concepts apply. Understanding instruction types is crucial for writing sketches in the Arduino IDE. The "Arduino Cookbook" by Margolis might offer practical examples of instruction usage in Arduino context.

*   **CO5: Write Programs using Embedded C and implement an application using Arduino UNO board. (Knowledge Level: K3)**
    *   Writing C code translates into assembly instructions. Understanding instruction types and addressing modes helps in optimizing C code for embedded applications, especially when dealing with low-level hardware interactions or performance-critical sections.

*   **CO6: Understand the RISC Architecture and Apply the knowledge for solving the real life problems using ARM - Arduino DUE board based embedded system. (Knowledge Level: K3)**
    *   The contrast between CISC (like the general concept of 8085) and RISC is explicitly covered. This classification directly supports understanding RISC principles. When programming ARM, knowing that it uses a reduced instruction set, fixed-length instructions, and a load/store architecture is vital for efficient programming.

---

### 4. Important Points to Remember

*   **Instructions are the language of the microprocessor.**
*   **Classification helps organize and understand the vast array of instructions.**
*   **Data transfer, arithmetic, logical, and branching are the core functional categories.**
*   **Addressing modes determine how data is accessed, impacting efficiency.**
*   **Instruction set architecture (CISC vs. RISC) defines the overall complexity and design philosophy of a processor.**
*   **RISC architectures are prevalent in modern embedded systems (like Arduino) due to their efficiency.**
*   **Understanding instruction classification is fundamental for programming any microprocessor or microcontroller.**

---

### 5. Practice Questions & Exercises

**Questions:**

1.  What is the primary purpose of data transfer instructions? Provide an example of a data transfer instruction in 8085 assembly language and explain its operation. (Relates to CO1)
2.  Differentiate between Immediate Addressing and Direct Addressing. Give an example of each for the 8085 microprocessor. (Relates to CO1)
3.  Why are branching instructions crucial in program development? Give an example of a conditional branching instruction. (Relates to CO1, CO5)
4.  Explain the concept of a stack in microprocessor systems. Which types of instructions are used for stack manipulation? (Relates to CO2)
5.  What are the key characteristics of RISC architecture? How does it differ from CISC architecture? (Relates to CO6)
6.  Consider the following 8085 assembly instruction: `LDA 2050H`.
    *   What type of instruction is this?
    *   What addressing mode is used?
    *   What operation will be performed? (Relates to CO1)
7.  If you need to add the value `15H` to the accumulator, which instruction and addressing mode would you likely use in 8085 assembly? (Relates to CO1, CO5)

**Answers:**

1.  **Purpose of Data Transfer Instructions:** The primary purpose is to move data between the CPU registers, memory locations, and I/O ports without altering the data itself. **Example:** `MOV A, M`. This instruction moves the data from the memory location whose address is currently held in the HL register pair into the accumulator (register A). (Ram, Chapter 4)
2.  **Immediate Addressing:** The operand is a constant value directly embedded within the instruction. **Example:** `MVI B, 30H` (Move Immediate: Load register B with the value 30H).
    **Direct Addressing:** The operand is a memory location specified by its full 16-bit address within the instruction. **Example:** `LDA 2000H` (Load Accumulator: Load the accumulator with data from memory address 2000H). (Gaonkar, Chapter 3)
3.  **Importance of Branching Instructions:** Branching instructions (like jumps and calls) are crucial for controlling the flow of program execution. They enable decision-making (conditional jumps) and modular programming through subroutines (calls and returns), allowing programs to execute different code paths based on conditions or to reuse blocks of code. **Example of Conditional Branching:** `JC 2080H` (Jump if Carry flag is set to address 2080H). (Ram, Chapter 4)
4.  **Stack:** A stack is a region of memory organized as a Last-In, First-Out (LIFO) data structure. It's used for temporary storage of data, especially function arguments, return addresses, and local variables during subroutine calls and interrupt handling. **Instructions for Stack Manipulation:** `PUSH` (to add data to the stack) and `POP` (to retrieve data from the stack). (Ram, Chapter 4; Gaonkar, Chapter 3)
5.  **RISC vs. CISC:**
    *   **RISC (Reduced Instruction Set Computer):** Features a small, optimized set of simple, fixed-length instructions. Instructions typically execute in one clock cycle. Employs a load/store architecture (data must be loaded into registers before processing and stored back). Focuses on compiler optimization. **Examples:** ARM, MIPS.
    *   **CISC (Complex Instruction Set Computer):** Features a large, diverse set of instructions, including complex ones that can perform multiple low-level operations. Instructions can be variable-length. Supports memory-to-memory operations. **Examples:** Intel x86 (historically). The 8085 has a CISC-like instruction set, though simpler than modern CISC. (Rafiquzzaman, Chapter 1)
6.  For `LDA 2050H`:
    *   **Type of Instruction:** Data Transfer Instruction (specifically, Load).
    *   **Addressing Mode:** Direct Addressing (the memory address 2050H is part of the instruction).
    *   **Operation:** The content of the memory location at address `2050H` will be copied into the accumulator register. (Ram, Chapter 4)
7.  To add the value `15H` to the accumulator, you would use the **Immediate Addressing** mode. The instruction would be: `MVI A, 15H`.
    *   `MVI`: Move Immediate opcode.
    *   `A`: Destination register (Accumulator).
    *   `15H`: The immediate data value to be loaded. (Ram, Chapter 4)

---
This concludes the study notes for the classification of instructions. Understanding these classifications is fundamental for progressing in the study of microprocessors and embedded systems.
