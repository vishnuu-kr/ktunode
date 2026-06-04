---
title: "Pipelined Processor - Pipelined Data Path, Pipelined Control"
subject: "COMPUTER ORGANIZATION AND ARCHITECTURE"
module: "Module 2: Microarchitecture "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b043"
status: "completed"
scrapedAt: "2026-05-20T16:11:14.914Z"
---
# COMPUTER ORGANIZATION AND ARCHITECTURE: MODULE 2 - MICROARCHITECTURE

## Topic: Pipelined Processor - Pipelined Data Path, Pipelined Control

**Learning Outcomes:** Upon completion of this section, you should be able to:

*   Explain the concept of pipelining and its benefits in processor design.
*   Describe the structure and operation of a pipelined data path.
*   Identify and explain different types of hazards (data, control, and structural) that can occur in a pipelined processor.
*   Explain different techniques for handling data hazards, including forwarding (bypassing) and stalling (pipeline interlocks).
*   Explain different techniques for handling control hazards, including branch prediction and delayed branching.
*   Describe the organization and function of a pipelined control unit.
*   Analyze the performance of pipelined processors, including calculating speedup.

---

### 1. Introduction to Pipelining

*   **Definition:** Pipelining is a technique that allows multiple instructions to be in different stages of execution concurrently. It's analogous to an assembly line in manufacturing, where different stages work on different parts of the same product simultaneously.

*   **Benefits:**
    *   **Increased Throughput:** Pipelining improves the number of instructions completed per unit time (throughput).
    *   **Improved Performance:** Under ideal conditions, pipelining can significantly reduce the execution time of a program.

*   **Key Concepts:**
    *   **Stages:** An instruction pipeline is divided into multiple stages (e.g., Fetch, Decode, Execute, Memory, Write Back).
    *   **Clock Cycle:** Each stage typically takes one clock cycle.
    *   **Instruction Latency:** The time it takes for a single instruction to complete execution from start to finish. Pipelining does *not* reduce instruction latency.
    *   **Throughput vs. Latency:**  Pipelining improves throughput (instructions per second) but generally doesn't change latency (time to complete a single instruction).

*   **Example:** A non-pipelined processor might take 5 clock cycles to execute one instruction.  A pipelined processor with 5 stages could potentially execute 5 instructions concurrently, completing one instruction per clock cycle (ideally).

### 2. Pipelined Data Path

*   **Basic Structure:** A pipelined data path consists of multiple stages, each performing a specific part of the instruction execution process. These stages are connected sequentially, with registers (pipeline registers) between each stage to hold intermediate results.

*   **Typical Stages:**
    *   **IF (Instruction Fetch):** Fetches the instruction from memory using the program counter (PC).  PC is typically incremented.
    *   **ID (Instruction Decode):** Decodes the instruction and reads the required registers from the register file.
    *   **EX (Execute):** Performs the arithmetic or logical operation specified by the instruction.  This stage uses the ALU.
    *   **MEM (Memory Access):** Accesses memory (read or write) if the instruction requires it.
    *   **WB (Write Back):** Writes the result of the operation back to the register file.

*   **Pipeline Registers:** Registers between pipeline stages.  They hold all the information required by subsequent stages (instruction, register values, ALU output, etc.). These registers ensure that data moves synchronously through the pipeline.

*   **Example:** Consider the instruction `ADD R1, R2, R3`.
    1.  **IF:** The instruction is fetched from memory.
    2.  **ID:** The instruction is decoded, and the values in R2 and R3 are read from the register file.
    3.  **EX:** The ALU adds the values from R2 and R3.
    4.  **MEM:** No memory access is needed for this instruction.  The stage essentially passes the data through unchanged.
    5.  **WB:** The result from the ALU is written back to R1.

*   **Diagram:**  (A hand-drawn diagram would be ideal here. Visualize the 5 stages sequentially with registers in between. Show instructions flowing through the stages. A text-based representation is below, but a diagram is far clearer)

