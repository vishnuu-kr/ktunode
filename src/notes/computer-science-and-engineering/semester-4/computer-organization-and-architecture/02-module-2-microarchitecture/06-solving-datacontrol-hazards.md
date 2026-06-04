---
title: "Solving Data/Control Hazards"
subject: "COMPUTER ORGANIZATION AND ARCHITECTURE"
module: "Module 2: Microarchitecture "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b045"
status: "completed"
scrapedAt: "2026-05-20T16:11:16.344Z"
---
# COMPUTER ORGANIZATION AND ARCHITECTURE - Module 2: Microarchitecture - Solving Data/Control Hazards

These notes cover the topic of solving data and control hazards in computer microarchitecture.

**Learning Outcomes:**

*   Understand the concept of data hazards and control hazards in pipelined processors.
*   Explain different techniques for resolving data hazards, including forwarding (bypassing) and stalling (pipelining interlocks).
*   Explain different techniques for resolving control hazards, including branch prediction, delayed branching, and branch target buffers.
*   Analyze the performance impact of different hazard resolution techniques.
*   Compare and contrast static and dynamic hazard resolution strategies.

## 1. Introduction to Hazards in Pipelined Processors

Pipelining is a technique used to improve processor throughput by overlapping the execution of multiple instructions. However, pipelining introduces hazards that can prevent the next instruction in the instruction stream from executing during its designated clock cycle. Hazards reduce the efficiency of the pipeline.

*   **Definition of Hazards:** Conditions that prevent the next instruction in the instruction stream from executing during its designated clock cycle. They disrupt the smooth flow of instructions in the pipeline.

There are three main types of hazards:

*   **Data Hazards:** Occur when an instruction needs data that is not yet available from a previous instruction.
*   **Control Hazards (Branch Hazards):** Occur when the pipeline does not know which instruction to fetch next because a branch instruction has not yet been evaluated.
*   **Structural Hazards:** Occur when two instructions need to use the same resource at the same time (e.g., accessing memory). We will focus on data and control hazards in this module.

## 2. Data Hazards

Data hazards arise when an instruction depends on the result of a previous instruction that is still in the pipeline.

*   **Definition of Data Hazards:** A situation where an instruction needs data produced by a preceding instruction that is not yet available.

### 2.1 Types of Data Hazards

There are three main types of data hazards:

*   **Read After Write (RAW):** An instruction tries to read a register before a previous instruction has written to it.  This is the most common type.
    *   Example:
        ```assembly
        ADD R1, R2, R3  ; Instruction 1: R1 = R2 + R3
        SUB R4, R1, R5  ; Instruction 2: R4 = R1 - R5 (depends on R1 from instruction 1)
        ```
*   **Write After Read (WAR):** An instruction tries to write to a register before a previous instruction has read from it.  Can only happen in out-of-order execution or with multiple write stages.
    *   Example:
        ```assembly
        LOAD R1, (R2)  ; Instruction 1: R1 = Memory[R2]
        ADD  R2, R3, R4  ; Instruction 2: R2 = R3 + R4
        STORE (R5), R1 ; Instruction 3: Memory[R5] = R1
        ```
        If instruction 2 writes to R2 before instruction 1 reads it, a WAR hazard occurs.
*   **Write After Write (WAW):** An instruction tries to write to a register before a previous instruction has written to it. Can only happen in out-of-order execution.
    *   Example:
        ```assembly
        ADD R1, R2, R3  ; Instruction 1: R1 = R2 + R3
        SUB R1, R4, R5  ; Instruction 2: R1 = R4 - R5
        ```
        If instruction 2 completes its write before instruction 1, the wrong value of R1 will be stored.

### 2.2 Techniques for Resolving Data Hazards

There are two primary techniques for resolving data hazards:

*   **Forwarding (Bypassing):** The result of an instruction is forwarded directly from the pipeline stage where it is produced to the pipeline stage where it is needed, without waiting for it to be written back to the register file.
    *   **Mechanism:** Detect the dependency and route the data directly from the producing instruction's output to the consuming instruction's input.
    *   **Advantages:** Reduces or eliminates stalls caused by data dependencies.
    *   **Disadvantages:** Requires extra hardware (multiplexers and control logic). Not all dependencies can be resolved through forwarding (e.g., load-use hazard with memory).
    *   **Example:**  In the RAW hazard example above, the result of `ADD R1, R2, R3` can be forwarded from the ALU output directly to the ALU input of `SUB R4, R1, R5`.
*   **Stalling (Pipeline Interlocks):**  The pipeline is stalled, or bubbles are inserted, to delay the execution of the dependent instruction until the required data is available.
    *   **Mechanism:** Detect the dependency and halt the pipeline stages of the dependent instruction until the data is ready.
    *   **Advantages:** Simpler to implement than forwarding.
    *   **Disadvantages:** Reduces pipeline throughput significantly due to wasted clock cycles.
    *   **Example:**  In the RAW hazard example above, the `SUB` instruction would be stalled until the `ADD` instruction writes its result to R1 (or a forwarding path is available).
