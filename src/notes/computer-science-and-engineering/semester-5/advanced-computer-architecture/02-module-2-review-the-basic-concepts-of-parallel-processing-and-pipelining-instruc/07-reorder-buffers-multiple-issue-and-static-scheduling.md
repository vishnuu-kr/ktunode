---
title: "Reorder Buffers Multiple issue and static scheduling"
subject: "ADVANCED COMPUTER ARCHITECTURE"
module: "Module 2: Review the basic Concepts of Parallel Processing and Pipelining Instruction Level Parallelism"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b854"
status: "completed"
scrapedAt: "2026-05-20T16:42:32.670Z"
---
# ADVANCED COMPUTER ARCHITECTURE: Module 2 - Reorder Buffers, Multiple Issue, and Static Scheduling

## Introduction

This module delves into Instruction Level Parallelism (ILP) and focuses on achieving performance improvements through advanced techniques like Reorder Buffers (ROB), multiple issue architectures, and static scheduling. These mechanisms aim to exploit the parallelism inherent in programs, allowing multiple instructions to execute concurrently.

## Learning Outcomes

Upon completion of this topic, you should be able to:

*   Understand the concept of Instruction Level Parallelism (ILP).
*   Explain the purpose and functionality of Reorder Buffers (ROBs).
*   Describe the characteristics of multiple issue processors.
*   Compare and contrast static and dynamic scheduling.
*   Analyze the impact of static scheduling techniques on performance.
*   Understand the limitations of static scheduling.
*   Understand the concept of Hardware loop unrolling.
*   Be able to compare and contrast the advantages and disadvantages of static vs. dynamic approaches.

## 1. Instruction Level Parallelism (ILP)

*   **Definition:** ILP refers to the ability to execute multiple instructions concurrently within a single processor core.  This is achieved by overlapping the execution of instructions, allowing the processor to complete more instructions per unit of time.
*   **Goal:**  To increase the Instructions Per Cycle (IPC) above 1.
*   **Key Techniques for Exploiting ILP:**
    *   Pipelining: Overlapping the execution of multiple instructions.
    *   Multiple Issue: Issuing multiple instructions in a single clock cycle.
    *   Dynamic Scheduling (Out-of-Order Execution):  Executing instructions in a different order than they appear in the program to avoid stalls due to data dependencies.
    *   Static Scheduling: Reordering instructions at compile time to improve performance.
    *   Speculation:  Executing instructions based on predictions (e.g., branch prediction).

## 2. Reorder Buffers (ROBs)

*   **Purpose:**  The ROB is a critical component in out-of-order execution processors. It serves to:
    *   Maintain the original program order of instructions.
    *   Provide temporary storage for instruction results.
    *   Detect and resolve data dependencies.
    *   Allow for precise exceptions.
*   **Functionality:**
    *   **Instruction Fetch/Decode:** Instructions are fetched and decoded from memory.
    *   **Issue:** Instructions are issued (sent to the execution units) out-of-order, based on data availability.
    *   **Execution:** Instructions execute in parallel in different execution units.
    *   **Commit (or Write-Back):**  Instructions are committed (written back to the register file or memory) *in program order* from the ROB. This ensures that the processor state is updated correctly and that exceptions are handled precisely.
*   **ROB Entries:**  Each entry typically contains:
    *   Instruction type (e.g., add, load, store).
    *   Destination register or memory location.
    *   Value to be written back (result).
    *   Status bits (e.g., issued, completed, ready to commit).
*   **Workflow:**
    1.  **Allocate:**  When an instruction is decoded, an entry is allocated in the ROB.
    2.  **Issue:**  The instruction is issued when its operands are ready (either values are in registers or have been calculated by other instructions).
    3.  **Execute:**  The instruction executes in the appropriate functional unit.
    4.  **Write Result:** The result is written into the ROB entry.
    5.  **Commit:**  The instruction commits when it reaches the head of the ROB and its result is ready. The result is then written to the register file or memory. If there's an exception, the ROB is flushed, and execution restarts at the exception handler.
*   **Benefits:**
    *   Allows out-of-order execution for improved performance.
    *   Maintains precise exception semantics.
    *   Hides latency associated with memory accesses or complex operations.
