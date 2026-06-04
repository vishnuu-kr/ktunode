---
title: "Hazards"
subject: "COMPUTER ORGANIZATION AND ARCHITECTURE"
module: "Module 2: Microarchitecture "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b044"
status: "completed"
scrapedAt: "2026-05-20T16:11:15.622Z"
---
# COMPUTER ORGANIZATION AND ARCHITECTURE: Module 2 - Microarchitecture: Hazards

## Introduction

This module delves into hazards, a crucial concept in understanding the performance limitations of pipelined microarchitectures. Hazards are situations that prevent the next instruction in the instruction stream from executing during its designated clock cycle. They arise due to dependencies between instructions and resource limitations. Resolving hazards is critical for achieving optimal performance in pipelined processors.

## Learning Outcomes

By the end of this module, you will be able to:

1.  **Identify and classify different types of hazards:** Data Hazards, Control Hazards, and Structural Hazards.
2.  **Explain the causes of each type of hazard.**
3.  **Describe and compare different techniques for handling hazards:** Stalling (Pipeling Bubbles), Forwarding (Bypassing), Branch Prediction, and Delayed Branching.
4.  **Analyze the impact of hazards on pipeline performance.**
5.  **Apply appropriate hazard resolution techniques to specific code sequences.**

## 1. Types of Hazards

### 1.1 Data Hazards

*   **Definition:** A data hazard occurs when an instruction needs the result of a previous instruction that is still in the pipeline. The result is not yet available, preventing the dependent instruction from proceeding.

*   **Causes:** RAW (Read After Write), WAR (Write After Read), and WAW (Write After Write) dependencies.

    *   **RAW (Read After Write):** An instruction attempts to read a register *before* a previous instruction has written to it.  This is the most common data hazard.

        *   **Example:**

            ```assembly
            ADD R1, R2, R3  ; R1 = R2 + R3
            SUB R4, R1, R5  ; R4 = R1 - R5
            ```

            The `SUB` instruction needs the value of `R1`, which is being calculated by the `ADD` instruction. If the `ADD` instruction hasn't written the result to `R1` yet, the `SUB` instruction will read the wrong value.

    *   **WAR (Write After Read):** An instruction attempts to write to a register *before* a previous instruction has read from it.

        *   **Example:**

            ```assembly
            MOV R1, R2      ; R1 = R2
            ADD R2, R3, R4  ; R2 = R3 + R4
            ```

            If the `ADD` instruction writes to `R2` before the `MOV` instruction reads from `R2`, it will result in WAR hazard. Note that this is typically only a problem in pipelines that support out-of-order execution. In a perfectly in-order pipeline, WAR hazards cannot arise.

    *   **WAW (Write After Write):** An instruction attempts to write to a register *before* a previous instruction has written to it.

        *   **Example:**

            ```assembly
            MOV R1, R2      ; R1 = R2
            ADD R1, R3, R4  ; R1 = R3 + R4
            ```

            If the `ADD` instruction writes to `R1` before the `MOV` instruction writes to `R1`, it will result in WAW hazard.  This hazard is also typically only a problem in out-of-order pipelines.

### 1.2 Control Hazards

*   **Definition:** A control hazard (also called a branch hazard) occurs when the pipeline doesn't know which instruction to fetch next because the current instruction is a branch and its outcome is not yet known.

*   **Causes:** Branch instructions (conditional and unconditional jumps, calls, and returns).  The address of the next instruction depends on the outcome of the branch.

*   **Example:**

    ```assembly
    BEQ R1, R2, Target  ; Branch to Target if R1 == R2
    ADD R3, R4, R5      ; Instruction following BEQ (fetched speculatively)
    Target:
    SUB R6, R7, R8      ; Instruction at Target
    ```

    The `BEQ` instruction compares `R1` and `R2`.  The processor needs to know the result of the comparison to decide whether to fetch the `ADD` instruction or the `SUB` instruction at `Target`. Until the `BEQ` instruction completes the comparison, the pipeline may fetch the wrong instruction.

### 1.3 Structural Hazards

*   **Definition:** A structural hazard occurs when multiple instructions in the pipeline need to use the same resource (e.g., memory, ALU) at the same time.

*   **Causes:** Limited hardware resources.

