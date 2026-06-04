---
title: "Basic Structure of computers :– Functional units - Basic operational concepts"
subject: "COMPUTER ORGANIZATION AND ARCHITECTURE"
module: "Module 1: Basic Structure of computers :– Functional units "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b037"
status: "completed"
scrapedAt: "2026-05-20T16:11:07.076Z"
---
# COMPUTER ORGANIZATION AND ARCHITECTURE - MODULE 1: BASIC STRUCTURE OF COMPUTERS

## Topic: Basic Structure of Computers – Functional Units - Basic Operational Concepts

### Learning Outcomes:

*   Understand the fundamental functional units of a computer.
*   Describe the basic operational concepts of how these units interact.
*   Explain the flow of information (data and instructions) within a computer system.
*   Understand the role of memory, CPU, I/O devices, and the interconnecting bus.

---

### 1. Functional Units of a Computer

A computer can be broadly divided into five main functional units:

*   **Input Unit:**
    *   **Definition:** The input unit provides the means of feeding data and instructions into the computer. It translates human-readable data into a form that the computer can process.
    *   **Examples:** Keyboard, mouse, scanner, microphone, network interface card.
    *   **Function:**
        *   Accepts data and instructions from the outside world.
        *   Converts the data and instructions into a suitable form for computer processing (e.g., binary).
        *   Supplies the converted data and instructions to the computer system.

*   **Memory Unit:**
    *   **Definition:** The memory unit stores both data and instructions necessary for processing. It can be visualized as a collection of storage locations, each with a unique address.
    *   **Types:**
        *   **Primary Memory (Main Memory):**  Directly accessible by the CPU. Fast but relatively expensive.  Examples: RAM (Random Access Memory), ROM (Read Only Memory).
        *   **Secondary Memory:**  Provides non-volatile storage. Slower but cheaper and larger capacity. Examples: Hard disk drive (HDD), Solid-state drive (SSD), USB drive.
    *   **Function:**
        *   Stores data and instructions during program execution.
        *   Provides fast access to data and instructions needed by the CPU (primary memory).
        *   Offers long-term storage of data and programs (secondary memory).

*   **Arithmetic and Logic Unit (ALU):**
    *   **Definition:** The ALU performs all arithmetic and logical operations. It's the "calculator" of the computer.
    *   **Function:**
        *   Performs arithmetic operations like addition, subtraction, multiplication, and division.
        *   Performs logical operations like AND, OR, NOT, XOR, comparisons (>, <, =).
        *   Receives data from the memory unit and outputs results back to the memory unit or the output unit.

*   **Output Unit:**
    *   **Definition:** The output unit takes processed data from the computer and presents it in a human-readable form.
    *   **Examples:** Monitor, printer, speakers, network interface card.
    *   **Function:**
        *   Receives processed data from the computer.
        *   Converts the data into a suitable form for human understanding (e.g., text, images, audio).
        *   Displays or outputs the converted data.

*   **Control Unit:**
    *   **Definition:** The control unit is the "brain" of the computer. It manages and coordinates the activities of all other functional units.
    *   **Function:**
        *   Fetches instructions from the memory unit.
        *   Decodes the instructions to determine the operation to be performed.
        *   Generates control signals to other units to execute the instructions.
        *   Controls the flow of data within the computer system.

### 2. Basic Operational Concepts

The basic operational concepts describe how the functional units interact to execute a program. Here's the typical flow:

1.  **Instruction Fetch:** The control unit fetches an instruction from memory (pointed to by the program counter - PC).

2.  **Instruction Decode:** The control unit decodes the instruction to determine the operation to be performed and the operands involved.

3.  **Operand Fetch:**  If the instruction requires operands, the control unit fetches them from memory or registers.

4.  **Execution:** The ALU performs the specified operation on the operands.

5.  **Result Store:**  The result of the operation is stored back into memory or a register.

6.  **Program Counter Update:** The program counter (PC) is updated to point to the next instruction to be executed.  This can involve simply incrementing the PC or loading a new address (e.g., in the case of a jump instruction).

7.  **Repeat:** Steps 1-6 are repeated for each instruction in the program.

**Illustration:**

Consider adding two numbers, A and B, and storing the result in C.