*   **Limitations:**
    *   ROB size is limited, which can restrict the amount of out-of-order execution.
    *   Complexity in managing the ROB structure.

**Example:**

Consider the following instruction sequence:

1.  `R1 = R2 + R3`
2.  `R4 = R1 * R5`
3.  `R6 = R7 + R8`

In an out-of-order processor with an ROB:

*   Instruction 1 might be issued and executed first.
*   Instruction 3 might be issued and executed before Instruction 2 (because it has no dependency on Instruction 1).
*   Instruction 2 will wait until R1 is available (after Instruction 1 has executed).
*   The ROB ensures that the results are committed in the order 1, 2, 3, guaranteeing correct program behavior.

## 3. Multiple Issue Processors

*   **Definition:** A multiple issue processor can issue (initiate execution of) multiple instructions in a single clock cycle.
*   **Types:**
    *   **Superscalar:**  Issues instructions dynamically (at runtime) based on data dependencies and resource availability.  This requires dynamic scheduling techniques and hardware support.
    *   **Very Long Instruction Word (VLIW):**  Issues instructions statically (at compile time) based on analysis performed by the compiler.  The compiler packs multiple independent instructions into a single "long" instruction word.  The hardware then executes these instructions in parallel.
*   **Key Considerations:**
    *   **Instruction Dependencies:**  Instructions issued in the same cycle must be independent (no data dependencies).
    *   **Resource Availability:**  The processor must have enough functional units to execute the issued instructions.
    *   **Issue Width:**  The number of instructions that can be issued in a single clock cycle (e.g., a 4-way superscalar processor can issue up to 4 instructions per cycle).
*   **Challenges:**
    *   **Data dependencies:** Need to detect and handle dependencies to avoid incorrect execution.
    *   **Resource contention:** Ensure that multiple instructions do not try to use the same functional unit simultaneously.
    *   **Branch prediction:** Mispredicted branches can lead to wasted cycles.

## 4. Static Scheduling

*   **Definition:** Static scheduling involves reordering instructions at compile time by the compiler to improve performance.  The compiler analyzes the code and rearranges instructions to minimize stalls due to data dependencies and resource contention.
*   **Key Techniques:**
    *   **Instruction Reordering:** Moving independent instructions earlier in the program sequence to fill pipeline stalls.
    *   **Loop Unrolling:**  Expanding a loop by replicating the loop body multiple times. This reduces loop overhead (e.g., branch instructions) and increases the potential for instruction-level parallelism.
    *   **Software Pipelining:**  Rearranging instructions within a loop to overlap the execution of different loop iterations.
*   **Advantages:**
    *   Relatively simple to implement.
    *   Reduces hardware complexity (compared to dynamic scheduling).
*   **Disadvantages:**
    *   Relies on the compiler's ability to analyze the code accurately.
    *   Less effective when dealing with unpredictable dependencies or control flow (e.g., branches with unknown targets).
    *   Code size can increase (especially with loop unrolling).
    *   Compiler needs detailed knowledge of hardware architecture.
*   **Comparison with Dynamic Scheduling:**
    | Feature          | Static Scheduling                                   | Dynamic Scheduling                                         |
    |-------------------|----------------------------------------------------|-----------------------------------------------------------|
    | Scheduling Time  | Compile Time                                      | Runtime                                                     |
    | Code Reordering  | Performed by Compiler                             | Performed by Hardware                                     |
    | Hardware Complexity| Lower                                               | Higher                                                      |
    | Adaptability    | Less adaptable to runtime conditions                  | More adaptable to runtime conditions                         |
    | Performance      | Can be effective for predictable code               | Generally better for unpredictable code, but more expensive |

## 5. Hardware Loop Unrolling

*   **Definition:** Is a hardware mechanism that replicates the body of a loop within the hardware allowing for multiple iterations to be processed concurrently, thereby improving the loop's performance.
*   **Purpose:** To increase performance by exploiting ILP and reducing loop overhead.
*   **How it Works:** The hardware dynamically unrolls the loop, duplicating the loop body multiple times in the instruction stream. This creates more opportunities for parallel execution.
*   **Advantage:** Can dynamically adapt the degree of unrolling based on available hardware resources, leading to better performance compared to static loop unrolling.
*   **Disadvantage:** Can be complex to implement in hardware, as it requires mechanisms to handle dependencies and manage resources across multiple loop iterations.