*   **Example:**

    Imagine a single memory unit used for both instruction fetch and data access.

    *   Instruction 1: Instruction Fetch (IF)
    *   Instruction 2: Data Memory Access (MEM)

    If Instruction 1 needs to fetch an instruction at the same time as Instruction 2 needs to access data memory, there is a structural hazard.  The pipeline must stall one of the instructions.

## 2. Techniques for Handling Hazards

### 2.1 Stalling (Pipeline Bubbles)

*   **Description:** Stalling involves inserting "bubbles" (NOPs) into the pipeline.  A bubble is an empty clock cycle where no useful work is done.  This delays the execution of subsequent instructions, resolving the hazard.

*   **Advantages:** Simple to implement.

*   **Disadvantages:** Reduces pipeline performance significantly. Each stall cycle reduces the Instructions Per Cycle (IPC).

*   **Example (Data Hazard - Stalling):**

    ```assembly
    ADD R1, R2, R3  ; R1 = R2 + R3
    SUB R4, R1, R5  ; R4 = R1 - R5
    ```

    Without forwarding, we'd need to stall the `SUB` instruction until the `ADD` instruction has written the result to `R1`.

    ```
    Cycle:   1   2   3   4   5   6
    ADD      IF  ID  EX  MEM WB
    SUB          IF  ID  --  EX  MEM WB  <-- Stalled during EX
    ```

### 2.2 Forwarding (Bypassing)

*   **Description:** Forwarding (or bypassing) allows the result of an instruction in the EX or MEM stage to be directly forwarded to the ALU input of a subsequent instruction that needs it, bypassing the register file.

*   **Advantages:** Improves performance by reducing or eliminating stalls caused by data hazards.

*   **Disadvantages:** Requires additional hardware for forwarding paths and control logic. Some hazards might still require stalls if forwarding is not possible (e.g., load-use hazards - see below).

*   **Example (Data Hazard - Forwarding):**

    ```assembly
    ADD R1, R2, R3  ; R1 = R2 + R3
    SUB R4, R1, R5  ; R4 = R1 - R5
    ```

    With forwarding, the result of the `ADD` instruction (calculated in the EX stage) is forwarded directly to the ALU input of the `SUB` instruction in its EX stage.  No stall is needed.

    ```
    Cycle:   1   2   3   4   5
    ADD      IF  ID  EX  MEM WB
    SUB          IF  ID  EX  MEM WB  <-- Receives forwarded data in EX
    ```

*   **Load-Use Hazard:** A special case of data hazard that often requires a stall even with forwarding. This occurs when an instruction attempts to use the result of a load instruction *immediately* after the load. The data loaded from memory might not be available in time for forwarding.

    *   **Example:**
        ```assembly
        LW R1, 0(R2)   ; Load R1 from memory location 0 + R2
        ADD R3, R1, R4   ; R3 = R1 + R4
        ```
        A stall is often needed between the `LW` and `ADD` instruction even with forwarding implemented.

### 2.3 Branch Prediction

*   **Description:** Branch prediction attempts to predict the outcome of a branch instruction before it is actually executed. If the prediction is correct, the pipeline can continue fetching instructions without stalling. If the prediction is wrong, the pipeline must be flushed, and the correct instruction stream fetched, incurring a penalty.

*   **Types of Branch Prediction:**

    *   **Static Branch Prediction:** Predicts branches based on fixed rules (e.g., always predict "not taken" for backward branches and "taken" for forward branches). Simple, but less accurate.

    *   **Dynamic Branch Prediction:** Predicts branches based on the history of previous branch outcomes. More complex, but significantly more accurate. Examples:
        *   **1-bit predictor:** Remembers the last outcome (taken/not taken).
        *   **2-bit predictor:** Requires two consecutive incorrect predictions before changing the prediction.  More robust than 1-bit.  Often used in branch prediction tables (BHT).

*   **Branch Target Buffer (BTB):**  A cache that stores the target address of recently executed branch instructions.  Used to quickly determine the target address of a predicted-taken branch, further reducing the branch penalty.