*   **Compiler Scheduling:** The compiler can reorder instructions to increase the distance between dependent instructions, reducing the likelihood of data hazards.
    *   **Mechanism:** Reorder the instructions in a way that increases the number of instructions that do not depend on each other between dependant instructions
    *   **Advantages:** It will reduce the amount of stalling needed
    *   **Disadvantages:** Not always possible to reorder instructions

### 2.3 Load-Use Hazards

A special case of RAW hazard arises when an instruction tries to use the result of a `LOAD` instruction immediately in the next clock cycle.

*   **Definition:** Occurs when an instruction attempts to use data loaded from memory in the very next instruction.
*   **Problem:** Memory access latency may be longer than a single clock cycle, meaning the data may not be available in time for the subsequent instruction.
*   **Solution:** Forwarding may not be sufficient, and a stall (one or more clock cycles) is often required. This is because memory access often takes multiple cycles.

## 3. Control Hazards (Branch Hazards)

Control hazards occur when the pipeline encounters a branch instruction, and the target of the branch (the next instruction to be executed) is not known until later stages of the pipeline.

*   **Definition of Control Hazards:** A situation where the pipeline cannot determine the next instruction to fetch due to a branch instruction whose outcome is not yet known.

### 3.1 Techniques for Resolving Control Hazards

There are several techniques for resolving control hazards:

*   **Stalling (Branch Delay Slots):** The pipeline is stalled until the branch outcome is known. This is the simplest but least efficient approach.
    *   **Mechanism:** Insert bubbles into the pipeline after the branch instruction until the branch condition is evaluated.
    *   **Disadvantages:** Significant performance penalty, as several clock cycles can be wasted per branch.
*   **Delayed Branching:** The compiler inserts useful instructions (independent of the branch outcome) into the branch delay slot(s) immediately following the branch instruction.
    *   **Mechanism:**  Define a fixed number of instruction slots (delay slots) after each branch that will always be executed regardless of whether the branch is taken or not.
    *   **Advantages:** Can eliminate stalls if the compiler can find suitable instructions to fill the delay slots.
    *   **Disadvantages:** Requires compiler support to find independent instructions and can be difficult to fill all delay slots effectively, especially with deeper pipelines. Reduces instruction set flexibility.
*   **Branch Prediction:** The processor predicts whether the branch will be taken or not taken and fetches instructions accordingly.  If the prediction is correct, no stall occurs. If the prediction is incorrect, the pipeline must be flushed and the correct instructions fetched.
    *   **Mechanism:** Predict the outcome of a branch before it is actually executed.
    *   **Advantages:** Can significantly reduce the branch penalty if the prediction accuracy is high.
    *   **Disadvantages:** Requires prediction hardware and incurs a penalty for mispredictions (flushing the pipeline).
    *   **Types of Branch Prediction:**
        *   **Static Branch Prediction:** Predicts the branch outcome based on fixed rules (e.g., always predict "not taken" for backward branches, always predict "taken" for forward branches). Simple to implement, but less accurate.
        *   **Dynamic Branch Prediction:** Uses runtime information (branch history) to predict the outcome.  More complex but more accurate. Common techniques include:
            *   **1-bit Branch Predictor:** Tracks the last outcome of the branch.
            *   **2-bit Branch Predictor:** Requires two consecutive mispredictions before changing the prediction.  More robust than 1-bit predictor.
            *   **Branch Target Buffer (BTB):** A cache that stores the target address of recently executed branch instructions.  Used to quickly fetch the target instruction if the branch is predicted taken.  Can also store branch prediction information.
*   **Branch Target Buffer (BTB):** A special cache that stores information about recently executed branch instructions. Typically includes the address of the branch instruction, the target address (if taken), and branch prediction information (taken/not taken).
    *   **Mechanism:** When a branch instruction is fetched, the BTB is checked. If the branch is found in the BTB and predicted taken, the target instruction is fetched immediately.
    *   **Advantages:** Reduces the branch penalty by providing the target address quickly.
    *   **Disadvantages:** Requires extra hardware. Accuracy depends on the size and organization of the BTB. Can be combined with other branch prediction techniques.

### 3.2 Impact of Branch Prediction Accuracy

The performance impact of branch prediction depends heavily on the accuracy of the predictor.

*   **High Accuracy:**  Few mispredictions, resulting in minimal performance degradation.
*   **Low Accuracy:**  Frequent mispredictions, leading to frequent pipeline flushes and significant performance degradation.

## 4. Comparing Static and Dynamic Hazard Resolution

