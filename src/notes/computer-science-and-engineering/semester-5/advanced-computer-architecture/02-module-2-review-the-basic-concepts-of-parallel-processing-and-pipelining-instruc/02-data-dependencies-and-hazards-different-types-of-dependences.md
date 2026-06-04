---
title: "data dependencies and hazards Different types of dependences"
subject: "ADVANCED COMPUTER ARCHITECTURE"
module: "Module 2: Review the basic Concepts of Parallel Processing and Pipelining Instruction Level Parallelism"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b84f"
status: "completed"
scrapedAt: "2026-05-20T16:42:29.130Z"
---
# ADVANCED COMPUTER ARCHITECTURE - Module 2: Data Dependencies and Hazards

**Topic:** Data Dependencies and Hazards; Different Types of Dependencies

**Module:** Review of Basic Concepts of Parallel Processing and Pipelining Instruction Level Parallelism

**Learning Outcomes:**

*   Understand the concept of data dependencies and hazards in pipelined processors.
*   Identify different types of data dependencies (RAW, WAR, WAW).
*   Explain how data dependencies can lead to hazards.
*   Recognize the impact of data dependencies on Instruction Level Parallelism (ILP).
*   Illustrate dependencies with examples.

---

## 1. Introduction to Data Dependencies and Hazards

*   **Parallel Processing and Pipelining:** Aim to execute instructions concurrently to improve performance.  Pipelining breaks down instruction execution into stages (e.g., Fetch, Decode, Execute, Memory, Writeback). Parallel processing involves multiple processing units executing instructions simultaneously.

*   **Instruction Level Parallelism (ILP):**  The degree to which independent instructions can be executed in parallel.  Data dependencies limit ILP.

*   **Data Dependency:** Exists between two instructions when one instruction depends on the result of a previous instruction. It imposes an order on the execution of instructions. If dependencies are not handled correctly, the program might produce incorrect results.

*   **Hazard:** A condition that prevents the next instruction in the instruction stream from executing during its designated clock cycle. Hazards arise due to resource conflicts or data dependencies. Hazards stall the pipeline, reducing performance.  We will focus on hazards due to data dependencies.

---

## 2. Types of Data Dependencies

There are three primary types of data dependencies:

*   **Read After Write (RAW) Dependency (True Dependency):**

    *   **Definition:** Instruction `I_j` tries to read a value before instruction `I_i` writes it. `I_j` depends on `I_i`.
    *   **Pattern:** `I_i` writes to register `R`, `I_j` reads from register `R`.
    *   **Example:**
        ```assembly
        I1: R1 = R2 + R3   // I1 writes to R1
        I2: R4 = R1 * R5   // I2 reads from R1
        ```
        `I2` is RAW dependent on `I1` because `I2` needs the result of `I1` (the value in `R1`).
    *   **Hazard:** Can cause a hazard if `I2` tries to read `R1` before `I1` has written the result. This is the most common type of data dependency.

*   **Write After Read (WAR) Dependency (Anti-Dependency):**

    *   **Definition:** Instruction `I_j` tries to write to a value before instruction `I_i` reads it. `I_j` doesn't actually depend on `I_i` but must wait.
    *   **Pattern:** `I_i` reads from register `R`, `I_j` writes to register `R`.
    *   **Example:**
        ```assembly
        I1: R1 = R2 + R3   // I1 reads R2, R3
        I2: R2 = R4 * R5   // I2 writes to R2
        ```
        `I2` is WAR dependent on `I1`. `I2` must wait for `I1` to read `R2` before it writes to `R2`.
    *   **Hazard:** Can cause a hazard if `I2` completes its write before `I1` reads. This is less common with register renaming techniques.

*   **Write After Write (WAW) Dependency (Output Dependency):**

    *   **Definition:** Instruction `I_j` tries to write to a value before instruction `I_i` writes it.
    *   **Pattern:** `I_i` writes to register `R`, `I_j` writes to register `R`.
    *   **Example:**
        ```assembly
        I1: R1 = R2 + R3   // I1 writes to R1
        I2: R1 = R4 * R5   // I2 writes to R1
        ```
        `I2` is WAW dependent on `I1`. `I2` must wait for `I1` to write to `R1` before it overwrites `R1`. We want the final value of `R1` to be the result of `I2`, not `I1`.
    *   **Hazard:** Can cause a hazard if `I2` completes its write before `I1`. This is also less common with register renaming.

---

## 3. Data Dependencies and Hazards in Pipelined Processors

*   **Pipeline Stall (Bubble):** A delay introduced into the pipeline to resolve a hazard.  Stalls reduce the throughput of the pipeline.