*   **Example (Branch Prediction):**

    ```assembly
    BEQ R1, R2, Target  ; Branch to Target if R1 == R2
    ADD R3, R4, R5      ; Instruction following BEQ
    Target:
    SUB R6, R7, R8      ; Instruction at Target
    ```

    Assume the branch predictor predicts that the `BEQ` instruction will *not* be taken. The processor will speculatively fetch and execute the `ADD` instruction.

    *   **Correct Prediction:** If `R1 != R2`, the prediction was correct. The `ADD` instruction is executed without a stall.
    *   **Incorrect Prediction:** If `R1 == R2`, the prediction was incorrect. The pipeline must be flushed, and the processor must fetch and execute the `SUB` instruction at `Target`. This incurs a significant performance penalty.

### 2.4 Delayed Branching

*   **Description:** Delayed branching involves placing instructions that are *always* executed in the "delay slot" immediately following a branch instruction. These instructions are executed regardless of whether the branch is taken or not.

*   **Advantages:** Can eliminate branch stalls if suitable instructions can be found to fill the delay slot.

*   **Disadvantages:** Requires careful code scheduling by the compiler.  Becomes less effective with deeper pipelines and more complex branch behavior.  Less commonly used in modern architectures.

*   **Example (Delayed Branching):**

    ```assembly
    BEQ R1, R2, Target  ; Branch to Target if R1 == R2
    ADD R3, R4, R5      ; Delay slot instruction (always executed)
    Target:
    SUB R6, R7, R8      ; Instruction at Target
    ```

    The `ADD` instruction in the delay slot will *always* be executed, regardless of whether the `BEQ` instruction is taken or not.  To make this work correctly, the `ADD` instruction must not depend on the outcome of the `BEQ` instruction, and the result of the `ADD` should still be useful regardless of whether the branch is taken.

## 3. Impact of Hazards on Pipeline Performance

Hazards significantly impact pipeline performance by:

*   **Increasing the Average CPI (Cycles Per Instruction):** Stalls introduce idle cycles, increasing the average number of cycles required to execute each instruction.

*   **Reducing Throughput:** Fewer instructions are completed per unit of time.

*   **Increasing Execution Time:** The overall time required to execute a program increases.

The effectiveness of hazard resolution techniques directly affects the overall performance of the pipeline. A good hazard resolution strategy minimizes stalls and branch misprediction penalties, leading to higher performance.

## 4. Applying Hazard Resolution Techniques

Let's analyze the following code sequence and apply appropriate hazard resolution techniques:

```assembly
LW R1, 0(R2)     ; Load R1 from memory
ADD R3, R1, R4     ; R3 = R1 + R4
SUB R5, R6, R7
BEQ R5, R8, Target  ; Branch if R5 == R8
AND R9, R10, R11
Target:
OR R12, R13, R14
```

*   **Data Hazard:**  There is a RAW data hazard between the `LW` and `ADD` instructions. The `ADD` instruction needs the value loaded by the `LW` instruction.

    *   **Solution:**
        *   **Stalling:** Insert a stall cycle between the `LW` and `ADD` instructions.
        *   **Forwarding:** If forwarding is implemented, the data from memory can be forwarded to the `ADD` instruction. However, a load-use hazard might still require a single stall cycle.

*   **Control Hazard:** There is a control hazard due to the `BEQ` instruction.

    *   **Solution:**
        *   **Stalling:** Stall the pipeline until the branch outcome is known.
        *   **Branch Prediction:** Predict the outcome of the branch and fetch instructions accordingly. If the prediction is incorrect, flush the pipeline.
        *   **Delayed Branching:**  If using delayed branching, find an instruction that can be placed in the delay slot after the `BEQ` instruction that is always safe to execute.  The `AND R9, R10, R11` looks like a good candidate if there is no dependency on the outcome of the `BEQ`

## 5. Important Points to Remember

*   Hazards are inherent to pipelined architectures due to dependencies between instructions and resource limitations.
*   Data hazards are the most common type of hazard.
*   Forwarding can significantly reduce stalls caused by data hazards but may not eliminate them entirely (e.g., load-use hazards).
*   Branch prediction is crucial for mitigating the performance impact of control hazards.
*   The choice of hazard resolution technique depends on the architecture, the complexity of the instructions, and the performance requirements.
*   Understanding hazards and their resolution is essential for optimizing code and designing efficient pipelined processors.

## 6. Practice Questions/Exercises

