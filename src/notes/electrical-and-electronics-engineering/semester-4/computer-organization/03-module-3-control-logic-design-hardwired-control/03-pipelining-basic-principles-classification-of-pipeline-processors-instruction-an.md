---
title: "Pipelining: Basic principles , classification of pipeline processors, instruction and arithmetic pipelines (Design examples not required), hazard detection and resolution."
subject: "COMPUTER ORGANIZATION"
module: "Module 3: Control Logic Design: Hardwired control"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35f5b"
status: "completed"
scrapedAt: "2026-05-23T16:15:01.709Z"
---
# Computer Organization: Module 3: Control Logic Design - Pipelining

## Introduction to Pipelining

Pipelining is a fundamental technique used in computer architecture to improve instruction execution throughput by overlapping the execution of multiple instructions. Instead of executing instructions sequentially, pipelining breaks down instruction execution into a series of stages, allowing different stages of different instructions to execute concurrently. This is analogous to an assembly line in a factory, where different tasks are performed simultaneously on different products.

**Key Concept:** Pipelining aims to increase the **throughput** (number of instructions completed per unit of time) rather than reducing the **latency** (time taken to execute a single instruction).

**Learning Outcome Addressed:**
*   **CO3:** Explain the implementation aspects of arithmetic algorithms and pipelining concept in a digital computer. (Knowledge Level: K3)

**Reference:** Hamacher et al. (5/e), Chapter 8: Pipelining.

---

### Basic Principles of Pipelining

1.  **Task Decomposition:** An instruction execution is divided into a sequence of independent stages.
2.  **Concurrent Execution:** Multiple instructions are in different stages of execution simultaneously.
3.  **Clocking:** Each stage is typically executed in one clock cycle. The clock cycle time is determined by the longest stage.
4.  **Throughput Improvement:** If an instruction takes 'k' clock cycles to execute, a non-pipelined processor completes '1' instruction per 'k' clock cycles. A pipelined processor, once filled, can ideally complete '1' instruction per clock cycle, achieving a speedup of 'k'.

**Example:**
Consider a simple 4-stage pipeline:
*   **Fetch (F):** Fetch instruction from memory.
*   **Decode (D):** Decode the instruction and fetch operands.
*   **Execute (E):** Perform the arithmetic or logical operation.
*   **Writeback (W):** Write the result back to a register.

| Clock Cycle | Instruction 1 | Instruction 2 | Instruction 3 | Instruction 4 |
| :---------- | :------------ | :------------ | :------------ | :------------ |
| 1           | F             |               |               |               |
| 2           | D             | F             |               |               |
| 3           | E             | D             | F             |               |
| 4           | W             | E             | D             | F             |
| 5           |               | W             | E             | D             |
| 6           |               |               | W             | E             |
| 7           |               |               |               | W             |

In this example, after the pipeline is filled, one instruction is completed every clock cycle.

**Important Point:** The pipeline fill-up time is 'k' clock cycles. For 'n' instructions, a pipelined processor takes (k + n - 1) clock cycles, while a non-pipelined processor takes n * k clock cycles.

---

### Classification of Pipeline Processors

Pipeline processors can be classified based on various criteria:

1.  **By Function:**
    *   **Instruction Pipelining:** Overlapping the execution of different instructions. This is the most common type.
    *   **Arithmetic Pipelining:** Overlapping the operations within an arithmetic calculation (e.g., floating-point addition).

2.  **By Number of Stages:**
    *   **Two-Stage Pipeline:** Simple, often used for basic instruction fetching and execution.
    *   **Four-Stage Pipeline:** Common for RISC architectures (Fetch, Decode, Execute, Writeback).
    *   **Five-Stage Pipeline:** A more detailed breakdown of instruction processing, often including Memory Access (MEM) between Execute and Writeback.

3.  **By Type of Operation:**
    *   **Arithmetic Pipelines:** Designed for performing arithmetic operations efficiently.
    *   **Instruction Pipelines:** General-purpose pipelines for processing instructions.
    *   **Memory Pipelines:** Specifically designed to speed up memory access operations.