```
  IF  --> |IF/ID Register| --> ID  --> |ID/EX Register| --> EX  --> |EX/MEM Register| --> MEM --> |MEM/WB Register| --> WB
 Instruction 1         Instruction 2         Instruction 3         Instruction 4         Instruction 5
```

### 3. Hazards in Pipelining

*   **Definition:** Hazards are situations that prevent the next instruction in the instruction stream from executing during its designated clock cycle.  They limit the performance benefits of pipelining.

*   **Types of Hazards:**

    *   **Data Hazards:** Occur when an instruction depends on the result of a previous instruction that is still in the pipeline.
        *   **RAW (Read After Write):** An instruction tries to read a register before a previous instruction has written to it. This is the most common type.
        *   **WAR (Write After Read):** An instruction tries to write to a register before a previous instruction reads it.  Can occur in out-of-order execution or when some stages take longer than others.
        *   **WAW (Write After Write):** An instruction tries to write to a register before a previous instruction writes to the same register. Can occur in out-of-order execution.

    *   **Control Hazards (Branch Hazards):** Occur when the pipeline needs to fetch the next instruction but doesn't know which instruction to fetch because the current instruction is a branch.

    *   **Structural Hazards:** Occur when multiple instructions in the pipeline require the same hardware resource at the same time.  For example, two instructions trying to access memory in the same clock cycle.

### 4. Handling Data Hazards

*   **Forwarding (Bypassing):**
    *   **Concept:**  Instead of waiting for the result to be written back to the register file, the result is forwarded directly from the output of the ALU or the memory stage to the input of the ALU in a subsequent stage.
    *   **Mechanism:** Dedicated forwarding paths (wires) are added to the data path to allow results to be bypassed directly from one stage to another.
    *   **Example:**
        ```assembly
        ADD R1, R2, R3     ; Instruction 1
        ADD R4, R1, R5     ; Instruction 2 (depends on R1)
        ```
        Without forwarding, Instruction 2 would have to stall until Instruction 1 writes the result to R1.  With forwarding, the result of the ADD operation in Instruction 1's EX stage is forwarded directly to the input of the ALU in Instruction 2's EX stage.
    *   **Limitations:** Forwarding cannot resolve all data hazards. If the dependent instruction requires the result immediately after the producing instruction enters the memory stage, forwarding might not be possible.

*   **Stalling (Pipeline Interlocks):**
    *   **Concept:** If forwarding cannot resolve a data hazard, the pipeline is stalled (bubbles are inserted) until the required data becomes available.
    *   **Mechanism:** Control logic detects the hazard and prevents subsequent instructions from entering the pipeline until the dependency is resolved.
    *   **Example:**  Consider the same example as above, but assume that forwarding is not possible. Instruction 2 will be stalled in the ID stage until Instruction 1 completes the EX stage and writes back to R1 (or at least the result is available in the MEM stage).
    *   **Performance Impact:** Stalling reduces the performance benefits of pipelining.

*   **Hazard Detection Unit:** A crucial component of the pipelined control unit.  It detects data hazards and control hazards and initiates appropriate actions (forwarding or stalling).

### 5. Handling Control Hazards

*   **Branch Prediction:**
    *   **Concept:** The processor tries to predict whether a branch will be taken or not taken.  The next instruction is fetched based on the prediction.
    *   **Types of Branch Prediction:**
        *   **Static Branch Prediction:**  Predicts the outcome of branches based on a fixed rule (e.g., predict all backward branches are taken, and all forward branches are not taken). Simple to implement but less accurate.
        *   **Dynamic Branch Prediction:** Uses past history to predict the outcome of branches.  More complex but more accurate.  Common dynamic prediction schemes include:
            *   **1-bit Branch Prediction:**  Remembers the outcome of the last execution of the branch.
            *   **2-bit Branch Prediction:** Requires two consecutive incorrect predictions before changing the prediction.  More robust than 1-bit. (e.g., saturating counters)
    *   **Branch Prediction Table (Branch History Table):**  Used to store the prediction history for each branch instruction.
    *   **Misprediction Penalty:** If the branch prediction is incorrect, the pipeline must be flushed (incorrectly fetched instructions are discarded), and the correct instruction must be fetched.  This results in a performance penalty.

