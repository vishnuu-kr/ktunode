---
title: "Branch Prediction – Correlating branch predictor Dynamic Scheduling – Idea"
subject: "ADVANCED COMPUTER ARCHITECTURE"
module: "Module 2: Review the basic Concepts of Parallel Processing and Pipelining Instruction Level Parallelism"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b851"
status: "completed"
scrapedAt: "2026-05-20T16:42:30.544Z"
---
## ADVANCED COMPUTER ARCHITECTURE - Module 2: Branch Prediction & Dynamic Scheduling

**Topic:** Branch Prediction – Correlating Branch Predictor; Dynamic Scheduling – Idea

**Module Overview:** This module reviews fundamental concepts of parallel processing and pipelining, then delves into advanced techniques for improving Instruction Level Parallelism (ILP).  We'll focus on branch prediction and dynamic scheduling, specifically the correlating branch predictor and the underlying principles of dynamic scheduling.

**Learning Outcomes:**

*   Understand the limitations of static branch prediction.
*   Explain the concept of correlating branch prediction and its advantages.
*   Describe the operation of a (m,n) correlating predictor.
*   Understand the basic idea and motivation behind dynamic scheduling.
*   Explain the benefits of dynamic scheduling over static scheduling.

---

### I. Branch Prediction – Correlating Branch Predictor

**A. Limitations of Static Branch Prediction:**

*   **Static Branch Prediction:** Predicts the outcome of a branch instruction based on fixed rules, regardless of the execution history. Examples include "predict not taken" or "predict backward taken, forward not taken."
*   **Problems with Static Prediction:**
    *   **Inaccuracy:**  Static rules cannot accurately predict branches whose behavior changes over time or is dependent on input data.
    *   **Performance Degradation:** Mispredictions introduce pipeline stalls, flushing instructions and hindering performance.  The deeper the pipeline, the larger the penalty.
    *   **Ignores Branch History:**  Static prediction inherently ignores the history of past branch outcomes, missing potentially valuable information.

**B. Correlating Branch Prediction (Two-Level Adaptive Prediction):**

*   **Basic Idea:**  Leverages the correlation between the current branch and the behavior of *previous* branches to improve prediction accuracy.
*   **Key Insight:**  The outcome of a branch often depends on the outcomes of earlier branches.
*   **Two Levels:**
    *   **First Level (History Table):** Records the recent history of branch outcomes. This can be implemented as a Branch History Register (BHR).
    *   **Second Level (Pattern History Table - PHT):**  Uses the branch history (from the BHR) as an *index* to select a specific entry in the PHT. Each entry in the PHT contains a saturating counter used to predict the branch direction.
*   **Benefits:**
    *   **Increased Accuracy:** Adapts to dynamic branch behavior by considering the context of past branch outcomes.
    *   **Reduced Mispredictions:**  Significantly reduces the number of branch mispredictions, leading to improved performance.

**C. (m,n) Correlating Predictor:**

*   **Notation:** The notation (m,n) defines the parameters of the correlating predictor:
    *   `m`: The number of *previous* branches used to form the history (the length of the BHR).
    *   `n`: The number of bits used for each entry in the Pattern History Table (PHT).  These bits usually implement a saturating counter.
*   **Operation:**
    1.  **Branch History Collection:** The last 'm' branch outcomes (taken or not taken) are stored in the Branch History Register (BHR).
    2.  **Indexing the PHT:** The BHR is used as an index into the Pattern History Table (PHT).
    3.  **Prediction:** The PHT entry (a saturating counter) at the indexed location provides the prediction for the current branch.
    4.  **Update:** After the actual outcome of the branch is known, both the BHR and the corresponding PHT entry are updated.

*   **Saturating Counter:**  A counter that increments or decrements until it reaches a maximum or minimum value, respectively. Used to provide hysteresis and prevent prediction changes based on a single misprediction. Typically, a 2-bit saturating counter is used, represented as:
    *   00: Strongly Not Taken
    *   01: Weakly Not Taken
    *   10: Weakly Taken
    *   11: Strongly Taken
    Prediction is typically based on the most significant bit (MSB) of the counter. If MSB is 1, predict taken; otherwise, predict not taken.