**Reference:**
*   Mano M. M. (2007), Chapter 9: Pipelining.
*   Stallings (9/e), Chapter 12: Pipelining.

---

### Instruction Pipelining

Instruction pipelining is the most prevalent type. A typical RISC instruction pipeline consists of the following stages:

*   **IF (Instruction Fetch):** Fetches the instruction from memory.
*   **ID (Instruction Decode):** Decodes the instruction, identifies the operation, and fetches operands from registers.
*   **EX (Execute):** Performs the operation specified by the instruction (e.g., ALU operation).
*   **MEM (Memory Access):** Accesses data memory for load/store operations.
*   **WB (Write Back):** Writes the result back to the destination register.

**Instruction Types and Pipeline Stages:**
Different instruction types utilize different stages:
*   **ALU Instructions (e.g., ADD, SUB):** IF, ID, EX, WB (MEM stage is often bypassed or used for something else).
*   **Load Instructions (e.g., LW):** IF, ID, EX (address calculation), MEM (data fetch), WB.
*   **Store Instructions (e.g., SW):** IF, ID, EX (address calculation), MEM (data write), WB (not always needed).
*   **Branch Instructions (e.g., BEQ):** IF, ID, EX (branch condition check and target address calculation), potentially WB (if branch is taken and PC is updated).

**Learning Outcome Addressed:**
*   **CO3:** Explain the implementation aspects of arithmetic algorithms and pipelining concept in a digital computer. (Knowledge Level: K3)
*   **CO4:** Demonstrate the control signals required for the execution of a given instruction. (Knowledge Level: K3) - *Understanding pipeline stages helps in understanding how control signals are generated for each stage.*

---

### Arithmetic Pipelines

Arithmetic pipelines are specialized pipelines designed to speed up complex arithmetic operations, particularly floating-point operations. They break down a complex arithmetic operation into a sequence of simpler stages.

**Example: Floating-Point Addition Pipeline**
Floating-point addition of two numbers typically involves several steps:
1.  **Align Exponents:** Adjust the mantissa of the number with the smaller exponent.
2.  **Add Mantissas:** Add the two mantissas.
3.  **Normalize Result:** Adjust the result to conform to the floating-point format.
4.  **Round Result:** Round the result to the required precision.

An arithmetic pipeline would implement these steps in sequential stages.

**Stages of a Floating-Point Adder Pipeline:**
*   **Stage 1: Fetch Operands:** Obtain the two numbers.
*   **Stage 2: Compare Exponents:** Determine the difference in exponents.
*   **Stage 3: Align Mantissas:** Shift the mantissa of the smaller number.
*   **Stage 4: Add/Subtract Mantissas:** Perform the addition or subtraction on the aligned mantissas.
*   **Stage 5: Normalize Result:** Shift the result to normalize it.
*   **Stage 6: Round Result:** Round the final result.

This pipeline can process multiple floating-point additions concurrently, significantly improving the throughput of scientific computations.

**Reference:**
*   Hamacher et al. (5/e), Chapter 8.2: Arithmetic Pipelines.
*   Patterson & Hennessy (5/e), Chapter 4: Processor Design ( discusses pipelining in detail, including arithmetic pipelines).

---

### Hazard Detection and Resolution

**Hazards** are situations in pipelining that prevent the next instruction in the stream from executing during its designated clock cycle. They cause pipeline stalls or bubbles, reducing the overall throughput.

There are three main types of hazards:

1.  **Structural Hazards:**
    *   **Cause:** Two or more instructions in the pipeline require the same hardware resource at the same time.
    *   **Example:** If the instruction memory and data memory are implemented as a single memory unit that can only be accessed by one instruction per clock cycle, an instruction fetch (IF) and a data load/store (MEM) might conflict.
    *   **Resolution:**
        *   **Duplication of Resources:** Provide separate hardware units for different stages (e.g., separate instruction cache and data cache).
        *   **Pipelining the Resource:** If the resource itself can be pipelined, divide its operation into stages.
        *   **Stalling:** Delay the instruction that requires the resource until it becomes available.