1.  **Load A into a register:** `LOAD R1, A` (Fetch A from memory location A and store it in register R1)
2.  **Load B into a register:** `LOAD R2, B` (Fetch B from memory location B and store it in register R2)
3.  **Add the registers:** `ADD R3, R1, R2` (Add the contents of R1 and R2, store the result in register R3)
4.  **Store the result in C:** `STORE C, R3` (Store the contents of R3 into memory location C)

In this example, the control unit coordinates the fetching of instructions and data, the execution of the addition by the ALU, and the storing of the result back into memory.

### 3. Flow of Information (Data and Instructions)

*   **Data:** Data flows between the input unit, memory unit, ALU, and output unit.  The ALU processes the data based on instructions.
*   **Instructions:** Instructions, like data, are stored in the memory unit.  The control unit fetches these instructions, decodes them, and issues control signals to execute them.

### 4. Role of Memory, CPU, I/O Devices, and the Interconnecting Bus

*   **Memory:**  Holds data and instructions for the CPU to access.  Primary memory (RAM) provides fast access, while secondary memory provides larger, persistent storage.
*   **CPU (Central Processing Unit):**  The "brain" of the computer. It includes the control unit and the ALU.  It fetches instructions, decodes them, executes them, and controls the flow of data.
*   **I/O Devices (Input/Output Devices):**  Allow the computer to interact with the outside world.  They provide the means for inputting data and instructions and outputting processed information.
*   **Interconnecting Bus:**  A collection of wires that allows different components of the computer to communicate with each other. It consists of:
    *   **Address Bus:** Used to specify the memory location or I/O device being accessed.
    *   **Data Bus:** Used to transfer data between components.
    *   **Control Bus:** Used to transmit control signals (e.g., read, write, interrupt) between components.

### 5. Important Points to Remember

*   The functional units work together in a coordinated manner to execute programs.
*   The control unit is responsible for orchestrating the operation of all other units.
*   The instruction execution cycle (fetch, decode, execute, store) is the fundamental process of computer operation.
*   The bus is the backbone of the computer, enabling communication between different components.

---

### Practice Questions and Exercises:

**1. Which functional unit is responsible for performing arithmetic and logical operations?**

*   a) Memory Unit
*   b) Control Unit
*   c) ALU
*   d) Input Unit

**Answer: c) ALU**

**2.  Explain the role of the control unit in the instruction execution cycle.**

**Answer:** The control unit fetches instructions from memory, decodes them to determine the operation to be performed and the operands involved, generates control signals to other units to execute the instructions, and controls the flow of data within the computer system.  It manages the entire process.

**3.  What is the purpose of the address bus?**

**Answer:** The address bus is used to specify the memory location or I/O device being accessed. It carries the address of the memory location or I/O port that the CPU wants to read from or write to.

**4.  Describe the difference between primary and secondary memory.**

**Answer:** Primary memory (RAM) is directly accessible by the CPU, offering fast access speeds but being relatively expensive and volatile (data is lost when power is turned off). Secondary memory (e.g., HDD, SSD) provides non-volatile storage with larger capacity and lower cost, but slower access speeds.

**5. Explain the steps involved in executing an instruction to add two numbers stored in memory and store the result back in memory.**

**Answer:**  The steps would involve:
    1. Fetch the instruction (e.g., `ADD C, A, B`) from memory.
    2. Decode the instruction to determine that it's an addition operation with operands A, B, and C (destination).
    3. Fetch the value of A from memory.
    4. Fetch the value of B from memory.
    5. Perform the addition operation (A + B) using the ALU.
    6. Store the result in memory location C.
    7. Increment the Program Counter (PC) to point to the next instruction.

**6.  If a computer has a 32-bit address bus, what is the maximum amount of memory it can address?**

**Answer:**  A 32-bit address bus can address 2<sup>32</sup> bytes of memory. This is equal to 4,294,967,296 bytes, or 4 GB (Gigabytes).

**7. What are the three major components of the CPU? Explain each component's function.**

**Answer:** The three major components of the CPU are:

    *   **Control Unit:** Fetches instructions, decodes them, and generates control signals to orchestrate the execution of the instructions. It manages the flow of data and instructions within the CPU and between the CPU and other components.
    *   **Arithmetic Logic Unit (ALU):** Performs arithmetic operations (addition, subtraction, multiplication, division) and logical operations (AND, OR, NOT, XOR, comparisons) on data.
    *   **Registers:** Small, high-speed storage locations within the CPU used to hold data and instructions that are frequently accessed. Examples include the Program Counter (PC), Accumulator, and general-purpose registers.
