---
title: "Instruction execution cycle."
subject: "COMPUTER ORGANIZATION AND ARCHITECTURE"
module: "Module 1: Basic Structure of computers :– Functional units "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b03c"
status: "completed"
scrapedAt: "2026-05-20T16:11:10.644Z"
---
# COMPUTER ORGANIZATION AND ARCHITECTURE - Module 1: Instruction Execution Cycle

These notes cover the instruction execution cycle, a fundamental concept in computer organization and architecture.

**Learning Outcomes:**

*   Understand the different stages of the instruction execution cycle (fetch, decode, execute, memory access, write-back).
*   Explain the role of key registers (Program Counter (PC), Memory Address Register (MAR), Memory Data Register (MDR), Instruction Register (IR)) in the execution cycle.
*   Describe how instructions are fetched and decoded.
*   Explain how operands are retrieved from memory.
*   Understand how the result of an instruction is stored back.
*   Analyze the flow of data and control signals during each stage.

## 1. Key Concepts and Definitions

*   **Instruction:**  A command that the processor can understand and execute. It specifies an operation and the operands it will act upon.
*   **Instruction Set Architecture (ISA):**  Defines the instructions a processor can execute, the data types it can manipulate, and the registers it uses.  Examples include x86, ARM, and RISC-V.
*   **Instruction Execution Cycle (also known as Fetch-Decode-Execute Cycle):** The fundamental process by which a computer retrieves, decodes, and executes instructions. It's a repetitive process that continues as long as the computer is running.
*   **Program:** A sequence of instructions designed to perform a specific task.
*   **Program Counter (PC):** A register that holds the memory address of the next instruction to be fetched.
*   **Memory Address Register (MAR):** A register that holds the address of the memory location being accessed (read or write).
*   **Memory Data Register (MDR):** A register that holds the data being read from or written to memory. Also sometimes called Memory Buffer Register (MBR).
*   **Instruction Register (IR):** A register that holds the instruction that is currently being decoded and executed.
*   **Control Unit (CU):** A part of the CPU that generates control signals to manage the execution of instructions.
*   **Arithmetic Logic Unit (ALU):** A digital circuit that performs arithmetic and logical operations.

## 2. The Instruction Execution Cycle Stages

The instruction execution cycle can be broken down into the following stages:

1.  **Fetch Cycle (Instruction Fetch - IF)**
2.  **Decode Cycle (Instruction Decode - ID)**
3.  **Execute Cycle (EX)**
4.  **Memory Access Cycle (MEM)** (Conditional - only executed if the instruction requires memory access)
5.  **Write-Back Cycle (WB)** (Conditional - only executed if the instruction produces a result that needs to be stored in a register)

### 2.1 Fetch Cycle (Instruction Fetch - IF)

*   **Purpose:** To retrieve the next instruction from memory.
*   **Steps:**
    1.  The address of the next instruction is in the **Program Counter (PC)**.
    2.  The address from the PC is copied to the **Memory Address Register (MAR)**:  `MAR <- [PC]`
    3.  The control unit initiates a read request to memory.
    4.  The instruction located at the memory address specified by the MAR is fetched from memory and placed in the **Memory Data Register (MDR)**: `MDR <- Memory[MAR]`
    5.  The instruction in the MDR is copied to the **Instruction Register (IR)**: `IR <- [MDR]`
    6.  The PC is incremented to point to the next instruction in memory: `PC <- [PC] + Instruction Length`.  The increment value depends on the instruction set architecture and whether instructions are fixed or variable length.

*   **Example:** Assume PC contains the address 1000. The MAR is loaded with 1000. The instruction stored at memory location 1000 (e.g., "ADD R1, R2, R3") is fetched into the MDR, then copied to the IR. The PC is then incremented to 1004 (assuming a 4-byte instruction length).

### 2.2 Decode Cycle (Instruction Decode - ID)

*   **Purpose:** To interpret the instruction and determine the operation to be performed and the operands involved.
*   **Steps:**
    1.  The **Instruction Register (IR)** contains the instruction.
    2.  The control unit decodes the instruction, identifying the opcode (operation code) and operand addresses or immediate values.  The opcode specifies the operation to be performed (e.g., ADD, SUB, LOAD, STORE). The operand fields specify the data to be used by the operation.
    3.  If the instruction involves registers, the register addresses are sent to the register file.
    4.  The control unit sets up internal control signals based on the decoded instruction.

*   **Example:** The IR contains "ADD R1, R2, R3".  The decoder identifies "ADD" as the opcode (addition) and R1, R2, and R3 as the registers containing the operands and destination.

### 2.3 Execute Cycle (EX)

*   **Purpose:** To perform the operation specified by the instruction.
*   **Steps:**
    1.  The Control Unit enables the necessary components.
    2.  The operands are retrieved from registers (specified in the Decode Cycle) or from memory (if the instruction requires memory access - addressed during the Decode Cycle).
    3.  The **Arithmetic Logic Unit (ALU)** performs the specified operation on the operands.
    4.  The result of the operation is produced.

*   **Example:**  Following the previous example, the values in registers R2 and R3 are sent to the ALU. The ALU adds these values, and the result is ready to be written back.

### 2.4 Memory Access Cycle (MEM)

