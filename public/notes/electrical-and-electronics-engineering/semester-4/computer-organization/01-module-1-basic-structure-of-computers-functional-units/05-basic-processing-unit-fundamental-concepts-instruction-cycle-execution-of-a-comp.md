---
title: "Basic processing unit – fundamental concepts – instruction cycle – execution of a complete instruction -single bus and multiple bus organization."
subject: "COMPUTER ORGANIZATION"
module: "Module 1: Basic Structure of computers –functional units "
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f54"
status: "completed"
scrapedAt: "2026-05-23T16:14:57.753Z"
---
# Computer Organization: Module 1 - Basic Structure of Computers - Functional Units

## Topic: Basic Processing Unit – Fundamental Concepts – Instruction Cycle – Execution of a Complete Instruction - Single Bus and Multiple Bus Organization

---

### **1. Introduction to the Basic Processing Unit (CPU)**

The Central Processing Unit (CPU) is the "brain" of a computer, responsible for executing instructions and performing calculations. It's the core component that drives the entire system.

#### **1.1 Key Components of the CPU**

As described in **Hamacher, Vranesic, & Zaky (5/e, 2011)**, the CPU typically consists of:

*   **Arithmetic Logic Unit (ALU):** Performs arithmetic operations (addition, subtraction, etc.) and logic operations (AND, OR, NOT, etc.).
*   **Control Unit (CU):** Directs the operation of the processor. It fetches instructions from memory, decodes them, and generates control signals to coordinate the actions of other components like the ALU, registers, and I/O devices.
*   **Registers:** Small, high-speed storage locations within the CPU used to hold data, instructions, and addresses that are actively being processed.

#### **1.2 Fundamental Concepts**

**CO1: Identify the relevance of functional units, memory locations and addressing modes in a digital computer.** (K2)

*   **Functional Units:** The CPU, Memory, and I/O devices are the primary functional units of a computer system. The CPU interacts with memory and I/O devices to process data.
*   **Memory Locations:** Memory is organized into addressable locations, each capable of storing a certain amount of data (e.g., a byte or a word). The CPU uses memory addresses to access specific data or instructions.
*   **Registers:** Essential for fast data manipulation. Different types of registers serve specific purposes:
    *   **Program Counter (PC):** Holds the address of the next instruction to be fetched.
    *   **Instruction Register (IR):** Holds the instruction currently being executed.
    *   **Memory Address Register (MAR):** Holds the address of the memory location to be accessed.
    *   **Memory Data Register (MDR) / Memory Buffer Register (MBR):** Holds the data being transferred to or from memory.
    *   **General-Purpose Registers:** Used to store operands and intermediate results of computations.
    *   **Accumulator (ACC):** Often a general-purpose register used for arithmetic and logic operations.
    *   **General Register (R1, R2, etc.):** Multiple registers that can be used for various purposes.

**CO2: Illustrate the register transfer logic, Processor logic design.** (K2)

*   **Register Transfer Logic:** This describes how data moves between registers and other components. It's based on the concept of transferring blocks of data between registers and performing operations on these blocks.
    *   **Example:** `R1 <- R2` means the contents of register R2 are transferred to register R1.
    *   **Example:** `R3 <- R1 + R2` means the contents of R1 and R2 are added, and the result is stored in R3.
*   **Processor Logic Design:** This involves the design of the control unit and ALU, which together manage the flow of data and the execution of instructions. This includes how instructions are fetched, decoded, and executed.

---

### **2. The Instruction Cycle**

The instruction cycle, also known as the fetch-decode-execute cycle, is the fundamental sequence of operations that a CPU performs to execute a single instruction.

#### **2.1 Stages of the Instruction Cycle**

**CO4: Demonstrate the control signals required for the execution of a given instruction.** (K3)

The instruction cycle generally consists of the following stages:

1.  **Fetch:**
    *   The address of the next instruction is in the **Program Counter (PC)**.
    *   The content of PC is transferred to the **Memory Address Register (MAR)**.
    *   A read signal is sent to memory.
    *   The instruction at the memory location specified by MAR is fetched and stored in the **Memory Data Register (MDR)**.
    *   The content of MDR is transferred to the **Instruction Register (IR)**.
    *   The PC is incremented to point to the next instruction (or updated based on the instruction type, like a jump).

    *   **Control Signals:** `PCout`, `MARin`, `Read`, `MDRin`, `IRin`, `PCin` (incremented).

2.  **Decode:**
    *   The instruction in the IR is decoded by the Control Unit.
    *   The opcode part of the instruction determines what operation needs to be performed.
    *   The address part of the instruction (if any) is used to access operands.

    *   **Control Signals:** `IRout` (to control unit), internal decoding logic.

3.  **Execute:**
    *   The Control Unit interprets the decoded instruction and generates appropriate control signals to perform the required operation.
    *   This stage can involve:
        *   Fetching operands from registers.
        *   Performing an operation in the ALU.
        *   Storing the result in a register or memory.
        *   Performing I/O operations.

    *   **Control Signals:** Various signals depending on the instruction (e.g., `R1out`, `R2in`, `ALU_add`, `Resultin`, `MDRin`, `MARin`, `Write`, `IO_read`).

#### **2.2 Example: Fetch-Decode-Execute Cycle for `ADD R1, R2` (Register-to-Register Addition)**

Let's assume the instruction `ADD R1, R2` is in memory location `X`.

*   **Fetch Stage:**
    1.  `PC = X`
    2.  `MAR <- PC` (Control: `PCout`, `MARin`)
    3.  `Read` memory (Control: `Read`)
    4.  `MDR <- Memory[X]`
    5.  `IR <- MDR` (Control: `MDRin`, `IRin`)
    6.  `PC <- PC + 1` (Control: `PCout`, `PCin` - increment)
*   **Decode Stage:**
    1.  Control Unit decodes the instruction in IR. It recognizes it as an `ADD` operation involving registers R1 and R2.
*   **Execute Stage:**
    1.  `R1out` (Contents of R1 go to ALU input A) (Control: `R1out`)
    2.  `R2out` (Contents of R2 go to ALU input B) (Control: `R2out`)
    3.  `Add` ALU operation (Control: `ALU_op = ADD`)
    4.  `Resultin R1` (The result from ALU is stored in R1) (Control: `ALU_out`, `R1in`)

**Important Point to Remember:** The instruction cycle is a continuous process. Once one instruction is executed, the CPU immediately begins fetching the next one.

---

### **3. Execution of a Complete Instruction**

Executing a complete instruction involves several steps, often broken down into sub-cycles or phases within the execute stage.

#### **3.1 Phases of Instruction Execution**

**CO2: Illustrate the register transfer logic, Processor logic design.** (K2)
**CO4: Demonstrate the control signals required for the execution of a given instruction.** (K3)

Consider an instruction that involves fetching data from memory, performing an arithmetic operation, and storing the result back into memory, like `ADD [address], R1`. This instruction adds the content of memory location `address` to the content of register `R1` and stores the result in `R1`.

1.  **Fetch Instruction:** (As described in the instruction cycle)
2.  **Decode Instruction:** (As described in the instruction cycle)
3.  **Fetch Operand(s):**
    *   The address specified in the instruction (e.g., `address`) is loaded into MAR.
    *   A read signal is issued to memory.
    *   The operand from memory is loaded into MDR.
    *   The operand from memory is transferred from MDR to a temporary register or directly to the ALU input.
    *   **Control Signals:** `Addressout` (from IR), `MARin`, `Read`, `MDRin`, `MDRout`, `TempRegin` or `ALUinA`.
4.  **Perform Operation:**
    *   The operand from memory and the operand from register R1 are sent to the ALU.
    *   The ALU performs the addition.
    *   **Control Signals:** `R1out`, `ALUinB`, `ALU_op = ADD`.
5.  **Store Result:**
    *   The result from the ALU is stored back into register R1.
    *   **Control Signals:** `ALU_out`, `R1in`.