2.  **Data Hazards (Operand Dependencies):**
    *   **Cause:** An instruction depends on the result of a previous instruction that has not yet completed its execution and written back its result.
    *   **Types:**
        *   **RAW (Read After Write):** An instruction reads an operand before a previous instruction has written the result into it. This is the most common type.
            *   *Example:* `ADD R1, R2, R3` (writes to R1), followed by `SUB R4, R1, R5` (reads R1). If `SUB` executes before `ADD` writes to R1, `SUB` will get an incorrect value.
        *   **WAR (Write After Read):** An instruction writes to a destination operand before a previous instruction has read the original value of that operand. Less common in typical pipelines but can occur with out-of-order execution or complex instruction sets.
        *   **WAW (Write After Write):** An instruction writes to a destination operand before a previous instruction has written its result to the same destination. Also less common in standard pipelines.
    *   **Resolution:**
        *   **Stalling (Bubbles):** Insert NOP (No Operation) instructions or delay execution until the required data is available. This is simple but inefficient.
        *   **Forwarding (Bypassing):** Route the result of an instruction directly from the output of the stage where it is computed (e.g., EX or MEM) to the input of the stage that needs it (e.g., ID or EX for the next instruction) without waiting for the WB stage. This is the most effective technique for RAW hazards.
        *   **Register Renaming:** Use a pool of physical registers to avoid WAR and WAW hazards by assigning different physical registers to logically the same register name.

3.  **Control Hazards (Branch Hazards):**
    *   **Cause:** The pipeline fetches instructions speculatively, assuming a particular control flow. When a branch instruction is encountered, the actual next instruction to be fetched depends on the outcome of the branch, which is not known until later in the pipeline.
    *   **Example:** A `BEQ R1, R2, Target` instruction. The pipeline might fetch the next sequential instruction before knowing if the branch condition is met. If the branch is taken, the fetched sequential instruction is incorrect and must be discarded.
    *   **Resolution:**
        *   **Stalling:** Wait until the branch condition is resolved and the correct target address is known. This can significantly slow down execution.
        *   **Branch Prediction:** Guess the outcome of the branch (e.g., assume branch not taken or taken).
            *   **Static Prediction:** Always predict not taken, or always predict taken.
            *   **Dynamic Prediction:** Use hardware to predict the branch outcome based on past behavior.
        *   **Delayed Branch:** Execute the instruction immediately following the branch instruction in the pipeline regardless of the branch outcome (the branch is "delayed"). The compiler attempts to find a useful instruction to place in the delay slot.
        *   **Branch Target Buffer (BTB):** A cache that stores the target addresses of recently executed branches to speed up fetching the instruction at the target address.

**Learning Outcome Addressed:**
*   **CO3:** Explain the implementation aspects of arithmetic algorithms and pipelining concept in a digital computer. (Knowledge Level: K3) - *Hazards are crucial implementation aspects.*
*   **CO4:** Demonstrate the control signals required for the execution of a given instruction. (Knowledge Level: K3) - *Hazard detection logic directly influences control signal generation to stall or forward data.*

**Important Point:** Forwarding is a key technique to resolve data hazards. Branch prediction and delayed branches are common strategies for control hazards.

**Reference:**
*   Hamacher et al. (5/e), Chapter 8.3: Hazards.
*   Mano M. M. (2007), Chapter 9: Pipelining (covers hazards).
*   Patterson & Hennessy (5/e), Chapter 4: Processor Design.
*   Stallings (9/e), Chapter 12: Pipelining.

---

### Practice Questions and Exercises

**Question 1:**
What is the primary goal of pipelining in a computer processor?
a) To reduce the clock cycle time.
b) To decrease the latency of a single instruction.
c) To increase the throughput of instruction execution.
d) To reduce the number of hardware components.

**Answer:** c) To increase the throughput of instruction execution.

**Question 2:**
Explain the difference between structural hazards and data hazards in instruction pipelining. Provide a simple example for each.

**Answer:**
*   **Structural Hazard:** Occurs when two instructions need the same hardware resource simultaneously.
    *   *Example:* A processor with a single memory port needs to fetch an instruction (IF stage) and load data from memory (MEM stage) in the same clock cycle.