*   **Delayed Branching:**
    *   **Concept:** The compiler inserts instructions (typically independent instructions) after the branch instruction that will be executed regardless of whether the branch is taken or not. These instructions effectively "fill" the pipeline slots that would otherwise be wasted due to the branch delay.
    *   **Effectiveness:** Requires the compiler to find suitable instructions to fill the delay slots.  Less effective in modern architectures.
    *   **Example:**
        ```assembly
        BEQZ R1, label  ; Branch if R1 is zero
        ADD R2, R3, R4  ; Delay slot instruction (executed regardless of branch)
        label:
        SUB R5, R6, R7  ; Target of the branch
        ```

*   **Flush Pipeline:** When a branch misprediction occurs, the incorrectly fetched instructions must be removed from the pipeline. This is called flushing the pipeline.

### 6. Pipelined Control

*   **Function:** The pipelined control unit manages the flow of instructions through the pipeline and ensures that each stage receives the correct control signals.
*   **Key Components:**
    *   **Instruction Decode and Control Signal Generation:** Decodes the instruction and generates the appropriate control signals for each stage.  This is similar to the control unit in a single-cycle processor, but with added complexity to handle pipelining.
    *   **Hazard Detection Unit:** Detects data and control hazards and initiates forwarding, stalling, or pipeline flushing as needed.
    *   **Forwarding Unit:** Implements the forwarding logic to bypass results between pipeline stages.
    *   **Stall Control Logic:**  Implements the logic to stall the pipeline when hazards cannot be resolved by forwarding.
    *   **Branch Prediction Unit:** If branch prediction is used, this unit predicts the outcome of branches and updates the branch prediction table.
*   **Control Signal Passing:** Control signals are passed down the pipeline along with the instruction and data using the pipeline registers.

### 7. Performance of Pipelined Processors

*   **Ideal Speedup:**  In an ideal pipelined processor with *n* stages, the speedup over a non-pipelined processor is approximately *n*.  This assumes no hazards and that all stages take the same amount of time.

*   **Factors Affecting Performance:**
    *   **Hazards:** Data, control, and structural hazards reduce the performance of pipelined processors.
    *   **Unequal Stage Delays:** If stages have different execution times, the clock cycle must be determined by the slowest stage, limiting performance.
    *   **Pipeline Overhead:** The overhead of pipeline registers and control logic can also impact performance.

*   **Calculating Speedup:**

    *   **Ideal Speedup:** Speedup = Number of Pipeline Stages
    *   **Realistic Speedup:** Speedup = (Execution Time Non-Pipelined) / (Execution Time Pipelined)
    *   To calculate execution time, consider the clock cycle time and the number of cycles required to execute a program (taking into account stalls and mispredictions).

    *   **Example:**  A program takes 1000 cycles to execute on a non-pipelined processor. The same program takes 250 cycles on a 4-stage pipelined processor. The speedup is 1000/250 = 4.

### 8. Important Points to Remember

*   Pipelining improves throughput but does not reduce instruction latency.
*   Hazards are a major factor limiting the performance of pipelined processors.
*   Forwarding and stalling are used to handle data hazards.
*   Branch prediction and delayed branching are used to handle control hazards.
*   The pipelined control unit is responsible for managing the flow of instructions and ensuring that each stage receives the correct control signals.
*   Real-world speedup is always less than the ideal speedup due to hazards.

### 9. Practice Questions & Exercises

1.  **What is pipelining, and what are its benefits?**
    *   *Answer:* Pipelining is a technique that allows multiple instructions to be in different stages of execution concurrently.  It increases throughput and improves performance by overlapping the execution of instructions.

