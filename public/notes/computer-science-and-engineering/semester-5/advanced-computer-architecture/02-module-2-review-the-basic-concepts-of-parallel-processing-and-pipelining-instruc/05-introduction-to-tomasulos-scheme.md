---
title: "Introduction to Tomasulo’s scheme."
subject: "ADVANCED COMPUTER ARCHITECTURE"
module: "Module 2: Review the basic Concepts of Parallel Processing and Pipelining Instruction Level Parallelism"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b852"
status: "completed"
scrapedAt: "2026-05-20T16:42:31.248Z"
---
## Advanced Computer Architecture: Module 2 - Tomasulo's Scheme Introduction

**Subject:** ADVANCED COMPUTER ARCHITECTURE
**Module:** Module 2: Review the Basic Concepts of Parallel Processing and Pipelining Instruction Level Parallelism
**Topic:** Introduction to Tomasulo’s scheme.
**Description:** Topic Introduction to Tomasulo’s scheme.

**Learning Outcomes:** Upon completion of this topic, you should be able to:

*   Understand the limitations of scoreboarding.
*   Explain the basic principles behind Tomasulo's algorithm.
*   Describe the key components of Tomasulo's architecture: Reservation Stations, Common Data Bus (CDB), and Register Renaming.
*   Trace the execution of a simple code snippet through Tomasulo's algorithm.
*   Explain the advantages of Tomasulo's algorithm over scoreboarding.

---

### 1. Introduction to Tomasulo's Algorithm: Overcoming Scoreboarding Limitations

*   **Context:**  Tomasulo's algorithm is a dynamic scheduling technique developed by Robert Tomasulo at IBM in the 1960s. It was designed to improve Instruction Level Parallelism (ILP) by addressing the limitations of static scheduling and scoreboarding.

*   **Limitations of Scoreboarding:**

    *   **Centralized Control:** Scoreboarding has a central scoreboard, which can become a bottleneck as the number of functional units increases.  All instructions must go through the scoreboard.
    *   **Limited Registers:** Scoreboarding relies on a limited number of registers, which can lead to *false dependencies* (WAR and WAW hazards) stalling the pipeline even when there is no true data dependency (RAW hazard). These false dependencies limit the exploitation of ILP.
    *   **Lack of Speculation:**  Scoreboarding does not support speculation, meaning it waits for dependencies to be resolved before issuing instructions.
    *   **Common Data Bus (CDB) Bottleneck:** Although scoreboarding uses a CDB for results, the bandwidth can become a limitation with a large number of functional units writing back results.

*   **Tomasulo's Solution:** Tomasulo's algorithm overcomes these limitations through:

    *   **Distributed Control:** Instead of a centralized scoreboard, control is distributed among the *Reservation Stations*.
    *   **Register Renaming:** Using *Reservation Stations* to hold operand values eliminates WAR and WAW hazards.  The algorithm effectively renames registers dynamically.
    *   **Common Data Bus (CDB):**  The CDB is used to broadcast results from functional units to all waiting reservation stations, allowing multiple units to receive the result simultaneously. This significantly improves performance.
    *   **Dynamic Data Dependency Resolution:** Instructions are issued even if their operands are not immediately available.  They wait in Reservation Stations until the operands become available.

### 2. Key Principles of Tomasulo's Algorithm

*   **Dynamic Instruction Scheduling:** Instructions are issued out-of-order and executed out-of-order, based on data availability.
*   **Register Renaming:**  Reservation Stations act as rename registers, eliminating Write After Read (WAR) and Write After Write (WAW) hazards.
*   **Common Data Bus (CDB):**  A single common data bus allows results to be broadcast to multiple waiting functional units and register file entries simultaneously.
*   **Data Forwarding:**  When a result is computed, it's immediately forwarded to all reservation stations that need it, rather than waiting for it to be written back to the register file first.

### 3. Components of Tomasulo's Architecture