*   **Data Hazard:** Occurs when an instruction needs data that has not yet been produced by a preceding instruction.
    *   *Example (RAW):*
        ```assembly
        ADD R1, R2, R3  // Writes result to R1
        SUB R4, R1, R5  // Reads R1
        ```
        If the SUB instruction tries to read R1 before the ADD instruction has written its result, a data hazard occurs.

**Question 3:**
Describe the technique of "forwarding" (or "bypassing") and how it helps to resolve data hazards.

**Answer:**
Forwarding is a technique where the result of an instruction is sent directly from the output of the execution stage (e.g., EX or MEM) to the input of a subsequent instruction's execution stage, bypassing the Write Back (WB) stage. This allows an instruction to use the result of a previous instruction as soon as it is computed, rather than waiting for it to be written back to the register file. This is particularly effective for RAW data hazards.

**Question 4:**
What is a control hazard in pipelining, and what are two common methods to resolve it?

**Answer:**
A control hazard occurs when the pipeline fetches instructions based on a prediction of control flow (e.g., assuming a branch will not be taken), but the actual control flow is different. This leads to fetching incorrect instructions that must be discarded.
Two common resolution methods are:
1.  **Branch Prediction:** The processor predicts whether a branch will be taken or not taken and fetches instructions accordingly. If the prediction is wrong, the fetched instructions are flushed.
2.  **Delayed Branch:** The instruction immediately following the branch instruction is executed regardless of the branch outcome. The compiler is responsible for placing a useful instruction in this "branch delay slot."

**Question 5:**
Consider a 5-stage pipeline (IF, ID, EX, MEM, WB). If an arithmetic instruction takes 4 cycles and a load instruction takes 5 cycles in a non-pipelined processor, how many cycles would it take to execute 5 arithmetic instructions and 3 load instructions in a perfectly pipelined processor?

**Answer:**
*   **Pipeline stages:** 5 (IF, ID, EX, MEM, WB)
*   **Number of arithmetic instructions:** 5
*   **Number of load instructions:** 3
*   **Total instructions:** 8

In a perfectly pipelined processor, after the pipeline is filled, one instruction completes per cycle.
*   **Pipeline fill-up:** The first instruction takes 5 cycles to complete.
*   **Subsequent instructions:** Each of the remaining 7 instructions takes 1 cycle.
*   **Total cycles = Pipeline fill-up + (Total instructions - 1)**
*   **Total cycles = 5 + (8 - 1) = 5 + 7 = 12 cycles.**

*(Note: This assumes no hazards. In reality, hazards would increase this number.)*

---

### Important Points to Remember

*   **Throughput vs. Latency:** Pipelining improves throughput, not latency.
*   **Ideal Speedup:** For a k-stage pipeline, the ideal speedup is k.
*   **Pipeline Stages:** Common stages include IF, ID, EX, MEM, WB.
*   **Hazards:** Structural, Data, and Control hazards are key challenges in pipelining.
*   **Hazard Resolution Techniques:**
    *   **Structural:** Resource duplication, stalling.
    *   **Data:** Forwarding, stalling.
    *   **Control:** Branch prediction, delayed branches, BTBs.
*   **Forwarding:** Crucial for reducing stalls due to data dependencies.
*   **Branch Prediction:** Essential for mitigating performance loss from control hazards.

---

### Alignment with Course Outcomes

*   **CO1 (Identify relevance of functional units, memory locations, addressing modes):** Understanding pipeline stages (IF, MEM) directly relates to how functional units (memory, ALU) and memory access are utilized.
*   **CO2 (Illustrate register transfer logic, Processor logic design):** Pipelining is a processor logic design technique that relies on register transfers between pipeline stages.
*   **CO3 (Explain implementation aspects of arithmetic algorithms and pipelining concept):** This entire module is dedicated to the pipelining concept and its implementation aspects, including arithmetic pipelines.
*   **CO4 (Demonstrate control signals for instruction execution):** Hazard detection and resolution mechanisms inherently involve generating and modifying control signals to manage instruction flow and data forwarding.
*   **CO5 (Illustrate organization of different types of memories and I/O organization):** Structural hazards often arise from memory organization (e.g., single vs. dual port). Pipelining is a key technique for optimizing memory access performance.