| Feature        | Static Hazard Resolution                                                              | Dynamic Hazard Resolution                                                                 |
|----------------|----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| Implementation | Relies on the compiler to detect and mitigate hazards.                                 | Relies on hardware within the processor to detect and resolve hazards at runtime.           |
| Complexity     | Simpler to implement.                                                                    | More complex to implement.                                                              |
| Performance    | Performance depends on the effectiveness of the compiler. Less adaptable to runtime variations. | More adaptable to runtime variations and can achieve better performance on average.       |
| Examples       | Compiler scheduling, delayed branching (can be considered static).                       | Forwarding, stalling, dynamic branch prediction, branch target buffer.                   |

## 5. Performance Impact of Hazard Resolution Techniques

The effectiveness of each hazard resolution technique is measured by how well it reduces the performance penalty associated with hazards.

*   **Forwarding:** Significantly reduces the penalty for RAW data hazards, leading to improved performance.  The effectiveness depends on how many dependencies can be resolved this way and on the frequency of these dependencies.
*   **Stalling:** Reduces performance due to pipeline bubbles. The number of stall cycles directly impacts the performance.
*   **Delayed Branching:** Reduces the branch penalty if delay slots are filled effectively. The effectiveness depends on how many slots can be filled with instructions that are unrelated to the branch and the number of delay slots.
*   **Branch Prediction:** Reduces the branch penalty based on prediction accuracy. The higher the accuracy, the lower the penalty.

## 6. Important Points to Remember

*   Hazards limit the performance benefits of pipelining.
*   Data hazards can be mitigated by forwarding and stalling.
*   Control hazards can be mitigated by stalling, delayed branching, and branch prediction.
*   The choice of hazard resolution technique depends on the specific architecture, performance requirements, and cost constraints.
*   The performance of branch prediction depends heavily on its accuracy.
*   Static hazard resolution techniques rely on the compiler, while dynamic techniques rely on hardware.

## 7. Practice Questions/Exercises

**Question 1:** Explain the difference between RAW, WAR, and WAW data hazards.  Provide a code example for each.

**Answer:**

*   **RAW (Read After Write):** An instruction tries to read a register before a previous instruction has written to it.
    ```assembly
    ADD R1, R2, R3  ; R1 = R2 + R3
    SUB R4, R1, R5  ; R4 = R1 - R5 (depends on R1 from ADD)
    ```
*   **WAR (Write After Read):** An instruction tries to write to a register before a previous instruction has read from it.
    ```assembly
    LOAD R1, (R2)  ; R1 = Memory[R2]
    ADD  R2, R3, R4  ; R2 = R3 + R4
    STORE (R5), R1 ; Memory[R5] = R1
    ```
*   **WAW (Write After Write):** An instruction tries to write to a register before a previous instruction has written to it.
    ```assembly
    ADD R1, R2, R3  ; R1 = R2 + R3
    SUB R1, R4, R5  ; R1 = R4 - R5
    ```

**Question 2:**  Describe how forwarding can resolve a RAW data hazard. What are the limitations of forwarding?

**Answer:** Forwarding resolves a RAW hazard by routing the result of the producing instruction directly from the output of the ALU (or other functional unit) to the input of the consuming instruction, bypassing the register file. Limitations include:
    *   Not all dependencies can be resolved (e.g., load-use hazards because memory takes time to access)
    *   Requires extra hardware

**Question 3:** Explain how a 2-bit branch predictor works. How does it improve upon a 1-bit predictor?

**Answer:** A 2-bit branch predictor uses a 2-bit counter to track the history of a branch. The counter can have four states:
    *   Strongly Taken
    *   Weakly Taken
    *   Weakly Not Taken
    *   Strongly Not Taken

The predictor only changes its prediction if the branch outcome is mispredicted twice in a row. This improves upon a 1-bit predictor, which changes its prediction after every misprediction, making it more susceptible to noisy branch behavior (e.g., a branch that is usually taken but occasionally not taken).

**Question 4:** What is a branch target buffer (BTB) and how does it help reduce the branch penalty?

**Answer:** A BTB is a cache that stores information about recently executed branch instructions, including the branch address, the target address (if the branch was taken), and the prediction (taken/not taken). When a branch instruction is fetched, the BTB is checked. If the branch is found in the BTB and predicted taken, the target instruction is fetched immediately, avoiding the stall that would otherwise occur while waiting for the branch to be resolved.

**Question 5:** Consider the following code snippet:

```assembly
LOAD R1, (R2)
ADD R3, R1, R4
STORE (R5), R3
```

What type of hazards exist in this code if it runs on a pipelined processor with no forwarding and no branch prediction?

**Answer:**

*   **RAW Hazard:** `ADD R3, R1, R4` depends on the result of `LOAD R1, (R2)`.  There will likely be a stall as the value of R1 is not available until `LOAD` completes its memory access. This is a load-use hazard.
*   **RAW Hazard:** `STORE (R5), R3` depends on the result of `ADD R3, R1, R4`.  There will be a stall because `STORE` cannot write to memory until `R3` is calculated.

These hazards will cause stalls in the pipeline, reducing performance. Forwarding, if implemented, could alleviate the second RAW hazard, but not the first due to memory latency.