*   **RAW Hazard in a Pipeline:**  Consider a 5-stage pipeline (IF, ID, EX, MEM, WB).  If `I2` is RAW dependent on `I1`, and `I2` enters the EX stage before `I1` writes back to the register file (WB stage), `I2` will read the old (incorrect) value. A stall is necessary.

*   **WAR and WAW Hazards in a Pipeline:** WAR and WAW hazards are less critical in simple pipelines. However, in out-of-order execution or pipelines with multiple writeback stages, these hazards can become significant.

---

## 4. Impact of Data Dependencies on ILP

*   **Limiting Factor:** Data dependencies limit the amount of ILP that can be achieved.

*   **Techniques to Mitigate Dependencies:**
    *   **Forwarding (Bypassing):**  Providing the result from an earlier pipeline stage directly to a later stage that needs it, avoiding a stall. (Primarily for RAW dependencies)
    *   **Stalling:**  Introducing bubbles into the pipeline to wait for the dependent instruction to complete.
    *   **Code Scheduling:**  Rearranging the order of instructions to increase the distance between dependent instructions. This allows more independent instructions to be executed in parallel.
    *   **Register Renaming:**  Assigning different physical registers to the same logical register to eliminate WAR and WAW dependencies.
    *   **Speculative Execution:**  Executing instructions before knowing if they will actually be needed, based on predictions (e.g., branch prediction).

---

## 5. Examples

**Example 1 (RAW):**

```assembly
I1: ADD R1, R2, R3  // R1 = R2 + R3
I2: SUB R4, R1, R5  // R4 = R1 - R5
I3: MUL R6, R7, R8  // R6 = R7 * R8
```

*   `I2` is RAW dependent on `I1` because `I2` uses the result of `I1` (R1).
*   `I3` is independent of `I1` and `I2`.

**Example 2 (WAR):**

```assembly
I1: LOAD R1, 0(R2) // Load value from memory address R2 into R1
I2: ADD R2, R3, R4 // R2 = R3 + R4
I3: STORE R5, 0(R2) // Store value of R5 to memory address R2
```

*   `I2` is WAR dependent on `I1`. `I2` should not write to R2 until `I1` has finished reading from memory at address R2.
*   `I3` is RAW dependent on `I2`.

**Example 3 (WAW):**

```assembly
I1: MUL R1, R2, R3   // R1 = R2 * R3
I2: ADD R1, R4, R5   // R1 = R4 + R5
I3: SUB R6, R1, R7   // R6 = R1 - R7
```

*   `I2` is WAW dependent on `I1` because both write to `R1`.
*   `I3` is RAW dependent on `I2`.

---

## 6. Practice Questions/Exercises

**Question 1:**  Identify the data dependencies in the following code snippet:

```assembly
I1: LOAD R1, 0(R2)
I2: ADD R3, R1, R4
I3: STORE R3, 0(R5)
I4: ADD R2, R6, R7
```

**Answer 1:**

*   `I2` is RAW dependent on `I1` (R1).
*   `I3` is RAW dependent on `I2` (R3).
*   `I4` is WAR dependent on `I1` (R2).

**Question 2:**  Explain how forwarding can help reduce stalls caused by RAW dependencies.

**Answer 2:**

Forwarding allows the result of an instruction (e.g., `I1`) to be passed directly from an earlier pipeline stage (e.g., EX or MEM) to the stage that needs it in a dependent instruction (e.g., `I2`). Without forwarding, `I2` would have to stall until `I1` reaches the WB stage to write the result to the register file.

**Question 3:**  Why are WAR and WAW dependencies less of a problem in simple, in-order pipelines compared to out-of-order execution?

**Answer 3:**

In simple, in-order pipelines, instructions are executed and completed in the order they appear in the program.  Therefore, `I1` will always complete its read operation before `I2` attempts to write in a WAR dependency, and `I1` will complete its write operation before `I2` overwrites the register in a WAW dependency. Out-of-order execution can violate this ordering, leading to incorrect results if WAR and WAW dependencies are not addressed.

**Question 4:** What type of dependency is present in the following assembly code?

```assembly
I1: MUL R1, R2, R3
I2: DIV R2, R4, R5
I3: ADD R1, R6, R7
```

**Answer 4:**

`I3` is WAW dependent on `I1`. `I3` is writing to `R1`, which was previously written to by `I1`.

---

## 7. Important Points to Remember

*   Data dependencies are fundamental limitations on ILP.
*   Understanding the different types of dependencies (RAW, WAR, WAW) is crucial for designing efficient pipelines.
*   Hazards are a direct consequence of data dependencies in pipelined processors.
*   Techniques like forwarding, stalling, and register renaming are used to mitigate the impact of dependencies and improve performance.
*   The complexity of dependency handling increases with advanced architectural features like out-of-order execution and speculative execution.
---