*   **Register File:**  Stores the current values of registers.
*   **Reservation Stations:**  Buffers associated with each functional unit.  Each station holds:
    *   **Op:** Operation to perform (e.g., Add, Sub, Mult).
    *   **Vj, Vk:** Values of the source operands. If an operand is not yet available, the field is empty.
    *   **Qj, Qk:** Names of the reservation stations that will produce the corresponding source operands (if not yet available).  If an operand is available in Vj or Vk, the Qj or Qk field is empty.
    *   **Busy:** Indicates whether the reservation station is currently in use.
*   **Functional Units:** Perform the actual operations (e.g., Adder, Multiplier, Load/Store Unit).  Functional units operate independently and can execute instructions out-of-order.
*   **Common Data Bus (CDB):** Broadcasts results from functional units to reservation stations and the register file.  The CDB carries the result value and the *tag* of the reservation station that produced the result.
*   **Instruction Queue:**  Holds instructions that have been fetched but not yet issued.
*   **Load/Store Buffer:** Handles memory access.

### 4. Steps in Tomasulo's Algorithm

The algorithm consists of three main phases:

1.  **Issue:**
    *   Get the next instruction from the instruction queue.
    *   If a free reservation station *RS* and a free register-file entry are available, issue the instruction to *RS* and rename the destination register (if the destination register is not the memory of the load/store buffer). The register file entry for the result register gets updated to point at *RS*. Otherwise, stall the issue of the instruction.
    *   If source operands are available in the register file, copy their values to Vj and Vk in *RS*.  Set Qj and Qk to zero (or null).
    *   If source operands are *not* available in the register file, copy the *tag* (name) of the reservation station that will produce the operand into Qj and/or Qk.  Leave Vj and Vk empty.
    *   Mark *RS* as busy.

2.  **Execute:**
    *   When all operands are available in a reservation station (Qj = Qk = 0), the functional unit begins execution.
    *   Functional units fetch operands from the reservation stations as needed.
    *   Instructions may be executed out-of-order.

3.  **Write Result (CDB Broadcast):**
    *   When the functional unit completes execution, it broadcasts the result on the CDB, along with the tag of the reservation station that produced the result.
    *   Reservation stations waiting for this result (Qj or Qk matches the tag on the CDB) capture the value and store it in Vj or Vk.
    *   The register file entry, originally pointing at *RS*, gets updated with the value from the CDB.
    *   The reservation station is marked as not busy.

### 5. Example: Tracing Tomasulo's Algorithm

Let's consider the following code snippet:

```assembly
L.D  F6, 34(R2)      ; Load F6 from memory location [R2 + 34]
L.D  F2, 45(R3)      ; Load F2 from memory location [R3 + 45]
MUL.D F0, F2, F4     ; F0 = F2 * F4
SUB.D F8, F6, F2     ; F8 = F6 - F2
DIV.D F10, F0, F6    ; F10 = F0 / F6
ADD.D F6, F8, F2     ; F6 = F8 + F2
```

Assume we have the following:

*   **Two Load Units (Load1, Load2)**
*   **One Multiply Unit (Mult1)**
*   **One Add Unit (Add1)**
*   **One Divide Unit (Div1)**

**Simplified Table Structure (Illustrative - you would need to track timestamps in a real trace):**

| Instruction | Issue | Execute | Write Result (CDB) |
|-------------|-------|---------|--------------------|
| L.D F6, 34(R2) | Load1    |  Load1         | Load1  |
| L.D F2, 45(R3) | Load2    |  Load2         | Load2  |
| MUL.D F0, F2, F4 | Mult1    | Wait for F2, F4  | Mult1  |
| SUB.D F8, F6, F2 | Add1     | Wait for F6, F2  | Add1   |
| DIV.D F10, F0, F6| Div1     | Wait for F0, F6  | Div1   |
| ADD.D F6, F8, F2 | Add1   | Wait for F8, F2  | Add1  |

**Explanation:**