*   **Example: (2,2) Correlating Predictor**
    *   `m = 2`: The BHR stores the outcome of the last *two* branches.
    *   `n = 2`: Each entry in the PHT is a 2-bit saturating counter.
    *   The BHR can have 2^2 = 4 possible states: 00, 01, 10, 11.
    *   The PHT will have 4 entries, each containing a 2-bit counter.
    *   **Scenario:** Consider the following sequence of branches:
        *   Branch 1: Taken
        *   Branch 2: Not Taken
        *   Branch 3: (To be predicted)
        *   The BHR would contain "10" (Taken, Not Taken). This value is used as an index into the PHT. The PHT entry at index "10" is used to predict Branch 3. If the PHT entry is "11", the prediction is "Taken."

**D. Example Code & Prediction:**

```c
if (x > 0) {  // Branch 1
    y = x * 2;
}

if (y < 10) { // Branch 2 (Depends on Branch 1)
    z = y + 5;
}

if (z > 20) { // Branch 3 (Potentially depends on Branch 2)
    w = z / 2;
}
```

*   **Why Correlating Prediction Helps:** In this example, Branch 2's outcome is *correlated* to Branch 1's outcome. If `x` is large, Branch 1 will be taken, likely making `y` large, and Branch 2 will likely *not* be taken.  A simple "predict not taken" strategy for Branch 2 would often be wrong. A correlating predictor can learn this dependency and improve prediction accuracy.

**E. Important Points to Remember:**

*   Correlating branch predictors are more complex to implement than static predictors.
*   The size of the BHR and PHT impacts performance and hardware cost. Larger tables provide more history and potentially higher accuracy but require more memory.
*   The (m,n) notation defines the predictor's configuration.
*   Saturating counters provide hysteresis to prevent prediction "flips" based on single events.
*   Effective at capturing dependencies between branches.

**F. Practice Questions:**

1.  Explain the difference between static and dynamic branch prediction.
2.  What is the purpose of the Branch History Register (BHR) in a correlating branch predictor?
3.  Describe the operation of a (1,2) correlating branch predictor.  Include the number of entries in the PHT and the size of each entry.
4.  Why are saturating counters used in the PHT?
5.  Consider a (2,2) correlating predictor.  Assume the following sequence of branch outcomes: Taken, Not Taken, Taken, Not Taken.  What is the current state of the BHR? If the PHT entry indexed by this BHR state is currently "01", what is the prediction for the next branch?  What will the PHT entry be updated to if the next branch is actually "Taken"?

**Answers:**

1.  Static prediction uses fixed rules to predict branch outcomes, ignoring past history. Dynamic prediction adapts to branch behavior by using history and updating prediction mechanisms.
2.  The BHR stores the history of recent branch outcomes. This history is used as an index into the PHT.
3.  A (1,2) predictor uses the outcome of the last single branch in the BHR. The PHT has 2^1 = 2 entries. Each entry is a 2-bit saturating counter.
4.  Saturating counters provide hysteresis, preventing predictions from changing too easily due to single mispredictions.
5.  The BHR will contain "10" (Taken, Not Taken).  A PHT entry of "01" means "Weakly Not Taken," so the prediction is "Not Taken". If the next branch is Taken, the PHT entry will be updated to "10" (Weakly Taken).

---

### II. Dynamic Scheduling – Idea

**A. Motivation for Dynamic Scheduling:**

*   **Static Scheduling Limitations:** Static scheduling (performed by the compiler) relies on known information at compile time.  It often stalls the pipeline because of:
    *   **Unpredictable Branch Outcomes:** Difficult for the compiler to accurately predict branches.
    *   **Memory Latency:** Memory access times can vary significantly, making it hard to schedule instructions optimally at compile time. Cache misses are unpredictable.
    *   **Data Dependencies:**  Static scheduling can be hampered by data dependencies between instructions, especially when memory latencies are unpredictable.
    *   **Lack of Code Flexibility:**  Static scheduling doesn't adapt to changes in input data or program behavior.