**Example: `LOAD R1, [address]`**

*   **Fetch Instruction:** PC -> MAR -> Memory -> MDR -> IR. PC++.
*   **Decode Instruction:** Instruction decoded as LOAD.
*   **Fetch Operand Address:** Address from IR -> MAR. Read Memory (this memory access provides the address for the data). *This step is implicit if the address is directly in the instruction.*
*   **Fetch Data from Memory:** The address from the instruction (e.g., `address`) -> MAR. Read Memory. Data from Memory -> MDR.
*   **Store Data in Register:** MDR -> R1.
*   **Control Signals:**
    *   Fetch: `PCout`, `MARin`, `Read`, `MDRin`, `IRin`, `PCin` (incremented).
    *   Decode: Internal control logic.
    *   Fetch Operand Address: `Address_from_IRout`, `MARin`.
    *   Fetch Data: `Read`.
    *   Store Data: `MDRout`, `R1in`.

---

### **4. Computer Organization: Buses**

Buses are the communication pathways that connect the different functional units of a computer system. They carry data, addresses, and control signals.

#### **4.1 Single Bus Organization**

**CO2: Illustrate the register transfer logic, Processor logic design.** (K2)
**CO5: Illustrate the organization of different types of memories and I/O organization.** (K2)

In a single bus organization, all functional units (CPU, Memory, I/O) are connected to a single shared bus. This is a simpler design but can lead to performance bottlenecks as only one transfer can occur on the bus at a time.

*   **Structure:** A single bus serves as the central communication channel.
*   **Data Transfer:** Data moves between any two components through this single bus. This requires careful timing and control to avoid collisions.
*   **Instruction Execution:** Fetching an instruction from memory and then fetching operands from memory requires sequential bus usage.
*   **Advantages:** Simpler hardware design, lower cost.
*   **Disadvantages:** Performance bottleneck due to sequential access.

**Example (Hamacher et al., 5/e, 2011):**
Imagine a system with CPU, Memory, and I/O connected by a single bus.

*   To transfer data from memory to CPU: Memory -> Bus -> CPU.
*   To transfer data from CPU to I/O: CPU -> Bus -> I/O.

**Figure 1.1 from Hamacher et al. (5/e) would visually illustrate this.**

#### **4.2 Multiple Bus Organization**

**CO2: Illustrate the register transfer logic, Processor logic design.** (K2)
**CO5: Illustrate the organization of different types of memories and I/O organization.** (K2)

A multiple bus organization uses multiple buses to connect different functional units, allowing for parallel data transfers and improved performance.

*   **Structure:** Multiple buses (e.g., a data bus, an address bus, a control bus, or multiple internal buses within the CPU) connect various components. A common approach is to have a system bus connecting CPU, Memory, and I/O, and internal buses within the CPU connecting its registers and ALU.
*   **Data Transfer:** Allows for concurrent transfers, such as fetching an instruction from memory while simultaneously transferring data between registers.
*   **Instruction Execution:** Can fetch operands from memory while the CPU is already processing previous data, reducing the overall execution time.
*   **Advantages:** Higher performance due to parallelism, reduced bottlenecks.
*   **Disadvantages:** More complex hardware design, higher cost.

**Types of Multiple Bus Organizations:**

*   **Two-Bus System:** One bus for instructions, another for data.
*   **Three-Bus System:** Separate buses for instructions, data, and I/O.
*   **Internal CPU Buses:** Multiple buses within the CPU connect registers, ALU, etc., enabling parallel operations.

**Example (Mano M. M., Computer System Architecture, 2007):**
Mano's text often depicts a CPU with multiple internal buses connecting its registers and ALU. For example, a set of general-purpose registers might be connected to the ALU via two separate buses (one for each input to the ALU).

**Figure showing a CPU with multiple internal buses connecting registers and ALU would be highly relevant here (e.g., from Mano M.M., 2007).**