1.  **L.D F6, 34(R2) and L.D F2, 45(R3)**: These load instructions are issued to Load1 and Load2, respectively.  They fetch data from memory, execute, and then broadcast the results on the CDB.  The register file entries for F6 and F2 are updated.
2.  **MUL.D F0, F2, F4:**  This instruction is issued to Mult1.  It waits for F2 and F4 to become available.  Once they are, Mult1 executes and broadcasts the result.
3.  **SUB.D F8, F6, F2:** This instruction is issued to Add1.  It waits for F6 and F2 to become available. Once they are, Add1 executes and broadcasts the result.
4.  **DIV.D F10, F0, F6:** This instruction is issued to Div1. It waits for F0 and F6 to become available.  Note that this instruction is dependent on the output of MUL.D and L.D, exhibiting a RAW hazard.
5.  **ADD.D F6, F8, F2:** This instruction is issued to Add1. It waits for F8 and F2 to become available.  This overwrites the earlier load into F6 showing register renaming at work.

**Key Points:**

*   The instructions are *issued* in program order.
*   The instructions can *execute* out-of-order based on data dependencies.  For example, the SUB.D instruction might execute before the MUL.D instruction if F6 and F2 are available before F2 and F4.
*   The *write result* (CDB broadcast) occurs when the functional unit completes execution.

### 6. Advantages of Tomasulo's Algorithm over Scoreboarding

*   **More ILP:**  Tomasulo's algorithm allows for higher levels of ILP by eliminating WAR and WAW hazards through register renaming.
*   **Distributed Control:**  The distributed control with reservation stations reduces the bottleneck associated with the central scoreboard.
*   **Handles Memory Dependencies:** Load/Store units in Tomasulo's algorithm can be further enhanced to resolve memory dependencies.
*   **Robustness:** Tomasulo's scheme is more robust in the face of varying latencies of functional units.

### 7. Disadvantages of Tomasulo's Algorithm

*   **Increased Complexity:** Tomasulo's algorithm is more complex to implement than scoreboarding.
*   **Increased Hardware Cost:** Reservation stations, the CDB, and the associated control logic add to the hardware cost.
*   **Common Data Bus (CDB) Complexity:**  The CDB must handle multiple sources and destinations, adding complexity. While the CDB improves upon scoreboarding, it can still become a bottleneck with a significantly high number of functional units.

### 8. Important Points to Remember

*   Tomasulo's algorithm uses *dynamic* scheduling.
*   *Register renaming* is a crucial part of Tomasulo's algorithm.
*   The *CDB* is the mechanism for broadcasting results.
*   Reservation stations hold instructions waiting for operands.
*   Understand the differences between the Issue, Execute, and Write Result phases.

### 9. Practice Questions and Exercises

**Question 1:**  What type of hazards are eliminated by register renaming in Tomasulo's algorithm?

**Answer:**  WAR (Write After Read) and WAW (Write After Write) hazards.

**Question 2:**  Explain the role of the Common Data Bus (CDB) in Tomasulo's algorithm.

**Answer:** The CDB broadcasts the result of a completed operation from a functional unit to all reservation stations and the register file simultaneously. It allows multiple units and the register file to receive the result in the same clock cycle.

**Question 3:**  What are the main components of a reservation station?

**Answer:** Op (operation), Vj (value of operand 1), Vk (value of operand 2), Qj (name of reservation station producing operand 1), Qk (name of reservation station producing operand 2), and Busy (indicates whether the station is in use).

**Exercise:**

Trace the execution of the following code snippet using Tomasulo's algorithm, assuming you have one Add unit (Add1), one Multiply unit (Mult1), and one Load unit (Load1):

```assembly
L.D F0, 0(R1)
MUL.D F2, F0, F4
ADD.D F6, F2, F8
```

Show the contents of the Reservation Stations (Add1, Mult1, Load1) and the Register File (F0, F2, F4, F6, F8) at each stage of the execution (Issue, Execute, Write Result). Assume F4 and F8 already have values in the register file.