*   **Purpose:** To access memory if the instruction involves a memory read or write operation.  Not all instructions require this cycle (e.g., register-to-register addition).
*   **Steps:**
    1.  If the instruction is a **load instruction (LOAD)**, the address of the memory location to be read is already in the MAR (established during the Decode or Execute cycle). The Control Unit initiates a read operation.  The data is read from memory into the MDR.
    2.  If the instruction is a **store instruction (STORE)**, the address of the memory location to be written is in the MAR. The data to be written is in a register.  The Control Unit initiates a write operation. The data from the specified register is written to the memory location addressed by the MAR.

*   **Example (LOAD):**  The instruction is "LOAD R1, [1024]". During execution, the address 1024 is placed in the MAR. The Control Unit signals a read. The data at memory location 1024 is read into the MDR.
*   **Example (STORE):** The instruction is "STORE R1, [1024]". The address 1024 is placed in the MAR. The value in register R1 is the data to be written. The Control Unit signals a write. The data from R1 is written to memory location 1024.

### 2.5 Write-Back Cycle (WB)

*   **Purpose:** To store the result of the operation back into a register. Not all instructions require this cycle (e.g., store instructions).
*   **Steps:**
    1.  The result from the ALU (Execute cycle) or the MDR (Memory Access cycle, in the case of a load instruction) is written back into the register specified by the instruction.

*   **Example (ADD):**  Following the previous ADD example, the result of the addition (calculated in the ALU during the Execute cycle) is written back into register R1.
*   **Example (LOAD):**  The data retrieved from memory (placed in the MDR during the Memory Access cycle) is written back into register R1.

## 3. Data and Control Flow

*   **Data Flow:** Data moves between registers (PC, MAR, MDR, IR), memory, the ALU, and the register file.
*   **Control Signals:** The Control Unit generates control signals to manage the data flow, enable/disable components, and control the sequence of operations.  These signals determine:
    *   Whether to read from or write to memory.
    *   Which registers to select for input to the ALU.
    *   Which operation the ALU should perform.
    *   Which register to write the result to.

## 4. Example: Complete Instruction Cycle

Consider the instruction: `ADD R1, R2, R3` (Add the contents of R2 and R3 and store the result in R1).  Assume the instruction is stored at memory location 1000.

1.  **Fetch:**
    *   `MAR <- [PC]` (MAR gets 1000)
    *   `MDR <- Memory[MAR]` (MDR gets the instruction "ADD R1, R2, R3")
    *   `IR <- [MDR]` (IR gets the instruction "ADD R1, R2, R3")
    *   `PC <- [PC] + 4` (PC becomes 1004)
2.  **Decode:**
    *   The Control Unit decodes the instruction in the IR. It identifies ADD as the opcode and R1, R2, and R3 as the registers involved.
3.  **Execute:**
    *   The contents of R2 and R3 are read from the register file.
    *   The ALU performs the addition: `[R2] + [R3]`.
    *   The result is produced.
4.  **Memory Access:** (Skipped, as this is a register-to-register operation)
5.  **Write-Back:**
    *   `R1 <- ALU Result` (The result of the addition is written into register R1).

The cycle then repeats, fetching the instruction at memory location 1004.

## 5. Important Points to Remember

*   The Instruction Execution Cycle is the core process of any computer.
*   The Control Unit is responsible for coordinating all the steps in the cycle.
*   The PC is crucial for controlling the flow of execution.
*   The instruction set architecture (ISA) determines the instruction formats and available operations.
*   Not all instructions require all five stages of the cycle. Memory access and write-back stages are conditional.
*   Pipelining is a technique used to improve performance by overlapping the execution of multiple instructions.  While the basic stages remain the same, the processing is done in a parallel manner.

## 6. Practice Questions/Exercises

1.  **Describe the function of the Program Counter (PC).**

    *Answer:* The PC holds the memory address of the next instruction to be fetched.

2.  **Explain the purpose of the Memory Address Register (MAR) and the Memory Data Register (MDR).**

    *Answer:* The MAR holds the address of the memory location being accessed. The MDR holds the data being read from or written to memory.

3.  **What are the five stages of the instruction execution cycle?**

    *Answer:* Fetch, Decode, Execute, Memory Access (conditional), Write-Back (conditional).

4.  **Which stage involves performing the operation specified by the instruction?**

    *Answer:* Execute Cycle.

5.  **Under what circumstances is the Memory Access cycle skipped?**

    *Answer:* When the instruction does not involve reading from or writing to memory (e.g., register-to-register operations like `ADD R1, R2, R3`).

6.  **What component is responsible for decoding the instruction and generating control signals?**

    *Answer:* The Control Unit (CU).

7.  **Explain what happens during the fetch cycle if PC contains the value 2000 and each instruction is 4 bytes long.**

    *Answer:*
    1. The MAR is loaded with 2000.
    2. The instruction at memory address 2000 is fetched into MDR.
    3. The instruction from MDR is copied into IR.
    4. PC is incremented to 2004 (2000 + 4).

8.  **Consider the instruction `STORE R5, [3000]`. Outline the steps involved in the MEM cycle.**

    *Answer:*
    1. The address 3000 is in the MAR.
    2. The data to be written is in register R5.
    3. The Control Unit initiates a write operation to memory.
    4. The contents of R5 are written to memory location 3000.

9. **Explain the role of the ALU in the instruction execution cycle.**
    *Answer:* The ALU performs the arithmetic and logical operations specified by the instruction during the Execute cycle.

10. **Why is the write-back stage considered conditional? Provide an example of an instruction that would not require a write-back stage.**
    *Answer:* The Write-Back stage is conditional because not all instructions produce a result that needs to be stored in a register. For example, a `STORE` instruction does not need to write a result back to a register. Its main purpose is to store data from a register into memory.