*   **Dynamic Scheduling:** Resolves dependencies and schedules instructions at *runtime* by hardware.  It allows instructions to execute out of order (OoO) if there are no dependencies and resources are available, despite the original program order.
*   **Key Idea:** To allow the processor to execute instructions out-of-order to avoid stalls caused by data dependencies, memory latency, and unpredictable branch outcomes.

**B. Benefits of Dynamic Scheduling over Static Scheduling:**

*   **Handles Unpredictable Events:**  More robust in handling events that are difficult to predict at compile time, such as cache misses and variable memory latencies.
*   **Simplified Compiler:**  Reduces the burden on the compiler to perform complex instruction scheduling.  The hardware dynamically adapts to the program's behavior.
*   **Code Portability:** Code compiled for different architectures can often run efficiently on dynamically scheduled processors, as the hardware adapts to the specific architecture.
*   **Exploits ILP Dynamically:** Dynamically exploits Instruction-Level Parallelism (ILP) by finding opportunities for out-of-order execution at runtime.  This allows the processor to overcome stalls caused by long-latency operations.
*   **Enables Speculation:** Facilitates speculative execution techniques, such as branch prediction and speculative memory access.

**C. Dynamic Scheduling Techniques (Brief Overview - will be covered in detail later):**

*   **Scoreboarding:** Tracks the data dependencies between instructions and allows instructions to execute as soon as their operands are available.
*   **Tomasulo's Algorithm:**  Uses register renaming to eliminate write-after-write (WAW) and write-after-read (WAR) hazards, improving performance. This is a more advanced form of dynamic scheduling than scoreboarding.

**D. Example Scenario:**

```assembly
Instruction 1: LOAD R1, 0(R2)  ; Load data from memory into R1
Instruction 2: ADD R3, R1, R4  ; Add R1 and R4, store result in R3
Instruction 3: MUL R5, R6, R7  ; Multiply R6 and R7, store result in R5
Instruction 4: SUB R8, R5, R9  ; Subtract R9 from R5, store result in R8
```

*   **Static Scheduling Issue:**  If the `LOAD` instruction (Instruction 1) takes a long time due to a cache miss, Instruction 2 will be stalled, even though Instruction 3 and Instruction 4 are independent of Instructions 1 and 2 and could execute.
*   **Dynamic Scheduling Solution:** A dynamically scheduled processor could allow Instruction 3 and Instruction 4 to execute *before* Instruction 2, as they don't depend on the result of the `LOAD` instruction.  Once the `LOAD` instruction completes, Instruction 2 can execute. This hides the memory latency and improves performance.

**E. Important Points to Remember:**

*   Dynamic scheduling is performed by hardware at runtime.
*   It allows instructions to execute out-of-order to avoid stalls.
*   It is more robust than static scheduling in handling unpredictable events.
*   Key benefits include improved performance, simplified compiler, and code portability.
*   Techniques like scoreboarding and Tomasulo's algorithm are used to implement dynamic scheduling.

**F. Practice Questions:**

1.  What are the limitations of static scheduling that dynamic scheduling aims to address?
2.  Explain how dynamic scheduling can improve performance in the presence of long memory latencies.
3.  Describe the basic idea behind dynamic scheduling.
4.  Why does dynamic scheduling potentially simplify the compiler's task?
5.  Give an example of a code sequence where dynamic scheduling would provide a significant performance benefit over static scheduling.  Explain why.

**Answers:**

1.  Static scheduling limitations include inability to handle unpredictable branch outcomes and memory latencies, data dependencies, and lack of code flexibility.
2.  Dynamic scheduling allows independent instructions to execute while waiting for a long memory access to complete, reducing the stall time.
3.  Dynamic scheduling allows instructions to execute out of order at runtime if there are no data dependencies or resource conflicts, despite the original program order.
4.  Dynamic scheduling shifts the responsibility for optimizing instruction scheduling from the compiler to the hardware, reducing the complexity of the compiler.
5.  See the example scenario above with LOAD, ADD, MUL, and SUB instructions.  The MUL and SUB can proceed even if the LOAD is stalled due to a cache miss. This wouldn't be possible with purely static scheduling without complex compiler analysis and potentially loop unrolling.