**Key Concept: Register Transfer Language (RTL):**
RTL is used to describe the operations performed on data stored in registers and the flow of data between registers. It is fundamental to understanding both single and multiple bus organizations.
*   `R1 <- R2`: Transfer content of R2 to R1.
*   `R3 <- R1 + R2`: Add contents of R1 and R2, store in R3.

**Impact of Bus Organization on Instruction Cycle:**
*   **Single Bus:** Fetch, Decode, Execute stages are largely sequential, with the bus being a shared resource.
*   **Multiple Buses (especially internal CPU buses):** Can overlap stages. For example, fetching operands for one instruction can happen in parallel with the ALU performing the operation for a *previous* instruction (if the operands are readily available from registers).

---

### **5. Practice Questions and Answers**

**Question 1 (CO1, K2):** What are the three primary functional units of a computer system, and what is the role of registers within the CPU?

**Answer 1:**
The three primary functional units are the CPU, Memory, and I/O devices. Registers within the CPU are small, high-speed storage locations used to hold data, instructions, and addresses that are actively being processed to facilitate quick access and manipulation by the ALU and Control Unit.

**Question 2 (CO4, K3):** Describe the steps involved in the fetch phase of the instruction cycle and list the key control signals generated.

**Answer 2:**
1.  The address from the Program Counter (PC) is transferred to the Memory Address Register (MAR).
2.  A read signal is sent to memory.
3.  The instruction at the memory location specified by MAR is fetched and loaded into the Memory Data Register (MDR).
4.  The content of MDR is transferred to the Instruction Register (IR).
5.  The PC is incremented to point to the next instruction.

Key control signals: `PCout`, `MARin`, `Read`, `MDRin`, `IRin`, `PCin` (incremented).

**Question 3 (CO2, K2):** Explain the difference between single bus and multiple bus organization in terms of data transfer and performance.

**Answer 3:**
*   **Single Bus:** All units share a single communication pathway. Data transfers are sequential, leading to potential bottlenecks and lower performance.
*   **Multiple Buses:** Multiple communication pathways exist, allowing for concurrent data transfers between different units. This parallelism reduces bottlenecks and significantly improves performance.

**Question 4 (CO4, K3):** For the instruction `STORE R1, [address]` (store content of R1 into memory location `address`), outline the sequence of operations and associated control signals. Assume the address is directly in the instruction.

**Answer 4:**
1.  **Fetch Instruction:** PC -> MAR -> Memory -> MDR -> IR. PC++.
    *   Control Signals: `PCout`, `MARin`, `Read`, `MDRin`, `IRin`, `PCin` (incremented).
2.  **Decode Instruction:** Control Unit decodes `STORE`.
    *   Control Signals: Internal control logic.
3.  **Fetch Operand (Address):** The `address` part of the instruction (from IR) is transferred to MAR.
    *   Control Signals: `Address_from_IRout`, `MARin`.
4.  **Transfer Data to Memory Buffer:** The content of R1 is transferred to MDR.
    *   Control Signals: `R1out`, `MDRin`.
5.  **Write to Memory:** A write signal is sent to memory.
    *   Control Signals: `Write`.

**Question 5 (CO1, K2):** What is the purpose of the Program Counter (PC) and the Instruction Register (IR)?

**Answer 5:**
*   **Program Counter (PC):** Holds the memory address of the *next* instruction to be fetched and executed. It keeps track of the program's flow.
*   **Instruction Register (IR):** Holds the instruction that is currently being decoded and executed. It provides the control unit with the necessary information about the operation to be performed.

---

### **6. Important Points to Remember**

*   The CPU's primary role is to execute instructions.
*   The instruction cycle (Fetch-Decode-Execute) is the fundamental process for instruction execution.
*   Registers are crucial for fast data manipulation within the CPU.
*   Buses are the communication highways; their organization (single vs. multiple) significantly impacts system performance.
*   Control signals are the "commands" that orchestrate the flow of data and operations within the computer.
*   Understanding register transfer logic is key to understanding how components interact.

---