## 6. Advantages and Disadvantages of Static vs. Dynamic Approaches

| Feature | Static Scheduling | Dynamic Scheduling |
|---|---|---|
| **Advantages** |  Lower hardware complexity. <br> Less power consumption. <br>  Good performance for predictable code. |  Adapts to unpredictable code (e.g., branches, memory access patterns). <br> Tolerates long latencies (e.g., cache misses). <br>  More effective at exploiting ILP. |
| **Disadvantages** |  Less effective for unpredictable code. <br> Compiler must have detailed knowledge of the hardware.  <br> Code size can increase (e.g., loop unrolling). |  Higher hardware complexity. <br>  More power consumption.  <br> Performance depends on hardware resources (e.g., ROB size, number of functional units). |

**Key Points to Remember:**

*   ROBs are crucial for out-of-order execution and maintaining precise exceptions.
*   Multiple issue processors can improve performance by executing multiple instructions in parallel.
*   Static scheduling is a compiler-based technique for improving performance, while dynamic scheduling relies on hardware.
*   Loop unrolling is a common technique to increase ILP within loops.
*   The choice between static and dynamic scheduling depends on the characteristics of the code and the available hardware resources.

## Practice Questions/Exercises

**1. Explain the purpose of the Reorder Buffer (ROB) in an out-of-order execution processor.**

**Answer:** The ROB is a buffer that stores instructions in program order as they are fetched and decoded. It allows instructions to be executed out-of-order to improve performance but ensures that they are committed (written back to registers or memory) in the correct order.  It also handles exception handling and maintains precise exception semantics.

**2. What are the differences between superscalar and VLIW processors?**

**Answer:**
*   **Superscalar:** Issues instructions dynamically at runtime.  The hardware decides which instructions to issue in parallel based on data dependencies and resource availability.
*   **VLIW:** Issues instructions statically at compile time. The compiler determines which instructions can be executed in parallel and packs them into a single "long" instruction word.

**3. Describe two techniques used in static scheduling to improve performance.**

**Answer:**
*   **Instruction Reordering:** The compiler reorders instructions to minimize stalls caused by data dependencies.  Independent instructions are moved earlier in the sequence.
*   **Loop Unrolling:** The compiler replicates the loop body multiple times to reduce loop overhead and increase the opportunities for parallel execution.

**4. What are the limitations of static scheduling?**

**Answer:**
*   Relies on the compiler's ability to analyze the code accurately.
*   Less effective when dealing with unpredictable dependencies or control flow.
*   Code size can increase (especially with loop unrolling).
*   Requires detailed knowledge of the hardware architecture at compile time.

**5.  Consider the following code snippet.  Suggest how static scheduling might be used to improve its performance:**

```c
for (int i = 0; i < 10; i++) {
  a[i] = b[i] + c[i];
  d[i] = a[i] * e[i];
}
```

**Answer:**

Loop unrolling could be used to reduce loop overhead.  The loop could be unrolled twice, resulting in two iterations of the loop body within the unrolled loop.  The compiler can also reorder the instructions within the unrolled loop to improve parallelism.  For instance, the loads of `b[i]` and `c[i]` for both iterations could be scheduled earlier, followed by the addition and multiplication operations, potentially exploiting ILP.

**6. Explain what "issue width" means in the context of multiple issue processors.**

**Answer:** Issue width refers to the maximum number of instructions that a multiple issue processor can issue (start executing) in a single clock cycle.  For example, a processor with an issue width of 4 can issue up to four instructions in each clock cycle.

**7. What is Hardware Loop Unrolling and What are its Advantages and Disadvantages?**

**Answer:**

Hardware loop unrolling is a hardware mechanism that dynamically replicates the body of a loop, allowing multiple iterations to be processed concurrently to improve performance.

**Advantages:** Dynamically adapts the degree of unrolling.

**Disadvantages:** Complex to implement.