2.  **Explain the difference between data hazards and control hazards.**
    *   *Answer:* Data hazards occur when an instruction depends on the result of a previous instruction that is still in the pipeline. Control hazards occur when the pipeline needs to fetch the next instruction but doesn't know which instruction to fetch because the current instruction is a branch.

3.  **Describe forwarding and explain how it helps to resolve data hazards.**
    *   *Answer:* Forwarding (or bypassing) is a technique where the result of an operation is forwarded directly from the output of the ALU or the memory stage to the input of the ALU in a subsequent stage, instead of waiting for the result to be written back to the register file.  This reduces the number of stalls required to resolve data hazards.

4.  **What is branch prediction, and why is it important in pipelined processors?**
    *   *Answer:* Branch prediction is a technique where the processor tries to predict whether a branch will be taken or not taken. It's important because it allows the pipeline to continue fetching instructions without stalling, even before the branch outcome is known. If the prediction is correct, the pipeline continues without interruption. If the prediction is incorrect, the pipeline must be flushed, and the correct instructions must be fetched, resulting in a performance penalty.

5.  **Consider the following code sequence:**

    ```assembly
    ADD R1, R2, R3
    SUB R4, R1, R5
    AND R6, R4, R7
    OR R8, R9, R10
    ```

    **Identify any data hazards that might occur in a 5-stage pipelined processor (IF, ID, EX, MEM, WB).  Explain how forwarding could be used to resolve these hazards.**
    *   *Answer:*
        *   **Hazard 1:** `SUB R4, R1, R5` depends on the result of `ADD R1, R2, R3` (RAW hazard on R1). Forwarding can resolve this hazard by forwarding the result from the output of the EX stage (where the ADD operation is performed) to the input of the ALU in the EX stage for the SUB instruction.
        *   **Hazard 2:** `AND R6, R4, R7` depends on the result of `SUB R4, R1, R5` (RAW hazard on R4). Forwarding can resolve this hazard by forwarding the result from the output of the EX stage (where the SUB operation is performed) to the input of the ALU in the EX stage for the AND instruction.
        *   There is no data hazard for the OR instruction.

6.  **A 5-stage pipelined processor has a clock cycle time of 1 ns.  What is the ideal instruction throughput (instructions per second)?**
    *   *Answer:* The clock cycle time is 1 ns, which is 1 x 10<sup>-9</sup> seconds.  The ideal throughput is 1 instruction per clock cycle. Therefore, the throughput is 1 / (1 x 10<sup>-9</sup>) = 1 x 10<sup>9</sup> instructions per second, or 1 billion instructions per second (1 GHz).

7.  **Explain the purpose of a hazard detection unit in a pipelined processor.**
    *   *Answer:* The hazard detection unit is responsible for detecting data and control hazards in the pipeline. It monitors the instructions in the pipeline and their register dependencies to identify potential hazards.  Based on the detected hazards, it generates control signals to activate forwarding, stall the pipeline, or flush the pipeline, as needed.

8.  **If a program spends 20% of its time executing branch instructions and the branch prediction accuracy is 80%, what is the impact of branch mispredictions on performance? Assume a misprediction penalty of 2 cycles.**
    *   *Answer:*
        *   Branch instructions: 20% of total instructions
        *   Branch misprediction rate: 100% - 80% = 20%
        *   Misprediction penalty: 2 cycles per misprediction
        *   Effective cycles added due to mispredictions: 20% (branch instructions) * 20% (misprediction rate) * 2 cycles = 0.08 cycles per instruction on average.
        *   This means that on average, each instruction adds an extra 0.08 cycles due to branch mispredictions.  The overall impact depends on the baseline CPI (cycles per instruction) without mispredictions. For example, if the baseline CPI is 1, then the CPI increases to 1.08, representing an 8% performance degradation.

This comprehensive set of notes should provide a strong foundation for understanding pipelined processors. Remember to supplement these notes with additional reading and practice problems to solidify your understanding. Good luck!