1.  **Consider the following code sequence:**

    ```assembly
    MUL R1, R2, R3  ; R1 = R2 * R3
    ADD R4, R1, R5  ; R4 = R1 + R5
    SUB R6, R1, R7  ; R6 = R1 - R7
    ```

    a) Identify all data hazards.
    b) Assuming no forwarding, how many stall cycles are required to resolve the hazards?
    c) Assuming forwarding is available, how many stall cycles are required? (Assume a single cycle MUL instruction)

2.  **Explain the difference between static and dynamic branch prediction.**  Which one is generally more accurate?  Why?

3.  **Explain how a Branch Target Buffer (BTB) helps to reduce the branch penalty.**

4.  **What is a structural hazard? Provide an example, and describe how it can be resolved.**

5.  **Rewrite the following code sequence to take advantage of delayed branching (assuming one delay slot):**

    ```assembly
    BEQ R1, R2, Target
    MOV R3, R4        ; Move R4 to R3 (only if branch is NOT taken)
    Target:
    ADD R5, R6, R7
    ```

## 7. Answers to Practice Questions/Exercises

1.  **a) Data Hazards:**

    *   RAW hazard between `MUL` and `ADD` (R1)
    *   RAW hazard between `MUL` and `SUB` (R1)

    **b) Stall Cycles (No Forwarding):**

    The `MUL` instruction takes one cycle to complete. The `ADD` instruction needs R1, which will be written by the `MUL` in the WB stage of the `MUL`. Therefore, the ADD must stall until cycle 5 for R1 to be written. Then the `SUB` needs to stall because it also relies on the `MUL`, making it another stall.

    The following is the pipeline without any hazard mitigation:

    ```
    MUL IF ID EX MEM WB
    ADD     IF ID EX MEM WB
    SUB         IF ID EX MEM WB
    ```

    To resolve the hazards, we would have to insert stall cycles, which becomes

    ```
    MUL IF ID EX MEM WB
    ADD     ST ST ST IF ID EX MEM WB
    SUB        ST ST ST ST ST IF ID EX MEM WB
    ```

    We need 3 + 5 cycles.

    **c) Stall Cycles (Forwarding):**

    With forwarding, the `ADD` can receive the data from the EX stage output of the `MUL`. Therefore, the `ADD` only needs to stall by 1 cycle to allow for the MUL to finish execution, and then the SUB will need to stall 1 cycle as well.

    ```
    MUL IF ID EX MEM WB
    ADD     ST IF ID EX MEM WB
    SUB        ST IF ID EX MEM WB
    ```

    The answer is 2 cycles.

2.  **Static vs. Dynamic Branch Prediction:**

    *   **Static Branch Prediction:** Uses fixed rules to predict branch outcomes (e.g., predict "not taken" for backward branches). Simple to implement but generally less accurate.
    *   **Dynamic Branch Prediction:** Uses the history of previous branch outcomes to predict future outcomes. More complex but significantly more accurate.

    Dynamic branch prediction is generally more accurate because it adapts to the actual behavior of the program. It learns the patterns of branch execution and makes predictions based on those patterns.

3.  **Branch Target Buffer (BTB):**

    A BTB is a cache that stores the target addresses of recently executed branch instructions. When a branch instruction is encountered, the BTB is checked. If the branch is found in the BTB and is predicted to be taken, the pipeline can immediately fetch the instruction at the target address, bypassing the need to calculate the target address. This reduces the branch penalty by avoiding stalls during target address calculation.

4.  **Structural Hazard:**

    A structural hazard occurs when multiple instructions in the pipeline need to use the same resource at the same time.  For example, a single memory unit used for both instruction fetch and data access can cause a structural hazard.

    **Resolution:**

    *   **Stalling:** Stall one of the instructions until the resource becomes available.
    *   **Resource Duplication:** Provide multiple instances of the resource (e.g., separate instruction and data caches) to eliminate the conflict.

5.  **Delayed Branching:**

    ```assembly
    BEQ R1, R2, Target
    ADD R5, R6, R7    ; Move ADD to delay slot (assuming ADD is independent)
    Target:
    MOV R3, R4        ; Move R4 to R3
    ```

    **Important Considerations for correctness:**

    * R5, R6, and R7 should NOT be the same as R1 or R2 to avoid any dependencies on the outcome of the BEQ statement.
    * It's important to make sure that if target is never reached, we should still ADD to R5.
